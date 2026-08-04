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
  countries:[
   {name:"臺灣",sessions:3669,users:1801,share:93.5},
   {name:"中國",sessions:95,users:95,share:2.4},
   {name:"美國",sessions:19,users:19,share:0.5},
   {name:"其他國家",sessions:118,users:75,share:3.6}
  ],
  devices:[
   {name:"行動裝置",sessions:2207,users:1138,share:55.8},
   {name:"桌機",sessions:1638,users:805,share:41.4},
   {name:"平板",sessions:84,users:59,share:2.1}
  ],
  sources:[
   {name:"直接進站",sessions:2047,users:1081,share:52.0},
   {name:"自然搜尋",sessions:1694,users:818,share:43.0},
   {name:"校內參考",sessions:42,users:16,share:1.1},
   {name:"其他來源",sessions:119,users:75,share:3.0}
  ]
 },
 sections:{
  trends:{
   weeks:['06/07','06/14','06/21','06/28','07/05','07/12','07/19','07/26'],
   traffic:{a:[779,1271,211,993,1082,837,1124,3902],b:[1129,2434,412,1749,2869,2222,2787,10814]},
   search:{a:[0,0,0,0,0,0,0,18620],b:[0,0,0,0,0,0,0,1301]}
  }
 },
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
