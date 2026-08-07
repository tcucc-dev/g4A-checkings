#!/usr/bin/env python3
"""
analytics_refresh.py — Weekly auto-refresh for all 4 TCU depts.

Refreshes generated-report-data.js for ITM, NC, WWW, Freshman
from BigQuery. Writes to repo, ready to commit.

Usage:
    python C:/ai_auto/scripts/analytics_refresh.py [--dept nc|itm|www|freshman]

Reuses BQ client + dept config from fetch_dept_report.py.

v1 (2026-08-07): generates report-data sections; evidence section
follows separately.
"""

import os
import sys
import json
import argparse
from datetime import date

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch_dept_report import (
    get_bq_client, resolve_periods, fetch_kpis, fetch_weekly_trends, DEPTS
)

REPO_ROOT = r"C:/ai_auto/repo/g4A-checkings"
DEPTS_ORDER = ["itm", "nc", "www", "freshman"]


def esc(s):
    if s is None:
        return ""
    return str(s).replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def fmt_pct(x):
    return f"{round(x, 1)}"


def aggregate_trends_to_weekly(daily_rows):
    """fetch_weekly_trends returns daily rows. Aggregate to 8 weekly buckets (Sun-aligned)."""
    if not daily_rows:
        return []
    # Group by week-of-year (last 8 weeks)
    from datetime import datetime
    weekly = {}
    for r in daily_rows:
        # parse date from week string like "06/27" -> need year
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
    # Take last 8 weeks
    items = sorted(weekly.values(), key=lambda x: x["_dates"][0])[-8:]
    # Round trip: also fetch impressions+clicks for each week (or skip, leave 0)
    return [{"week": i["week"], "sessions": i["sessions"], "users": i["users"],
             "pageviews": i["pageviews"], "impressions": 0, "clicks": 0} for i in items]



def build_chart_labels(periods):
    """Build 7-day label list from current period start/end."""
    from datetime import date, timedelta
    start = date.fromisoformat(periods["current"]["start"].replace("/", "-"))
    end = date.fromisoformat(periods["current"]["end"].replace("/", "-"))
    days = []
    d = start
    while d <= end:
        days.append(f"{d.month:02d}/{d.day:02d}")
        d += timedelta(days=1)
    return days


def fetch_audience(client, cfg, periods):
    """Country/device/source breakdown for current period."""
    cur = periods["current"]
    base = f"""FROM `hopeful-timing-478708-c0.ga4_history.all_units_summary`
    WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'"""

    country_rows = list(client.query(f"""
        SELECT country, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users
        {base} AND country IS NOT NULL
        GROUP BY country ORDER BY sessions DESC LIMIT 20
    """).result())
    total_sessions = sum(r.sessions for r in country_rows)
    countries = [
        {"name": r.country or "其他", "sessions": r.sessions, "users": r.users,
         "share": round(r.sessions / total_sessions * 100, 1) if total_sessions else 0}
        for r in country_rows
    ]

    device_rows = list(client.query(f"""
        SELECT device_category, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users
        {base} AND device_category IS NOT NULL
        GROUP BY device_category ORDER BY sessions DESC
    """).result())
    total_dev = sum(r.sessions for r in device_rows)
    devices = [
        {"name": r.device_category, "sessions": r.sessions, "users": r.users,
         "share": round(r.sessions / total_dev * 100, 1) if total_dev else 0}
        for r in device_rows
    ]

    source_rows = list(client.query(f"""
        SELECT source, medium, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users
        {base} AND source IS NOT NULL
        GROUP BY source, medium ORDER BY sessions DESC LIMIT 20
    """).result())
    total_src = sum(r.sessions for r in source_rows)
    sources = [
        {"source": r.source, "medium": r.medium or "(none)", "sessions": r.sessions, "users": r.users,
         "share": round(r.sessions / total_src * 100, 1) if total_src else 0}
        for r in source_rows
    ]

    return {"total": total_sessions, "country": countries, "device": devices, "source": sources}


