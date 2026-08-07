// src/generated-report-data.js
// Single source of truth for ALL frequently changing WWW report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files (index.html, app.js, main.js, evidence-renderer.js,
// report-renderer.js) read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026-08-06 (Thu)
// Cutoff (smallest max_date across 3 sources): 2026-08-02 (GSC); GA4 through 2026-08-03
// Site: 慈濟大學中文版首頁 (www.tcu.edu.tw)
//
// Migration note (2026-08-06, WWW migration): this file now contains the FULL
// pre-refactor dataset wrapped in REPORT_DATA shape (meta + periods +
// chartLabels + metrics + sections). Datasets previously left as empty
// arrays (decisions, issues, webRows, quality, queries) match ITM's pattern.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "慈濟大學中文版首頁",
    siteDomain: "www.tcu.edu.tw",
    reportVersion: "v56",
    updatedAt: "2026/08/06",
    sourceCount: 3
  },

  periods: {
    current: { start: "2026/07/27", end: "2026/08/02" },
    previous: { start: "2026/07/20", end: "2026/07/26" },
    trend:    { start: "2026/06/08", end: "2026/07/26" }
  },

  chartLabels: ["07/27","07/28","07/29","07/30","07/31","08/01","08/02"],

  metrics: {

 weeks:["07/27","07/28","07/29","07/30","07/31","08/01","08/02"],
 kpis:[
{k:"本週造訪人數",v:"8710",trend:"+33.7%",avg:"前 7 天",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[1307, 1814, 1435, 1370, 1195, 779, 810]},
{k:"本週工作階段",v:"11825",trend:"+34.4%",avg:"前 7 天",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[1868, 2436, 1988, 1968, 1696, 936, 933]},
{k:"Google 搜尋點擊",v:"4573",trend:"+33.1%",avg:"前 7 天",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[728, 708, 741, 756, 521, 437, 682]},
{k:"Google 搜尋點擊率",v:"7.71%",trend:"-0.8%",avg:"前 7 天平均",up:false,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[728, 708, 741, 756, 521, 437, 682]}
],
 traffic:{a:[1868,2436,1988,1968,1696,936,933],b:[2826,3409,2838,2858,2512,1334,1314]},
 search:{a:[8985,8778,9242,9326,7235,6106,9627],b:[728,708,741,756,521,437,682]},
 funnel:{a:[1288, 1244, 1144, 1149, 1117, 965, 895],b:[2828, 2598, 2305, 2325, 2270, 1356, 1344],c:[0,0,0,0,0,0,0]},
 audience:{total:10518,country:[{name:"Taiwan",sessions:8645,users:3966,share:82.2},{name:"China",sessions:1481,users:1467,share:14.1},{name:"Japan",sessions:51,users:28,share:0.5},{name:"Indonesia",sessions:46,users:25,share:0.4}],device:[{name:"tablet",sessions:94,users:63,share:0.9},{name:"desktop",sessions:7529,users:3946,share:71.6},{name:"mobile",sessions:2928,users:1665,share:27.8}],source:[{name:"(direct)/(none)",medium:"other",sessions:5315,users:2923,share:50.5},{name:"google/organic",medium:"organic",sessions:4722,users:2467,share:44.9},{name:"bing/organic",medium:"organic",sessions:197,users:97,share:1.9},{name:"tcust.edu.tw/referral",medium:"internal",sessions:124,users:66,share:1.2},{name:"tw.search.yahoo.com/referral",medium:"other",sessions:90,users:47,share:0.9}]},

 sections:{
  trends:[
    {week:"06/07",sessions:22240,users:11548,pageviews:32701,impressions:102315,clicks:8708},
    {week:"06/14",sessions:1448,users:1098,pageviews:2209,impressions:94483,clicks:8630},
    {week:"06/21",sessions:17373,users:7530,pageviews:26019,impressions:92424,clicks:8420},
    {week:"06/28",sessions:14765,users:6195,pageviews:22409,impressions:82190,clicks:7104},
    {week:"07/05",sessions:10905,users:5322,pageviews:15911,impressions:60336,clicks:5000},
    {week:"07/12",sessions:11192,users:5350,pageviews:19034,impressions:58298,clicks:4638},
    {week:"07/19",sessions:10330,users:5451,pageviews:14913,impressions:53655,clicks:4236},
    {week:"07/26",sessions:1031,users:895,pageviews:1344,impressions:7609,clicks:621},
  ],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },
  brand_config:{
    terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","www","主網站"]
  },
  brand_split:[
    {month:"05/01", brand_pct:65.0, nonbrand_pct:35.0, brand_imp:82000, brand_clicks:7500, nonbrand_imp:44000, nonbrand_clicks:2200},
    {month:"06/01", brand_pct:62.0, nonbrand_pct:38.0, brand_imp:78000, brand_clicks:7000, nonbrand_imp:48000, nonbrand_clicks:2400},
    {month:"07/01", brand_pct:60.0, nonbrand_pct:40.0, brand_imp:60000, brand_clicks:5200, nonbrand_imp:40000, nonbrand_clicks:2000}
  ],
  keyword_rows:[
    {query:"site:www.tcu.edu.tw",cls:"brand",imp:600,clicks:0,sum_position:180,landing:"/"},
    {query:"慈濟大學",cls:"brand",imp:500,clicks:200,sum_position:0,landing:"/"},
    {query:"tcu",cls:"brand",imp:400,clicks:0,sum_position:120,landing:"/"},
    {query:"慈大",cls:"brand",imp:350,clicks:50,sum_position:0,landing:"/"},
    {query:"慈濟",cls:"brand",imp:300,clicks:0,sum_position:80,landing:"/"},
    {query:"www.tcu.edu.tw",cls:"brand",imp:280,clicks:0,sum_position:0,landing:"/"},
    {query:"tcu www",cls:"brand",imp:200,clicks:0,sum_position:150,landing:"/"},
    {query:"慈濟大學醫學系",cls:"brand",imp:180,clicks:30,sum_position:0,landing:"/"},
    {query:"慈濟大學護理學系",cls:"brand",imp:160,clicks:20,sum_position:0,landing:"/"},
    {query:"慈濟大學資訊科技與管理學系",cls:"brand",imp:140,clicks:15,sum_position:0,landing:"/"},
    {query:"慈濟大學研究所",cls:"nonbrand",imp:120,clicks:8,sum_position:0,landing:"/"},
    {query:"唸護理",cls:"nonbrand",imp:100,clicks:5,sum_position:0,landing:"/"},
    {query:"中醫學系",cls:"nonbrand",imp:90,clicks:3,sum_position:0,landing:"/"},
    {query:"慈濟大學招生",cls:"brand",imp:80,clicks:0,sum_position:0,landing:"/"},
    {query:"慈大新生",cls:"brand",imp:75,clicks:0,sum_position:0,landing:"/"},
    {query:"tzu chi",cls:"brand",imp:70,clicks:0,sum_position:0,landing:"/"},
    {query:"慈大學資",cls:"brand",imp:60,clicks:0,sum_position:0,landing:"/"},
    {query:"慈濟大學學費",cls:"nonbrand",imp:50,clicks:0,sum_position:0,landing:"/"},
    {query:"慈大圖書館",cls:"brand",imp:45,clicks:0,sum_position:0,landing:"/"},
    {query:"慈大學餐",cls:"brand",imp:40,clicks:0,sum_position:0,landing:"/"}
  ],
  content_matrix:[
    {normalized_path:"/",title:"慈濟大學中文版首頁",users:5514,sessions:9428,pageviews:15026,engagement_sec:0.1},
    {normalized_path:"/index.php",title:"慈濟大學中文版首頁",users:2757,sessions:4714,pageviews:7513,engagement_sec:0.1},
    {normalized_path:"/page/about",title:"關於慈大",users:117,sessions:117,pageviews:314,engagement_sec:0.3},
    {normalized_path:"/news",title:"最新消息",users:94,sessions:94,pageviews:188,engagement_sec:0.4},
    {normalized_path:"/academics",title:"學系總覽",users:78,sessions:78,pageviews:157,engagement_sec:0.2},
    {normalized_path:"/admissions",title:"招生資訊",users:47,sessions:47,pageviews:94,engagement_sec:0.3},
    {normalized_path:"/research",title:"研究發展",users:18,sessions:18,pageviews:47,engagement_sec:0.3}
  ],
    geo_block:{
    score:58,
    subs:{"主題清楚度（網站主題是否明確）":12,"招生資訊完整度（能否回答學生和家長的問題）":16,"可信度（聯絡資訊和地址是否完整）":18,"內容深度（網站章節數和說明完整性）":8,"技術名片（社群分享和搜尋預覽標籤）":4},
    boss_summary:"校首頁主題清楚（h1×1、有 JSON-LD CollegeOrUniversity 結構），聯絡資訊完整（地址/電話/email都有），但內容深度淺（h2 只有 3 個）、技術名片嚴重缺失（缺少 og:title/og:description/og:url、canonical、hreflang）。",
    tech_summary:"[GEO audit @ 2026-07-31] www.tcu.edu.tw 網頁內容結構：h1×1（含 logo,結構 OK）、h2×3（內容深度不足）、1 個 JSON-LD 結構化資料（CollegeOrUniversity,良好）。Open Graph 部分：og:image 有但 og:title/og:description/og:url 缺失；canonical 缺失；hreflang 0 entries（無中英文版標記）。圖片 18 張，0 張缺少 alt（良好）；iframe 1 個缺 title。DOM ID 重複 6 個（16 occurrences）。主選單存在主要導覽區。",
    issues:[
      {type:"h1",count:1,desc:"h1×1 含 logo 圖片,結構 OK 但無文字標題",severity:"中",suggested_owner:"電算中心",status:"可改進"},
      {type:"h2",count:3,desc:"h2 只有 3 個章節,內容深度不足",severity:"高",suggested_owner:"電算中心",status:"未處理"},
      {type:"meta_description",count:1,desc:"description 101 字,長度 OK 但為推廣性質,缺少實際資訊",severity:"低",suggested_owner:"電算中心",status:"可改進"},
      {type:"canonical",count:0,desc:"缺少 canonical 標籤",severity:"高",suggested_owner:"電算中心",status:"未處理"},
      {type:"open_graph",count:3,desc:"og:title / og:description / og:url 缺失（僅 og:image 有）",severity:"高",suggested_owner:"電算中心",status:"未處理"},
      {type:"hreflang",count:0,desc:"缺少 hreflang 標記(0 entries)",severity:"中",suggested_owner:"電算中心",status:"未處理"},
      {type:"iframe_title",count:1,desc:"iframe 缺 title 屬性",severity:"中",suggested_owner:"電算中心",status:"未處理"},
      {type:"duplicate_id",count:6,desc:"DOM ID 重複 6 個(總 16 occurrences)",severity:"低",suggested_owner:"電算中心",status:"未處理"}
    ],
    crawl_date:"2026-07-31",
    source_url:"https://www.tcu.edu.tw/"
  }
},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: []
  }
};
