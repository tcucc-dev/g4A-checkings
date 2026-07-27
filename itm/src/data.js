// src/data.js — refreshed 2026-07-27 with live BigQuery @ 2026-07-25
// Cutoff: 2026-07-25 (GA4) / 2026-07-24 (GSC) | Periods: 2026-06-02 to 2026-07-26 | Weeks: 8
// New "latest complete week" = 2026-07-20 ~ 2026-07-26 (GA4) / 2026-07-20 ~ 2026-07-24 (GSC)

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
  // New data: 2026-07-27 (today) ; latest complete week = 07/20 ~ 07/26 (GA4) / 07/20 ~ 07/24 (GSC)
  trends:[
    {week:"06/01", users:338, sessions:493, pageviews:1753, impressions:3513, clicks:261},
    {week:"06/08", users:431, sessions:694, pageviews:3491, impressions:4418, clicks:307},
    {week:"06/15", users:70,  sessions:91,  pageviews:502,  impressions:3666, clicks:160},
    {week:"06/22", users:264, sessions:338, pageviews:1330, impressions:3158, clicks:110},
    {week:"06/29", users:171, sessions:218, pageviews:649,  impressions:2535, clicks:69},
    {week:"07/06", users:168, sessions:221, pageviews:743,  impressions:2527, clicks:70},
    {week:"07/13", users:184, sessions:229, pageviews:833,  impressions:1902, clicks:55},
    {week:"07/20", users:166, sessions:204, pageviews:804,  impressions:1604, clicks:64}
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
  // Refreshed 2026-07-27 for 07/20-07/26 period.
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
  // Refreshed 2026-07-27 for 07/20-07/26 period.
  content_matrix:[
    {normalized_path:"/p/426-1022-2.php",                            title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", users:30, sessions:30, pageviews:108, engagement_sec:0.4},
    {normalized_path:"/index.php",                                  title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:28, sessions:45, pageviews:166, engagement_sec:0.7},
    {normalized_path:"/",                                            title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:26, sessions:31, pageviews:103, engagement_sec:0.9},
    {normalized_path:"/p/412-1022-2586.php",                        title:"師資陣容 - 資訊科技與管理學系", users:24, sessions:24, pageviews:70, engagement_sec:0.4},
    {normalized_path:"/p/404-1022-52388.php",                       title:"碩士班專區 - 資訊科技與管理學系", users:10, sessions:12, pageviews:27, engagement_sec:0.3},
    {normalized_path:"/p/403-1022-452-1.php",                       title:"最新消息 - 資訊科技與管理學系", users:8,  sessions:8,  pageviews:20, engagement_sec:2.3},
    {normalized_path:"/p/404-1022-36099.php",                       title:"課程地圖與開課學分時數表 / Curriculum Map", users:8,  sessions:8,  pageviews:50, engagement_sec:0.7},
    {normalized_path:"/p/412-1022-2570.php",                        title:"最新消息 - 資訊科技與管理學系", users:7,  sessions:7,  pageviews:21, engagement_sec:1.2},
    {normalized_path:"/p/404-1022-30026.php",                       title:"系所介紹 - 資訊科技與管理學系", users:7,  sessions:8,  pageviews:16, engagement_sec:0.4},
    {normalized_path:"/p/404-1022-30020.php",                       title:"入學方式 - 資訊科技與管理學系", users:6,  sessions:6,  pageviews:16, engagement_sec:0.3},
    {normalized_path:"/p/404-1022-34441.php",                       title:"課程規劃 - 資訊科技與管理學系", users:6,  sessions:6,  pageviews:16, engagement_sec:0.4},
    {normalized_path:"/p/404-1022-45541.php",                       title:"實務專題 - 資訊科技與管理學系", users:4,  sessions:4,  pageviews:7,  engagement_sec:0.0},
    {normalized_path:"/p/403-1022-703-1.php",                       title:"Photo - 資訊科技與管理學系", users:4,  sessions:4,  pageviews:8,  engagement_sec:0.6},
    {normalized_path:"/p/426-1022-5.php",                           title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", users:4, sessions:4,  pageviews:9,  engagement_sec:0.7},
    {normalized_path:"/p/404-1022-66044.php",                       title:"智慧物聯實驗室 - 資訊科技與管理學系", users:4, sessions:4,  pageviews:6,  engagement_sec:0.1},
    {normalized_path:"/p/412-1022-2590.php",                        title:"業界實習 - 資訊科技與管理學系", users:4,  sessions:4,  pageviews:6,  engagement_sec:2.7},
    {normalized_path:"/p/404-1022-30062.php",                       title:"規章辦法 - 資訊科技與管理學系", users:4,  sessions:4,  pageviews:10, engagement_sec:0.2},
    {normalized_path:"/p/404-1022-60990.php",                       title:"碩士班相關表格 - 資訊科技與管理學系", users:4, sessions:4,  pageviews:14, engagement_sec:0.7},
    {normalized_path:"/p/404-1022-47588.php",                       title:"人工智慧高階電腦教室 - 資訊科技與管理學系", users:3, sessions:3, pageviews:9, engagement_sec:0.3},
    {normalized_path:"/p/17-1022.php",                              title:"網站導覽 - 資訊科技與管理學系", users:3,  sessions:3,  pageviews:4,  engagement_sec:0.1},
    {normalized_path:"/p/403-1022-709-1.php",                       title:"海外實習 - 資訊科技與管理學系", users:3,  sessions:3,  pageviews:6,  engagement_sec:0.5}
  ],

  // ===== Block 5 — 流量來源品質 =====
  // 'group' is the prompt-defined grouping. Original source/medium is kept.
  // Quality: avg_eng_sec_per_session = SUM(eng_sec)/sessions.
  // Refreshed 2026-07-27 for 07/20-07/26 period.
  traffic_quality:[
    {group:"Direct",          source:"(direct)",              medium:"(none)",      sessions:150, users:125, avg_eng_sec_per_session:33.7, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"足夠"},
    {group:"Organic Search",  source:"google",                medium:"organic",      sessions:48,  users:36,  avg_eng_sec_per_session:55.9, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"足夠"},
    {group:"Internal Referral", source:"lle.moe.edu.tw",      medium:"referral",     sessions:2,   users:2,   avg_eng_sec_per_session:78.5, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"External Referral", source:"cse.google.com",      medium:"referral",     sessions:2,   users:1,   avg_eng_sec_per_session:3.1,  internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"Internal Referral", source:"collego.edu.tw",       medium:"referral",     sessions:1,   users:1,   avg_eng_sec_per_session:106.1, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"AI Referral",     source:"chatgpt.com",           medium:"ai-assistant",  sessions:1,   users:1,   avg_eng_sec_per_session:0,    internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"AI Referral",     source:"perplexity.ai",         medium:"referral",     sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {group:"AI Referral",     source:"gemini.google.com",     medium:"referral",     sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {group:"Social",          source:"facebook.com",          medium:"referral",     sessions:0,   users:0,   avg_eng_sec_per_session:0,    internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"}
  ],

  // ===== Block 6 — AI 搜尋 =====
  // Refreshed 2026-07-27 for 07/20-07/26. New finding: 1 session from chatgpt.com
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
  // Refreshed 2026-07-27 for 07/20-07/26 period.
  cta_funnel:[
    {cta_category:"其他連結",            distinct_links:25, sessions:39,  users:30, sample_note:"足夠"},
    {cta_category:"招生簡章",            distinct_links:9,  sessions:19,  users:18, sample_note:"足夠"},
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
  // Refreshed 2026-07-27 for 07/20-07/26 period.
  international:[
    {country:"臺灣",   sessions:136, users:99,  avg_eng_sec:56.6,  top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"中國",   sessions:60,  users:60,  avg_eng_sec:2.0,   top_landing:"/p/16-1022-34006.php?Lang=zh-tw",          admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"美國",   sessions:5,   users:4,   avg_eng_sec:35.3,  top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"加拿大", sessions:1,   users:1,   avg_eng_sec:1.9,   top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"德國",   sessions:1,   users:1,   avg_eng_sec:2.4,   top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"印尼",   sessions:1,   users:1,   avg_eng_sec:2.6,   top_landing:"/",                                          admission_cta:0, contact_click:0, sample_note:"樣本較少"},
    {country:"其他",   sessions:0,   users:0,   avg_eng_sec:0,     top_landing:"-",                                          admission_cta:0, contact_click:0, sample_note:"資料不足"}
  ],

  // ===== Block 9 — 使用者路徑／下一步 =====
  // Refreshed 2026-07-27 for 07/20-07/26. Real per-session path reconstruction
  // via ROW_NUMBER() OVER (PARTITION BY session ORDER BY event_timestamp).
  user_paths:[
    {landing:"/",                                 second_page:"/",                                 exit_action:"瀏覽後離開",  sessions:42, exit_share:0.55},
    {landing:"/p/426-1022-2.php",                  second_page:"/p/426-1022-2.php",                  exit_action:"瀏覽後離開",  sessions:29, exit_share:0.97},
    {landing:"/",                                 second_page:"/",                                 exit_action:"瀏覽後離開",  sessions:25, exit_share:0.33},
    {landing:"/p/412-1022-2586.php",              second_page:"/p/412-1022-2586.php",              exit_action:"瀏覽後離開",  sessions:9,  exit_share:0.38},
    {landing:"/p/403-1022-452-1.php",             second_page:"/p/403-1022-452-1.php",             exit_action:"瀏覽後離開",  sessions:6,  exit_share:0.75},
    {landing:"/p/404-1022-52388.php",             second_page:"/p/404-1022-52388.php",             exit_action:"瀏覽後離開",  sessions:6,  exit_share:0.60},
    {landing:"/p/412-1022-2570.php",              second_page:"/p/412-1022-2570.php",              exit_action:"瀏覽後離開",  sessions:6,  exit_share:0.86},
    {landing:"/p/404-1022-36099.php",             second_page:"/p/404-1022-36099.php",             exit_action:"瀏覽後離開",  sessions:4,  exit_share:0.50},
    {landing:"/p/403-1022-703-1.php",             second_page:"/p/403-1022-703-1.php",             exit_action:"瀏覽後離開",  sessions:4,  exit_share:1.00},
    {landing:"/p/412-1022-2590.php",              second_page:"/p/412-1022-2590.php",              exit_action:"瀏覽後離開",  sessions:4,  exit_share:1.00},
    {landing:"/p/17-1022.php",                    second_page:"/p/17-1022.php",                    exit_action:"瀏覽後離開",  sessions:3,  exit_share:1.00},
    {landing:"/p/404-1022-60990.php",             second_page:"/p/404-1022-60990.php",             exit_action:"瀏覽後離開",  sessions:3,  exit_share:1.00},
    {landing:"/p/403-1022-709-1.php",             second_page:"/p/403-1022-709-1.php",             exit_action:"瀏覽後離開",  sessions:3,  exit_share:1.00}
  ],
  user_path_transitions:[
    {from:"/",          to:"/p/426-1022-2.php",  sessions:8},
    {from:"/",          to:"/p/412-1022-2586.php", sessions:5},
    {from:"/",          to:"/p/404-1022-52388.php", sessions:3},
    {from:"/",          to:"/p/404-1022-36099.php", sessions:2},
    {from:"/",          to:"/p/412-1022-2570.php", sessions:2}
  ],

  // ===== Block 10 — 資料品質與網站治理 =====
  // Refreshed 2026-07-27 (HTML scan via https://itm.tcu.edu.tw/).
  // 3 empty alt found (down from 16) — slight improvement.
  data_quality_snapshot:[
    {issue_type:"missing_jsonld",     affected_count:1,  example:"全站 application/ld+json = 0",                      severity:"高", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex application/ld\\+json"},
    {issue_type:"old_domain",         affected_count:13, example:"itm.tcust.edu.tw 出現於 13 個站內連結",            severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 HTML 內 itm.tcust.edu.tw 字串計數"},
    {issue_type:"missing_canonical",  affected_count:1,  example:"首頁 <link rel=「canonical」> 缺失",                severity:"中", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex <link rel=\"canonical\">"},
    {issue_type:"multiple_h1",        affected_count:2,  example:"首頁偵測到 2 個 H1（重複 H1 違規）",                severity:"中", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 <h1> 標籤計數"},
    {issue_type:"og_image_favicon",   affected_count:1,  example:"og:image 仍指向 /images/favicon.ico（非正式主視覺）", severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"og:image 屬性內容檢查"},
    {issue_type:"iframe_no_title",    affected_count:26, example:"26 個 iframe 全部未設定 title",                     severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 iframe title 屬性檢查"},
    {issue_type:"empty_alt",          affected_count:3,  example:"24 張圖片中 3 張 alt 為空",                          severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 圖片 alt 文字長度 ≤ 2"},
    {issue_type:"unknown_source",     affected_count:0,  example:"本期未發現未分類 source/medium",                    severity:"低", suggested_owner:"—",               status:"正常",  evidence_rule:"all_units_summary source NOT IN known list"}
  ]
}
};