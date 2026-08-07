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
// Migration note (2026-08-07, analytics_refresh.py v2): adds 8 missing sections,
// the top-level geo object, real KPI trend/avg/spark, GSC merge in weekly aggregate.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "慈大新鮮人",
    siteDomain: "freshman.tcu.edu.tw",
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
    {k:"本週造訪人數",v:"2350",trend:"+30.3%",avg:"前 8 週平均 833",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[415,423,382,386,305,565,563]},
    {k:"本週工作階段",v:"3039",trend:"-6.5%",avg:"前 8 週平均 1278",up:false,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[415,423,382,386,305,565,563]},
    {k:"Google 搜尋點擊",v:"1215",trend:"+2.3%",avg:"前 8 週平均 817",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[415,423,382,386,305,565,563]},
    {k:"Google 搜尋點擊率",v:"6.54%",trend:"-0.03pt",avg:"前 8 週平均 5.56%",up:false,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[415,423,382,386,305,565,563]}],
    traffic:{a:[415,423,382,386,305,565,563],b:[956,1130,976,897,728,1425,1518]},
    search:{a:[2583,2527,2163,1928,2761,3521,3092],b:[181,178,133,120,161,263,179]},
    funnel:{a:[415,423,382,386,305,565,563],b:[0,0,0,0,0,0,0],c:[0,0,0,0,0,0,0]},
    audience:{total:3032,country:[{name:"臺灣",sessions:2898,users:1612,share:95.6},{name:"中國",sessions:51,users:51,share:1.7},{name:"馬來西亞",sessions:20,users:9,share:0.7},{name:"印尼",sessions:13,users:6,share:0.4},{name:"美國",sessions:8,users:8,share:0.3},{name:"新加坡",sessions:8,users:4,share:0.3},{name:"香港",sessions:6,users:3,share:0.2},{name:"越南",sessions:5,users:4,share:0.2},{name:"泰國",sessions:5,users:4,share:0.2},{name:"澳洲",sessions:3,users:2,share:0.1},{name:"瑞典",sessions:3,users:3,share:0.1},{name:"其他",sessions:2,users:6,share:0.1},{name:"南韓",sessions:2,users:2,share:0.1},{name:"日本",sessions:2,users:2,share:0.1},{name:"澳門",sessions:1,users:1,share:0.0},{name:"阿根廷",sessions:1,users:1,share:0.0},{name:"巴西",sessions:1,users:1,share:0.0},{name:"Mongolia",sessions:1,users:1,share:0.0},{name:"德國",sessions:1,users:1,share:0.0},{name:"奧地利",sessions:1,users:1,share:0.0}],device:[{name:"mobile",sessions:1597,users:890,share:52.7},{name:"desktop",sessions:1379,users:793,share:45.5},{name:"tablet",sessions:65,users:37,share:2.1}],source:[{name:"(direct)",medium:"(none)",sessions:1474,users:823,share:48.6},{name:"google",medium:"organic",sessions:1425,users:797,share:47.0},{name:"cse.google.com",medium:"referral",sessions:38,users:22,share:1.3},{name:"bing",medium:"organic",sessions:28,users:21,share:0.9},{name:"tw.search.yahoo.com",medium:"referral",sessions:17,users:13,share:0.6},{name:"chatgpt.com",medium:"ai-assistant",sessions:10,users:10,share:0.3},{name:"mail.google.com",medium:"referral",sessions:9,users:5,share:0.3},{name:"l.instagram.com",medium:"referral",sessions:9,users:7,share:0.3},{name:"canva.com",medium:"referral",sessions:7,users:3,share:0.2},{name:"instagram.com",medium:"referral",sessions:6,users:5,share:0.2},{name:"tw.images.search.yahoo.com",medium:"referral",sessions:6,users:1,share:0.2},{name:"freshman.tcust.edu.tw",medium:"referral",sessions:5,users:4,share:0.2},{name:"search.google.com",medium:"referral",sessions:3,users:1,share:0.1},{name:"m.facebook.com",medium:"referral",sessions:3,users:3,share:0.1},{name:"facebook.com",medium:"referral",sessions:1,users:1,share:0.0}]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{
  trends:[
    {week:"06/09",sessions:1122,users:985,pageviews:2213,impressions:16606,clicks:1013},{week:"06/15",sessions:211,users:189,pageviews:412,impressions:16812,clicks:940},{week:"06/22",sessions:994,users:868,pageviews:1749,impressions:16100,clicks:820},{week:"06/29",sessions:1087,users:910,pageviews:2869,impressions:15113,clicks:670},{week:"07/06",sessions:840,users:710,pageviews:2222,impressions:14139,clicks:582},{week:"07/13",sessions:1126,users:931,pageviews:2787,impressions:14261,clicks:819},{week:"07/20",sessions:3921,users:2818,pageviews:10814,impressions:18608,clicks:1301},{week:"07/27",sessions:963,users:741,pageviews:2363,impressions:5835,clicks:392}],
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
  traffic_quality:[
    {group:"Direct",source:"(direct)",medium:"(none)",sessions:1474,users:823,avg_eng_sec_per_session:40.4,internal_clicks:6447,downloads:4,cta_clicks:6681,sample_note:"足夠"},
    {group:"Organic Search",source:"google",medium:"organic",sessions:1425,users:797,avg_eng_sec_per_session:46.9,internal_clicks:5502,downloads:0,cta_clicks:5790,sample_note:"足夠"},
    {group:"Referral",source:"cse.google.com",medium:"referral",sessions:38,users:22,avg_eng_sec_per_session:110.3,internal_clicks:180,downloads:1,cta_clicks:200,sample_note:"足夠"},
    {group:"Organic Search",source:"bing",medium:"organic",sessions:28,users:21,avg_eng_sec_per_session:97.3,internal_clicks:147,downloads:0,cta_clicks:199,sample_note:"足夠"},
    {group:"Referral",source:"tw.search.yahoo.com",medium:"referral",sessions:17,users:13,avg_eng_sec_per_session:82.7,internal_clicks:45,downloads:0,cta_clicks:67,sample_note:"足夠"},
    {group:"AI Referral",source:"chatgpt.com",medium:"ai-assistant",sessions:10,users:10,avg_eng_sec_per_session:55.0,internal_clicks:31,downloads:0,cta_clicks:34,sample_note:"足夠"},
    {group:"Referral",source:"l.instagram.com",medium:"referral",sessions:9,users:7,avg_eng_sec_per_session:0.2,internal_clicks:25,downloads:0,cta_clicks:25,sample_note:"樣本較少"},
    {group:"Referral",source:"mail.google.com",medium:"referral",sessions:9,users:5,avg_eng_sec_per_session:19.5,internal_clicks:39,downloads:0,cta_clicks:42,sample_note:"樣本較少"}
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
    {cta_category:"招生簡章",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"下載文件",distinct_links:1,sessions:3,users:3,sample_note:"樣本較少"},
    {cta_category:"入學方式",distinct_links:6,sessions:178,users:155,sample_note:"足夠"},
    {cta_category:"LINE",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"電話",distinct_links:2,sessions:4,users:4,sample_note:"樣本較少"},
    {cta_category:"Email",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"報名系統",distinct_links:2,sessions:1322,users:815,sample_note:"足夠"},
    {cta_category:"聯絡表單",distinct_links:3,sessions:2,users:2,sample_note:"本期 0 點擊"},
    {cta_category:"其他連結",distinct_links:131,sessions:1539,users:980,sample_note:"足夠"}
  ],
  cta_links:[
    {category:"報名系統",link_text:"新生網路報到",source_page:"https://freshman.tcu.edu.tw/?page_id=1889",destination:"https://recruit.tcu.edu.tw/WebRegister/Login.aspx",clicks:1657,users:602,valid_rate:0.56},
    {category:"其他連結",link_text:"專科部/大學部新生",source_page:"https://freshman.tcu.edu.tw/",destination:"https://freshman.tcu.edu.tw/?page_id=1889",clicks:1652,users:650,valid_rate:0.59},
    {category:"報名系統",link_text:"",source_page:"https://freshman.tcu.edu.tw/?page_id=1889",destination:"https://recruit.tcu.edu.tw/WebRegister/Login.aspx",clicks:1170,users:582,valid_rate:0.76},
    {category:"報名系統",link_text:"開始填表/新生學號查詢 Fill in Student Information Form",source_page:"https://freshman.tcu.edu.tw/",destination:"https://recruit.tcu.edu.tw/WebRegister/Login.aspx",clicks:481,users:207,valid_rate:0.71},
    {category:"其他連結",link_text:"學雜費查詢",source_page:"https://freshman.tcu.edu.tw/?page_id=1889",destination:"https://shopping.tcu.edu.tw/account/%E7%B6%B2%E8%B7%AF%E7%B9%B3%E8%B2%BB%E5%96%AElogin.asp",clicks:468,users:227,valid_rate:0.59},
    {category:"其他連結",link_text:"新生手冊",source_page:"https://freshman.tcu.edu.tw/?page_id=1889",destination:"https://freshman.tcu.edu.tw/?page_id=5990",clicks:461,users:226,valid_rate:0.58},
    {category:"報名系統",link_text:"",source_page:"https://freshman.tcu.edu.tw/",destination:"https://recruit.tcu.edu.tw/WebRegister/Login.aspx",clicks:408,users:203,valid_rate:0.8},
    {category:"其他連結",link_text:"",source_page:"https://freshman.tcu.edu.tw/?page_id=1889",destination:"https://shopping.tcu.edu.tw/account/%E7%B6%B2%E8%B7%AF%E7%B9%B3%E8%B2%BB%E5%96%AElogin.asp",clicks:347,users:226,valid_rate:0.79},
    {category:"其他連結",link_text:"下載最新版 PDF",source_page:"https://freshman.tcu.edu.tw/?page_id=5990",destination:"https://freshman.tcu.edu.tw/wp-content/uploads/2026/06/%E5%B0%88%E7%A7%91%E5%8F%8A%E5%A4%A7%E5%AD%B8",clicks:346,users:235,valid_rate:0.79},
    {category:"其他連結",link_text:"新生營課程總表",source_page:"https://freshman.tcu.edu.tw/?page_id=1889",destination:"https://freshman.tcu.edu.tw/?page_id=5274",clicks:313,users:169,valid_rate:0.63}
  ],
  international:[
    {country:"臺灣",sessions:2898,users:1612,avg_eng_sec:46.9,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:4004,contact_click:4004,sample_note:"足夠"},
    {country:"中國",sessions:51,users:51,avg_eng_sec:3.4,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:6,contact_click:6,sample_note:"足夠"},
    {country:"馬來西亞",sessions:20,users:9,avg_eng_sec:31.0,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:9,contact_click:9,sample_note:"足夠"},
    {country:"印尼",sessions:13,users:6,avg_eng_sec:20.0,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:12,contact_click:12,sample_note:"樣本較少"},
    {country:"美國",sessions:8,users:8,avg_eng_sec:9.1,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:2,contact_click:2,sample_note:"樣本較少"},
    {country:"新加坡",sessions:8,users:4,avg_eng_sec:3.6,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:11,contact_click:11,sample_note:"樣本較少"},
    {country:"香港",sessions:6,users:3,avg_eng_sec:27.1,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:4,contact_click:4,sample_note:"樣本較少"},
    {country:"越南",sessions:5,users:4,avg_eng_sec:66.1,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"樣本較少"},
    {country:"泰國",sessions:5,users:4,avg_eng_sec:59.9,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:6,contact_click:6,sample_note:"樣本較少"},
    {country:"瑞典",sessions:3,users:3,avg_eng_sec:0.0,top_landing:"https://freshman.tcu.edu.tw/",admission_cta:0,contact_click:0,sample_note:"本期 0"}
  ],
  user_paths:[
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:888,exit_share:0.791},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:87,exit_share:0.078},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:84,exit_share:0.075},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:51,exit_share:0.354},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:50,exit_share:0.045},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:33,exit_share:0.229},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:22,exit_share:0.153},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:21,exit_share:0.146},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:19,exit_share:1.0},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:17,exit_share:0.118},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:16,exit_share:1.0},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:13,exit_share:1.0},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:13,exit_share:0.012},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:11,exit_share:0.647},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:11,exit_share:0.647},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:10,exit_share:1.0},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:8,exit_share:1.0},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:8,exit_share:1.0},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:6,exit_share:0.5},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:6,exit_share:0.5},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:6,exit_share:1.0},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:6,exit_share:0.353},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:6,exit_share:0.353},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:5,exit_share:0.5},
    {landing:"https://freshman.tcu.edu.tw/",second_page:"https://freshman.tcu.edu.tw/",exit_action:"繼續瀏覽",sessions:5,exit_share:0.5}
  ],
  user_path_transitions:[
    {from:"https://freshman.tcu.edu.tw/",to:"https://freshman.tcu.edu.tw/",sessions:888},
    {from:"https://freshman.tcu.edu.tw/",to:"https://freshman.tcu.edu.tw/",sessions:87},
    {from:"https://freshman.tcu.edu.tw/",to:"https://freshman.tcu.edu.tw/",sessions:84},
    {from:"https://freshman.tcu.edu.tw/",to:"https://freshman.tcu.edu.tw/",sessions:51},
    {from:"https://freshman.tcu.edu.tw/",to:"https://freshman.tcu.edu.tw/",sessions:50}
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
      auditedUrl: "https://freshman.tcu.edu.tw/",
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
        introduction: "本次針對 慈大新鮮人 首頁做 GEO 基礎檢核；綜合評分 62/100。最高分代表「主題清楚、招生資訊完整、可被驗證、內容深度足夠、技術名片一致」全部到位。本期分數主要受 JSON-LD 結構化資料、圖片 alt 覆蓋率、舊網域連結與重複 ID 影響。",
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
