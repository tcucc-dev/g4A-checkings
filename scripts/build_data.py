#!/usr/bin/env python3
"""
build_data.py — Refresh data.json for all 4 TCU depts from BigQuery + crawl.

Usage:
    python scripts/build_data.py
    python scripts/build_data.py --dept itm

To add a new dept: add an entry to DEPTS, copy itm/ to <newdept>/, edit the new
dept's index.html <title>. That's it. No new files needed.
"""
import argparse
import json
import os
import re
import sys
import urllib.request
import urllib.error
from datetime import date

sys.path.insert(0, 'C:/ai_auto/scripts')
from fetch_dept_report import (
    get_bq_client, resolve_periods, fetch_kpis, fetch_weekly_trends,
    fetch_daily_trends,
    taiwan_date_sql_ga4,
    PROJECT, DATASET,
)

REPO_ROOT = r"C:/ai_auto/repo/g4A-checkings"

# ===== Supabase =====
# Reads env SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY. Service role key is
# required to bypass RLS for INSERT/UPDATE. Service role key MUST stay out
# of the browser bundle — only this script uses it.
SUPABASE_URL = os.environ.get('SUPABASE_URL')
SUPABASE_SERVICE_KEY = os.environ.get('SUPABASE_SERVICE_ROLE_KEY')


def supabase_request(path, method='GET', body=None, headers=None):
    """Generic Supabase REST call. Returns parsed JSON or raises."""
    if not SUPABASE_URL or not SUPABASE_SERVICE_KEY:
        raise RuntimeError('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set')
    url = f'{SUPABASE_URL}/rest/v1{path}'
    h = {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': f'Bearer {SUPABASE_SERVICE_KEY}',
        'Content-Type': 'application/json',
    }
    if headers:
        h.update(headers)
    data = json.dumps(body).encode('utf-8') if body is not None else None
    req = urllib.request.Request(url, data=data, headers=h, method=method)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            text = resp.read().decode('utf-8')
            return json.loads(text) if text else None
    except urllib.error.HTTPError as e:
        body_text = e.read().decode('utf-8', 'ignore')
        raise RuntimeError(f'Supabase {method} {path} → {e.code}: {body_text[:400]}')


def upsert_daily(dept_key, row):
    """Upsert one row into the dept table (typed columns only).
    Requires the dept table to have a UNIQUE constraint on `date`."""
    headers = {'Prefer': 'resolution=merge-duplicates'}
    return supabase_request(
        f'/{dept_key}?on_conflict=date',
        method='POST',
        body=row,
        headers=headers,
    )


def upsert_lists(dept_key, date_iso, row):
    """Upsert JSONB list columns for a specific date.
    Called after upsert_daily — PATCHes the same row by date filter."""
    if not row:
        return None
    headers = {'Prefer': 'resolution=merge-duplicates'}
    return supabase_request(
        f'/{dept_key}?date=eq.{date_iso}',
        method='PATCH',
        body=row,
        headers=headers,
    )

# ===== Department config — single source of truth =====
DEPTS = {
    'itm': {
        'siteName': '資訊科技與管理系',
        'siteDomain': 'itm.tcu.edu.tw',
        'bqFilter': "site_name = '資訊科技與管理系'",
        'bqUrlFilter': "url LIKE '%itm.tcu.edu.tw%'",
        'brandTerms': ['慈濟大學','慈大','慈濟','Tzu Chi','TCU','tcu','資管','資訊科技與管理','ITM','itm'],
    },
    'nc': {
        'siteName': '護理學系',
        'siteDomain': 'nc.tcu.edu.tw',
        'bqFilter': "site_name = '護理學院'",
        'bqUrlFilter': "url LIKE '%nc.tcu.edu.tw%'",
        'brandTerms': ['慈濟大學','慈大','慈濟','Tzu Chi','TCU','tcu','護理','護理學院','護理系','nc'],
    },
    'www': {
        'siteName': '慈濟大學中文版首頁',
        'siteDomain': 'www.tcu.edu.tw',
        'bqFilter': "site_name = '慈濟大學中文版首頁'",
        'bqUrlFilter': "url LIKE '%www.tcu.edu.tw%'",
        'brandTerms': ['慈濟大學','慈大','慈濟','Tzu Chi','TCU','tcu'],
    },
    'freshman': {
        'siteName': '慈濟大學新生網站',
        'siteDomain': 'freshman.tcu.edu.tw',
        'bqFilter': "site_name = '慈大新鮮人'",
        'bqUrlFilter': "url LIKE '%freshman.tcu.edu.tw%'",
        'brandTerms': ['慈濟大學','慈大','慈濟','Tzu Chi','TCU','tcu','新生','freshman'],
    },
}

