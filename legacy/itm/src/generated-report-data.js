// src/generated-report-data.js
// Single source of truth for ALL frequently changing ITM report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files (index.html, app.js, main.js, evidence-renderer.js,
// report-renderer.js) read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026-08-04 (Tue)
// Cutoff (smallest max_date across 3 sources): 2026-08-02
// Site: 資訊科技與管理系 (itm.tcu.edu.tw)
//
// Migration note (2026-08-04, prompt 22): this file now contains the FULL
// pre-refactor dataset. Datasets previously left as empty arrays
// (content_matrix, traffic_quality, ai_platforms, cta_funnel, cta_links,
// international, user_paths, user_path_transitions, data_quality_snapshot)
// are restored from git history.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "資訊科技與管理系",
    siteDomain: "itm.tcu.edu.tw",
    reportVersion: "v56",
    updatedAt: "2026/08/04",
    sourceCount: 3
  },

  periods: {
    current: { start: "2026/07/27", end: "2026/08/02" },
    previous: { start: "2026/07/20", end: "2026/07/26" },
    trend:    { start: "2026/06/08", end: "2026/08/02" }
  },

  chartLabels: ["07/27","07/28","07/29","07/30","07/31","08/01","08/02"],

  metrics: {
    weeks:  ["07/27","07/28","07/29","07/30","07/31","08/01","08/02"],
    kpis: [
{k:"本週造訪人數",v:"226",trend:"+48.7%",avg:"前 7 天",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[33, 40, 30, 34, 42, 15, 32]},
{k:"本週工作階段",v:"262",trend:"+50.6%",avg:"前 7 天",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[38, 45, 45, 40, 47, 15, 32]},
{k:"Google 搜尋點擊",v:"88",trend:"+39.7%",avg:"前 7 天",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[22, 13, 24, 11, 4, 6, 8]},
{k:"Google 搜尋點擊率",v:"3.65%",trend:"+30.8%",avg:"前 7 天平均",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[22, 13, 24, 11, 4, 6, 8]}
    ],
    traffic: {a:[38,45,45,40,47,15,32],b:[170,116,177,186,148,27,76]},
    search:  {a:[358,321,308,327,253,231,614],b:[22,13,24,11,4,6,8]},
    funnel:  {a:[43, 36, 22, 34, 29, 14, 17],b:[148, 177, 91, 250, 103, 35, 39],c:[0,0,0,0,0,0,0]},
    audience: {total:222,country:[{name:"Taiwan",sessions:149,users:109,share:67.1},{name:"China",sessions:65,users:65,share:29.3},{name:"United States",sessions:5,users:4,share:2.3},{name:"Indonesia",sessions:1,users:1,share:0.5}],device:[{name:"desktop",sessions:147,users:129,share:66.2},{name:"tablet",sessions:2,users:2,share:0.9},{name:"mobile",sessions:73,users:50,share:32.9}],source:[{name:"(direct)/(none)",medium:"other",sessions:162,users:135,share:73.0},{name:"google/organic",medium:"organic",sessions:53,users:40,share:23.9},{name:"lle.moe.edu.tw/referral",medium:"internal",sessions:3,users:3,share:1.4},{name:"cse.google.com/referral",medium:"other",sessions:2,users:1,share:0.9},{name:"chatgpt.com/ai-assistant",medium:"ai",sessions:1,users:1,share:0.5}]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections: {
      trends: [
    {week:"06/07",sessions:707,users:438,pageviews:3481,impressions:4385,clicks:342},
    {week:"06/14",sessions:166,users:124,pageviews:868,impressions:3960,clicks:179},
    {week:"06/21",sessions:316,users:247,pageviews:1275,impressions:3159,clicks:112},
    {week:"06/28",sessions:214,users:171,pageviews:622,impressions:2543,clicks:70},
    {week:"07/05",sessions:219,users:163,pageviews:762,impressions:2553,clicks:73},
    {week:"07/12",sessions:240,users:195,pageviews:843,impressions:2002,clicks:54},
    {week:"07/19",sessions:221,users:180,pageviews:857,impressions:2436,clicks:77},
    {week:"07/26",sessions:18,users:17,pageviews:39,impressions:387,clicks:13},
  ],
      anomaly_rule: {
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },
      brand_config: {
    terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","資管","資訊科技與管理","ITM","itm"],
  },
      brand_split: [
    {month:"05/01", brand_pct:74.1, nonbrand_pct:25.9, brand_imp:4101, brand_clicks:79, nonbrand_imp:1434, nonbrand_clicks:35},
    {month:"06/01", brand_pct:74.3, nonbrand_pct:25.7, brand_imp:4312, brand_clicks:110, nonbrand_imp:1491, nonbrand_clicks:25},
    {month:"07/01", brand_pct:69.2, nonbrand_pct:30.8, brand_imp:2102, brand_clicks:42, nonbrand_imp:936, nonbrand_clicks:16}
  ],
      keyword_rows: [
    {query:"慈大學資",                 cls:"brand",    imp:94,  clicks:0, sum_position:367,  landing:"/"},
    {query:"site:itm.tcust.edu.tw",    cls:"brand",    imp:50,  clicks:0, sum_position:225,  landing:"/"},
    {query:"tcust",                    cls:"brand",    imp:40,  clicks:0, sum_position:0,    landing:"/"},
    {query:"site:itm.tcu.edu.tw",      cls:"brand",    imp:40,  clicks:0, sum_position:180,  landing:"/"},
    {query:"慈濟大學 資管系",           cls:"brand",    imp:37,  clicks:4, sum_position:0,    landing:"/p/412-1022-2586.php"},
    {query:"itm",                      cls:"brand",    imp:27,  clicks:0, sum_position:184,  landing:"/?Lang=en"},
    {query:"慈大 學資",                cls:"brand",    imp:26,  clicks:0, sum_position:140,  landing:"/"},
    {query:"tcu",                      cls:"brand",    imp:24,  clicks:0, sum_position:72,   landing:"/"},
    {query:"慈濟大學資管系",            cls:"brand",    imp:20,  clicks:2, sum_position:0,    landing:"/p/412-1022-2586.php"},
    {query:"慈濟大學資訊科技與管理學系",  cls:"brand",   imp:17,  clicks:2, sum_position:0,    landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
    {query:"大學專題競賽",               cls:"nonbrand", imp:16,  clicks:0, sum_position:82,   landing:"/p/404-1022-34441.php"},
    {query:"tcu itm",                  cls:"brand",    imp:12,  clicks:2, sum_position:0,    landing:"/?Lang=en"},
    {query:"證照",                      cls:"nonbrand", imp:12,  clicks:0, sum_position:509,  landing:"/p/404-1022-30082.php"},
    {query:"資訊科技系",                cls:"nonbrand", imp:10,  clicks:0, sum_position:91,   landing:"/"},
    {query:"大學專題競賽2026",          cls:"nonbrand", imp:9,   clicks:0, sum_position:53,   landing:"/p/404-1022-34441.php"},
    {query:"慈濟大學科系",              cls:"brand",    imp:8,   clicks:0, sum_position:50,   landing:"/"},
    {query:"蕭志清",                    cls:"nonbrand", imp:8,   clicks:2, sum_position:33,   landing:"/p/412-1022-2586.php"},
    {query:"楊明軒",                    cls:"nonbrand", imp:7,   clicks:0, sum_position:68,   landing:"/p/412-1022-2586.php"},
    {query:"2026專題競賽",              cls:"nonbrand", imp:7,   clicks:0, sum_position:44,   landing:"/p/404-1022-34441.php"},
    {query:"慈大資管",                  cls:"brand",    imp:7,   clicks:1, sum_position:0,    landing:"/p/412-1022-2586.php"},
    {query:"謝金峰",                    cls:"nonbrand", imp:7,   clicks:0, sum_position:38,   landing:"/p/412-1022-2586.php"}
  ],
      content_matrix: [
    {normalized_path:"/index.php",                                  title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:28, sessions:45, pageviews:166, engagement_sec:0.7},
    {normalized_path:"/p/426-1022-2.php",                           title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", users:25, sessions:25, pageviews:98,  engagement_sec:0.5},
    {normalized_path:"/",                                            title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:24, sessions:29, pageviews:95,  engagement_sec:0.9},
    {normalized_path:"/p/412-1022-2586.php",                        title:"師資陣容 - 資訊科技與管理學系", users:23, sessions:23, pageviews:64,  engagement_sec:0.4},
    {normalized_path:"/p/404-1022-52388.php",                       title:"碩士班專區 - 資訊科技與管理學系", users:10, sessions:12, pageviews:27,  engagement_sec:0.3},
    {normalized_path:"/p/403-1022-452-1.php",                       title:"最新消息 - 資訊科技與管理學系", users:8,  sessions:8,  pageviews:20,  engagement_sec:2.3},
    {normalized_path:"/p/404-1022-36099.php",                       title:"課程地圖與開課學分時數表 / Curriculum Map", users:8,  sessions:8,  pageviews:50,  engagement_sec:0.7},
    {normalized_path:"/p/404-1022-30026.php",                       title:"系所介紹 - 資訊科技與管理學系", users:7,  sessions:8,  pageviews:16,  engagement_sec:0.4},
    {normalized_path:"/p/412-1022-2570.php",                        title:"最新消息 - 資訊科技與管理學系", users:6,  sessions:6,  pageviews:20,  engagement_sec:1.4},
    {normalized_path:"/p/404-1022-34441.php",                       title:"課程規劃 - 資訊科技與管理學系", users:6,  sessions:6,  pageviews:16,  engagement_sec:0.4},
    {normalized_path:"/p/404-1022-30020.php",                       title:"入學方式 - 資訊科技與管理學系", users:6,  sessions:6,  pageviews:16,  engagement_sec:0.3},
    {normalized_path:"/p/404-1022-30062.php",                       title:"規章辦法 - 資訊科技與管理學系", users:4,  sessions:4,  pageviews:10,  engagement_sec:0.2},
    {normalized_path:"/p/403-1022-703-1.php",                       title:"Photo - 資訊科技與管理學系", users:4,  sessions:4,  pageviews:8,   engagement_sec:0.6},
    {normalized_path:"/p/426-1022-5.php",                           title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", users:4, sessions:4,  pageviews:9,   engagement_sec:0.7},
    {normalized_path:"/p/404-1022-60990.php",                       title:"碩士班相關表格 - 資訊科技與管理學系", users:4, sessions:4,  pageviews:14,  engagement_sec:0.7},
    {normalized_path:"/p/404-1022-66044.php",                       title:"智慧物聯實驗室 - 資訊科技與管理學系", users:4, sessions:4,  pageviews:6,   engagement_sec:0.1},
    {normalized_path:"/p/412-1022-2590.php",                        title:"業界實習 - 資訊科技與管理學系", users:4,  sessions:4,  pageviews:6,   engagement_sec:2.7},
    {normalized_path:"/p/17-1022.php",                              title:"網站導覽 - 資訊科技與管理學系", users:3,  sessions:3,  pageviews:4,   engagement_sec:0.1},
    {normalized_path:"/p/404-1022-45541.php",                       title:"實務專題 - 資訊科技與管理學系", users:3,  sessions:3,  pageviews:5,   engagement_sec:0.0},
    {normalized_path:"/p/406-1022-65878,r452.php",                  title:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系", users:3, sessions:3, pageviews:14, engagement_sec:0.8},
    {normalized_path:"/p/404-1022-47588.php",                       title:"人工智慧高階電腦教室 - 資訊科技與管理學系", users:3, sessions:3, pageviews:9,   engagement_sec:0.3},
    {normalized_path:"/p/406-1022-61022,r709.php",                  title:"111學年度馬來西亞偉特科技公司實習 - 資訊科技與管理學系", users:2, sessions:2, pageviews:3, engagement_sec:0.9},
    {normalized_path:"/p/404-1022-30039.php",                       title:"元宇宙多媒體實驗室 (2D107) - 資訊科技與管理學系", users:2, sessions:2, pageviews:4, engagement_sec:1.3},
    {normalized_path:"/p/403-1022-709-1.php",                       title:"海外實習 - 資訊科技與管理學系", users:2,  sessions:2,  pageviews:4,   engagement_sec:0.2},
    {normalized_path:"/p/406-1022-65512,r452.php",                  title:"2025 青春未來 AI體驗營 - 資訊科技與管理學系", users:2, sessions:2, pageviews:3, engagement_sec:0.6}
  ],
      traffic_quality: [
    {group:"Direct",          source:"(direct)",              medium:"(none)",      sessions:138, users:113, avg_eng_sec_per_session:35.1, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"足夠"},
    {group:"Organic Search",  source:"google",                medium:"organic",      sessions:46,  users:35,  avg_eng_sec_per_session:55.0, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"足夠"},
    {group:"External Referral", source:"cse.google.com",      medium:"referral",     sessions:2,   users:1,   avg_eng_sec_per_session:3.1,  internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"Internal Referral", source:"lle.moe.edu.tw",      medium:"referral",     sessions:1,   users:1,   avg_eng_sec_per_session:152.7, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"Internal Referral", source:"collego.edu.tw",       medium:"referral",     sessions:1,   users:1,   avg_eng_sec_per_session:106.1, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"AI Referral",     source:"chatgpt.com",           medium:"ai-assistant",  sessions:1,   users:1,   avg_eng_sec_per_session:0,    internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"AI Referral",     source:"perplexity.ai",         medium:"referral",     sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {group:"AI Referral",     source:"gemini.google.com",     medium:"referral",     sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {group:"Social",          source:"facebook.com",          medium:"referral",     sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"}
  ],
      ai_config: {
    domains:[
      {platform:"ChatGPT",  pattern:"chatgpt\\.com|openai\\.com|medium=ai-assistant"},
      {platform:"Perplexity", pattern:"perplexity\\.ai"},
      {platform:"Gemini",   pattern:"gemini\\.google\\.com|bard\\.google\\.com"},
      {platform:"Copilot",  pattern:"copilot\\.microsoft\\.com|bing\\.com/chat"},
      {platform:"Claude",   pattern:"claude\\.ai"},
      {platform:"Other AI", pattern:"(others|unknown)"}
    ]
  },
      ai_timeseries: [],
      ai_platforms: [
    {platform:"ChatGPT",    sessions:1, users:1, landing_page:"/p/404-1022-52388.php?Lang=zh-tw", avg_eng_sec:0, internal_clicks:0, sample_note:"樣本較少"},
    {platform:"Perplexity", sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Gemini",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Copilot",    sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Claude",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"}
  ],
      ai_total_period_sessions: 1,
      cta_funnel: [
    {cta_category:"其他連結",            distinct_links:25, sessions:38,  users:29, sample_note:"足夠"},
    {cta_category:"招生簡章",            distinct_links:9,  sessions:18,  users:17, sample_note:"足夠"},
    {cta_category:"下載文件 (PDF/DOC/XLSX)", distinct_links:6,  sessions:15,  users:15, sample_note:"足夠"},
    {cta_category:"入學方式",            distinct_links:4,  sessions:6,   users:6,  sample_note:"足夠"},
    {cta_category:"LINE",                 distinct_links:1,  sessions:2,   users:2,  sample_note:"樣本較少"},
    {cta_category:"電話",                 distinct_links:0,  sessions:0,   users:0,  sample_note:"資料不足"},
    {cta_category:"Email",                distinct_links:0,  sessions:0,   users:0,  sample_note:"資料不足"},
    {cta_category:"報名系統",            distinct_links:0,  sessions:0,   users:0,  sample_note:"資料不足"},
    {cta_category:"聯絡表單",            distinct_links:0,  sessions:0,   users:0,  sample_note:"資料不足"}
  ],
      cta_links: [
    {category:"LINE",         link_text:"加入 ITM 招生 LINE 群組",      source_page:"首頁",            destination:"https://line.me/R/ti/p/itm-tcu",         clicks:2,  users:2,  valid_rate:1.0},
    {category:"招生簡章",     link_text:"招生入學方式",                  source_page:"入學方式",        destination:"/p/404-1022-36099.php",                clicks:4,  users:4,  valid_rate:1.0},
    {category:"下載文件",     link_text:"招生簡章 PDF",                   source_page:"首頁",            destination:"/var/file/22/1022/img/1870/424380578.pdf", clicks:2, users:2, valid_rate:1.0},
    {category:"入學方式",     link_text:"個人申請",                       source_page:"招生頁",          destination:"/p/404-1022-30026.php?Lang=zh-tw",    clicks:1,  users:1,  valid_rate:1.0}
  ],
      international: [
    {country:"臺灣",   sessions:129, users:93,  avg_eng_sec:57.0,  top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"中國",   sessions:54,  users:54,  avg_eng_sec:1.9,   top_landing:"/?Lang=zh-tw",                              admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"美國",   sessions:5,   users:4,   avg_eng_sec:35.3,  top_landing:"/p/406-1022-45544,r733.php?Lang=zh-tw",     admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"德國",   sessions:1,   users:1,   avg_eng_sec:2.4,   top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"其他",   sessions:0,   users:0,   avg_eng_sec:0,     top_landing:"-",                                          admission_cta:0, contact_click:0, sample_note:"資料不足"}
  ],
      user_paths: [
    {landing:"/",                                 second_page:"/",                                 exit_action:"瀏覽後離開",  sessions:42, exit_share:0.65},
    {landing:"/p/426-1022-2.php",                  second_page:"/p/426-1022-2.php",                  exit_action:"瀏覽後離開",  sessions:24, exit_share:0.96},
    {landing:"/",                                 second_page:"/",                                 exit_action:"瀏覽後離開",  sessions:23, exit_share:0.36},
    {landing:"/p/412-1022-2586.php",              second_page:"/p/412-1022-2586.php",              exit_action:"瀏覽後離開",  sessions:8,  exit_share:0.35},
    {landing:"/p/404-1022-52388.php",             second_page:"/p/404-1022-52388.php",             exit_action:"瀏覽後離開",  sessions:6,  exit_share:0.60},
    {landing:"/p/403-1022-452-1.php",             second_page:"/p/403-1022-452-1.php",             exit_action:"瀏覽後離開",  sessions:6,  exit_share:0.75},
    {landing:"/p/412-1022-2570.php",              second_page:"/p/412-1022-2570.php",              exit_action:"瀏覽後離開",  sessions:5,  exit_share:0.71},
    {landing:"/p/404-1022-36099.php",             second_page:"/p/404-1022-36099.php",             exit_action:"瀏覽後離開",  sessions:4,  exit_share:0.50},
    {landing:"/p/412-1022-2590.php",              second_page:"/p/412-1022-2590.php",              exit_action:"瀏覽後離開",  sessions:4,  exit_share:1.00},
    {landing:"/p/403-1022-703-1.php",             second_page:"/p/403-1022-703-1.php",             exit_action:"瀏覽後離開",  sessions:4,  exit_share:1.00},
    {landing:"/p/404-1022-60990.php",             second_page:"/p/404-1022-60990.php",             exit_action:"瀏覽後離開",  sessions:3,  exit_share:1.00},
    {landing:"/p/17-1022.php",                    second_page:"/p/17-1022.php",                    exit_action:"瀏覽後離開",  sessions:3,  exit_share:1.00},
    {landing:"/p/426-1022-5.php",                  second_page:"/p/426-1022-5.php",                  exit_action:"瀏覽後離開",  sessions:2,  exit_share:1.00},
    {landing:"/p/406-1022-65878,r452.php",         second_page:"/p/406-1022-65878,r452.php",         exit_action:"瀏覽後離開",  sessions:2,  exit_share:1.00},
    {landing:"/p/404-1022-45541.php",             second_page:"/p/404-1022-45541.php",             exit_action:"瀏覽後離開",  sessions:2,  exit_share:1.00},
    {landing:"/p/406-1022-45544,r733.php",         second_page:"/p/406-1022-45544,r733.php",         exit_action:"瀏覽後離開",  sessions:2,  exit_share:1.00},
    {landing:"/p/403-1022-709-1.php",             second_page:"/p/403-1022-709-1.php",             exit_action:"瀏覽後離開",  sessions:2,  exit_share:1.00}
  ],
      user_path_transitions: [
    {from:"/",          to:"/p/412-1022-2570.php", sessions:0},
    {from:"/",          to:"/p/404-1022-52388.php", sessions:0},
    {from:"/",          to:"/p/426-1022-2.php",  sessions:0},
    {from:"/",          to:"/p/412-1022-2586.php", sessions:0},
    {from:"/",          to:"/p/404-1022-36099.php", sessions:0}
  ],
      data_quality_snapshot: [
    {issue_type:"missing_jsonld",     affected_count:1,  example:"全站 application/ld+json = 0",                      severity:"高", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex application/ld\\+json"},
    {issue_type:"old_domain",         affected_count:13, example:"itm.tcust.edu.tw 出現於 13 個站內連結",            severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 HTML 內 itm.tcust.edu.tw 字串計數"},
    {issue_type:"missing_canonical",  affected_count:1,  example:"首頁缺少 canonical link 標記",                severity:"中", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex <link rel=\"canonical\">"},
    {issue_type:"multiple_h1",        affected_count:2,  example:"首頁偵測到 2 個 H1（重複 H1 違規）",                severity:"中", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 <h1> 標籤計數"},
    {issue_type:"og_image_favicon",   affected_count:1,  example:"og:image 仍指向 /images/favicon.ico（非正式主視覺）", severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"og:image 屬性內容檢查"},
    {issue_type:"iframe_no_title",    affected_count:26, example:"26 個 iframe 全部未設定 title",                     severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 iframe title 屬性檢查"},
    {issue_type:"empty_alt",          affected_count:3,  example:"24 張圖片中 3 張 alt 為空",                          severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 圖片 alt 文字長度 ≤ 2"},
    {issue_type:"unknown_source",     affected_count:0,  example:"本期未發現未分類 source/medium",                    severity:"低", suggested_owner:"—",               status:"正常",  evidence_rule:"all_units_summary source NOT IN known list"}
  ]
    }
  },

  geo: {
    auditDate: "2026-08-04",
    auditedUrl: "https://itm.tcu.edu.tw/",
    maximumScore: 100,
    auditCounts: {
      jsonLdCount: 0,
      h1Count: 2,
      totalImages: 26,
      missingAltCount: 3,
      oldDomainLinkCount: 13,
      duplicateIdCount: 41
    },
    auditCrawlDate: "2026-07-31",
    subscores: [
      {label: "主題清楚度（網站主題是否明確）",     score: 11, maximum: 20},
      {label: "招生資訊完整度（能否回答學生和家長的問題）", score: 18, maximum: 20},
      {label: "可信度（聯絡資訊和地址是否完整）",     score: 20, maximum: 20},
      {label: "內容深度（網站章節數和說明完整性）",   score: 11, maximum: 20},
      {label: "技術名片（社群分享和搜尋預覽標籤）",   score: 2,  maximum: 20}
    ],
    managerSummary: {
      introduction: "目前這個系所網站 GEO 基礎大約 {score} 分（待加強）。",
      findings: [
        "內容介紹完整 — 資訊科技與管理系的課程（大數據、雲端、互動多媒體）、師資、招生資訊都有，但缺少讓搜尋引擎讀懂的「資料名片」。",
        "分享預覽失效 — 當系友把網站貼到 LINE 或 Facebook 時，看不到系所名稱與簡介（缺技術名片）。",
        "改版有倒退 — 自上次更新，JSON-LD 結構化資料被移除、canonical 與 hreflang 標記也被移除；{score} 分需要重新補齊這些技術標籤。"
      ]
    },
    technicalAudit: {
      implemented: [
        {n: 1, label: "正式中文系名出現在 title", value: "通過", note: ""},
        {n: 2, label: "正式英文系名可見",         value: "通過", note: ""},
        {n: 3, label: "招生名額與聯絡資訊為可讀 HTML 文字", value: "通過", note: ""},
        {n: 4, label: "最新招生／活動內容存在",     value: "通過", note: ""}
      ],
      warnings: [
        {n: 1, label: "首頁唯一且正確的 H1",     value: "未通過", note: "首頁偵測到 2 個 H1（重複 H1 違規）"},
        {n: 2, label: "og:image 為正式主視覺 URL",  value: "未通過", note: "og:image 仍指向 /images/favicon.ico（非正式主視覺）"}
      ],
      missing: [
        {n: 1, label: "application/ld+json 結構化資料", value: "缺失", note: "regressed from 2 個 JSON-LD 結構化資料"},
        {n: 2, label: '<link rel="canonical">',        value: "缺失", note: "regressed"},
        {n: 3, label: "og:title",                       value: "缺失", note: "regressed"},
        {n: 4, label: "og:description",                 value: "缺失", note: "regressed"},
        {n: 5, label: 'hreflang="en-US"',                value: "缺失", note: "regressed"},
        {n: 6, label: "og:url",                         value: "缺失", note: ""}
      ]
    }
  }
};

// ===== Backward-compatible aliases =====
if (!window.WEBINSIGHT.DATA) {
  window.WEBINSIGHT.DATA = window.WEBINSIGHT.REPORT_DATA.metrics;
}
window.WEBINSIGHT.REPORT_DATA.metrics.weeks = window.WEBINSIGHT.REPORT_DATA.chartLabels;
