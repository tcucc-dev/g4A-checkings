// src/generated-report-data.js
// Single source of truth for ALL frequently changing ... report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026/08/07 (Fri)
// Cutoff (smallest max_date across 3 sources): 2026-08-04 (GSC); GA4 through None
// Site: ... (www.tcu.edu.tw)
//
// Migration note (2026-08-07, analytics_refresh.py v1): this file is auto-generated
// from BigQuery. KPI trend/avg/spark fields are placeholders (refinement TODO).
// Evidence (EV-*) records generated separately by analytics_refresh_evidence.py.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "...",
    siteDomain: "www.tcu.edu.tw",
    reportVersion: "v56",
    updatedAt: "2026/08/07",
    sourceCount: 3
  },

  periods: {
    current: { start: "2026/07/29", end: "2026/08/04" },
    previous: { start: "2026/07/22", end: "2026/07/28" },
    trend:    { start: "2026/06/09", end: "2026/07/28" }
  },

  chartLabels: ["07/29","07/30","07/31","08/01","08/02","08/03","08/04"],

  metrics: {
    weeks:["07/29","07/30","07/31","08/01","08/02","08/03","08/04"],
    kpis:[
    {k:"本週造訪人數",v:"0",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[0,0,0,0,0,0,0]},
    {k:"本週工作階段",v:"0",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊",v:"4972",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊率",v:"6.69%",trend:"+0.0%",avg:"前 7 天",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[0,0,0,0,0,0,0]}],
    traffic:{a:[],b:[]},
    search:{a:[10893,10889,8427,7175,11207,13513,12270],b:[742,760,523,441,685,995,826]},
    funnel:{a:[],b:[],c:[]},
    audience:{total:0,country:[],device:[],source:[]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{
  trends:[
    ],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },
  brand_config:{
    terms:[]
  },
  brand_split:[
    {month:"2026-04", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:33793, brand_clicks:2827, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-05", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:349820, brand_clicks:30319, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-06", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:372252, brand_clicks:33820, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-07", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:230550, brand_clicks:19288, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-08", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:33061, brand_clicks:2604, nonbrand_imp:0, nonbrand_clicks:0}
  ],
  keyword_rows:[
    {query:"慈濟大學", cls:"nonbrand", imp:26515, clicks:2995, sum_position:17974, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟", cls:"nonbrand", imp:4841, clicks:10, sum_position:41219, landing:"http://www.tcu.edu.tw/"},
    {query:"tcu", cls:"nonbrand", imp:2245, clicks:311, sum_position:4080, landing:"http://www.tcu.edu.tw/"},
    {query:"慈大", cls:"nonbrand", imp:2045, clicks:336, sum_position:3602, landing:"http://www.tcu.edu.tw/"},
    {query:"tzu chi university", cls:"nonbrand", imp:725, clicks:10, sum_position:1621, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學行事曆", cls:"nonbrand", imp:718, clicks:184, sum_position:1271, landing:"https://www.tcu.edu.tw/p/412-1033-4858.php"},
    {query:"慈濟大學校務系統", cls:"nonbrand", imp:694, clicks:5, sum_position:3171, landing:"https://www.tcu.edu.tw/"},
    {query:"慈濟大學建國校區", cls:"nonbrand", imp:594, clicks:29, sum_position:639, landing:"http://www.tcu.edu.tw/"},
    {query:"花蓮慈濟大學", cls:"nonbrand", imp:548, clicks:32, sum_position:417, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟科技大學", cls:"nonbrand", imp:529, clicks:24, sum_position:1474, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學學生資訊系統", cls:"nonbrand", imp:504, clicks:1, sum_position:3088, landing:"https://www.tcu.edu.tw/"},
    {query:"花蓮慈濟", cls:"nonbrand", imp:434, clicks:0, sum_position:3150, landing:"https://www.tcu.edu.tw/"},
    {query:"慈濟大學科系", cls:"nonbrand", imp:373, clicks:26, sum_position:1388, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學圖書館", cls:"nonbrand", imp:334, clicks:4, sum_position:999, landing:"http://www.tcu.edu.tw/"},
    {query:"花蓮大學", cls:"nonbrand", imp:311, clicks:2, sum_position:569, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學介仁校區", cls:"nonbrand", imp:240, clicks:6, sum_position:923, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟學校財團法人慈濟大學", cls:"nonbrand", imp:235, clicks:11, sum_position:129, landing:"http://www.tcu.edu.tw/"},
    {query:"慈济大学", cls:"nonbrand", imp:230, clicks:18, sum_position:116, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學 行事曆", cls:"nonbrand", imp:206, clicks:48, sum_position:383, landing:"https://www.tcu.edu.tw/p/412-1033-4858.php"},
    {query:"慈濟大學中央校區", cls:"nonbrand", imp:201, clicks:7, sum_position:718, landing:"http://www.tcu.edu.tw/"},
    {query:"花蓮校務系統", cls:"nonbrand", imp:198, clicks:0, sum_position:725, landing:"https://www.tcu.edu.tw/"},
    {query:"site:www.tcu.edu.tw", cls:"nonbrand", imp:197, clicks:0, sum_position:2076, landing:"https://www.tcu.edu.tw/"},
    {query:"tcu 大學", cls:"nonbrand", imp:192, clicks:3, sum_position:296, landing:"http://www.tcu.edu.tw/"},
    {query:"慈大學資", cls:"nonbrand", imp:190, clicks:0, sum_position:1114, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟科大", cls:"nonbrand", imp:181, clicks:6, sum_position:307, landing:"http://www.tcu.edu.tw/"},
    {query:"魔豆", cls:"nonbrand", imp:173, clicks:0, sum_position:856, landing:"https://www.tcu.edu.tw/p/412-1033-4836.php"},
    {query:"慈科大", cls:"nonbrand", imp:158, clicks:6, sum_position:248, landing:"http://www.tcu.edu.tw/"},
    {query:"慈大校務", cls:"nonbrand", imp:147, clicks:0, sum_position:647, landing:"https://www.tcu.edu.tw/"},
    {query:"慈濟技術學院", cls:"nonbrand", imp:140, clicks:4, sum_position:341, landing:"http://www.tcu.edu.tw/"},
    {query:"慈大公告", cls:"nonbrand", imp:136, clicks:0, sum_position:347, landing:"https://www.tcu.edu.tw/"}
  ],
  content_matrix:[
  ],

    }
  }
};