# IMPORTANT: To add a new department, add an entry here. Copy itm/ folder
# to <newdept>/, edit the new index.html <title>, and the script handles
# everything else (BQ queries, issues, stale pages, 52-week trends).


# ===== Helpers =====

def safe_div(a, b):
    try:
        return (a / b) if b else 0
    except Exception:
        return 0


# ===== Timezone =====
# The `date` column in all_units_summary (GA4) is assigned in UTC, but Taiwan
# users see their GA4 dashboard in Asia/Taipei (UTC+8). All GA4 date filters,
# GROUP BY date, and aggregations must convert event_timestamp to Taiwan DATE
# first, then use that derived column instead of `date`.
#
# GSC's all_gsc_summary only has a DATE-typed data_date column (no row-level
# timestamp), so we cannot per-row reconstruct Taiwan-time. We treat data_date
# as already Taiwan-aligned (the export is assumed to use Asia/Taipei TZ). If
# the GSC export is later confirmed to be UTC, this needs a re-export with
# the BigQuery Data Transfer Service configured for TZ=Asia/Taipei.
TAIPEI_OFFSET_HOURS = 8  # Taiwan = UTC+8

def taiwan_date_sql_ga4():
    """SQL expression: converts GA4 event_timestamp (INT64 microseconds, UTC)
    into a Taiwan DATE by adding the +8h offset before truncating to DATE."""
    return (
        f"DATE(TIMESTAMP_ADD(TIMESTAMP_MICROS(event_timestamp), "
        f"INTERVAL {TAIPEI_OFFSET_HOURS} HOUR))"
    )


# ===== BQ queries =====

def fetch_audience(client, cfg, current):
    """country / device / source breakdown for current period."""
    q = f"""
    SELECT
      country,
      device_category,
      CONCAT(IFNULL(source,''),'/',IFNULL(medium,'')) AS source_medium,
      COUNT(DISTINCT ga_session_id) AS sessions,
      COUNT(DISTINCT user_pseudo_id) AS users
    FROM `{PROJECT}.{DATASET}.all_units_summary`
    WHERE {cfg['bqFilter']} AND {taiwan_date_sql_ga4()} BETWEEN '{current['start'].replace('/', '-')}' AND '{current['end'].replace('/', '-')}'
    GROUP BY country, device_category, source_medium
    """
    rows = list(client.query(q).result())
    country = {}
    device = {}
    source = {}
    total_sessions = 0
    for r in rows:
        total_sessions += int(r.sessions or 0)
        c = r.country or '(not set)'
        country[c] = country.get(c, 0) + int(r.sessions or 0)
        d = (r.device_category or 'desktop').lower()
        device[d] = device.get(d, 0) + int(r.sessions or 0)
        sm = r.source_medium or '(direct)/(none)'
        source[sm] = source.get(sm, 0) + int(r.sessions or 0)

    # BigQuery returns full country names ('Taiwan', 'China', etc.)
    zh_to_zh = {
        'Taiwan':'臺灣','China':'中國','United States':'美國','Thailand':'泰國',
        'Malaysia':'馬來西亞','Hong Kong':'香港','Singapore':'新加坡','Japan':'日本',
        'South Korea':'韓國','Vietnam':'越南','Philippines':'菲律賓','Indonesia':'印尼',
        'India':'印度','Australia':'澳洲','United Kingdom':'英國','Canada':'加拿大',
        'Germany':'德國','France':'法國','Myanmar (Burma)':'緬甸','Cambodia':'柬埔寨',
        'Laos':'寮國','Mongolia':'蒙古','Nepal':'尼泊爾','Macao':'澳門',
    }
    dev_zh = {'desktop': '桌機', 'mobile': '手機', 'tablet': '平板'}

    def to_list(d, name_fn):
        total = sum(d.values()) or 1
        out = []
        for k, v in sorted(d.items(), key=lambda x: -x[1])[:6]:
            out.append({'name': name_fn(k), 'sessions': int(v), 'users': 0, 'share': round(v / total * 100, 1)})
        return out

    src_out = []
    src_total = sum(source.values()) or 1
    for k, v in sorted(source.items(), key=lambda x: -x[1])[:6]:
        parts = k.split('/', 1)
        name = parts[0] or '(direct)'
        medium = parts[1] if len(parts) > 1 else '(none)'
        src_out.append({'name': name, 'medium': medium, 'sessions': int(v), 'users': 0, 'share': round(v / src_total * 100, 1)})

    return {
        'country': to_list(country, lambda k: zh_to_zh.get(k, k)),
        'device': [{'name': dev_zh.get(k, k), 'sessions': int(v), 'users': 0, 'share': round(v / (sum(device.values()) or 1) * 100, 1)}
                    for k, v in sorted(device.items(), key=lambda x: -x[1])[:3]],
        'source': src_out,
        'total': total_sessions,
    }


