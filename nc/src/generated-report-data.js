// src/generated-report-data.js
// Single source of truth for ALL frequently changing NC report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files (index.html, app.js, main.js, evidence-renderer.js,
// report-renderer.js) read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026-08-06 (Thu)
// Cutoff (smallest max_date across 3 sources): 2026-08-02 (GSC); GA4 through 2026-08-03
// Site: 護理學系 (nc.tcu.edu.tw)
//
// Migration note (2026-08-06, NC migration): this file now contains the FULL
// pre-refactor dataset wrapped in REPORT_DATA shape (meta + periods +
// chartLabels + metrics + sections). Datasets previously left as empty
// arrays (decisions, issues, webRows, quality, queries) match ITM's pattern.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "護理學系",
    siteDomain: "nc.tcu.edu.tw",
    reportVersion: "v56",
    updatedAt: "2026/08/06",
    sourceCount: 3,
    maxDateGa4: "2026-08-03",
    maxDateGsc: "2026-08-02",
    // 2026-08-06 patch: previous KPI values (574/617/293/5.78%) were inflated
    // vs ground-truth BigQuery. Replaced with: users=194, sessions=261,
    // gsc_clicks=111, gsc_ctr=4.09%. Source queries used in fix:
    //   site_name='護理學院' AND date BETWEEN '2026-07-27' AND '2026-08-02'
    patchedFromBq: true
  },

  periods: {
    current: { start: "2026/07/27", end: "2026/08/02" },
    previous: { start: "2026/07/20", end: "2026/07/26" },
    trend:    { start: "2026/06/08", end: "2026/08/02" }
  },

  chartLabels: ["07/27","07/28","07/29","07/30","07/31","08/01","08/02"],

  metrics: {
    weeks:["07/27","07/28","07/29","07/30","07/31","08/01","08/02"],
    kpis:[
{k:"本週造訪人數",v:"194",trend:"+16.9%",avg:"前 7 天",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[44, 52, 58, 38, 42, 19, 8]},
{k:"本週工作階段",v:"261",trend:"+29.2%",avg:"前 7 天",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[37, 46, 52, 37, 36, 19, 8]},
{k:"Google 搜尋點擊",v:"111",trend:"-1.8%",avg:"前 7 天",up:false,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[20, 15, 13, 14, 23, 14, 12]},
{k:"Google 搜尋點擊率",v:"4.09%",trend:"+0.4%",avg:"前 7 天平均",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[20, 15, 13, 14, 23, 14, 12]}
],
    traffic:{a:[44,52,58,38,42,19,8],b:[71,73,173,97,112,24,9]},
    search:{a:[640,356,402,346,387,278,304],b:[23,21,23,18,14,5,7]},
    funnel:{a:[26, 26, 28, 31, 26, 21, 19],b:[28, 72, 52, 49, 42, 31, 24],c:[0,0,0,0,0,0,0]},
    audience:{total:261,country:[{name:"Taiwan",sessions:212,users:147,share:81.2},{name:"China",sessions:35,users:35,share:13.4},{name:"Singapore",sessions:4,users:3,share:1.5},{name:"United States",sessions:3,users:3,share:1.1}],device:[{name:"desktop",sessions:181,users:123,share:69.3},{name:"mobile",sessions:81,users:72,share:31.0}],source:[{name:"(direct)/(none)",medium:"other",sessions:148,users:104,share:56.7},{name:"google/organic",medium:"organic",sessions:105,users:83,share:40.2},{name:"chatgpt.com/ai-assistant",medium:"ai",sessions:2,users:2,share:0.8},{name:"perplexity.ai/ai-assistant",medium:"ai",sessions:2,users:1,share:0.8}]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{

  // ===== Block 1 — 期間比較與異常提醒 =====
  // 8 complete weeks. CTR = SUM(clicks)/SUM(impressions). Anomalies computed
  // by app.js using prompt rule: ≥30% delta AND base ≥ volumes below.
  // New data: 2026-07-29 ; latest complete week = 07/20 ~ 07/26 (Sunday-aligned)
  trends:[
    {week:"06/07",sessions:331,users:253,pageviews:944,impressions:3472,clicks:197},
    {week:"06/14",sessions:75,users:61,pageviews:165,impressions:2741,clicks:136},
    {week:"06/21",sessions:210,users:152,pageviews:525,impressions:2811,clicks:91},
    {week:"06/28",sessions:194,users:150,pageviews:312,impressions:2699,clicks:93},
    {week:"07/05",sessions:140,users:117,pageviews:230,impressions:2462,clicks:71},
    {week:"07/12",sessions:211,users:177,pageviews:463,impressions:2570,clicks:101},
    {week:"07/19",sessions:204,users:166,pageviews:301,impressions:2720,clicks:112},
    {week:"07/26",sessions:20,users:19,pageviews:24,impressions:373,clicks:16},
  ],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },

  // ===== Block 3 — 品牌詞 vs 非品牌詞 =====
  // Brand/non-brand share kept for trend. Per-keyword table now classifies
  // each query, computes CTR, and includes landing page.
  brand_config:{
    terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","護理","護理學院","護理系","nc","ncu"],
  },
  brand_split:[
    {month:"05/01", brand_pct:15.1, nonbrand_pct:84.9, brand_imp:2167, brand_clicks:73, nonbrand_imp:12195, nonbrand_clicks:538},
    {month:"06/01", brand_pct:13.6, nonbrand_pct:86.4, brand_imp:1761, brand_clicks:59, nonbrand_imp:11200, nonbrand_clicks:551},
    {month:"07/01", brand_pct:19.0, nonbrand_pct:81.0, brand_imp:1735, brand_clicks:45, nonbrand_imp:7406, nonbrand_clicks:280}
  ],
  // Per-keyword table — feeds 'Top 10 brand' and 'Top 10 non-brand' tables.
  // 2026-07-27 至 2026-08-02 for 2026-07-27 至 2026-08-02 period (7 days).
  keyword_rows:[
    {query:"site:nc.tcu.edu.tw",                       cls:"brand",    imp:170, clicks:0, sum_position:10480, landing:"/"},
    {query:"liyun kuo",                                cls:"nonbrand", imp:80,  clicks:1, sum_position:614,  landing:"/p/406-1014-64703,r1026.php"},
    {query:"慈濟護專",                                 cls:"brand",    imp:63,  clicks:3, sum_position:566,  landing:"/"},
    {query:"慈濟大學護理系",                            cls:"brand",    imp:63,  clicks:0, sum_position:241,  landing:"/p/403-1014-1026-1.php"},
    {query:"慈濟大學護理學院",                          cls:"brand",    imp:60,  clicks:9, sum_position:0,    landing:"/"},
    {query:"林玉娟",                                   cls:"nonbrand", imp:40,  clicks:0, sum_position:30,   landing:"/p/406-1014-64714,r1029.php"},
    {query:"慈濟大學護理",                             cls:"brand",    imp:38,  clicks:1, sum_position:144,  landing:"/"},
    {query:"慈濟大學護理科",                            cls:"brand",    imp:30,  clicks:1, sum_position:103,  landing:"/p/403-1014-1026-1.php"},
    {query:"曹英",                                     cls:"nonbrand", imp:26,  clicks:2, sum_position:52,   landing:"/p/406-1014-64708,r1026.php"},
    {query:"site:nc.tcust.edu.tw",                     cls:"brand",    imp:24,  clicks:0, sum_position:111,  landing:"/"},
    {query:"慈濟大學護理系老師",                        cls:"brand",    imp:22,  clicks:3, sum_position:130,  landing:"/p/406-1014-64715,r1027.php"},
    {query:"賴惠玲",                                   cls:"nonbrand", imp:22,  clicks:0, sum_position:99,   landing:"/p/406-1014-64699,r1026.php"},
    {query:"護理大學",                                 cls:"brand",    imp:22,  clicks:0, sum_position:163,  landing:"/"},
    {query:"慈濟大學護理學系",                          cls:"brand",    imp:21,  clicks:0, sum_position:99,   landing:"/p/403-1014-1026-1.php"},
    {query:"慈濟大學 護理學系",                         cls:"brand",    imp:21,  clicks:0, sum_position:99,   landing:"/p/403-1014-1026-1.php"},
    {query:"邱曉彥",                                   cls:"nonbrand", imp:20,  clicks:2, sum_position:134,  landing:"/p/406-1014-64702,r1026.php"},
    {query:"楊美玲",                                   cls:"nonbrand", imp:18,  clicks:1, sum_position:46,   landing:"/p/406-1014-64699,r1026.php"},
    {query:"陸秀芳",                                   cls:"nonbrand", imp:18,  clicks:3, sum_position:54,   landing:"/p/406-1014-64707,r1026.php"},
    {query:"羅淑芬",                                   cls:"nonbrand", imp:15,  clicks:0, sum_position:105,  landing:"/p/406-1014-64702,r1026.php"},
    {query:"慈濟護理科",                                cls:"brand",    imp:14,  clicks:0, sum_position:74,   landing:"/"},
    {query:"李崇仁",                                   cls:"nonbrand", imp:13,  clicks:4, sum_position:5,    landing:"/p/406-1014-64729,r1027.php"},
    {query:"慈濟大學 護理系",                          cls:"brand",    imp:12,  clicks:1, sum_position:39,   landing:"/p/403-1014-1026-1.php"},
    {query:"慈濟護理",                                 cls:"brand",    imp:12,  clicks:1, sum_position:16,   landing:"/"},
    {query:"吳素月",                                   cls:"nonbrand", imp:11,  clicks:0, sum_position:1,    landing:"/p/406-1014-64726,r1027.php"},
    {query:"陳佳蓉",                                   cls:"nonbrand", imp:11,  clicks:2, sum_position:52,   landing:"/p/403-1014-1026-1.php"},
    {query:"周桂如",                                   cls:"nonbrand", imp:11,  clicks:0, sum_position:67,   landing:"/p/16-1014-65224.php"},
    {query:"li yun kuo 醫生娘",                         cls:"nonbrand", imp:11,  clicks:0, sum_position:43,   landing:"/p/406-1014-64703,r1026.php"},
    {query:"護理學院",                                 cls:"brand",    imp:10,  clicks:0, sum_position:53,   landing:"/"},
    {query:"馬玉琴",                                   cls:"nonbrand", imp:10,  clicks:0, sum_position:52,   landing:"/"},
    {query:"王淑芳",                                   cls:"nonbrand", imp:10,  clicks:0, sum_position:113,  landing:"/p/406-1014-64698,r1034.php"}
  ],

  // ===== Block 4 — 內容效益矩陣 =====
  // Source: all_units_summary (page_view events). Each row = one normalized
  // page by normalized_path. Quadrant boundaries = median across rows with
  // users ≥ 5. Smaller samples kept & flagged as 「樣本不足」.
  // 2026-07-27 至 2026-08-02 for 2026-07-27 至 2026-08-02 period (7 days).
  content_matrix:[
    {normalized_path:"/",                                            title:"慈濟大學護理學院 - 慈濟大學護理學院", users:56, sessions:71, pageviews:98, engagement_sec:0.0},
    {normalized_path:"/p/412-1014-2992.php",                        title:"系科所組成員 - 慈濟大學護理學院", users:16, sessions:17, pageviews:19, engagement_sec:0.0},
    {normalized_path:"/p/412-1014-4932.php",                        title:"護理學院沿革 - 慈濟大學護理學院", users:10, sessions:10, pageviews:10, engagement_sec:0.0},
    {normalized_path:"/p/412-1014-4969.php",                        title:"護理學院院長 - 慈濟大學護理學院", users:8,  sessions:8,  pageviews:13, engagement_sec:0.0},
    {normalized_path:"/p/403-1014-1026-1.php",                      title:"護理學系 - 慈濟大學護理學院", users:6,  sessions:6,  pageviews:8,  engagement_sec:0.0},
    {normalized_path:"/p/412-1014-4934.php",                        title:"成員介紹 - 慈濟大學護理學院", users:6,  sessions:7,  pageviews:13, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64715,r1027.php",                 title:"郭育倫 KUO,YU-LUN 主任 - 慈濟大學護理學院", users:6, sessions:6, pageviews:6, engagement_sec:0.0},
    {normalized_path:"/index.php",                                  title:"慈濟大學護理學院 - 慈濟大學護理學院", users:5,  sessions:5,  pageviews:5,  engagement_sec:0.0},
    {normalized_path:"/p/406-1014-65941,r1023.php",                 title:"恭賀本院護理科蔡欣晏老師帶領兩組學生榮獲「2026全國大專校院高齡創意活動 - 慈濟大學護理學院", users:5, sessions:5, pageviews:5, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-65180,r1020.php",                 title:"護理學院演講 嘉義大林慈濟醫院護理部 陳佳蓉主任演講 - 慈濟大學護理學院", users:5, sessions:5, pageviews:5, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64729,r1027.php",                 title:"李崇仁 副教授 - 慈濟大學護理學院", users:5, sessions:5,  pageviews:9,  engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64702,r1026.php",                 title:"羅淑芬 LO,SHU-FEN 副教授 - 慈濟大學護理學院", users:4, sessions:5, pageviews:8, engagement_sec:0.0},
    {normalized_path:"/p/412-1014-4938.php",                        title:"交流園地 - 慈濟大學護理學院", users:3, sessions:3, pageviews:4, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64714,r1029.php",                 title:"宋惠娟 SUNG,HUEI-CHUAN 所長 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0.0},
    {normalized_path:"/p/412-1014-3466.php",                        title:"教育部USR計畫 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64707,r1026.php",                 title:"陸秀芳 LU,SHIOU-FANG 助理教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0.0},
    {normalized_path:"/p/412-1014-2990.php",                        title:"組織架構 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64708,r1026.php",                 title:"張綠怡 CHANG,LU-I 助理教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64726,r1027.php",                 title:"吳素月 WU, SU-YUEH 約聘講師 - 慈濟大學護理學院", users:3, sessions:4, pageviews:4, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64703,r1026.php",                 title:"許雅娟 HSU,YA-CHUAN 副教授 - 慈濟大學護理學院", users:2, sessions:2, pageviews:2, engagement_sec:0.0},
    {normalized_path:"/p/412-1014-4958.php",                        title:"護理學院院歌 - 慈濟大學護理學院", users:2, sessions:2, pageviews:2, engagement_sec:0.0},
    {normalized_path:"/p/16-1014-64704.php",                        title:"友善列印 - 黃君后 HUANG,CHUN-HOU 副教授 - 慈濟大學護理學院", users:2, sessions:2, pageviews:2, engagement_sec:0.0},
    {normalized_path:"/p/16-1014-65224.php",                        title:"友善列印 - 周桂如特聘教授蒞慈大分享：厚植護理國際化基石 擘劃專業全球影響力 - 慈濟大學護理學院", users:2, sessions:3, pageviews:3, engagement_sec:0.0},
    {normalized_path:"/p/407-1014-503-1.php",                       title:"影音專區 - 慈濟大學護理學院", users:2, sessions:2, pageviews:2, engagement_sec:0.0},
    {normalized_path:"/p/406-1014-64699,r1026.php",                 title:"賴惠玲 LAI, HUI-LING 教授 - 慈濟大學護理學院", users:2, sessions:2, pageviews:3, engagement_sec:0.0}
  ],

  // ===== Block 5 — 流量來源品質 =====
  // 'group' is the prompt-defined grouping. Original source/medium is kept.
  // Quality: avg_eng_sec_per_session = SUM(eng_sec)/sessions.
  // 2026-07-27 至 2026-08-02 for 2026-07-27 至 2026-08-02 period (7 days).
  traffic_quality:[
    {group:"Direct",          source:"(direct)",      medium:"(none)",      sessions:119, users:94,  avg_eng_sec_per_session:19.4, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"足夠"},
    {group:"Organic Search",  source:"google",        medium:"organic",      sessions:83,  users:70,  avg_eng_sec_per_session:26.8, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"足夠"},
    {group:"Organic Search",  source:"yahoo",         medium:"organic",      sessions:1,   users:1,   avg_eng_sec_per_session:25.1, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"AI Referral",     source:"chatgpt.com",   medium:"ai-assistant",  sessions:1,   users:1,   avg_eng_sec_per_session:9.9,  internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"}
  ],

  // ===== Block 6 — AI 搜尋 =====
  // 2026-07-27 至 2026-08-02 for 2026-07-27 至 2026-08-02 period (7 days).
  // (medium=ai-assistant, page_referrer=null) was detected. Other engines remain 0.
  ai_config:{
    domains:[
      {platform:"ChatGPT",  pattern:"chatgpt\\.com|openai\\.com|medium=ai-assistant"},
      {platform:"Perplexity", pattern:"perplexity\\.ai"},
      {platform:"Gemini",   pattern:"gemini\\.google\\.com|bard\\.google\\.com"},
      {platform:"Copilot",  pattern:"copilot\\.microsoft\\.com|bing\\.com/chat"},
      {platform:"Claude",   pattern:"claude\\.ai"},
      {platform:"Other AI", pattern:"(others|unknown)"}
    ]
  },
  ai_timeseries:[],
  ai_platforms:[
    {platform:"ChatGPT",    sessions:2, users:2, landing_page:"/", avg_eng_sec:9.9, internal_clicks:0, sample_note:"樣本較少"},
    {platform:"Perplexity", sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Gemini",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Copilot",    sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Claude",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"}
  ],
  ai_total_period_sessions:2,

  // ===== Block 7 — 招生意圖與 CTA 行動 =====
  // 2026-07-27 至 2026-08-02 for 2026-07-27 至 2026-08-02 period (7 days).
  cta_funnel:[
    {cta_category:"其他連結",            distinct_links:2, sessions:8,   users:5,   sample_note:"樣本較少"},
    {cta_category:"招生簡章",            distinct_links:0, sessions:0,   users:0,   sample_note:"資料不足"},
    {cta_category:"下載文件 (PDF/DOC/XLSX)", distinct_links:0, sessions:0,   users:0,   sample_note:"資料不足"},
    {cta_category:"入學方式",            distinct_links:0, sessions:0,   users:0,   sample_note:"資料不足"},
    {cta_category:"LINE",                 distinct_links:0, sessions:0,   users:0,   sample_note:"資料不足"},
    {cta_category:"電話",                 distinct_links:0, sessions:0,   users:0,   sample_note:"資料不足"},
    {cta_category:"Email",                distinct_links:0, sessions:0,   users:0,   sample_note:"資料不足"},
    {cta_category:"報名系統",            distinct_links:0, sessions:0,   users:0,   sample_note:"資料不足"},
    {cta_category:"聯絡表單",            distinct_links:0, sessions:0,   users:0,   sample_note:"資料不足"}
  ],
  cta_links:[
    {category:"LINE",         link_text:"加入 NC LINE 群組",      source_page:"首頁",            destination:"https://line.me/R/ti/p/nc-tcu",         clicks:2,  users:2,  valid_rate:1.0},
    {category:"招生簡章",     link_text:"招生入學方式",                  source_page:"入學方式",        destination:"/p/404-1022-36099.php",                clicks:4,  users:4,  valid_rate:1.0},
    {category:"下載文件",     link_text:"招生簡章 PDF",                   source_page:"首頁",            destination:"/var/file/22/1022/img/1870/424380578.pdf", clicks:2, users:2, valid_rate:1.0},
    {category:"入學方式",     link_text:"個人申請",                       source_page:"招生頁",          destination:"/p/404-1022-30026.php?Lang=zh-tw",    clicks:1,  users:1,  valid_rate:1.0}
  ],

  // ===== Block 8 — 國際訪客品質 =====
  // 2026-07-27 至 2026-08-02 for 2026-07-27 至 2026-08-02 period (7 days).
  international:[
    {country:"臺灣",     sessions:153, users:117, avg_eng_sec:28.7, top_landing:"/",                                       admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"中國",     sessions:34,  users:34,  avg_eng_sec:1.4,  top_landing:"/?Lang=zh-tw",                            admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"美國",     sessions:4,   users:3,   avg_eng_sec:4.7,  top_landing:"/",                                       admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"香港",     sessions:4,   users:3,   avg_eng_sec:9.4,  top_landing:"/",                                       admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"馬來西亞", sessions:1,   users:1,   avg_eng_sec:5.8,  top_landing:"/",                                       admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"日本",     sessions:1,   users:1,   avg_eng_sec:24.9, top_landing:"/",                                       admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"其他",     sessions:6,   users:6,   avg_eng_sec:0,    top_landing:"-",                                       admission_cta:0, contact_click:0, sample_note:"資料不足"}
  ],

  // ===== Block 9 — 使用者路徑／下一步 =====
  // 2026-07-27 至 2026-08-02 for 2026-07-27 至 2026-08-02 period (7 days).
  // via ROW_NUMBER() OVER (PARTITION BY session ORDER BY event_timestamp).
  user_paths:[
    {landing:"/",                                          second_page:"/",                                          exit_action:"瀏覽後離開", sessions:71, exit_share:0.92},
    {landing:"/index.php",                                second_page:"/index.php",                                exit_action:"瀏覽後離開", sessions:5,  exit_share:1.00},
    {landing:"/p/412-1014-4969.php",                      second_page:"/p/412-1014-4969.php",                      exit_action:"瀏覽後離開", sessions:8,  exit_share:1.00},
    {landing:"/p/412-1014-2992.php",                      second_page:"/p/412-1014-2992.php",                      exit_action:"瀏覽後離開", sessions:17, exit_share:0.94},
    {landing:"/p/412-1014-4932.php",                      second_page:"/p/412-1014-4932.php",                      exit_action:"瀏覽後離開", sessions:10, exit_share:1.00},
    {landing:"/p/412-1014-4934.php",                      second_page:"/p/412-1014-4934.php",                      exit_action:"瀏覽後離開", sessions:7,  exit_share:0.86},
    {landing:"/p/406-1014-65180,r1020.php",               second_page:"/p/406-1014-65180,r1020.php",               exit_action:"瀏覽後離開", sessions:5,  exit_share:1.00},
    {landing:"/p/406-1014-65941,r1023.php",               second_page:"/p/406-1014-65941,r1023.php",               exit_action:"瀏覽後離開", sessions:5,  exit_share:1.00},
    {landing:"/p/403-1014-1026-1.php",                    second_page:"/p/403-1014-1026-1.php",                    exit_action:"瀏覽後離開", sessions:6,  exit_share:1.00},
    {landing:"/p/406-1014-64715,r1027.php",               second_page:"/p/406-1014-64715,r1027.php",               exit_action:"瀏覽後離開", sessions:6,  exit_share:1.00},
    {landing:"/p/406-1014-64702,r1026.php",               second_page:"/p/406-1014-64702,r1026.php",               exit_action:"瀏覽後離開", sessions:5,  exit_share:1.00},
    {landing:"/p/406-1014-64729,r1027.php",               second_page:"/p/406-1014-64729,r1027.php",               exit_action:"瀏覽後離開", sessions:5,  exit_share:1.00},
    {landing:"/p/406-1014-64707,r1026.php",               second_page:"/p/406-1014-64707,r1026.php",               exit_action:"瀏覽後離開", sessions:3,  exit_share:1.00},
    {landing:"/p/406-1014-64714,r1029.php",               second_page:"/p/406-1014-64714,r1029.php",               exit_action:"瀏覽後離開", sessions:3,  exit_share:1.00},
    {landing:"/p/412-1014-3466.php",                     second_page:"/p/412-1014-3466.php",                     exit_action:"瀏覽後離開", sessions:3,  exit_share:1.00},
    {landing:"/p/412-1014-4938.php",                     second_page:"/p/412-1014-4938.php",                     exit_action:"瀏覽後離開", sessions:3,  exit_share:1.00},
    {landing:"/p/406-1014-64726,r1027.php",               second_page:"/p/406-1014-64726,r1027.php",               exit_action:"瀏覽後離開", sessions:4,  exit_share:1.00}
  ],
  user_path_transitions:[
    {from:"/",          to:"/p/412-1014-2992.php", sessions:0},
    {from:"/",          to:"/p/412-1014-4932.php", sessions:0},
    {from:"/",          to:"/p/412-1014-4969.php", sessions:0},
    {from:"/",          to:"/p/403-1014-1026-1.php", sessions:0},
    {from:"/",          to:"/p/412-1014-4934.php", sessions:0}
  ],

  // ===== Block 10 — 資料品質與網站治理 =====
  // Refreshed 2026-07-31 (HTML scan via https://nc.tcu.edu.tw/).
  // 3 empty alt found (down from 16) — slight improvement.
  data_quality_snapshot:[
    {issue_type:"missing_canonical",  affected_count:1,  example:"首頁 <link rel=canonical> 缺失",                 severity:"中", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex <link rel=\"canonical\">"},
    {issue_type:"hreflang_missing",   affected_count:1,  example:"缺英文版 hreflang=en-US 標記",                   severity:"中", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 <link rel=alternate hreflang=> 檢查"},
    {issue_type:"og_metadata_missing", affected_count:1,  example:"og:title/description/url/type 全部缺失",           severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 <meta property=og:*> 屬性檢查"},
    {issue_type:"og_image_path",       affected_count:1,  example:"og:image 指向系統檔路徑（建議改為正式 CDN URL）",    severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"og:image URL 是否為外部可訪問"},
    {issue_type:"jsonld_ok",          affected_count:0,  example:"EducationalOrganization schema 已部署（含 name、address、knowsAbout）",   severity:"低", suggested_owner:"—",               status:"正常",  evidence_rule:"首頁 application/ld+json 解析"},
    {issue_type:"multiple_h1",        affected_count:0,  example:"首頁 H1 標籤數正常（1 個）",                       severity:"低", suggested_owner:"電算中心",       status:"正常",  evidence_rule:"首頁 <h1> 標籤計數"},
    {issue_type:"empty_alt",          affected_count:3,  example:"17 張圖片中 3 張 <code>alt=\"\"</code>（其中視覺性 icon）",    severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 <img alt=\"\"> 屬性計數"},
    {issue_type:"iframe_no_title",    affected_count:1,  example:"1 個 iframe 未設定 title",                       severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 <iframe> 屬性 title 檢查"},
    {issue_type:"duplicate_id",       affected_count:1,  example:"DOM ID TcuRpageFeatureTitle 重複",               severity:"低", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁重複 id 計數"},
    {issue_type:"unknown_source",     affected_count:0,  example:"本期未發現未分類 source/medium",                  severity:"低", suggested_owner:"—",               status:"正常",  evidence_rule:"all_units_summary source NOT IN known list"}
  ]
    }
  }
};

// ===== Backward-compatible aliases =====
if (!window.WEBINSIGHT.DATA) {
  window.WEBINSIGHT.DATA = window.WEBINSIGHT.REPORT_DATA.metrics;
}
