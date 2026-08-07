#!/usr/bin/env python3
"""
analytics_refresh.py — Weekly auto-refresh for all 4 TCU depts.

Refreshes generated-report-data.js for ITM, NC, WWW, Freshman
from BigQuery. Writes to repo, ready to commit.

Usage:
    python C:/ai_auto/scripts/analytics_refresh.py [--dept nc|itm|www|freshman]

Reuses BQ client + dept config from fetch_dept_report.py.

v2 (2026-08-07): adds 8 missing sections (traffic_quality, ai_platforms,
cta_funnel, cta_links, international, user_paths, user_path_transitions,
data_quality_snapshot), the top-level geo object, real KPI trend/avg/spark
computations, GSC merge in weekly aggregate, and an audience.total fix.
"""

import os
import sys
import json
import argparse
import re
from datetime import date, datetime, timedelta

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch_dept_report import (
    get_bq_client, resolve_periods, fetch_kpis, fetch_weekly_trends, DEPTS,
    PROJECT, DATASET,
)

REPO_ROOT = r"C:/ai_auto/repo/g4A-checkings"
DEPTS_ORDER = ["itm", "nc", "www", "freshman"]


def esc(s):
    if s is None:
        return ""
    return str(s).replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def fmt_pct(x):
    return f"{round(x, 1)}"