def fetch_top_keywords(client, cfg, current, brand_terms, limit=20):
    q = f"""
    WITH qstats AS (
      SELECT query, url,
             SUM(impressions) AS impressions, SUM(clicks) AS clicks,
             SUM(sum_position) AS sum_pos
      FROM `{PROJECT}.{DATASET}.all_gsc_summary`
      WHERE {cfg['bqUrlFilter']} AND data_date BETWEEN '{current['start'].replace('/', '-')}' AND '{current['end'].replace('/', '-')}'
      GROUP BY query, url
    ),
    top_url AS (
      SELECT query, url, impressions, clicks, sum_pos,
             ROW_NUMBER() OVER (PARTITION BY query ORDER BY impressions DESC) AS rn
      FROM qstats
    )
    SELECT query, url AS landing, impressions, clicks, sum_pos
    FROM top_url WHERE rn = 1
    ORDER BY impressions DESC LIMIT {limit}
    """
    out = []
    for r in client.query(q).result():
        kw = r.query or ''
        imp = int(r.impressions or 0)
        clk = int(r.clicks or 0)
        ctr = round(safe_div(clk, imp) * 100, 2)
        pos = round(safe_div(int(r.sum_pos or 0), imp), 1)
        is_brand = any(t.lower() in kw.lower() for t in brand_terms)
        out.append({'kw': kw, 'brand': is_brand, 'impressions': imp, 'clicks': clk,
                    'ctr': ctr, 'pos': pos, 'landing': r.landing or ''})
    return out


def fetch_top_pages(client, cfg, current, limit=10):
    q = f"""
    SELECT url, SUM(impressions) AS impressions, SUM(clicks) AS clicks, SUM(sum_position) AS sum_pos
    FROM `{PROJECT}.{DATASET}.all_gsc_summary`
    WHERE {cfg['bqUrlFilter']} AND data_date BETWEEN '{current['start'].replace('/', '-')}' AND '{current['end'].replace('/', '-')}'
    GROUP BY url ORDER BY impressions DESC LIMIT {limit}
    """
    out = []
    for r in client.query(q).result():
        imp = int(r.impressions or 0)
        clk = int(r.clicks or 0)
        ctr = round(safe_div(clk, imp) * 100, 2)
        pos = round(safe_div(int(r.sum_pos or 0), imp), 1)
        out.append({'url': r.url, 'impressions': imp, 'clicks': clk, 'ctr': ctr, 'pos': pos, 'users': 0})
    return out


