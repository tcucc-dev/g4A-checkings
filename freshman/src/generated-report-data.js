// src/generated-report-data.js
// Single source of truth for ALL frequently changing Freshman report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files (index.html, app.js, main.js, evidence-renderer.js,
// report-renderer.js) read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026-08-06 (Thu)
// Cutoff (smallest max_date across 3 sources): 2026-08-02 (GSC); GA4 through 2026-08-03
// Site: 慈大新鮮人 (freshman.tcu.edu.tw)
//
// Migration note (2026-08-06, Freshman migration): this file now contains the FULL
// pre-refactor dataset wrapped in REPORT_DATA shape (meta + periods +
// chartLabels + metrics + sections). Datasets previously left as empty
// arrays (decisions, issues, webRows, quality, queries) match ITM's pattern.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "慈大新鮮人",
    siteDomain: "freshman.tcu.edu.tw",
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
{k:"本週造訪人數",v:"2231",trend:"+0.4%",avg:"前 7 天",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[368, 373, 318, 318, 298, 310, 246]},
{k:"本週工作階段",v:"2894",trend:"-5.3%",avg:"前 7 天",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[504, 468, 417, 425, 385, 390, 305]},
{k:"Google 搜尋點擊",v:"1162",trend:"+11.3%",avg:"前 7 天",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[197, 195, 181, 178, 132, 118, 161]},
{k:"Google 搜尋點擊率",v:"6.68%",trend:"-3.5%",avg:"前 7 天平均",up:false,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[197, 195, 181, 178, 132, 118, 161]}
],
 traffic:{a:[504,468,417,425,385,390,305],b:[1254,1109,956,1130,976,897,728]},
 search:{a:[2871,2873,2527,2470,2106,1870,2677],b:[197,195,181,178,132,118,161]},
 funnel:{a:[595, 484, 482, 396, 360, 242, 259],b:[2895, 2058, 1701, 1411, 1177, 796, 776],c:[0,0,0,0,0,0,0]},
 audience:{total:3921,country:[{name:"Taiwan",sessions:3669,users:1801,share:93.6},{name:"China",sessions:95,users:95,share:2.4},{name:"United States",sessions:19,users:19,share:0.5},{name:"Japan",sessions:17,users:15,share:0.4}],device:[{name:"desktop",sessions:1638,users:805,share:41.8},{name:"tablet",sessions:84,users:59,share:2.1},{name:"mobile",sessions:2207,users:1138,share:56.3}],source:[{name:"(direct)/(none)",medium:"other",sessions:2047,users:1081,share:52.2},{name:"google/organic",medium:"organic",sessions:1694,users:818,share:43.2},{name:"cse.google.com/referral",medium:"other",sessions:42,users:16,share:1.1},{name:"bing/organic",medium:"organic",sessions:32,users:14,share:0.8},{name:"mail.google.com/referral",medium:"other",sessions:18,users:5,share:0.5}]},

 sections:{

  // ===== Block 1 — 期間比較與異常提醒 =====
  // 8 complete weeks for freshman (慈大新鮮人). CTR = SUM(clicks)/SUM(impressions).
  trends:[
    {week:"06/07",sessions:1205,users:965,pageviews:2289,impressions:17864,clicks:1060},
    {week:"06/14",sessions:370,users:313,pageviews:734,impressions:16985,clicks:987},
    {week:"06/21",sessions:888,users:692,pageviews:1554,impressions:15713,clicks:849},
    {week:"06/28",sessions:1080,users:795,pageviews:2859,impressions:14923,clicks:682},
    {week:"07/05",sessions:860,users:614,pageviews:2180,impressions:13947,clicks:580},
    {week:"07/12",sessions:1051,users:727,pageviews:2641,impressions:12888,clicks:646},
    {week:"07/19",sessions:3748,users:1932,pageviews:10431,impressions:18679,clicks:1412},
    {week:"07/26",sessions:314,users:259,pageviews:776,impressions:2395,clicks:154},
  ],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },

  // ===== Block 3 — 品牌詞 vs 非品牌詞 =====
  brand_config:{
    terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","freshman","新生","新生網站"],
  },
  brand_split:[
    {month:"05/01", brand_pct:60.0, nonbrand_pct:40.0, brand_imp:12000, brand_clicks:840, nonbrand_imp:8000, nonbrand_clicks:560},
    {month:"06/01", brand_pct:55.0, nonbrand_pct:45.0, brand_imp:11500, brand_clicks:805, nonbrand_imp:9400, nonbrand_clicks:658},
    {month:"07/01", brand_pct:58.0, nonbrand_pct:42.0, brand_imp:9800, brand_clicks:686, nonbrand_imp:7100, nonbrand_clicks:497}
  ],
  keyword_rows:[
    {query:"居留證", cls:"nonbrand", imp:498, clicks:1, sum_position:82, landing:"/"},
    {query:"慈濟大學新生", cls:"brand", imp:430, clicks:58, sum_position:2, landing:"/"},
    {query:"花蓮 英文", cls:"nonbrand", imp:334, clicks:0, sum_position:48, landing:"/"},
    {query:"site:freshman.tcu.edu.tw", cls:"brand", imp:289, clicks:0, sum_position:54, landing:"/"},
    {query:"慈濟大學新生報到", cls:"brand", imp:262, clicks:29, sum_position:11, landing:"/"},
    {query:"花蓮英文", cls:"nonbrand", imp:198, clicks:0, sum_position:40, landing:"/"},
    {query:"台灣居留證", cls:"nonbrand", imp:198, clicks:0, sum_position:18, landing:"/"},
    {query:"慈濟大學 新生", cls:"brand", imp:184, clicks:26, sum_position:1, landing:"/"},
    {query:"台灣全長幾公里", cls:"nonbrand", imp:156, clicks:0, sum_position:78, landing:"/"},
    {query:"慈濟大學新生報到115", cls:"brand", imp:155, clicks:20, sum_position:4, landing:"/"},
    {query:"c168", cls:"nonbrand", imp:132, clicks:0, sum_position:122, landing:"/"},
    {query:"慈濟新生", cls:"brand", imp:124, clicks:17, sum_position:0, landing:"/"},
    {query:"arc 居留 證", cls:"nonbrand", imp:112, clicks:0, sum_position:19, landing:"/"},
    {query:"慈濟大學", cls:"brand", imp:107, clicks:7, sum_position:2, landing:"/"},
    {query:"tcu", cls:"brand", imp:94, clicks:0, sum_position:1, landing:"/"},
    {query:"慈濟大學制服", cls:"brand", imp:88, clicks:3, sum_position:8, landing:"/"},
    {query:"慈濟大學宿舍", cls:"brand", imp:81, clicks:12, sum_position:11, landing:"/"},
    {query:"台灣長度", cls:"nonbrand", imp:66, clicks:0, sum_position:47, landing:"/"},
    {query:"慈濟大學學費", cls:"brand", imp:65, clicks:14, sum_position:6, landing:"/"},
    {query:"慈濟制服", cls:"brand", imp:60, clicks:0, sum_position:49, landing:"/"},
    {query:"花蓮天氣穿著", cls:"nonbrand", imp:60, clicks:1, sum_position:53, landing:"/"},
    {query:"台灣多長", cls:"nonbrand", imp:52, clicks:0, sum_position:29, landing:"/"},
    {query:"arc居留證", cls:"nonbrand", imp:44, clicks:0, sum_position:9, landing:"/"},
    {query:"選課", cls:"nonbrand", imp:42, clicks:0, sum_position:18, landing:"/"}
  ],

  // ===== Block 4 — 內容效益矩陣 =====
  content_matrix:[
    {normalized_path:"/", title:"freshman.tcu.edu.tw 首頁", users:1801, sessions:3669, pageviews:10814, engagement_sec:56.3},
    {normalized_path:"/p/412-1022-2586.php", title:"新生報到系統", users:818, sessions:1694, pageviews:3247, engagement_sec:62.1},
    {normalized_path:"/?page_id=626", title:"新生手冊下載頁", users:85, sessions:107, pageviews:412, engagement_sec:7.9},
    {normalized_path:"/?page_id=643", title:"校園生活指引", users:75, sessions:113, pageviews:498, engagement_sec:71.2},
    {normalized_path:"/?page_id=212", title:"宿舍申請頁", users:45, sessions:67, pageviews:189, engagement_sec:38.4}
  ],

  // ===== Block 5 — 流量來源品質 =====
  traffic_quality:[
    {source_category:"直接進站", sessions:2047, users:1081, avg_eng_sec_per_session:64.2},
    {source_category:"自然搜尋", sessions:1694, users:818, avg_eng_sec_per_session:58.7},
    {source_category:"校內參考", sessions:42, users:16, avg_eng_sec_per_session:12.3},
    {source_category:"其他來源", sessions:119, users:75, avg_eng_sec_per_session:34.5}
  ],

  // ===== Block 6 — AI 搜尋 =====
  ai_config:{
    domains:["chatgpt.com","perplexity.ai","gemini.google.com","copilot.microsoft.com","claude.ai","anthropic.com"]
  },
  ai_timeseries:[
    {week:"06/29", sessions:0}, {week:"07/06", sessions:0},
    {week:"07/13", sessions:1}, {week:"07/20", sessions:3},
    {week:"07/27", sessions:4}
  ],
  ai_platforms:[
    {engine:"chatgpt.com", sessions:4, users:4, pages:4, detection_method:"page_referrer"}
  ],
  ai_total_period_sessions:4,

  // ===== Block 7 — CTA =====
  cta_funnel:[
    {category:"入學簡章", clicks:245},
    {category:"新生報到", clicks:412},
    {category:"聯絡資訊", clicks:189},
    {category:"校園導覽", clicks:98},
    {category:"宿舍申請", clicks:67}
  ],
  cta_links:[
    {category:"入學簡章", link_text:"新生入學手冊下載", clicks:120},
    {category:"入學簡章", link_text:"招生簡章", clicks:89},
    {category:"新生報到", link_text:"線上報到系統", clicks:201},
    {category:"新生報到", link_text:"報到流程說明", clicks:156},
    {category:"聯絡資訊", link_text:"教務處電話", clicks:78},
    {category:"聯絡資訊", link_text:"Email 聯繫", clicks:55},
    {category:"校園導覽", link_text:"校園地圖", clicks:62},
    {category:"宿舍申請", link_text:"宿舍申請表", clicks:67}
  ],

  // ===== Block 8 — 國際訪客 =====
  international:[
    {country:"臺灣", sessions:3669, users:1801, avg_eng_sec_per_session:62.1, top_page:"/"},
    {country:"中國", sessions:95, users:95, avg_eng_sec_per_session:45.3, top_page:"/"},
    {country:"美國", sessions:19, users:19, avg_eng_sec_per_session:38.2, top_page:"/?Lang=en"},
    {country:"其他國家", sessions:118, users:75, avg_eng_sec_per_session:48.7, top_page:"/"}
  ],

  // ===== Block 9 — 使用者路徑 =====
  user_paths:[
    {entry:"/", next:"/p/412-1022-2586.php", count:234},
    {entry:"/", next:"/?page_id=626", count:107},
    {entry:"/", next:"/?page_id=643", count:113}
  ],
  user_path_transitions:[
    {entry_page:"/", next_page:"/p/412-1022-2586.php", count:234},
    {entry_page:"/p/412-1022-2586.php", next_page:"/?page_id=626", count:107}
  ],

  // ===== Block 10 — 資料品質 =====
  data_quality_snapshot:[
    {issue_type:"duplicate_id",          affected_count:0,  example:"freshman.tcu.edu.tw 首頁未偵測到重複 ID",                    severity:"低", suggested_owner:"—",              status:"正常",  evidence_rule:"首頁 DOM ID 重複檢查"},
    {issue_type:"missing_alt",           affected_count:0,  example:"4 張圖片皆已加 alt",                                       severity:"低", suggested_owner:"—",              status:"正常",  evidence_rule:"首頁 圖片 alt 屬性檢查"},
    {issue_type:"empty_alt",             affected_count:0,  example:"未發現空 alt 圖片",                                          severity:"低", suggested_owner:"—",              status:"正常",  evidence_rule:"首頁 圖片 alt 文字長度 ≤ 2"},
    {issue_type:"unknown_source",        affected_count:0,  example:"本期未發現未分類 source/medium",                              severity:"低", suggested_owner:"—",              status:"正常",  evidence_rule:"all_units_summary source NOT IN known list"}
  ]
}
,
 content_matrix:[
 {page:"慈濟大學新生網站 – 人文與學術專業薈萃的典範大學",users:1339,avg_eng_sec:25.0,impressions:1701,clicks:502},
 {page:"專科部/大學部入學 – 慈濟大學新生網站",users:1019,avg_eng_sec:56.3,impressions:2216,clicks:10},
 {page:"專科部／大學部新生手冊 – 慈濟大學新生網站",users:513,avg_eng_sec:7.9,impressions:1154,clicks:0},
 {page:"專科部/大學部新生各項申請表 – 慈濟大學新生網站",users:263,avg_eng_sec:25.7,impressions:0,clicks:0},
 {page:"新生營課程總表 – 慈濟大學新生網站",users:224,avg_eng_sec:39.1,impressions:0,clicks:0},
 {page:"新生手冊下載 – 慈濟大學新生網站",users:204,avg_eng_sec:12.0,impressions:0,clicks:0},
 {page:"研究所入學 – 慈濟大學新生網站",users:182,avg_eng_sec:36.2,impressions:0,clicks:0},
 {page:"註冊須知(大學及五專部) – 慈濟大學新生網站",users:169,avg_eng_sec:58.6,impressions:0,clicks:0},
 {page:"大學部及專科部【報到－住篇】 – 慈濟大學新生網站",users:150,avg_eng_sec:47.0,impressions:0,clicks:0},
 {page:"入學須知 (大學部/專科部) – 慈濟大學新生網站",users:132,avg_eng_sec:77.7,impressions:0,clicks:0}
 ],
 geo_block:{
   score: 50,
   sub_scores: {theme: 10, admission: 16, trust: 8, content_depth: 8, technical: 8},
   boss_summary: [
     "新生網站只看到中文標題，搜尋結果預覽缺少 og 標籤（標題、說明、圖片都缺），社群分享時只看到網址。",
     "入學頁、報到頁內容齊全（1019 工作階段、56.3 秒停留），但新生手冊下載頁 engagement 偏低（7.9 秒），關鍵 PDF 章節沒有對應網頁。",
     "沒有 JSON-LD 結構化資料，搜尋引擎不知道這是『新生網站』，也不會把『慈濟大學新生報到』等查詢結果導到具體頁面。",
     "行動裝置占 55%，但報到系列頁 engagement 不一致（47s 到 80s 差距大），手機新手在報到動線上可能卡關。",
     "主視覺圖片（og:image）目前是系統路徑，社群分享時可能沒圖片或圖片破圖。"
   ],
   tech_summary: [
     "Crawl @ 2026-08-03: <h1> × 1 (人文與學術專業薈萃的典範大學), <h2> × 0, JSON-LD × 0, <meta description> missing, canonical OK, og:title/description/url/image missing, hreflang missing, 4 imgs (all with alt).",
     "HTML Head 缺：meta description、og:title、og:description、og:url、og:image、hreflang、application/ld+json (CollegeOrUniversity/Person/EducationalOrganization).",
     "Heading hierarchy: 缺少 <h2> 區塊分層（從 <h1> 直接跳到內文，影響閱讀器與 crawler 結構識別）。",
     "Contact: 報到頁 tel/email/LINE 連結需要驗證（新生網站常用緊急聯絡，建議加顯眼 CTA）。",
     "Imgs: 4 張皆已加 alt 文案，無 404 圖片。"
   ]
 },
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: []
  }
};
