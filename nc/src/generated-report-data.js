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
// Migration note (2026-08-07, analytics_refresh.py v2): adds 8 missing sections,
// the top-level geo object, real KPI trend/avg/spark, GSC merge in weekly aggregate.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "護理學系",
    siteDomain: "nc.tcu.edu.tw",
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
    {k:"本週造訪人數",v:"202",trend:"+5.2%",avg:"前 8 週平均 140",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[58,38,42,19,8,37,38]},
    {k:"本週工作階段",v:"240",trend:"+2.6%",avg:"前 8 週平均 175",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[58,38,42,19,8,37,38]},
    {k:"Google 搜尋點擊",v:"116",trend:"-0.9%",avg:"前 8 週平均 104",up:false,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[58,38,42,19,8,37,38]},
    {k:"Google 搜尋點擊率",v:"4.24%",trend:"+0.1pt",avg:"前 8 週平均 4.15%",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[58,38,42,19,8,37,38]}],
    traffic:{a:[58,38,42,19,8,37,38],b:[173,97,112,24,9,57,72]},
    search:{a:[402,346,387,278,304,535,487],b:[23,18,14,5,7,22,27]},
    funnel:{a:[58,38,42,19,8,37,38],b:[10,9,10,6,0,12,10],c:[0,0,0,0,0,0,0]},
    audience:{total:240,country:[{name:"臺灣",sessions:184,users:133,share:76.7},{name:"中國",sessions:43,users:43,share:17.9},{name:"美國",sessions:4,users:4,share:1.7},{name:"新加坡",sessions:4,users:3,share:1.7},{name:"加拿大",sessions:1,users:1,share:0.4},{name:"巴西",sessions:1,users:1,share:0.4},{name:"科威特",sessions:1,users:1,share:0.4},{name:"澳門",sessions:1,users:1,share:0.4},{name:"香港",sessions:1,users:1,share:0.4}],device:[{name:"desktop",sessions:169,users:124,share:70.4},{name:"mobile",sessions:72,users:65,share:30.0}],source:[{name:"(direct)",medium:"(none)",sessions:146,users:107,share:60.8},{name:"google",medium:"organic",sessions:90,users:77,share:37.5},{name:"reporttcu-git-main-tcucc.vercel.app",medium:"referral",sessions:2,users:1,share:0.8},{name:"chatgpt.com",medium:"ai-assistant",sessions:1,users:1,share:0.4},{name:"tw.search.yahoo.com",medium:"referral",sessions:1,users:1,share:0.4},{name:"cse.google.com",medium:"referral",sessions:1,users:1,share:0.4}]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{
  trends:[
    {week:"06/09",sessions:271,users:236,pageviews:814,impressions:3087,clicks:187},{week:"06/15",sessions:57,users:45,pageviews:132,impressions:2552,clicks:127},{week:"06/22",sessions:236,users:193,pageviews:556,impressions:2908,clicks:93},{week:"06/29",sessions:187,users:165,pageviews:304,impressions:2644,clicks:87},{week:"07/06",sessions:139,users:127,pageviews:233,impressions:2466,clicks:73},{week:"07/13",sessions:215,users:187,pageviews:464,impressions:2560,clicks:105},{week:"07/20",sessions:202,users:177,pageviews:298,impressions:2775,clicks:113},{week:"07/27",sessions:96,users:82,pageviews:144,impressions:996,clicks:44}],
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
    {query:"慈濟副院長", cls:"brand", imp:17, clicks:0, sum_position:113, landing:"https://nc.tcu.edu.tw/p/403-1014-1034-1.php"},
    {query:"慈濟護理", cls:"brand", imp:17, clicks:0, sum_position:23, landing:"https://nc.tcu.edu.tw/"},
    {query:"陳佳蓉", cls:"nonbrand", imp:16, clicks:0, sum_position:73, landing:"https://nc.tcu.edu.tw/p/406-1014-65180,r1020.php"},
    {query:"護理學院", cls:"brand", imp:15, clicks:1, sum_position:109, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟護專", cls:"brand", imp:13, clicks:0, sum_position:102, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟大學護理科", cls:"brand", imp:13, clicks:0, sum_position:54, landing:"https://nc.tcu.edu.tw/"},
    {query:"慈濟護理科", cls:"brand", imp:13, clicks:0, sum_position:62, landing:"https://nc.tcu.edu.tw/"},
    {query:"蔡淑鳳", cls:"nonbrand", imp:12, clicks:0, sum_position:96, landing:"https://nc.tcu.edu.tw/p/16-1014-65001.php"},
    {query:"邱曉彥", cls:"nonbrand", imp:10, clicks:1, sum_position:84, landing:"https://nc.tcu.edu.tw/p/406-1014-65223,r1051.php"},
    {query:"吳素月", cls:"nonbrand", imp:10, clicks:0, sum_position:1, landing:"https://nc.tcu.edu.tw/p/406-1014-64726,r1027.php"},
    {query:"周桂如教授", cls:"nonbrand", imp:8, clicks:0, sum_position:19, landing:"https://nc.tcu.edu.tw/p/16-1014-65224.php"},
    {query:"黃君后", cls:"nonbrand", imp:8, clicks:3, sum_position:12, landing:"https://nc.tcu.edu.tw/p/403-1014-1026-1.php"}
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
  traffic_quality:[
    {group:"Direct",source:"(direct)",medium:"(none)",sessions:146,users:107,avg_eng_sec_per_session:42.5,internal_clicks:190,downloads:5,cta_clicks:196,sample_note:"足夠"},
    {group:"Organic Search",source:"google",medium:"organic",sessions:90,users:77,avg_eng_sec_per_session:31.6,internal_clicks:114,downloads:3,cta_clicks:118,sample_note:"足夠"},
    {group:"Referral",source:"reporttcu-git-main-tcucc.vercel.app",medium:"referral",sessions:2,users:1,avg_eng_sec_per_session:296.5,internal_clicks:5,downloads:0,cta_clicks:7,sample_note:"樣本極少"},
    {group:"Referral",source:"cse.google.com",medium:"referral",sessions:1,users:1,avg_eng_sec_per_session:40.7,internal_clicks:3,downloads:0,cta_clicks:3,sample_note:"樣本極少"},
    {group:"Referral",source:"tw.search.yahoo.com",medium:"referral",sessions:1,users:1,avg_eng_sec_per_session:14.5,internal_clicks:3,downloads:0,cta_clicks:3,sample_note:"樣本極少"},
    {group:"AI Referral",source:"chatgpt.com",medium:"ai-assistant",sessions:1,users:1,avg_eng_sec_per_session:0,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"樣本極少"}
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
    {cta_category:"招生簡章",distinct_links:4,sessions:5,users:5,sample_note:"樣本較少"},
    {cta_category:"下載文件",distinct_links:5,sessions:6,users:6,sample_note:"樣本較少"},
    {cta_category:"入學方式",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"LINE",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"電話",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"Email",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"報名系統",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"聯絡表單",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"其他連結",distinct_links:72,sessions:57,users:43,sample_note:"足夠"}
  ],
  cta_links:[
    {category:"其他連結",link_text:"",source_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",destination:"https://tcunursing.tcu.edu.tw/?page_id=4469",clicks:17,users:13,valid_rate:0.76},
    {category:"其他連結",link_text:"護理科(五專)",source_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",destination:"https://na.tcu.edu.tw/p/412-1015-3071.php",clicks:14,users:10,valid_rate:0.71},
    {category:"其他連結",link_text:"",source_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",destination:"https://na.tcu.edu.tw/p/412-1015-3071.php",clicks:14,users:10,valid_rate:0.71},
    {category:"其他連結",link_text:"護理學系(四年制、二年制)",source_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",destination:"https://tcunursing.tcu.edu.tw/?page_id=4469",clicks:13,users:12,valid_rate:0.92},
    {category:"其他連結",link_text:"師資成員",source_page:"https://nc.tcu.edu.tw/",destination:"https://nc.tcu.edu.tw/p/412-1014-2992.php",clicks:12,users:11,valid_rate:0.92},
    {category:"其他連結",link_text:"學院行政人員",source_page:"https://nc.tcu.edu.tw/p/412-1014-4934.php?Lang=zh-tw",destination:"https://nc.tcu.edu.tw/p/412-1014-4934.php?Lang=zh-tw#cmb_90_1",clicks:8,users:6,valid_rate:0.75},
    {category:"其他連結",link_text:"慈濟大學護理學院 College of Nursing",source_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",destination:"https://nc.tcu.edu.tw/",clicks:7,users:2,valid_rate:0.29},
    {category:"其他連結",link_text:"國際交流",source_page:"https://nc.tcu.edu.tw/",destination:"https://na.tcu.edu.tw/p/412-1015-3208.php?Lang=zh-tw",clicks:7,users:7,valid_rate:1.0},
    {category:"其他連結",link_text:"",source_page:"https://nc.tcu.edu.tw/",destination:"https://na.tcu.edu.tw/p/412-1015-3208.php?Lang=zh-tw",clicks:7,users:7,valid_rate:1.0},
    {category:"其他連結",link_text:"02 護理學院簡介 認識護理學院各學制與學習方向。 ›",source_page:"https://nc.tcu.edu.tw/",destination:"https://nc.tcu.edu.tw/#Dyn_2_3",clicks:6,users:2,valid_rate:0.33}
  ],
  international:[
    {country:"臺灣",sessions:184,users:133,avg_eng_sec:51.1,top_landing:"https://nc.tcu.edu.tw/",admission_cta:8,contact_click:8,sample_note:"足夠"},
    {country:"中國",sessions:43,users:43,avg_eng_sec:1.0,top_landing:"https://nc.tcu.edu.tw/index.php",admission_cta:0,contact_click:0,sample_note:"足夠"},
    {country:"新加坡",sessions:4,users:3,avg_eng_sec:48.3,top_landing:"https://nc.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"本期 0"},
    {country:"美國",sessions:4,users:4,avg_eng_sec:0.6,top_landing:"https://nc.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"本期 0"},
    {country:"巴西",sessions:1,users:1,avg_eng_sec:10.0,top_landing:"https://nc.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"本期 0"},
    {country:"澳門",sessions:1,users:1,avg_eng_sec:1.7,top_landing:"https://nc.tcu.edu.tw/p/406-1014-64715,r1027.php",admission_cta:0,contact_click:0,sample_note:"本期 0"},
    {country:"加拿大",sessions:1,users:1,avg_eng_sec:21.7,top_landing:"https://nc.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"本期 0"},
    {country:"香港",sessions:1,users:1,avg_eng_sec:30.5,top_landing:"https://nc.tcu.edu.tw/p/406-1014-65917,r1051.php",admission_cta:0,contact_click:0,sample_note:"本期 0"},
    {country:"科威特",sessions:1,users:1,avg_eng_sec:0.0,top_landing:"https://nc.tcu.edu.tw/p/16-1014-66005.php",admission_cta:0,contact_click:0,sample_note:"本期 0"}
  ],
  user_paths:[
    {landing:"https://nc.tcu.edu.tw/",second_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",exit_action:"繼續瀏覽",sessions:11,exit_share:0.355},
    {landing:"https://nc.tcu.edu.tw/",second_page:"https://nc.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:11,exit_share:0.355},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php",second_page:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php",exit_action:"繼續瀏覽",sessions:6,exit_share:0.545},
    {landing:"https://nc.tcu.edu.tw/",second_page:"https://nc.tcu.edu.tw/p/426-1014-7.php",exit_action:"繼續瀏覽",sessions:3,exit_share:0.097},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php",second_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",exit_action:"繼續瀏覽",sessions:3,exit_share:0.273},
    {landing:"https://nc.tcu.edu.tw/",second_page:"https://nc.tcu.edu.tw/p/412-1014-4938.php",exit_action:"繼續瀏覽",sessions:3,exit_share:0.097},
    {landing:"https://nc.tcu.edu.tw/p/404-1014-66162.php",second_page:"https://nc.tcu.edu.tw/p/404-1014-66162.php",exit_action:"繼續瀏覽",sessions:3,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/",second_page:"https://nc.tcu.edu.tw/p/412-1014-4934.php",exit_action:"繼續瀏覽",sessions:3,exit_share:0.097},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64714,r1029.php",second_page:"https://nc.tcu.edu.tw/p/406-1014-64714,r1029.php",exit_action:"繼續瀏覽",sessions:2,exit_share:0.667},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64699,r1026.php",second_page:"https://nc.tcu.edu.tw/p/406-1014-64699,r1026.php",exit_action:"繼續瀏覽",sessions:2,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/403-1014-1027-1.php",second_page:"https://nc.tcu.edu.tw/p/403-1014-1027-1.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/426-1014-9.php",second_page:"https://nc.tcu.edu.tw/p/426-1014-8.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php",second_page:"https://nc.tcu.edu.tw/p/16-1014-64700.php",exit_action:"繼續瀏覽",sessions:1,exit_share:0.091},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64714,r1029.php",second_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",exit_action:"繼續瀏覽",sessions:1,exit_share:0.333},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64709,r1026.php",second_page:"https://nc.tcu.edu.tw/p/406-1014-64709,r1026.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64697,r1034.php",second_page:"https://nc.tcu.edu.tw/p/406-1014-64697,r1034.php",exit_action:"繼續瀏覽",sessions:1,exit_share:0.5},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64697,r1034.php",second_page:"https://nc.tcu.edu.tw/p/403-1014-1034-1.php",exit_action:"繼續瀏覽",sessions:1,exit_share:0.5},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php",second_page:"https://nc.tcu.edu.tw/p/403-1014-1026-1.php",exit_action:"繼續瀏覽",sessions:1,exit_share:0.091},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-65917,r1051.php",second_page:"https://nc.tcu.edu.tw/p/406-1014-65917,r1051.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-65941,r1023.php",second_page:"https://nc.tcu.edu.tw/p/406-1014-64729,r1027.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/412-1014-4938.php",second_page:"https://nc.tcu.edu.tw/p/406-1014-65707,r1051.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/406-1014-66162,r1023.php",second_page:"https://nc.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/412-1014-2992.php",second_page:"https://nc.tcu.edu.tw/p/412-1014-4934.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/412-1014-4934.php",second_page:"https://nc.tcu.edu.tw/p/412-1014-2992.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0},
    {landing:"https://nc.tcu.edu.tw/p/412-1014-4969.php",second_page:"https://nc.tcu.edu.tw/p/412-1014-4934.php",exit_action:"繼續瀏覽",sessions:1,exit_share:1.0}
  ],
  user_path_transitions:[
    {from:"https://nc.tcu.edu.tw/",to:"https://nc.tcu.edu.tw/",sessions:11},
    {from:"https://nc.tcu.edu.tw/",to:"https://nc.tcu.edu.tw/p/412-1014-2992.php",sessions:11},
    {from:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php",to:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php",sessions:6},
    {from:"https://nc.tcu.edu.tw/p/406-1014-64700,r1026.php",to:"https://nc.tcu.edu.tw/p/412-1014-2992.php",sessions:3},
    {from:"https://nc.tcu.edu.tw/",to:"https://nc.tcu.edu.tw/p/426-1014-7.php",sessions:3}
  ],
  data_quality_snapshot:[
    {issue_type:"JSON-LD 結構化資料缺失",affected_count:0,example:"首頁未偵測到 application/ld+json",severity:"高",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-SCHEMA-001: 缺 Department / Organization schema"},
    {issue_type:"H1 不唯一或不存在",affected_count:1,example:"首頁 H1 數量與規範不符",severity:"高",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-ENTITY-001: 主標唯一性檢核"},
    {issue_type:"圖片 alt 為空白或泛稱",affected_count:0,example:"alt 為空、為數字或為通用詞",severity:"中",suggested_owner:"單位網站管理人",status:"待修",evidence_rule:"GEO-MEDIA-001: 圖片語意描述檢核"},
    {issue_type:"舊網域 (tcust) 連結",affected_count:0,example:"首頁有 tcust.edu.tw 連結",severity:"中",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-DOMAIN-001: 301 與 canonical 修正"},
    {issue_type:"重複元素 ID",affected_count:0,example:"模板生成的 Hln_* 系列 ID 重複",severity:"中",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-DUPLICATE-ID-001: 模板 ID 重整"},
    {issue_type:"未知國家/未設定",affected_count:0,example:"country 為 (not set) 的工作階段",severity:"中",suggested_owner:"GA4",status:"正常",evidence_rule:"GA4-COUNTRY-NULL: 已知資料限制"},
    {issue_type:"內部迴圈工作階段",affected_count:0,example:"medium=internal 的工作階段",severity:"低",suggested_owner:"GA4",status:"正常",evidence_rule:"GA4-INTERNAL-001: 站內跳轉監控"},
    {issue_type:"零點擊高曝光查詢",affected_count:3,example:"曝光 > 50 但點擊 = 0 的查詢",severity:"中",suggested_owner:"單位網站管理人",status:"待修",evidence_rule:"GSC-ZERO-CTR-001: 標題/描述優化對象"}
  ],

    }
  },

  geo: {
      auditDate: "2026-08-07",
      auditedUrl: "https://nc.tcu.edu.tw/",
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
        introduction: "本次針對 護理學系 首頁做 GEO 基礎檢核；綜合評分 62/100。最高分代表「主題清楚、招生資訊完整、可被驗證、內容深度足夠、技術名片一致」全部到位。本期分數主要受 JSON-LD 結構化資料、圖片 alt 覆蓋率、舊網域連結與重複 ID 影響。",
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