def fetch_gsc_trends(client, cfg, trend):
    q = f"""
    SELECT FORMAT_DATE('%m/%d', data_date) AS week,
           SUM(impressions) AS impressions, SUM(clicks) AS clicks
    FROM `{PROJECT}.{DATASET}.all_gsc_summary`
    WHERE {cfg['bqUrlFilter']} AND data_date BETWEEN '{trend['start'].replace('/', '-')}' AND '{trend['end'].replace('/', '-')}'
    GROUP BY week ORDER BY MIN(data_date)
    """
    return [{'week': r.week, 'impressions': int(r.impressions), 'clicks': int(r.clicks)}
            for r in client.query(q).result()]


def fetch_52w_trends(client, cfg):
    """Pull 52 weeks of weekly aggregates from GA4 + GSC.

    Returns dict with 'ga4' and 'gsc' arrays (sorted oldest → newest).
    Each GA4 week: {week_start: 'YYYY-MM-DD', week_label: 'MM/DD',
                    sessions: int, users: int, pageviews: int}
    Each GSC week: {week_start: 'YYYY-MM-DD', week_label: 'MM/DD',
                    impressions: int, clicks: int}
    If a week exists in GA4 but has no GSC data, the GSC row is filled with zeros.
    """
    ga4_q = f"""
    SELECT DATE_TRUNC({taiwan_date_sql_ga4()}, WEEK(SUNDAY)) AS week_start,
           COUNT(DISTINCT ga_session_id) AS sessions,
           COUNT(DISTINCT user_pseudo_id) AS users,
           COUNTIF(event_name='page_view') AS pageviews
    FROM `{PROJECT}.{DATASET}.all_units_summary`
    WHERE {cfg['bqFilter']} AND {taiwan_date_sql_ga4()} >= DATE_SUB(CURRENT_DATE(), INTERVAL 53 WEEK)
    GROUP BY week_start
    ORDER BY week_start
    """
    gsc_q = f"""
    SELECT DATE_TRUNC(data_date, WEEK(SUNDAY)) AS week_start,
           SUM(impressions) AS impressions,
           SUM(clicks) AS clicks
    FROM `{PROJECT}.{DATASET}.all_gsc_summary`
    WHERE {cfg['bqUrlFilter']} AND data_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 53 WEEK)
    GROUP BY week_start
    ORDER BY week_start
    """

    def _ws_label(ws):
        """Normalize a BigQuery DATE/date-like to (YYYY-MM-DD, MM/DD)."""
        if hasattr(ws, 'strftime'):
            return ws.strftime('%Y-%m-%d'), ws.strftime('%m/%d')
        s = str(ws)
        return s[:10], s[5:10].replace('-', '/')

    ga4_rows = []
    for r in client.query(ga4_q).result():
        ws_str, label = _ws_label(r.week_start)
        ga4_rows.append({
            'week_start': ws_str,
            'week_label': label,
            'sessions': int(r.sessions or 0),
            'users': int(r.users or 0),
            'pageviews': int(r.pageviews or 0),
        })

    gsc_by_week = {}
    for r in client.query(gsc_q).result():
        ws_str, label = _ws_label(r.week_start)
        gsc_by_week[ws_str] = {
            'week_start': ws_str,
            'week_label': label,
            'impressions': int(r.impressions or 0),
            'clicks': int(r.clicks or 0),
        }

    # Align GSC rows to GA4 weeks; fill missing GSC weeks with zeros.
    gsc_rows = []
    for ga4 in ga4_rows:
        ws = ga4['week_start']
        match = gsc_by_week.get(ws)
        if match is not None:
            gsc_rows.append(match)
        else:
            gsc_rows.append({
                'week_start': ws,
                'week_label': ga4['week_label'],
                'impressions': 0,
                'clicks': 0,
            })

    return {'ga4': ga4_rows, 'gsc': gsc_rows}


# ===== Issue detection (HTML crawl) =====

DUE_BY_SEV = {'high': '2026-08-30', 'medium': '2026-09-15', 'low': '2026-09-30'}

