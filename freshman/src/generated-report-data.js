// src/generated-report-data.js
// Single source of truth for ALL frequently changing 慈大新鮮人 report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026/08/07 (Fri)
// Cutoff (smallest max_date across 3 sources): 2026-08-04 (GSC); GA4 through 2026-08-05
// Site: 慈大新鮮人 (freshman.tcu.edu.tw)
//
// Migration note (2026-08-07, analytics_refresh.py v1): this file is auto-generated
// from BigQuery. KPI trend/avg/spark fields are placeholders (refinement TODO).
// Evidence (EV-*) records generated separately by analytics_refresh_evidence.py.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "慈大新鮮人",
    siteDomain: "freshman.tcu.edu.tw",
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
    {k:"本週造訪人數",v:"1716",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[0,0,0,0,0,0,0]},
    {k:"本週工作階段",v:"3032",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊",v:"1215",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊率",v:"6.54%",trend:"+0.0%",avg:"前 7 天",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[0,0,0,0,0,0,0]}],
    traffic:{a:[415,423,382,386,305,565,563],b:[956,1130,976,897,728,1425,1518]},
    search:{a:[2583,2527,2163,1928,2761,3521,3092],b:[181,178,133,120,161,263,179]},
    funnel:{a:[415,423,382,386,305,565,563],b:[0,0,0,0,0,0,0],c:[0,0,0,0,0,0,0]},
    audience:{total:3032,country:[{name:"Taiwan",sessions:2898,users:1612,share:95.6},{name:"China",sessions:51,users:51,share:1.7},{name:"Malaysia",sessions:20,users:9,share:0.7},{name:"Indonesia",sessions:13,users:6,share:0.4},{name:"United States",sessions:8,users:8,share:0.3},{name:"Singapore",sessions:8,users:4,share:0.3},{name:"Hong Kong",sessions:6,users:3,share:0.2},{name:"Vietnam",sessions:5,users:4,share:0.2},{name:"Thailand",sessions:5,users:4,share:0.2},{name:"Australia",sessions:3,users:2,share:0.1},{name:"Sweden",sessions:3,users:3,share:0.1},{name:"其他",sessions:2,users:6,share:0.1},{name:"South Korea",sessions:2,users:2,share:0.1},{name:"Japan",sessions:2,users:2,share:0.1},{name:"Macao",sessions:1,users:1,share:0.0},{name:"Argentina",sessions:1,users:1,share:0.0},{name:"Brazil",sessions:1,users:1,share:0.0},{name:"Mongolia",sessions:1,users:1,share:0.0},{name:"Germany",sessions:1,users:1,share:0.0},{name:"Austria",sessions:1,users:1,share:0.0}],device:[{name:"mobile",sessions:1597,users:890,share:52.5},{name:"desktop",sessions:1379,users:793,share:45.3},{name:"tablet",sessions:65,users:37,share:2.1}],source:[{name:"(direct)",medium:"(none)",sessions:1474,users:823,share:48.5},{name:"google",medium:"organic",sessions:1425,users:797,share:46.9},{name:"cse.google.com",medium:"referral",sessions:38,users:22,share:1.2},{name:"bing",medium:"organic",sessions:28,users:21,share:0.9},{name:"tw.search.yahoo.com",medium:"referral",sessions:17,users:13,share:0.6},{name:"chatgpt.com",medium:"ai-assistant",sessions:10,users:10,share:0.3},{name:"mail.google.com",medium:"referral",sessions:9,users:5,share:0.3},{name:"l.instagram.com",medium:"referral",sessions:9,users:7,share:0.3},{name:"canva.com",medium:"referral",sessions:7,users:3,share:0.2},{name:"instagram.com",medium:"referral",sessions:6,users:5,share:0.2},{name:"tw.images.search.yahoo.com",medium:"referral",sessions:6,users:1,share:0.2},{name:"freshman.tcust.edu.tw",medium:"referral",sessions:5,users:4,share:0.2},{name:"search.google.com",medium:"referral",sessions:3,users:1,share:0.1},{name:"m.facebook.com",medium:"referral",sessions:3,users:3,share:0.1},{name:"facebook.com",medium:"referral",sessions:1,users:1,share:0.0}]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{
  trends:[
    {week:"06/09",sessions:1122,users:985,pageviews:2213,impressions:0,clicks:0},{week:"06/15",sessions:211,users:189,pageviews:412,impressions:0,clicks:0},{week:"06/22",sessions:994,users:868,pageviews:1749,impressions:0,clicks:0},{week:"06/29",sessions:1087,users:910,pageviews:2869,impressions:0,clicks:0},{week:"07/06",sessions:840,users:710,pageviews:2222,impressions:0,clicks:0},{week:"07/13",sessions:1126,users:931,pageviews:2787,impressions:0,clicks:0},{week:"07/20",sessions:3921,users:2818,pageviews:10814,impressions:0,clicks:0},{week:"07/27",sessions:963,users:741,pageviews:2363,impressions:0,clicks:0}],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },
  brand_config:{
    terms:[]
  },
  brand_split:[
    {month:"2026-04", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:2187, brand_clicks:44, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-05", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:25309, brand_clicks:772, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-06", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:25196, brand_clicks:869, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-07", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:28392, brand_clicks:946, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-08", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:4802, brand_clicks:274, nonbrand_imp:0, nonbrand_clicks:0}
  ],
  keyword_rows:[
    {query:"居留證", cls:"nonbrand", imp:482, clicks:4, sum_position:2417, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學新生", cls:"nonbrand", imp:472, clicks:65, sum_position:207, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學 新生", cls:"nonbrand", imp:328, clicks:47, sum_position:166, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟新鮮人", cls:"nonbrand", imp:301, clicks:44, sum_position:0, landing:"https://freshman.tcu.edu.tw/"},
    {query:"花蓮 英文", cls:"nonbrand", imp:281, clicks:0, sum_position:1876, landing:"https://freshman.tcu.edu.tw/"},
    {query:"花蓮英文", cls:"nonbrand", imp:184, clicks:0, sum_position:1320, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈大新鮮人", cls:"nonbrand", imp:181, clicks:25, sum_position:3, landing:"https://freshman.tcu.edu.tw/"},
    {query:"台灣居留證", cls:"nonbrand", imp:171, clicks:2, sum_position:945, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學新生專區", cls:"nonbrand", imp:163, clicks:24, sum_position:8, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學新生報到115", cls:"nonbrand", imp:161, clicks:21, sum_position:485, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟新生", cls:"nonbrand", imp:156, clicks:24, sum_position:0, landing:"https://freshman.tcu.edu.tw/"},
    {query:"台灣全長幾公里", cls:"nonbrand", imp:152, clicks:0, sum_position:1489, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學新生報到", cls:"nonbrand", imp:148, clicks:12, sum_position:552, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學宿舍", cls:"nonbrand", imp:136, clicks:12, sum_position:603, landing:"http://freshman.tcu.edu.tw/"},
    {query:"arc 居留 證", cls:"nonbrand", imp:122, clicks:0, sum_position:513, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學科系", cls:"nonbrand", imp:115, clicks:3, sum_position:359, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學", cls:"nonbrand", imp:111, clicks:5, sum_position:214, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學 新生報到", cls:"nonbrand", imp:107, clicks:15, sum_position:422, landing:"https://freshman.tcu.edu.tw/"},
    {query:"tcu", cls:"nonbrand", imp:102, clicks:1, sum_position:1, landing:"https://freshman.tcu.edu.tw/"},
    {query:"台灣長度", cls:"nonbrand", imp:88, clicks:0, sum_position:888, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟宿舍", cls:"nonbrand", imp:87, clicks:6, sum_position:245, landing:"http://freshman.tcu.edu.tw/"},
    {query:"慈濟大學制服", cls:"nonbrand", imp:86, clicks:2, sum_position:347, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學學費", cls:"nonbrand", imp:83, clicks:20, sum_position:97, landing:"https://freshman.tcu.edu.tw/"},
    {query:"選課", cls:"nonbrand", imp:68, clicks:0, sum_position:474, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學 宿舍", cls:"nonbrand", imp:57, clicks:3, sum_position:307, landing:"http://freshman.tcu.edu.tw/"},
    {query:"慈濟大學 制服", cls:"nonbrand", imp:53, clicks:3, sum_position:295, landing:"https://freshman.tcu.edu.tw/"},
    {query:"緊急聯絡人 關係", cls:"nonbrand", imp:51, clicks:2, sum_position:0, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學學費查詢", cls:"nonbrand", imp:50, clicks:3, sum_position:157, landing:"https://freshman.tcu.edu.tw/"},
    {query:"慈濟大學建國校區宿舍", cls:"nonbrand", imp:47, clicks:3, sum_position:340, landing:"http://freshman.tcu.edu.tw/"},
    {query:"arc居留證", cls:"nonbrand", imp:46, clicks:0, sum_position:190, landing:"https://freshman.tcu.edu.tw/"}
  ],
  content_matrix:[
    {normalized_path:"/", title:"慈濟大學新生網站 – 人文與學術專業薈萃的典範大學", users:1701, sessions:2850, pageviews:7630, engagement_sec:0}
  ],

    }
  }
};
