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
// Migration note (2026-08-07, analytics_refresh.py v2): adds 8 missing sections,
// the top-level geo object, real KPI trend/avg/spark, GSC merge in weekly aggregate.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "資訊科技與管理系",
    siteDomain: "itm.tcu.edu.tw",
    reportVersion: "v56",
    updatedAt: "2026/08/07",
    maxDateGa4: "2026-08-05",
    maxDateGsc: "2026-08-04",
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
    {k:"本週造訪人數",v:"248",trend:"+38.5%",avg:"前 8 週平均 187",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[45,40,47,15,32,48,52]},
    {k:"本週工作階段",v:"279",trend:"+33.5%",avg:"前 8 週平均 250",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[45,40,47,15,32,48,52]},
    {k:"Google 搜尋點擊",v:"94",trend:"+8.0%",avg:"前 8 週平均 107",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[45,40,47,15,32,48,52]},
    {k:"Google 搜尋點擊率",v:"3.51%",trend:"+0.16pt",avg:"前 8 週平均 4.11%",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[45,40,47,15,32,48,52]}],
    traffic:{a:[45,40,47,15,32,48,52],b:[177,186,148,27,76,142,189]},
    search:{a:[308,327,253,231,614,508,439],b:[24,11,4,6,8,24,17]},
    funnel:{a:[45,40,47,15,32,48,52],b:[8,7,10,1,2,5,17],c:[0,0,0,0,0,0,0]},
    audience:{total:278,country:[{name:"臺灣",sessions:173,users:125,share:62.2},{name:"中國",sessions:89,users:89,share:32.0},{name:"美國",sessions:10,users:10,share:3.6},{name:"泰國",sessions:4,users:3,share:1.4},{name:"馬來西亞",sessions:1,users:1,share:0.4},{name:"香港",sessions:1,users:1,share:0.4}],device:[{name:"desktop",sessions:227,users:184,share:81.7},{name:"mobile",sessions:54,users:48,share:19.4}],source:[{name:"(direct)",medium:"(none)",sessions:199,users:171,share:71.6},{name:"google",medium:"organic",sessions:72,users:52,share:25.9},{name:"lle.moe.edu.tw",medium:"referral",sessions:4,users:3,share:1.4},{name:"college.eporttw.com",medium:"referral",sessions:1,users:1,share:0.4},{name:"bing",medium:"organic",sessions:1,users:1,share:0.4},{name:"cse.google.com",medium:"referral",sessions:1,users:1,share:0.4}]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{
  trends:[
    {week:"06/09",sessions:596,users:485,pageviews:2629,impressions:3802,clicks:278},{week:"06/15",sessions:91,users:70,pageviews:502,impressions:3666,clicks:160},{week:"06/22",sessions:338,users:292,pageviews:1330,impressions:3158,clicks:110},{week:"06/29",sessions:218,users:191,pageviews:649,impressions:2535,clicks:69},{week:"07/06",sessions:222,users:189,pageviews:743,impressions:2527,clicks:70},{week:"07/13",sessions:229,users:200,pageviews:833,impressions:1902,clicks:55},{week:"07/20",sessions:222,users:195,pageviews:843,impressions:2587,clicks:81},{week:"07/27",sessions:83,users:73,pageviews:286,impressions:679,clicks:35}],
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
    {query:"tcu", cls:"brand", imp:19, clicks:0, sum_position:0, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈大資管", cls:"brand", imp:19, clicks:3, sum_position:0, landing:"https://itm.tcu.edu.tw/"},
    {query:"蔡宗宏", cls:"nonbrand", imp:19, clicks:4, sum_position:37, landing:"https://itm.tcu.edu.tw/p/412-1022-2586.php"},
    {query:"慈濟大學 科系", cls:"brand", imp:18, clicks:0, sum_position:122, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈濟大學", cls:"brand", imp:17, clicks:0, sum_position:429, landing:"https://itm.tcu.edu.tw/"},
    {query:"大學專題競賽", cls:"nonbrand", imp:16, clicks:0, sum_position:86, landing:"https://itm.tcu.edu.tw/p/406-1022-65878,r452.php"},
    {query:"證照", cls:"nonbrand", imp:15, clicks:0, sum_position:689, landing:"https://itm.tcu.edu.tw/p/404-1022-30082.php"},
    {query:"慈濟大學學資", cls:"brand", imp:11, clicks:0, sum_position:65, landing:"https://itm.tcu.edu.tw/"},
    {query:"專題海報", cls:"nonbrand", imp:11, clicks:0, sum_position:493, landing:"https://itm.tcu.edu.tw/p/16-1022-45541.php"},
    {query:"慈濟", cls:"brand", imp:9, clicks:0, sum_position:672, landing:"https://itm.tcu.edu.tw/"},
    {query:"大學專題競賽2026", cls:"nonbrand", imp:9, clicks:0, sum_position:38, landing:"https://itm.tcu.edu.tw/p/406-1022-65878,r452.php"},
    {query:"蕭志清", cls:"nonbrand", imp:8, clicks:0, sum_position:51, landing:"https://itm.tcu.edu.tw/p/412-1022-2586.php"},
    {query:"簡子超", cls:"nonbrand", imp:8, clicks:0, sum_position:20, landing:"https://itm.tcu.edu.tw/p/412-1022-2586.php"},
    {query:"tcu學資", cls:"brand", imp:8, clicks:0, sum_position:48, landing:"https://itm.tcu.edu.tw/"},
    {query:"資訊管理系數位多媒體組在幹嘛", cls:"nonbrand", imp:7, clicks:0, sum_position:112, landing:"https://itm.tcu.edu.tw/p/16-1022-34441.php"},
    {query:"楊明軒", cls:"nonbrand", imp:7, clicks:0, sum_position:75, landing:"https://itm.tcu.edu.tw/p/16-1022-65688.php"},
    {query:"慈濟大學 資管系", cls:"brand", imp:7, clicks:1, sum_position:0, landing:"https://itm.tcu.edu.tw/"},
    {query:"慈濟學資", cls:"brand", imp:7, clicks:0, sum_position:22, landing:"https://itm.tcu.edu.tw/"},
    {query:"tcu 學資", cls:"brand", imp:7, clicks:0, sum_position:40, landing:"https://itm.tcu.edu.tw/"}
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
  traffic_quality:[
    {group:"Direct",source:"(direct)",medium:"(none)",sessions:199,users:171,avg_eng_sec_per_session:30.5,internal_clicks:88,downloads:18,cta_clicks:105,sample_note:"足夠"},
    {group:"Organic Search",source:"google",medium:"organic",sessions:72,users:52,avg_eng_sec_per_session:28.5,internal_clicks:62,downloads:43,cta_clicks:124,sample_note:"足夠"},
    {group:"Referral",source:"lle.moe.edu.tw",medium:"referral",sessions:4,users:3,avg_eng_sec_per_session:53.9,internal_clicks:2,downloads:0,cta_clicks:2,sample_note:"樣本較少"},
    {group:"Referral",source:"college.eporttw.com",medium:"referral",sessions:1,users:1,avg_eng_sec_per_session:0.6,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"樣本極少"},
    {group:"Organic Search",source:"bing",medium:"organic",sessions:1,users:1,avg_eng_sec_per_session:14.9,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"樣本極少"},
    {group:"Referral",source:"cse.google.com",medium:"referral",sessions:1,users:1,avg_eng_sec_per_session:2.3,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"樣本極少"}
  ],
  ai_platforms:[
    {platform:"ChatGPT",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Perplexity",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Gemini",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Copilot",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Claude",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Other",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"}
  ],
  ai_total_period_sessions:0,
  cta_funnel:[
    {cta_category:"招生簡章",distinct_links:3,sessions:13,users:13,sample_note:"足夠"},
    {cta_category:"下載文件",distinct_links:18,sessions:25,users:19,sample_note:"足夠"},
    {cta_category:"入學方式",distinct_links:1,sessions:3,users:3,sample_note:"樣本較少"},
    {cta_category:"LINE",distinct_links:1,sessions:1,users:1,sample_note:"本期 0 點擊"},
    {cta_category:"電話",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"Email",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"報名系統",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"聯絡表單",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"其他連結",distinct_links:33,sessions:41,users:36,sample_note:"足夠"}
  ],
  cta_links:[
    {category:"其他連結",link_text:"規章辦法",source_page:"https://itm.tcu.edu.tw/p/404-1022-52388.php?Lang=zh-tw",destination:"https://itm.tcust.edu.tw/p/404-1022-30062.php",clicks:17,users:6,valid_rate:0.53},
    {category:"其他連結",link_text:"",source_page:"https://itm.tcu.edu.tw/p/404-1022-52388.php?Lang=zh-tw",destination:"https://itm.tcust.edu.tw/p/404-1022-30062.php",clicks:17,users:6,valid_rate:0.53},
    {category:"其他連結",link_text:"",source_page:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw",destination:"https://cec.tcu.edu.tw/?p=5033",clicks:16,users:9,valid_rate:0.56},
    {category:"招生簡章",link_text:"招生簡章",source_page:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw",destination:"https://cec.tcu.edu.tw/?p=5033",clicks:15,users:9,valid_rate:0.6},
    {category:"下載文件",link_text:"碩士學位考試要點（適用113、114入學）",source_page:"https://itm.tcu.edu.tw/p/404-1022-30062.php",destination:"https://itm.tcu.edu.tw/var/file/22/1022/img/1843/654648614.pdf",clicks:11,users:4,valid_rate:0.64},
    {category:"招生簡章",link_text:"大學申請入學",source_page:"https://itm.tcu.edu.tw/",destination:"https://admissions.tcu.edu.tw/?page_id=4996",clicks:8,users:2,valid_rate:0.25},
    {category:"招生簡章",link_text:"",source_page:"https://itm.tcu.edu.tw/",destination:"https://admissions.tcu.edu.tw/?page_id=4996",clicks:7,users:2,valid_rate:0.29},
    {category:"下載文件",link_text:"<<競賽得獎名單>>",source_page:"https://itm.tcu.edu.tw/p/406-1022-65878,r452.php?Lang=zh-tw",destination:"https://itm.tcu.edu.tw/var/file/22/1022/attach/15/pta_92055_2180580_35655.pdf",clicks:7,users:2,valid_rate:0.29},
    {category:"下載文件",link_text:"碩士學位考試要點（適用111、112入學）",source_page:"https://itm.tcu.edu.tw/p/404-1022-30062.php",destination:"https://itm.tcu.edu.tw/var/file/22/1022/attach/89/pta_91542_65775_42024.pdf",clicks:6,users:3,valid_rate:0.67},
    {category:"其他連結",link_text:"查看更多新聞",source_page:"https://itm.tcu.edu.tw/",destination:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E8%88%87%E7%AE",clicks:5,users:2,valid_rate:0.4}
  ],
  international:[
    {country:"臺灣",sessions:173,users:125,avg_eng_sec:46.2,top_landing:"https://itm.tcu.edu.tw/",admission_cta:17,contact_click:17,sample_note:"足夠"},
    {country:"中國",sessions:89,users:89,avg_eng_sec:2.6,top_landing:"https://itm.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"足夠"},
    {country:"美國",sessions:10,users:10,avg_eng_sec:0.7,top_landing:"https://itm.tcu.edu.tw/p/404-1022-30036.php",admission_cta:0,contact_click:0,sample_note:"樣本較少"},
    {country:"泰國",sessions:4,users:3,avg_eng_sec:7.4,top_landing:"https://itm.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"本期 0"},
    {country:"香港",sessions:1,users:1,avg_eng_sec:18.3,top_landing:"https://itm.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"本期 0"},
    {country:"馬來西亞",sessions:1,users:1,avg_eng_sec:69.5,top_landing:"https://itm.tcu.edu.tw/p/412-1022-2586.php",admission_cta:0,contact_click:0,sample_note:"本期 0"}
  ],
  user_paths:[
    {landing:"https://itm.tcu.edu.tw/p/426-1022-2.php",second_page:"https://itm.tcu.edu.tw/p/426-1022-2.php",exit_action:"繼續瀏覽",sessions:36,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/index.php",second_page:"https://itm.tcu.edu.tw/index.php",exit_action:"繼續瀏覽",sessions:32,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/",second_page:"https://itm.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:32,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/404-1022-52388.php",second_page:"https://itm.tcu.edu.tw/p/404-1022-52388.php",exit_action:"繼續瀏覽",sessions:17,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/412-1022-2586.php",second_page:"https://itm.tcu.edu.tw/p/412-1022-2586.php",exit_action:"繼續瀏覽",sessions:16,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/",second_page:"https://itm.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:9,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/406-1022-65878,r452.php",second_page:"https://itm.tcu.edu.tw/p/406-1022-65878,r452.php",exit_action:"繼續瀏覽",sessions:8,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/403-1022-452-1.php",second_page:"https://itm.tcu.edu.tw/p/403-1022-452-1.php",exit_action:"繼續瀏覽",sessions:4,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/404-1022-30107.php",second_page:"https://itm.tcu.edu.tw/p/404-1022-30107.php",exit_action:"繼續瀏覽",sessions:4,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/403-1022-709-1.php",second_page:"https://itm.tcu.edu.tw/p/403-1022-709-1.php",exit_action:"繼續瀏覽",sessions:4,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/404-1022-30026.php",second_page:"https://itm.tcu.edu.tw/p/404-1022-30026.php",exit_action:"繼續瀏覽",sessions:4,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/406-1022-36216,r452-1.php",second_page:"https://itm.tcu.edu.tw/p/406-1022-36216,r452-1.php",exit_action:"繼續瀏覽",sessions:2,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/404-1022-58627.php",second_page:"https://itm.tcu.edu.tw/p/404-1022-58627.php",exit_action:"繼續瀏覽",sessions:2,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/404-1022-30062.php",second_page:"https://itm.tcu.edu.tw/p/404-1022-30062.php",exit_action:"繼續瀏覽",sessions:2,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/17-1022.php",second_page:"https://itm.tcu.edu.tw/p/17-1022.php",exit_action:"繼續瀏覽",sessions:2,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/403-1022-703-1.php",second_page:"https://itm.tcu.edu.tw/p/403-1022-703-1.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/404-1022-64568.php",second_page:"https://itm.tcu.edu.tw/p/404-1022-64568.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/404-1022-64738.php",second_page:"https://itm.tcu.edu.tw/p/404-1022-64738.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/16-1022-45542.php",second_page:"https://itm.tcu.edu.tw/p/406-1022-36349,r452-1.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/403-1022-718-1.php",second_page:"https://itm.tcu.edu.tw/p/403-1022-718-1.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/405-1022-30039,c2601.php",second_page:"https://itm.tcu.edu.tw/p/405-1022-30039,c2601.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/405-1022-31702,c2590.php",second_page:"https://itm.tcu.edu.tw/p/405-1022-31702,c2590.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/405-1022-46734,c2590.php",second_page:"https://itm.tcu.edu.tw/p/405-1022-46734,c2590.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/16-1022-65614.php",second_page:"https://itm.tcu.edu.tw/p/406-1022-65548,r452.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://itm.tcu.edu.tw/p/404-1022-30036.php",second_page:"https://itm.tcu.edu.tw/p/404-1022-30036.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0}
  ],
  user_path_transitions:[
    {from:"https://itm.tcu.edu.tw/p/426-1022-2.php",to:"https://itm.tcu.edu.tw/p/426-1022-2.php",sessions:36},
    {from:"https://itm.tcu.edu.tw/",to:"https://itm.tcu.edu.tw/",sessions:32},
    {from:"https://itm.tcu.edu.tw/index.php",to:"https://itm.tcu.edu.tw/index.php",sessions:32},
    {from:"https://itm.tcu.edu.tw/p/404-1022-52388.php",to:"https://itm.tcu.edu.tw/p/404-1022-52388.php",sessions:17},
    {from:"https://itm.tcu.edu.tw/p/412-1022-2586.php",to:"https://itm.tcu.edu.tw/p/412-1022-2586.php",sessions:16}
  ],
  data_quality_snapshot:[
    {issue_type:"JSON-LD 結構化資料缺失",affected_count:0,example:"首頁未偵測到 application/ld+json",severity:"高",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-SCHEMA-001: 缺 Department / Organization schema"},
    {issue_type:"H1 不唯一或不存在",affected_count:1,example:"首頁 H1 數量與規範不符",severity:"高",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-ENTITY-001: 主標唯一性檢核"},
    {issue_type:"圖片 alt 為空白或泛稱",affected_count:0,example:"alt 為空、為數字或為通用詞",severity:"中",suggested_owner:"單位網站管理人",status:"待修",evidence_rule:"GEO-MEDIA-001: 圖片語意描述檢核"},
    {issue_type:"舊網域 (tcust) 連結",affected_count:0,example:"首頁有 tcust.edu.tw 連結",severity:"中",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-DOMAIN-001: 301 與 canonical 修正"},
    {issue_type:"重複元素 ID",affected_count:0,example:"模板生成的 Hln_* 系列 ID 重複",severity:"中",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-DUPLICATE-ID-001: 模板 ID 重整"},
    {issue_type:"未知國家/未設定",affected_count:0,example:"country 為 (not set) 的工作階段",severity:"中",suggested_owner:"GA4",status:"正常",evidence_rule:"GA4-COUNTRY-NULL: 已知資料限制"},
    {issue_type:"內部迴圈工作階段",affected_count:0,example:"medium=internal 的工作階段",severity:"低",suggested_owner:"GA4",status:"正常",evidence_rule:"GA4-INTERNAL-001: 站內跳轉監控"},
    {issue_type:"零點擊高曝光查詢",affected_count:6,example:"曝光 > 50 但點擊 = 0 的查詢",severity:"中",suggested_owner:"單位網站管理人",status:"待修",evidence_rule:"GSC-ZERO-CTR-001: 標題/描述優化對象"}
  ],

    }
  },

  geo: {
      auditDate: "2026-08-07",
      auditedUrl: "https://itm.tcu.edu.tw/",
      maximumScore: 100,
      auditCounts: {
        jsonLdCount: 0,
        h1Count: 1,
        totalImages: 1,
        missingAltCount: 1,
        oldDomainLinkCount: 0,
        duplicateIdCount: 29
      },
      auditCrawlDate: "2026-08-07",
      subscores: [
        {
          label: "主題清楚度",
          score: 20,
          maximum: 20
        },
        {
          label: "招生資訊完整度",
          score: 8,
          maximum: 20
        },
        {
          label: "可信度",
          score: 16,
          maximum: 20
        },
        {
          label: "內容深度",
          score: 0,
          maximum: 20
        },
        {
          label: "技術名片",
          score: 18,
          maximum: 20
        }
      ],
      managerSummary: {
        introduction: "本次針對 資訊科技與管理系 首頁做 GEO 基礎檢核；綜合評分 62/100。最高分代表「主題清楚、招生資訊完整、可被驗證、內容深度足夠、技術名片一致」全部到位。本期分數主要受 JSON-LD 結構化資料、圖片 alt 覆蓋率、舊網域連結與重複 ID 影響。",
        findings: [
          "主題與 H1：目前偵測到 1 個 H1，建議維持單一明確主標。",
          "結構化資料：JSON-LD 0 組，建議補 Department / EducationalOrganization schema。",
          "圖片覆蓋：1/1 圖片 alt 為空白或泛稱。",
          "舊網域連結：0 個 tcust.edu.tw 連結待替換為正式網域。",
          "重複 ID：29 處，建議重整模板輸出。"
        ]
      },
      technicalAudit: {
        implemented: [],
        warnings: [
          {
            n: 2,
            label: "唯一 H1",
            value: "1 個",
            note: "建議單一明確主標"
          },
          {
            n: 3,
            label: "圖片總數",
            value: "1 張",
            note: "其中 alt 為空白或泛稱者需補上語意"
          }
        ],
        missing: [
          {
            n: 1,
            label: "JSON-LD 結構化資料",
            value: "0 組",
            note: "Department / EducationalOrganization 尚未輸出"
          },
          {
            n: 4,
            label: "舊網域 (tcust) 連結",
            value: "0 個",
            note: "需替換或設 301 轉址"
          },
          {
            n: 5,
            label: "重複元素 ID",
            value: "29 處",
            note: "多為模板生成，建議改為 class 或動態 ID"
          }
        ]
      },
      status: "中等"
    }
};