ISSUE_RULES = [
    ('jsonld_missing',   lambda h: 'application/ld+json' not in h,
     'high',   '首頁缺 JSON-LD 結構化資料（AI 搜尋引擎看不懂你們是誰）', '電算中心'),
    ('h1_duplicate',     lambda h: h.lower().count('<h1') >= 2,
     'medium', '首頁 H1 標籤重複（影響 SEO）',                              '單位網站管理人'),
    ('canonical_missing',lambda h: 'rel="canonical"' not in h and "rel='canonical'" not in h,
     'medium', '首頁缺 canonical 標籤',                                       '電算中心'),
    ('og_missing',       lambda h: not all(t in h for t in ['og:title','og:description','og:image']),
     'low',    '缺 OG 社群分享標籤（Facebook/Line 分享不會有預覽）',          '單位網站管理人'),
    ('hreflang_missing', lambda h: 'hreflang="en' not in h and 'hreflang=\'en' not in h,
     'low',    '缺英文版 hreflang 標籤',                                     '電算中心'),
    ('meta_desc_empty',  lambda h: re.search(r'<meta\s+name=["\']description["\'][^>]*content=["\']\s*["\']', h, re.IGNORECASE) is not None,
     'medium', '首頁 meta description 為空',                                 '單位網站管理人'),
    ('old_domain',       lambda h: 'tcust.edu.tw' in h,
     'medium', '出現舊網域連結（tcust.edu.tw）',                             '電算中心'),
]


def detect_issues(site_url):
    """Crawl homepage, return up to 5 issues sorted by severity."""
    issues = []
    try:
        req = urllib.request.Request(site_url, headers={'User-Agent': 'TCU-WebInsight/3.0'})
        with urllib.request.urlopen(req, timeout=8) as resp:
            html = resp.read().decode('utf-8', 'ignore')
    except Exception as e:
        return [{'severity': 'high', 'title': f'無法連線首頁（{type(e).__name__}）',
                 'desc': f'crawl failed: {str(e)[:80]}', 'owner': '電算中心', 'due': '2026-08-30'}]

    sev_order = {'high': 0, 'medium': 1, 'low': 2}
    for rule_id, fn, sev, title, owner in ISSUE_RULES:
        try:
            if fn(html):
                issues.append({'severity': sev, 'title': title,
                               'desc': f'規則 {rule_id} 觸發於 {site_url}',
                               'owner': owner, 'due': DUE_BY_SEV[sev]})
        except Exception:
            pass
    issues.sort(key=lambda x: sev_order.get(x['severity'], 9))
    return issues[:5]


# ===== Stale page detection =====

STALE_REGEX = re.compile(
    r'(?:學年度[^0-9]{0,5}(10[0-9]|11[0-4])|'
    r'AD\s*年[^0-9]{0,5}(10[0-9]|11[0-4])|'
    r'\[舊\]|舊版|archi(?:ve|ved))',
    re.IGNORECASE,
)


def detect_stale_pages(client, cfg, current):
    """For top 30 GSC pages, detect stale markers in HTML or 404 status."""
    q = f"""
    SELECT url, SUM(impressions) AS impressions, SUM(clicks) AS clicks, SUM(sum_position) AS sum_pos
    FROM `{PROJECT}.{DATASET}.all_gsc_summary`
    WHERE {cfg['bqUrlFilter']} AND data_date BETWEEN '{current['start'].replace('/', '-')}' AND '{current['end'].replace('/', '-')}'
    GROUP BY url ORDER BY impressions DESC LIMIT 30
    """
    stale = []
    for r in client.query(q).result():
        url = r.url
        imp = int(r.impressions or 0)
        clk = int(r.clicks or 0)
        pos = round(safe_div(int(r.sum_pos or 0), imp), 1)
        html = ''
        status_code = 200
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'TCU-WebInsight/3.0'})
            with urllib.request.urlopen(req, timeout=5) as resp:
                html = resp.read().decode('utf-8', 'ignore')
                status_code = resp.status
        except urllib.error.HTTPError as e:
            status_code = e.code
        except Exception:
            continue

        # Treat 404 as definitively stale
        if status_code == 404:
            stale.append({'url': url, 'year': None, 'impressions': imp,
                          'clicks': clk, 'pos': pos, 'note': 'HTTP 404 失效連結'})
            continue

        m = STALE_REGEX.search(html)
        if not m:
            continue
        year = None
        for g in m.groups():
            if g and g.isdigit():
                year = int(g)
                break
        note = f'{year} 學年度舊頁' if year else '包含舊版本標記'
        stale.append({'url': url, 'year': year, 'impressions': imp,
                      'clicks': clk, 'pos': pos, 'note': note})
    return stale