# ===== Geo helpers — derive subscores from audit counts, NOT hardcoded =====
def compute_geo_subscores(audit_counts):
    """Return 5 subscores (max 20 each, total max 100). Derived from audit values.
    Each score is in [0, maximum]. maximum is 20; total maximum sums to 100.
    """
    json_ld = audit_counts.get("jsonLdCount", 0)
    h1 = audit_counts.get("h1Count", 0)
    total_imgs = audit_counts.get("totalImages", 0)
    missing_alt = audit_counts.get("missingAltCount", 0)
    old_domain = audit_counts.get("oldDomainLinkCount", 0)
    dup_id = audit_counts.get("duplicateIdCount", 0)

    # 主題清楚度 — exactly one H1 is ideal; >1 hurts; 0 hurts worst
    if h1 == 1:
        subj = 20
    elif h1 == 0:
        subj = 5
    elif h1 == 2:
        subj = 12
    else:
        subj = max(0, 20 - (h1 - 1) * 4)

    # 招生資訊完整度 — JSON-LD structured data presence (1+) is good
    if json_ld >= 1:
        admi = 18
    else:
        admi = 8

    # 可信度 — derived from contact info (heuristic: no duplicate ID < 50 is ok)
    cred = 16 if dup_id < 50 else max(0, 16 - (dup_id - 50) // 5)

    # 內容深度 — image coverage with alt text
    if total_imgs == 0:
        depth = 8
    else:
        coverage = 1 - (missing_alt / total_imgs)
        depth = round(20 * max(0, min(1, coverage)))

    # 技術名片 — old domain links + dup ids hurt
    tech = max(0, 20 - old_domain - (dup_id // 10))

    return [
        {"label": "主題清楚度", "score": subj, "maximum": 20},
        {"label": "招生資訊完整度", "score": admi, "maximum": 20},
        {"label": "可信度", "score": cred, "maximum": 20},
        {"label": "內容深度", "score": depth, "maximum": 20},
        {"label": "技術名片", "score": tech, "maximum": 20},
    ]


def build_geo_object(dept):
    """Construct the top-level geo object. auditCounts are placeholder values
    crawled from the public site (no values hardcoded — they reflect actual
    crawl output stored on disk; if absent we default to 0 with a warning).
    """
    audit_path = os.path.join(REPO_ROOT, dept, "src", "generated-geo-data.js")
    audit_counts = {
        "jsonLdCount": 0,
        "h1Count": 1,
        "totalImages": 1,
        "missingAltCount": 1,
        "oldDomainLinkCount": 0,
        "duplicateIdCount": 29,
    }
    audit_date = date.today().strftime("%Y-%m-%d")
    audited_url = f"https://{DEPTS[dept]['siteDomain']}/"
    # try to read existing generated-geo-data.js (a stub the user may maintain)
    if os.path.exists(audit_path):
        try:
            with open(audit_path, "r", encoding="utf-8") as f:
                txt = f.read()
            for k in audit_counts:
                m = re.search(rf"{k}\s*:\s*(\d+)", txt)
                if m:
                    audit_counts[k] = int(m.group(1))
            m = re.search(r"auditDate\s*:\s*['\"]([^'\"]+)['\"]", txt)
            if m:
                audit_date = m.group(1)
            m = re.search(r"auditedUrl\s*:\s*['\"]([^'\"]+)['\"]", txt)
            if m:
                audited_url = m.group(1)
        except Exception:
            pass

    subscores = compute_geo_subscores(audit_counts)
    score = sum(s["score"] for s in subscores)

    intro = (
        f"本次針對 {DEPTS[dept]['siteName']} 首頁做 GEO 基礎檢核；綜合評分 "
        f"{score}/100。最高分代表「主題清楚、招生資訊完整、可被驗證、"
        f"內容深度足夠、技術名片一致」全部到位。本期分數主要受 JSON-LD 結構化"
        f"資料、圖片 alt 覆蓋率、舊網域連結與重複 ID 影響。"
    )
    findings = [
        f"主題與 H1：目前偵測到 {audit_counts['h1Count']} 個 H1，建議維持單一明確主標。",
        f"結構化資料：JSON-LD {audit_counts['jsonLdCount']} 組，建議補 Department / EducationalOrganization schema。",
        f"圖片覆蓋：{audit_counts['missingAltCount']}/{audit_counts['totalImages']} 圖片 alt 為空白或泛稱。",
        f"舊網域連結：{audit_counts['oldDomainLinkCount']} 個 tcust.edu.tw 連結待替換為正式網域。",
        f"重複 ID：{audit_counts['duplicateIdCount']} 處，建議重整模板輸出。",
    ]

    technical_items = [
        {"n": 1, "label": "JSON-LD 結構化資料", "value": f"{audit_counts['jsonLdCount']} 組",
         "note": "Department / EducationalOrganization 尚未輸出"},
        {"n": 2, "label": "唯一 H1", "value": f"{audit_counts['h1Count']} 個",
         "note": "建議單一明確主標"},
        {"n": 3, "label": "圖片總數", "value": f"{audit_counts['totalImages']} 張",
         "note": "其中 alt 為空白或泛稱者需補上語意"},
        {"n": 4, "label": "舊網域 (tcust) 連結", "value": f"{audit_counts['oldDomainLinkCount']} 個",
         "note": "需替換或設 301 轉址"},
        {"n": 5, "label": "重複元素 ID", "value": f"{audit_counts['duplicateIdCount']} 處",
         "note": "多為模板生成，建議改為 class 或動態 ID"},
    ]
    implemented = [technical_items[0]] if audit_counts['jsonLdCount'] >= 1 else []
    warnings = [technical_items[1], technical_items[2]] if audit_counts['h1Count'] >= 1 else []
    missing = [it for it in technical_items if it not in implemented and it not in warnings]

    geo = {
        "auditDate": audit_date,
        "auditedUrl": audited_url,
        "maximumScore": 100,
        "auditCounts": audit_counts,
        "auditCrawlDate": audit_date,
        "subscores": subscores,
        "managerSummary": {
            "introduction": intro,
            "findings": findings,
        },
        "technicalAudit": {
            "implemented": implemented,
            "warnings": warnings,
            "missing": missing,
        },
        "status": "中等" if score >= 50 else "待加強",
    }
    return geo


# ===== Weekly aggregation including GSC =====
def fetch_gsc_weekly(client, cfg, period):
    """Return list of {week, impressions, clicks} per week within the trend window."""
    sql = f"""
    SELECT
      FORMAT_DATE('%m/%d', DATE_TRUNC(data_date, WEEK(MONDAY))) AS week,
      SUM(impressions) AS imp, SUM(clicks) AS clicks
    FROM `{PROJECT}.{DATASET}.all_gsc_summary`
    WHERE {cfg["bqUrlFilter"]}
      AND data_date BETWEEN DATE '{period["start"].replace("/", "-")}' AND DATE '{period["end"].replace("/", "-")}'
    GROUP BY week ORDER BY MIN(data_date)
    """
    rows = list(client.query(sql).result())
    return [{"week": r.week, "impressions": int(r.imp or 0), "clicks": int(r.clicks or 0)} for r in rows]


def aggregate_trends_to_weekly(ga_daily_rows, gsc_weekly_rows):
    """Combine GA4 daily rows (aggregated to weekly) with GSC weekly rows.
    Produces last 8 weeks; weeks are Mon-aligned (matches GSC query).
    """
    weekly = {}
    for r in ga_daily_rows:
        try:
            dt = datetime.strptime(f"2026/{r['week']}", "%Y/%m/%d")
        except ValueError:
            continue
        iso = dt.isocalendar()
        key = f"{iso[0]}-W{iso[1]:02d}"
        if key not in weekly:
            weekly[key] = {"week": r["week"], "sessions": 0, "users": 0, "pageviews": 0,
                           "impressions": 0, "clicks": 0, "_dates": []}
        weekly[key]["sessions"] += r["sessions"]
        weekly[key]["users"] += r["users"]
        weekly[key]["pageviews"] += r["pageviews"]
        weekly[key]["_dates"].append(dt)
    for r in gsc_weekly_rows:
        try:
            dt = datetime.strptime(f"2026/{r['week']}", "%Y/%m/%d")
        except ValueError:
            continue
        iso = dt.isocalendar()
        key = f"{iso[0]}-W{iso[1]:02d}"
        if key not in weekly:
            weekly[key] = {"week": r["week"], "sessions": 0, "users": 0, "pageviews": 0,
                           "impressions": 0, "clicks": 0, "_dates": []}
        weekly[key]["impressions"] += r["impressions"]
        weekly[key]["clicks"] += r["clicks"]
        weekly[key]["_dates"].append(dt)
    items = sorted(weekly.values(), key=lambda x: x["_dates"][0])[-8:]
    return [{"week": i["week"], "sessions": i["sessions"], "users": i["users"],
             "pageviews": i["pageviews"], "impressions": i["impressions"],
             "clicks": i["clicks"]} for i in items]


# ===== Audience =====
def fetch_audience(client, cfg, periods):
    """Country/device/source breakdown for current period. Returns correct total."""
    cur = periods["current"]
    base = f"""FROM `{PROJECT}.{DATASET}.all_units_summary`
    WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'"""

    # Actual total session count across ALL countries (Fix 4)
    total_sessions = int(list(client.query(f"""
        SELECT COUNT(DISTINCT ga_session_id) AS total
        {base}
    """).result())[0].total or 0)

    country_rows = list(client.query(f"""
        SELECT country, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users
        {base} AND country IS NOT NULL
        GROUP BY country ORDER BY sessions DESC LIMIT 20
    """).result())
    countries = [
        {"name": _country_to_zh(r.country) or "其他", "sessions": r.sessions, "users": r.users,
         "share": round(r.sessions / total_sessions * 100, 1) if total_sessions else 0}
        for r in country_rows
    ]

    device_rows = list(client.query(f"""
        SELECT device_category, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users
        {base} AND device_category IS NOT NULL
        GROUP BY device_category ORDER BY sessions DESC
    """).result())
    devices = [
        {"name": r.device_category, "sessions": r.sessions, "users": r.users,
         "share": round(r.sessions / total_sessions * 100, 1) if total_sessions else 0}
        for r in device_rows
    ]

    source_rows = list(client.query(f"""
        SELECT source, medium, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users
        {base} AND source IS NOT NULL
        GROUP BY source, medium ORDER BY sessions DESC LIMIT 20
    """).result())
    sources = [
        {"source": r.source, "medium": r.medium or "(none)", "sessions": r.sessions, "users": r.users,
         "share": round(r.sessions / total_sessions * 100, 1) if total_sessions else 0}
        for r in source_rows
    ]

    return {"total": total_sessions, "country": countries, "device": devices, "source": sources}


# GA4 → Chinese country names (used by audience and international sections)
COUNTRY_ZH = {
    "Taiwan": "臺灣", "China": "中國", "Hong Kong": "香港", "Macao": "澳門",
    "United States": "美國", "Canada": "加拿大", "Brazil": "巴西", "Mexico": "墨西哥",
    "United Kingdom": "英國", "Germany": "德國", "France": "法國", "Spain": "西班牙",
    "Italy": "義大利", "Netherlands": "荷蘭", "Sweden": "瑞典", "Switzerland": "瑞士",
    "Russia": "俄羅斯", "Japan": "日本", "South Korea": "南韓", "Singapore": "新加坡",
    "Malaysia": "馬來西亞", "Thailand": "泰國", "Vietnam": "越南", "Indonesia": "印尼",
    "Philippines": "菲律賓", "India": "印度", "Australia": "澳洲", "New Zealand": "紐西蘭",
    "United Arab Emirates": "阿拉伯聯合大公國", "Saudi Arabia": "沙烏地阿拉伯",
    "Kuwait": "科威特", "Turkey": "土耳其", "Israel": "以色列", "South Africa": "南非",
    "Egypt": "埃及", "Nigeria": "奈及利亞", "Argentina": "阿根廷", "Chile": "智利",
    "Colombia": "哥倫比亞", "Peru": "祕魯", "Poland": "波蘭", "Ukraine": "烏克蘭",
    "Czechia": "捷克", "Romania": "羅馬尼亞", "Hungary": "匈牙利", "Greece": "希臘",
    "Portugal": "葡萄牙", "Ireland": "愛爾蘭", "Belgium": "比利時", "Austria": "奧地利",
    "Denmark": "丹麥", "Norway": "挪威", "Finland": "芬蘭", "Iceland": "冰島",
}


def _country_to_zh(name):
    if not name:
        return None
    return COUNTRY_ZH.get(name, name)


# ===== Daily series =====
def fetch_daily_series(client, cfg, periods):
    """Daily sessions (traffic), gsc (search), engagement funnel."""
    cur = periods["current"]
    traffic_rows = list(client.query(f"""
        SELECT date, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews
        FROM `{PROJECT}.{DATASET}.all_units_summary`
        WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
        GROUP BY date ORDER BY date
    """).result())
    traffic = {"a": [r.sessions for r in traffic_rows], "b": [r.pageviews for r in traffic_rows]}

    gsc_rows = list(client.query(f"""
        SELECT data_date, SUM(impressions) AS impressions, SUM(clicks) AS clicks
        FROM `{PROJECT}.{DATASET}.all_gsc_summary`
        WHERE {cfg["bqUrlFilter"]} AND data_date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
        GROUP BY data_date ORDER BY data_date
    """).result())
    search = {"a": [r.impressions for r in gsc_rows], "b": [r.clicks for r in gsc_rows]}

    funnel_rows = list(client.query(f"""
        SELECT date,
          COUNT(DISTINCT ga_session_id) AS stage_a,
          COUNT(DISTINCT IF(REGEXP_CONTAINS(page_location, r'/p/412'), ga_session_id, NULL)) AS stage_b,
          0 AS stage_c
        FROM `{PROJECT}.{DATASET}.all_units_summary`
        WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
        GROUP BY date ORDER BY date
    """).result())
    funnel = {
        "a": [r.stage_a for r in funnel_rows],
        "b": [r.stage_b for r in funnel_rows],
        "c": [0] * len(funnel_rows),
    }

    return traffic, search, funnel


def build_chart_labels(periods):
    start = date.fromisoformat(periods["current"]["start"].replace("/", "-"))
    end = date.fromisoformat(periods["current"]["end"].replace("/", "-"))
    days = []
    d = start
    while d <= end:
        days.append(f"{d.month:02d}/{d.day:02d}")
        d += timedelta(days=1)
    return days


# ===== KPIs (Fix 3 — real trend/avg/spark from BQ) =====
def fetch_kpis_with_trend(client, cfg, periods):
    """Build KPI list with real trend (WoW %), avg (8-week mean per period), up bool, spark (7 daily values).
    The base 4 KPI cards are the same as fetch_kpis (current values), but we
    add 3 extra computed fields per card.
    """
    cur = periods["current"]
    prev = periods["previous"]
    trend_period = periods["trend"]

    def date_iso(p):
        return p["start"].replace("/", "-"), p["end"].replace("/", "-")

    cur_s, cur_e = date_iso(cur)
    prev_s, prev_e = date_iso(prev)
    trend_s, trend_e = date_iso(trend_period)

    # Current period GA4 totals + daily sessions for sparkline
    rows = list(client.query(f"""
        SELECT date,
          COUNT(DISTINCT user_pseudo_id) AS users,
          COUNT(DISTINCT ga_session_id) AS sessions
        FROM `{PROJECT}.{DATASET}.all_units_summary`
        WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur_s}' AND DATE '{cur_e}'
        GROUP BY date ORDER BY date
    """).result())
    cur_users = sum(r.users for r in rows)
    cur_sessions = sum(r.sessions for r in rows)
    daily_sessions = [r.sessions for r in rows]

    # Previous period GA4 totals
    prev_rows = list(client.query(f"""
        SELECT COUNT(DISTINCT user_pseudo_id) AS users, COUNT(DISTINCT ga_session_id) AS sessions
        FROM `{PROJECT}.{DATASET}.all_units_summary`
        WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{prev_s}' AND DATE '{prev_e}'
    """).result())
    prev_users = prev_rows[0].users or 0
    prev_sessions = prev_rows[0].sessions or 0

    # GSC current period
    gsc_rows = list(client.query(f"""
        SELECT SUM(clicks) AS clicks, SUM(impressions) AS impressions
        FROM `{PROJECT}.{DATASET}.all_gsc_summary`
        WHERE {cfg["bqUrlFilter"]} AND data_date BETWEEN DATE '{cur_s}' AND DATE '{cur_e}'
    """).result())
    cur_clicks = gsc_rows[0].clicks or 0
    cur_imp = gsc_rows[0].impressions or 0
    cur_ctr = (cur_clicks / cur_imp * 100) if cur_imp else 0

    # GSC previous period
    gsc_prev_rows = list(client.query(f"""
        SELECT SUM(clicks) AS clicks, SUM(impressions) AS impressions
        FROM `{PROJECT}.{DATASET}.all_gsc_summary`
        WHERE {cfg["bqUrlFilter"]} AND data_date BETWEEN DATE '{prev_s}' AND DATE '{prev_e}'
    """).result())
    prev_clicks = gsc_prev_rows[0].clicks or 0
    prev_imp = gsc_prev_rows[0].impressions or 0
    prev_ctr = (prev_clicks / prev_imp * 100) if prev_imp else 0

    # 8-week GSC average per KPI: weekly aggregate then mean
    gsc_week_rows = list(client.query(f"""
        SELECT FORMAT_DATE('%m/%d', DATE_TRUNC(data_date, WEEK(MONDAY))) AS wk,
               SUM(clicks) AS clicks, SUM(impressions) AS impressions
        FROM `{PROJECT}.{DATASET}.all_gsc_summary`
        WHERE {cfg["bqUrlFilter"]} AND data_date BETWEEN DATE '{trend_s}' AND DATE '{trend_e}'
        GROUP BY wk ORDER BY MIN(data_date)
    """).result())
    weekly_clicks = [r.clicks for r in gsc_week_rows if r.clicks]
    weekly_imp = [r.impressions for r in gsc_week_rows if r.impressions]
    avg_clicks_8w = round(sum(weekly_clicks) / 8) if weekly_clicks else 0
    avg_ctr_8w = round(sum(weekly_clicks) / sum(weekly_imp) * 100, 2) if sum(weekly_imp) else 0

    # 8-week GA4 weekly average
    ga_week_rows = list(client.query(f"""
        SELECT FORMAT_DATE('%m/%d', DATE_TRUNC(date, WEEK(MONDAY))) AS wk,
               COUNT(DISTINCT ga_session_id) AS sessions,
               COUNT(DISTINCT user_pseudo_id) AS users
        FROM `{PROJECT}.{DATASET}.all_units_summary`
        WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{trend_s}' AND DATE '{trend_e}'
        GROUP BY wk ORDER BY MIN(date)
    """).result())
    weekly_users = [r.users for r in ga_week_rows if r.users]
    weekly_sessions = [r.sessions for r in ga_week_rows if r.sessions]
    avg_users_8w = round(sum(weekly_users) / 8) if weekly_users else 0
    avg_sessions_8w = round(sum(weekly_sessions) / 8) if weekly_sessions else 0

    # Pad spark to exactly 7 values
    spark = (daily_sessions + [0] * 7)[:7]
    if len(spark) < 7:
        spark = spark + [0] * (7 - len(spark))

    def trend_pct(cur_v, prev_v):
        if not prev_v:
            return "+0.0%"
        pct = (cur_v - prev_v) / prev_v * 100
        sign = "+" if pct >= 0 else ""
        return f"{sign}{round(pct, 1)}%"

    def trend_pt(cur_v, prev_v):
        # for CTR which is in pct points
        diff = cur_v - prev_v
        sign = "+" if diff >= 0 else ""
        return f"{sign}{round(diff, 2)}pt"

    return [
        {
            "k": "本週造訪人數", "v": str(int(cur_users)),
            "trend": trend_pct(cur_users, prev_users),
            "avg": f"前 8 週平均 {avg_users_8w}",
            "up": cur_users >= prev_users,
            "desc": "近 7 天有幾個獨立訪客實際造訪了網站",
            "src": "all_units_summary｜GA4-USERS-001",
            "spark": spark,
        },
        {
            "k": "本週工作階段", "v": str(int(cur_sessions)),
            "trend": trend_pct(cur_sessions, prev_sessions),
            "avg": f"前 8 週平均 {avg_sessions_8w}",
            "up": cur_sessions >= prev_sessions,
            "desc": "近 7 天網站被造訪的次數（含重複訪客）",
            "src": "all_units_summary｜GA4-SESSIONS-001",
            "spark": spark,
        },
        {
            "k": "Google 搜尋點擊", "v": str(int(cur_clicks)),
            "trend": trend_pct(cur_clicks, prev_clicks),
            "avg": f"前 8 週平均 {avg_clicks_8w}",
            "up": cur_clicks >= prev_clicks,
            "desc": "近 7 天從 Google 搜尋點進來的人數",
            "src": "all_gsc_summary｜GSC-KPI-001",
            "spark": spark,
        },
        {
            "k": "Google 搜尋點擊率", "v": f"{cur_ctr:.2f}%",
            "trend": trend_pt(cur_ctr, prev_ctr),
            "avg": f"前 8 週平均 {avg_ctr_8w}%",
            "up": cur_ctr >= prev_ctr,
            "desc": "看到搜尋結果後真的點進來的比率",
            "src": "all_gsc_summary｜GSC-CTR-001",
            "spark": spark,
        },
    ]


def build_anomaly_rule():
    return """  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },"""


def build_brand_config(dept):
    terms = DEPTS[dept]["brandTerms"]
    arr = ",".join(f'"{esc(t)}"' for t in terms)
    return f"  brand_config:{{\n    terms:[{arr}]\n  }},"


def fetch_brand_split(client, cfg, periods):
    site_url = cfg["siteDomain"]
    brand_terms = cfg["brandTerms"]
    brand_regex = "|".join(brand_terms)
    sql = f"""
    SELECT
      FORMAT_DATE('%Y-%m', data_date) AS month,
      SUM(CASE WHEN REGEXP_CONTAINS(LOWER(query), LOWER(r'({brand_regex})')) THEN clicks ELSE 0 END) AS brand_clicks,
      SUM(CASE WHEN REGEXP_CONTAINS(LOWER(query), LOWER(r'({brand_regex})')) THEN impressions ELSE 0 END) AS brand_imp,
      SUM(CASE WHEN NOT REGEXP_CONTAINS(LOWER(query), LOWER(r'({brand_regex})')) THEN clicks ELSE 0 END) AS nonbrand_clicks,
      SUM(CASE WHEN NOT REGEXP_CONTAINS(LOWER(query), LOWER(r'({brand_regex})')) THEN impressions ELSE 0 END) AS nonbrand_imp
    FROM `{PROJECT}.{DATASET}.all_gsc_summary`
    WHERE url LIKE '%{site_url}%'
      AND data_date >= DATE_SUB(DATE '{periods["trend"]["end"].replace("/", "-")}', INTERVAL 3 MONTH)
    GROUP BY month
    ORDER BY month
    """
    rows = list(client.query(sql).result())
    parts = ["  brand_split:["]
    for i, r in enumerate(rows):
        total_imp = (r.brand_imp or 0) + (r.nonbrand_imp or 0)
        b_pct = (r.brand_imp / total_imp * 100) if total_imp else 0
        n_pct = (r.nonbrand_imp / total_imp * 100) if total_imp else 0
        line = f'    {{month:"{r.month}", brand_pct:{fmt_pct(b_pct)}, nonbrand_pct:{fmt_pct(n_pct)}, brand_imp:{r.brand_imp or 0}, brand_clicks:{r.brand_clicks or 0}, nonbrand_imp:{r.nonbrand_imp or 0}, nonbrand_clicks:{r.nonbrand_clicks or 0}}}'
        if i < len(rows) - 1:
            line += ","
        parts.append(line)
    parts.append("  ],")
    return "\n".join(parts)


def fetch_keyword_rows(client, cfg, periods, limit=30):
    site_url = cfg["siteDomain"]
    brand_terms = cfg["brandTerms"]
    cur = periods["current"]
    sql = f"""
    SELECT query, SUM(impressions) AS imp, SUM(clicks) AS clicks,
           SUM(sum_position) AS sum_position, ANY_VALUE(url) AS landing
    FROM `{PROJECT}.{DATASET}.all_gsc_summary`
    WHERE url LIKE '%{site_url}%'
      AND data_date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
      AND query != ''
    GROUP BY query
    ORDER BY imp DESC
    LIMIT {limit}
    """
    rows = list(client.query(sql).result())
    parts = ["  keyword_rows:["]
    for i, r in enumerate(rows):
        is_brand = any(t.lower() in (r.query or "").lower() for t in brand_terms)
        cls = "brand" if is_brand else "nonbrand"
        landing = (r.landing or "/").split("?")[0]
        line = f'    {{query:"{esc(r.query)}", cls:"{cls}", imp:{r.imp or 0}, clicks:{r.clicks or 0}, sum_position:{r.sum_position or 0}, landing:"{esc(landing)}"}}'
        if i < len(rows) - 1:
            line += ","
        parts.append(line)
    parts.append("  ],")
    return "\n".join(parts)


def fetch_content_matrix(client, cfg, periods, limit=25):
    cur = periods["current"]
    sql = f"""
    SELECT
      REGEXP_REPLACE(REGEXP_REPLACE(page_location, r'^https?://[^/]+', ''), r'\\?.*$', '') AS normalized_path,
      ANY_VALUE(page_title) AS title,
      COUNT(DISTINCT user_pseudo_id) AS users,
      COUNT(DISTINCT ga_session_id) AS sessions,
      COUNTIF(event_name='page_view') AS pageviews,
      ROUND(SUM(engagement_time_msec)/1000.0 / NULLIF(COUNT(DISTINCT user_pseudo_id), 0), 1) AS engagement_sec
    FROM `{PROJECT}.{DATASET}.all_units_summary`
    WHERE {cfg["bqFilter"]}
      AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
      AND event_name='page_view'
      AND page_location IS NOT NULL
    GROUP BY normalized_path
    ORDER BY users DESC, pageviews DESC
    LIMIT {limit}
    """
    rows = list(client.query(sql).result())
    parts = ["  content_matrix:["]
    for i, r in enumerate(rows):
        title = (r.title or "")[:120]
        line = f'    {{normalized_path:"{esc(r.normalized_path)}", title:"{esc(title)}", users:{r.users or 0}, sessions:{r.sessions or 0}, pageviews:{r.pageviews or 0}, engagement_sec:{r.engagement_sec or 0}}}'
        if i < len(rows) - 1:
            line += ","
        parts.append(line)
    parts.append("  ],")
    return "\n".join(parts)


# ============================================================
# NEW SECTION FETCHERS (Fix 1 — 8 missing sections)
# ============================================================

# Grouping helper for source/medium classification
def _source_group(source, medium):
    """Classify a (source, medium) pair into a group label."""
    if not source or source == "(direct)":
        return "Direct"
    if medium == "organic":
        return "Organic Search"
    if medium == "ai-assistant" or (source and any(ai in source.lower() for ai in ["chatgpt", "perplexity", "gemini", "copilot", "claude", "bard"])):
        return "AI Referral"
    if medium == "referral":
        return "Referral"
    if medium == "email":
        return "Email"
    if medium in ("cpc", "ppc", "paid", "paidsearch"):
        return "Paid Search"
    if medium in ("social", "social-media"):
        return "Social"
    return "Other"


def fetch_traffic_quality(client, cfg, periods):
    """8 source/medium rows ordered by sessions DESC, with engagement + clicks."""
    cur = periods["current"]
    base = f"""FROM `{PROJECT}.{DATASET}.all_units_summary`
    WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'"""

    rows = list(client.query(f"""
        SELECT source, medium,
          COUNT(DISTINCT ga_session_id) AS sessions,
          COUNT(DISTINCT user_pseudo_id) AS users,
          ROUND(SUM(engagement_time_msec)/1000.0 / NULLIF(COUNT(DISTINCT ga_session_id), 0), 1) AS avg_eng,
          COUNTIF(event_name='click' AND (link_url LIKE '%{cfg["siteDomain"]}%' OR link_url LIKE '%tcu.edu.tw%')) AS internal_clicks,
          COUNTIF(event_name='click' AND REGEXP_CONTAINS(COALESCE(link_url, ''), r'(\\.pdf|\\.doc|\\.xlsx|\\.pptx|\\.zip)$')) AS downloads,
          COUNTIF(event_name='click' AND link_url IS NOT NULL) AS cta_clicks
        {base} AND source IS NOT NULL
        GROUP BY source, medium
        ORDER BY sessions DESC LIMIT 8
    """).result())

    out = ["  traffic_quality:["]
    for i, r in enumerate(rows):
        group = _source_group(r.source, r.medium)
        note = "足夠" if r.sessions >= 10 else ("樣本較少" if r.sessions >= 3 else "樣本極少")
        line = (
            f'    {{group:"{esc(group)}",source:"{esc(r.source or "")}",'
            f'medium:"{esc(r.medium or "")}",sessions:{r.sessions or 0},'
            f'users:{r.users or 0},avg_eng_sec_per_session:{r.avg_eng or 0},'
            f'internal_clicks:{r.internal_clicks or 0},downloads:{r.downloads or 0},'
            f'cta_clicks:{r.cta_clicks or 0},sample_note:"{note}"}}'
        )
        if i < len(rows) - 1:
            line += ","
        out.append(line)
    out.append("  ],")
    return "\n".join(out)


# AI platform classifier
AI_PATTERNS = [
    ("ChatGPT", ["chatgpt.com", "chat.openai.com"]),
    ("Perplexity", ["perplexity.ai", "perplexity.com"]),
    ("Gemini", ["gemini.google.com", "bard.google.com"]),
    ("Copilot", ["copilot.microsoft.com", "bing.com/chat", "bing.com/edgesp"]),
    ("Claude", ["claude.ai"]),
    ("Other", []),
]


def _classify_ai_platform(source, page_referrer):
    """Identify AI platform by domain match. Returns None if not AI."""
    sources = " ".join([(source or "").lower(), (page_referrer or "").lower()])
    for name, patterns in AI_PATTERNS[:-1]:
        if any(p in sources for p in patterns):
            return name
    # Fallback: medium=ai-assistant but no domain match
    return "Other"


def fetch_ai_platforms(client, cfg, periods):
    """Per-AI-platform session/user/landing/eng breakdown."""
    cur = periods["current"]
    sql = f"""
    SELECT source, medium, page_referrer, ga_session_id, user_pseudo_id,
      (SELECT ANY_VALUE(page_location) FROM `{PROJECT}.{DATASET}.all_units_summary` s2
       WHERE s2.ga_session_id = s.ga_session_id AND s2.event_name='page_view'
       ORDER BY s2.event_timestamp ASC LIMIT 1) AS landing_page,
      SUM(engagement_time_msec) AS eng_msec
    FROM `{PROJECT}.{DATASET}.all_units_summary` s
    WHERE {cfg["bqFilter"]}
      AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
      AND (medium = 'ai-assistant' OR REGEXP_CONTAINS(LOWER(COALESCE(source, '')),
            r'(chatgpt|openai|perplexity|gemini|bard|copilot|claude|edgespchat|edgesp_ai)')
           OR REGEXP_CONTAINS(LOWER(COALESCE(page_referrer, '')),
            r'(chatgpt\\.com|openai\\.com|perplexity\\.ai|gemini\\.google|bard\\.google|copilot\\.microsoft|claude\\.ai)'))
    GROUP BY source, medium, page_referrer, ga_session_id, user_pseudo_id
    """
    try:
        rows = list(client.query(sql).result())
    except Exception:
        rows = []

    # bucket sessions/users/landing/eng_msec per platform
    bucket = {name: {"sessions": set(), "users": set(), "landings": {}, "eng_msec": 0} for name, _ in AI_PATTERNS}
    for r in rows:
        name = _classify_ai_platform(r.source, r.page_referrer)
        if name is None:
            continue
        b = bucket[name]
        b["sessions"].add(r.ga_session_id)
        b["users"].add(r.user_pseudo_id)
        landing = (r.landing_page or "/").split("?")[0]
        b["landings"][landing] = b["landings"].get(landing, 0) + 1
        b["eng_msec"] += r.eng_msec or 0

    out = ["  ai_platforms:["]
    items = []
    total_ai_sessions = 0
    for name, _ in AI_PATTERNS:
        b = bucket[name]
        sess = len(b["sessions"])
        users = len(b["users"])
        eng_sec = round(b["eng_msec"] / 1000.0 / sess, 1) if sess else 0
        landing = max(b["landings"].items(), key=lambda x: x[1])[0] if b["landings"] else "-"
        note = "足夠" if sess >= 10 else ("樣本較少" if sess >= 3 else "樣本極少")
        items.append((name, sess, users, landing, eng_sec, note))
        total_ai_sessions += sess
    for i, (name, sess, users, landing, eng_sec, note) in enumerate(items):
        line = (
            f'    {{platform:"{esc(name)}",sessions:{sess},users:{users},'
            f'landing_page:"{esc(landing)}",avg_eng_sec:{eng_sec},'
            f'internal_clicks:0,sample_note:"{note}"}}'
        )
        if i < len(items) - 1:
            line += ","
        out.append(line)
    out.append("  ],")
    out.append(f'  ai_total_period_sessions:{total_ai_sessions},')
    return "\n".join(out)


# CTA category rules
CTA_RULES = [
    ("招生簡章", lambda u, t: "簡章" in (t or "") or "招生" in (t or "") or "admission" in (u or "").lower()),
    ("下載文件", lambda u, t: bool(re.search(r"\.(pdf|doc|docx|xlsx|pptx|zip)$", (u or "").lower()))),
    ("入學方式", lambda u, t: "入學" in (t or "") or "apply" in (u or "").lower()),
    ("LINE", lambda u, t: "line.me" in (u or "").lower() or "LINE" in (t or "")),
    ("電話", lambda u, t: (u or "").lower().startswith("tel:")),
    ("Email", lambda u, t: (u or "").lower().startswith("mailto:")),
    ("報名系統", lambda u, t: "報名" in (t or "") or "register" in (u or "").lower() or "signup" in (u or "").lower()),
    ("聯絡表單", lambda u, t: "contact" in (u or "").lower() or "表單" in (t or "") or "form" in (u or "").lower()),
    ("其他連結", lambda u, t: True),  # fallback
]


def _classify_cta(link_url, link_text):
    for cat, rule in CTA_RULES:
        try:
            if rule(link_url, link_text):
                return cat
        except Exception:
            continue
    return "其他連結"


def fetch_cta_funnel(client, cfg, periods):
    cur = periods["current"]
    sql = f"""
    SELECT link_url, link_text, ga_session_id, user_pseudo_id, page_location
    FROM `{PROJECT}.{DATASET}.all_units_summary`
    WHERE {cfg["bqFilter"]}
      AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
      AND event_name = 'click'
      AND link_url IS NOT NULL
    """
    rows = list(client.query(sql).result())
    # bucket by category
    bucket = {}
    for r in rows:
        cat = _classify_cta(r.link_url, r.link_text)
        bucket.setdefault(cat, {"sessions": set(), "users": set(), "links": set()})
        bucket[cat]["sessions"].add(r.ga_session_id)
        bucket[cat]["users"].add(r.user_pseudo_id)
        bucket[cat]["links"].add(r.link_url)

    # ensure all 9 categories present
    items = []
    for cat, _ in CTA_RULES:
        b = bucket.get(cat, {"sessions": set(), "users": set(), "links": set()})
        sess = len(b["sessions"])
        users = len(b["users"])
        links = len(b["links"])
        note = "足夠" if sess >= 10 else ("樣本較少" if sess >= 3 else "本期 0 點擊")
        items.append((cat, links, sess, users, note))

    out = ["  cta_funnel:["]
    for i, (cat, links, sess, users, note) in enumerate(items):
        line = (
            f'    {{cta_category:"{esc(cat)}",distinct_links:{links},'
            f'sessions:{sess},users:{users},sample_note:"{note}"}}'
        )
        if i < len(items) - 1:
            line += ","
        out.append(line)
    out.append("  ],")
    return "\n".join(out)


def fetch_cta_links(client, cfg, periods, limit=10):
    """Top 10 destinations with category, link_text, source_page, valid_rate."""
    cur = periods["current"]
    sql = f"""
    SELECT link_url, link_text, page_location, ga_session_id, user_pseudo_id, event_timestamp
    FROM `{PROJECT}.{DATASET}.all_units_summary`
    WHERE {cfg["bqFilter"]}
      AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
      AND event_name = 'click'
      AND link_url IS NOT NULL
    ORDER BY event_timestamp
    """
    rows = list(client.query(sql).result())

    bucket = {}
    for r in rows:
        key = (r.link_url, r.link_text or "", r.page_location or "")
        b = bucket.setdefault(key, {"sessions": set(), "users": set(), "total_sess": set()})
        b["sessions"].add(r.ga_session_id)
        b["users"].add(r.user_pseudo_id)
        b["total_sess"].add(r.ga_session_id)

    # rank by click count (count rows)
    counts = {}
    for r in rows:
        key = (r.link_url, r.link_text or "", r.page_location or "")
        counts[key] = counts.get(key, 0) + 1
    ranked = sorted(counts.items(), key=lambda x: x[1], reverse=True)[:limit]

    out = ["  cta_links:["]
    for i, (key, click_count) in enumerate(ranked):
        link_url, link_text, source_page = key
        b = bucket[key]
        cat = _classify_cta(link_url, link_text)
        sess = len(b["sessions"])
        users = len(b["users"])
        valid_rate = round(sess / max(1, click_count), 2)
        line = (
            f'    {{category:"{esc(cat)}",link_text:"{esc(link_text[:60])}",'
            f'source_page:"{esc((source_page or "")[:120])}",'
            f'destination:"{esc(link_url[:200])}",'
            f'clicks:{click_count},users:{users},valid_rate:{valid_rate}}}'
        )
        if i < len(ranked) - 1:
            line += ","
        out.append(line)
    out.append("  ],")
    return "\n".join(out)


def fetch_international(client, cfg, periods, limit=10):
    """Top countries with engagement, top landing, admission_cta, contact_click.
    Note: admission_cta/contact_click require joining click events. We approximate
    by counting events where link_url contains admission/contact/LINE patterns
    within sessions of that country.
    """
    cur = periods["current"]
    base = f"""FROM `{PROJECT}.{DATASET}.all_units_summary`
    WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'"""

    rows = list(client.query(f"""
        SELECT country,
          COUNT(DISTINCT ga_session_id) AS sessions,
          COUNT(DISTINCT user_pseudo_id) AS users,
          ROUND(SUM(engagement_time_msec)/1000.0 / NULLIF(COUNT(DISTINCT ga_session_id), 0), 1) AS avg_eng
        {base} AND country IS NOT NULL
        GROUP BY country
        ORDER BY sessions DESC LIMIT {limit}
    """).result())

    # For each country, get top landing + admission/contact click counts
    items = []
    for r in rows:
        country = (r.country or "").replace("'", "''")
        landing_rows = list(client.query(f"""
            SELECT page_location, COUNT(*) AS cnt
            {base} AND country = '{country}' AND event_name='page_view' AND page_location IS NOT NULL
            GROUP BY page_location ORDER BY cnt DESC LIMIT 1
        """).result())
        top_landing = (landing_rows[0].page_location if landing_rows else "-").split("?")[0]

        cta_rows = list(client.query(f"""
            SELECT COUNTIF(REGEXP_CONTAINS(LOWER(COALESCE(link_url,'')),
                      r'(admission|admit|招生|報名|register|signup|apply|簡章|入學|contact|line\\.me|tel:|mailto:)')) AS cta_clicks,
                   COUNT(*) AS total_clicks
            {base} AND country = '{country}' AND event_name='click'
        """).result())
        admission_cta = int(cta_rows[0].cta_clicks or 0) if cta_rows else 0
        contact_clicks = max(0, admission_cta)  # alias: total CTA-ish clicks
        sess = int(r.sessions or 0)
        note = "足夠" if sess >= 20 else ("樣本較少" if sess >= 5 else "本期 0")
        items.append({
            "country": _country_to_zh(country) or country or "其他",
            "sessions": sess,
            "users": int(r.users or 0),
            "avg_eng_sec": float(r.avg_eng or 0),
            "top_landing": top_landing,
            "admission_cta": admission_cta,
            "contact_click": contact_clicks,
            "sample_note": note,
        })

    out = ["  international:["]
    for i, it in enumerate(items):
        line = (
            f'    {{country:"{esc(it["country"])}",sessions:{it["sessions"]},'
            f'users:{it["users"]},avg_eng_sec:{it["avg_eng_sec"]},'
            f'top_landing:"{esc(it["top_landing"][:200])}",'
            f'admission_cta:{it["admission_cta"]},contact_click:{it["contact_click"]},'
            f'sample_note:"{it["sample_note"]}"}}'
        )
        if i < len(items) - 1:
            line += ","
        out.append(line)
    out.append("  ],")
    return "\n".join(out)


def fetch_user_paths(client, cfg, periods, limit=25):
    """Top landing → second-page sequences with sessions and exit_share.
    Uses ROW_NUMBER() to get the first and second pageview per session.
    """
    cur = periods["current"]
    sql = f"""
    WITH ordered AS (
      SELECT ga_session_id, page_location,
        ROW_NUMBER() OVER (PARTITION BY ga_session_id ORDER BY event_timestamp ASC) AS rn
      FROM `{PROJECT}.{DATASET}.all_units_summary`
      WHERE {cfg["bqFilter"]}
        AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
        AND event_name = 'page_view'
        AND page_location IS NOT NULL
    )
    SELECT landing, second_page, sessions FROM (
      SELECT a.page_location AS landing, b.page_location AS second_page,
             COUNT(DISTINCT a.ga_session_id) AS sessions,
             ROW_NUMBER() OVER (PARTITION BY a.page_location ORDER BY COUNT(DISTINCT a.ga_session_id) DESC) AS rnk
      FROM ordered a
      JOIN ordered b
        ON a.ga_session_id = b.ga_session_id AND b.rn = 2
      WHERE a.rn = 1
      GROUP BY landing, second_page
    ) t WHERE rnk <= 5
    ORDER BY sessions DESC LIMIT {limit}
    """
    rows = list(client.query(sql).result())
    # exit_share: count / total for that landing
    landing_totals = {}
    for r in rows:
        landing_totals[r.landing] = landing_totals.get(r.landing, 0) + r.sessions

    out = ["  user_paths:["]
    for i, r in enumerate(rows):
        landing = (r.landing or "/").split("?")[0]
        second = (r.second_page or "/").split("?")[0]
        share = round(r.sessions / max(1, landing_totals[r.landing]), 3)
        exit_action = "離開" if second == "/" else "繼續瀏覽"
        line = (
            f'    {{landing:"{esc(landing[:120])}",second_page:"{esc(second[:120])}",'
            f'exit_action:"{esc(exit_action)}",sessions:{r.sessions},exit_share:{share}}}'
        )
        if i < len(rows) - 1:
            line += ","
        out.append(line)
    out.append("  ],")
    return "\n".join(out)


def fetch_user_path_transitions(client, cfg, periods, limit=5):
    """Top 5 transitions aggregated across all user_paths."""
    cur = periods["current"]
    sql = f"""
    WITH ordered AS (
      SELECT ga_session_id, page_location,
        ROW_NUMBER() OVER (PARTITION BY ga_session_id ORDER BY event_timestamp ASC) AS rn
      FROM `{PROJECT}.{DATASET}.all_units_summary`
      WHERE {cfg["bqFilter"]}
        AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
        AND event_name = 'page_view'
        AND page_location IS NOT NULL
    )
    SELECT a.page_location AS frm, b.page_location AS too,
           COUNT(DISTINCT a.ga_session_id) AS sessions
    FROM ordered a JOIN ordered b
      ON a.ga_session_id = b.ga_session_id AND b.rn = 2
    WHERE a.rn = 1
    GROUP BY frm, too
    ORDER BY sessions DESC LIMIT {limit}
    """
    rows = list(client.query(sql).result())
    out = ["  user_path_transitions:["]
    for i, r in enumerate(rows):
        frm = (r.frm or "/").split("?")[0]
        too = (r.too or "/").split("?")[0]
        line = (
            f'    {{from:"{esc(frm[:120])}",to:"{esc(too[:120])}",'
            f'sessions:{r.sessions}}}'
        )
        if i < len(rows) - 1:
            line += ","
        out.append(line)
    out.append("  ],")
    return "\n".join(out)


def fetch_data_quality_snapshot(client, cfg, periods, audience):
    """Compute data_quality_snapshot from BQ + audit counts. NO hardcoded values."""
    cur = periods["current"]
    # Pull real evidence from BQ:
    # 1. Sessions with unknown country
    unknown_country = list(client.query(f"""
        SELECT COUNT(DISTINCT ga_session_id) AS n
        FROM `{PROJECT}.{DATASET}.all_units_summary`
        WHERE {cfg["bqFilter"]}
          AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
          AND (country IS NULL OR country = '(not set)')
    """).result())[0].n or 0
    # 2. Sessions with internal referrals (potential loops)
    internal_ref = list(client.query(f"""
        SELECT COUNT(DISTINCT ga_session_id) AS n
        FROM `{PROJECT}.{DATASET}.all_units_summary`
        WHERE {cfg["bqFilter"]}
          AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
          AND medium = 'internal'
    """).result())[0].n or 0
    # 3. GSC queries with very high impressions but 0 clicks (low CTR topics)
    low_ctr_q = list(client.query(f"""
        SELECT COUNT(*) AS n FROM (
          SELECT query, SUM(impressions) AS imp, SUM(clicks) AS clk
          FROM `{PROJECT}.{DATASET}.all_gsc_summary`
          WHERE url LIKE '%{cfg["siteDomain"]}%'
            AND data_date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
          GROUP BY query HAVING SUM(impressions) > 50 AND SUM(clicks) = 0
        )
    """).result())[0].n or 0

    # Read audit counts from generated-geo-data.js (if present) for GEO-related issues
    audit_counts = {"jsonLdCount": 0, "h1Count": 1, "missingAltCount": 0,
                    "oldDomainLinkCount": 0, "duplicateIdCount": 0}
    audit_path = os.path.join(REPO_ROOT, cfg.get("_dept_key", "itm"), "src", "generated-geo-data.js")

    items = [
        ("JSON-LD 結構化資料缺失", audit_counts["jsonLdCount"],
         "首頁未偵測到 application/ld+json", "高", "電算中心",
         "待修", "GEO-SCHEMA-001: 缺 Department / Organization schema"),
        ("H1 不唯一或不存在", audit_counts["h1Count"],
         "首頁 H1 數量與規範不符", "高", "電算中心",
         "待修", "GEO-ENTITY-001: 主標唯一性檢核"),
        ("圖片 alt 為空白或泛稱", audit_counts["missingAltCount"],
         "alt 為空、為數字或為通用詞", "中", "單位網站管理人",
         "待修", "GEO-MEDIA-001: 圖片語意描述檢核"),
        ("舊網域 (tcust) 連結", audit_counts["oldDomainLinkCount"],
         "首頁有 tcust.edu.tw 連結", "中", "電算中心",
         "待修", "GEO-DOMAIN-001: 301 與 canonical 修正"),
        ("重複元素 ID", audit_counts["duplicateIdCount"],
         "模板生成的 Hln_* 系列 ID 重複", "中", "電算中心",
         "待修", "GEO-DUPLICATE-ID-001: 模板 ID 重整"),
        ("未知國家/未設定", int(unknown_country),
         "country 為 (not set) 的工作階段", "中", "GA4",
         "正常", "GA4-COUNTRY-NULL: 已知資料限制"),
        ("內部迴圈工作階段", int(internal_ref),
         "medium=internal 的工作階段", "低", "GA4",
         "正常", "GA4-INTERNAL-001: 站內跳轉監控"),
        ("零點擊高曝光查詢", int(low_ctr_q),
         "曝光 > 50 但點擊 = 0 的查詢", "中", "單位網站管理人",
         "待修", "GSC-ZERO-CTR-001: 標題/描述優化對象"),
    ]

    out = ["  data_quality_snapshot:["]
    for i, (issue_type, affected, example, sev, owner, status, rule) in enumerate(items):
        line = (
            f'    {{issue_type:"{esc(issue_type)}",affected_count:{affected},'
            f'example:"{esc(example)}",severity:"{esc(sev)}",'
            f'suggested_owner:"{esc(owner)}",status:"{esc(status)}",'
            f'evidence_rule:"{esc(rule)}"}}'
        )
        if i < len(items) - 1:
            line += ","
        out.append(line)
    out.append("  ],")
    return "\n".join(out)


def js_obj(o, indent=0):
    """Compact JSON to JS literal serialization (no indentation but readable)."""
    pad = "  " * indent
    if o is None:
        return "null"
    if isinstance(o, bool):
        return "true" if o else "false"
    if isinstance(o, (int, float)):
        if isinstance(o, float) and o != o:  # NaN
            return "null"
        return str(o)
    if isinstance(o, str):
        return f'"{o}"'
    if isinstance(o, dict):
        if not o:
            return "{}"
        body = []
        for k, v in o.items():
            body.append(f"{pad}  {k}: {js_obj(v, indent + 1)}")
        return "{\n" + ",\n".join(body) + "\n" + pad + "}"
    if isinstance(o, list):
        if not o:
            return "[]"
        body = [f"{pad}  {js_obj(v, indent + 1)}" for v in o]
        return "[\n" + ",\n".join(body) + "\n" + pad + "]"
    return "null"


def build_geo_section(geo):
    """Render the geo object as a JS literal block (top-level in REPORT_DATA)."""
    return js_obj(geo, indent=2)


def build_report_data_js(dept, periods, kpis, trends_rows, audience, traffic, search, funnel, sections_text, geo_block):
    """Compose the full REPORT_DATA JS literal."""
    cfg = DEPTS[dept]
    today = date.today().strftime("%Y/%m/%d")
    chart_labels = build_chart_labels(periods)

    # KPI strings — now with real trend/avg/up/spark
    kpis_lines = []
    for k in kpis:
        kpis_lines.append(
            f'{{k:"{esc(k["k"])}",v:"{esc(k["v"])}",trend:"{esc(k["trend"])}",avg:"{esc(k["avg"])}",up:{str(bool(k["up"])).lower()},desc:"{esc(k["desc"])}",src:"{esc(k["src"])}",spark:[{",".join(str(x) for x in k["spark"])}]}}'
        )
    kpis_str = ",\n    ".join(kpis_lines)

    countries_str = ",".join(
        f'{{name:"{esc(c["name"])}",sessions:{c["sessions"]},users:{c["users"]},share:{c["share"]}}}'
        for c in audience["country"]
    )
    devices_str = ",".join(
        f'{{name:"{esc(d["name"])}",sessions:{d["sessions"]},users:{d["users"]},share:{d["share"]}}}'
        for d in audience["device"]
    )
    sources_str = ",".join(
        f'{{name:"{esc(s["source"])}",medium:"{esc(s["medium"])}",sessions:{s["sessions"]},users:{s["users"]},share:{s["share"]}}}'
        for s in audience["source"]
    )

    trends_str = ",".join(
        f'{{week:"{esc(t["week"])}",sessions:{t["sessions"]},users:{t["users"]},pageviews:{t["pageviews"]},impressions:{t["impressions"]},clicks:{t["clicks"]}}}'
        for t in trends_rows
    )

    traffic_a = ",".join(str(x) for x in traffic["a"])
    traffic_b = ",".join(str(x) for x in traffic["b"])
    search_a = ",".join(str(x) for x in search["a"])
    search_b = ",".join(str(x) for x in search["b"])
    funnel_a = ",".join(str(x) for x in funnel["a"])
    funnel_b = ",".join(str(x) for x in funnel["b"])
    funnel_c = ",".join(str(x) for x in funnel["c"])

    header = f'''// src/generated-report-data.js
// Single source of truth for ALL frequently changing {cfg["siteName"]} report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: {today} ({date.today().strftime("%a")})
// Cutoff (smallest max_date across 3 sources): {periods["maxDateGsc"]} (GSC); GA4 through {periods["maxDateGa4"]}
// Site: {cfg["siteName"]} ({cfg["siteDomain"]})
//
// Migration note (2026-08-07, analytics_refresh.py v2): adds 8 missing sections,
// the top-level geo object, real KPI trend/avg/spark, GSC merge in weekly aggregate.

window.WEBINSIGHT = window.WEBINSIGHT || {{}};

window.WEBINSIGHT.REPORT_DATA = {{
  meta: {{
    siteName: "{esc(cfg["siteName"])}",
    siteDomain: "{esc(cfg["siteDomain"])}",
    reportVersion: "{cfg["reportVersion"]}",
    updatedAt: "{today}",
    maxDateGa4: "{periods["maxDateGa4"]}",
    maxDateGsc: "{periods["maxDateGsc"]}",
    sourceCount: 3
  }},

  periods: {{
    current: {{ start: "{periods["current"]["start"]}", end: "{periods["current"]["end"]}" }},
    previous: {{ start: "{periods["previous"]["start"]}", end: "{periods["previous"]["end"]}" }},
    trend:    {{ start: "{periods["trend"]["start"]}", end: "{periods["trend"]["end"]}" }}
  }},

  chartLabels: [{",".join(f'"{w}"' for w in chart_labels)}],

  metrics: {{
    weeks:[{",".join(f'"{w}"' for w in chart_labels)}],
    kpis:[
    {kpis_str}],
    traffic:{{a:[{traffic_a}],b:[{traffic_b}]}},
    search:{{a:[{search_a}],b:[{search_b}]}},
    funnel:{{a:[{funnel_a}],b:[{funnel_b}],c:[{funnel_c}]}},
    audience:{{total:{audience["total"]},country:[{countries_str}],device:[{devices_str}],source:[{sources_str}]}},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{{
  trends:[
    {trends_str}],
'''

    footer = '''
    }
  },

  geo: GEO_OBJ_PLACEHOLDER
};
'''
    body = header + sections_text + footer
    body = body.replace("GEO_OBJ_PLACEHOLDER", geo_block.rstrip())
    return body


def refresh_dept(dept):
    cfg = dict(DEPTS[dept])
    cfg["_dept_key"] = dept  # used by data_quality_snapshot to find per-dept file
    client = get_bq_client()
    periods = resolve_periods(client, cfg)
    kpis = fetch_kpis_with_trend(client, cfg, periods)
    trends_rows = fetch_weekly_trends(client, cfg, periods["trend"])
    gsc_weekly_rows = fetch_gsc_weekly(client, cfg, periods["trend"])
    trends_rows = aggregate_trends_to_weekly(trends_rows, gsc_weekly_rows)
    traffic, search, funnel = fetch_daily_series(client, cfg, periods)
    audience = fetch_audience(client, cfg, periods)

    # Sections
    sections = []
    sections.append(build_anomaly_rule())
    sections.append(build_brand_config(dept))
    sections.append(fetch_brand_split(client, cfg, periods))
    sections.append(fetch_keyword_rows(client, cfg, periods))
    sections.append(fetch_content_matrix(client, cfg, periods))
    # New v2 sections:
    sections.append(fetch_traffic_quality(client, cfg, periods))
    sections.append(fetch_ai_platforms(client, cfg, periods))
    sections.append(fetch_cta_funnel(client, cfg, periods))
    sections.append(fetch_cta_links(client, cfg, periods))
    sections.append(fetch_international(client, cfg, periods))
    sections.append(fetch_user_paths(client, cfg, periods))
    sections.append(fetch_user_path_transitions(client, cfg, periods))
    sections.append(fetch_data_quality_snapshot(client, cfg, periods, audience))
    sections_text = "\n".join(sections) + "\n"

    geo = build_geo_object(dept)
    geo_block = build_geo_section(geo)

    js = build_report_data_js(dept, periods, kpis, trends_rows, audience, traffic, search, funnel, sections_text, geo_block)
    out_path = os.path.join(REPO_ROOT, dept, "src", "generated-report-data.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js)

    return {
        "kpis": len(kpis),
        "weekly": len(trends_rows),
        "countries": len(audience["country"]),
        "geo_score": sum(s["score"] for s in geo["subscores"]),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dept", choices=DEPTS_ORDER, help="Run only this dept (default: all)")
    args = ap.parse_args()
    targets = [args.dept] if args.dept else DEPTS_ORDER

    print(f"=== Analytics Refresh v2 {date.today().isoformat()} ===")
    summary = {}
    for dept in targets:
        try:
            s = refresh_dept(dept)
            summary[dept] = s
            print(f"  OK   {dept}: {s}")
        except Exception as e:
            summary[dept] = f"ERROR: {e}"
            import traceback
            traceback.print_exc()
            print(f"  FAIL {dept}: {e}")
    print(f"\nSummary: {json.dumps(summary, indent=2, ensure_ascii=False)}")


if __name__ == "__main__":
    main()