def fetch_daily_series(client, cfg, periods):
    """Daily sessions (traffic), gsc (search), engagement funnel."""
    cur = periods["current"]
    traffic_rows = list(client.query(f"""
        SELECT date, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews
        FROM `hopeful-timing-478708-c0.ga4_history.all_units_summary`
        WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
        GROUP BY date ORDER BY date
    """).result())
    traffic = {"a": [r.sessions for r in traffic_rows], "b": [r.pageviews for r in traffic_rows]}

    gsc_rows = list(client.query(f"""
        SELECT data_date, SUM(impressions) AS impressions, SUM(clicks) AS clicks
        FROM `hopeful-timing-478708-c0.ga4_history.all_gsc_summary`
        WHERE {cfg["bqUrlFilter"]} AND data_date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
        GROUP BY data_date ORDER BY data_date
    """).result())
    search = {"a": [r.impressions for r in gsc_rows], "b": [r.clicks for r in gsc_rows]}

    funnel_rows = list(client.query(f"""
        SELECT date,
          COUNT(DISTINCT ga_session_id) AS stage_a,
          COUNT(DISTINCT IF(REGEXP_CONTAINS(page_location, r'/p/412'), ga_session_id, NULL)) AS stage_b,
          0 AS stage_c
        FROM `hopeful-timing-478708-c0.ga4_history.all_units_summary`
        WHERE {cfg["bqFilter"]} AND date BETWEEN DATE '{cur["start"].replace("/", "-")}' AND DATE '{cur["end"].replace("/", "-")}'
        GROUP BY date ORDER BY date
    """).result())
    funnel = {
        "a": [r.stage_a for r in funnel_rows],
        "b": [r.stage_b for r in funnel_rows],
        "c": [0] * len(funnel_rows),
    }

    return traffic, search, funnel


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
    """3 months of brand vs non-brand impressions/clicks."""
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
    FROM `hopeful-timing-478708-c0.ga4_history.all_gsc_summary`
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
    """Top keywords current period with brand classification."""
    site_url = cfg["siteDomain"]
    brand_terms = cfg["brandTerms"]
    cur = periods["current"]
    sql = f"""
    SELECT query, SUM(impressions) AS imp, SUM(clicks) AS clicks,
           SUM(sum_position) AS sum_position, ANY_VALUE(url) AS landing
    FROM `hopeful-timing-478708-c0.ga4_history.all_gsc_summary`
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
    """Top pages by users for current period."""
    cur = periods["current"]
    sql = f"""
    SELECT
      REGEXP_REPLACE(REGEXP_REPLACE(page_location, r'^https?://[^/]+', ''), r'\\?.*$', '') AS normalized_path,
      ANY_VALUE(page_title) AS title,
      COUNT(DISTINCT user_pseudo_id) AS users,
      COUNT(DISTINCT ga_session_id) AS sessions,
      COUNTIF(event_name='page_view') AS pageviews,
      ROUND(SUM(engagement_time_msec)/1000.0 / NULLIF(COUNT(DISTINCT user_pseudo_id), 0), 1) AS engagement_sec
    FROM `hopeful-timing-478708-c0.ga4_history.all_units_summary`
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


def build_report_data_js(dept, periods, kpis, trends_rows, audience, traffic, search, funnel, sections_text):
    """Compose the full REPORT_DATA JS literal."""
    cfg = DEPTS[dept]
    today = date.today().strftime("%Y/%m/%d")
    chart_labels = build_chart_labels(periods)

    # Add trend/avg/up to KPIs (placeholders — analytics_skill v1)
    kpis_lines = []
    for k in kpis:
        kpis_lines.append(
            f'{{k:"{esc(k["k"])}",v:"{esc(k["v"])}",trend:"+0.0%",avg:"前 7 天",up:true,desc:"{esc(k["desc"])}",src:"{esc(k["src"])}",spark:[0,0,0,0,0,0,0]}}'
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

    # Aggregate daily trend rows to weekly (last 8 weeks)
    weekly = aggregate_trends_to_weekly(trends_rows)
    trends_str = ",".join(
        f'{{week:"{esc(t["week"])}",sessions:{t["sessions"]},users:{t["users"]},pageviews:{t["pageviews"]},impressions:{t["impressions"]},clicks:{t["clicks"]}}}'
        for t in weekly
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
// Migration note (2026-08-07, analytics_refresh.py v1): this file is auto-generated
// from BigQuery. KPI trend/avg/spark fields are placeholders (refinement TODO).
// Evidence (EV-*) records generated separately by analytics_refresh_evidence.py.

window.WEBINSIGHT = window.WEBINSIGHT || {{}};

window.WEBINSIGHT.REPORT_DATA = {{
  meta: {{
    siteName: "{esc(cfg["siteName"])}",
    siteDomain: "{esc(cfg["siteDomain"])}",
    reportVersion: "{cfg["reportVersion"]}",
    updatedAt: "{today}",
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
  }
};
'''
    return header + sections_text + footer


def refresh_dept(dept):
    cfg = DEPTS[dept]
    client = get_bq_client()
    periods = resolve_periods(client, cfg)
    kpis = fetch_kpis(client, cfg, periods["current"])
    trends_rows = fetch_weekly_trends(client, cfg, periods["trend"])
    traffic, search, funnel = fetch_daily_series(client, cfg, periods)
    audience = fetch_audience(client, cfg, periods)

    # Sections (only 5 of 11 in v1 — will extend)
    sections = []
    sections.append(build_anomaly_rule())
    sections.append(build_brand_config(dept))
    sections.append(fetch_brand_split(client, cfg, periods))
    sections.append(fetch_keyword_rows(client, cfg, periods))
    sections.append(fetch_content_matrix(client, cfg, periods))
    sections_text = "\n".join(sections) + "\n"

    js = build_report_data_js(dept, periods, kpis, trends_rows, audience, traffic, search, funnel, sections_text)
    out_path = os.path.join(REPO_ROOT, dept, "src", "generated-report-data.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js)

    return {
        "kpis": len(kpis),
        "weekly": 8,
        "countries": len(audience["country"]),
        "trends_daily": len(trends_rows),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dept", choices=DEPTS_ORDER, help="Run only this dept (default: all)")
    args = ap.parse_args()
    targets = [args.dept] if args.dept else DEPTS_ORDER

    print(f"=== Analytics Refresh {date.today().isoformat()} ===")
    summary = {}
    for dept in targets:
        try:
            s = refresh_dept(dept)
            summary[dept] = s
            print(f"  OK   {dept}: {s}")
        except Exception as e:
            summary[dept] = f"ERROR: {e}"
            print(f"  FAIL {dept}: {e}")
    print(f"\nSummary: {json.dumps(summary, indent=2)}")


if __name__ == "__main__":
    main()
