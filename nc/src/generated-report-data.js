// src/generated-report-data.js
// Single source of truth for ALL frequently changing 護理學系 report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026/08/07 (Fri)
// Cutoff (smallest max_date across 3 sources): 2026-08-04 (GSC); GA4 through 2026-08-05
// Site: 護理學系 (nc.tcu.edu.tw)
//
// Migration note (2026-08-07, analytics_refresh.py v1): this file is auto-generated
// from BigQuery. KPI trend/avg/spark fields are placeholders (refinement TODO).
// Evidence (EV-*) records generated separately by analytics_refresh_evidence.py.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "護理學系",
    siteDomain: "nc.tcu.edu.tw",
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
    {k:"本週造訪人數",v:"188",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[0,0,0,0,0,0,0]},
    {k:"本週工作階段",v:"240",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊",v:"116",trend:"+0.0%",avg:"前 7 天",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊率",v:"4.24%",trend:"+0.0%",avg:"前 7 天",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[0,0,0,0,0,0,0]}],
    traffic:{a:[58,38,42,19,8,37,38],b:[173,97,112,24,9,57,72]},
    search:{a:[402,346,387,278,304,535,487],b:[23,18,14,5,7,22,27]},
    funnel:{a:[58,38,42,19,8,37,38],b:[10,9,10,6,0,12,10],c:[0,0,0,0,0,0,0]},
    audience:{total:240,country:[{name:"Taiwan",sessions:184,users:133,share:76.7},{name:"China",sessions:43,users:43,share:17.9},{name:"United States",sessions:4,users:4,share:1.7},{name:"Singapore",sessions:4,users:3,share:1.7},{name:"Canada",sessions:1,users:1,share:0.4},{name:"Brazil",sessions:1,users:1,share:0.4},{name:"Kuwait",sessions:1,users:1,share:0.4},{name:"Macao",sessions:1,users:1,share:0.4},{name:"Hong Kong",sessions:1,users:1,share:0.4}],device:[{name:"desktop",sessions:169,users:124,share:70.1},{name:"mobile",sessions:72,users:65,share:29.9}],source:[{name:"(direct)",medium:"(none)",sessions:146,users:107,share:60.6},{name:"google",medium:"organic",sessions:90,users:77,share:37.3},{name:"reporttcu-git-main-tcucc.vercel.app",medium:"referral",sessions:2,users:1,share:0.8},{name:"chatgpt.com",medium:"ai-assistant",sessions:1,users:1,share:0.4},{name:"tw.search.yahoo.com",medium:"referral",sessions:1,users:1,share:0.4},{name:"cse.google.com",medium:"referral",sessions:1,users:1,share:0.4}]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{
  trends:[
    {week:"06/09",sessions:271,users:236,pageviews:814,impressions:0,clicks:0},{week:"06/15",sessions:57,users:45,pageviews:132,impressions:0,clicks:0},{week:"06/22",sessions:236,users:193,pageviews:556,impressions:0,clicks:0},{week:"06/29",sessions:187,users:165,pageviews:304,impressions:0,clicks:0},{week:"07/06",sessions:139,users:127,pageviews:233,impressions:0,clicks:0},{week:"07/13",sessions:215,users:187,pageviews:464,impressions:0,clicks:0},{week:"07/20",sessions:202,users:177,pageviews:298,impressions:0,clicks:0},{week:"07/27",sessions:96,users:82,pageviews:144,impressions:0,clicks:0}],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },
  brand_config:{
    terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","護理","護理學院","護理系","nc","ncu"]
  },
  brand_split:[
    {month:"2026-04", brand_pct:58.7, nonbrand_pct:41.3, brand_imp:254, brand_clicks:20, nonbrand_imp:179, nonbrand_clicks:10},
    {month:"2026-05", brand_pct:58.4, nonbrand_pct:41.6, brand_imp:2691, brand_clicks:81, nonbrand_imp:1914, nonbrand_clicks:107},
    {month:"2026-06", brand_pct:56.3, nonbrand_pct:43.7, brand_imp:2376, brand_clicks:69, nonbrand_imp:1847, nonbrand_clicks:135},
    {month:"2026-07", brand_pct:62.8, nonbrand_pct:37.2, brand_imp:2780, brand_clicks:64, nonbrand_imp:1649, nonbrand_clicks:84},
    {month:"2026-08", brand_pct:64.1, nonbrand_pct:35.9, brand_imp:460, brand_clicks:7, nonbrand_imp:258, nonbrand_clicks:16}
  ],
  keyword_rows:[
    {query:"site:nc.tcu.edu.tw", cls:"brand", imp:140, clicks:0, sum_position:6230, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟大學護理系", cls:"brand", imp:95, clicks:0, sum_position:368, landing:"https://nc.tcu.edu.tw/"},
    {query:"周桂如", cls:"nonbrand", imp:66, clicks:0, sum_position:319, landing:"https://nc.tcu.edu.tw/p/16-1014-65224.php"},
    {query:"曹英", cls:"nonbrand", imp:63, clicks:14, sum_position:160, landing:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php"},
    {query:"慈濟大學護理學院", cls:"brand", imp:59, clicks:8, sum_position:0, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟大學護理學系", cls:"brand", imp:46, clicks:1, sum_position:226, landing:"https://nc.tcu.edu.tw/"},
    {query:"林玉娟", cls:"nonbrand", imp:43, clicks:0, sum_position:62, landing:"https://nc.tcu.edu.tw/p/406-1014-64705,r1026.php"},
    {query:"李崇仁", cls:"nonbrand", imp:37, clicks:3, sum_position:8, landing:"https://nc.tcu.edu.tw/p/406-1014-64729,r1027.php"},
    {query:"site:nc.tcust.edu.tw", cls:"brand", imp:37, clicks:0, sum_position:650, landing:"https://nc.tcu.edu.tw/app/index.php"},
    {query:"慈濟大學護理", cls:"brand", imp:35, clicks:1, sum_position:130, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟大學護理系老師", cls:"brand", imp:33, clicks:1, sum_position:172, landing:"https://nc.tcu.edu.tw/p/403-1014-1026-1.php"},
    {query:"賴惠玲", cls:"nonbrand", imp:29, clicks:1, sum_position:158, landing:"https://nc.tcu.edu.tw/p/406-1014-64699,r1026.php"},
    {query:"慈濟大學 護理學系", cls:"brand", imp:27, clicks:0, sum_position:125, landing:"https://nc.tcu.edu.tw/"},
    {query:"王淑芳", cls:"nonbrand", imp:26, clicks:1, sum_position:96, landing:"https://nc.tcu.edu.tw/p/406-1014-64698,r1034.php"},
    {query:"羅淑芬", cls:"nonbrand", imp:26, clicks:0, sum_position:158, landing:"https://nc.tcu.edu.tw/p/406-1014-64702,r1026.php"},
    {query:"楊美玲", cls:"nonbrand", imp:23, clicks:0, sum_position:70, landing:"https://nc.tcu.edu.tw/p/406-1014-64730,r1027.php"},
    {query:"慈濟大學 護理系", cls:"brand", imp:21, clicks:1, sum_position:74, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟護理系", cls:"brand", imp:19, clicks:2, sum_position:47, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟護理", cls:"brand", imp:17, clicks:0, sum_position:23, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟副院長", cls:"brand", imp:17, clicks:0, sum_position:113, landing:"https://nc.tcu.edu.tw/p/403-1014-1034-1.php"},
    {query:"陳佳蓉", cls:"nonbrand", imp:16, clicks:0, sum_position:73, landing:"https://nc.tcu.edu.tw/p/406-1014-65180,r1020.php"},
    {query:"護理學院", cls:"brand", imp:15, clicks:1, sum_position:109, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟護專", cls:"brand", imp:13, clicks:0, sum_position:102, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟大學護理科", cls:"brand", imp:13, clicks:0, sum_position:54, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟護理科", cls:"brand", imp:13, clicks:0, sum_position:62, landing:"https://nc.tcu.edu.tw/"},
    {query:"蔡淑鳳", cls:"nonbrand", imp:12, clicks:0, sum_position:96, landing:"https://nc.tcu.edu.tw/p/16-1014-65001.php"},
    {query:"邱曉彥", cls:"nonbrand", imp:10, clicks:1, sum_position:84, landing:"https://nc.tcu.edu.tw/p/406-1014-65223,r1051.php"},
    {query:"吳素月", cls:"nonbrand", imp:10, clicks:0, sum_position:1, landing:"https://nc.tcu.edu.tw/p/406-1014-64726,r1027.php"},
    {query:"黃君后", cls:"nonbrand", imp:8, clicks:3, sum_position:12, landing:"https://nc.tcu.edu.tw/p/403-1014-1026-1.php"},
    {query:"周桂如教授", cls:"nonbrand", imp:8, clicks:0, sum_position:19, landing:"https://nc.tcu.edu.tw/p/16-1014-65224.php"}
  ],
  content_matrix:[
    {normalized_path:"/", title:"慈濟大學護理學院 - 慈濟大學護理學院", users:50, sessions:73, pageviews:151, engagement_sec:0},
    {normalized_path:"/p/406-1014-64700,r1026.php", title:"曹英 TSAO,YING 教授 - 慈濟大學護理學院", users:24, sessions:24, pageviews:35, engagement_sec:0},
    {normalized_path:"/p/412-1014-2992.php", title:"系科所組成員 - 慈濟大學護理學院", users:22, sessions:24, pageviews:32, engagement_sec:0},
    {normalized_path:"/p/404-1014-66162.php", title:"【護理學院講座】社會情緒學習(SEL)工作坊： 大學教師的社會情緒學習進行式 - 慈濟大學護理學院", users:17, sessions:18, pageviews:29, engagement_sec:0},
    {normalized_path:"/p/412-1014-4934.php", title:"成員介紹 - 慈濟大學護理學院", users:10, sessions:10, pageviews:16, engagement_sec:0},
    {normalized_path:"/p/403-1014-1026-1.php", title:"護理學系 - 慈濟大學護理學院", users:9, sessions:9, pageviews:10, engagement_sec:0},
    {normalized_path:"/p/412-1014-2990.php", title:"組織架構 - 慈濟大學護理學院", users:8, sessions:8, pageviews:9, engagement_sec:0},
    {normalized_path:"/p/412-1014-4938.php", title:"交流園地 - 慈濟大學護理學院", users:7, sessions:10, pageviews:31, engagement_sec:0},
    {normalized_path:"/p/406-1014-64714,r1029.php", title:"宋惠娟 SUNG,HUEI-CHUAN 所長 - 慈濟大學護理學院", users:6, sessions:6, pageviews:8, engagement_sec:0},
    {normalized_path:"/index.php", title:"慈濟大學護理學院 - 慈濟大學護理學院", users:6, sessions:6, pageviews:6, engagement_sec:0},
    {normalized_path:"/p/412-1014-4935.php", title:"教育理念 - 慈濟大學護理學院", users:5, sessions:5, pageviews:7, engagement_sec:0},
    {normalized_path:"/p/412-1014-4969.php", title:"護理學院院長 - 慈濟大學護理學院", users:5, sessions:5, pageviews:6, engagement_sec:0},
    {normalized_path:"/p/406-1014-65917,r1051.php", title:"國際交流計畫學生面試 暑期海外服務學習交流甄選,日本及泰國交流計畫 - 慈濟大學護理學院", users:5, sessions:5, pageviews:6, engagement_sec:0},
    {normalized_path:"/p/406-1014-64729,r1027.php", title:"李崇仁 副教授 - 慈濟大學護理學院", users:5, sessions:5, pageviews:5, engagement_sec:0},
    {normalized_path:"/p/406-1014-66162,r1023.php", title:"【護理學院講座】社會情緒學習(SEL)工作坊： 大學教師的社會情緒學習進行式 - 慈濟大學護理學院", users:5, sessions:5, pageviews:5, engagement_sec:0},
    {normalized_path:"/p/406-1014-65341,r1051.php", title:"臨床護理專家：醫療現場的無聲推手，照護品質革新的催化劑 - 慈濟大學護理學院", users:5, sessions:5, pageviews:5, engagement_sec:0},
    {normalized_path:"/p/406-1014-65223,r1051.php", title:"由臨床實務走入教學改革　邱曉彥副院長分享沉浸式學習應用經驗 - 慈濟大學護理學院", users:4, sessions:4, pageviews:4, engagement_sec:0},
    {normalized_path:"/p/412-1014-4981.php", title:"教育目標 - 慈濟大學護理學院", users:4, sessions:4, pageviews:4, engagement_sec:0},
    {normalized_path:"/p/426-1014-7.php", title:"慈濟大學護理學院｜College of Nursing, Tzu Chi University - 慈濟大學護理學院", users:3, sessions:7, pageviews:17, engagement_sec:0},
    {normalized_path:"/p/412-1014-4932.php", title:"護理學院沿革 - 慈濟大學護理學院", users:3, sessions:3, pageviews:14, engagement_sec:0},
    {normalized_path:"/p/406-1014-64699,r1026.php", title:"賴惠玲 LAI, HUI-LING 教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:6, engagement_sec:0},
    {normalized_path:"/p/406-1014-64697,r1034.php", title:"張紀萍 CHANG,CHI-PING 副院長/副教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:5, engagement_sec:0},
    {normalized_path:"/p/406-1014-64704,r1026.php", title:"黃君后 HUANG,CHUN-HOU 副教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0},
    {normalized_path:"/p/406-1014-64711,r1026.php", title:"馬玉琴 MA,YU-CHIN 助理教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0},
    {normalized_path:"/p/406-1014-64679,r1025.php", title:"約聘組員-邱麗月 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0}
  ],

    }
  }
};