# ===== Optional: legacy GEO / evidence =====

def load_legacy_geo(key):
    path = os.path.join(REPO_ROOT, 'legacy', key, 'src', 'generated-report-data.js')
    if not os.path.exists(path):
        return None
    try:
        with open(path, 'r', encoding='utf-8') as f:
            txt = f.read()
        m = re.search(r'geo\s*:\s*\{', txt)
        if not m:
            return None
        # walk braces to find the matching closing }
        start = m.end() - 1
        depth = 0
        end = start
        for i in range(start, len(txt)):
            if txt[i] == '{':
                depth += 1
            elif txt[i] == '}':
                depth -= 1
                if depth == 0:
                    end = i
                    break
        return eval('(' + txt[start:end + 1] + ')')
    except Exception:
        return None


def load_legacy_evidence(key):
    path = os.path.join(REPO_ROOT, 'legacy', key, 'src', 'generated-evidence-data.js')
    if not os.path.exists(path):
        return []
    try:
        with open(path, 'r', encoding='utf-8') as f:
            txt = f.read()
        arr_match = re.search(r'EVIDENCE_REPORTS_RAW\s*=\s*(\[[\s\S]*?\n\])\s*;', txt)
        if not arr_match:
            return []
        arr = eval('(' + arr_match.group(1) + ')')
        out = []
        for e in arr[:20]:
            rows = e.get('rows')
            if isinstance(rows, list):
                rows = len(rows)
            else:
                rows = e.get('row_count', '-')
            out.append({
                'id': e.get('id', ''),
                'title': e.get('title') or e.get('name', ''),
                'rows': rows,
                'table': e.get('source_table', ''),
                'code': e.get('query_code', ''),
                'status': e.get('status', '正常'),
            })
        return out
    except Exception:
        return []


# ===== Build per-dept =====

