// src/data.js — freshman.tcu.edu.tw (BQ site_name: 慈大新鮮人)
// Cutoff (smallest max_date across 3 sources): 2026-07-26 (GSC bottleneck)
// Periods: 2026-06-07 to 2026-07-26 | Weeks: 8 (Sunday-aligned)
// Latest complete week = 2026-07-20 ~ 2026-07-26

window.WEBINSIGHT = window.WEBINSIGHT || {};
window.WEBINSIGHT.DATA = {
 weeks:['06/07','06/14','06/21','06/28','07/05','07/12','07/19','07/26'],
 kpis:[
{k:"本週造訪人數",v:"1990",trend:"+155.1%",avg:"+155.1% 較前週｜+12.6% 較八週平均",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了新生網站",src:"all_units_summary｜GA4-USERS-001",spark:[882,737,669,546,467,306,314]},
{k:"本週工作階段",v:"3902",trend:"+247.2%",avg:"+247.2% 較前週｜+178.8% 較八週平均",up:true,desc:"近 7 天新生網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[882,737,669,546,467,306,314]},
{k:"Google 搜尋點擊",v:"1301",trend:"+64.1%",avg:"+64.1% 較前週｜+41.5% 較八週平均",up:true,desc:"近 7 天從 Google 搜尋點進新生網站的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[257,248,181,194,167,100,154]},
{k:"Google 搜尋點擊率",v:"6.99%",trend:"+0.8pt",avg:"近 7 天平均",up:true,desc:"看到搜尋結果後真的點進新生網站的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[8.08,7.80,6.23,6.96,7.05,5.79,6.23]}
],
 traffic:{a:[779,1271,211,993,1082,837,1124,3902],b:[1129,2434,412,1749,2869,2222,2787,10814]},
 search:{a:[0,0,0,0,0,0,0,18620],b:[0,0,0,0,0,0,0,1301]},
 funnel:{a:[595,484,482,396,360,242,259],b:[2895,2058,1701,1411,1177,796,776],c:[0,0,0,0,0,0,0]},
 decisions:[
 {p:"P1",id:"SEO-001",title:"補齊 og:title 與 og:description（社群預覽缺失）",reason:"新生網站 og:title、og:description、og:url 均缺失，影響 Facebook、LINE 分享預覽。曝光來源 1694 sessions 來自 google/organic，需要更完整的搜尋結果呈現。",who:"單位網站管理人",support:"電算中心提供 og 標籤模板",due:"2 週"},
 {p:"P1",id:"ENTRY-001",title:"把入學頁改為首屏招生動線",reason:"專科部/大學部入學頁 1019 users / 56.3s avg engagement，新生手冊頁 513 users / 7.9s。手冊頁 engagement 明顯偏低，報到動線需優化。",who:"單位網站管理人",support:"電算中心建立 path 分析",due:"3 週"},
 {p:"P2",id:"MOBILE-001",title:"優化手機版報到流程",reason:"手機占 2207 sessions（55%），但報到頁 / 包裹寄送篇 / 衣與食篇 engagement 較低。手機新生應在 30 秒內找到關鍵資訊。",who:"單位網站管理人",support:"電算中心技術支援",due:"4 週"}
 ],
 issues:[
{id:"SEO-001",p:"P1",title:"og:title/description 缺失",manager:"新生網站首頁沒有 og 標籤，社群分享只看到網站 URL，點擊率較低。",pages:"首頁、所有入學頁、新生手冊下載",web:["為首頁加 og:title 與 og:description","為入學頁加 og:title（如「專科部／大學部入學 - 慈濟大學新生網站」）","為新生手冊 PDF 連結加 og:type=document","加 og:url 避免重複內容問題"],accept:"2 週後社群分享預覽完整。",it:["提供 og 標籤模板","驗證 Facebook 與 LINE 預覽正確","檢查 og:type 對應"],status:"資料正常",table:"all_units_summary＋all_gsc_summary",fields:"page_title, query, url, clicks, impressions",query:"OG-CHECK-001",period:"2026-07-20 至 2026-07-26",limit:"og 缺失不影響 SEO 排名，僅影響分享預覽。"},
{id:"ENTRY-001",p:"P1",title:"新生手冊 engagement 偏低",manager:"新生手冊下載頁 204 users 但 engagement 12.0s，比同類頁低。新生找不到關鍵資訊。",pages:"新生手冊下載、入學須知、註冊須知",web:["首頁加入學須知直連","手冊下載頁加預覽縮圖","把 PDF 內重要章節拆成獨立網頁","加上『常見問題』快速連結"],accept:"新生手冊頁 engagement 提升至 30 秒以上。",it:["提供 page group 規則","追蹤手冊 PDF 下載事件","維護 entry path 報表"],status:"查詢可用",table:"all_units_summary",fields:"device, session_key, page_location, page_title, engagement_time_msec",query:"ENTRY-PATH-001",period:"最近 8 個完整週",limit:"engagement 不代表完成報到流程。"},
{id:"MOBILE-001",p:"P2",title:"手機新生報到體驗待改善",manager:"手機占 55% 工作階段，但報到流程關鍵頁 engagement 不一致（住篇 47.0s、衣篇 42.6s、行篇 80.4s 差異大）。",pages:"報到系列、入學須知、宿舍頁",web:["檢查所有報到頁 iPhone SE/A14 顯示","統一報到頁 CTA 大小","縮短首屏資訊密度","加入 sticky 表單"],accept:"手機報到關鍵路徑人工驗收通過。",it:["提供裝置別 engagement","追蹤報到轉換","列出手機問題頁面"],status:"行為代理指標",table:"all_units_summary",fields:"device_category, engagement_time_msec, event_name, link_url",query:"DEVICE-RISK-001",period:"2026-07-20 至 2026-07-26",limit:"只提示風險，不能直接判斷 UI 是否破版。"},
{id:"DATA-001",p:"P2",title:"GSC 點擊與 GA4 自然搜尋數字差異",manager:"近一週 Google 搜尋帶來 1301 個點擊，本校網站統計顯示 3902 個到訪工作階段。兩者數字差 2601 是正常的，因為它們用不同方式計算（Google vs 本校網站 GA4）。",pages:"無需修改頁面",web:["閱讀報告時分清楚 GSC 點擊與 GA4 工作階段"],accept:"主管報告固定顯示定義差異。",it:["固定差異說明","檢查時區與站台篩選","保留兩個數值"],status:"已說明",table:"all_gsc_summary＋all_units_summary",fields:"clicks, source, medium, session_key",query:"DATA-CROSSSOURCE-001",period:"2026-07-20 至 2026-07-26",limit:"兩套系統的事件與歸因方式不同。"}
 ],
 webRows:[
["SEO-001","/?p=2057 (Top 1)",2216,10,21.5,"加 og:title 與 og:description","社群預覽完整"],
["SEO-001","/ (Top 2)",1701,502,16.2,"加 og:image 主視覺 URL","社群分享增加"],
["SEO-001","/?p=2136 (Top 3)",1504,4,30.5,"優化 title 與 meta description","搜尋 CTR 提升至 5%+"],
["SEO-001","/?p=2074 (Top 4)",889,87,15.3,"為入學頁加 og:title","入學頁預覽改善"],
["ENTRY-001","/ (Top 5)",826,115,14.3,"首頁加報到入口 CTA","新生任務清晰"],
["ENTRY-001","/?page_id=626 (Top 6)",707,47,13.3,"拆分手冊 PDF 章節為獨立頁","engagement 提升"],
["ENTRY-001","/?p=2151 (Top 7)",627,35,16.4,"加預覽縮圖","新生任務清晰"],
["MOBILE-001","/?page_id=643 (Top 8)",600,19,20.8,"手機版按鈕統一大小","行動體驗一致"]
 ],
 quality:[
["all_units_summary","2026-08-01","正常","page_view、session_key、link_url 可查詢"],
["all_gsc_summary","2026-07-26","正常","曝光、點擊、查詢字詞可查詢"],
["search_behavior_summary","2026-08-02","注意","不得跨 query 直接加總 active_users"]
 ],
 queries:[
["GA4-WEEKLY-TREND-001","all_units_summary","八週工作階段與瀏覽量","date、event_name、user_pseudo_id、ga_session_id","正常","每週自動更新"],
["GSC-WEEKLY-TREND-001","all_gsc_summary","八週曝光與點擊","data_date、impressions、clicks","正常","固定完整週"],
["ENTRY-PATH-001","all_units_summary","新生報到入口路徑","event_timestamp、page_location、page_title、user_pseudo_id、ga_session_id","正常","維護 page_group 規則"],
["OG-CHECK-001","all_units_summary","og 標籤缺失檢查","page_title、link_url","正常","提供網站管理人"],
["DEVICE-RISK-001","all_units_summary","手機新生體驗風險","device_category、engagement_time_msec、link_url","代理指標","只提示風險"],
["DATA-CROSSSOURCE-001","兩表交叉","GA4／GSC 差異說明","clicks、source、medium、session_key","已說明","保留兩套數值"]
 ],
 audience:{
  total:3902,
  country:[
   {name:"臺灣",sessions:3669,users:1801,share:93.5},
   {name:"中國",sessions:95,users:95,share:2.4},
   {name:"美國",sessions:19,users:19,share:0.5},
   {name:"其他國家",sessions:118,users:75,share:3.6}
  ],
  device:[
   {name:"mobile",sessions:2207,users:1138,share:55.8},
   {name:"desktop",sessions:1638,users:805,share:41.4},
   {name:"tablet",sessions:84,users:59,share:2.1}
  ],
  source:[
   {name:"直接進站",medium:"other",sessions:2047,users:1081,share:52.0},
   {name:"自然搜尋",medium:"organic",sessions:1694,users:818,share:43.0},
   {name:"校內參考",medium:"internal",sessions:42,users:16,share:1.1},
   {name:"其他來源",medium:"other",sessions:119,users:75,share:3.0}
  ]
 },
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
    {week:"07/26",sessions:314,users:259,pageviews:776,impressions:2395,clicks:154}
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
 }
};
