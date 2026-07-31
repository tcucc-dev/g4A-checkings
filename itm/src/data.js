// src/data.js — refreshed 2026-07-29 with live BigQuery @ 2026-07-26
// Cutoff (smallest max_date across 3 sources): 2026-07-26 (GSC is the bottleneck)
// Periods: 2026-06-07 to 2026-07-26 | Weeks: 8 (Sunday-aligned)
// New "latest complete week" = 2026-07-20 ~ 2026-07-26 (Sunday-aligned, GA4 + GSC aligned)

window.WEBINSIGHT = window.WEBINSIGHT || {};
window.WEBINSIGHT.DATA = {
 weeks:['06/07','06/14','06/21','06/28','07/05','07/12','07/19','07/26'],
 kpis:[
 {k:"本週造訪人數",v:"181",trend:"-1.6%",avg:"-1.6% 較前週",up:false,desc:"近一週有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[171,168,184,181]},
{k:"Google 搜尋點擊",v:"81",trend:"+47.3%",avg:"+47.3% 較前週",up:true,desc:"從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[69,70,55,81]},
{k:"Google 搜尋點擊率",v:"3.13%",trend:"+0.24pt",avg:"+0.24pt 較前週",up:true,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[2.72,2.77,2.89,3.13]},
{k:"課程頁到達率",v:"67.1%",trend:"課程 149",avg:"教師 110 / 特色 293",up:true,desc:"看「課程介紹」的人佔全站比例",src:"all_units_summary｜FUNNEL-COURSE-001",spark:[49.1,49.3,53.7,67.1]}
],
 traffic:{a:[708,166,316,214,219,240,221,222],b:[3481,868,1275,622,762,843,857,843]},
 search:{a:[4385,3960,3159,2543,2553,2002,2436,2587],b:[342,179,112,70,73,54,77,81]},
 funnel:{a:[51, 12, 32, 20, 21, 24, 22, 22],b:[54, 14, 27, 25, 19, 21, 21, 19],c:[135, 11, 18, 7, 11, 12, 12, 9]},
 decisions:[
 {p:"P1",id:"SEO-001",title:"改善高曝光、低點擊搜尋入口",reason:"Google 搜尋帶來的點擊這一週 81 次，前一週 55 次（+47.3%）；曝光 1902 → 2587（+36.0%）。",who:"單位網站管理人",support:"電算中心提供 query × url 證據",due:"2 週"},
 {p:"P1",id:"FUNNEL-001",title:"把首頁與師資頁改為下一步導覽中心",reason:"近一週 課程頁/師資頁/特色頁 工作階段分別為 149/110/293，課程頁到達率 67.1%。",who:"單位網站管理人",support:"電算中心建 device split 報表",due:"3 週"},
 {p:"P2",id:"MOBILE-001",title:"檢查手機招生與聯絡路徑",reason:"近一週裝置別工作階段需以最新 query 重新驗證（資料庫已更新至 2026-07-26）。",who:"單位網站管理人",support:"電算中心技術支援",due:"4 週"}
 ],
  issues:[
  {id:"SEO-001",p:"P1",title:"高曝光零點擊搜尋入口",manager:"這禮拜 Google 搜尋帶來 81 個點擊，前一週 55 個（+47.3%），曝光 1902 → 2587。搜尋 ITM 的人看得到且點進來變多",pages:"首頁、英文首頁、ITM 關鍵字 landing pages",web:["優化 title 加正式系名","優化 meta description","為「ITM」「慈大學資」建立專門 landing page","補強中英文系名一致"],accept:"四週後 GSC 點擊回到 60+ 且 CTR > 3%。",it:["提供 query × url 明細","比較前 8 週 CTR","確認國家與裝置分佈"],status:"資料正常",table:"all_gsc_summary",fields:"query、url、impressions、clicks、sum_position",query:"SEO-ZEROCLICK-001",period:"2026-07-20 至 2026-07-26",limit:"搜尋資料不代表實際頁面停留。"},
  {id:"FUNNEL-001",p:"P1",title:"課程頁到達率回升",manager:"近一週 課程頁工作階段 48、師資頁 44、特色頁 87，課程頁到達率 21.6%。持續把「看課程」的入口放在首屏。",pages:"首頁、招生頁、課程頁",web:["為手機優化 CTA 大小","縮短首屏資訊密度","加入 line/tel 一鍵聯絡","加入 sticky form 表單"],accept:"課程頁到達率回穩或改善，連續 2 週不再下降。",it:["以 session_key 建立漏斗","維護 page_group 規則","每週提供到達率趨勢"],status:"查詢可用",table:"all_units_summary",fields:"device、session_key、page_location、link_url",query:"FUNNEL-WEEKLY-001",period:"最近 8 個完整週",limit:"轉換不代表完成招生申請。"},
  {id:"MOBILE-001",p:"P2",title:"手機裝置占比偏低",manager:"手機裝置占比需以最新資料重新驗證。本週資料截止 2026-07-26，請參考 device evidence report。",pages:"首頁、招生頁、入學方式頁",web:["實機檢查 iPhone SE/A14/Android","檢查 CTA 是否拇指可達","檢查字體 16px+","確認 tel/mailto 可點"],accept:"完成重要路徑人工驗收；手機指標不低於桌機 70% 或提出合理說明。",it:["提供裝置別頁數","互動時間與點擊率比較","列出差距最大頁面"],status:"行為代理指標",table:"all_units_summary",fields:"device_category、engagement_time_msec、event_name、link_url",query:"DEVICE-RISK-001",period:"2026-07-20 至 2026-07-26",limit:"只能提示風險，不能直接判斷破版。"},
  {id:"DATA-001",p:"P2",title:"GSC 點擊與 GA4 自然搜尋數字差異",manager:"近一週 Google 搜尋帶來 55 個點擊，本校網站統計顯示 229 個到訪工作階段。兩者數字差 174 是正常的，因為它們用不同方式計算（Google vs 本校網站 GA4）。",pages:"無需修改頁面",web:["閱讀報告時分清楚 GSC 點擊與 GA4 工作階段"],accept:"主管報告固定顯示定義差異。",it:["固定差異說明","檢查時區與站台篩選","保留兩個數值"],status:"已說明",table:"all_gsc_summary＋all_units_summary",fields:"clicks、source、medium、session_key",query:"DATA-CROSSSOURCE-001",period:"2026-07-20 至 2026-07-26",limit:"兩套系統的事件與歸因方式不同。"}
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
["all_units_summary","2026-07-24","正常","page_view、session_key、link_url 可查詢"],
["all_gsc_summary","2026-07-24","正常","曝光、點擊、查詢字詞可查詢"],
["search_behavior_summary","2026-07-25","注意","不得跨 query 直接加總 active_users"]
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
    {name:"直接進站",sessions:162,medium:"(none)"},
    {name:"自然搜尋",sessions:53,medium:"organic"},
    {name:"校內站台",sessions:3,medium:"internal"},
    {name:"其他／站外",sessions:1,medium:"other"},
    {name:"AI 推薦",sessions:1,medium:"ai-assistant"}
  ],
  device:[
    {name:"desktop",sessions:147},
    {name:"mobile",sessions:73},
    {name:"tablet",sessions:2}
  ],
  country:[
    {name:"臺灣",sessions:149},
    {name:"中國",sessions:65},
    {name:"美國",sessions:5},
    {name:"其他國家",sessions:3}
  ],
  total:222
}
,
// Generated chart data block for ITM
// Period: 2026-06-07 to 2026-07-26 (this week = 07/20-07/26) + 7 prior 7-day periods
// Audit revision (v56): corrected completeness, anomaly rule, brand config,
// quadrant boundaries, source grouping, AI empty-state, CTA proxy labelling,
// path table fallback, data-quality snapshot.

sections:{

  // ===== Block 1 — 期間比較與異常提醒 =====
  // 8 complete weeks. CTR = SUM(clicks)/SUM(impressions). Anomalies computed
  // by app.js using prompt rule: ≥30% delta AND base ≥ volumes below.
  // New data: 2026-07-29 (today) ; latest complete week = 07/20 ~ 07/26 (Sunday-aligned)
  trends:[
    {week:"06/07", users:438, sessions:708, pageviews:3481, impressions:4385, clicks:342},
    {week:"06/14", users:124, sessions:166, pageviews:868, impressions:3960, clicks:179},
    {week:"06/21", users:247, sessions:316, pageviews:1275, impressions:3159, clicks:112},
    {week:"06/28", users:171, sessions:214, pageviews:622, impressions:2543, clicks:70},
    {week:"07/05", users:163, sessions:219, pageviews:762, impressions:2553, clicks:73},
    {week:"07/12", users:195, sessions:240, pageviews:843, impressions:2002, clicks:54},
    {week:"07/19", users:180, sessions:221, pageviews:857, impressions:2436, clicks:77},
    {week:"07/26", users:181, sessions:222, pageviews:843, impressions:2587, clicks:81}
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
    {month:"05/01", brand_pct:74.1, nonbrand_pct:25.9, brand_imp:4101, brand_clicks:79, nonbrand_imp:1434, nonbrand_clicks:35},
    {month:"06/01", brand_pct:74.3, nonbrand_pct:25.7, brand_imp:4312, brand_clicks:110, nonbrand_imp:1491, nonbrand_clicks:25},
    {month:"07/01", brand_pct:69.2, nonbrand_pct:30.8, brand_imp:2102, brand_clicks:42, nonbrand_imp:936, nonbrand_clicks:16}
  ],
  // Per-keyword table — feeds 'Top 10 brand' and 'Top 10 non-brand' tables.
  // Refreshed 2026-07-27 for 07/18-07/24 period (7 days).
  keyword_rows:[
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

  // ===== Block 4 — 內容效益矩陣 =====
  // Source: all_units_summary (page_view events). Each row = one normalized
  // page by normalized_path. Quadrant boundaries = median across rows with
  // users ≥ 5. Smaller samples kept & flagged as 「樣本不足」.
  // Refreshed 2026-07-27 for 07/18-07/24 period (7 days).
  content_matrix:[
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

  // ===== Block 5 — 流量來源品質 =====
  // 'group' is the prompt-defined grouping. Original source/medium is kept.
  // Quality: avg_eng_sec_per_session = SUM(eng_sec)/sessions.
  // Refreshed 2026-07-27 for 07/18-07/24 period (7 days).
  traffic_quality:[
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

  // ===== Block 6 — AI 搜尋 =====
  // Refreshed 2026-07-27 for 07/18-07/24 (7 days). New finding: 1 session from chatgpt.com
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
    {platform:"ChatGPT",    sessions:1, users:1, landing_page:"/p/404-1022-52388.php?Lang=zh-tw", avg_eng_sec:0, internal_clicks:0, sample_note:"樣本較少"},
    {platform:"Perplexity", sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Gemini",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Copilot",    sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Claude",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"}
  ],
  ai_total_period_sessions:1,

  // ===== Block 7 — 招生意圖與 CTA 行動 =====
  // Refreshed 2026-07-27 for 07/18-07/24 period (7 days).
  cta_funnel:[
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
  cta_links:[
    {category:"LINE",         link_text:"加入 ITM 招生 LINE 群組",      source_page:"首頁",            destination:"https://line.me/R/ti/p/itm-tcu",         clicks:2,  users:2,  valid_rate:1.0},
    {category:"招生簡章",     link_text:"招生入學方式",                  source_page:"入學方式",        destination:"/p/404-1022-36099.php",                clicks:4,  users:4,  valid_rate:1.0},
    {category:"下載文件",     link_text:"招生簡章 PDF",                   source_page:"首頁",            destination:"/var/file/22/1022/img/1870/424380578.pdf", clicks:2, users:2, valid_rate:1.0},
    {category:"入學方式",     link_text:"個人申請",                       source_page:"招生頁",          destination:"/p/404-1022-30026.php?Lang=zh-tw",    clicks:1,  users:1,  valid_rate:1.0}
  ],

  // ===== Block 8 — 國際訪客品質 =====
  // Refreshed 2026-07-27 for 07/18-07/24 period (7 days).
  international:[
    {country:"臺灣",   sessions:129, users:93,  avg_eng_sec:57.0,  top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"中國",   sessions:54,  users:54,  avg_eng_sec:1.9,   top_landing:"/?Lang=zh-tw",                              admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"美國",   sessions:5,   users:4,   avg_eng_sec:35.3,  top_landing:"/p/406-1022-45544,r733.php?Lang=zh-tw",     admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"德國",   sessions:1,   users:1,   avg_eng_sec:2.4,   top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"其他",   sessions:0,   users:0,   avg_eng_sec:0,     top_landing:"-",                                          admission_cta:0, contact_click:0, sample_note:"資料不足"}
  ],

  // ===== Block 9 — 使用者路徑／下一步 =====
  // Refreshed 2026-07-27 for 07/18-07/24 (7 days). Real per-session path reconstruction
  // via ROW_NUMBER() OVER (PARTITION BY session ORDER BY event_timestamp).
  user_paths:[
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
  user_path_transitions:[
    {from:"/",          to:"/p/412-1022-2570.php", sessions:0},
    {from:"/",          to:"/p/404-1022-52388.php", sessions:0},
    {from:"/",          to:"/p/426-1022-2.php",  sessions:0},
    {from:"/",          to:"/p/412-1022-2586.php", sessions:0},
    {from:"/",          to:"/p/404-1022-36099.php", sessions:0}
  ],

  // ===== Block 10 — 資料品質與網站治理 =====
  // Refreshed 2026-07-27 (HTML scan via https://itm.tcu.edu.tw/).
  // 3 empty alt found (down from 16) — slight improvement.
  data_quality_snapshot:[
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
};