def build_for_dept(client, key, cfg):
    print(f'\n=== {key} ({cfg["siteName"]}) ===')

    # Auto-detect www bqFilter
    if not cfg.get('bqFilter'):
        q = (f"SELECT DISTINCT site_name FROM `{PROJECT}.{DATASET}.all_units_summary` "
             f"WHERE page_location LIKE '%{cfg['siteDomain']}%' LIMIT 5")
        rows = list(client.query(q).result())
        if rows:
            cfg['bqFilter'] = f"site_name = '{rows[0].site_name}'"
            print(f'  auto-detected bqFilter: {cfg["bqFilter"]}')
        else:
            cfg['bqFilter'] = f"page_location LIKE '%{cfg['siteDomain']}%'"

    periods = resolve_periods(client, cfg)
    print(f'  periods: {periods["current"]["start"]} – {periods["current"]["end"]}')

    raw_kpis = fetch_kpis(client, cfg, periods['current'])
    prev_kpis = fetch_kpis(client, cfg, periods['previous'])

    weekly = fetch_weekly_trends(client, cfg, periods['trend'])
    gsc_weekly = fetch_gsc_trends(client, cfg, periods['trend'])

    if len(weekly) >= 2:
        avg_users = sum(w['users'] for w in weekly[:-1]) / max(1, len(weekly) - 1)
        avg_sessions = sum(w['sessions'] for w in weekly[:-1]) / max(1, len(weekly) - 1)
    else:
        avg_users = weekly[0]['users'] if weekly else 0
        avg_sessions = weekly[0]['sessions'] if weekly else 0

    if len(gsc_weekly) >= 2:
        avg_clicks = sum(w['clicks'] for w in gsc_weekly[:-1]) / max(1, len(gsc_weekly) - 1)
        avg_impressions = sum(w['impressions'] for w in gsc_weekly[:-1]) / max(1, len(gsc_weekly) - 1)
        avg_ctr = safe_div(avg_clicks, avg_impressions) * 100
    else:
        avg_clicks = avg_impressions = avg_ctr = 0

    def parse_pct(s):
        try:
            return float(str(s).rstrip('%').replace(',', ''))
        except Exception:
            return 0.0

    kpis = {
        'users': {
            'label': raw_kpis[0]['k'],
            'value': int(raw_kpis[0]['v']),
            'trend_pct': round(safe_div(int(raw_kpis[0]['v']) - int(prev_kpis[0]['v']), int(prev_kpis[0]['v'])) * 100, 1) if int(prev_kpis[0]['v']) else 0.0,
            'avg': f'前 8 週平均 {int(avg_users)}',
            'src': raw_kpis[0]['src'],
        },
        'sessions': {
            'label': raw_kpis[1]['k'],
            'value': int(raw_kpis[1]['v']),
            'trend_pct': round(safe_div(int(raw_kpis[1]['v']) - int(prev_kpis[1]['v']), int(prev_kpis[1]['v'])) * 100, 1) if int(prev_kpis[1]['v']) else 0.0,
            'avg': f'前 8 週平均 {int(avg_sessions)}',
            'src': raw_kpis[1]['src'],
        },
        'gsc': {
            'label': raw_kpis[2]['k'],
            'value': int(raw_kpis[2]['v']),
            'trend_pct': round(safe_div(int(raw_kpis[2]['v']) - int(prev_kpis[2]['v']), int(prev_kpis[2]['v'])) * 100, 1) if int(prev_kpis[2]['v']) else 0.0,
            'avg': f'前 8 週平均 {int(avg_clicks)}',
            'src': raw_kpis[2]['src'],
        },
        'ctr': {
            'label': raw_kpis[3]['k'],
            'value': raw_kpis[3]['v'],
            'trend_pct': round(parse_pct(raw_kpis[3]['v']) - parse_pct(prev_kpis[3]['v']), 2),
            'avg': f'前 8 週平均 {avg_ctr:.2f}%',
            'src': raw_kpis[3]['src'],
        },
    }

    audience = fetch_audience(client, cfg, periods['current'])
    top_keywords = fetch_top_keywords(client, cfg, periods['current'], cfg['brandTerms'], limit=20)
    top_pages = fetch_top_pages(client, cfg, periods['current'], limit=10)
    trends52w = fetch_52w_trends(client, cfg)
    print(f'  52w trends: {len(trends52w["ga4"])} weeks')
    daily_trends = fetch_daily_trends(client, cfg, days=180)
    print(f'  daily_trends: {len(daily_trends)} days (first={daily_trends[0]["date"] if daily_trends else "n/a"}, last={daily_trends[-1]["date"] if daily_trends else "n/a"})')

    site_url = f'https://{cfg["siteDomain"]}/'
    print(f'  detecting issues from {site_url}')
    top_issues = detect_issues(site_url)
    print(f'  found {len(top_issues)} issues')

    print('  detecting stale pages...')
    stale_pages = detect_stale_pages(client, cfg, periods['current'])
    print(f'  found {len(stale_pages)} stale pages')

    geo = load_legacy_geo(key)
    evidence = load_legacy_evidence(key)

    today = date.today().strftime('%Y/%m/%d')
    out = {
        'meta': {
            'siteName': cfg['siteName'],
            'siteDomain': cfg['siteDomain'],
            'reportVersion': 'v3.0',
            'updatedAt': today,
            'maxDateGa4': periods.get('maxDateGa4'),
            'maxDateGsc': periods.get('maxDateGsc'),
            'sourceCount': 3,
        },
        'periods': {
            'current': periods['current'],
            'previous': periods['previous'],
            'trend': periods['trend'],
        },
        'kpis': kpis,
        'trends52w': trends52w,
        'daily_trends': daily_trends,
        'topKeywords': top_keywords,
        'topPages': top_pages,
        'audience': audience,
        'topIssues': top_issues,
        'geo': geo,
        'evidence': evidence,
        'stalePages': stale_pages,
    }
    # Upsert to Supabase (v5 schema — 4 per-dept tables: itm/nc/www/freshman).
    # One row per date in the last 180 days so the dropdown's 1d/.../6mo
    # windows sum to correct totals via `aggregateRows()` in report.js.
    # Per-day KPIs are reused from `daily_trends` (already fetched above) — no
    # extra BQ queries needed. JSONB list columns are stored ONLY on the today
    # row to keep the 180-row table size bounded (otherwise 180×list bytes ≈
    # tens of MB of duplicated JSONB). Falls back gracefully if env vars are
    # missing — data.json still gets written so the dept report keeps working
    # offline / on dev machines.
    try:
        from datetime import timedelta
        today_d = date.today()
        days_back = 180
        start_180d = today_d - timedelta(days=days_back - 1)
        today_iso = today_d.isoformat()
        window_dates = [
            (start_180d + timedelta(days=i)).isoformat()
            for i in range(days_back)
        ]
        # ponytail: filter in Python instead of re-querying BQ — daily_trends
        # already covers the last 180 days with the exact per-day KPI shape we
        # need. Ceiling: if daily_trends window ever shrinks below 180d, fall
        # back to a per-day BQ query here.
        daily_by_date = {d['date']: d for d in out['daily_trends']}
        source_max_date = out['meta'].get('maxDateGa4') or today_iso

        # Period-level snapshot — only attached to the today row.
        lists_row = {
            'keywords': out['topKeywords'],
            'top_pages': out['topPages'],
            'issues': out['topIssues'],
            'stale_pages': out['stalePages'],
            'weekly_trends': out['trends52w'],
            'daily_trends': out['daily_trends'],
            'audience': out['audience'],
            # cta_clicks, user_paths, geo: empty for now (admin query)
        }

        n = 0
        for date_iso in window_dates:
            d = daily_by_date.get(date_iso) or {}
            gsc_clicks = int(d.get('gsc_clicks') or 0)
            gsc_imps = int(d.get('gsc_impressions') or 0)
            ctr_pct = round((gsc_clicks / gsc_imps * 100) if gsc_imps else 0, 2)
            typed_row = {
                'date': date_iso,
                'users': int(d.get('users') or 0),
                'sessions': int(d.get('sessions') or 0),
                'pageviews': int(d.get('pageviews') or 0),
                'gsc_clicks': gsc_clicks,
                'gsc_impressions': gsc_imps,
                'ctr_pct': ctr_pct,
                'bounce_rate': 0.0,        # TODO: add BQ query when needed
                'avg_session_sec': 0.0,    # TODO: add BQ query when needed
                'source_max_date': source_max_date,
            }
            upsert_daily(key, typed_row)
            if date_iso == today_iso:
                upsert_lists(key, date_iso, lists_row)
            n += 1

        # Cleanup: drop legacy rows outside the 180-day window (mixed-strategy
        # week-sums from before this change). Cheap — one DELETE round-trip.
        supabase_request(f'/{key}?date=lt.{start_180d.isoformat()}', method='DELETE')
        print(f'  ✓ upserted {n} per-day rows for {key} ({start_180d.isoformat()} – {today_iso})')
    except Exception as e:
        print(f'  ⚠ Supabase upsert skipped for {key}: {e}')

    out_path = os.path.join(REPO_ROOT, key, 'data.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print(f'  ✓ wrote {out_path} ({os.path.getsize(out_path)} bytes)')
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dept', choices=list(DEPTS.keys()), help='Run only this dept')
    args = ap.parse_args()

    client = get_bq_client()
    print(f'BQ client OK (project {PROJECT})')
    targets = [args.dept] if args.dept else list(DEPTS.keys())
    summary = {}
    for key in targets:
        cfg = DEPTS[key]
        try:
            build_for_dept(client, key, cfg)
            summary[key] = 'OK'
        except Exception as e:
            summary[key] = f'ERROR: {e}'
            import traceback
            traceback.print_exc()
    print(f'\nSummary: {summary}')


if __name__ == '__main__':
    main()
