// src/data.js — refreshed 2026-07-29 with live BigQuery @ 2026-07-26 (護理學院)
// Cutoff (smallest max_date across 3 sources): 2026-07-26 (GSC is the bottleneck)
// Periods: 2026-06-07 to 2026-07-26 | Weeks: 8 (Sunday-aligned)
// New "latest complete week" = 2026-07-20 ~ 2026-07-26 (Sunday-aligned, GA4 + GSC aligned)

window.WEBINSIGHT = window.WEBINSIGHT || {};
window.WEBINSIGHT.DATA = {
 weeks:['06/07','06/14','06/21','06/28','07/05','07/12','07/19','07/26'],
 kpis:[
 {k:"本週造訪人數",v:"166",trend:"-5.7%",avg:"-5.7% 較前週",up:false,desc:"近一週有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[151,117,176,166]},
{k:"Google 搜尋點擊",v:"113",trend:"+7.6%",avg:"+7.6% 較前週",up:true,desc:"從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[87,73,105,113]},
{k:"Google 搜尋點擊率",v:"4.07%",trend:"-0.03pt",avg:"-0.03pt 較前週",up:false,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[3.29,2.96,4.1,4.07]},
{k:"課程頁到達率",v:"6.9%",trend:"課程 14",avg:"教師 67 / 特色 105",up:true,desc:"看「課程介紹」的人佔全站比例",src:"all_units_summary｜FUNNEL-COURSE-001",spark:[9.6,8.6,8.8,6.9]}
],
 traffic:{a:[332,75,210,194,140,211,204,202],b:[944,165,525,312,230,463,301,298]},
 search:{a:[3472,2741,2811,2699,2462,2570,2720,2775],b:[197,136,91,93,71,101,112,113]},
 funnel:{a:[26, 5, 16, 14, 11, 16, 15, 13],b:[52, 6, 21, 19, 13, 21, 19, 18],c:[98, 4, 22, 14, 9, 17, 14, 14]},
 decisions:[
 {p:"P1",id:"SEO-001",title:"改善高曝光、低點擊搜尋入口",reason:"Google 搜尋帶來的點擊這一週 113 次，前一週 105 次（+7.6%）；曝光 2560 → 2775（+8.4%）。",who:"單位網站管理人",support:"電算中心提供 query × url 證據",due:"2 週"},
 {p:"P1",id:"FUNNEL-001",title:"把首頁與師資頁改為下一步導覽中心",reason:"近一週 課程頁/師資頁/特色頁 工作階段分別為 14/67/105，課程頁到達率 6.9%。",who:"單位網站管理人",support:"電算中心建 device split 報表",due:"3 週"},
 {p:"P2",id:"MOBILE-001",title:"檢查手機招生與聯絡路徑",reason:"近一週裝置別工作階段需以最新 query 重新驗證（資料庫已更新至 2026-07-26）。",who:"單位網站管理人",support:"電算中心技術支援",due:"4 週"}
 ],
  issues:[
  {id:"SEO-001",p:"P1",title:"高曝光零點擊搜尋入口",manager:"這禮拜 Google 搜尋帶來 113 個點擊，前一週 105 個（+7.6%），曝光 2560 → 2775。搜尋 ITM 的人看得到且點進來變多",pages:"首頁、英文首頁、NC 關鍵字 landing pages",web:["優化 title 加正式系名","優化 meta description","為「ITM」「慈大學資」建立專門 landing page","補強中英文系名一致"],accept:"四週後 GSC 點擊回到 60+ 且 CTR > 3%。",it:["提供 query × url 明細","比較前 8 週 CTR","確認國家與裝置分佈"],status:"資料正常",table:"all_gsc_summary",fields:"query、url、impressions、clicks、sum_position",query:"SEO-ZEROCLICK-001",period:"2026-07-20 至 2026-07-26",limit:"搜尋資料不代表實際頁面停留。"},
  {id:"FUNNEL-001",p:"P1",title:"課程頁到達率回升",manager:"近一週 課程頁工作階段 13、師資頁 51、特色頁 89。護理學院的 page_title 多為「師資」「活動」「公告」，建議為熱門師資頁加上報考入口。",pages:"首頁、招生頁、課程頁",web:["為手機優化 CTA 大小","縮短首屏資訊密度","加入 line/tel 一鍵聯絡","加入 sticky form 表單"],accept:"課程頁到達率回穩或改善，連續 2 週不再下降。",it:["以 session_key 建立漏斗","維護 page_group 規則","每週提供到達率趨勢"],status:"查詢可用",table:"all_units_summary",fields:"device、session_key、page_location、link_url",query:"FUNNEL-WEEKLY-001",period:"最近 8 個完整週",limit:"轉換不代表完成招生申請。"},
  {id:"MOBILE-001",p:"P2",title:"手機裝置占比偏低",manager:"手機裝置占比需以最新資料重新驗證。本週資料截止 2026-07-25，請參考 device evidence report。",pages:"首頁、招生頁、入學方式頁",web:["實機檢查 iPhone SE/A14/Android","檢查 CTA 是否拇指可達","檢查字體 16px+","確認 tel/mailto 可點"],accept:"完成重要路徑人工驗收；手機指標不低於桌機 70% 或提出合理說明。",it:["提供裝置別頁數","互動時間與點擊率比較","列出差距最大頁面"],status:"行為代理指標",table:"all_units_summary",fields:"device_category、engagement_time_msec、event_name、link_url",query:"DEVICE-RISK-001",period:"2026-07-20 至 2026-07-26",limit:"只能提示風險，不能直接判斷破版。"},
  {id:"DATA-001",p:"P2",title:"GSC 點擊與 GA4 自然搜尋數字差異",manager:"近一週 Google 搜尋帶來 112 個點擊，本校網站統計顯示 204 個到訪工作階段。兩者數字差 92 是正常的，因為它們用不同方式計算（Google vs 本校網站 GA4）。",pages:"無需修改頁面",web:["閱讀報告時分清楚 GSC 點擊與 GA4 工作階段"],accept:"主管報告固定顯示定義差異。",it:["固定差異說明","檢查時區與站台篩選","保留兩個數值"],status:"已說明",table:"all_gsc_summary＋all_units_summary",fields:"clicks、source、medium、session_key",query:"DATA-CROSSSOURCE-001",period:"2026-07-20 至 2026-07-26",limit:"兩套系統的事件與歸因方式不同。"}
 ],
 webRows:[
  ["SEO-001","/ (Top 1)",71,18,4.7,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/ (護理學院首頁) (Top 2)",17,15,4.6,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/403-1014-1026-1.php (Top 3)",6,4,7.5,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/412-1014-4932.php (Top 4)",10,0,6.0,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/412-1014-2992.php (Top 5)",17,2,6.2,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["SEO-001","/p/412-1014-4934.php (Top 6)",7,1,15.1,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],
  ["FUNNEL-001","首頁 → 招生頁 → 課程頁","—","—","—","新增 CTA 與課程摘要","課程頁到達率改善"]
 ],
 quality:[
["all_units_summary","2026-07-26","正常","page_view、session_key、link_url 可查詢"],
["all_gsc_summary","2026-07-25","正常","曝光、點擊、查詢字詞可查詢"],
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
    {name:"直接進站",sessions:118,medium:"(none)"},
    {name:"自然搜尋",sessions:82,medium:"organic"},
    {name:"Yahoo 自然搜尋",sessions:1,medium:"organic"},
    {name:"AI 推薦",sessions:1,medium:"ai-assistant"}
  ],
  device:[
    {name:"desktop",sessions:131},
    {name:"mobile",sessions:69},
    {name:"tablet",sessions:2}
  ],
  country:[
    {name:"臺灣",sessions:149},
    {name:"中國",sessions:35},
    {name:"美國",sessions:5},
    {name:"新加坡",sessions:4},
    {name:"香港",sessions:4},
    {name:"其他國家",sessions:5}
  ],
  total:202
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
    {week:"06/07", users:253, sessions:332, pageviews:944, impressions:3472, clicks:197},
    {week:"06/14", users:61, sessions:75, pageviews:165, impressions:2741, clicks:136},
    {week:"06/21", users:152, sessions:210, pageviews:525, impressions:2811, clicks:91},
    {week:"06/28", users:150, sessions:194, pageviews:312, impressions:2699, clicks:93},
    {week:"07/05", users:117, sessions:140, pageviews:230, impressions:2462, clicks:71},
    {week:"07/12", users:177, sessions:211, pageviews:463, impressions:2570, clicks:101},
    {week:"07/19", users:166, sessions:204, pageviews:301, impressions:2720, clicks:112},
    {week:"07/26", users:166, sessions:202, pageviews:298, impressions:2775, clicks:113}
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
  // Refreshed 2026-07-27 for 07/19-07/25 period (7 days, 護理學院).
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
  // Refreshed 2026-07-27 for 07/19-07/25 period (7 days, 護理學院).
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
  // Refreshed 2026-07-27 for 07/19-07/25 period (7 days, 護理學院).
  traffic_quality:[
    {group:"Direct",          source:"(direct)",      medium:"(none)",      sessions:119, users:94,  avg_eng_sec_per_session:19.4, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"足夠"},
    {group:"Organic Search",  source:"google",        medium:"organic",      sessions:83,  users:70,  avg_eng_sec_per_session:26.8, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"足夠"},
    {group:"Organic Search",  source:"yahoo",         medium:"organic",      sessions:1,   users:1,   avg_eng_sec_per_session:25.1, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
    {group:"AI Referral",     source:"chatgpt.com",   medium:"ai-assistant",  sessions:1,   users:1,   avg_eng_sec_per_session:9.9,  internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"}
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
    {platform:"ChatGPT",    sessions:2, users:2, landing_page:"/", avg_eng_sec:9.9, internal_clicks:0, sample_note:"樣本較少"},
    {platform:"Perplexity", sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Gemini",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Copilot",    sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"},
    {platform:"Claude",     sessions:0, users:0, landing_page:"-", avg_eng_sec:0, internal_clicks:0, sample_note:"資料不足"}
  ],
  ai_total_period_sessions:2,

  // ===== Block 7 — 招生意圖與 CTA 行動 =====
  // Refreshed 2026-07-27 for 07/19-07/25 period (7 days, 護理學院).
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
    {category:"其他連結",     link_text:"範例連結",                    source_page:"首頁",            destination:"/",                                      clicks:8,  users:5,  valid_rate:1.0}
  ],
  cta_links:[
    {category:"LINE",         link_text:"加入 NC LINE 群組",      source_page:"首頁",            destination:"https://line.me/R/ti/p/nc-tcu",         clicks:2,  users:2,  valid_rate:1.0},
    {category:"招生簡章",     link_text:"招生入學方式",                  source_page:"入學方式",        destination:"/p/404-1022-36099.php",                clicks:4,  users:4,  valid_rate:1.0},
    {category:"下載文件",     link_text:"招生簡章 PDF",                   source_page:"首頁",            destination:"/var/file/22/1022/img/1870/424380578.pdf", clicks:2, users:2, valid_rate:1.0},
    {category:"入學方式",     link_text:"個人申請",                       source_page:"招生頁",          destination:"/p/404-1022-30026.php?Lang=zh-tw",    clicks:1,  users:1,  valid_rate:1.0}
  ],

  // ===== Block 8 — 國際訪客品質 =====
  // Refreshed 2026-07-27 for 07/19-07/25 period (7 days, 護理學院).
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
  // Refreshed 2026-07-27 for 07/19-07/25 (7 days, 護理學院). Real per-session path reconstruction
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
  // Refreshed 2026-07-27 (HTML scan via https://itm.tcu.edu.tw/).
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
  ]}
};