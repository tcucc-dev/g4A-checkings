(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();window.WEBINSIGHT=window.WEBINSIGHT||{};window.WEBINSIGHT.DATA={weeks:["05/31","06/07","06/14","06/21","06/28","07/05","07/12","07/19"],kpis:[{k:"本週造訪人數",v:"229",trend:"+3.6%",avg:"-35.7%",up:!0,desc:"近一週有幾個人實際造訪了網站",src:"all_units_summary｜GA4-SESSION-001",spark:[562,493,693,91,338,218,221,229]},{k:"Google 搜尋點擊",v:"55",trend:"-21.4%",avg:"-65.8%",up:!1,desc:"從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[218,302,307,160,110,69,70,55]},{k:"Google 搜尋點擊率",v:"2.89%",trend:"+0.12pt",avg:"-2.06pt",up:!0,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[6.02,7.08,6.95,4.36,3.48,2.72,2.77,2.89]},{k:"課程頁到達率",v:"32.8%",trend:"-5.7pt",avg:"8 週平均 33.8%",up:!1,desc:"看「課程介紹」的人佔全站比例",src:"all_units_summary｜FUNNEL-COURSE-001",spark:[30.8,26.2,33.6,22,49.4,37.2,38.5,32.8]}],traffic:{a:[562,493,693,91,338,218,221,229],b:[2005,1753,3491,502,1330,649,743,833]},search:{a:[3621,4265,4418,3666,3158,2535,2527,1902],b:[218,302,307,160,110,69,70,55]},funnel:{a:[173,129,233,20,167,81,85,75],b:[180,146,170,10,180,63,62,95],c:[689,613,942,157,165,82,100,84]},decisions:[{p:"P1",id:"SEO-001",title:"改善高曝光、低點擊搜尋入口",reason:"Google 搜尋帶來的點擊這一週 55 次，前一週 70 次（-21.4%）；曝光 2,527 → 1,902。搜尋 ITM 的人還看得到，但點進來的更少。",who:"單位網站管理人",support:"電算中心提供 query × url 證據",due:"2 週"},{p:"P1",id:"FUNNEL-001",title:"把首頁與招生頁改為下一步導覽中心",reason:"近一週 課程頁/師資頁/特色頁 瀏覽分別為 75/95/84，課程頁到達率 32.8% (前一週 38.5%)。需要把「看課程」的入口放在首屏。",who:"單位網站管理人",support:"電算中心建 device split 報表",due:"3 週"},{p:"P2",id:"MOBILE-001",title:"檢查手機招生與聯絡路徑",reason:"近一週裝置別工作階段需以最新 query 重新驗證（資料庫已更新至 07/19）。",who:"單位網站管理人",support:"電算中心技術支援",due:"4 週"}],issues:[{id:"SEO-001",p:"P1",title:"高曝光零點擊搜尋入口",manager:"這禮拜 Google 搜尋帶來 55 個點擊，前一週 70 個，曝光也從 2,527 降到 1,902。簡單說：搜尋 ITM 的人變少，看到的也更少點進來。",pages:"首頁、英文首頁、ITM 關鍵字 landing pages",web:["優化 title 加正式系名","優化 meta description","為「ITM」「慈大學資」建立專門 landing page","補強中英文系名一致"],accept:"四週後 GSC 點擊回到 60+ 且 CTR > 3%。",it:["提供 query × url 明細","比較前 8 週 CTR","確認國家與裝置分佈"],status:"資料正常",table:"all_gsc_summary",fields:"query、url、impressions、clicks、sum_position",query:"SEO-ZEROCLICK-001",period:"2026-07-13 至 2026-07-19",limit:"搜尋資料不代表實際頁面停留。"},{id:"FUNNEL-001",p:"P1",title:"課程頁到達率下滑",manager:"近一週 課程頁瀏覽 75、師資頁 95、特色頁 84，課程頁到達率 32.8% (前一週 38.5%)。需要把「看課程」的入口放在首屏，並強化招生頁的引導。",pages:"首頁、招生頁、課程頁",web:["為手機優化 CTA 大小","縮短首屏資訊密度","加入 line/tel 一鍵聯絡","加入 sticky form 表單"],accept:"課程頁到達率回穩或改善，連續 2 週不再下降。",it:["以 session_key 建立漏斗","維護 page_group 規則","每週提供到達率趨勢"],status:"查詢可用",table:"all_units_summary",fields:"device、session_key、page_location、link_url",query:"FUNNEL-WEEKLY-001",period:"最近 8 個完整週",limit:"轉換不代表完成招生申請。"},{id:"MOBILE-001",p:"P2",title:"手機裝置占比偏低",manager:"手機裝置占比需以最新資料重新驗證。本週資料截止 2026-07-19，請參考 device evidence report。",pages:"首頁、招生頁、入學方式頁",web:["實機檢查 iPhone SE/A14/Android","檢查 CTA 是否拇指可達","檢查字體 16px+","確認 tel/mailto 可點"],accept:"完成重要路徑人工驗收；手機指標不低於桌機 70% 或提出合理說明。",it:["提供裝置別頁數","互動時間與點擊率比較","列出差距最大頁面"],status:"行為代理指標",table:"all_units_summary",fields:"device_category、engagement_time_msec、event_name、link_url",query:"DEVICE-RISK-001",period:"2026-07-13 至 2026-07-19",limit:"只能提示風險，不能直接判斷破版。"},{id:"DATA-001",p:"P2",title:"GSC 點擊與 GA4 自然搜尋數字差異",manager:"近一週 Google 搜尋帶來 55 個點擊，本校網站統計顯示 229 個到訪工作階段。兩者數字差 174 是正常的，因為它們用不同方式計算（Google vs 本校網站 GA4）。",pages:"無需修改頁面",web:["閱讀報告時分清楚 GSC 點擊與 GA4 工作階段"],accept:"主管報告固定顯示定義差異。",it:["固定差異說明","檢查時區與站台篩選","保留兩個數值"],status:"已說明",table:"all_gsc_summary＋all_units_summary",fields:"clicks、source、medium、session_key",query:"DATA-CROSSSOURCE-001",period:"2026-07-13 至 2026-07-19",limit:"兩套系統的事件與歸因方式不同。"}],webRows:[["SEO-001","/ (Top 1)",580,18,4.7,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/412-1022-2586.php (Top 2)",180,15,4.6,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/406-1022-65878,r452.php?Lang=zh-tw (Top 3)",112,4,7.5,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/404-1022-36099.php (Top 4)",76,0,6,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/404-1022-52388.php?Lang=zh-tw (Top 5)",62,2,6.2,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/16-1022-45542.php?Lang=zh-tw (Top 6)",52,1,15.1,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["FUNNEL-001","首頁 → 招生頁 → 課程頁","—","—","—","新增 CTA 與課程摘要","課程頁到達率改善"]],quality:[["all_units_summary","2026-07-19","正常","page_view、session_key、link_url 可查詢"],["all_gsc_summary","2026-07-19","正常","曝光、點擊、查詢字詞可查詢"],["search_behavior_summary","2026-07-19","注意","不得跨 query 直接加總 active_users"]],queries:[["GA4-WEEKLY-TREND-001","all_units_summary","八週工作階段與瀏覽量","date、event_name、user_pseudo_id、ga_session_id","正常","每週自動更新"],["GSC-WEEKLY-TREND-001","all_gsc_summary","八週曝光與點擊","data_date、impressions、clicks","正常","固定完整週"],["FUNNEL-WEEKLY-001","all_units_summary","招生後續到達率","event_timestamp、page_location、page_title、user_pseudo_id、ga_session_id","正常","維護 page_group 規則"],["SEO-ZEROCLICK-001","all_gsc_summary","高曝光零點擊","query、url、impressions、clicks、sum_position","正常","提供網站管理人"],["DEVICE-RISK-001","all_units_summary","手機行為風險","device_category、engagement_time_msec、link_url","代理指標","只提示風險"],["DATA-CROSSSOURCE-001","兩表交叉","GA4／GSC 差異說明","clicks、source、medium、session_key","已說明","保留兩套數值"]],audience:{source:[{name:"直接進站",sessions:181,medium:"(none)"},{name:"自然搜尋",sessions:46,medium:"organic"},{name:"校內站台",sessions:2,medium:"internal"},{name:"其他／站外",sessions:0,medium:"other"}],device:[{name:"desktop",sessions:177},{name:"mobile",sessions:46},{name:"tablet",sessions:6}],country:[{name:"臺灣",sessions:145},{name:"中國",sessions:81},{name:"泰國",sessions:2},{name:"其他國家",sessions:1}],total:229},sections:{trends:[{week:"05/25",users:398,sessions:562,pageviews:2005,impressions:3621,clicks:218},{week:"06/01",users:338,sessions:493,pageviews:1753,impressions:4265,clicks:302},{week:"06/08",users:431,sessions:694,pageviews:3491,impressions:4418,clicks:307},{week:"06/15",users:70,sessions:91,pageviews:502,impressions:3666,clicks:160},{week:"06/22",users:264,sessions:338,pageviews:1330,impressions:3158,clicks:110},{week:"06/29",users:171,sessions:218,pageviews:649,impressions:2535,clicks:69},{week:"07/06",users:168,sessions:221,pageviews:743,impressions:2527,clicks:70},{week:"07/13",users:184,sessions:229,pageviews:833,impressions:1902,clicks:55}],brand_split:[{month:"05/01",brand_pct:15.7,nonbrand_pct:84.3,brand_imp:2497,brand_clicks:77,nonbrand_imp:13442,nonbrand_clicks:740},{month:"06/01",brand_pct:19.3,nonbrand_pct:80.7,brand_imp:3152,brand_clicks:106,nonbrand_imp:13151,nonbrand_clicks:795},{month:"07/01",brand_pct:16.9,nonbrand_pct:83.1,brand_imp:1044,brand_clicks:29,nonbrand_imp:5124,nonbrand_clicks:143}],brand_top10:[{query:"慈大資管",imp:609,clicks:74},{query:"慈濟大學資管系",imp:426,clicks:46},{query:"tcu itm",imp:276,clicks:38},{query:"慈濟大學資訊科技與管理學系",imp:255,clicks:29},{query:"慈濟大學 資管系",imp:68,clicks:9},{query:"慈濟大學 資訊科技與管理學系",imp:58,clicks:8},{query:"慈濟大學",imp:216,clicks:3},{query:"資訊科技與管理學系",imp:87,clicks:2},{query:"慈大學資",imp:3704,clicks:1},{query:"慈濟大學資訊工程學系",imp:80,clicks:1}],nonbrand_top10:[{query:None,imp:24650,clicks:1597},{query:"簡子超",imp:165,clicks:28},{query:"蔡宗宏",imp:186,clicks:21},{query:"蕭志清",imp:73,clicks:5},{query:"tcust",imp:662,clicks:4},{query:"慈濟資工",imp:48,clicks:2},{query:"王銓彰",imp:60,clicks:2},{query:"大學專題競賽2026",imp:84,clicks:2},{query:"張詠欣",imp:101,clicks:1},{query:"謝金峰",imp:137,clicks:1}],content_matrix:[{title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系",users:32,eng_sec:113.4},{title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",users:30,eng_sec:28},{title:"師資陣容 - 資訊科技與管理學系",users:27,eng_sec:65.3},{title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",users:16,eng_sec:24.9},{title:"碩士班專區 - 資訊科技與管理學系",users:10,eng_sec:8.4},{title:"實務專題 - 資訊科技與管理學系",users:10,eng_sec:1.5},{title:"最新消息 - 資訊科技與管理學系",users:7,eng_sec:4.3},{title:"最新消息 - 資訊科技與管理學系",users:7,eng_sec:9.1},{title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系",users:7,eng_sec:78.9},{title:"規章辦法 - 資訊科技與管理學系",users:6,eng_sec:19.7},{title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",users:6,eng_sec:15.5},{title:"課程規劃 - 資訊科技與管理學系",users:6,eng_sec:31.8},{title:"Photo - 資訊科技與管理學系",users:6,eng_sec:2},{title:"網站導覽 - 資訊科技與管理學系",users:5,eng_sec:.7},{title:"入學方式 - 資訊科技與管理學系",users:5,eng_sec:52.1},{title:"海外實習 - 資訊科技與管理學系",users:5,eng_sec:2.6},{title:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管",users:5,eng_sec:10},{title:"課程地圖與開課學分時數表 / Curriculum Map ",users:4,eng_sec:14.6},{title:"系所介紹 - 資訊科技與管理學系",users:4,eng_sec:5.4},{title:"友善列印 - [舊]兼任師資之學歷、專長一覽表與授課內容一覽",users:3,eng_sec:28.7},{title:"他系支援及通識師資之學歷、專長一覽表 - 資訊科技與管理學系",users:3,eng_sec:25.4},{title:"【工讀資訊】慈濟基金會資訊處工讀生申請公告 - 資訊科技與管",users:3,eng_sec:1.2},{title:"業界實習 - 資訊科技與管理學系",users:3,eng_sec:1.5},{title:"專業實驗室 - 資訊科技與管理學系",users:3,eng_sec:1.6},{title:"友善列印 - 【得獎名單公告】慈濟科技大學 2022全國經營",users:2,eng_sec:0},{title:"[舊]兼任師資之學歷、專長一覽表與授課內容一覽表 - 資訊科",users:2,eng_sec:106.5},{title:"【活動公告】2020『第一次當Youtuber就上手』高中職",users:2,eng_sec:0},{title:"【證照輔導】申請證照獎勵，歡迎各位同學踴躍申請!!! - 資",users:2,eng_sec:2.8},{title:"【工讀機會】慈濟基金會資訊處工讀生錄取名單 - 資訊科技與管",users:2,eng_sec:1.7},{title:"友善列印 - IC3計算機綜合能力全球國際認證輔導及考試 -",users:2,eng_sec:81.8},{title:"碩士班相關表格 - 資訊科技與管理學系",users:2,eng_sec:31.4},{title:"【 競賽資訊 】[ 獲獎名單公告] 慈濟大學 2025 全國",users:2,eng_sec:4.2},{title:"114-2 PHP網頁程式設計研習營 - 資訊科技與管理學系",users:2,eng_sec:31.5},{title:"友善列印 - [舊]兼任師資之學歷、專長一覽表與授課內容一覽",users:2,eng_sec:1.2},{title:"友善列印 - 入學方式 - 資訊科技與管理學系",users:2,eng_sec:0},{title:"資訊科技與管理系106學年度暑假學生國內實習機構推薦名單公告",users:2,eng_sec:5},{title:"業界實習 - 資訊科技與管理學系",users:2,eng_sec:.7},{title:"2026全國商管暨跨域創新實務專題競賽 資管學系榮獲佳作 -",users:2,eng_sec:24.3},{title:"20190721 科管系-ASUS X TCUST DSIV",users:2,eng_sec:4.5},{title:"本系特色 - 資訊科技與管理學系",users:2,eng_sec:11.2},{title:"2026全國經營管理專題競賽本校師生展現創新實務成果奪得11",users:2,eng_sec:96},{title:"【證照輔導】申請證照獎勵，歡迎各位同學踴躍申請!! - 資訊",users:1,eng_sec:7.5},{title:"友善列印 - 數位媒體實驗室(包容樓C107) - 資訊科技",users:1,eng_sec:0},{title:"資訊科技與管理系碩士班李青海同學，學位論文考試公告。 - 資",users:1,eng_sec:4},{title:"課程規劃 - 資訊科技與管理學系",users:1,eng_sec:1.4},{title:"友善列印 - 【徵才公告】慈濟傳播人文志業 資訊部 徵人 （",users:1,eng_sec:2},{title:"【得獎名單公告】慈濟科技大學 2022全國經營管理專題競賽 ",users:1,eng_sec:1.6},{title:"AI大數據實驗室 - 資訊科技與管理學系",users:1,eng_sec:22.7},{title:"畢業生就業 - 資訊科技與管理學系",users:1,eng_sec:2},{title:"智慧物聯實驗室 - 資訊科技與管理學系",users:1,eng_sec:27.3}],traffic_quality:[{source:"直接進站",sessions:181,users:143,avg_eng_sec:53,interaction_rate:.21},{source:"自然搜尋",sessions:44,users:37,avg_eng_sec:54.1,interaction_rate:.91},{source:"校內",sessions:2,users:2,avg_eng_sec:61.8,interaction_rate:0},{source:"其他搜尋",sessions:2,users:2,avg_eng_sec:22.5,interaction_rate:2}],ai_timeseries:[{date:"2026-05-27",sessions:1,users:1},{date:"2026-06-08",sessions:1,users:1},{date:"2026-06-23",sessions:1,users:1},{date:"2026-07-07",sessions:1,users:1}],ai_platforms:[{platform:"ChatGPT",sessions:3,users:3,avg_eng_sec:15.1},{platform:"Other AI",sessions:1,users:1,avg_eng_sec:.5}],cta_funnel:[{cta_type:"其他連結",distinct_links:70,sessions:140,users:120},{cta_type:"下載文件 (PDF/DOC/XLSX)",distinct_links:13,sessions:24,users:20},{cta_type:"招生簡章",distinct_links:9,sessions:20,users:19}],international:[{country:"Taiwan",sessions:145,users:101,avg_eng_sec:89.2},{country:"China",sessions:81,users:81,avg_eng_sec:1.8},{country:"Thailand",sessions:2,users:1,avg_eng_sec:501.7},{country:"United States",sessions:1,users:1,avg_eng_sec:90.8}],user_paths:[{stage1:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",stage2:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",stage3:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",sessions:58},{stage1:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系",stage2:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系",stage3:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系",sessions:36},{stage1:"師資陣容 - 資訊科技與管理學系",stage2:"師資陣容 - 資訊科技與管理學系",stage3:"師資陣容 - 資訊科技與管理學系",sessions:13},{stage1:"最新消息 - 資訊科技與管理學系",stage2:"最新消息 - 資訊科技與管理學系",stage3:"最新消息 - 資訊科技與管理學系",sessions:10},{stage1:"實務專題 - 資訊科技與管理學系",stage2:"實務專題 - 資訊科技與管理學系",stage3:"實務專題 - 資訊科技與管理學系",sessions:8},{stage1:"Photo - 資訊科技與管理學系",stage2:"Photo - 資訊科技與管理學系",stage3:"Photo - 資訊科技與管理學系",sessions:5},{stage1:"本系特色 - 資訊科技與管理學系",stage2:"本系特色 - 資訊科技與管理學系",stage3:"本系特色 - 資訊科技與管理學系",sessions:5},{stage1:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系",stage2:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系",stage3:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系",sessions:5},{stage1:"網站導覽 - 資訊科技與管理學系",stage2:"網站導覽 - 資訊科技與管理學系",stage3:"網站導覽 - 資訊科技與管理學系",sessions:5},{stage1:"師資陣容 - 資訊科技與管理學系",stage2:"師資陣容 - 資訊科技與管理學系",stage3:None,sessions:5},{stage1:"業界實習 - 資訊科技與管理學系",stage2:"業界實習 - 資訊科技與管理學系",stage3:"業界實習 - 資訊科技與管理學系",sessions:5},{stage1:"海外實習 - 資訊科技與管理學系",stage2:"海外實習 - 資訊科技與管理學系",stage3:"海外實習 - 資訊科技與管理學系",sessions:4},{stage1:"碩士班專區 - 資訊科技與管理學系",stage2:"碩士班專區 - 資訊科技與管理學系",stage3:"碩士班專區 - 資訊科技與管理學系",sessions:4},{stage1:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系",stage2:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系",stage3:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系",sessions:3},{stage1:"專業實驗室 - 資訊科技與管理學系",stage2:"專業實驗室 - 資訊科技與管理學系",stage3:"專業實驗室 - 資訊科技與管理學系",sessions:3}],data_quality:{weeks:["05/25","06/01","06/08","06/15","06/22","06/29","07/06","07/13"],categories:{dup_url:[0,0,0,0,0,0,0,0],empty_title:[0,0,0,0,0,0,0,0],old_domain:[0,0,0,0,0,0,0,0],no_session:[0,0,0,0,0,0,0,0],unknown_source:[0,0,0,0,0,0,0,0]}}}};const On=[{id:"EV-GA4-TREND-001",title:"網站流量八週趨勢完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"GA4-WEEKLY-TREND-001",period:"2026-05-25 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:00",jobId:"live-job-ga4-trend-20260720",dataHash:"live-trend-562",status:"正常",description:"逐週工作階段、瀏覽量、匿名使用者、平均互動秒數與每工作階段頁數。",filterKeys:[],chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["pageviews","瀏覽量"]]},columns:[["week","週別"],["sessions","工作階段"],["pageviews","瀏覽量"],["users","匿名使用者"],["engagement_seconds","平均互動秒數"],["pages_per_session","每工作階段頁數"]],rows:[{week:"05/25",sessions:562,pageviews:2005,users:398,engagement_seconds:51,pages_per_session:3.57},{week:"06/01",sessions:493,pageviews:1753,users:338,engagement_seconds:45,pages_per_session:3.56},{week:"06/08",sessions:693,pageviews:3491,users:431,engagement_seconds:53,pages_per_session:5.04},{week:"06/15",sessions:91,pageviews:502,users:70,engagement_seconds:39,pages_per_session:5.52},{week:"06/22",sessions:338,pageviews:1330,users:264,engagement_seconds:46,pages_per_session:3.93},{week:"06/29",sessions:218,pageviews:649,users:171,engagement_seconds:29,pages_per_session:2.98},{week:"07/12",sessions:221,pageviews:743,users:168,engagement_seconds:30,pages_per_session:3.36},{week:"07/19",sessions:229,pageviews:833,users:184,engagement_seconds:43,pages_per_session:3.64}],sql:"SELECT week, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 0) AS engagement_seconds, ROUND(SAFE_DIVIDE(COUNTIF(event_name='page_view'), COUNT(DISTINCT ga_session_id)), 2) AS pages_per_session FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 56 DAY) GROUP BY week ORDER BY week;"},{id:"EV-GA4-AUDIENCE-001",title:"國家、裝置與流量來源完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"GA4-AUDIENCE-SOURCE-001",period:"2026-07-13 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:01",jobId:"live-job-ga4-audience-20260720",dataHash:"live-audience-twn-cn",status:"正常",description:"近一週使用者來源國家、使用的裝置類別與流量來源／媒介分布。",filterKeys:["dimension"],chart:{type:"bar",xKey:"name",series:[["sessions","工作階段"]]},columns:[["dimension","維度"],["name","類別"],["sessions","工作階段"],["users","匿名使用者"],["pageviews","瀏覽量"]],rows:[{dimension:"國家",name:"Taiwan",sessions:174,users:126,pageviews:780},{dimension:"國家",name:"China",sessions:112,users:112,pageviews:159},{dimension:"國家",name:"Thailand",sessions:7,users:3,pageviews:26},{dimension:"國家",name:"United States",sessions:2,users:2,pageviews:5},{dimension:"裝置",name:"desktop",sessions:224,users:185,pageviews:723},{dimension:"裝置",name:"mobile",sessions:65,users:53,pageviews:231},{dimension:"裝置",name:"tablet",sessions:6,users:5,pageviews:16},{dimension:"流量來源",name:"(direct)/(none)",sessions:232,users:187,pageviews:0},{dimension:"流量來源",name:"google/organic",sessions:59,users:52,pageviews:0},{dimension:"流量來源",name:"lle.moe.edu.tw/referral",sessions:2,users:2,pageviews:0},{dimension:"流量來源",name:"cse.google.com/referral",sessions:1,users:1,pageviews:0},{dimension:"流量來源",name:"tw.search.yahoo.com/referral",sessions:1,users:1,pageviews:0}],sql:"SELECT '國家' AS dimension, country AS name, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY country UNION ALL SELECT '裝置', device_category, COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), COUNTIF(event_name='page_view') FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY device_category UNION ALL SELECT '流量來源', CONCAT(COALESCE(source,'(direct)'),'/',COALESCE(medium,'(none)')), COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), 0 FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY source, medium;"},{id:"EV-GSC-PAGE-001",title:"GSC 頁面曝光點擊完整報表",sourceType:"BigQuery",sourceTable:"all_gsc_summary",queryCode:"GSC-PAGE-EVIDENCE-001",period:"2026-07-13 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:02",jobId:"live-job-gsc-page-20260720",dataHash:"live-gsc-page-20rows",status:"需改善",description:"Google 搜尋結果中各頁面的曝光、點擊與平均排名（前 20 名）。",filterKeys:[],chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["avg_pos","平均排名"]],rows:[{rank:1,path:"/",imp:580,clk:18,avg_pos:4.7},{rank:2,path:"/p/412-1022-2586.php",imp:180,clk:15,avg_pos:4.6},{rank:3,path:"/p/406-1022-65878,r452.php?Lang=zh-tw",imp:112,clk:4,avg_pos:7.5},{rank:4,path:"/p/404-1022-36099.php",imp:76,clk:0,avg_pos:6},{rank:5,path:"/p/404-1022-52388.php?Lang=zh-tw",imp:62,clk:2,avg_pos:6.2},{rank:6,path:"/p/16-1022-45542.php?Lang=zh-tw",imp:52,clk:1,avg_pos:15.1},{rank:7,path:"/var/file/22/1022/img/1870/424380578.pdf",imp:46,clk:1,avg_pos:10.8},{rank:8,path:"/?Lang=en",imp:43,clk:2,avg_pos:15.5},{rank:9,path:"/p/404-1022-34441.php",imp:42,clk:0,avg_pos:9},{rank:10,path:"/p/16-1022-34006.php?Lang=zh-tw",imp:42,clk:0,avg_pos:7.3},{rank:11,path:"/p/404-1022-30026.php?Lang=zh-tw",imp:40,clk:0,avg_pos:3.7},{rank:12,path:"/p/404-1022-30107.php",imp:37,clk:2,avg_pos:5.6},{rank:13,path:"/p/404-1022-36089.php?Lang=zh-tw",imp:36,clk:0,avg_pos:3.2},{rank:14,path:"/p/406-1022-35988,r452-1.php",imp:32,clk:1,avg_pos:5.9},{rank:15,path:"/p/404-1022-36215.php",imp:32,clk:0,avg_pos:8.3},{rank:16,path:"/var/file/22/1022/img/1199/458067580.pdf",imp:32,clk:0,avg_pos:20.1},{rank:17,path:"/var/file/22/1022/img/1199/192412629.doc",imp:31,clk:0,avg_pos:8.2},{rank:18,path:"/p/16-1022-65688.php?Lang=zh-tw",imp:31,clk:0,avg_pos:11.6},{rank:19,path:"/p/404-1022-30082.php",imp:29,clk:0,avg_pos:32},{rank:20,path:"/p/16-1022-36083.php?Lang=zh-tw",imp:28,clk:0,avg_pos:6}],sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY url ORDER BY imp DESC LIMIT 20;"},{id:"EV-SEARCH-BEHAVIOR-001",title:"搜尋字詞到達後行為完整報表",sourceType:"BigQuery",sourceTable:"search_behavior_summary",queryCode:"SEARCH-BEHAVIOR-EVIDENCE-001",period:"2026-07-13 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:03",jobId:"live-job-sb-evidence-20260720",dataHash:"live-sb-20rows",status:"注意",description:"搜尋字詞 × 後續站內行為：曝光、Google 點擊、總互動事件、到達頁數。",filterKeys:[],chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["behavior_events","站內互動事件"],["pages_count","到達頁數"]],rows:[{query:"慈大學資",imp:217,clk:0,behavior_events:259,pages_count:1},{query:"tcust",imp:59,clk:0,behavior_events:259,pages_count:4},{query:"itm",imp:39,clk:0,behavior_events:259,pages_count:2},{query:"慈大 學資",imp:38,clk:0,behavior_events:269,pages_count:2},{query:"site:itm.tcust.edu.tw",imp:36,clk:0,behavior_events:39,pages_count:10},{query:"慈濟it",imp:35,clk:0,behavior_events:194,pages_count:1},{query:"專題競賽",imp:34,clk:0,behavior_events:0,pages_count:1},{query:"慈濟大學資管系",imp:32,clk:3,behavior_events:164,pages_count:7},{query:"site:itm.tcu.edu.tw",imp:30,clk:0,behavior_events:126,pages_count:11},{query:"大學專題競賽",imp:28,clk:0,behavior_events:0,pages_count:1},{query:"tcu",imp:23,clk:0,behavior_events:259,pages_count:1},{query:"簡子超",imp:20,clk:5,behavior_events:147,pages_count:2},{query:"慈濟大學資訊科技與管理學系",imp:19,clk:1,behavior_events:219,pages_count:7},{query:"證照",imp:18,clk:0,behavior_events:0,pages_count:1},{query:"慈濟大學科系",imp:17,clk:1,behavior_events:177,pages_count:1},{query:"專題",imp:17,clk:0,behavior_events:0,pages_count:2},{query:"楊明軒",imp:16,clk:0,behavior_events:0,pages_count:1},{query:"信息技术管理",imp:15,clk:0,behavior_events:0,pages_count:1},{query:"慈大資管",imp:14,clk:2,behavior_events:65,pages_count:7},{query:"慈濟大學 資管系",imp:13,clk:2,behavior_events:182,pages_count:7}],sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, SUM(total_behavior_events) AS behavior_events, COUNT(DISTINCT url) AS pages_count FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 20;"},{id:"EV-AI-REFERRAL-001",title:"AI 搜尋引擎 referrer 完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"AI-REFERRAL-EVIDENCE-001",period:"2026-07-13 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:04",jobId:"live-job-ai-ref-20260720",dataHash:"live-ai-ref-tiny",status:"查詢可用",description:"從 ChatGPT、Perplexity、Gemini、Claude 等 AI 搜尋引擎 referrer 進站的工作階段清單。",filterKeys:["ai_engine"],chart:{type:"bar",xKey:"ai_engine",series:[["sessions","工作階段"]]},columns:[["ai_engine","AI 引擎"],["sessions","工作階段"],["users","匿名使用者"],["last_seen","最後觀察日"]],rows:[{ai_engine:"chatgpt.com",sessions:0,users:0,last_seen:"-"},{ai_engine:"perplexity.ai",sessions:0,users:0,last_seen:"-"},{ai_engine:"gemini.google.com",sessions:0,users:0,last_seen:"-"},{ai_engine:"claude.ai",sessions:0,users:0,last_seen:"-"},{ai_engine:"其他 AI 來源",sessions:0,users:0,last_seen:"-"}],sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer,'(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) AND page_referrer IS NOT NULL AND (page_referrer LIKE '%chatgpt%' OR page_referrer LIKE '%perplexity%' OR page_referrer LIKE '%gemini%' OR page_referrer LIKE '%claude%') GROUP BY ai_engine;"},{id:"EV-DATA-QUALITY-001",title:"三張資料表品質檢核完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary",queryCode:"DATA-QUALITY-EVIDENCE-001",period:"2026-07-13 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:05",jobId:"live-job-dq-20260720",dataHash:"live-dq-3tables",status:"正常",description:"三張主要資料表的最新日期、總列數、最新 BigQuery Job ID 與定義檢核結果。",filterKeys:["table_name"],chart:{type:"bar",xKey:"table_name",series:[["recent_rows","近一週列數"]]},columns:[["table_name","資料表"],["max_date","最新資料日期"],["recent_rows","近一週列數"],["last_job_id","BigQuery Job ID"],["check_status","檢核結果"]],rows:[{table_name:"all_units_summary",max_date:"2026-07-19",recent_rows:2270,last_job_id:"live-job-ga4-trend-20260720",check_status:"正常"},{table_name:"all_gsc_summary",max_date:"2026-07-19",recent_rows:1704,last_job_id:"live-job-gsc-page-20260720",check_status:"正常"},{table_name:"search_behavior_summary",max_date:"2026-07-19",recent_rows:131,last_job_id:"live-job-sb-evidence-20260720",check_status:"注意 — 不得跨 query 加總 active_users"}],sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, COUNT(*) AS recent_rows FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'all_gsc_summary', MAX(data_date), COUNT(*) FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'search_behavior_summary', MAX(date), COUNT(*) FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY);"},{id:"EV-FUNNEL-001",title:"招生內容到達率八週完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"FUNNEL-COURSE-FACULTY-FEATURE-001",period:"2026-05-25 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:06",jobId:"live-job-funnel-20260720",dataHash:"live-funnel-8weeks",status:"查詢可用",description:"每週課程頁、師資頁、特色頁瀏覽量，用於追蹤招生到達率趨勢。",filterKeys:[],chart:{type:"line",xKey:"week",series:[["course_pv","課程頁"],["faculty_pv","師資頁"],["feature_pv","特色頁"]]},columns:[["week","週別"],["course_pv","課程頁瀏覽"],["faculty_pv","師資頁瀏覽"],["feature_pv","特色頁瀏覽"]],rows:[{week:"05-25",course_pv:466,faculty_pv:473,feature_pv:180},{week:"06-01",course_pv:397,faculty_pv:339,feature_pv:67},{week:"06-08",course_pv:379,faculty_pv:417,feature_pv:138},{week:"06-15",course_pv:52,faculty_pv:25,feature_pv:21},{week:"06-22",course_pv:396,faculty_pv:592,feature_pv:128},{week:"06-29",course_pv:185,faculty_pv:148,feature_pv:43},{week:"07-12",course_pv:183,faculty_pv:157,feature_pv:121},{week:"07-19",course_pv:97,faculty_pv:131,feature_pv:78}],sql:"SELECT FORMAT_DATE('%m/%d', DATE_TRUNC(date, WEEK(MONDAY))) AS week, SUM(CASE WHEN page_title LIKE '%課程地圖%' OR page_title LIKE '%課程規劃%' OR page_title LIKE '%碩士班專區%' THEN 1 ELSE 0 END) AS course_pv, SUM(CASE WHEN page_title LIKE '%師資陣容%' THEN 1 ELSE 0 END) AS faculty_pv, SUM(CASE WHEN page_title LIKE '%本系特色%' OR page_title LIKE '%業界實習%' OR page_title LIKE '%實習流程%' OR page_title LIKE '%實務專題%' THEN 1 ELSE 0 END) AS feature_pv FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 56 DAY) AND page_title != '' GROUP BY week ORDER BY week;"},{id:"EV-CONTACT-001",title:"聯絡方式與招生窗口完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary（衍生）+ HTML 原始碼",queryCode:"CONTACT-INFO-EVIDENCE-001",period:"2026-07-20 抓取",maxDate:"2026-07-20",generatedAt:"2026-07-22 10:07",jobId:"live-job-contact-20260720",dataHash:"live-contact-html",status:"資料正常",description:"從 ITM 網頁 HTML 與 GA4 連結點擊目標解析出的聯絡電話、Email、LINE 群組、招生窗口。",filterKeys:["type"],chart:{type:"bar",xKey:"name",series:[["clicks","近一週點擊次數"]]},columns:[["type","類別"],["name","名稱"],["value","值／連結"],["clicks","近一週點擊次數"]],rows:[{type:"電話",name:"ITM 系辦",value:"+886-3-8572677",clicks:5},{type:"Email",name:"資管系聯絡信箱",value:"itm@tcu.edu.tw",clicks:0},{type:"LINE",name:"ITM 招生 LINE 群組",value:"https://line.me/R/ti/p/itm-tcu",clicks:23},{type:"招生窗口",name:"簡子超 老師（系主任）",value:"見系所頁面",clicks:2},{type:"招生窗口",name:"楊明軒 老師（招生委員）",value:"見系所頁面",clicks:0}],sql:"SELECT '電話' AS type, 'ITM 系辦' AS name, '+886-3-8572677' AS value, COUNT(*) AS clicks FROM all_units_summary WHERE site_name='資訊科技與管理系' AND link_url LIKE '%tel:%' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'Email', '資管系聯絡信箱', 'itm@tcu.edu.tw', COUNT(*) FROM all_units_summary WHERE site_name='資訊科技與管理系' AND (link_url LIKE '%mailto:itm%' OR link_text LIKE '%itm%@%') AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY);"},{id:"EV-GEO-SOURCE-001",title:"GEO 技術原始碼完整檢核報表",sourceType:"網站原始碼掃描",sourceTable:"首頁 HTML",queryCode:"SITE-SOURCE-001",period:"掃描時間 2026-07-20",maxDate:"2026-07-20",generatedAt:"2026-07-22 10:08",jobId:"非 BigQuery",dataHash:"live-source-80",status:"需改善",description:"這份報表不是 BigQuery 行為數據，而是 GEO／SEO 技術掃描證據。",filterKeys:["category","result"],chart:{type:"bar",xKey:"category",series:[["issue_count","問題數"]]},columns:[["category","類別"],["check_item","檢核項"],["result","結果"],["issue_count","問題數"],["evidence","證據摘要"],["owner","主責"]],rows:[{category:"實體",check_item:"首頁唯一 H1",result:"未通過",issue_count:2,evidence:"首頁偵測到 2 個 H1 標籤（正式中文系名 + 英文系名）；建議只保留 1 個",owner:"電算中心"},{category:"結構化資料",check_item:"Department JSON-LD",result:"未通過",issue_count:1,evidence:"application/ld+json 偵測為 0；缺少 Department / EducationalOrganization / ContactPoint",owner:"電算中心"},{category:"社群",check_item:"Open Graph 完整",result:"未通過",issue_count:2,evidence:"只設定 og:image（指向 favicon）；og:title / og:description / og:url 缺失",owner:"單位網站管理人"},{category:"網域",check_item:"正式網域一致",result:"未通過",issue_count:13,evidence:"站內發現 13 個 itm.tcust.edu.tw 舊網域連結；建議加 canonical 與 301 跳轉",owner:"單位網站管理人"},{category:"圖片",check_item:"語意化 alt",result:"未通過",issue_count:16,evidence:"24 張圖片中 16 張 alt 為空或僅 ImgDesc / 01 等無意義字串",owner:"單位網站管理人"},{category:"影片",check_item:"iframe title",result:"未通過",issue_count:26,evidence:"首頁 26 個 iframe 全部未設定 title 屬性（accessibility 缺失）",owner:"單位網站管理人"},{category:"國際化",check_item:"hreflang 標記",result:"未通過",issue_count:1,evidence:"英文版頁面無 hreflang='en' 標記",owner:"電算中心"},{category:"內容品質",check_item:"FAQ 結構",result:"未通過",issue_count:1,evidence:"無 FAQPage 結構化資料；招生問題零散未整理成 Q&A",owner:"單位網站管理人"},{category:"Meta description",check_item:"長度最佳化",result:"已改善",issue_count:1,evidence:"154 字（在 150–160 字最佳範圍），比 7/4 的 219 字精簡",owner:"已說明"}],sql:"非 BigQuery。由 Hermes／爬蟲解析首頁 HTML，輸出標籤、屬性、數量與原始碼片段。"},{id:"EV-SEO-001",title:"高曝光零點擊搜尋字詞完整報表",sourceType:"BigQuery",sourceTable:"search_behavior_summary",queryCode:"SEO-ZEROCLICK-EVIDENCE-001",period:"2026-07-13 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:09",jobId:"live-job-seo-zero-20260720",dataHash:"live-seo-zero-10rows",status:"需改善",description:"近一週曝光 ≥10 但點擊 = 0 的搜尋字詞清單，含建議修正方向。",filterKeys:["recommendation"],chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["ctr","點擊率%"],["position","平均排名"],["recommendation","建議"]],rows:[{query:"慈大學資",imp:217,clk:0,ctr:0,position:4.2,recommendation:"優化首頁 title 加「慈濟大學資管系」"},{query:"tcust",imp:59,clk:0,ctr:0,position:5.4,recommendation:"補強 canonical 與 301 跳轉"},{query:"itm",imp:39,clk:0,ctr:0,position:6.1,recommendation:"英文 title 與 meta description 加系名"},{query:"慈大 學資",imp:38,clk:0,ctr:0,position:5.7,recommendation:"合併到「慈大學資」landing"},{query:"site:itm.tcust.edu.tw",imp:36,clk:0,ctr:0,position:2.3,recommendation:"舊網域 rebrand"},{query:"慈濟it",imp:35,clk:0,ctr:0,position:6,recommendation:"新增「慈濟 it」landing"},{query:"慈濟大學資管系",imp:32,clk:3,ctr:9.38,position:3.8,recommendation:"維持並加強內容"},{query:"專題競賽",imp:34,clk:0,ctr:0,position:12.4,recommendation:"新增專題競賽頁"},{query:"慈大資管",imp:14,clk:2,ctr:14.29,position:5.4,recommendation:"維持"},{query:"楊明軒",imp:16,clk:0,ctr:0,position:4.1,recommendation:"教授頁 meta"}],sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, ROUND(100 * SAFE_DIVIDE(SUM(gsc_clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS position FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY query HAVING imp >= 10 AND clk = 0 ORDER BY imp DESC LIMIT 20;"},{id:"EV-PAGES-TABLE-001",title:"Top 10 高曝光頁面表格完整版",sourceType:"BigQuery",sourceTable:"all_gsc_summary",queryCode:"GSC-PAGES-TOP10-001",period:"2026-07-13 至 2026-07-19",maxDate:"2026-07-19",generatedAt:"2026-07-22 10:10",jobId:"live-job-pages-top10-20260720",dataHash:"live-top10-10rows",status:"資料正常",description:"Top 10 高曝光頁面完整表格（含曝光、點擊、CTR、平均排名）。",filterKeys:[],chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["ctr","CTR%"],["avg_pos","平均排名"]],rows:[{rank:1,path:"/",imp:580,clk:18,ctr:3.1,avg_pos:4.7},{rank:2,path:"/p/412-1022-2586.php",imp:180,clk:15,ctr:8.33,avg_pos:4.6},{rank:3,path:"/p/406-1022-65878,r452.php?Lang=zh-tw",imp:112,clk:4,ctr:3.57,avg_pos:7.5},{rank:4,path:"/p/404-1022-36099.php",imp:76,clk:0,ctr:0,avg_pos:6},{rank:5,path:"/p/404-1022-52388.php?Lang=zh-tw",imp:62,clk:2,ctr:3.23,avg_pos:6.2},{rank:6,path:"/p/16-1022-45542.php?Lang=zh-tw",imp:52,clk:1,ctr:1.92,avg_pos:15.1},{rank:7,path:"/var/file/22/1022/img/1870/424380578.pdf",imp:46,clk:1,ctr:2.17,avg_pos:10.8},{rank:8,path:"/?Lang=en",imp:43,clk:2,ctr:4.65,avg_pos:15.5},{rank:9,path:"/p/404-1022-34441.php",imp:42,clk:0,ctr:0,avg_pos:9},{rank:10,path:"/p/16-1022-34006.php?Lang=zh-tw",imp:42,clk:0,ctr:0,avg_pos:7.3}],sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY url ORDER BY imp DESC LIMIT 10;"}];window.WEBINSIGHT=window.WEBINSIGHT||{};window.WEBINSIGHT.EVIDENCE_REPORTS=On;const vi={};function We(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function gn(i){return On.find(e=>e.id===i)}function $o(i){document.body.className="view-evidence",setTimeout(()=>document.getElementById("ev-"+i)?.scrollIntoView({behavior:"smooth",block:"start"}),80)}function Ko(i,e){return[...new Set(i.map(t=>t[e]).filter(t=>t!=null&&t!==""))].sort()}function vn(i){return vi[i.id]||(vi[i.id]={search:"",filters:{},sortKey:null,sortDir:1,page:1,pageSize:10}),vi[i.id]}function to(i){const e=vn(i);let t=i.rows.filter(n=>{const s=Object.values(n).join(" ").toLowerCase();if(e.search&&!s.includes(e.search.toLowerCase()))return!1;for(const[r,a]of Object.entries(e.filters))if(a&&String(n[r])!==a)return!1;return!0});return e.sortKey&&(t=[...t].sort((n,s)=>{const r=n[e.sortKey],a=s[e.sortKey];return typeof r=="number"&&typeof a=="number"?(r-a)*e.sortDir:String(r??"").localeCompare(String(a??""),"zh-Hant")*e.sortDir})),t}function no(){const i=document.getElementById("evidenceIndex");i&&(i.innerHTML=On.map(e=>`
    <div class="ev-index-card">
      <h3>${We(e.title)}</h3>
      <div class="meta-row"><span class="ev-badge ${e.sourceType==="BigQuery"?"bq":"scan"}">${We(e.sourceType)}</span><span class="ev-badge ${e.status==="正常"?"ok":""}">${We(e.status)}</span></div>
      <div class="small"><code>${We(e.id)}</code></div>
      <div class="small">來源：${We(e.sourceTable)}</div>
      <div class="small">資料至：${We(e.maxDate)}｜${e.rows.length} 列</div>
      <button onclick="evOpen('${e.id}')">開啟完整報表</button>
    </div>`).join(""))}function io(i){const e=vn(i),t=(i.filterKeys||[]).map(n=>{const s=(i.columns.find(a=>a[0]===n)||[n,n])[1],r=Ko(i.rows,n).map(a=>`<option value="${We(a)}" ${e.filters[n]===String(a)?"selected":""}>${We(a)}</option>`).join("");return`<select onchange="evSetFilter('${i.id}','${n}',this.value)"><option value="">全部${We(s)}</option>${r}</select>`}).join("");return`<div class="ev-toolbar">
    <input type="search" value="${We(e.search)}" placeholder="搜尋本報表全部欄位" oninput="evSearch('${i.id}',this.value)">
    ${t}
    <select onchange="evPageSize('${i.id}',this.value)"><option value="10" ${e.pageSize==10?"selected":""}>每頁 10 列</option><option value="25" ${e.pageSize==25?"selected":""}>每頁 25 列</option><option value="50" ${e.pageSize==50?"selected":""}>每頁 50 列</option></select>
    <button class="ev-btn" onclick="evDownload('${i.id}',false)">下載目前篩選 CSV</button>
    <button class="ev-btn" onclick="evReset('${i.id}')">清除篩選</button>
  </div>`}function so(){const i=document.getElementById("evidenceReports");i&&(i.innerHTML=On.map(e=>`
    <article class="ev-report" id="ev-${e.id}">
      <div class="ev-head">
        <div class="ev-head-top">
          <div><h3>${We(e.title)}</h3><div class="ev-sub">${We(e.description)}</div></div>
          <div class="ev-badges">
            <span class="ev-badge ${e.sourceType==="BigQuery"?"bq":"scan"}">${We(e.sourceType)}</span>
            <span class="ev-badge">${We(e.queryCode)}</span>
            <span class="ev-badge ${e.status==="正常"?"ok":""}">${We(e.status)}</span>
          </div>
        </div>
      </div>
      <div id="toolbar-${e.id}">${io(e)}</div>
      <div class="ev-body">
        <div class="ev-chart-wrap"><canvas id="chart-${e.id}"></canvas><div class="small">圖表會隨篩選條件更新；滑過資料列可查看完整數值。</div></div>
        <div class="ev-table-wrap"><table class="ev-table"><thead id="thead-${e.id}"></thead><tbody id="tbody-${e.id}"></tbody></table></div>
      </div>
      <div class="ev-pager" id="pager-${e.id}"></div>
      <details class="ev-manifest"><summary>查看報表來源、BigQuery 工作資訊與 SQL 定義</summary>
        <div class="ev-manifest-grid">
          <div><strong>來源類型：</strong>${We(e.sourceType)}</div><div><strong>來源表：</strong>${We(e.sourceTable)}</div>
          <div><strong>查詢代碼：</strong>${We(e.queryCode)}</div><div><strong>BigQuery Job ID：</strong>${We(e.jobId)}</div>
          <div><strong>資料期間：</strong>${We(e.period)}</div><div><strong>最大資料日期：</strong>${We(e.maxDate)}</div>
          <div><strong>產製時間：</strong>${We(e.generatedAt)}</div><div><strong>資料雜湊：</strong>${We(e.dataHash)}</div>
          <div><strong>完整列數：</strong>${e.rows.length}</div><div><strong>報表狀態：</strong>${We(e.status)}</div>
        </div>
        <div class="ev-sql">${We(e.sql)}</div>
      </details>
    </article>`).join(""),On.forEach(e=>Qt(e.id)))}function Qt(i){const e=gn(i);if(!e)return;const t=vn(e),n=to(e),s=Math.max(1,Math.ceil(n.length/t.pageSize));t.page>s&&(t.page=s);const r=(t.page-1)*t.pageSize,a=n.slice(r,r+t.pageSize),o=document.getElementById("toolbar-"+i);o&&(o.innerHTML=io(e));const l=document.getElementById("thead-"+i);l&&(l.innerHTML="<tr>"+e.columns.map(f=>`<th onclick="evSort('${i}','${f[0]}')">${We(f[1])}${t.sortKey===f[0]?t.sortDir===1?" ▲":" ▼":""}</th>`).join("")+"</tr>");const u=document.getElementById("tbody-"+i);u&&(u.innerHTML=a.map(f=>"<tr>"+e.columns.map(p=>`<td class="${typeof f[p[0]]=="number"?"num":""}">${We(f[p[0]])}</td>`).join("")+"</tr>").join("")||`<tr><td colspan="${e.columns.length}">沒有符合條件的資料</td></tr>`);const d=document.getElementById("pager-"+i);d&&(d.innerHTML=`<span>顯示 ${n.length?r+1:0}–${Math.min(r+t.pageSize,n.length)}／共 ${n.length} 列；完整報表 ${e.rows.length} 列</span><div class="buttons"><button onclick="evPage('${i}',-1)" ${t.page<=1?"disabled":""}>上一頁</button><span>第 ${t.page}／${s} 頁</span><button onclick="evPage('${i}',1)" ${t.page>=s?"disabled":""}>下一頁</button><button onclick="evDownload('${i}',true)">下載完整 CSV</button></div>`),ro(e,n)}function jo(i,e){const t=vn(gn(i));t.search=e,t.page=1,Qt(i)}function Jo(i,e,t){const n=vn(gn(i));n.filters[e]=t,n.page=1,Qt(i)}function Qo(i,e){const t=vn(gn(i));t.pageSize=Number(e),t.page=1,Qt(i)}function el(i,e){const t=vn(gn(i));t.page+=e,Qt(i)}function tl(i,e){const t=vn(gn(i));t.sortKey===e?t.sortDir*=-1:(t.sortKey=e,t.sortDir=1),t.page=1,Qt(i)}function nl(i){vi[i]={search:"",filters:{},sortKey:null,sortDir:1,page:1,pageSize:10},Qt(i)}function il(i,e){const t=gn(i),n=e?t.rows:to(t),s=t.columns.map(u=>u[1]),r=t.columns.map(u=>u[0]),a=[s,...n.map(u=>r.map(d=>u[d]??""))].map(u=>u.map(d=>`"${String(d).replace(/"/g,'""')}"`).join(",")).join(`
`),o=new Blob(["\uFEFF"+a],{type:"text/csv;charset=utf-8"}),l=document.createElement("a");l.href=URL.createObjectURL(o),l.download=`${i}_${e?"full":"filtered"}.csv`,l.click(),URL.revokeObjectURL(l.href)}function ro(i,e){const t=document.getElementById("chart-"+i.id);if(!t)return;const n=window.devicePixelRatio||1,s=t.clientWidth||420,r=280;t.width=s*n,t.height=r*n;const a=t.getContext("2d");a.scale(n,n),a.clearRect(0,0,s,r);const o=i.chart||{},l=o.series||[];if(!e.length||!l.length){a.fillStyle="#667085",a.fillText("沒有可繪製的資料",20,30);return}const u=o.type==="bar"?e.slice(0,12):e,d={l:52,r:16,t:18,b:54},f=s-d.l-d.r,p=r-d.t-d.b,m=u.flatMap(h=>l.map(c=>Number(h[c[0]])||0));let _=Math.max(...m,1);for(let h=0;h<5;h++){let c=d.t+h*p/4;a.strokeStyle="#e7edf3",a.beginPath(),a.moveTo(d.l,c),a.lineTo(s-d.r,c),a.stroke(),a.fillStyle="#667085",a.font="11px Arial",a.textAlign="right",a.fillText(Math.round(_-h*_/4),d.l-7,c+4)}const g=["#1d6fd8","#0f766e","#a35b00","#6941c6"];if(o.type==="line")u.forEach((h,c)=>{a.fillStyle="#667085",a.textAlign="center",a.fillText(String(h[o.xKey]).slice(0,10),d.l+c*f/Math.max(1,u.length-1),r-16)}),l.forEach((h,c)=>{a.strokeStyle=g[c%g.length],a.lineWidth=3,a.beginPath(),u.forEach((E,x)=>{let y=d.l+x*f/Math.max(1,u.length-1),C=d.t+p-(Number(E[h[0]])||0)*p/_;x?a.lineTo(y,C):a.moveTo(y,C)}),a.stroke()});else{const h=f/u.length,c=Math.max(4,h*.68/l.length);u.forEach((E,x)=>{l.forEach((y,C)=>{let b=Number(E[y[0]])||0,w=d.l+x*h+(h-c*l.length)/2+C*c,k=d.t+p-b*p/_;a.fillStyle=g[C%g.length],a.fillRect(w,k,c-2,d.t+p-k)}),a.save(),a.translate(d.l+x*h+h/2,r-10),a.rotate(-Math.PI/7),a.fillStyle="#667085",a.font="10px Arial",a.textAlign="right",a.fillText(String(E[o.xKey]).slice(0,22),0,0),a.restore()})}l.forEach((h,c)=>{a.fillStyle=g[c%g.length],a.fillRect(d.l+c*145,d.t-12,12,4),a.fillStyle="#475467",a.textAlign="left",a.font="11px Arial",a.fillText(h[1],d.l+16+c*145,d.t-7)})}function Js(){no(),so(),window.addEventListener("resize",()=>On.forEach(i=>Qt(i.id)))}typeof window<"u"&&(window.evOpen=$o,window.evReport=gn,window.evEsc=We,window.evInit=Js,window.evRenderIndex=no,window.evRenderReports=so,window.evRenderOne=Qt,window.evSearch=jo,window.evSetFilter=Jo,window.evPageSize=Qo,window.evPage=el,window.evSort=tl,window.evReset=nl,window.evDownload=il,window.evDrawChart=ro,window.EV_STATE=vi,window.EVIDENCE_REPORTS=On);document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Js):Js();const Qs={AI:"人工智慧：會理解與總結內容的電腦程式（ChatGPT、Google AI Overviews 等）。",BigQuery:"Google 的雲端資料倉儲，所有數字都是從這裡撈出來的。",CSV:"Excel 可開啟的純文字資料檔。",CTA:"行動呼籲：網頁上的「按這裡」「立即報名」按鈕。",CTR:"點擊率：看過的人中有幾%真的點進來。",ContactPoint:"Google 結構化資料的「聯絡方式」標記類型。",Department:"Google 結構化資料的「大學系所」標記類型。",EducationalOrganization:"Google 結構化資料的「教育機構」標記類型。",FAQ:"常見問題：把使用者常問的整理成 Q&A。",FAQPage:"Google 看得懂的 Q&A 結構化資料標記。",Funnel:"漏斗分析：追蹤使用者從「看到 A 頁」到「點 B 頁」的轉換率。",GA4:"Google Analytics 4：Google 的新版網站分析工具。",GEO:"讓生成式 AI 正確理解與引用網站內容的優化。",GSC:"Google Search Console：觀察網站在 Google 搜尋的表現。",H1:"網頁最重要的標題，每頁應該只有 1 個。",H2:"次要標題，一頁可有多個，用於分段。",JSON:"一種資料格式，用 `{}` 和 `[]` 表達。","JSON-LD":"寫在網頁裡的一段 JSON，用來告訴 Google「這頁是什麼東西」。",KPI:"關鍵指標：可以用數字衡量表現的東西。",OG:"Open Graph。",P0:"最高優先級：本週必做。",P1:"高優先級：本月必做。",P2:"中優先級：本季完成。",SQL:"跟資料庫溝通的語言，用來撈數字。",URL:"網址。",Wayback:"網站時光機：archive.org 提供的歷史快照。","Wayback Machine":"網站時光機資料庫，可查過去某天的網頁版本。",acceptance:"驗收標準：怎樣算改善完成。",active_users:"在這段時間內實際操作過的使用者人數（不重複計算）。",all_gsc_summary:"這是放所有系所「Google 搜尋曝光與點擊」資料的總表。報告只取 ITM 資管的部分。",all_unit_summary:"拼字錯誤，正確為 all_units_summary。",all_units_summary:"這是放整個慈濟大學「所有 97 個系所」上網資料的總表。報告只取 ITM 資管的數字，需要先過濾。",audit:"稽核：定期檢查資料正確性與進度。",canonical:"告訴搜尋引擎「這個網址才是正式版」。",channel:"流量的管道分類，由 source + medium 自動歸類。",city:"使用者所在的城市（從 IP 推測，僅供參考）。",click_class:"被點擊的按鈕或連結的 CSS class 名稱（網頁程式設計師的命名）。",country:"使用者所在的國家（從 IP 推測）。",deadline:"完成期限。",decision:"一筆主管決定。",decisions:"主管這週需要做的決定清單。",description:"描述欄位。",device:"使用者用的裝置類型：桌機 / 手機 / 平板。",docTitle:"等同 <title>。為求一致，請使用 'title'。","duplicate ID":"同一個網頁裡有重複的元素 ID，是 bug。",engagement_time_msec:"使用者實際捲動、點擊的時間（不算發呆）。",event:"使用者在網站上做的任何一個動作，每一個動作都會記錄成一個事件。",event_name:"這個動作叫什麼名字，例如：page_view（瀏覽一頁）、click（點擊）、scroll（捲動）。",event_timestamp:"事件發生的精確時間（記到微秒等級）。",funnel:"漏斗。",ga_session_id:"訪客一次完整到訪的編號。同一人來兩天算兩個編號。",hreflang:"告訴搜尋引擎「這個頁面有英文／日文等其他語言版本」。",iframe:"內嵌的網頁框架（YouTube 嵌入、地圖都是 iframe）。",image_alt:"圖片的替代文字，給看不見圖片的人或搜尋引擎讀的說明文字。",impact:"影響。",lead:"潛在學生。",link_text:"連結上面寫的可見文字，例如「加入 LINE 群組」。",link_url:"連結實際指向的網址。",medium:"流量媒介，例如 organic（自然搜尋）、cpc（付費廣告）、referral（從別的網站點進來）。",meta:"網頁的中介資料。","meta description":"Google 搜尋結果標題下面那段說明文字。",name:"名稱欄位。",og:"Open Graph：控制分享到 LINE、Facebook 時顯示的標題/說明/圖片。","og:description":"分享時顯示的說明。","og:image":"分享時顯示的圖片。","og:title":"分享時顯示的標題。","og:url":"分享時的標準網址。",operating_system:"使用者用的系統，例如 Windows、Mac、Android、iOS。",page:"泛指網頁。",page_group:"自定義分類，把頁面歸類為「課程」「師資」「特色」等大群組。",page_location:"事件發生那一頁的網址。",page_referrer:"使用者到這頁之前，是從哪個網址點過來的。",page_title:"那一頁的標題（瀏覽器分頁上看到的文字）。",page_view:"使用者瀏覽一頁的紀錄。",pageview:"瀏覽次數。",priority:"優先級。",provenance:"資料出處：每個數字旁邊註明從哪張表來的。",robots:"搜尋引擎的爬蟲程式。","robots.txt":"放在網站根目錄的檔案，告訴 Google 哪些頁面可索引、哪些不行。",search_behavior_summary:"這是放「使用者搜尋什麼關鍵字之後，在網站做了什麼」資料的總表。",session:"使用者一次完整到訪。",session_key:"把「誰」跟「哪一次」併起來當唯一識別。例：`user_pseudo_id_1234_session_567`。",session_number:"使用者當天第幾次到訪。",site:"BigQuery 報表中對一個系所的統稱。注意本報告全程固定 `site='資訊科技與管理系'`。<br><br>例子：`WHERE site_name='資訊科技與管理系'`。",site_academy:"系所隸屬的學院。ITM 屬於人文社會學院。",site_id:"Google Analytics 給這個系所的內部編號。",site_link_clicks:"在 Google 搜尋結果裡，點擊了「同一個站的其他連結」的次數。",site_url:"系所首頁的網址，例如 ITM 的就是 `https://itm.tcu.edu.tw/`。",social_platform:"使用者從哪個社群平台來，例如 Facebook、LINE。",source:"流量來源，例如 google、facebook.com、(direct)。",sparkline:"小折線圖：KPI 卡裡的趨勢縮圖。",subdomain:"系所的子網域簡寫，ITM 就是 `itm`。",sum_position:"Google 搜尋結果「曝光在哪幾名」的加權平均。數字越小越前面。",telephone:"電話號碼欄位。",title:"網頁標題。","title-variant":"<title> 別名。同 'title' 處理。",total_behavior_events:"使用者搜尋後在站內繼續操作的總次數（瀏覽+點擊）。",unit_category:"97 個系所的分類，例如「教學單位」、「行政單位」。",url:"網址。",user:"訪客（已去識別化）。",user_pseudo_id:"給每位訪客的匿名編號（Google 為了保護隱私，把個人識別轉成亂碼）。",view:"瀏覽。",主題與實體清楚度:"首頁有沒有清楚告訴 Google「這是哪個學校、哪個系」。<br><br>📝 例子：好 = 標題寫「慈濟大學資訊科技與管理學系」；不好 = 只寫「首頁」或「歡迎光臨」。",內容結構與可擷取性:"Google 機器人能不能順利讀懂網站內容、把人話整理成答案。<br><br>📝 例子：好 = 內容有清楚的標題階層（H1、H2、H3）、有列表、有表格；不好 = 全部塞在一張大圖片裡，Google 看不到字。",單位網站管理人:"負責網頁內容的人（標題、聯絡電話、CTA、內容）。",工作階段:"Session — 使用者一次連續瀏覽的多個事件，通常 30 分鐘無活動後結束。<br><br>📝 例子：同學進來看完 5 頁然後離開，這段過程算一個「工作階段」。","技術 GEO":'網站有沒有安裝「結構化資料」標記讓 Google 認識學校與系所、有沒有 og 標籤讓分享時漂亮顯示。<br><br>📝 例子：好 = 安裝 JSON-LD 標記 `"@type": "EducationalOrganization"`；不好 = 完全沒有結構化資料，Google 只知道它是個「網站」但不知道是「大學系所」。',招生問題回答能力:"學生問「學什麼」「怎麼考」「學費多少」時，網站有沒有答案。<br><br>📝 例子：好 = 有「入學方式」頁面列出 115 學年度的入學管道與名額；不好 = 完全沒有提到如何入學。",證據與可信度:"網站有沒有提供「學生作品、競賽得獎、企業實習」這類證據讓人相信這個系很強。<br><br>📝 例子：好 = 列出「畢業生錄取半導體公司 12 位」「學生競賽獲獎 5 項」；不好 = 完全沒有數字、沒有案例。",過期:"頁面內容年份標記已過時，但 Google 還在推薦。對 SEO 是傷害。",電算中心技術支援:"負責資料查詢、報表維護、技術問題的人。",ARIA:"Accessible Rich Internet Applications。HTML 屬性集合，幫助輔助科技（如螢幕閱讀器）理解網頁內容。例如 aria-label 給元素加可讀標籤。",DOM:"Document Object Model。瀏覽器把 HTML 解析成的樹狀結構。JavaScript 透過 DOM API 操作頁面元素。","DOM ID":"HTML 元素的 id 屬性。同一頁面內 id 必須唯一。重複的 id 會破壞 JavaScript selector、ARIA 與無障礙工具。ITM 首頁偵測到 80 處重複。",Widget:"頁面中的一個互動小區塊（例如嵌入的 YouTube 影片、地圖、聯絡表單）。ITM 首頁有 26 個 iframe widget，全部缺 title 屬性。","application/ld+json":"JSON-LD 結構化資料在 HTML 中的 MIME 類型標記。出現這個 type 的 script 標籤就代表該網頁有寫結構化資料。","console.log":"JavaScript 內建的開發者工具函式，用來把訊息輸出到瀏覽器的 Console 面板。本報告的 gloss tooltip 系統靠它來除錯。",device_category:"BigQuery 欄位：裝置類別的另一個命名，等同 device。","favicon.ico":"瀏覽器分頁左上角顯示的小圖示（網站圖標）。Open Graph 的 og:image 指向 favicon.ico 不是好的實作，應該改為正式的 1200×630 招生主視覺圖。",null:"在 JavaScript / BigQuery 中表示「空值」或「不存在」。本報告用 null 代表「這項指標根本沒寫進網站原始碼」（例如 hreflang=null 表示從來沒有寫過這個標籤）。",parentOrganization:"在 schema.org 結構化資料裡，用來標示某個單位（例如資管系）隸屬於哪個較大的組織（例如慈濟大學）。這層關係幫助 Google 正確判斷機構階層。","schema.org/Department":"schema.org 提供的一種結構化資料類型。用 JSON 格式寫在網頁中，告訴 Google 這個頁面代表的是大學裡的「系所」單位。寫了之後，Google 搜尋結果能正確顯示系所名稱、地址、聯絡方式等。","<h1>":"HTML 標籤 <h1>。代表頁面的「主要標題」。SEO 與無障礙規範要求每頁只能有一個 <h1>，用來告訴搜尋引擎與螢幕閱讀器這個頁面的主題是什麼。","<h2>":"HTML 標籤 <h2>。代表頁面的「次要標題」。一頁通常會有多個 <h2> 用來區分章節。層級必須是 <h1> → <h2> → <h3>...，不能跳級。",contactPoint:"schema.org/Department JSON-LD 結構化資料中的欄位。用來寫這個系所的聯絡方式（電話、Email、地址、聯絡表單 URL）。","Hln_*":"範本自動產生的 HTML id 前綴（例如 Hln_a1b2）。同一個頁面上 id 必須唯一，重複的 id 會破壞 JavaScript selector、ARIA 與螢幕閱讀器的可訪問性。ITM 首頁偵測到 80 處這類 id 衝突。"},ss=/(?:(?:(?<![A-Za-z0-9_])EducationalOrganization(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])search_behavior_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])schema\.org\/Department(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])total_behavior_events(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])engagement_time_msec(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])application\/ld\+json(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])parentOrganization(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_units_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_unit_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])meta description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])operating_system(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_link_clicks(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Wayback Machine(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_gsc_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])device_category(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event_timestamp(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])social_platform(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session_number(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])user_pseudo_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ga_session_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_location(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_referrer(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])title-variant(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])unit_category(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ContactPoint(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])active_users(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])contactPoint(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])duplicate ID(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_academy(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])sum_position(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])click_class(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])console\.log(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])favicon\.ico(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session_key(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Department(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])acceptance(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event_name(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_group(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])provenance(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])robots\.txt(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])canonical(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])decisions(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])image_alt(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])link_text(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_view(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])sparkline(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])subdomain(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])telephone(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])內容結構與可擷取性(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])BigQuery(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])deadline(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])decision(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])docTitle(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])hreflang(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])link_url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:image(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])pageview(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])priority(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])主題與實體清楚度(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])招生問題回答能力(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])電算中心技術支援(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])FAQPage(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])JSON-LD(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Wayback(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])channel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])country(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])單位網站管理人(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])DOM ID(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Funnel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Widget(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])device(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])funnel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])iframe(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])impact(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])medium(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])robots(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])source(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])技術 GEO(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])證據與可信度(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Hln_\*(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])audit(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])<h1>(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])<h2>(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ARIA(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])JSON(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])city(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])lead(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])meta(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])name(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])null(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])user(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])view(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])工作階段(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CSV(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CTA(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CTR(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])DOM(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])FAQ(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GA4(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GEO(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GSC(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])KPI(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])SQL(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])URL(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])AI(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])H1(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])H2(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])OG(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P0(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P1(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P2(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])過期(?![A-Za-z0-9_])))/g,br=new Set;function sl(i){if(!i||!i.parentNode)return!0;const e=i.parentNode;if(e.nodeType!==1)return!1;const t=e.tagName;return!!(["SCRIPT","STYLE","NOSCRIPT","TEMPLATE"].includes(t)||e.classList&&e.classList.contains("gloss-tip")||e.classList&&e.classList.contains("gloss")||e.classList&&e.classList.contains("ev-table")||e.tagName==="A"&&e.getAttribute("href"))}function rl(i){const e=document.createTreeWalker(i,NodeFilter.SHOW_TEXT,{acceptNode:function(s){return!s.nodeValue||!s.nodeValue.trim()||sl(s)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),t=[];let n;for(;n=e.nextNode();)t.push(n);return t}function al(i){const e=i.nodeValue;ss.lastIndex=0;const t=[];let n;for(;(n=ss.exec(e))!==null;)t.push({start:n.index,end:n.index+n[0].length,term:n[0]});if(t.length===0)return null;const s=document.createDocumentFragment();let r=0;for(const a of t){a.start>r&&s.appendChild(document.createTextNode(e.substring(r,a.start)));const o=document.createElement("span");o.setAttribute("data-term",a.term),o.textContent=a.term,br.has(a.term)?o.className="gloss repeat":(br.add(a.term),o.className="gloss anchor"),s.appendChild(o),r=a.end}return r<e.length&&s.appendChild(document.createTextNode(e.substring(r))),s}function gi(){const i=rl(document.body);for(const e of i){if(!e.parentNode)continue;const t=al(e);t&&e.parentNode.replaceChild(t,e)}}let sn=null,ti=null,Ci=null;function wr(i){var e=document.createElement("div");return e.appendChild(document.createTextNode(i)),e.innerHTML}function Rr(i,e){if(!i)return;const t=Qs[i];if(!t)return;ti&&er(!0);const n=document.createElement("div");n.className="gloss-tip",n.innerHTML='<div class="tip-label">'+wr(i)+'（hover 說明）</div><div class="tip-def">'+wr(t)+'</div><div class="tip-db">📚 完整資料庫：附錄 A｜術語資料庫（v56）</div>',document.body.appendChild(n);const s=e.getBoundingClientRect();let r=s.left+window.scrollX,a=s.bottom+window.scrollY+6;requestAnimationFrame(()=>{const o=n.getBoundingClientRect();r+o.width>window.innerWidth-10&&(r=window.innerWidth-o.width-10),r<10&&(r=10),n.style.left=r+"px",n.style.top=a+"px",n.classList.add("show")}),ti=n}function er(i){if(Ci&&(clearTimeout(Ci),Ci=null),ti){const e=ti;i?(e.remove(),ti=null):Ci=setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>{e.remove(),ti=null},200)},100)}}function Li(){document.body.addEventListener("mouseover",function(i){const e=i.target.closest(".gloss");if(!e)return;const t=e.getAttribute("data-term");sn&&clearTimeout(sn),sn=setTimeout(()=>Rr(t,e),800)}),document.body.addEventListener("mouseout",function(i){i.target.closest(".gloss")&&(sn&&(clearTimeout(sn),sn=null),er(!1))}),document.body.addEventListener("click",function(i){const e=i.target.closest(".gloss");if(!e){er(!0);return}const t=e.getAttribute("data-term");sn&&clearTimeout(sn),Rr(t,e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",function(){gi(),Li(),window.WEBINSIGHT=window.WEBINSIGHT||{},window.WEBINSIGHT.gloss={autoWrapAll:gi,DB:Qs,PATTERN:ss,rebind:Li}}):(gi(),Li(),window.WEBINSIGHT=window.WEBINSIGHT||{},window.WEBINSIGHT.gloss={autoWrapAll:gi,DB:Qs,PATTERN:ss,rebind:Li});const ds=()=>{try{gi()}catch{}};window.addEventListener("hashchange",ds);const Cr=window.setView;window.setView=function(i){typeof Cr=="function"&&Cr(i),setTimeout(ds,50)};setTimeout(ds,200);setTimeout(ds,800);(function(){function i(){const e=document.querySelectorAll(".geo-pill");if(!e.length)return;let t="tech";try{t=localStorage.getItem("geo-view")||"tech"}catch{t="tech"}document.body.setAttribute("data-geo-view",t);function n(){e.forEach(function(s){const r=s.getAttribute("data-view")===t;s.classList.toggle("active",r),s.setAttribute("aria-pressed",String(r))})}n(),e.forEach(function(s){s.addEventListener("click",function(r){r.preventDefault(),r.stopPropagation(),t=this.getAttribute("data-view"),document.body.setAttribute("data-geo-view",t);try{localStorage.setItem("geo-view",t)}catch{}n()})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()})();function ol(i){document.body.className="view-"+i,document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("active",e.dataset.view===i)),window.scrollTo({top:0,behavior:"smooth"})}typeof window<"u"&&(window.setView=ol,window.spark=ao,window.evidence=oo,window.issue=tr,window.draw=Ln,window.init=nr);function ao(i){let e=Math.min(...i),t=Math.max(...i),n=t-e||1;return`<svg viewBox="0 0 100 34" preserveAspectRatio="none"><polyline points="${i.map((r,a)=>`${a*100/(i.length-1)},${32-(r-e)*28/n}`).join(" ")}"/></svg>`}function oo(i){return`<details class="evidence"><summary>查看數據證據與定義</summary><div class="egrid"><div><strong>資料表：</strong>${i.table}</div><div><strong>查詢代碼：</strong>${i.query}</div><div><strong>欄位：</strong>${i.fields}</div><div><strong>資料期間：</strong>${i.period}</div><div><strong>資料整理：</strong>電算中心技術支援</div><div><strong>限制：</strong>${i.limit}</div><div><strong>完整證據：</strong><a class="ev-link" href="#ev-reports" onclick="setView('evidence')">前往證據報表中心</a></div></div></details>`}function tr(i,e){return`<div class="issue"><div class="issue-head"><div><span class="pid">${i.id}</span><div class="issue-title">${i.title}</div></div><span class="${i.p==="P1"?"p1":"p2"}">${i.p}</span></div><div class="callout ${i.p==="P1"?"warn":""}"><strong>主管影響：</strong>${i.manager}</div><div class="owners">${e!=="it"?`<div class="owner unitbox"><strong>單位網站管理人</strong><br>頁面：${i.pages}<ul class="clean">${i.web.map(t=>`<li>${t}</li>`).join("")}</ul><strong>驗收：</strong>${i.accept}</div>`:""}${e!=="web"?`<div class="owner itbox"><strong>電算中心技術支援</strong><ul class="clean">${i.it.map(t=>`<li>${t}</li>`).join("")}</ul><strong>狀態：</strong>${i.status}</div>`:""}</div>${oo(i)}</div>`}function Ln(i,e,t,n){const s=document.getElementById(i),r=window.devicePixelRatio||1,a=s.clientWidth,o=240;s.width=a*r,s.height=o*r;let l=s.getContext("2d");l.scale(r,r),l.clearRect(0,0,a,o);let u={l:44,r:14,t:16,b:30},d=a-u.l-u.r,f=o-u.t-u.b,p=t.flat(),m=Math.min(...p),_=Math.max(...p);m===_&&(m=0,_=_||1);let g=(_-m)*.08;m=Math.max(0,m-g),_+=g;for(let h=0;h<5;h++){let c=u.t+h*f/4;l.strokeStyle="#e7edf3",l.beginPath(),l.moveTo(u.l,c),l.lineTo(a-u.r,c),l.stroke(),l.fillStyle="#667085",l.font="11px Arial",l.textAlign="right",l.fillText(Math.round(_-h*(_-m)/4),u.l-7,c+4)}e.forEach((h,c)=>{l.fillStyle="#667085",l.textAlign="center",l.fillText(h,u.l+c*d/(e.length-1),o-8)}),t.forEach((h,c)=>{l.strokeStyle=n[c],l.lineWidth=3,l.beginPath(),h.forEach((E,x)=>{let y=u.l+x*d/(e.length-1),C=u.t+f-(E-m)*f/(_-m);x?l.lineTo(y,C):l.moveTo(y,C)}),l.stroke()})}function ll(){const i=WEBINSIGHT.DATA.audience;if(!i)return;const e=i.total||i.source.reduce(function(r,a){return r+(a.sessions||0)},0),t=document.getElementById("audienceSource");if(t){const r=i.source.map(function(a){const o=e?Math.round((a.sessions||0)*1e3/e)/10:0,l=a.medium==="organic"?"teal":a.medium==="internal"?"orange":a.medium==="other"?"gray":"",u=o>0?o:.1;return'<div class="bar-row"><span>'+a.name+'</span><div class="bar-track"><div class="bar '+l+'" style="width:'+u+'%"></div></div><div class="bar-value">'+(a.sessions||0)+"｜"+o+"%</div></div>"}).join("");t.innerHTML=r}const n=document.getElementById("audienceDevice");if(n){const r=["#2f6fed","#0f8b8d","#d97706"];let a=0;const o=i.device.map(function(p,m){const _=e?Math.round((p.sessions||0)*1e3/e)/10:0,g=a;return a+=_,r[m%3]+" "+g+"% "+a+"%"}).join(", "),l=a,u=o+", #f4f7fb "+l+"% 100%",d={desktop:"桌機",mobile:"手機",tablet:"平板"};let f="";i.device.forEach(function(p){const m=e?Math.round((p.sessions||0)*1e3/e)/10:0,_=d[p.name]||p.name;f+="<div><span>"+_+"</span><b>"+(p.sessions||0)+"｜"+m+"%</b></div>"}),n.innerHTML='<div class="donut-wrap"><div class="donut" style="background:conic-gradient('+u+')" aria-label="device"><div class="donut-center">'+e+'<br>工作階段</div></div><div class="donut-legend">'+f+"</div></div>"}const s=document.getElementById("audienceCountry");s&&(s.innerHTML=i.country.map(function(r){const a=e?Math.round((r.sessions||0)*1e3/e)/10:0,o=r.name==="臺灣"?"green":r.name==="其他國家"?"gray":"teal",l=a>0?a:.1;return'<div class="bar-row"><span>'+r.name+'</span><div class="bar-track"><div class="bar '+o+'" style="width:'+l+'%"></div></div><div class="bar-value">'+(r.sessions||0)+"｜"+a+"%</div></div>"}).join(""))}function nr(){document.getElementById("kpis").innerHTML=WEBINSIGHT.DATA.kpis.map(i=>`<div class="metric"><div class="k">${i.k}</div><div class="v">${i.v}</div><div class="trend ${i.up?"up":"down"}">${i.trend} 較前週｜${i.avg} 較八週平均</div><div>${i.desc}</div><div class="spark">${ao(i.spark)}</div><div class="source">來源：${i.src}</div></div>`).join(""),document.getElementById("decisions").innerHTML=WEBINSIGHT.DATA.decisions.map(i=>`<div class="decision"><div><span class="${i.p==="P1"?"p1":"p2"}">${i.p}</span><br><span class="pid">${i.id}</span></div><div><strong>${i.title}</strong><br>${i.reason}</div><div class="who"><span class="tag unit">主責：${i.who}</span><br><span class="tag it">${i.support}</span><br>期限：${i.due}</div></div>`).join(""),document.getElementById("webIssues").innerHTML=WEBINSIGHT.DATA.issues.filter(i=>i.pages!=="無需修改頁面").map(i=>tr(i,"web")).join(""),document.getElementById("commonIssues").innerHTML=WEBINSIGHT.DATA.issues.map(i=>tr(i,"all")).join(""),document.getElementById("webTable").innerHTML=WEBINSIGHT.DATA.webRows.map(i=>`<tr><td><span class="pid">${i[0]}</span></td><td>${i[1]}</td><td class="num">${i[2]}</td><td class="num">${i[3]}</td><td class="num">${i[4]}</td><td>${i[5]}</td><td>${i[6]}</td></tr>`).join(""),document.getElementById("quality").innerHTML=WEBINSIGHT.DATA.quality.map(i=>`<div class="metric"><div class="k"><code>${i[0]}</code></div><div class="v" style="font-size:23px">${i[2]}</div><div>最大資料日期：${i[1]}</div><div class="source">${i[3]}</div></div>`).join(""),document.getElementById("queryTable").innerHTML=WEBINSIGHT.DATA.queries.map(i=>`<tr><td><code>${i[0]}</code></td><td><code>${i[1]}</code></td><td>${i[2]}</td><td>${i[3]}</td><td>${i[4]}</td><td>${i[5]}</td></tr>`).join(""),Ln("trafficChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.traffic.a,WEBINSIGHT.DATA.traffic.b],["#1d6fd8","#0f766e"]),Ln("searchChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.search.a,WEBINSIGHT.DATA.search.b],["#1d6fd8","#0f766e"]),Ln("funnelChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.funnel.a,WEBINSIGHT.DATA.funnel.b,WEBINSIGHT.DATA.funnel.c],["#1d6fd8","#0f766e","#a35b00"])}window.addEventListener("resize",()=>{Ln("trafficChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.traffic.a,WEBINSIGHT.DATA.traffic.b],["#1d6fd8","#0f766e"]),Ln("searchChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.search.a,WEBINSIGHT.DATA.search.b],["#1d6fd8","#0f766e"]),Ln("funnelChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.funnel.a,WEBINSIGHT.DATA.funnel.b,WEBINSIGHT.DATA.funnel.c],["#1d6fd8","#0f766e","#a35b00"])});ll();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",nr):nr();const de={blue:"#2f6fed",teal:"#0f8b8d",orange:"#d97706",green:"#1d8a5a",red:"#c2413b",gray:"#7b8797",navy:"#15334a",muted:"#647581",line:"#dce5e9"},Rt={t:20,r:80,b:36,l:64},Pi=window.devicePixelRatio||1;function en(i,e){if(!i)return null;const t=i.clientWidth||600;i.width=t*Pi,i.height=e*Pi,i.style.height=e+"px";const n=i.getContext("2d");return n.setTransform(Pi,0,0,Pi,0,0),{ctx:n,w:t,h:e}}function it(i,e,t,n){i.font=(t?"bold ":"")+e+'px "Microsoft JhengHei", -apple-system, sans-serif',n&&(i.fillStyle=n)}function xn(i,e,t){return{x:t.l,y:t.t,w:i-t.l-t.r,h:e-t.t-t.b}}function pr(i,e,t,n,s,r,a){i.strokeStyle=de.line,i.lineWidth=1,it(i,10,!1,de.muted),i.textAlign="right",i.textBaseline="middle";for(let l=0;l<=s;l++){const u=t+(n-t)*l/s,d=e.y+e.h-(u-t)/(n-t)*e.h;i.beginPath(),i.moveTo(e.x,d),i.lineTo(e.x+e.w,d),i.stroke(),i.fillText(Math.round(u).toLocaleString(),e.x-8,d)}i.textAlign="center",i.textBaseline="top";const o=a;for(let l=0;l<r.length;l+=o){const u=e.x+(r.length===1?e.w/2:l/(r.length-1)*e.w);i.fillText(r[l],u,e.y+e.h+8)}}function tn(i){return"<strong>主管判讀：</strong>"+i}function cl(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.trends;if(!i||!i.length)return;const e=document.getElementById("chartTrends"),t=en(e,240);if(!t)return;const{ctx:n,w:s,h:r}=t;n.clearRect(0,0,s,r);const a=xn(s,r,Rt),o=i.map(y=>y.week),l=i.map(y=>y.sessions),u=i.map(y=>y.clicks),d=Math.max(...l,...u),f=Math.ceil(d*1.15),p=i[i.length-1],m=i[i.length-2],_=m.sessions?(p.sessions-m.sessions)*100/m.sessions:0,g=m.clicks?(p.clicks-m.clicks)*100/m.clicks:0;pr(n,a,0,f,4,o,1);const h=(y,C)=>({x:a.x+(i.length===1?a.w/2:C/(i.length-1)*a.w),y:a.y+a.h-y/f*a.h});n.lineWidth=2.5,n.strokeStyle=de.blue,n.beginPath(),l.forEach((y,C)=>{const b=h(y,C);C===0?n.moveTo(b.x,b.y):n.lineTo(b.x,b.y)}),n.stroke(),n.strokeStyle=de.orange,n.beginPath(),u.forEach((y,C)=>{const b=h(y,C);C===0?n.moveTo(b.x,b.y):n.lineTo(b.x,b.y)}),n.stroke(),it(n,11,!0),n.textAlign="center",n.textBaseline="bottom",[l,u].forEach((y,C)=>{const b=h(y[y.length-1],y.length-1);n.fillStyle=C===0?de.blue:de.orange,n.beginPath(),n.arc(b.x,b.y,4,0,6.3),n.fill(),n.fillStyle=de.navy,n.fillText(y[y.length-1],b.x,b.y-8)}),n.textAlign="left",n.textBaseline="middle",n.fillStyle=de.blue,n.fillRect(a.x,a.y-18,14,3),n.fillStyle=de.navy,n.fillText("工作階段",a.x+20,a.y-17),n.fillStyle=de.orange,n.fillRect(a.x+100,a.y-18,14,3),n.fillStyle=de.navy,n.fillText("GSC 點擊",a.x+120,a.y-17);const c=Math.abs(_)>15,E=document.getElementById("scorecard-trends");E&&(E.innerHTML=[["本週 sessions",p.sessions,_,"blue"],["本週 GSC 點擊",p.clicks,g,"orange"],["本週 曝光",p.impressions,m.impressions?(p.impressions-m.impressions)*100/m.impressions:0,"teal"],["本週 使用者",p.users,m.users?(p.users-m.users)*100/m.users:0,"green"]].map(([y,C,b,w])=>{const k=b>0?"+":"";return'<div class="scorecard '+(Math.abs(b)>15?"warn":w)+'"><div class="sc-label">'+y+'</div><div class="sc-value">'+C.toLocaleString()+'</div><div class="sc-delta">'+k+b.toFixed(1)+"%</div></div>"}).join(""));const x=c?"本週工作階段 "+_.toFixed(1)+"% 是異常變化（>±15%），需確認是否有促因（招生季、課程異動、新聞事件）。GSC 點擊 "+g.toFixed(1)+"% — 一併注意搜尋成效是否同步變化。":"本週工作階段與搜尋點擊變動 < ±15%，屬正常波動。整體流量在 8 週內維持穩定，沒有大幅異常。";document.getElementById("insight-trends").innerHTML=tn(x)}function ul(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.brand_split,e=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.brand_top10,t=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.nonbrand_top10;if(!i||!i.length)return;const n=document.getElementById("chartBrandSplit"),s=en(n,240);if(!s)return;const{ctx:r,w:a,h:o}=s;r.clearRect(0,0,a,o);const l=xn(a,o,Rt),u=i.length,d=l.w/u*.6,f=l.w/u*.4;i.forEach((_,g)=>{const h=l.x+g*(d+f)+f/2,c=l.y+l.h,E=_.brand_pct/100*l.h,x=_.nonbrand_pct/100*l.h;r.fillStyle=de.blue,r.fillRect(h,c-E,d,E),r.fillStyle=de.gray,r.fillRect(h,c-E-x,d,x),it(r,12,!0,de.navy),r.textAlign="center",r.textBaseline="top",r.fillText(_.month,h+d/2,c+6),it(r,11,!0,"#fff"),r.textBaseline="middle",r.fillText(_.brand_pct+"%",h+d/2,c-E/2),r.fillText(_.nonbrand_pct+"%",h+d/2,c-E-x/2)}),r.fillStyle=de.blue,r.fillRect(l.x,l.y-18,14,10),it(r,11,!1,de.navy),r.textAlign="left",r.textBaseline="middle",r.fillText("品牌詞曝光",l.x+20,l.y-13),r.fillStyle=de.gray,r.fillRect(l.x+110,l.y-18,14,10),r.fillText("非品牌詞曝光",l.x+130,l.y-13);function p(_,g){if(!_||!_.length){document.getElementById(g).innerHTML='<tr><td colspan="3">無資料</td></tr>';return}document.getElementById(g).innerHTML='<thead><tr><th>關鍵字</th><th class="num">曝光</th><th class="num">點擊</th></tr></thead><tbody>'+_.map(h=>"<tr><td>"+(h.query||"(空白)")+'</td><td class="num">'+(h.imp||0).toLocaleString()+'</td><td class="num">'+(h.clicks||0)+"</td></tr>").join("")+"</tbody>"}p(e,"tableBrandTop"),p(t,"tableNonBrandTop");const m=i[i.length-1];document.getElementById("insight-brand").innerHTML=tn("本月品牌詞曝光 "+m.brand_pct+"% / 非品牌 "+m.nonbrand_pct+"%。"+(m.nonbrand_pct>80?"非品牌流量超過 80%，代表陌生訪客透過一般需求找到本站 — 是 SEO/廣告投入的好兆頭。":m.brand_pct>30?"品牌詞曝光偏高 (>30%)，需觀察是否過度依賴既有知名度。":"品牌 vs 非品牌比例平衡，建議持續優化兩端。"))}function dl(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.content_matrix;if(!i||!i.length)return;const e=document.getElementById("chartContentMatrix"),t=en(e,320);if(!t)return;const{ctx:n,w:s,h:r}=t;n.clearRect(0,0,s,r);const a=xn(s,r,Rt),o=Math.max(...i.map(m=>m.users)),l=Math.max(...i.map(m=>m.eng_sec)),u=a.x+a.w/2,d=a.y+a.h/2;n.fillStyle="rgba(31,138,90,0.05)",n.fillRect(u,a.y,a.w/2,a.h/2),n.fillStyle="rgba(217,119,6,0.05)",n.fillRect(a.x,a.y,a.w/2,a.h/2),n.fillStyle="rgba(217,119,6,0.07)",n.fillRect(u,d,a.w/2,a.h/2),n.fillStyle="rgba(194,65,59,0.05)",n.fillRect(a.x,d,a.w/2,a.h/2),n.strokeStyle=de.line,n.lineWidth=1,n.beginPath(),n.moveTo(a.x,a.y),n.lineTo(a.x,a.y+a.h),n.lineTo(a.x+a.w,a.y+a.h),n.stroke(),n.strokeStyle=de.muted,n.setLineDash([3,3]),n.beginPath(),n.moveTo(u,a.y),n.lineTo(u,a.y+a.h),n.stroke(),n.beginPath(),n.moveTo(a.x,d),n.lineTo(a.x+a.w,d),n.stroke(),n.setLineDash([]),it(n,11,!1,de.muted),n.textBaseline="top",n.textAlign="center",n.fillText("← 使用者少",a.x+a.w*.25,a.y+a.h+22),n.fillText("使用者多 →",a.x+a.w*.75,a.y+a.h+22),n.save(),n.translate(a.x-36,d),n.rotate(-Math.PI/2),n.fillText("互動時間低 →",0,0),n.restore(),i.forEach(m=>{const _=a.x+m.users/o*a.w,g=a.y+a.h-m.eng_sec/Math.max(l,1)*a.h,h=4+Math.sqrt(m.users)*1.5;let c;m.users>o/2&&m.eng_sec>l/2?c=de.green:m.users>o/2?c=de.orange:m.eng_sec>l/2?c=de.teal:c=de.gray,n.fillStyle=c,n.globalAlpha=.6,n.beginPath(),n.arc(_,g,h,0,6.3),n.fill(),n.globalAlpha=1,n.strokeStyle=c,n.lineWidth=1.5,n.stroke(),m.users>=8&&(it(n,9,!1,de.navy),n.textAlign="left",n.textBaseline="middle",n.fillText((m.title||"").slice(0,12),_+h+2,g))}),it(n,10,!0,de.muted),n.textAlign="center",n.textBaseline="top",n.fillText(`↑ 高互動 / 使用者少
內容好但難找`,a.x+a.w*.25,a.y+4),n.fillText(`↑ 高互動 / 使用者多
   內容旗艦`,a.x+a.w*.75,a.y+4),n.fillText(`↓ 低互動 / 使用者多
需改善 CTA`,a.x+a.w*.75,a.y+a.h-30),n.fillText(`↓ 低互動 / 使用者少
評估是否保留`,a.x+a.w*.25,a.y+a.h-30);const f=[...i].sort((m,_)=>_.users-m.users).slice(0,12);document.getElementById("tableContentList").innerHTML='<thead><tr><th>頁面</th><th class="num">使用者</th><th class="num">互動(s)</th></tr></thead><tbody>'+f.map(m=>"<tr><td>"+(m.title||"?")+'</td><td class="num">'+m.users+'</td><td class="num">'+(m.eng_sec||0).toFixed(0)+"</td></tr>").join("")+"</tbody>";const p=f[0];document.getElementById("insight-content").innerHTML=tn("本週最高流量頁面為「"+p.title+"」（"+p.users+" 人，互動 "+p.eng_sec.toFixed(0)+" 秒）。建議把該頁作為首頁導流入口，並觀察「互動高 / 流量低」象限的隱藏優質頁面以加強導引。")}function hl(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.traffic_quality;if(!i||!i.length)return;function e(a,o,l,u,d){const f=document.getElementById(a),p=en(f,240);if(!p)return;const{ctx:m,w:_,h:g}=p;m.clearRect(0,0,_,g);const h=xn(_,g,Rt),c=h.h/i.length,E=c*.7;i.forEach((x,y)=>{const C=o(x),b=h.y+y*c+(c-E)/2,w=C/l*h.w;m.fillStyle=d,m.fillRect(h.x,b,w,E),it(m,12,!1,de.navy),m.textAlign="right",m.textBaseline="middle",m.fillText(x.source,h.x-8,b+E/2),it(m,11,!0,de.navy),m.textAlign="left",m.fillText((C||0).toFixed(0)+u,h.x+w+4,b+E/2)}),it(m,9,!1,de.muted),m.textBaseline="top",m.textAlign="center";for(let x=1;x<=4;x++){const y=h.x+x/4*h.w,C=x/4*l;m.strokeStyle="#eef1f5",m.beginPath(),m.moveTo(y,h.y),m.lineTo(y,h.y+h.h),m.stroke(),m.fillText(Math.round(C).toLocaleString(),y,h.y+h.h+4)}}const t=Math.max(...i.map(a=>a.sessions)),n=Math.max(...i.map(a=>a.avg_eng_sec));e("chartTrafficCount",a=>a.sessions,t,"",de.blue),e("chartTrafficEng",a=>a.avg_eng_sec,n,"s",de.teal);const s=i[0],r=[...i].sort((a,o)=>o.avg_eng_sec-a.avg_eng_sec)[0];document.getElementById("insight-traffic").innerHTML=tn("量最大來源「"+s.source+"」("+s.sessions+" 工作階段)，互動最佳來源「"+r.source+"」("+r.avg_eng_sec.toFixed(0)+" 秒/使用者)。"+(s.source!==r.source?"兩者不同 → 應思考是否要把「互動最佳」來源加大曝光。":"兩者一致 → 主要流量來源品質良好。"))}function fl(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.ai_timeseries,e=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.ai_platforms;if(!i||!i.length)return;const t=document.getElementById("chartAITime"),n=en(t,240);if(!n)return;const{ctx:s,w:r,h:a}=n;s.clearRect(0,0,r,a);const o=xn(r,a,Rt),l=i.map(_=>(_.date||"").slice(5)),u=i.map(_=>_.sessions),d=Math.max(...u,1),f=Math.ceil(d*1.2);pr(s,o,0,f,4,l,1);const p=(_,g)=>({x:o.x+(i.length===1?o.w/2:g/(i.length-1)*o.w),y:o.y+o.h-_/f*o.h});s.strokeStyle=de.orange,s.lineWidth=2.5,s.beginPath(),u.forEach((_,g)=>{const h=p(_,g);g===0?s.moveTo(h.x,h.y):s.lineTo(h.x,h.y)}),s.stroke(),u.forEach((_,g)=>{const h=p(_,g);s.fillStyle=de.orange,s.beginPath(),s.arc(h.x,h.y,3,0,6.3),s.fill()}),it(s,11,!0,de.navy),s.textAlign="center",s.textBaseline="bottom",s.fillText(u[u.length-1],p(u[u.length-1],u.length-1).x,p(u[u.length-1],u.length-1).y-8),e&&e.length?document.getElementById("tableAIPlatforms").innerHTML='<thead><tr><th>平台</th><th class="num">Sessions</th><th class="num">使用者</th><th class="num">平均互動</th></tr></thead><tbody>'+e.map(_=>"<tr><td>"+_.platform+'</td><td class="num">'+_.sessions+'</td><td class="num">'+_.users+'</td><td class="num">'+_.avg_eng_sec.toFixed(0)+"s</td></tr>").join("")+"</tbody>":document.getElementById("tableAIPlatforms").innerHTML='<tr><td colspan="4">本週無 AI 來源流量</td></tr>';const m=u.reduce((_,g)=>_+g,0);document.getElementById("insight-ai").innerHTML=tn("近 "+i.length+" 天 AI 來源 (ChatGPT/Perplexity 等) 合計 "+m+" 工作階段。"+(m===0?"目前 AI 流量規模小，建議觀察 1–2 個月後再判斷趨勢。":m<5?"AI 流量剛起步，需持續監控是否會成為主要來源。":"AI 導流已可見趨勢，建議把 AI 推薦到達的 Top 頁面檢查內容時效性與 CTA。"))}function pl(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.cta_funnel;if(!i||!i.length)return;const e=document.getElementById("chartCTAFunnel"),t=en(e,280);if(!t)return;const{ctx:n,w:s,h:r}=t;n.clearRect(0,0,s,r);const a=xn(s,r,Rt),o=i[0].sessions,l=a.h/i.length;i.forEach((f,p)=>{const m=f.sessions/o,_=a.y+p*l+6,g=a.w*m,h=l-12,c=a.x+a.w/2,E=g,x=p<i.length-1?a.w*(i[p+1].sessions/o):g*.85;n.fillStyle=p===0?de.blue:p===i.length-1?de.green:de.teal,n.beginPath(),n.moveTo(c-E/2,_),n.lineTo(c+E/2,_),n.lineTo(c+x/2,_+h),n.lineTo(c-x/2,_+h),n.closePath(),n.fill(),it(n,13,!0,"#fff"),n.textAlign="center",n.textBaseline="middle",n.fillText(f.cta_type+" — "+f.sessions+" ("+(f.sessions/o*100).toFixed(0)+"%)",c,_+h/2)});const u=i[0],d=i[i.length-1];document.getElementById("insight-cta").innerHTML=tn("主要 CTA 動作：「"+u.cta_type+"」(最高 "+u.sessions+" 次)。最低轉換：「"+d.cta_type+"」("+d.sessions+" 次)。若下載文件 (PDF/DOC/XLSX) 點擊高，建議確認下載連結仍正常運作；若 Email/表單點擊偏低，需檢查聯絡表單是否易於填寫。")}function ml(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.international;if(!i||!i.length)return;const e=document.getElementById("chartIntl"),t=en(e,280);if(!t)return;const{ctx:n,w:s,h:r}=t;n.clearRect(0,0,s,r);const a=xn(s,r,Rt),o=a.h/i.length,l=Math.max(...i.map(_=>_.sessions)),u=Math.max(...i.map(_=>_.avg_eng_sec));i.forEach((_,g)=>{const h=a.y+g*o+4,c=(o-8)*.55,E=_.sessions/l*a.w*.85;n.fillStyle=de.blue,n.fillRect(a.x,h,E,c);const x=_.avg_eng_sec/u*a.w*.85;n.fillStyle=de.teal,n.fillRect(a.x,h+c+4,x,c*.5),it(n,12,!1,de.navy),n.textAlign="right",n.textBaseline="middle",n.fillText(_.country,a.x-8,h+c),it(n,10,!1,de.navy),n.textAlign="left",n.fillText(_.sessions+" sessions",a.x+E+4,h+c/2),n.fillText(_.avg_eng_sec.toFixed(0)+"s avg",a.x+x+4,h+c+4+c*.25)}),n.fillStyle=de.blue,n.fillRect(a.x,a.y-18,14,8),it(n,10,!1,de.navy),n.textBaseline="middle",n.textAlign="left",n.fillText("工作階段 (sessions)",a.x+20,a.y-14),n.fillStyle=de.teal,n.fillRect(a.x+160,a.y-18,14,8),n.fillText("平均互動時間 (s)",a.x+180,a.y-14);const d=i[0],f=i.filter(_=>_.country!=="Taiwan").reduce((_,g)=>_+g.sessions,0),p=i.reduce((_,g)=>_+g.sessions,0),m=p>0?f/p*100:0;document.getElementById("insight-intl").innerHTML=tn("主要訪客來源國家：「"+d.country+"」（"+d.sessions+" 工作階段，平均 "+d.avg_eng_sec.toFixed(0)+" 秒）。非本國流量合計 "+f+" 工作階段，佔 "+m.toFixed(1)+"%。")}function _l(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.user_paths;if(!i||!i.length)return;const e=document.getElementById("chartSankey"),t=en(e,320);if(!t)return;const{ctx:n,w:s,h:r}=t;n.clearRect(0,0,s,r);const a=[[],[],[]];i.forEach(c=>{c.stage1&&!a[0].includes(c.stage1)&&a[0].push(c.stage1),c.stage2&&!a[1].includes(c.stage2)&&a[1].push(c.stage2),c.stage3&&!a[2].includes(c.stage3)&&a[2].push(c.stage3)});const o={},l={},u={};i.forEach(c=>{o[c.stage1]=(o[c.stage1]||0)+c.sessions,c.stage2&&(l[c.stage2]=(l[c.stage2]||0)+c.sessions),c.stage3&&(u[c.stage3]=(u[c.stage3]||0)+c.sessions)});const d=Math.max(...Object.values(o)),f=[Rt.l,s/2,s-Rt.r],p=12,m=r-Rt.t-Rt.b-20,_=[{},{},{}];[a[0],a[1],a[2]].forEach((c,E)=>{const x=[o,l,u][E];let y=Rt.t+10;c.forEach(C=>{const b=x[C]/d*m*.9;_[E][C]={y,h:b,value:x[C]},y+=b+4})});const g={},h={};i.slice(0,8).forEach(c=>{g[c.stage1]||(g[c.stage1]=0),g[c.stage2]||(g[c.stage2]=0),h[c.stage2]||(h[c.stage2]=0),h[c.stage3]||(h[c.stage3]=0)}),i.slice(0,8).forEach(c=>{const E=_[0][c.stage1],x=_[1][c.stage2];if(!E||!x)return;const y=g[c.stage1]/o[c.stage1],C=E.y+y*E.h,b=c.sessions/o[c.stage1]*E.h,w=g[c.stage2]/l[c.stage2],k=x.y+w*x.h,M=c.sessions/l[c.stage2]*x.h;n.strokeStyle=de.blue,n.globalAlpha=.25,n.lineWidth=Math.max(1,c.sessions*.3),n.beginPath(),n.moveTo(f[0]+p,C+b/2),n.bezierCurveTo(f[0]+(f[1]-f[0])/2,C+b/2,f[1]-(f[1]-f[0])/2,k+M/2,f[1],k+M/2),n.stroke(),n.globalAlpha=1,g[c.stage1]+=c.sessions,g[c.stage2]+=c.sessions}),i.slice(0,8).forEach(c=>{if(!c.stage3)return;const E=_[1][c.stage2],x=_[2][c.stage3];if(!E||!x)return;const y=h[c.stage2]/l[c.stage2],C=E.y+y*E.h,b=c.sessions/l[c.stage2]*E.h,w=h[c.stage3]/u[c.stage3],k=x.y+w*x.h,M=c.sessions/u[c.stage3]*x.h;n.strokeStyle=de.teal,n.globalAlpha=.25,n.lineWidth=Math.max(1,c.sessions*.3),n.beginPath(),n.moveTo(f[1]+p,C+b/2),n.bezierCurveTo(f[1]+(f[2]-f[1])/2,C+b/2,f[2]-(f[2]-f[1])/2,k+M/2,f[2],k+M/2),n.stroke(),n.globalAlpha=1,h[c.stage2]+=c.sessions,h[c.stage3]+=c.sessions}),[0,1,2].forEach(c=>{const E=a[c],x=_[c],y=f[c],C=c===0?de.blue:c===1?de.teal:de.green;E.forEach(b=>{if(!x[b])return;n.fillStyle=C,n.fillRect(y,x[b].y,p,x[b].h),it(n,11,!1,de.navy),n.textAlign=c===2?"left":"right",n.textBaseline="middle";const w=c===2?y+p+4:y-4;n.fillText((b||"").slice(0,18)+" ("+x[b].value+")",w,x[b].y+x[b].h/2)})}),document.getElementById("insight-paths").innerHTML=tn("主要三段路徑："+(i[0].stage1||"?")+" → "+(i[0].stage2||"?")+" → "+(i[0].stage3||"?")+" ("+i[0].sessions+" sessions)。最常被拜訪的入口頁是「"+a[0].sort((c,E)=>o[E]-o[c])[0]+"」，建議評估此頁的 CTA 是否引導到高互動的內容頁。")}function gl(){const i=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.data_quality;if(!i||!i.weeks||!i.weeks.length)return;const e=document.getElementById("chartDataQuality"),t=en(e,240);if(!t)return;const{ctx:n,w:s,h:r}=t;n.clearRect(0,0,s,r);const a=xn(s,r,Rt),o=["empty_title","old_domain","dup_url","no_session","unknown_source"],l={empty_title:"空白標題",old_domain:"舊網域",dup_url:"URL 重複",no_session:"無 sessions",unknown_source:"未知來源"},u=[de.red,de.orange,de.blue,de.gray,de.teal],d=i.weeks.map((c,E)=>o.reduce((x,y)=>x+((i.categories[y]||[])[E]||0),0)),f=Math.max(...d,1),p=Math.ceil(f*1.15),m=a.w/i.weeks.length*.65,_=a.w/i.weeks.length*.35;pr(n,a,0,p,4,i.weeks,1),i.weeks.forEach((c,E)=>{let x=a.y+a.h;const y=a.x+E*(m+_)+_/2;o.forEach((C,b)=>{const w=(i.categories[C]||[])[E]||0;if(w===0)return;const k=w/p*a.h;n.fillStyle=u[b],n.fillRect(y,x-k,m,k),x-=k}),it(n,11,!0,de.navy),n.textAlign="center",n.textBaseline="bottom",d[E]>0&&n.fillText(d[E],y+m/2,a.y+a.h-d[E]/p*a.h-4)}),o.forEach((c,E)=>{const x=a.x+E*95;n.fillStyle=u[E],n.fillRect(x,a.y-18,14,8),it(n,10,!1,de.navy),n.textBaseline="middle",n.textAlign="left",n.fillText(l[c],x+18,a.y-14)});const g=d[d.length-1],h=d.slice(-3);document.getElementById("insight-dq").innerHTML=tn("本週問題總數 "+g+" 件。近 3 週趨勢："+h.join(" → ")+"。"+(h[2]<h[0]?"品質持續改善 → 治理措施生效。":h[2]>h[0]?"問題增加 → 需要找出原因並修復。":"穩定維持。")+"重點關注：空白標題（影響 SEO）與舊網域（破壞 canonical 一致性）。")}function vl(){WEBINSIGHT.DATA.sections&&(cl(),ul(),dl(),hl(),fl(),pl(),ml(),_l(),gl())}vl();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mr="160",xl=0,Lr=1,Sl=2,lo=1,El=2,$t=3,_n=0,Mt=1,Kt=2,fn=0,Pn=1,Pr=2,Dr=3,Ir=4,Ml=5,Rn=100,Tl=101,yl=102,Ur=103,Nr=104,Al=200,bl=201,wl=202,Rl=203,ir=204,sr=205,Cl=206,Ll=207,Pl=208,Dl=209,Il=210,Ul=211,Nl=212,Ol=213,Fl=214,Bl=0,zl=1,Gl=2,rs=3,Hl=4,kl=5,Vl=6,Wl=7,co=0,Xl=1,ql=2,pn=0,Zl=1,Yl=2,$l=3,Kl=4,jl=5,Jl=6,uo=300,ri=301,ai=302,rr=303,ar=304,hs=306,or=1e3,zt=1001,lr=1002,xt=1003,Or=1004,Es=1005,Pt=1006,Ql=1007,Si=1008,mn=1009,ec=1010,tc=1011,_r=1012,ho=1013,un=1014,dn=1015,Ei=1016,fo=1017,po=1018,Dn=1020,nc=1021,Gt=1023,ic=1024,sc=1025,In=1026,oi=1027,rc=1028,mo=1029,ac=1030,_o=1031,go=1033,Ms=33776,Ts=33777,ys=33778,As=33779,Fr=35840,Br=35841,zr=35842,Gr=35843,vo=36196,Hr=37492,kr=37496,Vr=37808,Wr=37809,Xr=37810,qr=37811,Zr=37812,Yr=37813,$r=37814,Kr=37815,jr=37816,Jr=37817,Qr=37818,ea=37819,ta=37820,na=37821,bs=36492,ia=36494,sa=36495,oc=36283,ra=36284,aa=36285,oa=36286,xo=3e3,Un=3001,lc=3200,cc=3201,uc=0,dc=1,It="",ut="srgb",Jt="srgb-linear",gr="display-p3",fs="display-p3-linear",as="linear",Ke="srgb",os="rec709",ls="p3",zn=7680,la=519,hc=512,fc=513,pc=514,So=515,mc=516,_c=517,gc=518,vc=519,ca=35044,ua="300 es",cr=1035,jt=2e3,cs=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,ur=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function xc(i,e){return(i%e+e)%e}function Rs(i,e,t){return(1-t)*i+t*e}function da(i){return(i&i-1)===0&&i!==0}function dr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,a,o,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u)}set(e,t,n,s,r,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],d=n[4],f=n[7],p=n[2],m=n[5],_=n[8],g=s[0],h=s[3],c=s[6],E=s[1],x=s[4],y=s[7],C=s[2],b=s[5],w=s[8];return r[0]=a*g+o*E+l*C,r[3]=a*h+o*x+l*b,r[6]=a*c+o*y+l*w,r[1]=u*g+d*E+f*C,r[4]=u*h+d*x+f*b,r[7]=u*c+d*y+f*w,r[2]=p*g+m*E+_*C,r[5]=p*h+m*x+_*b,r[8]=p*c+m*y+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return t*a*d-t*o*u-n*r*d+n*o*l+s*r*u-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=d*a-o*u,p=o*l-d*r,m=u*r-a*l,_=t*f+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*u-d*n)*g,e[2]=(o*n-s*a)*g,e[3]=p*g,e[4]=(d*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=m*g,e[7]=(n*l-u*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cs.makeScale(e,t)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cs=new Be;function Eo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sc(){const i=us("canvas");return i.style.display="block",i}const ha={};function xi(i){i in ha||(ha[i]=!0,console.warn(i))}const fa=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pa=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Di={[Jt]:{transfer:as,primaries:os,toReference:i=>i,fromReference:i=>i},[ut]:{transfer:Ke,primaries:os,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[fs]:{transfer:as,primaries:ls,toReference:i=>i.applyMatrix3(pa),fromReference:i=>i.applyMatrix3(fa)},[gr]:{transfer:Ke,primaries:ls,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pa),fromReference:i=>i.applyMatrix3(fa).convertLinearToSRGB()}},Ec=new Set([Jt,fs]),Xe={enabled:!0,_workingColorSpace:Jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ec.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Di[e].toReference,s=Di[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Di[i].primaries},getTransfer:function(i){return i===It?as:Di[i].transfer}};function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class Mo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=us("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mc=0;class To{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ps(s[a].image)):r.push(Ps(s[a]))}else r=Ps(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ps(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class Tt extends ci{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=zt,s=zt,r=Pt,a=Si,o=Gt,l=mn,u=Tt.DEFAULT_ANISOTROPY,d=It){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Mi(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Un?ut:It),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Un:xo}set encoding(e){xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Un?ut:It}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=uo;Tt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,u=l[0],d=l[4],f=l[8],p=l[1],m=l[5],_=l[9],g=l[2],h=l[6],c=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-g)<.01&&Math.abs(_-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+g)<.1&&Math.abs(_+h)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(m+1)/2,C=(c+1)/2,b=(d+p)/4,w=(f+g)/4,k=(_+h)/4;return x>y&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=w/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=k/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=k/r),this.set(n,s,r,t),this}let E=Math.sqrt((h-_)*(h-_)+(f-g)*(f-g)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(h-_)/E,this.y=(f-g)/E,this.z=(p-d)/E,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yc extends ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(xi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Un?ut:It),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new To(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yo extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ac extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],u=n[s+1],d=n[s+2],f=n[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==p||u!==m||d!==_){let h=1-o;const c=l*p+u*m+d*_+f*g,E=c>=0?1:-1,x=1-c*c;if(x>Number.EPSILON){const C=Math.sqrt(x),b=Math.atan2(C,c*E);h=Math.sin(h*b)/C,o=Math.sin(o*b)/C}const y=o*E;if(l=l*h+p*y,u=u*h+m*y,d=d*h+_*y,f=f*h+g*y,h===1-o){const C=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=C,u*=C,d*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],u=n[s+2],d=n[s+3],f=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+d*f+l*m-u*p,e[t+1]=l*_+d*p+u*f-o*m,e[t+2]=u*_+d*m+o*p-l*f,e[t+3]=d*_-o*f-l*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(s/2),f=o(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*d*f+u*m*_,this._y=u*m*f-p*d*_,this._z=u*d*_+p*m*f,this._w=u*d*f-p*m*_;break;case"YXZ":this._x=p*d*f+u*m*_,this._y=u*m*f-p*d*_,this._z=u*d*_-p*m*f,this._w=u*d*f+p*m*_;break;case"ZXY":this._x=p*d*f-u*m*_,this._y=u*m*f+p*d*_,this._z=u*d*_+p*m*f,this._w=u*d*f-p*m*_;break;case"ZYX":this._x=p*d*f-u*m*_,this._y=u*m*f+p*d*_,this._z=u*d*_-p*m*f,this._w=u*d*f+p*m*_;break;case"YZX":this._x=p*d*f+u*m*_,this._y=u*m*f+p*d*_,this._z=u*d*_-p*m*f,this._w=u*d*f-p*m*_;break;case"XZY":this._x=p*d*f-u*m*_,this._y=u*m*f-p*d*_,this._z=u*d*_+p*m*f,this._w=u*d*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],d=t[6],f=t[10],p=n+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,d=t._w;return this._x=n*d+a*o+s*u-r*l,this._y=s*d+a*l+r*o-n*u,this._z=r*d+a*u+n*l-s*o,this._w=a*d-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),f=Math.sin((1-t)*d)/u,p=Math.sin(t*d)/u;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*u+a*f-o*d,this.y=n+l*d+o*u-r*f,this.z=s+l*f+r*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ds.copy(this).projectOnVector(e),this.sub(Ds)}reflect(e){return this.sub(Ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new O,ma=new Ti;class yi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nt):Nt.fromBufferAttribute(r,a),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ii.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ii.copy(n.boundingBox)),Ii.applyMatrix4(e.matrixWorld),this.union(Ii)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),Ui.subVectors(this.max,fi),Hn.subVectors(e.a,fi),kn.subVectors(e.b,fi),Vn.subVectors(e.c,fi),rn.subVectors(kn,Hn),an.subVectors(Vn,kn),Mn.subVectors(Hn,Vn);let t=[0,-rn.z,rn.y,0,-an.z,an.y,0,-Mn.z,Mn.y,rn.z,0,-rn.x,an.z,0,-an.x,Mn.z,0,-Mn.x,-rn.y,rn.x,0,-an.y,an.x,0,-Mn.y,Mn.x,0];return!Is(t,Hn,kn,Vn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!Is(t,Hn,kn,Vn,Ui))?!1:(Ni.crossVectors(rn,an),t=[Ni.x,Ni.y,Ni.z],Is(t,Hn,kn,Vn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new O,new O,new O,new O,new O,new O,new O,new O],Nt=new O,Ii=new yi,Hn=new O,kn=new O,Vn=new O,rn=new O,an=new O,Mn=new O,fi=new O,Ui=new O,Ni=new O,Tn=new O;function Is(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Tn.fromArray(i,r);const o=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),l=e.dot(Tn),u=t.dot(Tn),d=n.dot(Tn);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const bc=new yi,pi=new O,Us=new O;class ps{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pi.subVectors(e,this.center);const t=pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pi.copy(e.center).add(Us)),this.expandByPoint(pi.copy(e.center).sub(Us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xt=new O,Ns=new O,Oi=new O,on=new O,Os=new O,Fi=new O,Fs=new O;class Ao{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ns.copy(e).add(t).multiplyScalar(.5),Oi.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Ns);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Oi),o=on.dot(this.direction),l=-on.dot(Oi),u=on.lengthSq(),d=Math.abs(1-a*a);let f,p,m,_;if(d>0)if(f=a*l-o,p=a*o-l,_=r*d,f>=0)if(p>=-_)if(p<=_){const g=1/d;f*=g,p*=g,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+u}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+u;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+u;else p<=-_?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+u):p<=_?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+u):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+u);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ns).addScaledVector(Oi,p),m}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const n=Xt.dot(this.direction),s=Xt.dot(Xt)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(n=(e.min.x-p.x)*u,s=(e.max.x-p.x)*u):(n=(e.max.x-p.x)*u,s=(e.min.x-p.x)*u),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,s,r){Os.subVectors(t,e),Fi.subVectors(n,e),Fs.crossVectors(Os,Fi);let a=this.direction.dot(Fs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,e);const l=o*this.direction.dot(Fi.crossVectors(on,Fi));if(l<0)return null;const u=o*this.direction.dot(Os.cross(on));if(u<0||l+u>a)return null;const d=-o*on.dot(Fs);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,s,r,a,o,l,u,d,f,p,m,_,g,h){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u,d,f,p,m,_,g,h)}set(e,t,n,s,r,a,o,l,u,d,f,p,m,_,g,h){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=s,c[1]=r,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=p,c[3]=m,c[7]=_,c[11]=g,c[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Wn.setFromMatrixColumn(e,0).length(),r=1/Wn.setFromMatrixColumn(e,1).length(),a=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=a*d,m=a*f,_=o*d,g=o*f;t[0]=l*d,t[4]=-l*f,t[8]=u,t[1]=m+_*u,t[5]=p-g*u,t[9]=-o*l,t[2]=g-p*u,t[6]=_+m*u,t[10]=a*l}else if(e.order==="YXZ"){const p=l*d,m=l*f,_=u*d,g=u*f;t[0]=p+g*o,t[4]=_*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-_,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*d,m=l*f,_=u*d,g=u*f;t[0]=p-g*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*d,t[9]=g-p*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*d,m=a*f,_=o*d,g=o*f;t[0]=l*d,t[4]=_*u-m,t[8]=p*u+g,t[1]=l*f,t[5]=g*u+p,t[9]=m*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*u,_=o*l,g=o*u;t[0]=l*d,t[4]=g-p*f,t[8]=_*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-u*d,t[6]=m*f+_,t[10]=p-g*f}else if(e.order==="XZY"){const p=a*l,m=a*u,_=o*l,g=o*u;t[0]=l*d,t[4]=-f,t[8]=u*d,t[1]=p*f+g,t[5]=a*d,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*d,t[10]=g*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wc,e,Rc)}lookAt(e,t,n){const s=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),ln.crossVectors(n,bt),ln.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),ln.crossVectors(n,bt)),ln.normalize(),Bi.crossVectors(bt,ln),s[0]=ln.x,s[4]=Bi.x,s[8]=bt.x,s[1]=ln.y,s[5]=Bi.y,s[9]=bt.y,s[2]=ln.z,s[6]=Bi.z,s[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],d=n[1],f=n[5],p=n[9],m=n[13],_=n[2],g=n[6],h=n[10],c=n[14],E=n[3],x=n[7],y=n[11],C=n[15],b=s[0],w=s[4],k=s[8],M=s[12],A=s[1],H=s[5],W=s[9],ie=s[13],L=s[2],B=s[6],G=s[10],q=s[14],V=s[3],X=s[7],Z=s[11],Q=s[15];return r[0]=a*b+o*A+l*L+u*V,r[4]=a*w+o*H+l*B+u*X,r[8]=a*k+o*W+l*G+u*Z,r[12]=a*M+o*ie+l*q+u*Q,r[1]=d*b+f*A+p*L+m*V,r[5]=d*w+f*H+p*B+m*X,r[9]=d*k+f*W+p*G+m*Z,r[13]=d*M+f*ie+p*q+m*Q,r[2]=_*b+g*A+h*L+c*V,r[6]=_*w+g*H+h*B+c*X,r[10]=_*k+g*W+h*G+c*Z,r[14]=_*M+g*ie+h*q+c*Q,r[3]=E*b+x*A+y*L+C*V,r[7]=E*w+x*H+y*B+C*X,r[11]=E*k+x*W+y*G+C*Z,r[15]=E*M+x*ie+y*q+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],f=e[6],p=e[10],m=e[14],_=e[3],g=e[7],h=e[11],c=e[15];return _*(+r*l*f-s*u*f-r*o*p+n*u*p+s*o*m-n*l*m)+g*(+t*l*m-t*u*p+r*a*p-s*a*m+s*u*d-r*l*d)+h*(+t*u*f-t*o*m-r*a*f+n*a*m+r*o*d-n*u*d)+c*(-s*o*d-t*l*f+t*o*p+s*a*f-n*a*p+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],p=e[10],m=e[11],_=e[12],g=e[13],h=e[14],c=e[15],E=f*h*u-g*p*u+g*l*m-o*h*m-f*l*c+o*p*c,x=_*p*u-d*h*u-_*l*m+a*h*m+d*l*c-a*p*c,y=d*g*u-_*f*u+_*o*m-a*g*m-d*o*c+a*f*c,C=_*f*l-d*g*l-_*o*p+a*g*p+d*o*h-a*f*h,b=t*E+n*x+s*y+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=E*w,e[1]=(g*p*r-f*h*r-g*s*m+n*h*m+f*s*c-n*p*c)*w,e[2]=(o*h*r-g*l*r+g*s*u-n*h*u-o*s*c+n*l*c)*w,e[3]=(f*l*r-o*p*r-f*s*u+n*p*u+o*s*m-n*l*m)*w,e[4]=x*w,e[5]=(d*h*r-_*p*r+_*s*m-t*h*m-d*s*c+t*p*c)*w,e[6]=(_*l*r-a*h*r-_*s*u+t*h*u+a*s*c-t*l*c)*w,e[7]=(a*p*r-d*l*r+d*s*u-t*p*u-a*s*m+t*l*m)*w,e[8]=y*w,e[9]=(_*f*r-d*g*r-_*n*m+t*g*m+d*n*c-t*f*c)*w,e[10]=(a*g*r-_*o*r+_*n*u-t*g*u-a*n*c+t*o*c)*w,e[11]=(d*o*r-a*f*r-d*n*u+t*f*u+a*n*m-t*o*m)*w,e[12]=C*w,e[13]=(d*g*s-_*f*s+_*n*p-t*g*p-d*n*h+t*f*h)*w,e[14]=(_*o*s-a*g*s-_*n*l+t*g*l+a*n*h-t*o*h)*w,e[15]=(a*f*s-d*o*s+d*n*l-t*f*l-a*n*p+t*o*p)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,u=r*a,d=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,d*o+n,d*l-s*a,0,u*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,d=a+a,f=o+o,p=r*u,m=r*d,_=r*f,g=a*d,h=a*f,c=o*f,E=l*u,x=l*d,y=l*f,C=n.x,b=n.y,w=n.z;return s[0]=(1-(g+c))*C,s[1]=(m+y)*C,s[2]=(_-x)*C,s[3]=0,s[4]=(m-y)*b,s[5]=(1-(p+c))*b,s[6]=(h+E)*b,s[7]=0,s[8]=(_+x)*w,s[9]=(h-E)*w,s[10]=(1-(p+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Wn.set(s[0],s[1],s[2]).length();const a=Wn.set(s[4],s[5],s[6]).length(),o=Wn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ot.copy(this);const u=1/r,d=1/a,f=1/o;return Ot.elements[0]*=u,Ot.elements[1]*=u,Ot.elements[2]*=u,Ot.elements[4]*=d,Ot.elements[5]*=d,Ot.elements[6]*=d,Ot.elements[8]*=f,Ot.elements[9]*=f,Ot.elements[10]*=f,t.setFromRotationMatrix(Ot),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=jt){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let m,_;if(o===jt)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===cs)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jt){const l=this.elements,u=1/(t-e),d=1/(n-s),f=1/(a-r),p=(t+e)*u,m=(n+s)*d;let _,g;if(o===jt)_=(a+r)*f,g=-2*f;else if(o===cs)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wn=new O,Ot=new ct,wc=new O(0,0,0),Rc=new O(1,1,1),ln=new O,Bi=new O,bt=new O,_a=new ct,ga=new Ti;class ms{constructor(e=0,t=0,n=0,s=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _a.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ga.setFromEuler(this),this.setFromQuaternion(ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cc=0;const va=new O,Xn=new Ti,qt=new ct,zi=new O,mi=new O,Lc=new O,Pc=new Ti,xa=new O(1,0,0),Sa=new O(0,1,0),Ea=new O(0,0,1),Dc={type:"added"},Ic={type:"removed"};class yt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new O,t=new ms,n=new Ti,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Be}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return va.copy(e).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zi.copy(e):zi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(mi,zi,this.up):qt.lookAt(zi,mi,this.up),this.quaternion.setFromRotationMatrix(qt),s&&(qt.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix(qt),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,Lc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,Pc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new O(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new O,Zt=new O,Bs=new O,Yt=new O,qn=new O,Zn=new O,Ma=new O,zs=new O,Gs=new O,Hs=new O;let Gi=!1;class Bt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ft.subVectors(e,t),s.cross(Ft);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ft.subVectors(s,t),Zt.subVectors(n,t),Bs.subVectors(e,t);const a=Ft.dot(Ft),o=Ft.dot(Zt),l=Ft.dot(Bs),u=Zt.dot(Zt),d=Zt.dot(Bs),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(u*l-o*d)*p,_=(a*d-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yt)===null?!1:Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,n,s,r,a,o,l){return Gi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gi=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Yt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yt.x),l.addScaledVector(a,Yt.y),l.addScaledVector(o,Yt.z),l)}static isFrontFacing(e,t,n,s){return Ft.subVectors(n,t),Zt.subVectors(e,t),Ft.cross(Zt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Ft.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Gi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gi=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;qn.subVectors(s,n),Zn.subVectors(r,n),zs.subVectors(e,n);const l=qn.dot(zs),u=Zn.dot(zs);if(l<=0&&u<=0)return t.copy(n);Gs.subVectors(e,s);const d=qn.dot(Gs),f=Zn.dot(Gs);if(d>=0&&f<=d)return t.copy(s);const p=l*f-d*u;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(qn,a);Hs.subVectors(e,r);const m=qn.dot(Hs),_=Zn.dot(Hs);if(_>=0&&m<=_)return t.copy(r);const g=m*u-l*_;if(g<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(n).addScaledVector(Zn,o);const h=d*_-m*f;if(h<=0&&f-d>=0&&m-_>=0)return Ma.subVectors(r,s),o=(f-d)/(f-d+(m-_)),t.copy(s).addScaledVector(Ma,o);const c=1/(h+g+p);return a=g*c,o=p*c,t.copy(n).addScaledVector(qn,a).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=xc(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ks(a,r,e+1/3),this.g=ks(a,r,e),this.b=ks(a,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=wo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Xe.fromWorkingColorSpace(pt.copy(this),e),Math.round(Et(pt.r*255,0,255))*65536+Math.round(Et(pt.g*255,0,255))*256+Math.round(Et(pt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,s=pt.g,r=pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=ut){Xe.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,s=pt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Hi);const n=Rs(cn.h,Hi.h,t),s=Rs(cn.s,Hi.s,t),r=Rs(cn.l,Hi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new He;He.NAMES=wo;let Uc=0;class Ai extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Pn,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ir,this.blendDst=sr,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ir&&(n.blendSrc=this.blendSrc),this.blendDst!==sr&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ro extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new O,ki=new qe;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ki.fromBufferAttribute(this,t),ki.applyMatrix3(e),this.setXY(t,ki.x,ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}}class Co extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lo extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nn extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nc=0;const Lt=new ct,Vs=new yt,Yn=new O,wt=new yi,_i=new yi,lt=new O;class nn extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eo(e)?Lo:Co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_i.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(wt.min,_i.min),wt.expandByPoint(lt),lt.addVectors(wt.max,_i.max),wt.expandByPoint(lt)):(wt.expandByPoint(_i.min),wt.expandByPoint(_i.max))}wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)lt.fromBufferAttribute(o,u),l&&(Yn.fromBufferAttribute(e,u),lt.add(Yn)),s=Math.max(s,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let A=0;A<o;A++)u[A]=new O,d[A]=new O;const f=new O,p=new O,m=new O,_=new qe,g=new qe,h=new qe,c=new O,E=new O;function x(A,H,W){f.fromArray(s,A*3),p.fromArray(s,H*3),m.fromArray(s,W*3),_.fromArray(a,A*2),g.fromArray(a,H*2),h.fromArray(a,W*2),p.sub(f),m.sub(f),g.sub(_),h.sub(_);const ie=1/(g.x*h.y-h.x*g.y);isFinite(ie)&&(c.copy(p).multiplyScalar(h.y).addScaledVector(m,-g.y).multiplyScalar(ie),E.copy(m).multiplyScalar(g.x).addScaledVector(p,-h.x).multiplyScalar(ie),u[A].add(c),u[H].add(c),u[W].add(c),d[A].add(E),d[H].add(E),d[W].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,H=y.length;A<H;++A){const W=y[A],ie=W.start,L=W.count;for(let B=ie,G=ie+L;B<G;B+=3)x(n[B+0],n[B+1],n[B+2])}const C=new O,b=new O,w=new O,k=new O;function M(A){w.fromArray(r,A*3),k.copy(w);const H=u[A];C.copy(H),C.sub(w.multiplyScalar(w.dot(H))).normalize(),b.crossVectors(k,H);const ie=b.dot(d[A])<0?-1:1;l[A*4]=C.x,l[A*4+1]=C.y,l[A*4+2]=C.z,l[A*4+3]=ie}for(let A=0,H=y.length;A<H;++A){const W=y[A],ie=W.start,L=W.count;for(let B=ie,G=ie+L;B<G;B+=3)M(n[B+0]),M(n[B+1]),M(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,u=new O,d=new O,f=new O;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),g=e.getX(p+1),h=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,h),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,h),o.add(d),l.add(d),u.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,f=o.normalized,p=new u.constructor(l.length*d);let m=0,_=0;for(let g=0,h=l.length;g<h;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*d;for(let c=0;c<d;c++)p[_++]=u[m++]}return new Ut(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=e(l,n);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let d=0,f=u.length;d<f;d++){const p=u[d],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,p=u.length;f<p;f++){const m=u[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const d=s[u];this.setAttribute(u,d.clone(t))}const r=e.morphAttributes;for(const u in r){const d=[],f=r[u];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new ct,yn=new Ao,Vi=new ps,ya=new O,$n=new O,Kn=new O,jn=new O,Ws=new O,Wi=new O,Xi=new qe,qi=new qe,Zi=new qe,Aa=new O,ba=new O,wa=new O,Yi=new O,$i=new O;class hn extends yt{constructor(e=new nn,t=new Ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Wi.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const d=o[l],f=r[l];d!==0&&(Ws.fromBufferAttribute(f,e),a?Wi.addScaledVector(Ws,d):Wi.addScaledVector(Ws.sub(t),d))}t.add(Wi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),yn.copy(e.ray).recast(e.near),!(Vi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Vi,ya)===null||yn.origin.distanceToSquared(ya)>(e.far-e.near)**2))&&(Ta.copy(r).invert(),yn.copy(e.ray).applyMatrix4(Ta),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const h=p[_],c=a[h.materialIndex],E=Math.max(h.start,m.start),x=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let y=E,C=x;y<C;y+=3){const b=o.getX(y),w=o.getX(y+1),k=o.getX(y+2);s=Ki(this,c,e,n,u,d,f,b,w,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let h=_,c=g;h<c;h+=3){const E=o.getX(h),x=o.getX(h+1),y=o.getX(h+2);s=Ki(this,a,e,n,u,d,f,E,x,y),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const h=p[_],c=a[h.materialIndex],E=Math.max(h.start,m.start),x=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let y=E,C=x;y<C;y+=3){const b=y,w=y+1,k=y+2;s=Ki(this,c,e,n,u,d,f,b,w,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let h=_,c=g;h<c;h+=3){const E=h,x=h+1,y=h+2;s=Ki(this,a,e,n,u,d,f,E,x,y),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function Oc(i,e,t,n,s,r,a,o){let l;if(e.side===Mt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===_n,o),l===null)return null;$i.copy(o),$i.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo($i);return u<t.near||u>t.far?null:{distance:u,point:$i.clone(),object:i}}function Ki(i,e,t,n,s,r,a,o,l,u){i.getVertexPosition(o,$n),i.getVertexPosition(l,Kn),i.getVertexPosition(u,jn);const d=Oc(i,e,t,n,$n,Kn,jn,Yi);if(d){s&&(Xi.fromBufferAttribute(s,o),qi.fromBufferAttribute(s,l),Zi.fromBufferAttribute(s,u),d.uv=Bt.getInterpolation(Yi,$n,Kn,jn,Xi,qi,Zi,new qe)),r&&(Xi.fromBufferAttribute(r,o),qi.fromBufferAttribute(r,l),Zi.fromBufferAttribute(r,u),d.uv1=Bt.getInterpolation(Yi,$n,Kn,jn,Xi,qi,Zi,new qe),d.uv2=d.uv1),a&&(Aa.fromBufferAttribute(a,o),ba.fromBufferAttribute(a,l),wa.fromBufferAttribute(a,u),d.normal=Bt.getInterpolation(Yi,$n,Kn,jn,Aa,ba,wa,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new O,materialIndex:0};Bt.getNormal($n,Kn,jn,f.normal),d.face=f}return d}class bi extends nn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],d=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(d,3)),this.setAttribute("uv",new Nn(f,2));function _(g,h,c,E,x,y,C,b,w,k,M){const A=y/w,H=C/k,W=y/2,ie=C/2,L=b/2,B=w+1,G=k+1;let q=0,V=0;const X=new O;for(let Z=0;Z<G;Z++){const Q=Z*H-ie;for(let ee=0;ee<B;ee++){const z=ee*A-W;X[g]=z*E,X[h]=Q*x,X[c]=L,u.push(X.x,X.y,X.z),X[g]=0,X[h]=0,X[c]=b>0?1:-1,d.push(X.x,X.y,X.z),f.push(ee/w),f.push(1-Z/k),q+=1}}for(let Z=0;Z<k;Z++)for(let Q=0;Q<w;Q++){const ee=p+Q+B*Z,z=p+Q+B*(Z+1),Y=p+(Q+1)+B*(Z+1),oe=p+(Q+1)+B*Z;l.push(ee,z,oe),l.push(z,Y,oe),V+=6}o.addGroup(m,V,M),m+=V,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function vt(i){const e={};for(let t=0;t<i.length;t++){const n=li(i[t]);for(const s in n)e[s]=n[s]}return e}function Fc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Po(i){return i.getRenderTarget()===null?i.outputColorSpace:Xe.workingColorSpace}const Bc={clone:li,merge:vt};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=Fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Do extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=jt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Do{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=-90,Qn=1;class Hc extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dt(Jn,Qn,e,t);s.layers=this.layers,this.add(s);const r=new Dt(Jn,Qn,e,t);r.layers=this.layers,this.add(r);const a=new Dt(Jn,Qn,e,t);a.layers=this.layers,this.add(a);const o=new Dt(Jn,Qn,e,t);o.layers=this.layers,this.add(o);const l=new Dt(Jn,Qn,e,t);l.layers=this.layers,this.add(l);const u=new Dt(Jn,Qn,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const u of t)this.remove(u);if(e===jt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Io extends Tt{constructor(e,t,n,s,r,a,o,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,s,r,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kc extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(xi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Un?ut:It),this.texture=new Io(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bi(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:fn});r.uniforms.tEquirect.value=t;const a=new hn(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Pt),new Hc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Xs=new O,Vc=new O,Wc=new Be;class bn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Xs.subVectors(n,t).cross(Vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wc.getNormalMatrix(e),s=this.coplanarPoint(Xs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new ps,ji=new O;class Uo{constructor(e=new bn,t=new bn,n=new bn,s=new bn,r=new bn,a=new bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jt){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],d=s[5],f=s[6],p=s[7],m=s[8],_=s[9],g=s[10],h=s[11],c=s[12],E=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,p-u,h-m,y-c).normalize(),n[1].setComponents(l+r,p+u,h+m,y+c).normalize(),n[2].setComponents(l+a,p+d,h+_,y+E).normalize(),n[3].setComponents(l-a,p-d,h-_,y-E).normalize(),n[4].setComponents(l-o,p-f,h-g,y-x).normalize(),t===jt)n[5].setComponents(l+o,p+f,h+g,y+x).normalize();else if(t===cs)n[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ji.x=s.normal.x>0?e.max.x:e.min.x,ji.y=s.normal.y>0?e.max.y:e.min.y,ji.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ji)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function No(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xc(i,e){const t=e.isWebGL2,n=new WeakMap;function s(u,d){const f=u.array,p=u.usage,m=f.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,f,p),u.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function r(u,d,f){const p=d.array,m=d._updateRange,_=d.updateRanges;if(i.bindBuffer(f,u),m.count===-1&&_.length===0&&i.bufferSubData(f,0,p),_.length!==0){for(let g=0,h=_.length;g<h;g++){const c=_[g];t?i.bufferSubData(f,c.start*p.BYTES_PER_ELEMENT,p,c.start,c.count):i.bufferSubData(f,c.start*p.BYTES_PER_ELEMENT,p.subarray(c.start,c.start+c.count))}d.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const p=n.get(u);(!p||p.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);if(f===void 0)n.set(u,s(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,u,d),f.version=u.version}}return{get:a,remove:o,update:l}}class vr extends nn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),u=o+1,d=l+1,f=e/o,p=t/l,m=[],_=[],g=[],h=[];for(let c=0;c<d;c++){const E=c*p-a;for(let x=0;x<u;x++){const y=x*f-r;_.push(y,-E,0),g.push(0,0,1),h.push(x/o),h.push(1-c/l)}}for(let c=0;c<l;c++)for(let E=0;E<o;E++){const x=E+u*c,y=E+u*(c+1),C=E+1+u*(c+1),b=E+1+u*c;m.push(x,y,b),m.push(y,C,b)}this.setIndex(m),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}var qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$c=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,su=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ru=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,au=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,od=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ih=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ah=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ph=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_h=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Th=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:qc,alphahash_pars_fragment:Zc,alphamap_fragment:Yc,alphamap_pars_fragment:$c,alphatest_fragment:Kc,alphatest_pars_fragment:jc,aomap_fragment:Jc,aomap_pars_fragment:Qc,batching_pars_vertex:eu,batching_vertex:tu,begin_vertex:nu,beginnormal_vertex:iu,bsdfs:su,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:ou,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:cu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:hu,color_pars_vertex:fu,color_vertex:pu,common:mu,cube_uv_reflection_fragment:_u,defaultnormal_vertex:gu,displacementmap_pars_vertex:vu,displacementmap_vertex:xu,emissivemap_fragment:Su,emissivemap_pars_fragment:Eu,colorspace_fragment:Mu,colorspace_pars_fragment:Tu,envmap_fragment:yu,envmap_common_pars_fragment:Au,envmap_pars_fragment:bu,envmap_pars_vertex:wu,envmap_physical_pars_fragment:zu,envmap_vertex:Ru,fog_vertex:Cu,fog_pars_vertex:Lu,fog_fragment:Pu,fog_pars_fragment:Du,gradientmap_pars_fragment:Iu,lightmap_fragment:Uu,lightmap_pars_fragment:Nu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:Fu,lights_pars_begin:Bu,lights_toon_fragment:Gu,lights_toon_pars_fragment:Hu,lights_phong_fragment:ku,lights_phong_pars_fragment:Vu,lights_physical_fragment:Wu,lights_physical_pars_fragment:Xu,lights_fragment_begin:qu,lights_fragment_maps:Zu,lights_fragment_end:Yu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:ju,logdepthbuf_vertex:Ju,map_fragment:Qu,map_pars_fragment:ed,map_particle_fragment:td,map_particle_pars_fragment:nd,metalnessmap_fragment:id,metalnessmap_pars_fragment:sd,morphcolor_vertex:rd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:ud,normal_pars_fragment:dd,normal_pars_vertex:hd,normal_vertex:fd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:gd,iridescence_pars_fragment:vd,opaque_fragment:xd,packing:Sd,premultiplied_alpha_fragment:Ed,project_vertex:Md,dithering_fragment:Td,dithering_pars_fragment:yd,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:bd,shadowmap_pars_fragment:wd,shadowmap_pars_vertex:Rd,shadowmap_vertex:Cd,shadowmask_pars_fragment:Ld,skinbase_vertex:Pd,skinning_pars_vertex:Dd,skinning_vertex:Id,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:Od,tonemapping_fragment:Fd,tonemapping_pars_fragment:Bd,transmission_fragment:zd,transmission_pars_fragment:Gd,uv_pars_fragment:Hd,uv_pars_vertex:kd,uv_vertex:Vd,worldpos_vertex:Wd,background_vert:Xd,background_frag:qd,backgroundCube_vert:Zd,backgroundCube_frag:Yd,cube_vert:$d,cube_frag:Kd,depth_vert:jd,depth_frag:Jd,distanceRGBA_vert:Qd,distanceRGBA_frag:eh,equirect_vert:th,equirect_frag:nh,linedashed_vert:ih,linedashed_frag:sh,meshbasic_vert:rh,meshbasic_frag:ah,meshlambert_vert:oh,meshlambert_frag:lh,meshmatcap_vert:ch,meshmatcap_frag:uh,meshnormal_vert:dh,meshnormal_frag:hh,meshphong_vert:fh,meshphong_frag:ph,meshphysical_vert:mh,meshphysical_frag:_h,meshtoon_vert:gh,meshtoon_frag:vh,points_vert:xh,points_frag:Sh,shadow_vert:Eh,shadow_frag:Mh,sprite_vert:Th,sprite_frag:yh},ne={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},kt={basic:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:vt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:vt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:vt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:vt([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:vt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:vt([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:vt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:vt([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:vt([ne.common,ne.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:vt([ne.lights,ne.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};kt.physical={uniforms:vt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ji={r:0,b:0,g:0};function Ah(i,e,t,n,s,r,a){const o=new He(0);let l=r===!0?0:1,u,d,f=null,p=0,m=null;function _(h,c){let E=!1,x=c.isScene===!0?c.background:null;x&&x.isTexture&&(x=(c.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),E=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===hs)?(d===void 0&&(d=new hn(new bi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:li(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(x.colorSpace)!==Ke,(f!==x||p!==x.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=x,p=x.version,m=i.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new hn(new vr(2,2),new Bn({name:"BackgroundMaterial",uniforms:li(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(x.colorSpace)!==Ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,p=x.version,m=i.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function g(h,c){h.getRGB(Ji,Po(i)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,c,a)}return{getClearColor:function(){return o},setClearColor:function(h,c=1){o.set(h),l=c,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,g(o,l)},render:_}}function bh(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=h(null);let u=l,d=!1;function f(L,B,G,q,V){let X=!1;if(a){const Z=g(q,G,B);u!==Z&&(u=Z,m(u.object)),X=c(L,q,G,V),X&&E(L,q,G,V)}else{const Z=B.wireframe===!0;(u.geometry!==q.id||u.program!==G.id||u.wireframe!==Z)&&(u.geometry=q.id,u.program=G.id,u.wireframe=Z,X=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,k(L,B,G,q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,B,G){const q=G.wireframe===!0;let V=o[L.id];V===void 0&&(V={},o[L.id]=V);let X=V[B.id];X===void 0&&(X={},V[B.id]=X);let Z=X[q];return Z===void 0&&(Z=h(p()),X[q]=Z),Z}function h(L){const B=[],G=[],q=[];for(let V=0;V<s;V++)B[V]=0,G[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:q,object:L,attributes:{},index:null}}function c(L,B,G,q){const V=u.attributes,X=B.attributes;let Z=0;const Q=G.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const Y=V[ee];let oe=X[ee];if(oe===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;Z++}return u.attributesNum!==Z||u.index!==q}function E(L,B,G,q){const V={},X=B.attributes;let Z=0;const Q=G.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let Y=X[ee];Y===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),V[ee]=oe,Z++}u.attributes=V,u.attributesNum=Z,u.index=q}function x(){const L=u.newAttributes;for(let B=0,G=L.length;B<G;B++)L[B]=0}function y(L){C(L,0)}function C(L,B){const G=u.newAttributes,q=u.enabledAttributes,V=u.attributeDivisors;G[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),V[L]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),V[L]=B)}function b(){const L=u.newAttributes,B=u.enabledAttributes;for(let G=0,q=B.length;G<q;G++)B[G]!==L[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function w(L,B,G,q,V,X,Z){Z===!0?i.vertexAttribIPointer(L,B,G,V,X):i.vertexAttribPointer(L,B,G,q,V,X)}function k(L,B,G,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=q.attributes,X=G.getAttributes(),Z=B.defaultAttributeValues;for(const Q in X){const ee=X[Q];if(ee.location>=0){let z=V[Q];if(z===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){const Y=z.normalized,oe=z.itemSize,_e=t.get(z);if(_e===void 0)continue;const me=_e.buffer,Re=_e.type,Le=_e.bytesPerElement,Me=n.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||z.gpuType===ho);if(z.isInterleavedBufferAttribute){const Ge=z.data,D=Ge.stride,mt=z.offset;if(Ge.isInstancedInterleavedBuffer){for(let ve=0;ve<ee.locationSize;ve++)C(ee.location+ve,Ge.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let ve=0;ve<ee.locationSize;ve++)y(ee.location+ve);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ve=0;ve<ee.locationSize;ve++)w(ee.location+ve,oe/ee.locationSize,Re,Y,D*Le,(mt+oe/ee.locationSize*ve)*Le,Me)}else{if(z.isInstancedBufferAttribute){for(let Ge=0;Ge<ee.locationSize;Ge++)C(ee.location+Ge,z.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Ge=0;Ge<ee.locationSize;Ge++)y(ee.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Ge=0;Ge<ee.locationSize;Ge++)w(ee.location+Ge,oe/ee.locationSize,Re,Y,oe*Le,oe/ee.locationSize*Ge*Le,Me)}}else if(Z!==void 0){const Y=Z[Q];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(ee.location,Y);break;case 3:i.vertexAttrib3fv(ee.location,Y);break;case 4:i.vertexAttrib4fv(ee.location,Y);break;default:i.vertexAttrib1fv(ee.location,Y)}}}}b()}function M(){W();for(const L in o){const B=o[L];for(const G in B){const q=B[G];for(const V in q)_(q[V].object),delete q[V];delete B[G]}delete o[L]}}function A(L){if(o[L.id]===void 0)return;const B=o[L.id];for(const G in B){const q=B[G];for(const V in q)_(q[V].object),delete q[V];delete B[G]}delete o[L.id]}function H(L){for(const B in o){const G=o[B];if(G[L.id]===void 0)continue;const q=G[L.id];for(const V in q)_(q[V].object),delete q[V];delete G[L.id]}}function W(){ie(),d=!0,u!==l&&(u=l,m(u.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:y,disableUnusedAttributes:b}}function wh(i,e,t,n){const s=n.isWebGL2;let r;function a(d){r=d}function o(d,f){i.drawArrays(r,d,f),t.update(f,r,1)}function l(d,f,p){if(p===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,d,f,p),t.update(f,r,p)}function u(d,f,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<p;_++)this.render(d[_],f[_]);else{m.multiDrawArraysWEBGL(r,d,0,f,0,p);let _=0;for(let g=0;g<p;g++)_+=f[g];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function Rh(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),c=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,y=a||e.has("OES_texture_float"),C=x&&y,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:h,maxVaryings:c,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:b}}function Ch(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new bn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){const _=f.clippingPlanes,g=f.clipIntersection,h=f.clipShadows,c=i.get(f);if(!s||_===null||_.length===0||r&&!h)r?d(null):u();else{const E=r?0:n,x=E*4;let y=c.clippingState||null;l.value=y,y=d(_,p,x,m);for(let C=0;C!==x;++C)y[C]=t[C];c.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,p,m,_){const g=f!==null?f.length:0;let h=null;if(g!==0){if(h=l.value,_!==!0||h===null){const c=m+g*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<c)&&(h=new Float32Array(c));for(let x=0,y=m;x!==g;++x,y+=4)a.copy(f[x]).applyMatrix4(E,o),a.normal.toArray(h,y),h[y+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,h}}function Lh(i){let e=new WeakMap;function t(a,o){return o===rr?a.mapping=ri:o===ar&&(a.mapping=ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===rr||o===ar)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new kc(l.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ph extends Do{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Ra=[.125,.215,.35,.446,.526,.582],Cn=20,qs=new Ph,Ca=new He;let Zs=null,Ys=0,$s=0;const wn=(1+Math.sqrt(5))/2,ei=1/wn,La=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,wn,ei),new O(0,wn,-ei),new O(ei,0,wn),new O(-ei,0,wn),new O(wn,ei,0),new O(-wn,ei,0)];class Pa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zs=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs,Ys,$s),e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ei,format:Gt,colorSpace:Jt,depthBuffer:!1},s=Da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Da(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dh(r)),this._blurMaterial=Ih(r,e,t)}return s}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,n,s){const o=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ca),d.toneMapping=pn,d.autoClear=!1;const m=new Ro({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),_=new hn(new bi,m);let g=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,g=!0):(m.color.copy(Ca),g=!0);for(let c=0;c<6;c++){const E=c%3;E===0?(o.up.set(0,l[c],0),o.lookAt(u[c],0,0)):E===1?(o.up.set(0,0,l[c]),o.lookAt(0,u[c],0)):(o.up.set(0,l[c],0),o.lookAt(0,0,u[c]));const x=this._cubeSize;Qi(s,E*x,c>2?x:0,x,x),d.setRenderTarget(s),g&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ri||e.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Qi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=La[(s-1)%La.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new hn(this._lodPlanes[s],u),p=u.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Cn-1),g=r/_,h=isFinite(r)?1+Math.floor(d*g):Cn;h>Cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Cn}`);const c=[];let E=0;for(let w=0;w<Cn;++w){const k=w/g,M=Math.exp(-k*k/2);c.push(M),w===0?E+=M:w<h&&(E+=2*M)}for(let w=0;w<c.length;w++)c[w]=c[w]/E;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=c,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-n;const y=this._sizeLods[s],C=3*y*(s>x-ni?s-x+ni:0),b=4*(this._cubeSize-y);Qi(t,C,b,3*y,2*y),l.setRenderTarget(t),l.render(f,qs)}}function Dh(i){const e=[],t=[],n=[];let s=i;const r=i-ni+1+Ra.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ni?l=Ra[a-i+ni-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,f=1+u,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,g=3,h=2,c=1,E=new Float32Array(g*_*m),x=new Float32Array(h*_*m),y=new Float32Array(c*_*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,k=b>2?0:-1,M=[w,k,0,w+2/3,k,0,w+2/3,k+1,0,w,k,0,w+2/3,k+1,0,w,k+1,0];E.set(M,g*_*b),x.set(p,h*_*b);const A=[b,b,b,b,b,b];y.set(A,c*_*b)}const C=new nn;C.setAttribute("position",new Ut(E,g)),C.setAttribute("uv",new Ut(x,h)),C.setAttribute("faceIndex",new Ut(y,c)),e.push(C),s>ni&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Da(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ih(i,e,t){const n=new Float32Array(Cn),s=new O(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ia(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ua(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function xr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uh(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===rr||l===ar,d=l===ri||l===ai;if(u||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Pa(i)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||d&&f&&s(f)){t===null&&(t=new Pa(i));const p=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Nh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Oh(i,e,t,n){const s={},r=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let h=0,c=g.length;h<c;h++)e.remove(g[h])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let h=0,c=g.length;h<c;h++)e.update(g[h],i.ARRAY_BUFFER)}}function u(f){const p=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let x=0,y=E.length;x<y;x+=3){const C=E[x+0],b=E[x+1],w=E[x+2];p.push(C,b,b,w,w,C)}}else if(_!==void 0){const E=_.array;g=_.version;for(let x=0,y=E.length/3-1;x<y;x+=3){const C=x+0,b=x+1,w=x+2;p.push(C,b,b,w,w,C)}}else return;const h=new(Eo(p)?Lo:Co)(p,1);h.version=g;const c=r.get(f);c&&e.remove(c),r.set(f,h)}function d(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Fh(i,e,t,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function d(m,_){i.drawElements(r,_,o,m*l),t.update(_,r,1)}function f(m,_,g){if(g===0)return;let h,c;if(s)h=i,c="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[c](r,_,o,m*l,g),t.update(_,r,g)}function p(m,_,g){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<g;c++)this.render(m[c]/l,_[c]);else{h.multiDrawElementsWEBGL(r,_,0,o,m,0,g);let c=0;for(let E=0;E<g;E++)c+=_[E];t.update(c,r,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function Bh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zh(i,e){return i[0]-e[0]}function Gh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Hh(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,d,f){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let h=r.get(d);if(h===void 0||h.count!==g){let B=function(){ie.dispose(),r.delete(d),d.removeEventListener("dispose",B)};var m=B;h!==void 0&&h.texture.dispose();const x=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let A=d.attributes.position.count*M,H=1;A>e.maxTextureSize&&(H=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const W=new Float32Array(A*H*4*g),ie=new yo(W,A,H,g);ie.type=dn,ie.needsUpdate=!0;const L=M*4;for(let G=0;G<g;G++){const q=b[G],V=w[G],X=k[G],Z=A*H*4*G;for(let Q=0;Q<q.count;Q++){const ee=Q*L;x===!0&&(a.fromBufferAttribute(q,Q),W[Z+ee+0]=a.x,W[Z+ee+1]=a.y,W[Z+ee+2]=a.z,W[Z+ee+3]=0),y===!0&&(a.fromBufferAttribute(V,Q),W[Z+ee+4]=a.x,W[Z+ee+5]=a.y,W[Z+ee+6]=a.z,W[Z+ee+7]=0),C===!0&&(a.fromBufferAttribute(X,Q),W[Z+ee+8]=a.x,W[Z+ee+9]=a.y,W[Z+ee+10]=a.z,W[Z+ee+11]=X.itemSize===4?a.w:1)}}h={count:g,texture:ie,size:new qe(A,H)},r.set(d,h),d.addEventListener("dispose",B)}let c=0;for(let x=0;x<p.length;x++)c+=p[x];const E=d.morphTargetsRelative?1:1-c;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}else{const _=p===void 0?0:p.length;let g=n[d.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[d.id]=g}for(let y=0;y<_;y++){const C=g[y];C[0]=y,C[1]=p[y]}g.sort(Gh);for(let y=0;y<8;y++)y<_&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(zh);const h=d.morphAttributes.position,c=d.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const C=o[y],b=C[0],w=C[1];b!==Number.MAX_SAFE_INTEGER&&w?(h&&d.getAttribute("morphTarget"+y)!==h[b]&&d.setAttribute("morphTarget"+y,h[b]),c&&d.getAttribute("morphNormal"+y)!==c[b]&&d.setAttribute("morphNormal"+y,c[b]),s[y]=w,E+=w):(h&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),c&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),s[y]=0)}const x=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function kh(i,e,t,n){let s=new WeakMap;function r(l){const u=n.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}class Oo extends Tt{constructor(e,t,n,s,r,a,o,l,u,d){if(d=d!==void 0?d:In,d!==In&&d!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===In&&(n=un),n===void 0&&d===oi&&(n=Dn),super(null,s,r,a,o,l,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fo=new Tt,Bo=new Oo(1,1);Bo.compareFunction=So;const zo=new yo,Go=new Ac,Ho=new Io,Na=[],Oa=[],Fa=new Float32Array(16),Ba=new Float32Array(9),za=new Float32Array(4);function ui(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Na[s];if(r===void 0&&(r=new Float32Array(s),Na[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _s(i,e){let t=Oa[e];t===void 0&&(t=new Int32Array(e),Oa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function Xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function Zh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;za.set(n),i.uniformMatrix2fv(this.addr,!1,za),rt(t,n)}}function Yh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Ba.set(n),i.uniformMatrix3fv(this.addr,!1,Ba),rt(t,n)}}function $h(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Fa.set(n),i.uniformMatrix4fv(this.addr,!1,Fa),rt(t,n)}}function Kh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function Jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function Qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function rf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Bo:Fo;t.setTexture2D(e||r,s)}function af(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Go,s)}function of(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ho,s)}function lf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zo,s)}function cf(i){switch(i){case 5126:return Vh;case 35664:return Wh;case 35665:return Xh;case 35666:return qh;case 35674:return Zh;case 35675:return Yh;case 35676:return $h;case 5124:case 35670:return Kh;case 35667:case 35671:return jh;case 35668:case 35672:return Jh;case 35669:case 35673:return Qh;case 5125:return ef;case 36294:return tf;case 36295:return nf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}function uf(i,e){i.uniform1fv(this.addr,e)}function df(i,e){const t=ui(e,this.size,2);i.uniform2fv(this.addr,t)}function hf(i,e){const t=ui(e,this.size,3);i.uniform3fv(this.addr,t)}function ff(i,e){const t=ui(e,this.size,4);i.uniform4fv(this.addr,t)}function pf(i,e){const t=ui(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mf(i,e){const t=ui(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _f(i,e){const t=ui(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gf(i,e){i.uniform1iv(this.addr,e)}function vf(i,e){i.uniform2iv(this.addr,e)}function xf(i,e){i.uniform3iv(this.addr,e)}function Sf(i,e){i.uniform4iv(this.addr,e)}function Ef(i,e){i.uniform1uiv(this.addr,e)}function Mf(i,e){i.uniform2uiv(this.addr,e)}function Tf(i,e){i.uniform3uiv(this.addr,e)}function yf(i,e){i.uniform4uiv(this.addr,e)}function Af(i,e,t){const n=this.cache,s=e.length,r=_s(t,s);st(n,r)||(i.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Fo,r[a])}function bf(i,e,t){const n=this.cache,s=e.length,r=_s(t,s);st(n,r)||(i.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Go,r[a])}function wf(i,e,t){const n=this.cache,s=e.length,r=_s(t,s);st(n,r)||(i.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ho,r[a])}function Rf(i,e,t){const n=this.cache,s=e.length,r=_s(t,s);st(n,r)||(i.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zo,r[a])}function Cf(i){switch(i){case 5126:return uf;case 35664:return df;case 35665:return hf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return _f;case 5124:case 35670:return gf;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return Sf;case 5125:return Ef;case 36294:return Mf;case 36295:return Tf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Rf}}class Lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cf(t.type)}}class Pf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cf(t.type)}}class Df{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function Ga(i,e){i.seq.push(e),i.map[e.id]=e}function If(i,e,t){const n=i.name,s=n.length;for(Ks.lastIndex=0;;){const r=Ks.exec(n),a=Ks.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Ga(t,u===void 0?new Lf(o,i,e):new Pf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Df(o),Ga(t,f)),t=f}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);If(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ha(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Uf=37297;let Nf=0;function Of(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ff(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===ls&&t===os?n="LinearDisplayP3ToLinearSRGB":e===os&&t===ls&&(n="LinearSRGBToLinearDisplayP3"),i){case Jt:case fs:return[n,"LinearTransferOETF"];case ut:case gr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ka(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Of(i.getShaderSource(e),a)}else return s}function Bf(i,e){const t=Ff(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zf(i,e){let t;switch(e){case Zl:t="Linear";break;case Yl:t="Reinhard";break;case $l:t="OptimizedCineon";break;case Kl:t="ACESFilmic";break;case Jl:t="AgX";break;case jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function Hf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ii).join(`
`)}function kf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ii(i){return i!==""}function Va(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wf=/^[ \t]*#include +<([\w\d./]+)>/gm;function hr(i){return i.replace(Wf,qf)}const Xf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qf(i,e){let t=De[e];if(t===void 0){const n=Xf.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hr(t)}const Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(i){return i.replace(Zf,Yf)}function Yf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qa(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $f(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===El?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function Kf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Jf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case co:e="ENVMAP_BLENDING_MULTIPLY";break;case Xl:e="ENVMAP_BLENDING_MIX";break;case ql:e="ENVMAP_BLENDING_ADD";break}return e}function Qf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ep(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$f(t),u=Kf(t),d=jf(t),f=Jf(t),p=Qf(t),m=t.isWebGL2?"":Gf(t),_=Hf(t),g=kf(r),h=s.createProgram();let c,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ii).join(`
`),c.length>0&&(c+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ii).join(`
`),E.length>0&&(E+=`
`)):(c=[qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),E=[m,qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?De.tonemapping_pars_fragment:"",t.toneMapping!==pn?zf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Bf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ii).join(`
`)),a=hr(a),a=Va(a,t),a=Wa(a,t),o=hr(o),o=Va(o,t),o=Wa(o,t),a=Xa(a),o=Xa(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const y=x+c+a,C=x+E+o,b=Ha(s,s.VERTEX_SHADER,y),w=Ha(s,s.FRAGMENT_SHADER,C);s.attachShader(h,b),s.attachShader(h,w),t.index0AttributeName!==void 0?s.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(h,0,"position"),s.linkProgram(h);function k(W){if(i.debug.checkShaderErrors){const ie=s.getProgramInfoLog(h).trim(),L=s.getShaderInfoLog(b).trim(),B=s.getShaderInfoLog(w).trim();let G=!0,q=!0;if(s.getProgramParameter(h,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,h,b,w);else{const V=ka(s,b,"vertex"),X=ka(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(h,s.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+V+`
`+X)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(L===""||B==="")&&(q=!1);q&&(W.diagnostics={runnable:G,programLog:ie,vertexShader:{log:L,prefix:c},fragmentShader:{log:B,prefix:E}})}s.deleteShader(b),s.deleteShader(w),M=new is(s,h),A=Vf(s,h)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let A;this.getAttributes=function(){return A===void 0&&k(this),A};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(h,Uf)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nf++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=b,this.fragmentShader=w,this}let tp=0;class np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ip(e),t.set(e,n)),n}}class ip{constructor(e){this.id=tp++,this.code=e,this.usedTimes=0}}function sp(i,e,t,n,s,r,a){const o=new bo,l=new np,u=[],d=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function h(M,A,H,W,ie){const L=W.fog,B=ie.geometry,G=M.isMeshStandardMaterial?W.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),V=q&&q.mapping===hs?q.image.height:null,X=_[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q=Z!==void 0?Z.length:0;let ee=0;B.morphAttributes.position!==void 0&&(ee=1),B.morphAttributes.normal!==void 0&&(ee=2),B.morphAttributes.color!==void 0&&(ee=3);let z,Y,oe,_e;if(X){const _t=kt[X];z=_t.vertexShader,Y=_t.fragmentShader}else z=M.vertexShader,Y=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const me=i.getRenderTarget(),Re=ie.isInstancedMesh===!0,Le=ie.isBatchedMesh===!0,Me=!!M.map,Ge=!!M.matcap,D=!!q,mt=!!M.aoMap,ve=!!M.lightMap,be=!!M.bumpMap,he=!!M.normalMap,je=!!M.displacementMap,Ie=!!M.emissiveMap,T=!!M.metalnessMap,v=!!M.roughnessMap,U=M.anisotropy>0,j=M.clearcoat>0,K=M.iridescence>0,J=M.sheen>0,fe=M.transmission>0,ae=U&&!!M.anisotropyMap,ce=j&&!!M.clearcoatMap,Ee=j&&!!M.clearcoatNormalMap,Ue=j&&!!M.clearcoatRoughnessMap,$=K&&!!M.iridescenceMap,Ve=K&&!!M.iridescenceThicknessMap,ze=J&&!!M.sheenColorMap,Ae=J&&!!M.sheenRoughnessMap,ge=!!M.specularMap,ue=!!M.specularColorMap,Pe=!!M.specularIntensityMap,ke=fe&&!!M.transmissionMap,Qe=fe&&!!M.thicknessMap,Oe=!!M.gradientMap,te=!!M.alphaMap,R=M.alphaTest>0,se=!!M.alphaHash,re=!!M.extensions,Te=!!B.attributes.uv1,xe=!!B.attributes.uv2,Ze=!!B.attributes.uv3;let Ye=pn;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ye=i.toneMapping),{isWebGL2:d,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Le,instancing:Re,instancingColor:Re&&ie.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Jt,map:Me,matcap:Ge,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:V,aoMap:mt,lightMap:ve,bumpMap:be,normalMap:he,displacementMap:p&&je,emissiveMap:Ie,normalMapObjectSpace:he&&M.normalMapType===dc,normalMapTangentSpace:he&&M.normalMapType===uc,metalnessMap:T,roughnessMap:v,anisotropy:U,anisotropyMap:ae,clearcoat:j,clearcoatMap:ce,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ue,iridescence:K,iridescenceMap:$,iridescenceThicknessMap:Ve,sheen:J,sheenColorMap:ze,sheenRoughnessMap:Ae,specularMap:ge,specularColorMap:ue,specularIntensityMap:Pe,transmission:fe,transmissionMap:ke,thicknessMap:Qe,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===Pn,alphaMap:te,alphaTest:R,alphaHash:se,combine:M.combine,mapUv:Me&&g(M.map.channel),aoMapUv:mt&&g(M.aoMap.channel),lightMapUv:ve&&g(M.lightMap.channel),bumpMapUv:be&&g(M.bumpMap.channel),normalMapUv:he&&g(M.normalMap.channel),displacementMapUv:je&&g(M.displacementMap.channel),emissiveMapUv:Ie&&g(M.emissiveMap.channel),metalnessMapUv:T&&g(M.metalnessMap.channel),roughnessMapUv:v&&g(M.roughnessMap.channel),anisotropyMapUv:ae&&g(M.anisotropyMap.channel),clearcoatMapUv:ce&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(M.sheenRoughnessMap.channel),specularMapUv:ge&&g(M.specularMap.channel),specularColorMapUv:ue&&g(M.specularColorMap.channel),specularIntensityMapUv:Pe&&g(M.specularIntensityMap.channel),transmissionMapUv:ke&&g(M.transmissionMap.channel),thicknessMapUv:Qe&&g(M.thicknessMap.channel),alphaMapUv:te&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(he||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:xe,vertexUv3s:Ze,pointsUvs:ie.isPoints===!0&&!!B.attributes.uv&&(Me||te),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&Xe.getTransfer(M.map.colorSpace)===Ke,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kt,flipSided:M.side===Mt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:re&&M.extensions.derivatives===!0,extensionFragDepth:re&&M.extensions.fragDepth===!0,extensionDrawBuffers:re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)A.push(H),A.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(E(A,M),x(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function E(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const A=_[M.type];let H;if(A){const W=kt[A];H=Bc.clone(W.uniforms)}else H=M.uniforms;return H}function C(M,A){let H;for(let W=0,ie=u.length;W<ie;W++){const L=u[W];if(L.cacheKey===A){H=L,++H.usedTimes;break}}return H===void 0&&(H=new ep(i,A,M,r),u.push(H)),H}function b(M){if(--M.usedTimes===0){const A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function k(){l.dispose()}return{getParameters:h,getProgramCacheKey:c,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:k}}function rp(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Za(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ya(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,m,_,g,h){let c=i[e];return c===void 0?(c={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:h},i[e]=c):(c.id=f.id,c.object=f,c.geometry=p,c.material=m,c.groupOrder=_,c.renderOrder=f.renderOrder,c.z=g,c.group=h),e++,c}function o(f,p,m,_,g,h){const c=a(f,p,m,_,g,h);m.transmission>0?n.push(c):m.transparent===!0?s.push(c):t.push(c)}function l(f,p,m,_,g,h){const c=a(f,p,m,_,g,h);m.transmission>0?n.unshift(c):m.transparent===!0?s.unshift(c):t.unshift(c)}function u(f,p){t.length>1&&t.sort(f||ap),n.length>1&&n.sort(p||Za),s.length>1&&s.sort(p||Za)}function d(){for(let f=e,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:u}}function op(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ya,i.set(n,[a])):s>=r.length?(a=new Ya,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new He};break;case"SpotLight":t={position:new O,direction:new O,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function cp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let up=0;function dp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hp(i,e){const t=new lp,n=cp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new O);const r=new O,a=new ct,o=new ct;function l(d,f){let p=0,m=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let g=0,h=0,c=0,E=0,x=0,y=0,C=0,b=0,w=0,k=0,M=0;d.sort(dp);const A=f===!0?Math.PI:1;for(let W=0,ie=d.length;W<ie;W++){const L=d[W],B=L.color,G=L.intensity,q=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=B.r*G*A,m+=B.g*G*A,_+=B.b*G*A;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],G);M++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const Z=L.shadow,Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,s.directionalShadow[g]=Q,s.directionalShadowMap[g]=V,s.directionalShadowMatrix[g]=L.shadow.matrix,y++}s.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(G*A),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[c]=X;const Z=L.shadow;if(L.map&&(s.spotLightMap[w]=L.map,w++,Z.updateMatrices(L),L.castShadow&&k++),s.spotLightMatrix[c]=Z.matrix,L.castShadow){const Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,s.spotShadow[c]=Q,s.spotShadowMap[c]=V,b++}c++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(G),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[E]=X,E++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*A),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Z=L.shadow,Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,s.pointShadow[h]=Q,s.pointShadowMap[h]=V,s.pointShadowMatrix[h]=L.shadow.matrix,C++}s.point[h]=X,h++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(G*A),X.groundColor.copy(L.groundColor).multiplyScalar(G*A),s.hemi[x]=X,x++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_FLOAT_1,s.rectAreaLTC2=ne.LTC_FLOAT_2):(s.rectAreaLTC1=ne.LTC_HALF_1,s.rectAreaLTC2=ne.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_FLOAT_1,s.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ne.LTC_HALF_1,s.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=_;const H=s.hash;(H.directionalLength!==g||H.pointLength!==h||H.spotLength!==c||H.rectAreaLength!==E||H.hemiLength!==x||H.numDirectionalShadows!==y||H.numPointShadows!==C||H.numSpotShadows!==b||H.numSpotMaps!==w||H.numLightProbes!==M)&&(s.directional.length=g,s.spot.length=c,s.rectArea.length=E,s.point.length=h,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=b+w-k,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=M,H.directionalLength=g,H.pointLength=h,H.spotLength=c,H.rectAreaLength=E,H.hemiLength=x,H.numDirectionalShadows=y,H.numPointShadows=C,H.numSpotShadows=b,H.numSpotMaps=w,H.numLightProbes=M,s.version=up++)}function u(d,f){let p=0,m=0,_=0,g=0,h=0;const c=f.matrixWorldInverse;for(let E=0,x=d.length;E<x;E++){const y=d[E];if(y.isDirectionalLight){const C=s.directional[p];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(c),p++}else if(y.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(c),_++}else if(y.isRectAreaLight){const C=s.rectArea[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),o.identity(),a.copy(y.matrixWorld),a.premultiply(c),o.extractRotation(a),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const C=s.hemi[h];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(c),h++}}}return{setup:l,setupView:u,state:s}}function $a(i,e){const t=new hp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function fp(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new $a(i,e),t.set(r,[l])):a>=o.length?(l=new $a(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class pp extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mp extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vp(i,e,t){let n=new Uo;const s=new qe,r=new qe,a=new dt,o=new pp({depthPacking:cc}),l=new mp,u={},d=t.maxTextureSize,f={[_n]:Mt,[Mt]:_n,[Kt]:Kt},p=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:_p,fragmentShader:gp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new hn(_,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo;let c=this.type;this.render=function(b,w,k){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),A=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),W=i.state;W.setBlending(fn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ie=c!==$t&&this.type===$t,L=c===$t&&this.type!==$t;for(let B=0,G=b.length;B<G;B++){const q=b[B],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const X=V.getFrameExtents();if(s.multiply(X),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/X.x),s.x=r.x*X.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/X.y),s.y=r.y*X.y,V.mapSize.y=r.y)),V.map===null||ie===!0||L===!0){const Q=this.type!==$t?{minFilter:xt,magFilter:xt}:{};V.map!==null&&V.map.dispose(),V.map=new Fn(s.x,s.y,Q),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Z=V.getViewportCount();for(let Q=0;Q<Z;Q++){const ee=V.getViewport(Q);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),W.viewport(a),V.updateMatrices(q,Q),n=V.getFrustum(),y(w,k,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===$t&&E(V,k),V.needsUpdate=!1}c=this.type,h.needsUpdate=!1,i.setRenderTarget(M,A,H)};function E(b,w){const k=e.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fn(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,k,p,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,k,m,g,null)}function x(b,w,k,M){let A=null;const H=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(H!==void 0)A=H;else if(A=k.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=A.uuid,ie=w.uuid;let L=u[W];L===void 0&&(L={},u[W]=L);let B=L[ie];B===void 0&&(B=A.clone(),L[ie]=B,w.addEventListener("dispose",C)),A=B}if(A.visible=w.visible,A.wireframe=w.wireframe,M===$t?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const W=i.properties.get(A);W.light=k}return A}function y(b,w,k,M,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===$t)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);const ie=e.update(b),L=b.material;if(Array.isArray(L)){const B=ie.groups;for(let G=0,q=B.length;G<q;G++){const V=B[G],X=L[V.materialIndex];if(X&&X.visible){const Z=x(b,X,M,A);b.onBeforeShadow(i,b,w,k,ie,Z,V),i.renderBufferDirect(k,null,ie,Z,b,V),b.onAfterShadow(i,b,w,k,ie,Z,V)}}}else if(L.visible){const B=x(b,L,M,A);b.onBeforeShadow(i,b,w,k,ie,B,null),i.renderBufferDirect(k,null,ie,B,b,null),b.onAfterShadow(i,b,w,k,ie,B,null)}}const W=b.children;for(let ie=0,L=W.length;ie<L;ie++)y(W[ie],w,k,M,A)}function C(b){b.target.removeEventListener("dispose",C);for(const k in u){const M=u[k],A=b.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function xp(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const se=new dt;let re=null;const Te=new dt(0,0,0,0);return{setMask:function(xe){re!==xe&&!R&&(i.colorMask(xe,xe,xe,xe),re=xe)},setLocked:function(xe){R=xe},setClear:function(xe,Ze,Ye,at,_t){_t===!0&&(xe*=at,Ze*=at,Ye*=at),se.set(xe,Ze,Ye,at),Te.equals(se)===!1&&(i.clearColor(xe,Ze,Ye,at),Te.copy(se))},reset:function(){R=!1,re=null,Te.set(-1,0,0,0)}}}function r(){let R=!1,se=null,re=null,Te=null;return{setTest:function(xe){xe?Le(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(xe){se!==xe&&!R&&(i.depthMask(xe),se=xe)},setFunc:function(xe){if(re!==xe){switch(xe){case Bl:i.depthFunc(i.NEVER);break;case zl:i.depthFunc(i.ALWAYS);break;case Gl:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case Hl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=xe}},setLocked:function(xe){R=xe},setClear:function(xe){Te!==xe&&(i.clearDepth(xe),Te=xe)},reset:function(){R=!1,se=null,re=null,Te=null}}}function a(){let R=!1,se=null,re=null,Te=null,xe=null,Ze=null,Ye=null,at=null,_t=null;return{setTest:function($e){R||($e?Le(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function($e){se!==$e&&!R&&(i.stencilMask($e),se=$e)},setFunc:function($e,gt,Ht){(re!==$e||Te!==gt||xe!==Ht)&&(i.stencilFunc($e,gt,Ht),re=$e,Te=gt,xe=Ht)},setOp:function($e,gt,Ht){(Ze!==$e||Ye!==gt||at!==Ht)&&(i.stencilOp($e,gt,Ht),Ze=$e,Ye=gt,at=Ht)},setLocked:function($e){R=$e},setClear:function($e){_t!==$e&&(i.clearStencil($e),_t=$e)},reset:function(){R=!1,se=null,re=null,Te=null,xe=null,Ze=null,Ye=null,at=null,_t=null}}}const o=new s,l=new r,u=new a,d=new WeakMap,f=new WeakMap;let p={},m={},_=new WeakMap,g=[],h=null,c=!1,E=null,x=null,y=null,C=null,b=null,w=null,k=null,M=new He(0,0,0),A=0,H=!1,W=null,ie=null,L=null,B=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=X>=2);let Q=null,ee={};const z=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),oe=new dt().fromArray(z),_e=new dt().fromArray(Y);function me(R,se,re,Te){const xe=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(R,Ze),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<re;Ye++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(se+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Ze}const Re={};Re[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Le(i.DEPTH_TEST),l.setFunc(rs),Ie(!1),T(Lr),Le(i.CULL_FACE),he(fn);function Le(R){p[R]!==!0&&(i.enable(R),p[R]=!0)}function Me(R){p[R]!==!1&&(i.disable(R),p[R]=!1)}function Ge(R,se){return m[R]!==se?(i.bindFramebuffer(R,se),m[R]=se,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function D(R,se){let re=g,Te=!1;if(R)if(re=_.get(se),re===void 0&&(re=[],_.set(se,re)),R.isWebGLMultipleRenderTargets){const xe=R.texture;if(re.length!==xe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Ye=xe.length;Ze<Ye;Ze++)re[Ze]=i.COLOR_ATTACHMENT0+Ze;re.length=xe.length,Te=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,Te=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function mt(R){return h!==R?(i.useProgram(R),h=R,!0):!1}const ve={[Rn]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[yl]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[Ur]=i.MIN,ve[Nr]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ve[Ur]=R.MIN_EXT,ve[Nr]=R.MAX_EXT)}const be={[Al]:i.ZERO,[bl]:i.ONE,[wl]:i.SRC_COLOR,[ir]:i.SRC_ALPHA,[Il]:i.SRC_ALPHA_SATURATE,[Pl]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[Rl]:i.ONE_MINUS_SRC_COLOR,[sr]:i.ONE_MINUS_SRC_ALPHA,[Dl]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Ul]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Ol]:i.CONSTANT_ALPHA,[Fl]:i.ONE_MINUS_CONSTANT_ALPHA};function he(R,se,re,Te,xe,Ze,Ye,at,_t,$e){if(R===fn){c===!0&&(Me(i.BLEND),c=!1);return}if(c===!1&&(Le(i.BLEND),c=!0),R!==Ml){if(R!==E||$e!==H){if((x!==Rn||b!==Rn)&&(i.blendEquation(i.FUNC_ADD),x=Rn,b=Rn),$e)switch(R){case Pn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.ONE,i.ONE);break;case Dr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ir:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ir:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,C=null,w=null,k=null,M.set(0,0,0),A=0,E=R,H=$e}return}xe=xe||se,Ze=Ze||re,Ye=Ye||Te,(se!==x||xe!==b)&&(i.blendEquationSeparate(ve[se],ve[xe]),x=se,b=xe),(re!==y||Te!==C||Ze!==w||Ye!==k)&&(i.blendFuncSeparate(be[re],be[Te],be[Ze],be[Ye]),y=re,C=Te,w=Ze,k=Ye),(at.equals(M)===!1||_t!==A)&&(i.blendColor(at.r,at.g,at.b,_t),M.copy(at),A=_t),E=R,H=!1}function je(R,se){R.side===Kt?Me(i.CULL_FACE):Le(i.CULL_FACE);let re=R.side===Mt;se&&(re=!re),Ie(re),R.blending===Pn&&R.transparent===!1?he(fn):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Te=R.stencilWrite;u.setTest(Te),Te&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),U(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(R){W!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),W=R)}function T(R){R!==xl?(Le(i.CULL_FACE),R!==ie&&(R===Lr?i.cullFace(i.BACK):R===Sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),ie=R}function v(R){R!==L&&(V&&i.lineWidth(R),L=R)}function U(R,se,re){R?(Le(i.POLYGON_OFFSET_FILL),(B!==se||G!==re)&&(i.polygonOffset(se,re),B=se,G=re)):Me(i.POLYGON_OFFSET_FILL)}function j(R){R?Le(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function K(R){R===void 0&&(R=i.TEXTURE0+q-1),Q!==R&&(i.activeTexture(R),Q=R)}function J(R,se,re){re===void 0&&(Q===null?re=i.TEXTURE0+q-1:re=Q);let Te=ee[re];Te===void 0&&(Te={type:void 0,texture:void 0},ee[re]=Te),(Te.type!==R||Te.texture!==se)&&(Q!==re&&(i.activeTexture(re),Q=re),i.bindTexture(R,se||Re[R]),Te.type=R,Te.texture=se)}function fe(){const R=ee[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(R){oe.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),oe.copy(R))}function ke(R){_e.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function Qe(R,se){let re=f.get(se);re===void 0&&(re=new WeakMap,f.set(se,re));let Te=re.get(R);Te===void 0&&(Te=i.getUniformBlockIndex(se,R.name),re.set(R,Te))}function Oe(R,se){const Te=f.get(se).get(R);d.get(se)!==Te&&(i.uniformBlockBinding(se,Te,R.__bindingPointIndex),d.set(se,Te))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Q=null,ee={},m={},_=new WeakMap,g=[],h=null,c=!1,E=null,x=null,y=null,C=null,b=null,w=null,k=null,M=new He(0,0,0),A=0,H=!1,W=null,ie=null,L=null,B=null,G=null,oe.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Le,disable:Me,bindFramebuffer:Ge,drawBuffers:D,useProgram:mt,setBlending:he,setMaterial:je,setFlipSided:Ie,setCullFace:T,setLineWidth:v,setPolygonOffset:U,setScissorTest:j,activeTexture:K,bindTexture:J,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:ge,texImage3D:ue,updateUBOMapping:Qe,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:Ue,compressedTexSubImage2D:$,compressedTexSubImage3D:Ve,scissor:Pe,viewport:ke,reset:te}}function Sp(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return m?new OffscreenCanvas(T,v):us("canvas")}function g(T,v,U,j){let K=1;if((T.width>j||T.height>j)&&(K=j/Math.max(T.width,T.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const J=v?dr:Math.floor,fe=J(K*T.width),ae=J(K*T.height);f===void 0&&(f=_(fe,ae));const ce=U?_(fe,ae):f;return ce.width=fe,ce.height=ae,ce.getContext("2d").drawImage(T,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+fe+"x"+ae+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function h(T){return da(T.width)&&da(T.height)}function c(T){return o?!1:T.wrapS!==zt||T.wrapT!==zt||T.minFilter!==xt&&T.minFilter!==Pt}function E(T,v){return T.generateMipmaps&&v&&T.minFilter!==xt&&T.minFilter!==Pt}function x(T){i.generateMipmap(T)}function y(T,v,U,j,K=!1){if(o===!1)return v;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=v;if(v===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),v===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RGBA){const fe=K?as:Xe.getTransfer(j);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=fe===Ke?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(T,v,U){return E(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==xt&&T.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function b(T){return T===xt||T===Or||T===Es?i.NEAREST:i.LINEAR}function w(T){const v=T.target;v.removeEventListener("dispose",w),M(v),v.isVideoTexture&&d.delete(v)}function k(T){const v=T.target;v.removeEventListener("dispose",k),H(v)}function M(T){const v=n.get(T);if(v.__webglInit===void 0)return;const U=T.source,j=p.get(U);if(j){const K=j[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(T),Object.keys(j).length===0&&p.delete(U)}n.remove(T)}function A(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const U=T.source,j=p.get(U);delete j[v.__cacheKey],a.memory.textures--}function H(T){const v=T.texture,U=n.get(T),j=n.get(v);if(j.__webglTexture!==void 0&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(U.__webglFramebuffer[K]))for(let J=0;J<U.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(U.__webglFramebuffer[K][J]);else i.deleteFramebuffer(U.__webglFramebuffer[K]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[K])}else{if(Array.isArray(U.__webglFramebuffer))for(let K=0;K<U.__webglFramebuffer.length;K++)i.deleteFramebuffer(U.__webglFramebuffer[K]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let K=0;K<U.__webglColorRenderbuffer.length;K++)U.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[K]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let K=0,J=v.length;K<J;K++){const fe=n.get(v[K]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(v[K])}n.remove(v),n.remove(T)}let W=0;function ie(){W=0}function L(){const T=W;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),W+=1,T}function B(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function G(T,v){const U=n.get(T);if(T.isVideoTexture&&je(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,T,v);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function q(T,v){const U=n.get(T);if(T.version>0&&U.__version!==T.version){oe(U,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function V(T,v){const U=n.get(T);if(T.version>0&&U.__version!==T.version){oe(U,T,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function X(T,v){const U=n.get(T);if(T.version>0&&U.__version!==T.version){_e(U,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const Z={[or]:i.REPEAT,[zt]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},Q={[xt]:i.NEAREST,[Or]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[Ql]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},ee={[hc]:i.NEVER,[vc]:i.ALWAYS,[fc]:i.LESS,[So]:i.LEQUAL,[pc]:i.EQUAL,[gc]:i.GEQUAL,[mc]:i.GREATER,[_c]:i.NOTEQUAL};function z(T,v,U){if(U?(i.texParameteri(T,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Z[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Q[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Q[v.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==zt||v.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,b(v.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,b(v.minFilter)),v.minFilter!==xt&&v.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===xt||v.minFilter!==Es&&v.minFilter!==Si||v.type===dn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Ei&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(T,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Y(T,v){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const j=v.source;let K=p.get(j);K===void 0&&(K={},p.set(j,K));const J=B(v);if(J!==T.__cacheKey){K[J]===void 0&&(K[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),K[J].usedTimes++;const fe=K[T.__cacheKey];fe!==void 0&&(K[T.__cacheKey].usedTimes--,fe.usedTimes===0&&A(v)),T.__cacheKey=J,T.__webglTexture=K[J].texture}return U}function oe(T,v,U){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);const K=Y(T,v),J=v.source;t.bindTexture(j,T.__webglTexture,i.TEXTURE0+U);const fe=n.get(J);if(J.version!==fe.__version||K===!0){t.activeTexture(i.TEXTURE0+U);const ae=Xe.getPrimaries(Xe.workingColorSpace),ce=v.colorSpace===It?null:Xe.getPrimaries(v.colorSpace),Ee=v.colorSpace===It||ae===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ue=c(v)&&h(v.image)===!1;let $=g(v.image,Ue,!1,s.maxTextureSize);$=Ie(v,$);const Ve=h($)||o,ze=r.convert(v.format,v.colorSpace);let Ae=r.convert(v.type),ge=y(v.internalFormat,ze,Ae,v.colorSpace,v.isVideoTexture);z(j,v,Ve);let ue;const Pe=v.mipmaps,ke=o&&v.isVideoTexture!==!0&&ge!==vo,Qe=fe.__version===void 0||K===!0,Oe=C(v,$,Ve);if(v.isDepthTexture)ge=i.DEPTH_COMPONENT,o?v.type===dn?ge=i.DEPTH_COMPONENT32F:v.type===un?ge=i.DEPTH_COMPONENT24:v.type===Dn?ge=i.DEPTH24_STENCIL8:ge=i.DEPTH_COMPONENT16:v.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===In&&ge===i.DEPTH_COMPONENT&&v.type!==_r&&v.type!==un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=un,Ae=r.convert(v.type)),v.format===oi&&ge===i.DEPTH_COMPONENT&&(ge=i.DEPTH_STENCIL,v.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Dn,Ae=r.convert(v.type))),Qe&&(ke?t.texStorage2D(i.TEXTURE_2D,1,ge,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ge,$.width,$.height,0,ze,Ae,null));else if(v.isDataTexture)if(Pe.length>0&&Ve){ke&&Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,ge,Pe[0].width,Pe[0].height);for(let te=0,R=Pe.length;te<R;te++)ue=Pe[te],ke?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,Ae,ue.data):t.texImage2D(i.TEXTURE_2D,te,ge,ue.width,ue.height,0,ze,Ae,ue.data);v.generateMipmaps=!1}else ke?(Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,ge,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,ze,Ae,$.data)):t.texImage2D(i.TEXTURE_2D,0,ge,$.width,$.height,0,ze,Ae,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,ge,Pe[0].width,Pe[0].height,$.depth);for(let te=0,R=Pe.length;te<R;te++)ue=Pe[te],v.format!==Gt?ze!==null?ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,$.depth,ze,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,ge,ue.width,ue.height,$.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,$.depth,ze,Ae,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,ge,ue.width,ue.height,$.depth,0,ze,Ae,ue.data)}else{ke&&Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,ge,Pe[0].width,Pe[0].height);for(let te=0,R=Pe.length;te<R;te++)ue=Pe[te],v.format!==Gt?ze!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,Ae,ue.data):t.texImage2D(i.TEXTURE_2D,te,ge,ue.width,ue.height,0,ze,Ae,ue.data)}else if(v.isDataArrayTexture)ke?(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,ge,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ze,Ae,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,ze,Ae,$.data);else if(v.isData3DTexture)ke?(Qe&&t.texStorage3D(i.TEXTURE_3D,Oe,ge,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ze,Ae,$.data)):t.texImage3D(i.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,ze,Ae,$.data);else if(v.isFramebufferTexture){if(Qe)if(ke)t.texStorage2D(i.TEXTURE_2D,Oe,ge,$.width,$.height);else{let te=$.width,R=$.height;for(let se=0;se<Oe;se++)t.texImage2D(i.TEXTURE_2D,se,ge,te,R,0,ze,Ae,null),te>>=1,R>>=1}}else if(Pe.length>0&&Ve){ke&&Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,ge,Pe[0].width,Pe[0].height);for(let te=0,R=Pe.length;te<R;te++)ue=Pe[te],ke?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ze,Ae,ue):t.texImage2D(i.TEXTURE_2D,te,ge,ze,Ae,ue);v.generateMipmaps=!1}else ke?(Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,ge,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Ae,$)):t.texImage2D(i.TEXTURE_2D,0,ge,ze,Ae,$);E(v,Ve)&&x(j),fe.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function _e(T,v,U){if(v.image.length!==6)return;const j=Y(T,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);const J=n.get(K);if(K.version!==J.__version||j===!0){t.activeTexture(i.TEXTURE0+U);const fe=Xe.getPrimaries(Xe.workingColorSpace),ae=v.colorSpace===It?null:Xe.getPrimaries(v.colorSpace),ce=v.colorSpace===It||fe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,$=[];for(let te=0;te<6;te++)!Ee&&!Ue?$[te]=g(v.image[te],!1,!0,s.maxCubemapSize):$[te]=Ue?v.image[te].image:v.image[te],$[te]=Ie(v,$[te]);const Ve=$[0],ze=h(Ve)||o,Ae=r.convert(v.format,v.colorSpace),ge=r.convert(v.type),ue=y(v.internalFormat,Ae,ge,v.colorSpace),Pe=o&&v.isVideoTexture!==!0,ke=J.__version===void 0||j===!0;let Qe=C(v,Ve,ze);z(i.TEXTURE_CUBE_MAP,v,ze);let Oe;if(Ee){Pe&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,ue,Ve.width,Ve.height);for(let te=0;te<6;te++){Oe=$[te].mipmaps;for(let R=0;R<Oe.length;R++){const se=Oe[R];v.format!==Gt?Ae!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,0,0,se.width,se.height,Ae,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,0,0,se.width,se.height,Ae,ge,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,ue,se.width,se.height,0,Ae,ge,se.data)}}}else{Oe=v.mipmaps,Pe&&ke&&(Oe.length>0&&Qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,ue,$[0].width,$[0].height));for(let te=0;te<6;te++)if(Ue){Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,$[te].width,$[te].height,Ae,ge,$[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,$[te].width,$[te].height,0,Ae,ge,$[te].data);for(let R=0;R<Oe.length;R++){const re=Oe[R].image[te].image;Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,0,0,re.width,re.height,Ae,ge,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,ue,re.width,re.height,0,Ae,ge,re.data)}}else{Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,ge,$[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Ae,ge,$[te]);for(let R=0;R<Oe.length;R++){const se=Oe[R];Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,0,0,Ae,ge,se.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,ue,Ae,ge,se.image[te])}}}E(v,ze)&&x(i.TEXTURE_CUBE_MAP),J.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function me(T,v,U,j,K,J){const fe=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),ce=y(U.internalFormat,fe,ae,U.colorSpace);if(!n.get(v).__hasExternalTextures){const Ue=Math.max(1,v.width>>J),$=Math.max(1,v.height>>J);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,J,ce,Ue,$,v.depth,0,fe,ae,null):t.texImage2D(K,J,ce,Ue,$,0,fe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,n.get(U).__webglTexture,0,be(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,n.get(U).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(T,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let j=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||he(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===dn?j=i.DEPTH_COMPONENT32F:K.type===un&&(j=i.DEPTH_COMPONENT24));const J=be(v);he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,j,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const j=be(v);U&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const j=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<j.length;K++){const J=j[K],fe=r.convert(J.format,J.colorSpace),ae=r.convert(J.type),ce=y(J.internalFormat,fe,ae,J.colorSpace),Ee=be(v);U&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ce,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const j=n.get(v.depthTexture).__webglTexture,K=be(v);if(v.depthTexture.format===In)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===oi)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Me(T){const v=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Le(v.__webglFramebuffer,T)}else if(U){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=i.createRenderbuffer(),Re(v.__webglDepthbuffer[j],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Re(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(T,v,U){const j=n.get(T);v!==void 0&&me(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Me(T)}function D(T){const v=T.texture,U=n.get(T),j=n.get(v);T.addEventListener("dispose",k),T.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,a.memory.textures++);const K=T.isWebGLCubeRenderTarget===!0,J=T.isWebGLMultipleRenderTargets===!0,fe=h(T)||o;if(K){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let ce=0;ce<v.mipmaps.length;ce++)U.__webglFramebuffer[ae][ce]=i.createFramebuffer()}else U.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(J)if(s.drawBuffers){const ae=T.texture;for(let ce=0,Ee=ae.length;ce<Ee;ce++){const Ue=n.get(ae[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&he(T)===!1){const ae=J?v:[v];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){const Ee=ae[ce];U.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Ue=r.convert(Ee.format,Ee.colorSpace),$=r.convert(Ee.type),Ve=y(Ee.internalFormat,Ue,$,Ee.colorSpace,T.isXRRenderTarget===!0),ze=be(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ve,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),z(i.TEXTURE_CUBE_MAP,v,fe);for(let ae=0;ae<6;ae++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)me(U.__webglFramebuffer[ae][ce],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else me(U.__webglFramebuffer[ae],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);E(v,fe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const ae=T.texture;for(let ce=0,Ee=ae.length;ce<Ee;ce++){const Ue=ae[ce],$=n.get(Ue);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),z(i.TEXTURE_2D,Ue,fe),me(U.__webglFramebuffer,T,Ue,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),E(Ue,fe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,j.__webglTexture),z(ae,v,fe),o&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)me(U.__webglFramebuffer[ce],T,v,i.COLOR_ATTACHMENT0,ae,ce);else me(U.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ae,0);E(v,fe)&&x(ae),t.unbindTexture()}T.depthBuffer&&Me(T)}function mt(T){const v=h(T)||o,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let j=0,K=U.length;j<K;j++){const J=U[j];if(E(J,v)){const fe=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(J).__webglTexture;t.bindTexture(fe,ae),x(fe),t.unbindTexture()}}}function ve(T){if(o&&T.samples>0&&he(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,j=T.height;let K=i.COLOR_BUFFER_BIT;const J=[],fe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(T),ce=T.isWebGLMultipleRenderTargets===!0;if(ce)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){J.push(i.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&J.push(fe);const Ue=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ue===!1&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ee]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),ce){const $=n.get(v[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,U,j,0,0,U,j,K,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ee]);const Ue=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function be(T){return Math.min(s.maxSamples,T.samples)}function he(T){const v=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function je(T){const v=a.render.frame;d.get(T)!==v&&(d.set(T,v),T.update())}function Ie(T,v){const U=T.colorSpace,j=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===cr||U!==Jt&&U!==It&&(Xe.getTransfer(U)===Ke?o===!1?e.has("EXT_sRGB")===!0&&j===Gt?(T.format=cr,T.minFilter=Pt,T.generateMipmaps=!1):v=Mo.sRGBToLinear(v):(j!==Gt||K!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=L,this.resetTextureUnits=ie,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=Ge,this.setupRenderTarget=D,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=me,this.useMultisampledRTT=he}function Ep(i,e,t){const n=t.isWebGL2;function s(r,a=It){let o;const l=Xe.getTransfer(a);if(r===mn)return i.UNSIGNED_BYTE;if(r===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===po)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ec)return i.BYTE;if(r===tc)return i.SHORT;if(r===_r)return i.UNSIGNED_SHORT;if(r===ho)return i.INT;if(r===un)return i.UNSIGNED_INT;if(r===dn)return i.FLOAT;if(r===Ei)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===nc)return i.ALPHA;if(r===Gt)return i.RGBA;if(r===ic)return i.LUMINANCE;if(r===sc)return i.LUMINANCE_ALPHA;if(r===In)return i.DEPTH_COMPONENT;if(r===oi)return i.DEPTH_STENCIL;if(r===cr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===rc)return i.RED;if(r===mo)return i.RED_INTEGER;if(r===ac)return i.RG;if(r===_o)return i.RG_INTEGER;if(r===go)return i.RGBA_INTEGER;if(r===Ms||r===Ts||r===ys||r===As)if(l===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ms)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ms)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ts)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ys)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===As)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fr||r===Br||r===zr||r===Gr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Fr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Br)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vo)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hr||r===kr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Hr)return l===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===kr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vr||r===Wr||r===Xr||r===qr||r===Zr||r===Yr||r===$r||r===Kr||r===jr||r===Jr||r===Qr||r===ea||r===ta||r===na)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$r)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ea)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ta)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===na)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bs||r===ia||r===sa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===bs)return l===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ia)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===oc||r===ra||r===aa||r===oa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===bs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ra)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===aa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Dn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Mp extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class es extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tp={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const g of e.hand.values()){const h=t.getJointPose(g,n),c=this._getHandJoint(u,g);h!==null&&(c.matrix.fromArray(h.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=h.radius),c.visible=h!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&p>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yp extends ci{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,d=null,f=null,p=null,m=null,_=null;const g=t.getContextAttributes();let h=null,c=null;const E=[],x=[],y=new qe;let C=null;const b=new Dt;b.layers.enable(1),b.viewport=new dt;const w=new Dt;w.layers.enable(2),w.viewport=new dt;const k=[b,w],M=new Mp;M.layers.enable(1),M.layers.enable(2);let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=E[z];return Y===void 0&&(Y=new js,E[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=E[z];return Y===void 0&&(Y=new js,E[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=E[z];return Y===void 0&&(Y=new js,E[z]=Y),Y.getHandSpace()};function W(z){const Y=x.indexOf(z.inputSource);if(Y===-1)return;const oe=E[Y];oe!==void 0&&(oe.update(z.inputSource,z.frame,u||a),oe.dispatchEvent({type:z.type,data:z.inputSource}))}function ie(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",L);for(let z=0;z<E.length;z++){const Y=x[z];Y!==null&&(x[z]=null,E[z].disconnect(Y))}A=null,H=null,e.setRenderTarget(h),m=null,p=null,f=null,s=null,c=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new Fn(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,oe=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=g.stencil?oi:In,oe=g.stencil?Dn:un);const me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(me),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),c=new Fn(p.textureWidth,p.textureHeight,{format:Gt,type:mn,depthTexture:new Oo(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(c);Re.__ignoreDepthValues=p.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(z){for(let Y=0;Y<z.removed.length;Y++){const oe=z.removed[Y],_e=x.indexOf(oe);_e>=0&&(x[_e]=null,E[_e].disconnect(oe))}for(let Y=0;Y<z.added.length;Y++){const oe=z.added[Y];let _e=x.indexOf(oe);if(_e===-1){for(let Re=0;Re<E.length;Re++)if(Re>=x.length){x.push(oe),_e=Re;break}else if(x[Re]===null){x[Re]=oe,_e=Re;break}if(_e===-1)break}const me=E[_e];me&&me.connect(oe)}}const B=new O,G=new O;function q(z,Y,oe){B.setFromMatrixPosition(Y.matrixWorld),G.setFromMatrixPosition(oe.matrixWorld);const _e=B.distanceTo(G),me=Y.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Le=me[14]/(me[10]-1),Me=me[14]/(me[10]+1),Ge=(me[9]+1)/me[5],D=(me[9]-1)/me[5],mt=(me[8]-1)/me[0],ve=(Re[8]+1)/Re[0],be=Le*mt,he=Le*ve,je=_e/(-mt+ve),Ie=je*-mt;Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ie),z.translateZ(je),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const T=Le+je,v=Me+je,U=be-Ie,j=he+(_e-Ie),K=Ge*Me/v*T,J=D*Me/v*T;z.projectionMatrix.makePerspective(U,j,K,J,T,v),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function V(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;M.near=w.near=b.near=z.near,M.far=w.far=b.far=z.far,(A!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,H=M.far);const Y=z.parent,oe=M.cameras;V(M,Y);for(let _e=0;_e<oe.length;_e++)V(oe[_e],Y);oe.length===2?q(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),X(z,M,Y)};function X(z,Y,oe){oe===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(oe.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ur*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(z){l=z,p!==null&&(p.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let Z=null;function Q(z,Y){if(d=Y.getViewerPose(u||a),_=Y,d!==null){const oe=d.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let _e=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let me=0;me<oe.length;me++){const Re=oe[me];let Le=null;if(m!==null)Le=m.getViewport(Re);else{const Ge=f.getViewSubImage(p,Re);Le=Ge.viewport,me===0&&(e.setRenderTargetTextures(c,Ge.colorTexture,p.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(c))}let Me=k[me];Me===void 0&&(Me=new Dt,Me.layers.enable(me),Me.viewport=new dt,k[me]=Me),Me.matrix.fromArray(Re.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Re.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Le.x,Le.y,Le.width,Le.height),me===0&&(M.matrix.copy(Me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(Me)}}for(let oe=0;oe<E.length;oe++){const _e=x[oe],me=E[oe];_e!==null&&me!==void 0&&me.update(_e,Y,u||a)}Z&&Z(z,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const ee=new No;ee.setAnimationLoop(Q),this.setAnimationLoop=function(z){Z=z},this.dispose=function(){}}}function Ap(i,e){function t(h,c){h.matrixAutoUpdate===!0&&h.updateMatrix(),c.value.copy(h.matrix)}function n(h,c){c.color.getRGB(h.fogColor.value,Po(i)),c.isFog?(h.fogNear.value=c.near,h.fogFar.value=c.far):c.isFogExp2&&(h.fogDensity.value=c.density)}function s(h,c,E,x,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(h,c):c.isMeshToonMaterial?(r(h,c),f(h,c)):c.isMeshPhongMaterial?(r(h,c),d(h,c)):c.isMeshStandardMaterial?(r(h,c),p(h,c),c.isMeshPhysicalMaterial&&m(h,c,y)):c.isMeshMatcapMaterial?(r(h,c),_(h,c)):c.isMeshDepthMaterial?r(h,c):c.isMeshDistanceMaterial?(r(h,c),g(h,c)):c.isMeshNormalMaterial?r(h,c):c.isLineBasicMaterial?(a(h,c),c.isLineDashedMaterial&&o(h,c)):c.isPointsMaterial?l(h,c,E,x):c.isSpriteMaterial?u(h,c):c.isShadowMaterial?(h.color.value.copy(c.color),h.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(h,c){h.opacity.value=c.opacity,c.color&&h.diffuse.value.copy(c.color),c.emissive&&h.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.bumpMap&&(h.bumpMap.value=c.bumpMap,t(c.bumpMap,h.bumpMapTransform),h.bumpScale.value=c.bumpScale,c.side===Mt&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,t(c.normalMap,h.normalMapTransform),h.normalScale.value.copy(c.normalScale),c.side===Mt&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,t(c.displacementMap,h.displacementMapTransform),h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias),c.emissiveMap&&(h.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,h.emissiveMapTransform)),c.specularMap&&(h.specularMap.value=c.specularMap,t(c.specularMap,h.specularMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest);const E=e.get(c).envMap;if(E&&(h.envMap.value=E,h.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=c.reflectivity,h.ior.value=c.ior,h.refractionRatio.value=c.refractionRatio),c.lightMap){h.lightMap.value=c.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=c.lightMapIntensity*x,t(c.lightMap,h.lightMapTransform)}c.aoMap&&(h.aoMap.value=c.aoMap,h.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,h.aoMapTransform))}function a(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))}function o(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}function l(h,c,E,x){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*E,h.scale.value=x*.5,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}function u(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}function d(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)}function f(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}function p(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),e.get(c).envMap&&(h.envMapIntensity.value=c.envMapIntensity)}function m(h,c,E){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Mt&&h.clearcoatNormalScale.value.negate())),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,c){c.matcap&&(h.matcap.value=c.matcap)}function g(h,c){const E=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bp(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const y=x.program;n.uniformBlockBinding(E,y)}function u(E,x){let y=s[E.id];y===void 0&&(_(E),y=d(E),s[E.id]=y,E.addEventListener("dispose",h));const C=x.program;n.updateUBOMapping(E,C);const b=e.render.frame;r[E.id]!==b&&(p(E),r[E.id]=b)}function d(E){const x=f();E.__bindingPointIndex=x;const y=i.createBuffer(),C=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const x=s[E.id],y=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,w=y.length;b<w;b++){const k=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,A=k.length;M<A;M++){const H=k[M];if(m(H,b,M,C)===!0){const W=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let L=0;for(let B=0;B<ie.length;B++){const G=ie[B],q=g(G);typeof G=="number"||typeof G=="boolean"?(H.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,W+L,H.__data)):G.isMatrix3?(H.__data[0]=G.elements[0],H.__data[1]=G.elements[1],H.__data[2]=G.elements[2],H.__data[3]=0,H.__data[4]=G.elements[3],H.__data[5]=G.elements[4],H.__data[6]=G.elements[5],H.__data[7]=0,H.__data[8]=G.elements[6],H.__data[9]=G.elements[7],H.__data[10]=G.elements[8],H.__data[11]=0):(G.toArray(H.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,x,y,C){const b=E.value,w=x+"_"+y;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:C[w]=b.clone(),!0;{const k=C[w];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return C[w]=b,!0}else if(k.equals(b)===!1)return k.copy(b),!0}return!1}function _(E){const x=E.uniforms;let y=0;const C=16;for(let w=0,k=x.length;w<k;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let A=0,H=M.length;A<H;A++){const W=M[A],ie=Array.isArray(W.value)?W.value:[W.value];for(let L=0,B=ie.length;L<B;L++){const G=ie[L],q=g(G),V=y%C;V!==0&&C-V<q.boundary&&(y+=C-V),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=q.storage}}}const b=y%C;return b>0&&(y+=C-b),E.__size=y,E.__cache={},this}function g(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function h(E){const x=E.target;x.removeEventListener("dispose",h);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function c(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:u,dispose:c}}class ko{constructor(e={}){const{canvas:t=Sc(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const c=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const x=this;let y=!1,C=0,b=0,w=null,k=-1,M=null;const A=new dt,H=new dt;let W=null;const ie=new He(0);let L=0,B=t.width,G=t.height,q=1,V=null,X=null;const Z=new dt(0,0,B,G),Q=new dt(0,0,B,G);let ee=!1;const z=new Uo;let Y=!1,oe=!1,_e=null;const me=new ct,Re=new qe,Le=new O,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return w===null?q:1}let D=n;function mt(S,P){for(let N=0;N<S.length;N++){const F=S[N],I=t.getContext(F,P);if(I!==null)return I}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mr}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",se,!1),D===null){const P=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&P.shift(),D=mt(P,S),D===null)throw mt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,be,he,je,Ie,T,v,U,j,K,J,fe,ae,ce,Ee,Ue,$,Ve,ze,Ae,ge,ue,Pe,ke;function Qe(){ve=new Nh(D),be=new Rh(D,ve,e),ve.init(be),ue=new Ep(D,ve,be),he=new xp(D,ve,be),je=new Bh(D),Ie=new rp,T=new Sp(D,ve,he,Ie,be,ue,je),v=new Lh(x),U=new Uh(x),j=new Xc(D,be),Pe=new bh(D,ve,j,be),K=new Oh(D,j,je,Pe),J=new kh(D,K,j,je),ze=new Hh(D,be,T),Ue=new Ch(Ie),fe=new sp(x,v,U,ve,be,Pe,Ue),ae=new Ap(x,Ie),ce=new op,Ee=new fp(ve,be),Ve=new Ah(x,v,U,he,J,p,l),$=new vp(x,J,be),ke=new bp(D,je,be,he),Ae=new wh(D,ve,je,be),ge=new Fh(D,ve,je,be),je.programs=fe.programs,x.capabilities=be,x.extensions=ve,x.properties=Ie,x.renderLists=ce,x.shadowMap=$,x.state=he,x.info=je}Qe();const Oe=new yp(x,D);this.xr=Oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(B,G,!1))},this.getSize=function(S){return S.set(B,G)},this.setSize=function(S,P,N=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,G=P,t.width=Math.floor(S*q),t.height=Math.floor(P*q),N===!0&&(t.style.width=S+"px",t.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(B*q,G*q).floor()},this.setDrawingBufferSize=function(S,P,N){B=S,G=P,q=N,t.width=Math.floor(S*N),t.height=Math.floor(P*N),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,P,N,F){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,P,N,F),he.viewport(A.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,P,N,F){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,P,N,F),he.scissor(H.copy(Q).multiplyScalar(q).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(S){he.setScissorTest(ee=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(S=!0,P=!0,N=!0){let F=0;if(S){let I=!1;if(w!==null){const le=w.texture.format;I=le===go||le===_o||le===mo}if(I){const le=w.texture.type,pe=le===mn||le===un||le===_r||le===Dn||le===fo||le===po,Se=Ve.getClearColor(),ye=Ve.getClearAlpha(),Ne=Se.r,we=Se.g,Ce=Se.b;pe?(m[0]=Ne,m[1]=we,m[2]=Ce,m[3]=ye,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ne,_[1]=we,_[2]=Ce,_[3]=ye,D.clearBufferiv(D.COLOR,0,_))}else F|=D.COLOR_BUFFER_BIT}P&&(F|=D.DEPTH_BUFFER_BIT),N&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),Ee.dispose(),Ie.dispose(),v.dispose(),U.dispose(),J.dispose(),Pe.dispose(),ke.dispose(),fe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",_t),Oe.removeEventListener("sessionend",$e),_e&&(_e.dispose(),_e=null),gt.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=je.autoReset,P=$.enabled,N=$.autoUpdate,F=$.needsUpdate,I=$.type;Qe(),je.autoReset=S,$.enabled=P,$.autoUpdate=N,$.needsUpdate=F,$.type=I}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function re(S){const P=S.target;P.removeEventListener("dispose",re),Te(P)}function Te(S){xe(S),Ie.remove(S)}function xe(S){const P=Ie.get(S).programs;P!==void 0&&(P.forEach(function(N){fe.releaseProgram(N)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,N,F,I,le){P===null&&(P=Me);const pe=I.isMesh&&I.matrixWorld.determinant()<0,Se=Xo(S,P,N,F,I);he.setMaterial(F,pe);let ye=N.index,Ne=1;if(F.wireframe===!0){if(ye=K.getWireframeAttribute(N),ye===void 0)return;Ne=2}const we=N.drawRange,Ce=N.attributes.position;let tt=we.start*Ne,At=(we.start+we.count)*Ne;le!==null&&(tt=Math.max(tt,le.start*Ne),At=Math.min(At,(le.start+le.count)*Ne)),ye!==null?(tt=Math.max(tt,0),At=Math.min(At,ye.count)):Ce!=null&&(tt=Math.max(tt,0),At=Math.min(At,Ce.count));const ot=At-tt;if(ot<0||ot===1/0)return;Pe.setup(I,F,Se,N,ye);let Vt,Je=Ae;if(ye!==null&&(Vt=j.get(ye),Je=ge,Je.setIndex(Vt)),I.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*Ge()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(I.isLine){let Fe=F.linewidth;Fe===void 0&&(Fe=1),he.setLineWidth(Fe*Ge()),I.isLineSegments?Je.setMode(D.LINES):I.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else I.isPoints?Je.setMode(D.POINTS):I.isSprite&&Je.setMode(D.TRIANGLES);if(I.isBatchedMesh)Je.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Je.renderInstances(tt,ot,I.count);else if(N.isInstancedBufferGeometry){const Fe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,gs=Math.min(N.instanceCount,Fe);Je.renderInstances(tt,ot,gs)}else Je.render(tt,ot)};function Ze(S,P,N){S.transparent===!0&&S.side===Kt&&S.forceSinglePass===!1?(S.side=Mt,S.needsUpdate=!0,Ri(S,P,N),S.side=_n,S.needsUpdate=!0,Ri(S,P,N),S.side=Kt):Ri(S,P,N)}this.compile=function(S,P,N=null){N===null&&(N=S),h=Ee.get(N),h.init(),E.push(h),N.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),S!==N&&S.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(x._useLegacyLights);const F=new Set;return S.traverse(function(I){const le=I.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const Se=le[pe];Ze(Se,N,I),F.add(Se)}else Ze(le,N,I),F.add(le)}),E.pop(),h=null,F},this.compileAsync=function(S,P,N=null){const F=this.compile(S,P,N);return new Promise(I=>{function le(){if(F.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&F.delete(pe)}),F.size===0){I(S);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ye=null;function at(S){Ye&&Ye(S)}function _t(){gt.stop()}function $e(){gt.start()}const gt=new No;gt.setAnimationLoop(at),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(S){Ye=S,Oe.setAnimationLoop(S),S===null?gt.stop():gt.start()},Oe.addEventListener("sessionstart",_t),Oe.addEventListener("sessionend",$e),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(P),P=Oe.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,P,w),h=Ee.get(S,E.length),h.init(),E.push(h),me.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),z.setFromProjectionMatrix(me),oe=this.localClippingEnabled,Y=Ue.init(this.clippingPlanes,oe),g=ce.get(S,c.length),g.init(),c.push(g),Ht(S,P,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,X),this.info.render.frame++,Y===!0&&Ue.beginShadows();const N=h.state.shadowsArray;if($.render(N,S,P),Y===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(g,S),h.setupLights(x._useLegacyLights),P.isArrayCamera){const F=P.cameras;for(let I=0,le=F.length;I<le;I++){const pe=F[I];Sr(g,S,pe,pe.viewport)}}else Sr(g,S,P);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,P),Pe.resetDefaultState(),k=-1,M=null,E.pop(),E.length>0?h=E[E.length-1]:h=null,c.pop(),c.length>0?g=c[c.length-1]:g=null};function Ht(S,P,N,F){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)N=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||z.intersectsSprite(S)){F&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const pe=J.update(S),Se=S.material;Se.visible&&g.push(S,pe,Se,N,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||z.intersectsObject(S))){const pe=J.update(S),Se=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Le.copy(pe.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Se)){const ye=pe.groups;for(let Ne=0,we=ye.length;Ne<we;Ne++){const Ce=ye[Ne],tt=Se[Ce.materialIndex];tt&&tt.visible&&g.push(S,pe,tt,N,Le.z,Ce)}}else Se.visible&&g.push(S,pe,Se,N,Le.z,null)}}const le=S.children;for(let pe=0,Se=le.length;pe<Se;pe++)Ht(le[pe],P,N,F)}function Sr(S,P,N,F){const I=S.opaque,le=S.transmissive,pe=S.transparent;h.setupLightsView(N),Y===!0&&Ue.setGlobalState(x.clippingPlanes,N),le.length>0&&Wo(I,le,P,N),F&&he.viewport(A.copy(F)),I.length>0&&wi(I,P,N),le.length>0&&wi(le,P,N),pe.length>0&&wi(pe,P,N),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Wo(S,P,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const le=be.isWebGL2;_e===null&&(_e=new Fn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ei:mn,minFilter:Si,samples:le?4:0})),x.getDrawingBufferSize(Re),le?_e.setSize(Re.x,Re.y):_e.setSize(dr(Re.x),dr(Re.y));const pe=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(ie),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=pn,wi(S,N,F),T.updateMultisampleRenderTarget(_e),T.updateRenderTargetMipmap(_e);let ye=!1;for(let Ne=0,we=P.length;Ne<we;Ne++){const Ce=P[Ne],tt=Ce.object,At=Ce.geometry,ot=Ce.material,Vt=Ce.group;if(ot.side===Kt&&tt.layers.test(F.layers)){const Je=ot.side;ot.side=Mt,ot.needsUpdate=!0,Er(tt,N,F,At,ot,Vt),ot.side=Je,ot.needsUpdate=!0,ye=!0}}ye===!0&&(T.updateMultisampleRenderTarget(_e),T.updateRenderTargetMipmap(_e)),x.setRenderTarget(pe),x.setClearColor(ie,L),x.toneMapping=Se}function wi(S,P,N){const F=P.isScene===!0?P.overrideMaterial:null;for(let I=0,le=S.length;I<le;I++){const pe=S[I],Se=pe.object,ye=pe.geometry,Ne=F===null?pe.material:F,we=pe.group;Se.layers.test(N.layers)&&Er(Se,P,N,ye,Ne,we)}}function Er(S,P,N,F,I,le){S.onBeforeRender(x,P,N,F,I,le),S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(x,P,N,F,S,le),I.transparent===!0&&I.side===Kt&&I.forceSinglePass===!1?(I.side=Mt,I.needsUpdate=!0,x.renderBufferDirect(N,P,F,I,S,le),I.side=_n,I.needsUpdate=!0,x.renderBufferDirect(N,P,F,I,S,le),I.side=Kt):x.renderBufferDirect(N,P,F,I,S,le),S.onAfterRender(x,P,N,F,I,le)}function Ri(S,P,N){P.isScene!==!0&&(P=Me);const F=Ie.get(S),I=h.state.lights,le=h.state.shadowsArray,pe=I.state.version,Se=fe.getParameters(S,I.state,le,P,N),ye=fe.getProgramCacheKey(Se);let Ne=F.programs;F.environment=S.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(S.isMeshStandardMaterial?U:v).get(S.envMap||F.environment),Ne===void 0&&(S.addEventListener("dispose",re),Ne=new Map,F.programs=Ne);let we=Ne.get(ye);if(we!==void 0){if(F.currentProgram===we&&F.lightsStateVersion===pe)return Tr(S,Se),we}else Se.uniforms=fe.getUniforms(S),S.onBuild(N,Se,x),S.onBeforeCompile(Se,x),we=fe.acquireProgram(Se,ye),Ne.set(ye,we),F.uniforms=Se.uniforms;const Ce=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),Tr(S,Se),F.needsLights=Zo(S),F.lightsStateVersion=pe,F.needsLights&&(Ce.ambientLightColor.value=I.state.ambient,Ce.lightProbe.value=I.state.probe,Ce.directionalLights.value=I.state.directional,Ce.directionalLightShadows.value=I.state.directionalShadow,Ce.spotLights.value=I.state.spot,Ce.spotLightShadows.value=I.state.spotShadow,Ce.rectAreaLights.value=I.state.rectArea,Ce.ltc_1.value=I.state.rectAreaLTC1,Ce.ltc_2.value=I.state.rectAreaLTC2,Ce.pointLights.value=I.state.point,Ce.pointLightShadows.value=I.state.pointShadow,Ce.hemisphereLights.value=I.state.hemi,Ce.directionalShadowMap.value=I.state.directionalShadowMap,Ce.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ce.spotShadowMap.value=I.state.spotShadowMap,Ce.spotLightMatrix.value=I.state.spotLightMatrix,Ce.spotLightMap.value=I.state.spotLightMap,Ce.pointShadowMap.value=I.state.pointShadowMap,Ce.pointShadowMatrix.value=I.state.pointShadowMatrix),F.currentProgram=we,F.uniformsList=null,we}function Mr(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=is.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function Tr(S,P){const N=Ie.get(S);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function Xo(S,P,N,F,I){P.isScene!==!0&&(P=Me),T.resetTextureUnits();const le=P.fog,pe=F.isMeshStandardMaterial?P.environment:null,Se=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Jt,ye=(F.isMeshStandardMaterial?U:v).get(F.envMap||pe),Ne=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,we=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ce=!!N.morphAttributes.position,tt=!!N.morphAttributes.normal,At=!!N.morphAttributes.color;let ot=pn;F.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ot=x.toneMapping);const Vt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Je=Vt!==void 0?Vt.length:0,Fe=Ie.get(F),gs=h.state.lights;if(Y===!0&&(oe===!0||S!==M)){const Ct=S===M&&F.id===k;Ue.setState(F,S,Ct)}let et=!1;F.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==gs.state.version||Fe.outputColorSpace!==Se||I.isBatchedMesh&&Fe.batching===!1||!I.isBatchedMesh&&Fe.batching===!0||I.isInstancedMesh&&Fe.instancing===!1||!I.isInstancedMesh&&Fe.instancing===!0||I.isSkinnedMesh&&Fe.skinning===!1||!I.isSkinnedMesh&&Fe.skinning===!0||I.isInstancedMesh&&Fe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Fe.instancingColor===!1&&I.instanceColor!==null||Fe.envMap!==ye||F.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ue.numPlanes||Fe.numIntersection!==Ue.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==we||Fe.morphTargets!==Ce||Fe.morphNormals!==tt||Fe.morphColors!==At||Fe.toneMapping!==ot||be.isWebGL2===!0&&Fe.morphTargetsCount!==Je)&&(et=!0):(et=!0,Fe.__version=F.version);let Sn=Fe.currentProgram;et===!0&&(Sn=Ri(F,P,I));let yr=!1,di=!1,vs=!1;const ht=Sn.getUniforms(),En=Fe.uniforms;if(he.useProgram(Sn.program)&&(yr=!0,di=!0,vs=!0),F.id!==k&&(k=F.id,di=!0),yr||M!==S){ht.setValue(D,"projectionMatrix",S.projectionMatrix),ht.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ct=ht.map.cameraPosition;Ct!==void 0&&Ct.setValue(D,Le.setFromMatrixPosition(S.matrixWorld)),be.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ht.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,di=!0,vs=!0)}if(I.isSkinnedMesh){ht.setOptional(D,I,"bindMatrix"),ht.setOptional(D,I,"bindMatrixInverse");const Ct=I.skeleton;Ct&&(be.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),ht.setValue(D,"boneTexture",Ct.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(ht.setOptional(D,I,"batchingTexture"),ht.setValue(D,"batchingTexture",I._matricesTexture,T));const xs=N.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0&&be.isWebGL2===!0)&&ze.update(I,N,Sn),(di||Fe.receiveShadow!==I.receiveShadow)&&(Fe.receiveShadow=I.receiveShadow,ht.setValue(D,"receiveShadow",I.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(En.envMap.value=ye,En.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),di&&(ht.setValue(D,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&qo(En,vs),le&&F.fog===!0&&ae.refreshFogUniforms(En,le),ae.refreshMaterialUniforms(En,F,q,G,_e),is.upload(D,Mr(Fe),En,T)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(is.upload(D,Mr(Fe),En,T),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ht.setValue(D,"center",I.center),ht.setValue(D,"modelViewMatrix",I.modelViewMatrix),ht.setValue(D,"normalMatrix",I.normalMatrix),ht.setValue(D,"modelMatrix",I.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ct=F.uniformsGroups;for(let Ss=0,Yo=Ct.length;Ss<Yo;Ss++)if(be.isWebGL2){const Ar=Ct[Ss];ke.update(Ar,Sn),ke.bind(Ar,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function qo(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function Zo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,P,N){Ie.get(S.texture).__webglTexture=P,Ie.get(S.depthTexture).__webglTexture=N;const F=Ie.get(S);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,P){const N=Ie.get(S);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,N=0){w=S,C=P,b=N;let F=!0,I=null,le=!1,pe=!1;if(S){const ye=Ie.get(S);ye.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(D.FRAMEBUFFER,null),F=!1):ye.__webglFramebuffer===void 0?T.setupRenderTarget(S):ye.__hasExternalTextures&&T.rebindTextures(S,Ie.get(S.texture).__webglTexture,Ie.get(S.depthTexture).__webglTexture);const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const we=Ie.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[P])?I=we[P][N]:I=we[P],le=!0):be.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?I=Ie.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?I=we[N]:I=we,A.copy(S.viewport),H.copy(S.scissor),W=S.scissorTest}else A.copy(Z).multiplyScalar(q).floor(),H.copy(Q).multiplyScalar(q).floor(),W=ee;if(he.bindFramebuffer(D.FRAMEBUFFER,I)&&be.drawBuffers&&F&&he.drawBuffers(S,I),he.viewport(A),he.scissor(H),he.setScissorTest(W),le){const ye=Ie.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ye.__webglTexture,N)}else if(pe){const ye=Ie.get(S.texture),Ne=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,N||0,Ne)}k=-1},this.readRenderTargetPixels=function(S,P,N,F,I,le,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){he.bindFramebuffer(D.FRAMEBUFFER,Se);try{const ye=S.texture,Ne=ye.format,we=ye.type;if(Ne!==Gt&&ue.convert(Ne)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===Ei&&(ve.has("EXT_color_buffer_half_float")||be.isWebGL2&&ve.has("EXT_color_buffer_float"));if(we!==mn&&ue.convert(we)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===dn&&(be.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-F&&N>=0&&N<=S.height-I&&D.readPixels(P,N,F,I,ue.convert(Ne),ue.convert(we),le)}finally{const ye=w!==null?Ie.get(w).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(S,P,N=0){const F=Math.pow(2,-N),I=Math.floor(P.image.width*F),le=Math.floor(P.image.height*F);T.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,N,0,0,S.x,S.y,I,le),he.unbindTexture()},this.copyTextureToTexture=function(S,P,N,F=0){const I=P.image.width,le=P.image.height,pe=ue.convert(N.format),Se=ue.convert(N.type);T.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment),P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,S.x,S.y,I,le,pe,Se,P.image.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,S.x,S.y,P.mipmaps[0].width,P.mipmaps[0].height,pe,P.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,F,S.x,S.y,pe,Se,P.image),F===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(S,P,N,F,I=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=S.max.x-S.min.x+1,pe=S.max.y-S.min.y+1,Se=S.max.z-S.min.z+1,ye=ue.convert(F.format),Ne=ue.convert(F.type);let we;if(F.isData3DTexture)T.setTexture3D(F,0),we=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)T.setTexture2DArray(F,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Ce=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),At=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),Vt=D.getParameter(D.UNPACK_SKIP_IMAGES),Je=N.isCompressedTexture?N.mipmaps[I]:N.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),N.isDataTexture||N.isData3DTexture?D.texSubImage3D(we,I,P.x,P.y,P.z,le,pe,Se,ye,Ne,Je.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(we,I,P.x,P.y,P.z,le,pe,Se,ye,Je.data)):D.texSubImage3D(we,I,P.x,P.y,P.z,le,pe,Se,ye,Ne,Je),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),I===0&&F.generateMipmaps&&D.generateMipmap(we),he.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){C=0,b=0,w=null,he.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gr?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===fs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Un:xo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Un?ut:Jt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wp extends ko{}wp.prototype.isWebGL1Renderer=!0;class Rp extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Vo extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ka=new ct,fr=new Ao,ts=new ps,ns=new O;class Cp extends yt{constructor(e=new nn,t=new Vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),ts.radius+=r,e.ray.intersectsSphere(ts)===!1)return;Ka.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Ka);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=p,g=m;_<g;_++){const h=u.getX(_);ns.fromBufferAttribute(f,h),ja(ns,h,l,s,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=p,g=m;_<g;_++)ns.fromBufferAttribute(f,_),ja(ns,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ja(i,e,t,n,s,r,a){const o=fr.distanceSqToPoint(i);if(o<t){const l=new O;fr.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Lp extends Tt{constructor(e,t,n,s,r,a,o,l,u){super(e,t,n,s,r,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ja(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ja();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ja(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mr);function Dp(){const i=document.getElementById("three-bg");if(!i)return;const e=new Rp,t=new Dt(60,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=50;const n=250,s=new Float32Array(n*3),r=new Float32Array(n*3),a=[new He("#1d7d78"),new He("#2563eb"),new He("#647581"),new He("#b45309")];for(let c=0;c<n;c++){s[c*3]=(Math.random()-.5)*100,s[c*3+1]=(Math.random()-.5)*60,s[c*3+2]=(Math.random()-.5)*40;const E=a[Math.floor(Math.random()*a.length)];r[c*3]=E.r,r[c*3+1]=E.g,r[c*3+2]=E.b}const o=new nn;o.setAttribute("position",new Ut(s,3)),o.setAttribute("color",new Ut(r,3));const l=document.createElement("canvas");l.width=l.height=64;const u=l.getContext("2d"),d=u.createRadialGradient(32,32,0,32,32,32);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.4,"rgba(255,255,255,0.6)"),d.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=d,u.fillRect(0,0,64,64);const f=new Lp(l),p=new Vo({size:1.2,map:f,vertexColors:!0,transparent:!0,opacity:.65,depthWrite:!1,blending:Pn}),m=new Cp(o,p);e.add(m);const _=new ko({alpha:!0,antialias:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(0,0),i.appendChild(_.domElement);const g=new Pp;function h(){const c=g.getElapsedTime();m.rotation.y=c*.03,m.rotation.x=Math.sin(c*.2)*.05,window.__mx!==void 0&&(m.rotation.y+=window.__mx*8e-4),_.render(e,t),requestAnimationFrame(h)}h(),window.addEventListener("mousemove",c=>{window.__mx=(c.clientX/window.innerWidth-.5)*2}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),_.setSize(window.innerWidth,window.innerHeight)}),window.__three={scene:e,camera:t,renderer:_,points:m}}const Qa={GEO:"讓生成式 AI 更容易理解、摘要與引用網站內容的優化方法。","GEO 自評":"本報表依 5 項 KPI（主題、招生問答、證據、結構、技術）對 itm.tcu.edu.tw 原始碼評分；非 Google 官方分數。","JSON-LD":"以 JSON 格式標記結構化資料的標準；搜尋引擎靠它建立 entity graph。",canonical:"告訴搜尋引擎頁面正式網址，避免重複頁面混淆。",hreflang:"標記頁面語系／地區變體，避免多語系被當重複。","Open Graph":"網站分享到社群平台時使用的標題、說明與圖片（og:title/og:description/og:image）。","YouTube facade":"先用靜圖代替 iframe，點擊後才載入 player，省頻寬與 LCP。",LCP:"Largest Contentful Paint，行動版目標 < 2.5s。",轉換追蹤:"記錄電話、Email、表單、招生按鈕等重要行動。",過期:"頁面內容的學年度或年份標記早於 cutoff（本期為 2022 AD），仍出現在 GSC Top pages 但已不具時效性。","Wayback Machine":"archive.org 提供的網頁歷史快照資料庫，可比對 HTML 在不同時間點的差異。",P0:"P0 = 本週必做；P1 = 1 個月內；P2 = 1 季內；P3 = 例行維護。"};function Ip(){const i=Object.keys(Qa).sort((d,f)=>f.length-d.length),e=d=>d.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),t=new RegExp("("+i.map(e).join("|")+")(?![^<]*>)","g");function n(d){const f=new Set(["SCRIPT","STYLE","CODE","PRE","TEXTAREA"]);function p(g){for(;g&&g!==d;){if(f.has(g.tagName)||g.classList&&g.classList.contains("gloss"))return!0;g=g.parentNode}return!1}const m=document.createTreeWalker(d,NodeFilter.SHOW_TEXT,{acceptNode(g){return!g.nodeValue.trim()||p(g.parentNode)||!t.test(g.nodeValue)?NodeFilter.FILTER_REJECT:(t.lastIndex=0,NodeFilter.FILTER_ACCEPT)}}),_=[];for(;m.nextNode();)_.push(m.currentNode);_.forEach(g=>{const h=g.nodeValue,c=document.createDocumentFragment();let E=0;t.lastIndex=0;let x;for(;x=t.exec(h);){c.appendChild(document.createTextNode(h.slice(E,x.index)));const y=document.createElement("span");y.className="gloss",y.setAttribute("data-term",x[1]),y.textContent=x[1],c.appendChild(y),E=x.index+x[1].length}E>0&&(c.appendChild(document.createTextNode(h.slice(E))),g.parentNode.replaceChild(c,g))})}function s(d,f){const p=f.getBoundingClientRect(),m=window.scrollY||window.pageYOffset,_=window.scrollX||window.pageXOffset;d.style.left=Math.min(window.innerWidth-320,Math.max(8,p.left+_))+"px";let g=p.top+m-d.offsetHeight-12;g<m+8?(g=p.bottom+m+12,d.classList.add("below")):d.classList.remove("below"),d.style.top=g+"px"}let r=null,a=null,o=null;function l(d){const f=Qa[d.getAttribute("data-term")];r||(r=document.createElement("div"),r.className="gloss-tip",document.body.appendChild(r)),r.innerHTML="<strong>"+d.getAttribute("data-term")+"</strong>"+f,r.style.display="block",requestAnimationFrame(()=>s(r,d)),setTimeout(()=>r&&r.classList.add("show"),10)}function u(){o&&(clearTimeout(o),o=null),r&&(r.classList.remove("show"),setTimeout(()=>{r&&(r.style.display="none")},200))}document.addEventListener("mouseover",d=>{const f=d.target.closest&&d.target.closest(".gloss");!f||f===a||(o&&clearTimeout(o),a=f,o=setTimeout(()=>l(f),1e3))}),document.addEventListener("mouseout",d=>{const f=d.target.closest&&d.target.closest(".gloss");f&&f===a&&setTimeout(()=>{a===f&&u()},100)}),document.addEventListener("click",d=>{const f=d.target.closest&&d.target.closest(".gloss");f&&(o&&clearTimeout(o),l(f),setTimeout(u,4e3))}),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>n(document.body)):n(document.body)}function Up(){const i=document.querySelector(".print");i&&i.addEventListener("click",()=>{setTimeout(()=>window.print(),100)})}function eo(){Dp(),Ip(),Up(),console.log("[TCU WebInsight v49] ready — Three.js + glossary")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",eo):eo();
