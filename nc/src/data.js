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
    {name:"直接進站",sessions:130,medium:"(none)"},
    {name:"自然搜尋",sessions:84,medium:"organic"},
    {name:"校內站台",sessions:0,medium:"internal"},
    {name:"其他／站外",sessions:2,medium:"other"}
  ],
  device:[
    {name:"desktop",sessions:154},
    {name:"mobile",sessions:62},
    {name:"tablet",sessions:0}
  ],
  country:[
    {name:"臺灣",sessions:174},
    {name:"中國",sessions:27},
    {name:"泰國",sessions:0},
    {name:"其他國家",sessions:15}
  ],
  total:216
}
,
// Generated chart data block for NC
// Period: 2026-07-13 to 2026-07-19 (this week) + 4 prior weeks for trends

sections:{
  trends:[{week:"05/25", users:200, sessions:236, pageviews:765, impressions:3660, clicks:136}, {week:"06/01", users:205, sessions:268, pageviews:1123, impressions:3039, clicks:151}, {week:"06/08", users:249, sessions:322, pageviews:933, impressions:3531, clicks:202}, {week:"06/15", users:45, sessions:57, pageviews:132, impressions:2552, clicks:127}, {week:"06/22", users:171, sessions:236, pageviews:556, impressions:2908, clicks:93}, {week:"06/29", users:151, sessions:187, pageviews:304, impressions:2644, clicks:87}, {week:"07/06", users:117, sessions:139, pageviews:233, impressions:2466, clicks:73}, {week:"07/13", users:176, sessions:215, pageviews:464, impressions:2560, clicks:105}],
  brand_split:[{month:"05/01", brand_pct:12.8, nonbrand_pct:87.2, brand_imp:1832, brand_clicks:73, nonbrand_imp:12530, nonbrand_clicks:538}, {month:"06/01", brand_pct:10.7, nonbrand_pct:89.3, brand_imp:1386, brand_clicks:57, nonbrand_imp:11575, nonbrand_clicks:553}, {month:"07/01", brand_pct:10.4, nonbrand_pct:89.6, brand_imp:699, brand_clicks:24, nonbrand_imp:6040, nonbrand_clicks:204}],
  brand_top10:[{query:"慈濟大學護理學院", imp:627, clicks:69}, {query:"慈濟大學護理系", imp:771, clicks:20}, {query:"慈濟護理系", imp:230, clicks:10}, {query:"慈濟護理", imp:205, clicks:9}, {query:"慈濟大學護理", imp:193, clicks:9}, {query:"慈濟大學護理學系", imp:255, clicks:8}, {query:"慈濟大學護理科", imp:409, clicks:8}, {query:"慈濟大學 護理系", imp:121, clicks:6}, {query:"慈濟大學科系", imp:40, clicks:2}, {query:"慈大護理系", imp:102, clicks:2}],
  nonbrand_top10:[{query:None, imp:22811, clicks:986}, {query:"羅淑芬", imp:443, clicks:53}, {query:"彭台珠", imp:72, clicks:34}, {query:"黃君后", imp:124, clicks:27}, {query:"宋惠娟", imp:77, clicks:26}, {query:"曹英", imp:259, clicks:23}, {query:"學士後護理", imp:611, clicks:14}, {query:"李崇仁", imp:117, clicks:12}, {query:"章淑娟", imp:85, clicks:12}, {query:"王淑芳", imp:193, clicks:10}],
  content_matrix:[{title:"慈濟大學護理學院 - 慈濟大學護理學院", users:49, eng_sec:54.8}, {title:"系科所組成員 - 慈濟大學護理學院", users:27, eng_sec:16.3}, {title:"護理學院院長 - 慈濟大學護理學院", users:18, eng_sec:6.8}, {title:"章淑娟 CHANG,SHU-CHUAN 副教授 - 慈濟大學", users:14, eng_sec:8.9}, {title:"護理學院沿革 - 慈濟大學護理學院", users:11, eng_sec:9.4}, {title:"成員介紹 - 慈濟大學護理學院", users:7, eng_sec:21.9}, {title:"王淑芳 WANG, SHU-FANG 副院長/副教授 - 慈", users:7, eng_sec:5.3}, {title:"護理學院院歌 - 慈濟大學護理學院", users:5, eng_sec:1.6}, {title:"交流園地 - 慈濟大學護理學院", users:5, eng_sec:102.6}, {title:"泰國那黎宣大學 護理學院Ratanachadawan Yun", users:5, eng_sec:3.8}, {title:"組織架構 - 慈濟大學護理學院", users:5, eng_sec:6.2}, {title:"張紀萍 CHANG,CHI-PING 副院長/副教授 - 慈", users:4, eng_sec:21.4}, {title:"曹英 TSAO,YING 教授 - 慈濟大學護理學院", users:4, eng_sec:17.4}, {title:"宋惠娟 SUNG,HUEI-CHUAN 所長 - 慈濟大學護", users:4, eng_sec:25.7}, {title:"黃君后 HUANG,CHUN-HOU 副教授 - 慈濟大學護", users:4, eng_sec:13.8}, {title:"教育部USR計畫 - 慈濟大學護理學院", users:4, eng_sec:1.5}, {title:"Smart Nursing: Integrating AI ", users:4, eng_sec:34.1}, {title:"護理學系 - 慈濟大學護理學院", users:4, eng_sec:7.7}, {title:"臨床護理專家：醫療現場的無聲推手，照護品質革新的催化劑 - ", users:3, eng_sec:6.5}, {title:"周桂如特聘教授蒞慈大分享：厚植護理國際化基石 擘劃專業全球影", users:3, eng_sec:59.5}, {title:"慈濟大學護理學院 - 慈濟大學護理學院", users:3, eng_sec:9.4}, {title:"規章辦法 - 慈濟大學護理學院", users:3, eng_sec:3.2}, {title:"長期照護及科技運用: 日本大阪大學教授講座 - 慈濟大學護理", users:3, eng_sec:84.9}, {title:"日本大手前大學教授專題演講 - 慈濟大學護理學院", users:3, eng_sec:23.9}, {title:"教育理念 - 慈濟大學護理學院", users:3, eng_sec:1.7}, {title:"張綠怡 CHANG,LU-I 助理教授 - 慈濟大學護理學院", users:3, eng_sec:11.0}, {title:"2026慈濟醫學年會_護理學院 - 慈濟大學護理學院", users:3, eng_sec:14.7}, {title:"最新公告 - 慈濟大學護理學院", users:3, eng_sec:15.3}, {title:"泰國瑪希隆大學( Mahidol University) 護", users:2, eng_sec:9.4}, {title:"長期照護研究所 - 慈濟大學護理學院", users:2, eng_sec:9.8}, {title:"慈濟大學護理學院｜College of Nursing, T", users:2, eng_sec:5.9}, {title:"羅淑芬 LO,SHU-FEN 副教授 - 慈濟大學護理學院", users:2, eng_sec:12.3}, {title:"泰國那黎宣大學（Naresuan University）至慈", users:2, eng_sec:6.9}, {title:"【護理學院演講】115.5.20(三) 9:10-11:00", users:2, eng_sec:37.1}, {title:"郭育倫 KUO,YU-LUN 主任 - 慈濟大學護理學院", users:2, eng_sec:21.3}, {title:"泰國瑪希隆大學( Mahidol University) 護", users:2, eng_sec:0.0}, {title:"慈濟大學護理學院 - 慈濟大學護理學院", users:2, eng_sec:32.1}, {title:"江錦玲 JIANG,JIIN-LING 助理教授 - 慈濟大", users:2, eng_sec:10.9}, {title:"吳宏蘭 WU,HUNG-LAN 副教授 - 慈濟大學護理學院", users:2, eng_sec:17.3}, {title:"走進泥濘看見光 - 慈濟大學護理學院", users:2, eng_sec:0.1}, {title:"慈濟大學護理學院攜手北慈-深化護理資訊化與智慧照護交流 - ", users:2, eng_sec:39.7}, {title:"泰國詩納卡寧威洛大學 護理學院Jirawan Inkoom教", users:2, eng_sec:3.9}, {title:"陸秀芳 LU,SHIOU-FANG 助理教授 - 慈濟大學護", users:2, eng_sec:28.8}, {title:"恭賀🎉🎉🎉本院護理科蔡欣晏老師帶領兩組學生榮獲「2026全國", users:2, eng_sec:6.2}, {title:"林玉娟助理教授 - 慈濟大學護理學院", users:2, eng_sec:4.9}, {title:"國際交流計畫學生面試 暑期海外服務學習交流甄選,日本及泰國交", users:2, eng_sec:0.0}, {title:"影音專區 - 慈濟大學護理學院", users:2, eng_sec:16.6}, {title:"線上網路研討會——在台灣慈濟大學學習護理的理由 與印尼合作機", users:1, eng_sec:6.4}, {title:"關於學院 - 慈濟大學護理學院", users:1, eng_sec:2.5}, {title:"慈濟大學護理學院｜College of Nursing, T", users:1, eng_sec:16.5}],
  traffic_quality:[{source:"直接進站", sessions:130, users:101, avg_eng_sec:45.2, interaction_rate:0.63}, {source:"自然搜尋", sessions:74, users:67, avg_eng_sec:19.4, interaction_rate:0.34}, {source:"其他搜尋", sessions:10, users:8, avg_eng_sec:42.5, interaction_rate:0.2}, {source:"AI 搜尋", sessions:2, users:1, avg_eng_sec:31.4, interaction_rate:0.0}],
  ai_timeseries:[{date:"2026-06-11", sessions:2, users:2}, {date:"2026-06-24", sessions:1, users:1}, {date:"2026-06-25", sessions:3, users:2}, {date:"2026-07-13", sessions:2, users:1}],
  ai_platforms:[{platform:"ChatGPT", sessions:4, users:2, avg_eng_sec:15.7}, {platform:"Other AI", sessions:2, users:2, avg_eng_sec:53.2}, {platform:"Perplexity", sessions:1, users:1, avg_eng_sec:11.0}, {platform:"Gemini", sessions:1, users:1, avg_eng_sec:0.0}],
  cta_funnel:[{cta_type:"其他連結", distinct_links:109, sessions:278, users:275}, {cta_type:"招生簡章", distinct_links:10, sessions:19, users:19}, {cta_type:"下載文件 (PDF/DOC/XLSX)", distinct_links:3, sessions:6, users:6}],
  international:[{country:"Taiwan", sessions:173, users:134, avg_eng_sec:45.9}, {country:"China", sessions:27, users:27, avg_eng_sec:0.2}, {country:"Singapore", sessions:8, users:8, avg_eng_sec:0.0}, {country:"United States", sessions:3, users:3, avg_eng_sec:1.8}, {country:"Germany", sessions:1, users:1, avg_eng_sec:0.0}, {country:"Australia", sessions:1, users:1, avg_eng_sec:12.9}, {country:"Unknown", sessions:1, users:1, avg_eng_sec:13.7}, {country:"United Kingdom", sessions:1, users:1, avg_eng_sec:38.0}],
  user_paths:[{stage1:"慈濟大學護理學院 - 慈濟大學護理學院", stage2:"慈濟大學護理學院 - 慈濟大學護理學院", stage3:"慈濟大學護理學院 - 慈濟大學護理學院", sessions:65}, {stage1:"章淑娟 CHANG,SHU-CHUAN 副教授 - 慈濟大學護理學院", stage2:"章淑娟 CHANG,SHU-CHUAN 副教授 - 慈濟大學護理學院", stage3:"章淑娟 CHANG,SHU-CHUAN 副教授 - 慈濟大學護理學院", sessions:15}, {stage1:"護理學院院長 - 慈濟大學護理學院", stage2:"護理學院院長 - 慈濟大學護理學院", stage3:"護理學院院長 - 慈濟大學護理學院", sessions:8}, {stage1:"王淑芳 WANG, SHU-FANG 副院長/副教授 - 慈濟大學護理學院", stage2:"王淑芳 WANG, SHU-FANG 副院長/副教授 - 慈濟大學護理學院", stage3:"王淑芳 WANG, SHU-FANG 副院長/副教授 - 慈濟大學護理學院", sessions:7}, {stage1:"護理學院院歌 - 慈濟大學護理學院", stage2:"護理學院院歌 - 慈濟大學護理學院", stage3:"護理學院院歌 - 慈濟大學護理學院", sessions:5}, {stage1:"泰國那黎宣大學 護理學院Ratanachadawan Yunak教授線上演講 - 慈濟大學護理學院", stage2:"泰國那黎宣大學 護理學院Ratanachadawan Yunak教授線上演講 - 慈濟大學護理學院", stage3:"泰國那黎宣大學 護理學院Ratanachadawan Yunak教授線上演講 - 慈濟大學護理學院", sessions:5}, {stage1:"張綠怡 CHANG,LU-I 助理教授 - 慈濟大學護理學院", stage2:"張綠怡 CHANG,LU-I 助理教授 - 慈濟大學護理學院", stage3:"張綠怡 CHANG,LU-I 助理教授 - 慈濟大學護理學院", sessions:5}, {stage1:"宋惠娟 SUNG,HUEI-CHUAN 所長 - 慈濟大學護理學院", stage2:"宋惠娟 SUNG,HUEI-CHUAN 所長 - 慈濟大學護理學院", stage3:"宋惠娟 SUNG,HUEI-CHUAN 所長 - 慈濟大學護理學院", sessions:4}, {stage1:"張紀萍 CHANG,CHI-PING 副院長/副教授 - 慈濟大學護理學院", stage2:"張紀萍 CHANG,CHI-PING 副院長/副教授 - 慈濟大學護理學院", stage3:"張紀萍 CHANG,CHI-PING 副院長/副教授 - 慈濟大學護理學院", sessions:4}, {stage1:"護理學院沿革 - 慈濟大學護理學院", stage2:"護理學院沿革 - 慈濟大學護理學院", stage3:"護理學院沿革 - 慈濟大學護理學院", sessions:4}, {stage1:"曹英 TSAO,YING 教授 - 慈濟大學護理學院", stage2:"曹英 TSAO,YING 教授 - 慈濟大學護理學院", stage3:"曹英 TSAO,YING 教授 - 慈濟大學護理學院", sessions:4}, {stage1:"教育部USR計畫 - 慈濟大學護理學院", stage2:"教育部USR計畫 - 慈濟大學護理學院", stage3:"教育部USR計畫 - 慈濟大學護理學院", sessions:3}, {stage1:"周桂如特聘教授蒞慈大分享：厚植護理國際化基石 擘劃專業全球影響力 - 慈濟大學護理學院", stage2:"周桂如特聘教授蒞慈大分享：厚植護理國際化基石 擘劃專業全球影響力 - 慈濟大學護理學院", stage3:"周桂如特聘教授蒞慈大分享：厚植護理國際化基石 擘劃專業全球影響力 - 慈濟大學護理學院", sessions:3}, {stage1:"泰國瑪希隆大學( Mahidol University) 護理學院 Supapak Phetrasuwan 教授線上演講 - 慈濟大學護理學院", stage2:"泰國瑪希隆大學( Mahidol University) 護理學院 Supapak Phetrasuwan 教授線上演講 - 慈濟大學護理學院", stage3:"泰國瑪希隆大學( Mahidol University) 護理學院 Supapak Phetrasuwan 教授線上演講 - 慈濟大學護理學院", sessions:3}, {stage1:"黃君后 HUANG,CHUN-HOU 副教授 - 慈濟大學護理學院", stage2:"黃君后 HUANG,CHUN-HOU 副教授 - 慈濟大學護理學院", stage3:"黃君后 HUANG,CHUN-HOU 副教授 - 慈濟大學護理學院", sessions:3}],
  data_quality:{weeks:['05/25', '06/01', '06/08', '06/15', '06/22', '06/29', '07/06', '07/13'], categories:{'dup_url': [0, 0, 0, 0, 0, 0, 0, 0], 'empty_title': [0, 0, 0, 0, 0, 0, 0, 0], 'old_domain': [0, 0, 0, 0, 0, 0, 0, 0], 'no_session': [0, 0, 0, 0, 0, 0, 0, 0], 'unknown_source': [0, 0, 0, 0, 0, 0, 0, 0]}}
}
};