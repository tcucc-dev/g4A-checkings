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
// Period: 2026-07-13 to 2026-07-19 (this week) + 4 prior weeks for trends

sections:{
  trends:[{week:"05/25", users:398, sessions:562, pageviews:2005, impressions:3621, clicks:218}, {week:"06/01", users:338, sessions:493, pageviews:1753, impressions:4265, clicks:302}, {week:"06/08", users:431, sessions:694, pageviews:3491, impressions:4418, clicks:307}, {week:"06/15", users:70, sessions:91, pageviews:502, impressions:3666, clicks:160}, {week:"06/22", users:264, sessions:338, pageviews:1330, impressions:3158, clicks:110}, {week:"06/29", users:171, sessions:218, pageviews:649, impressions:2535, clicks:69}, {week:"07/06", users:168, sessions:221, pageviews:743, impressions:2527, clicks:70}, {week:"07/13", users:184, sessions:229, pageviews:833, impressions:1902, clicks:55}],
  brand_split:[{month:"05/01", brand_pct:15.7, nonbrand_pct:84.3, brand_imp:2497, brand_clicks:77, nonbrand_imp:13442, nonbrand_clicks:740}, {month:"06/01", brand_pct:19.3, nonbrand_pct:80.7, brand_imp:3152, brand_clicks:106, nonbrand_imp:13151, nonbrand_clicks:795}, {month:"07/01", brand_pct:16.9, nonbrand_pct:83.1, brand_imp:1044, brand_clicks:29, nonbrand_imp:5124, nonbrand_clicks:143}],
  brand_top10:[{query:"慈大資管", imp:609, clicks:74}, {query:"慈濟大學資管系", imp:426, clicks:46}, {query:"tcu itm", imp:276, clicks:38}, {query:"慈濟大學資訊科技與管理學系", imp:255, clicks:29}, {query:"慈濟大學 資管系", imp:68, clicks:9}, {query:"慈濟大學 資訊科技與管理學系", imp:58, clicks:8}, {query:"慈濟大學", imp:216, clicks:3}, {query:"資訊科技與管理學系", imp:87, clicks:2}, {query:"慈大學資", imp:3704, clicks:1}, {query:"慈濟大學資訊工程學系", imp:80, clicks:1}],
  nonbrand_top10:[{query:None, imp:24650, clicks:1597}, {query:"簡子超", imp:165, clicks:28}, {query:"蔡宗宏", imp:186, clicks:21}, {query:"蕭志清", imp:73, clicks:5}, {query:"tcust", imp:662, clicks:4}, {query:"慈濟資工", imp:48, clicks:2}, {query:"王銓彰", imp:60, clicks:2}, {query:"大學專題競賽2026", imp:84, clicks:2}, {query:"張詠欣", imp:101, clicks:1}, {query:"謝金峰", imp:137, clicks:1}],
  content_matrix:[{title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", users:32, eng_sec:113.4}, {title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:30, eng_sec:28.0}, {title:"師資陣容 - 資訊科技與管理學系", users:27, eng_sec:65.3}, {title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:16, eng_sec:24.9}, {title:"碩士班專區 - 資訊科技與管理學系", users:10, eng_sec:8.4}, {title:"實務專題 - 資訊科技與管理學系", users:10, eng_sec:1.5}, {title:"最新消息 - 資訊科技與管理學系", users:7, eng_sec:4.3}, {title:"最新消息 - 資訊科技與管理學系", users:7, eng_sec:9.1}, {title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", users:7, eng_sec:78.9}, {title:"規章辦法 - 資訊科技與管理學系", users:6, eng_sec:19.7}, {title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:6, eng_sec:15.5}, {title:"課程規劃 - 資訊科技與管理學系", users:6, eng_sec:31.8}, {title:"Photo - 資訊科技與管理學系", users:6, eng_sec:2.0}, {title:"網站導覽 - 資訊科技與管理學系", users:5, eng_sec:0.7}, {title:"入學方式 - 資訊科技與管理學系", users:5, eng_sec:52.1}, {title:"海外實習 - 資訊科技與管理學系", users:5, eng_sec:2.6}, {title:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管", users:5, eng_sec:10.0}, {title:"課程地圖與開課學分時數表 / Curriculum Map ", users:4, eng_sec:14.6}, {title:"系所介紹 - 資訊科技與管理學系", users:4, eng_sec:5.4}, {title:"友善列印 - [舊]兼任師資之學歷、專長一覽表與授課內容一覽", users:3, eng_sec:28.7}, {title:"他系支援及通識師資之學歷、專長一覽表 - 資訊科技與管理學系", users:3, eng_sec:25.4}, {title:"【工讀資訊】慈濟基金會資訊處工讀生申請公告 - 資訊科技與管", users:3, eng_sec:1.2}, {title:"業界實習 - 資訊科技與管理學系", users:3, eng_sec:1.5}, {title:"專業實驗室 - 資訊科技與管理學系", users:3, eng_sec:1.6}, {title:"友善列印 - 【得獎名單公告】慈濟科技大學 2022全國經營", users:2, eng_sec:0.0}, {title:"[舊]兼任師資之學歷、專長一覽表與授課內容一覽表 - 資訊科", users:2, eng_sec:106.5}, {title:"【活動公告】2020『第一次當Youtuber就上手』高中職", users:2, eng_sec:0.0}, {title:"【證照輔導】申請證照獎勵，歡迎各位同學踴躍申請!!! - 資", users:2, eng_sec:2.8}, {title:"【工讀機會】慈濟基金會資訊處工讀生錄取名單 - 資訊科技與管", users:2, eng_sec:1.7}, {title:"友善列印 - IC3計算機綜合能力全球國際認證輔導及考試 -", users:2, eng_sec:81.8}, {title:"碩士班相關表格 - 資訊科技與管理學系", users:2, eng_sec:31.4}, {title:"【 競賽資訊 】[ 獲獎名單公告] 慈濟大學 2025 全國", users:2, eng_sec:4.2}, {title:"114-2 PHP網頁程式設計研習營 - 資訊科技與管理學系", users:2, eng_sec:31.5}, {title:"友善列印 - [舊]兼任師資之學歷、專長一覽表與授課內容一覽", users:2, eng_sec:1.2}, {title:"友善列印 - 入學方式 - 資訊科技與管理學系", users:2, eng_sec:0.0}, {title:"資訊科技與管理系106學年度暑假學生國內實習機構推薦名單公告", users:2, eng_sec:5.0}, {title:"業界實習 - 資訊科技與管理學系", users:2, eng_sec:0.7}, {title:"2026全國商管暨跨域創新實務專題競賽 資管學系榮獲佳作 -", users:2, eng_sec:24.3}, {title:"20190721 科管系-ASUS X TCUST DSIV", users:2, eng_sec:4.5}, {title:"本系特色 - 資訊科技與管理學系", users:2, eng_sec:11.2}, {title:"2026全國經營管理專題競賽本校師生展現創新實務成果奪得11", users:2, eng_sec:96.0}, {title:"【證照輔導】申請證照獎勵，歡迎各位同學踴躍申請!! - 資訊", users:1, eng_sec:7.5}, {title:"友善列印 - 數位媒體實驗室(包容樓C107) - 資訊科技", users:1, eng_sec:0.0}, {title:"資訊科技與管理系碩士班李青海同學，學位論文考試公告。 - 資", users:1, eng_sec:4.0}, {title:"課程規劃 - 資訊科技與管理學系", users:1, eng_sec:1.4}, {title:"友善列印 - 【徵才公告】慈濟傳播人文志業 資訊部 徵人 （", users:1, eng_sec:2.0}, {title:"【得獎名單公告】慈濟科技大學 2022全國經營管理專題競賽 ", users:1, eng_sec:1.6}, {title:"AI大數據實驗室 - 資訊科技與管理學系", users:1, eng_sec:22.7}, {title:"畢業生就業 - 資訊科技與管理學系", users:1, eng_sec:2.0}, {title:"智慧物聯實驗室 - 資訊科技與管理學系", users:1, eng_sec:27.3}],
  traffic_quality:[{source:"直接進站", sessions:181, users:143, avg_eng_sec:53.0, interaction_rate:0.21}, {source:"自然搜尋", sessions:44, users:37, avg_eng_sec:54.1, interaction_rate:0.91}, {source:"校內", sessions:2, users:2, avg_eng_sec:61.8, interaction_rate:0.0}, {source:"其他搜尋", sessions:2, users:2, avg_eng_sec:22.5, interaction_rate:2.0}],
  ai_timeseries:[{date:"2026-05-27", sessions:1, users:1}, {date:"2026-06-08", sessions:1, users:1}, {date:"2026-06-23", sessions:1, users:1}, {date:"2026-07-07", sessions:1, users:1}],
  ai_platforms:[{platform:"ChatGPT", sessions:3, users:3, avg_eng_sec:15.1}, {platform:"Other AI", sessions:1, users:1, avg_eng_sec:0.5}],
  cta_funnel:[{cta_type:"其他連結", distinct_links:70, sessions:140, users:120}, {cta_type:"下載文件 (PDF/DOC/XLSX)", distinct_links:13, sessions:24, users:20}, {cta_type:"招生簡章", distinct_links:9, sessions:20, users:19}],
  international:[{country:"Taiwan", sessions:145, users:101, avg_eng_sec:89.2}, {country:"China", sessions:81, users:81, avg_eng_sec:1.8}, {country:"Thailand", sessions:2, users:1, avg_eng_sec:501.7}, {country:"United States", sessions:1, users:1, avg_eng_sec:90.8}],
  user_paths:[{stage1:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", stage2:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", stage3:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", sessions:58}, {stage1:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", stage2:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", stage3:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", sessions:36}, {stage1:"師資陣容 - 資訊科技與管理學系", stage2:"師資陣容 - 資訊科技與管理學系", stage3:"師資陣容 - 資訊科技與管理學系", sessions:13}, {stage1:"最新消息 - 資訊科技與管理學系", stage2:"最新消息 - 資訊科技與管理學系", stage3:"最新消息 - 資訊科技與管理學系", sessions:10}, {stage1:"實務專題 - 資訊科技與管理學系", stage2:"實務專題 - 資訊科技與管理學系", stage3:"實務專題 - 資訊科技與管理學系", sessions:8}, {stage1:"Photo - 資訊科技與管理學系", stage2:"Photo - 資訊科技與管理學系", stage3:"Photo - 資訊科技與管理學系", sessions:5}, {stage1:"本系特色 - 資訊科技與管理學系", stage2:"本系特色 - 資訊科技與管理學系", stage3:"本系特色 - 資訊科技與管理學系", sessions:5}, {stage1:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系", stage2:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系", stage3:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系", sessions:5}, {stage1:"網站導覽 - 資訊科技與管理學系", stage2:"網站導覽 - 資訊科技與管理學系", stage3:"網站導覽 - 資訊科技與管理學系", sessions:5}, {stage1:"師資陣容 - 資訊科技與管理學系", stage2:"師資陣容 - 資訊科技與管理學系", stage3:None, sessions:5}, {stage1:"業界實習 - 資訊科技與管理學系", stage2:"業界實習 - 資訊科技與管理學系", stage3:"業界實習 - 資訊科技與管理學系", sessions:5}, {stage1:"海外實習 - 資訊科技與管理學系", stage2:"海外實習 - 資訊科技與管理學系", stage3:"海外實習 - 資訊科技與管理學系", sessions:4}, {stage1:"碩士班專區 - 資訊科技與管理學系", stage2:"碩士班專區 - 資訊科技與管理學系", stage3:"碩士班專區 - 資訊科技與管理學系", sessions:4}, {stage1:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", stage2:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", stage3:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", sessions:3}, {stage1:"專業實驗室 - 資訊科技與管理學系", stage2:"專業實驗室 - 資訊科技與管理學系", stage3:"專業實驗室 - 資訊科技與管理學系", sessions:3}],
  data_quality:{weeks:['05/25', '06/01', '06/08', '06/15', '06/22', '06/29', '07/06', '07/13'], categories:{'dup_url': [0, 0, 0, 0, 0, 0, 0, 0], 'empty_title': [0, 0, 0, 0, 0, 0, 0, 0], 'old_domain': [0, 0, 0, 0, 0, 0, 0, 0], 'no_session': [0, 0, 0, 0, 0, 0, 0, 0], 'unknown_source': [0, 0, 0, 0, 0, 0, 0, 0]}}
}
};