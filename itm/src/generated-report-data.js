// src/generated-report-data.js
// Single source of truth for ALL frequently changing 資訊科技與管理系 report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026/08/07 (Fri)
// Cutoff (smallest max_date across 3 sources): 2026-08-04 (GSC); GA4 through 2026-08-05
// Site: 資訊科技與管理系 (itm.tcu.edu.tw)
//
// Migration note (2026-08-07, analytics_refresh.py v1): this file is auto-generated
// from BigQuery. KPI trend/avg/spark fields are placeholders (refinement TODO).
// Evidence (EV-*) records generated separately by analytics_refresh_evidence.py.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "資訊科技與管理系",
    siteDomain: "itm.tcu.edu.tw",
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
    {k:"本週造訪人數",v:"229",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[0,0,0,0,0,0,0]},
    {k:"本週工作階段",v:"278",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊",v:"94",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊率",v:"3.51%",trend:"+0.0%",avg:"前 7 天",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[0,0,0,0,0,0,0]}],
    traffic:{a:[45,40,47,15,32,48,52],b:[177,186,148,27,76,142,189]},
    search:{a:[308,327,253,231,614,508,439],b:[24,11,4,6,8,24,17]},
    funnel:{a:[45,40,47,15,32,48,52],b:[8,7,10,1,2,5,17],c:[0,0,0,0,0,0,0]},
    audience:{total:278,country:[{name:"Taiwan",sessions:173,users:125,share:62.2},{name:"China",sessions:89,users:89,share:32.0},{name:"United States",sessions:10,users:10,share:3.6},{name:"Thailand",sessions:4,users:3,share:1.4},{name:"Malaysia",sessions:1,users:1,share:0.4},{name:"Hong Kong",sessions:1,users:1,share:0.4}],device:[{name:"desktop",sessions:227,users:184,share:80.8},{name:"mobile",sessions:54,users:48,share:19.2}],source:[{name:"(direct)",medium:"(none)",sessions:199,users:171,share:71.6},{name:"google",medium:"organic",sessions:72,users:52,share:25.9},{name:"lle.moe.edu.tw",medium:"referral",sessions:4,users:3,share:1.4},{name:"college.eporttw.com",medium:"referral",sessions:1,users:1,share:0.4},{name:"bing",medium:"organic",sessions:1,users:1,share:0.4},{name:"cse.google.com",medium:"referral",sessions:1,users:1,share:0.4}]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{
  trends:[
    {week:"06/09",sessions:596,users:485,pageviews:2629,impressions:0,clicks:0},{week:"06/15",sessions:91,users:70,pageviews:502,impressions:0,clicks:0},{week:"06/22",sessions:338,users:292,pageviews:1330,impressions:0,clicks:0},{week:"06/29",sessions:218,users:191,pageviews:649,impressions:0,clicks:0},{week:"07/06",sessions:222,users:189,pageviews:743,impressions:0,clicks:0},{week:"07/13",sessions:229,users:200,pageviews:833,impressions:0,clicks:0},{week:"07/20",sessions:222,users:195,pageviews:843,impressions:0,clicks:0},{week:"07/27",sessions:83,users:73,pageviews:286,impressions:0,clicks:0}],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },
  brand_config:{
    terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","資管","資訊科技與管理","ITM","itm"]
  },
  brand_split:[
    {month:"2026-04", brand_pct:69.5, nonbrand_pct:30.5, brand_imp:341, brand_clicks:3, nonbrand_imp:150, nonbrand_clicks:9},
    {month:"2026-05", brand_pct:73.9, nonbrand_pct:26.1, brand_imp:4093, brand_clicks:79, nonbrand_imp:1442, nonbrand_clicks:35},
    {month:"2026-06", brand_pct:74.0, nonbrand_pct:26.0, brand_imp:4293, brand_clicks:110, nonbrand_imp:1510, nonbrand_clicks:25},
    {month:"2026-07", brand_pct:72.0, nonbrand_pct:28.0, brand_imp:3092, brand_clicks:51, nonbrand_imp:1200, nonbrand_clicks:21},
    {month:"2026-08", brand_pct:86.6, nonbrand_pct:13.4, brand_imp:747, brand_clicks:4, nonbrand_imp:116, nonbrand_clicks:3}
  ],
  keyword_rows:[
    {query:"site:itm.tcu.edu.tw", cls:"brand", imp:170, clicks:0, sum_position:12765, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈大學資", cls:"brand", imp:168, clicks:0, sum_position:509, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈濟大學科系", cls:"brand", imp:76, clicks:1, sum_position:613, landing:"https://itm.tcu.edu.tw/"},
    {query:"資管", cls:"brand", imp:70, clicks:0, sum_position:662, landing:"https://itm.tcu.edu.tw/"},
    {query:"itm", cls:"brand", imp:63, clicks:0, sum_position:429, landing:"https://itm.tcu.edu.tw/"},
    {query:"tcust", cls:"brand", imp:58, clicks:0, sum_position:8, landing:"https://itm.tcu.edu.tw/"},
    {query:"site:itm.tcust.edu.tw", cls:"brand", imp:58, clicks:0, sum_position:830, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈濟it", cls:"brand", imp:36, clicks:0, sum_position:159, landing:"https://itm.tcu.edu.tw/"},
    {query:"資訊科技系", cls:"nonbrand", imp:32, clicks:0, sum_position:268, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈大 學資", cls:"brand", imp:20, clicks:0, sum_position:49, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈大", cls:"brand", imp:19, clicks:0, sum_position:154, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈大資管", cls:"brand", imp:19, clicks:3, sum_position:0, landing:"https://itm.tcu.edu.tw/"},
    {query:"tcu", cls:"brand", imp:19, clicks:0, sum_position:0, landing:"https://itm.tcu.edu.tw/"},
    {query:"蔡宗宏", cls:"nonbrand", imp:19, clicks:4, sum_position:37, landing:"https://itm.tcu.edu.tw/p/412-1022-2586.php"},
    {query:"慈濟大學 科系", cls:"brand", imp:18, clicks:0, sum_position:122, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈濟大學", cls:"brand", imp:17, clicks:0, sum_position:429, landing:"https://itm.tcu.edu.tw/"},
    {query:"大學專題競賽", cls:"nonbrand", imp:16, clicks:0, sum_position:86, landing:"https://itm.tcu.edu.tw/p/406-1022-65878,r452.php"},
    {query:"證照", cls:"nonbrand", imp:15, clicks:0, sum_position:689, landing:"https://itm.tcu.edu.tw/p/404-1022-30082.php"},
    {query:"慈濟大學學資", cls:"brand", imp:11, clicks:0, sum_position:65, landing:"https://itm.tcu.edu.tw/"},
    {query:"專題海報", cls:"nonbrand", imp:11, clicks:0, sum_position:493, landing:"https://itm.tcu.edu.tw/p/16-1022-45541.php"},
    {query:"慈濟", cls:"brand", imp:9, clicks:0, sum_position:672, landing:"https://itm.tcu.edu.tw/"},
    {query:"大學專題競賽2026", cls:"nonbrand", imp:9, clicks:0, sum_position:38, landing:"https://itm.tcu.edu.tw/p/406-1022-65878,r452.php"},
    {query:"tcu學資", cls:"brand", imp:8, clicks:0, sum_position:48, landing:"https://itm.tcu.edu.tw/"},
    {query:"蕭志清", cls:"nonbrand", imp:8, clicks:0, sum_position:51, landing:"https://itm.tcu.edu.tw/p/412-1022-2586.php"},
    {query:"簡子超", cls:"nonbrand", imp:8, clicks:0, sum_position:20, landing:"https://itm.tcu.edu.tw/p/412-1022-2586.php"},
    {query:"慈濟大學資訊科技與管理學系", cls:"brand", imp:7, clicks:1, sum_position:0, landing:"https://itm.tcu.edu.tw/"},
    {query:"楊明軒", cls:"nonbrand", imp:7, clicks:0, sum_position:75, landing:"https://itm.tcu.edu.tw/p/16-1022-65688.php"},
    {query:"tcu 學資", cls:"brand", imp:7, clicks:0, sum_position:40, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈濟大學 資管系", cls:"brand", imp:7, clicks:1, sum_position:0, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈濟學資", cls:"brand", imp:7, clicks:0, sum_position:22, landing:"https://itm.tcu.edu.tw/"}
  ],
  content_matrix:[
    {normalized_path:"/p/412-1022-2586.php", title:"師資陣容 - 資訊科技與管理學系", users:35, sessions:35, pageviews:79, engagement_sec:0.3},
    {normalized_path:"/", title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:34, sessions:43, pageviews:173, engagement_sec:1.2},
    {normalized_path:"/p/426-1022-2.php", title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", users:34, sessions:37, pageviews:128, engagement_sec:0.6},
    {normalized_path:"/index.php", title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:26, sessions:36, pageviews:108, engagement_sec:0.6},
    {normalized_path:"/p/406-1022-65878,r452.php", title:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系", users:12, sessions:13, pageviews:38, engagement_sec:0.5},
    {normalized_path:"/p/404-1022-52388.php", title:"碩士班專區 - 資訊科技與管理學系", users:10, sessions:22, pageviews:46, engagement_sec:0.6},
    {normalized_path:"/p/404-1022-30026.php", title:"系所介紹 - 資訊科技與管理學系", users:10, sessions:10, pageviews:26, engagement_sec:0.4},
    {normalized_path:"/p/404-1022-36099.php", title:"課程地圖與開課學分時數表 / Curriculum Map and Table of Courses Offered with Credit Hours - 資訊科技與管理學系", users:8, sessions:11, pageviews:35, engagement_sec:0.6},
    {normalized_path:"/p/404-1022-30062.php", title:"規章辦法 - 資訊科技與管理學系", users:7, sessions:11, pageviews:54, engagement_sec:0.7},
    {normalized_path:"/p/403-1022-709-1.php", title:"海外實習 - 資訊科技與管理學系", users:6, sessions:6, pageviews:10, engagement_sec:0.6},
    {normalized_path:"/p/404-1022-30107.php", title:"他系支援及通識師資之學歷、專長一覽表 - 資訊科技與管理學系", users:5, sessions:5, pageviews:12, engagement_sec:0.7},
    {normalized_path:"/p/404-1022-34441.php", title:"課程規劃 - 資訊科技與管理學系", users:5, sessions:5, pageviews:10, engagement_sec:0.4},
    {normalized_path:"/p/403-1022-703-1.php", title:"Photo - 資訊科技與管理學系", users:5, sessions:5, pageviews:7, engagement_sec:0.5},
    {normalized_path:"/p/406-1022-58263,r452.php", title:"【 證照獎勵 】申請證照獎勵相關規定 - 資訊科技與管理學系", users:5, sessions:5, pageviews:6, engagement_sec:2.6},
    {normalized_path:"/p/426-1022-5.php", title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", users:4, sessions:4, pageviews:10, engagement_sec:0.3},
    {normalized_path:"/p/403-1022-452-1.php", title:"最新消息 - 資訊科技與管理學系", users:4, sessions:4, pageviews:8, engagement_sec:1.6},
    {normalized_path:"/p/406-1022-66113,r452.php", title:"2026全國商管暨跨域創新實務專題競賽 資管學系榮獲佳作 - 資訊科技與管理學系", users:4, sessions:4, pageviews:8, engagement_sec:0.1},
    {normalized_path:"/p/405-1022-36086,c2590.php", title:"業界實習 - 資訊科技與管理學系", users:4, sessions:4, pageviews:7, engagement_sec:0.8},
    {normalized_path:"/p/404-1022-64738.php", title:"畢業生就業 - 資訊科技與管理學系", users:4, sessions:4, pageviews:6, engagement_sec:4.8},
    {normalized_path:"/p/412-1022-2601.php", title:"專業實驗室 - 資訊科技與管理學系", users:4, sessions:4, pageviews:4, engagement_sec:1.0},
    {normalized_path:"/p/412-1022-2570.php", title:"最新消息 - 資訊科技與管理學系", users:3, sessions:3, pageviews:9, engagement_sec:0.3},
    {normalized_path:"/p/404-1022-39061.php", title:"國際交流 - 資訊科技與管理學系", users:3, sessions:3, pageviews:8, engagement_sec:0.2},
    {normalized_path:"/p/404-1022-30020.php", title:"入學方式 - 資訊科技與管理學系", users:3, sessions:3, pageviews:8, engagement_sec:0.1},
    {normalized_path:"/p/17-1022.php", title:"網站導覽 - 資訊科技與管理學系", users:3, sessions:3, pageviews:5, engagement_sec:2.9},
    {normalized_path:"/p/404-1022-45541.php", title:"實務專題 - 資訊科技與管理學系", users:3, sessions:3, pageviews:5, engagement_sec:0.2}
  ],

    }
  }
};
