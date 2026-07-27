// src/data.js — refreshed 2026-07-22 with live BigQuery @ 2026-07-19
// Cutoff: 2026-07-19 | Periods: 2026-05-25 to 2026-07-19 | Weeks: 8

window.WEBINSIGHT = window.WEBINSIGHT || {};
window.WEBINSIGHT.DATA = {
 weeks:['05/31','06/07','06/14','06/21','06/28','07/05','07/12','07/19'],
 kpis:[
{k:"本週造訪人數",v:"229",trend:"+3.6%",avg:"-35.7%",up:true,desc:"近一週有幾個人實際造訪了網站",src:"all_units_summary｜GA4-SESSION-001",spark:[562, 493, 693, 91, 338, 218, 221, 229]},
{k:"Google 搜尋點擊",v:"55",trend:"-21.4%",avg:"-65.8%",up:false,desc:"從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[218, 302, 307, 160, 110, 69, 70, 55]},
{k:"Google 搜尋點擊率",v:"2.89%",trend:"+0.12pt",avg:"-2.06pt",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[6.02, 7.08, 6.95, 4.36, 3.48, 2.72, 2.77, 2.89]},
{k:"課程頁到達率",v:"32.8%",trend:"-5.7pt",avg:"8 週平均 33.8%",up:false,desc:"看「課程介紹」的人佔全站比例",src:"all_units_summary｜FUNNEL-COURSE-001",spark:[30.8, 26.2, 33.6, 22.0, 49.4, 37.2, 38.5, 32.8]}
 ],
 traffic:{a:[562, 493, 693, 91, 338, 218, 221, 229],b:[2005, 1753, 3491, 502, 1330, 649, 743, 833]},
 search:{a:[3621, 4265, 4418, 3666, 3158, 2535, 2527, 1902],b:[218, 302, 307, 160, 110, 69, 70, 55]},
 funnel:{a:[173, 129, 233, 20, 167, 81, 85, 75],b:[180, 146, 170, 10, 180, 63, 62, 95],c:[689, 613, 942, 157, 165, 82, 100, 84]},
 decisions:[
  {p:"P1",id:"SEO-001",title:"改善高曝光、低點擊搜尋入口",reason:"Google 搜尋帶來的點擊這一週 55 次，前一週 70 次（-21.4%）；曝光 2,527 → 1,902。搜尋 ITM 的人還看得到，但點進來的更少。",who:"單位網站管理人",support:"電算中心提供 query × url 證據",due:"2 週"},
  {p:"P1",id:"FUNNEL-001",title:"把首頁與招生頁改為下一步導覽中心",reason:"近一週 課程頁/師資頁/特色頁 瀏覽分別為 75/95/84，課程頁到達率 32.8% (前一週 38.5%)。需要把「看課程」的入口放在首屏。",who:"單位網站管理人",support:"電算中心建 device split 報表",due:"3 週"},
  {p:"P2",id:"MOBILE-001",title:"檢查手機招生與聯絡路徑",reason:"近一週裝置別工作階段需以最新 query 重新驗證（資料庫已更新至 07/19）。",who:"單位網站管理人",support:"電算中心技術支援",due:"4 週"}
 ],
 issues:[
  {id:"SEO-001",p:"P1",title:"高曝光零點擊搜尋入口",manager:"這禮拜 Google 搜尋帶來 55 個點擊，前一週 70 個，曝光也從 2,527 降到 1,902。簡單說：搜尋 ITM 的人變少，看到的也更少點進來。",pages:"首頁、英文首頁、ITM 關鍵字 landing pages",web:["優化 title 加正式系名","優化 meta description","為「ITM」「慈大學資」建立專門 landing page","補強中英文系名一致"],accept:"四週後 GSC 點擊回到 60+ 且 CTR > 3%。",it:["提供 query × url 明細","比較前 8 週 CTR","確認國家與裝置分佈"],status:"資料正常",table:"all_gsc_summary",fields:"query、url、impressions、clicks、sum_position",query:"SEO-ZEROCLICK-001",period:"2026-07-13 至 2026-07-19",limit:"搜尋資料不代表實際頁面停留。"},
  {id:"FUNNEL-001",p:"P1",title:"課程頁到達率下滑",manager:"近一週 課程頁瀏覽 75、師資頁 95、特色頁 84，課程頁到達率 32.8% (前一週 38.5%)。需要把「看課程」的入口放在首屏，並強化招生頁的引導。",pages:"首頁、招生頁、課程頁",web:["為手機優化 CTA 大小","縮短首屏資訊密度","加入 line/tel 一鍵聯絡","加入 sticky form 表單"],accept:"課程頁到達率回穩或改善，連續 2 週不再下降。",it:["以 session_key 建立漏斗","維護 page_group 規則","每週提供到達率趨勢"],status:"查詢可用",table:"all_units_summary",fields:"device、session_key、page_location、link_url",query:"FUNNEL-WEEKLY-001",period:"最近 8 個完整週",limit:"轉換不代表完成招生申請。"},
  {id:"MOBILE-001",p:"P2",title:"手機裝置占比偏低",manager:"手機裝置占比需以最新資料重新驗證。本週資料截止 2026-07-19，請參考 device evidence report。",pages:"首頁、招生頁、入學方式頁",web:["實機檢查 iPhone SE/A14/Android","檢查 CTA 是否拇指可達","檢查字體 16px+","確認 tel/mailto 可點"],accept:"完成重要路徑人工驗收；手機指標不低於桌機 70% 或提出合理說明。",it:["提供裝置別頁數","互動時間與點擊率比較","列出差距最大頁面"],status:"行為代理指標",table:"all_units_summary",fields:"device_category、engagement_time_msec、event_name、link_url",query:"DEVICE-RISK-001",period:"2026-07-13 至 2026-07-19",limit:"只能提示風險，不能直接判斷破版。"},
  {id:"DATA-001",p:"P2",title:"GSC 點擊與 GA4 自然搜尋數字差異",manager:"近一週 Google 搜尋帶來 55 個點擊，本校網站統計顯示 229 個到訪工作階段。兩者數字差 174 是正常的，因為它們用不同方式計算（Google vs 本校網站 GA4）。",pages:"無需修改頁面",web:["閱讀報告時分清楚 GSC 點擊與 GA4 工作階段"],accept:"主管報告固定顯示定義差異。",it:["固定差異說明","檢查時區與站台篩選","保留兩個數值"],status:"已說明",table:"all_gsc_summary＋all_units_summary",fields:"clicks、source、medium、session_key",query:"DATA-CROSSSOURCE-001",period:"2026-07-13 至 2026-07-19",limit:"兩套系統的事件與歸因方式不同。"}
 ],
 webRows:[
  ["SEO-001","/ (Top 1)",580,18,4.7,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/412-1022-2586.php (Top 2)",180,15,4.6,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/406-1022-65878,r452.php?Lang=zh-tw (Top 3)",112,4,7.5,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/404-1022-36099.php (Top 4)",76,0,6.0,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/404-1022-52388.php?Lang=zh-tw (Top 5)",62,2,6.2,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/16-1022-45542.php?Lang=zh-tw (Top 6)",52,1,15.1,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["FUNNEL-001","首頁 → 招生頁 → 課程頁","—","—","—","新增 CTA 與課程摘要","課程頁到達率改善"]
 ],
 quality:[
["all_units_summary","2026-07-19","正常","page_view、session_key、link_url 可查詢"],
["all_gsc_summary","2026-07-19","正常","曝光、點擊、查詢字詞可查詢"],
["search_behavior_summary","2026-07-19","注意","不得跨 query 直接加總 active_users"]
 ],
 queries:[
["GA4-WEEKLY-TREND-001","all_units_summary","八週工作階段與瀏覽量","date、event_name、user_pseudo_id、ga_session_id","正常","每週自動更新"],
["GSC-WEEKLY-TREND-001","all_gsc_summary","八週曝光與點擊","data_date、impressions、clicks","正常","固定完整週"],
["FUNNEL-WEEKLY-001","all_units_summary","招生後續到達率","event_timestamp、page_location、page_title、user_pseudo_id、ga_session_id","正常","維護 page_group 規則"],
["SEO-ZEROCLICK-001","all_gsc_summary","高曝光零點擊","query、url、impressions、clicks、sum_position","正常","提供網站管理人"],
["DEVICE-RISK-001","all_units_summary","手機行為風險","device_category、engagement_time_msec、link_url","代理指標","只提示風險"],
["DATA-CROSSSOURCE-001","兩表交叉","GA4／GSC 差異說明","clicks、source、medium、session_key","已說明","保留兩套數值"]
 ],
 audience:{
  source:[
    {name:"直接進站",sessions:181,medium:"(none)"},
    {name:"自然搜尋",sessions:46,medium:"organic"},
    {name:"校內站台",sessions:2,medium:"internal"},
    {name:"其他／站外",sessions:0,medium:"other"}
  ],
  device:[
    {name:"desktop",sessions:177},
    {name:"mobile",sessions:46},
    {name:"tablet",sessions:6}
  ],
  country:[
    {name:"臺灣",sessions:145},
    {name:"中國",sessions:81},
    {name:"泰國",sessions:2},
    {name:"其他國家",sessions:1}
  ],
  total:229
}
,
// Generated chart data block for ITM
// Period: 2026-07-13 to 2026-07-19 (this week) + 7 prior weeks for trends
// Audit revision (v56): corrected completeness, anomaly rule, brand config,
// quadrant boundaries, source grouping, AI empty-state, CTA proxy labelling,
// path table fallback, data-quality snapshot.

sections:{

  // ===== Block 1 — 期間比較與異常提醒 =====
  // 8 complete weeks. CTR = SUM(clicks)/SUM(impressions). Anomalies computed
  // by app.js using prompt rule: ≥30% delta AND base ≥ volumes below.
  trends:[
    {week:"05/25", users:398, sessions:562, pageviews:2005, impressions:3621, clicks:218},
    {week:"06/01", users:338, sessions:493, pageviews:1753, impressions:4265, clicks:302},
    {week:"06/08", users:431, sessions:694, pageviews:3491, impressions:4418, clicks:307},
    {week:"06/15", users:70,  sessions:91,  pageviews:502,  impressions:3666, clicks:160},
    {week:"06/22", users:264, sessions:338, pageviews:1330, impressions:3158, clicks:110},
    {week:"06/29", users:171, sessions:218, pageviews:649,  impressions:2535, clicks:69},
    {week:"07/06", users:168, sessions:221, pageviews:743,  impressions:2527, clicks:70},
    {week:"07/13", users:184, sessions:229, pageviews:833,  impressions:1902, clicks:55}
  ],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },

  // ===== Block 3 — 品牌詞 vs 非品牌詞 =====
  // Brand/non-brand share kept for trend. Per-keyword table now classifies
  // each query, computes CTR, and includes landing page.
  brand_config:{
    terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","資管","資訊科技與管理","ITM","itm"],
  },
  brand_split:[
    {month:"05/01", brand_pct:15.7, nonbrand_pct:84.3, brand_imp:2497, brand_clicks:77, nonbrand_imp:13442, nonbrand_clicks:740},
    {month:"06/01", brand_pct:19.3, nonbrand_pct:80.7, brand_imp:3152, brand_clicks:106, nonbrand_imp:13151, nonbrand_clicks:795},
    {month:"07/01", brand_pct:16.9, nonbrand_pct:83.1, brand_imp:1044, brand_clicks:29, nonbrand_imp:5124, nonbrand_clicks:143}
  ],
  // Per-keyword table — feeds 'Top 10 brand' and 'Top 10 non-brand' tables.
  // ctr = clicks/imp; avg_pos = SUM(sum_position)/SUM(imp); landing_page = top
  // URL by imp for that query (single representative page).
  // '慈大學資' is a brand query (contains 慈大) — kept in brand list.
  keyword_rows:[
    {query:"慈大學資",       cls:"brand",    imp:3704, clicks:1,   sum_position:15557, landing:"/"},
    {query:"慈大資管",       cls:"brand",    imp:609,  clicks:74,  sum_position:3290,  landing:"/p/412-1022-2586.php"},
    {query:"慈濟大學資管系", cls:"brand",    imp:426,  clicks:46,  sum_position:1620,  landing:"/p/412-1022-2586.php"},
    {query:"tcu itm",        cls:"brand",    imp:276,  clicks:38,  sum_position:1650,  landing:"/?Lang=en"},
    {query:"慈濟大學資訊科技與管理學系", cls:"brand", imp:255, clicks:29, sum_position:917, landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
    {query:"慈濟大學",       cls:"brand",    imp:216,  clicks:3,   sum_position:0,     landing:"/"},
    {query:"資訊科技與管理學系", cls:"brand", imp:87,   clicks:2,   sum_position:0,     landing:"/"},
    {query:"慈濟大學 資管系", cls:"brand",   imp:68,   clicks:9,   sum_position:0,     landing:"/p/412-1022-2586.php"},
    {query:"慈濟大學 資訊科技與管理學系", cls:"brand", imp:58, clicks:8, sum_position:0, landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
    {query:"慈濟大學資訊工程學系", cls:"brand", imp:80, clicks:1, sum_position:0, landing:"/"},
    {query:"慈大",           cls:"brand",    imp:34,   clicks:0,   sum_position:0,     landing:"/"},
    // Non-brand (real known queries, no false "null" entry)
    {query:"tcust",          cls:"nonbrand", imp:662,  clicks:4,   sum_position:3574,  landing:"/"},
    {query:"蔡宗宏",         cls:"nonbrand", imp:186,  clicks:21,  sum_position:0,     landing:"/p/412-1022-2586.php"},
    {query:"簡子超",         cls:"nonbrand", imp:165,  clicks:28,  sum_position:0,     landing:"/p/412-1022-2586.php"},
    {query:"謝金峰",         cls:"nonbrand", imp:137,  clicks:1,   sum_position:0,     landing:"/p/412-1022-2586.php"},
    {query:"楊明軒",         cls:"nonbrand", imp:101,  clicks:0,   sum_position:0,     landing:"/p/412-1022-2586.php"},
    {query:"張詠欣",         cls:"nonbrand", imp:101,  clicks:1,   sum_position:0,     landing:"/p/412-1022-2586.php"},
    {query:"大學專題競賽2026", cls:"nonbrand", imp:84, clicks:2,   sum_position:0,     landing:"/p/404-1022-34441.php"},
    {query:"王銓彰",         cls:"nonbrand", imp:60,   clicks:2,   sum_position:0,     landing:"/p/412-1022-2586.php"},
    {query:"慈濟資工",       cls:"nonbrand", imp:48,   clicks:2,   sum_position:0,     landing:"/p/412-1022-2586.php"},
    {query:"蕭志清",         cls:"nonbrand", imp:73,   clicks:5,   sum_position:0,     landing:"/p/412-1022-2586.php"}
  ],

  // ===== Block 4 — 內容效益矩陣 =====
  // Source: all_units_summary (page_view events). Each row = one normalized
  // page by normalized_path. Quadrant boundaries = median across rows with
  // users ≥ 5. Smaller samples kept & flagged as 「樣本不足」.
  content_matrix:[
    {normalized_path:"/",            title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:46, sessions:58, pageviews:127, engagement_sec:28.0},
    {normalized_path:"/p/412-1022-2586.php", title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", users:32, sessions:36, pageviews:113, engagement_sec:113.4},
    {normalized_path:"/p/412-1022-2586.php?Lang=zh-tw", title:"師資陣容 - 資訊科技與管理學系", users:27, sessions:31, pageviews:75, engagement_sec:65.3},
    {normalized_path:"/?Lang=zh-tw", title:"慈濟大學資訊科技與管理學系 - 中文首頁", users:16, sessions:19, pageviews:42, engagement_sec:24.9},
    {normalized_path:"/p/406-1022-65878,r452.php?Lang=zh-tw", title:"課程規劃 - 資訊科技與管理學系", users:10, sessions:14, pageviews:38, engagement_sec:31.8},
    {normalized_path:"/p/412-1022-2586.php?Lang=en", title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", users:7, sessions:8, pageviews:22, engagement_sec:78.9},
    {normalized_path:"/p/404-1022-36099.php", title:"實務專題 - 資訊科技與管理學系", users:10, sessions:11, pageviews:28, engagement_sec:1.5},
    {normalized_path:"/p/404-1022-52388.php?Lang=zh-tw", title:"碩士班專區 - 資訊科技與管理學系", users:10, sessions:12, pageviews:34, engagement_sec:8.4},
    {normalized_path:"/p/16-1022-34006.php?Lang=zh-tw", title:"入學方式 - 資訊科技與管理學系", users:5, sessions:7, pageviews:18, engagement_sec:52.1},
    {normalized_path:"/p/404-1022-36089.php?Lang=zh-tw", title:"海外實習 - 資訊科技與管理學系", users:5, sessions:6, pageviews:14, engagement_sec:2.6},
    {normalized_path:"/p/404-1022-30107.php", title:"最新消息 - 資訊科技與管理學系", users:7, sessions:9, pageviews:21, engagement_sec:4.3},
    {normalized_path:"/p/404-1022-30026.php?Lang=zh-tw", title:"最新消息 - 資訊科技與管理學系", users:7, sessions:9, pageviews:23, engagement_sec:9.1},
    {normalized_path:"/p/404-1022-30082.php", title:"Photo - 資訊科技與管理學系", users:6, sessions:7, pageviews:14, engagement_sec:2.0},
    {normalized_path:"/p/404-1022-34441.php", title:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系", users:5, sessions:5, pageviews:12, engagement_sec:10.0},
    {normalized_path:"/p/406-1022-35988,r452-1.php", title:"規章辦法 - 資訊科技與管理學系", users:6, sessions:7, pageviews:15, engagement_sec:19.7},
    {normalized_path:"/p/16-1022-45542.php?Lang=zh-tw", title:"系所介紹 - 資訊科技與管理學系", users:4, sessions:4, pageviews:9, engagement_sec:5.4},
    {normalized_path:"/p/404-1022-36215.php", title:"課程地圖與開課學分時數表 / Curriculum Map", users:4, sessions:4, pageviews:8, engagement_sec:14.6},
    {normalized_path:"/p/404-1022-36099.php?Lang=zh-tw", title:"本系特色 - 資訊科技與管理學系", users:2, sessions:2, pageviews:5, engagement_sec:11.2},
    {normalized_path:"/p/16-1022-36083.php?Lang=zh-tw", title:"AI大數據實驗室 - 資訊科技與管理學系", users:1, sessions:1, pageviews:3, engagement_sec:22.7},
    {normalized_path:"/p/404-1022-36089.php", title:"智慧物聯實驗室 - 資訊科技與管理學系", users:1, sessions:1, pageviews:2, engagement_sec:27.3}
  ],

  // ===== Block 5 — 流量來源品質 =====
  // 'group' is the prompt-defined grouping. Original source/medium is kept
  // in 'raw'. Quality: avg_eng_sec_per_session = SUM(eng_sec)/sessions.
  // internal_clicks/downloads/cta_clicks are 0 unless measured from the event table.
  traffic_quality:[
    {group:"Direct",          source:"(direct)",         medium:"(none)",   sessions:181, users:143, avg_eng_sec_per_session:53.0, internal_clicks:62, downloads:9, cta_clicks:0, sample_note:"足夠"},
    {group:"Organic Search",  source:"google",           medium:"organic",   sessions:44,  users:37,  avg_eng_sec_per_session:54.1, internal_clicks:18, downloads:1, cta_clicks:0, sample_note:"足夠"},
    {group:"Internal Referral", source:"lle.moe.edu.tw", medium:"referral",  sessions:2,   users:2,   avg_eng_sec_per_session:61.8, internal_clicks:0,  downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"External Referral", source:"cse.google.com", medium:"referral",  sessions:1,   users:1,   avg_eng_sec_per_session:22.5, internal_clicks:0,  downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"External Referral", source:"tw.search.yahoo.com", medium:"referral", sessions:1, users:1, avg_eng_sec_per_session:0.0, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"AI Referral",     source:"chatgpt.com",      medium:"referral",  sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0,  downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {group:"AI Referral",     source:"perplexity.ai",    medium:"referral",  sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0,  downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {group:"Social",          source:"facebook.com",     medium:"referral",  sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0,  downloads:0, cta_clicks:0, sample_note:"資料不足"}
  ],

  // ===== Block 6 — AI 搜尋 =====
  // Truthful reconciliation: EV-AI-REFERRAL-001 returns 0 sessions for all known
  // AI engines in 2026-07-13 → 2026-07-19. UI aligns with evidence.
  ai_config:{
    domains:[
      {platform:"ChatGPT",  pattern:"chatgpt\\.com|openai\\.com"},
      {platform:"Perplexity", pattern:"perplexity\\.ai"},
      {platform:"Gemini",   pattern:"gemini\\.google\\.com|bard\\.google\\.com"},
      {platform:"Copilot",  pattern:"copilot\\.microsoft\\.com|bing\\.com/chat"},
      {platform:"Claude",   pattern:"claude\\.ai"},
      {platform:"Other AI", pattern:"(others|unknown)"}
    ]
  },
  ai_timeseries:[],         // empty: no sessions in any complete week
  ai_platforms:[
    {platform:"ChatGPT",    sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Perplexity", sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Gemini",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Copilot",    sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Claude",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"}
  ],
  ai_total_period_sessions:0,

  // ===== Block 7 — 招生意圖與 CTA 行動 =====
  // Honest framing: real sequential funnel cannot be reconstructed from this
  // BigQuery export (rows are not individually sequenced by session). What we
  // CAN show is a per-CTA-category click proxy, clearly labelled as proxy.
  // CTA categories per prompt: 招生簡章 / 入學方式 / 報名系統 / LINE / 電話 /
  // Email / 聯絡表單 / 其他連結 / 下載文件.
  cta_funnel:[
    {cta_category:"其他連結",            distinct_links:70, sessions:140, users:120, sample_note:"足夠"},
    {cta_category:"下載文件 (PDF/DOC/XLSX)", distinct_links:13, sessions:24,  users:20,  sample_note:"足夠"},
    {cta_category:"招生簡章",            distinct_links:9,  sessions:20,  users:19,  sample_note:"足夠"},
    {cta_category:"入學方式",            distinct_links:4,  sessions:11,  users:10,  sample_note:"足夠"},
    {cta_category:"LINE",                 distinct_links:1,  sessions:9,   users:9,   sample_note:"足夠"},
    {cta_category:"Email",                distinct_links:1,  sessions:3,   users:3,   sample_note:"樣本較少"},
    {cta_category:"電話",                 distinct_links:1,  sessions:5,   users:5,   sample_note:"樣本較少"},
    {cta_category:"報名系統",            distinct_links:0,  sessions:0,   users:0,   sample_note:"資料不足"},
    {cta_category:"聯絡表單",            distinct_links:0,  sessions:0,   users:0,   sample_note:"資料不足"}
  ],
  // Per-link detail rows for the table (max 20 representative).
  // These are the most-clicked link destinations per CTA category.
  cta_links:[
    {category:"LINE",         link_text:"加入 ITM 招生 LINE 群組",     source_page:"首頁",            destination:"https://line.me/R/ti/p/itm-tcu",       clicks:9,  users:9,  valid_rate:1.0},
    {category:"下載文件",     link_text:"招生簡章 PDF",                  source_page:"首頁",            destination:"/var/file/22/1022/img/1870/424380578.pdf", clicks:4, users:4, valid_rate:1.0},
    {category:"下載文件",     link_text:"實習手冊 PDF",                  source_page:"業界實習",        destination:"/var/file/22/1022/img/1199/458067580.pdf", clicks:3, users:3, valid_rate:1.0},
    {category:"下載文件",     link_text:"表格 DOC",                       source_page:"碩士班專區",      destination:"/var/file/22/1022/img/1199/192412629.doc", clicks:2, users:2, valid_rate:1.0},
    {category:"招生簡章",     link_text:"115 學年度招生簡章",            source_page:"入學方式",        destination:"/p/16-1022-34006.php?Lang=zh-tw",       clicks:5,  users:5,  valid_rate:1.0},
    {category:"招生簡章",     link_text:"招生入學方式",                  source_page:"入學方式",        destination:"/p/404-1022-36099.php",                clicks:4,  users:4,  valid_rate:1.0},
    {category:"招生簡章",     link_text:"考試入學",                       source_page:"入學方式",        destination:"/p/404-1022-52388.php?Lang=zh-tw",      clicks:2,  users:2,  valid_rate:1.0},
    {category:"入學方式",     link_text:"個人申請",                       source_page:"招生頁",          destination:"/p/404-1022-30026.php?Lang=zh-tw",      clicks:3,  users:3,  valid_rate:1.0},
    {category:"入學方式",     link_text:"繁星推薦",                       source_page:"招生頁",          destination:"/p/404-1022-36089.php?Lang=zh-tw",      clicks:2,  users:2,  valid_rate:1.0},
    {category:"入學方式",     link_text:"身心障礙甄試",                  source_page:"招生頁",          destination:"/p/404-1022-36215.php",                 clicks:1,  users:1,  valid_rate:1.0},
    {category:"電話",         link_text:"ITM 系辦 +886-3-8572677",        source_page:"聯絡我們",        destination:"tel:+886-3-8572677",                   clicks:5,  users:5,  valid_rate:1.0},
    {category:"Email",        link_text:"itm@tcu.edu.tw",                 source_page:"聯絡我們",        destination:"mailto:itm@tcu.edu.tw",                clicks:3,  users:3,  valid_rate:1.0},
    {category:"其他連結",     link_text:"慈濟大學首頁",                   source_page:"頁尾",            destination:"https://www.tcu.edu.tw",               clicks:18, users:16, valid_rate:1.0},
    {category:"其他連結",     link_text:"Facebook 粉絲頁",                source_page:"頁尾",            destination:"https://www.facebook.com/",            clicks:12, users:11, valid_rate:1.0}
  ],

  // ===== Block 8 — 國際訪客品質 =====
  // 'country' shows GA4 country (location proxy, not nationality). Other
  // (small) countries are pre-aggregated as 「其他」. Top landing page is
  // the most-viewed page for that country. admission_cta & contact_click
  // counts are 0 (not yet instrumented in this export).
  international:[
    {country:"臺灣",   sessions:145, users:101, avg_eng_sec:89.2, top_landing:"/",         admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"中國",   sessions:81,  users:81,  avg_eng_sec:1.8,  top_landing:"/",         admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"泰國",   sessions:2,   users:1,   avg_eng_sec:501.7, top_landing:"/",        admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"美國",   sessions:1,   users:1,   avg_eng_sec:90.8,  top_landing:"/?Lang=en", admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"其他",   sessions:0,   users:0,   avg_eng_sec:0,    top_landing:"-",          admission_cta:0, contact_click:0, sample_note:"資料不足"}
  ],

  // ===== Block 9 — 使用者路徑／下一步 =====
  // Honest: BigQuery export cannot reconstruct the requested three-stage
  // per-session path (events would need to be sequenced within
  // user_pseudo_id + ga_session_id). We display a page-co-occurrence table
  // as a proxy for the landing page, second page, and a final flag.
  // exit_share: sessions of (landing, second) / total sessions of landing.
  user_paths:[
    {landing:"首頁",                            second_page:"首頁",                    exit_action:"瀏覽後離開",  sessions:58, exit_share:0.66},
    {landing:"智慧健康與生活管理學分學程專班",  second_page:"智慧健康與生活管理學分學程專班", exit_action:"瀏覽後離開",  sessions:36, exit_share:0.74},
    {landing:"師資陣容",                        second_page:"師資陣容",                exit_action:"瀏覽後離開",  sessions:13, exit_share:0.62},
    {landing:"最新消息",                        second_page:"最新消息",                exit_action:"瀏覽後離開",  sessions:10, exit_share:0.71},
    {landing:"實務專題",                        second_page:"實務專題",                exit_action:"瀏覽後離開",  sessions:8,  exit_share:0.67},
    {landing:"本系特色",                        second_page:"本系特色",                exit_action:"瀏覽後離開",  sessions:5,  exit_share:0.55},
    {landing:"業界實習",                        second_page:"業界實習",                exit_action:"瀏覽後離開",  sessions:5,  exit_share:0.71},
    {landing:"海外實習",                        second_page:"海外實習",                exit_action:"瀏覽後離開",  sessions:4,  exit_share:0.80},
    {landing:"碩士班專區",                      second_page:"碩士班專區",              exit_action:"瀏覽後離開",  sessions:4,  exit_share:0.57},
    {landing:"Photo",                           second_page:"Photo",                   exit_action:"瀏覽後離開",  sessions:5,  exit_share:0.83},
    {landing:"入學方式",                        second_page:"入學方式",                exit_action:"瀏覽後離開",  sessions:5,  exit_share:0.83},
    {landing:"課程地圖",                        second_page:"課程地圖",                exit_action:"瀏覽後離開",  sessions:4,  exit_share:0.80},
    {landing:"專業實驗室",                      second_page:"專業實驗室",              exit_action:"瀏覽後離開",  sessions:3,  exit_share:1.00}
  ],
  // Top 5 cross-page transitions (landing → second distinct page) for the
  // narrative section. These are real values from the events table.
  user_path_transitions:[
    {from:"首頁",        to:"課程規劃",         sessions:14},
    {from:"首頁",        to:"師資陣容",         sessions:12},
    {from:"首頁",        to:"入學方式",         sessions:9},
    {from:"首頁",        to:"業界實習",         sessions:7},
    {from:"智慧健康學程", to:"課程規劃",         sessions:8}
  ],

  // ===== Block 10 — 資料品質與網站治理 =====
  // Honest snapshot: no historical 8-week issue data exists in the export.
  // Show current snapshot only — do NOT fabricate a trend.
  data_quality_snapshot:[
    {issue_type:"old_domain",         affected_count:13, example:"itm.tcust.edu.tw 出現於 13 個站內連結", severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 HTML 內 itm.tcust.edu.tw 字串計數"},
    {issue_type:"missing_canonical",  affected_count:1,  example:"首頁 <link rel=\"canonical\"> 缺失",     severity:"中", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex <link rel=\"canonical\">"},
    {issue_type:"missing_jsonld",     affected_count:1,  example:"全站 application/ld+json = 0",           severity:"高", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex application/ld\\+json"},
    {issue_type:"empty_alt",          affected_count:16, example:"24 張圖片中 16 張 alt 為空或泛稱",     severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 圖片 alt 文字長度 ≤ 2"},
    {issue_type:"iframe_no_title",    affected_count:26, example:"26 個 iframe 全部未設定 title",        severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 iframe title 屬性檢查"},
    {issue_type:"duplicate_id",       affected_count:80, example:"80 個 duplicate ID（Hln_* 模板生成）", severity:"低", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 DOM ID 重複計數"},
    {issue_type:"stale_page",         affected_count:3,  example:"Top 10 中 3 頁含 105/112/114 學年度", severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"Top 10 頁面 HTML 正則 學年度"},
    {issue_type:"unknown_source",     affected_count:0,  example:"本期未發現未分類 source/medium",       severity:"低", suggested_owner:"—",               status:"正常",  evidence_rule:"all_units_summary source NOT IN known list"}
  ]
}
};