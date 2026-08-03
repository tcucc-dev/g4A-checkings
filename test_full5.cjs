
// Setup
var window = globalThis;
window.scrollTo = () => {};
window.addEventListener = () => {};
var document = {};
document.createElement = () => ({relList: {supports: () => false}, href: ''});
document.addEventListener = () => {};
document.body = {appendChild: () => {}, addEventListener: () => {}, setAttribute: () => {}, className: '', querySelectorAll: () => [], querySelector: () => null, getElementsByTagName: () => [], getContext: () => ({clearRect: () => {}, beginPath: () => {}, moveTo: () => {}, lineTo: () => {}, stroke: () => {}, fillText: () => {}, fillRect: () => {}, scale: () => {}, setTransform: () => {}, fillStyle: '', strokeStyle: ''}), style: {}};
document.querySelectorAll = () => [];
document.querySelector = () => null;
document.getElementsByTagName = () => [];
document.readyState = 'complete';
document.documentElement = {style: {}};
document.addEventListener = () => {};
Object.defineProperty(window, 'document', {value: document, writable: true, configurable: true});
var localStorage = {getItem: () => null, setItem: () => {}};
var MutationObserver = class { observe(){} };
var location = { href: '' };
var history = { pushState: () => {} };
var navigator = {userAgent: 'node', platform: 'node'};
var screen = {};
var fetch = () => Promise.resolve();
var URL = globalThis.URL;
var Blob = class {};
var FileReader = class {};
var FormData = class {};
var WebSocket = class {};
var Worker = class {};
var OffscreenCanvas = undefined;
var WebGL2RenderingContext = undefined;
var WebGLRenderingContext = undefined;
var HTMLImageElement = undefined;
var HTMLCanvasElement = undefined;
var ImageBitmap = undefined;
var performance = { now: () => Date.now() };
var __THREE_DEVTOOLS__ = undefined;
var self = undefined;
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();window.WEBINSIGHT=window.WEBINSIGHT||{};window.WEBINSIGHT.DATA={weeks:["07/25","07/26","07/27","07/28","07/29","07/30","07/31"],kpis:[{k:"本週造訪人數",v:"190",trend:"+12.5%",avg:"+12.5% 較前一日",up:!0,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[39,29,34,41]},{k:"本週工作階段",v:"235",trend:"+12.5%",avg:"+12.5% 較前一日",up:!0,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[42,40,40,45]},{k:"Google 搜尋點擊",v:"91",trend:"-63.6%",avg:"-63.6% 較前一日",up:!1,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[13,24,11,4]},{k:"Google 搜尋點擊率",v:"3.57%",trend:"—",avg:"近 7 天平均",up:!0,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[4.05,7.79,3.36,1.58]}],traffic:{a:[15,17,36,42,40,40,45],b:[35,39,170,116,177,186,148]},search:{a:[596,387,358,321,308,327,253],b:[4,13,22,13,24,11,4]},funnel:{a:[10,12,42,13,22,13,45],b:[8,0,39,12,14,11,15],c:[4,7,6,11,18,17,10]},decisions:[{p:"P1",id:"SEO-001",title:"改善高曝光、低點擊搜尋入口",reason:"Google 搜尋帶來的點擊這一週 81 次，前一週 81 次（+47.3%）；曝光 1902 → 2587（+36.0%）。",who:"單位網站管理人",support:"電算中心提供 query × url 證據",due:"2 週"},{p:"P1",id:"FUNNEL-001",title:"把首頁與師資頁改為下一步導覽中心",reason:"近一週 課程頁/師資頁/特色頁 工作階段分別為 149/110/293，課程頁到達率 67.1%。",who:"單位網站管理人",support:"電算中心建 device split 報表",due:"3 週"},{p:"P2",id:"MOBILE-001",title:"檢查手機招生與聯絡路徑",reason:"近一週裝置別工作階段需以最新 query 重新驗證（資料庫已更新至 2026-07-26）。",who:"單位網站管理人",support:"電算中心技術支援",due:"4 週"}],issues:[{id:"SEO-001",p:"P1",title:"高曝光零點擊搜尋入口",manager:"這禮拜 Google 搜尋帶來 81 個點擊，前一週 81 個（+47.3%），曝光 1902 → 2587。搜尋 ITM 的人看得到且點進來變多",pages:"首頁、英文首頁、ITM 關鍵字 landing pages",web:["優化 title 加正式系名","優化 meta description","為「ITM」「慈大學資」建立專門 landing page","補強中英文系名一致"],accept:"四週後 GSC 點擊回到 60+ 且 CTR > 3%。",it:["提供 query × url 明細","比較前 8 週 CTR","確認國家與裝置分佈"],status:"資料正常",table:"all_gsc_summary",fields:"query、url、impressions、clicks、sum_position",query:"SEO-ZEROCLICK-001",period:"2026-07-20 至 2026-07-26",limit:"搜尋資料不代表實際頁面停留。"},{id:"FUNNEL-001",p:"P1",title:"課程頁到達率回升",manager:"近一週 課程頁工作階段 48、師資頁 44、特色頁 87，課程頁到達率 5.3%。持續把「看課程」的入口放在首屏。",pages:"首頁、招生頁、課程頁",web:["為手機優化 CTA 大小","縮短首屏資訊密度","加入 line/tel 一鍵聯絡","加入 sticky form 表單"],accept:"課程頁到達率回穩或改善，連續 2 週不再下降。",it:["以 session_key 建立漏斗","維護 page_group 規則","每週提供到達率趨勢"],status:"查詢可用",table:"all_units_summary",fields:"device、session_key、page_location、link_url",query:"FUNNEL-WEEKLY-001",period:"最近 8 個完整週",limit:"轉換不代表完成招生申請。"},{id:"MOBILE-001",p:"P2",title:"手機裝置占比偏低",manager:"手機裝置占比需以最新資料重新驗證。本週資料截止 2026-07-26，請參考 device evidence report。",pages:"首頁、招生頁、入學方式頁",web:["實機檢查 iPhone SE/A14/Android","檢查 CTA 是否拇指可達","檢查字體 16px+","確認 tel/mailto 可點"],accept:"完成重要路徑人工驗收；手機指標不低於桌機 70% 或提出合理說明。",it:["提供裝置別頁數","互動時間與點擊率比較","列出差距最大頁面"],status:"行為代理指標",table:"all_units_summary",fields:"device_category、engagement_time_msec、event_name、link_url",query:"DEVICE-RISK-001",period:"2026-07-20 至 2026-07-26",limit:"只能提示風險，不能直接判斷破版。"},{id:"DATA-001",p:"P2",title:"GSC 點擊與 GA4 自然搜尋數字差異",manager:"近一週 Google 搜尋帶來 81 個點擊，本校網站統計顯示 222 個到訪工作階段。兩者數字差 174 是正常的，因為它們用不同方式計算（Google vs 本校網站 GA4）。",pages:"無需修改頁面",web:["閱讀報告時分清楚 GSC 點擊與 GA4 工作階段"],accept:"主管報告固定顯示定義差異。",it:["固定差異說明","檢查時區與站台篩選","保留兩個數值"],status:"已說明",table:"all_gsc_summary＋all_units_summary",fields:"clicks、source、medium、session_key",query:"DATA-CROSSSOURCE-001",period:"2026-07-20 至 2026-07-26",limit:"兩套系統的事件與歸因方式不同。"}],webRows:[["SEO-001","/ (Top 1)",580,18,4.7,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/412-1022-2586.php (Top 2)",180,15,4.6,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/406-1022-65878,r452.php?Lang=zh-tw (Top 3)",112,4,7.5,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/404-1022-36099.php (Top 4)",76,0,6,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/404-1022-52388.php?Lang=zh-tw (Top 5)",62,2,6.2,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["SEO-001","/p/16-1022-45542.php?Lang=zh-tw (Top 6)",52,1,15.1,"優化 title 加正式系名 + meta description","點擊率提升至 3%+"],["FUNNEL-001","首頁 → 招生頁 → 課程頁","—","—","—","新增 CTA 與課程摘要","課程頁到達率改善"]],quality:[["all_units_summary","2026-07-24","正常","page_view、session_key、link_url 可查詢"],["all_gsc_summary","2026-07-24","正常","曝光、點擊、查詢字詞可查詢"],["search_behavior_summary","2026-07-25","注意","不得跨 query 直接加總 active_users"]],queries:[["GA4-WEEKLY-TREND-001","all_units_summary","八週工作階段與瀏覽量","date、event_name、user_pseudo_id、ga_session_id","正常","每週自動更新"],["GSC-WEEKLY-TREND-001","all_gsc_summary","八週曝光與點擊","data_date、impressions、clicks","正常","固定完整週"],["FUNNEL-WEEKLY-001","all_units_summary","招生後續到達率","event_timestamp、page_location、page_title、user_pseudo_id、ga_session_id","正常","維護 page_group 規則"],["SEO-ZEROCLICK-001","all_gsc_summary","高曝光零點擊","query、url、impressions、clicks、sum_position","正常","提供網站管理人"],["DEVICE-RISK-001","all_units_summary","手機行為風險","device_category、engagement_time_msec、link_url","代理指標","只提示風險"],["DATA-CROSSSOURCE-001","兩表交叉","GA4／GSC 差異說明","clicks、source、medium、session_key","已說明","保留兩套數值"]],audience:{source:[{name:"直接進站",sessions:162,medium:"(none)"},{name:"自然搜尋",sessions:53,medium:"organic"},{name:"校內站台",sessions:3,medium:"internal"},{name:"其他／站外",sessions:1,medium:"other"},{name:"AI 推薦",sessions:1,medium:"ai-assistant"}],device:[{name:"desktop",sessions:147},{name:"mobile",sessions:73},{name:"tablet",sessions:2}],country:[{name:"臺灣",sessions:149},{name:"中國",sessions:65},{name:"美國",sessions:5},{name:"其他國家",sessions:3}],total:222},sections:{trends:[{week:"07/25",sessions:15,users:14,pageviews:35,impressions:596,clicks:4},{week:"07/26",sessions:17,users:17,pageviews:39,impressions:387,clicks:13},{week:"07/27",sessions:36,users:33,pageviews:170,impressions:358,clicks:22},{week:"07/28",sessions:42,users:39,pageviews:116,impressions:321,clicks:13},{week:"07/29",sessions:40,users:29,pageviews:177,impressions:308,clicks:24},{week:"07/30",sessions:40,users:34,pageviews:186,impressions:327,clicks:11},{week:"07/31",sessions:45,users:41,pageviews:148,impressions:253,clicks:4}],anomaly_rule:{threshold_pct:30,min_base:{sessions:20,impressions:100,clicks:10,users:20,pageviews:50}},brand_config:{terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","資管","資訊科技與管理","ITM","itm"]},brand_split:[{month:"05/01",brand_pct:74.1,nonbrand_pct:25.9,brand_imp:4101,brand_clicks:79,nonbrand_imp:1434,nonbrand_clicks:35},{month:"06/01",brand_pct:74.3,nonbrand_pct:25.7,brand_imp:4312,brand_clicks:110,nonbrand_imp:1491,nonbrand_clicks:25},{month:"07/01",brand_pct:69.2,nonbrand_pct:30.8,brand_imp:2102,brand_clicks:42,nonbrand_imp:936,nonbrand_clicks:16}],keyword_rows:[{query:"慈大學資",cls:"brand",imp:94,clicks:0,sum_position:367,landing:"/"},{query:"site:itm.tcust.edu.tw",cls:"brand",imp:50,clicks:0,sum_position:225,landing:"/"},{query:"tcust",cls:"brand",imp:40,clicks:0,sum_position:0,landing:"/"},{query:"site:itm.tcu.edu.tw",cls:"brand",imp:40,clicks:0,sum_position:180,landing:"/"},{query:"慈濟大學 資管系",cls:"brand",imp:37,clicks:4,sum_position:0,landing:"/p/412-1022-2586.php"},{query:"itm",cls:"brand",imp:27,clicks:0,sum_position:184,landing:"/?Lang=en"},{query:"慈大 學資",cls:"brand",imp:26,clicks:0,sum_position:140,landing:"/"},{query:"tcu",cls:"brand",imp:24,clicks:0,sum_position:72,landing:"/"},{query:"慈濟大學資管系",cls:"brand",imp:20,clicks:2,sum_position:0,landing:"/p/412-1022-2586.php"},{query:"慈濟大學資訊科技與管理學系",cls:"brand",imp:17,clicks:2,sum_position:0,landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},{query:"大學專題競賽",cls:"nonbrand",imp:16,clicks:0,sum_position:82,landing:"/p/404-1022-34441.php"},{query:"tcu itm",cls:"brand",imp:12,clicks:2,sum_position:0,landing:"/?Lang=en"},{query:"證照",cls:"nonbrand",imp:12,clicks:0,sum_position:509,landing:"/p/404-1022-30082.php"},{query:"資訊科技系",cls:"nonbrand",imp:10,clicks:0,sum_position:91,landing:"/"},{query:"大學專題競賽2026",cls:"nonbrand",imp:9,clicks:0,sum_position:53,landing:"/p/404-1022-34441.php"},{query:"慈濟大學科系",cls:"brand",imp:8,clicks:0,sum_position:50,landing:"/"},{query:"蕭志清",cls:"nonbrand",imp:8,clicks:2,sum_position:33,landing:"/p/412-1022-2586.php"},{query:"楊明軒",cls:"nonbrand",imp:7,clicks:0,sum_position:68,landing:"/p/412-1022-2586.php"},{query:"2026專題競賽",cls:"nonbrand",imp:7,clicks:0,sum_position:44,landing:"/p/404-1022-34441.php"},{query:"慈大資管",cls:"brand",imp:7,clicks:1,sum_position:0,landing:"/p/412-1022-2586.php"},{query:"謝金峰",cls:"nonbrand",imp:7,clicks:0,sum_position:38,landing:"/p/412-1022-2586.php"}],content_matrix:[{normalized_path:"/index.php",title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",users:28,sessions:45,pageviews:166,engagement_sec:.7},{normalized_path:"/p/426-1022-2.php",title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系",users:25,sessions:25,pageviews:98,engagement_sec:.5},{normalized_path:"/",title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",users:24,sessions:29,pageviews:95,engagement_sec:.9},{normalized_path:"/p/412-1022-2586.php",title:"師資陣容 - 資訊科技與管理學系",users:23,sessions:23,pageviews:64,engagement_sec:.4},{normalized_path:"/p/404-1022-52388.php",title:"碩士班專區 - 資訊科技與管理學系",users:10,sessions:12,pageviews:27,engagement_sec:.3},{normalized_path:"/p/403-1022-452-1.php",title:"最新消息 - 資訊科技與管理學系",users:8,sessions:8,pageviews:20,engagement_sec:2.3},{normalized_path:"/p/404-1022-36099.php",title:"課程地圖與開課學分時數表 / Curriculum Map",users:8,sessions:8,pageviews:50,engagement_sec:.7},{normalized_path:"/p/404-1022-30026.php",title:"系所介紹 - 資訊科技與管理學系",users:7,sessions:8,pageviews:16,engagement_sec:.4},{normalized_path:"/p/412-1022-2570.php",title:"最新消息 - 資訊科技與管理學系",users:6,sessions:6,pageviews:20,engagement_sec:1.4},{normalized_path:"/p/404-1022-34441.php",title:"課程規劃 - 資訊科技與管理學系",users:6,sessions:6,pageviews:16,engagement_sec:.4},{normalized_path:"/p/404-1022-30020.php",title:"入學方式 - 資訊科技與管理學系",users:6,sessions:6,pageviews:16,engagement_sec:.3},{normalized_path:"/p/404-1022-30062.php",title:"規章辦法 - 資訊科技與管理學系",users:4,sessions:4,pageviews:10,engagement_sec:.2},{normalized_path:"/p/403-1022-703-1.php",title:"Photo - 資訊科技與管理學系",users:4,sessions:4,pageviews:8,engagement_sec:.6},{normalized_path:"/p/426-1022-5.php",title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系",users:4,sessions:4,pageviews:9,engagement_sec:.7},{normalized_path:"/p/404-1022-60990.php",title:"碩士班相關表格 - 資訊科技與管理學系",users:4,sessions:4,pageviews:14,engagement_sec:.7},{normalized_path:"/p/404-1022-66044.php",title:"智慧物聯實驗室 - 資訊科技與管理學系",users:4,sessions:4,pageviews:6,engagement_sec:.1},{normalized_path:"/p/412-1022-2590.php",title:"業界實習 - 資訊科技與管理學系",users:4,sessions:4,pageviews:6,engagement_sec:2.7},{normalized_path:"/p/17-1022.php",title:"網站導覽 - 資訊科技與管理學系",users:3,sessions:3,pageviews:4,engagement_sec:.1},{normalized_path:"/p/404-1022-45541.php",title:"實務專題 - 資訊科技與管理學系",users:3,sessions:3,pageviews:5,engagement_sec:0},{normalized_path:"/p/406-1022-65878,r452.php",title:"[2026全國經營管理專題競賽] 獲獎名單 - 資訊科技與管理學系",users:3,sessions:3,pageviews:14,engagement_sec:.8},{normalized_path:"/p/404-1022-47588.php",title:"人工智慧高階電腦教室 - 資訊科技與管理學系",users:3,sessions:3,pageviews:9,engagement_sec:.3},{normalized_path:"/p/406-1022-61022,r709.php",title:"111學年度馬來西亞偉特科技公司實習 - 資訊科技與管理學系",users:2,sessions:2,pageviews:3,engagement_sec:.9},{normalized_path:"/p/404-1022-30039.php",title:"元宇宙多媒體實驗室 (2D107) - 資訊科技與管理學系",users:2,sessions:2,pageviews:4,engagement_sec:1.3},{normalized_path:"/p/403-1022-709-1.php",title:"海外實習 - 資訊科技與管理學系",users:2,sessions:2,pageviews:4,engagement_sec:.2},{normalized_path:"/p/406-1022-65512,r452.php",title:"2025 青春未來 AI體驗營 - 資訊科技與管理學系",users:2,sessions:2,pageviews:3,engagement_sec:.6}],traffic_quality:[{group:"Direct",source:"(direct)",medium:"(none)",sessions:138,users:113,avg_eng_sec_per_session:35.1,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"足夠"},{group:"Organic Search",source:"google",medium:"organic",sessions:46,users:35,avg_eng_sec_per_session:55,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"足夠"},{group:"External Referral",source:"cse.google.com",medium:"referral",sessions:2,users:1,avg_eng_sec_per_session:3.1,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"樣本較少"},{group:"Internal Referral",source:"lle.moe.edu.tw",medium:"referral",sessions:1,users:1,avg_eng_sec_per_session:152.7,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"樣本較少"},{group:"Internal Referral",source:"collego.edu.tw",medium:"referral",sessions:1,users:1,avg_eng_sec_per_session:106.1,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"樣本較少"},{group:"AI Referral",source:"chatgpt.com",medium:"ai-assistant",sessions:1,users:1,avg_eng_sec_per_session:0,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"樣本較少"},{group:"AI Referral",source:"perplexity.ai",medium:"referral",sessions:0,users:0,avg_eng_sec_per_session:0,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"},{group:"AI Referral",source:"gemini.google.com",medium:"referral",sessions:0,users:0,avg_eng_sec_per_session:0,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"},{group:"Social",source:"facebook.com",medium:"referral",sessions:0,users:0,avg_eng_sec_per_session:0,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"}],ai_config:{domains:[{platform:"ChatGPT",pattern:"chatgpt\\.com|openai\\.com|medium=ai-assistant"},{platform:"Perplexity",pattern:"perplexity\\.ai"},{platform:"Gemini",pattern:"gemini\\.google\\.com|bard\\.google\\.com"},{platform:"Copilot",pattern:"copilot\\.microsoft\\.com|bing\\.com/chat"},{platform:"Claude",pattern:"claude\\.ai"},{platform:"Other AI",pattern:"(others|unknown)"}]},ai_timeseries:[],ai_platforms:[{platform:"ChatGPT",sessions:1,users:1,landing_page:"/p/404-1022-52388.php?Lang=zh-tw",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本較少"},{platform:"Perplexity",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"資料不足"},{platform:"Gemini",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"資料不足"},{platform:"Copilot",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"資料不足"},{platform:"Claude",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"資料不足"}],ai_total_period_sessions:1,cta_funnel:[{cta_category:"其他連結",distinct_links:25,sessions:38,users:29,sample_note:"足夠"},{cta_category:"招生簡章",distinct_links:9,sessions:18,users:17,sample_note:"足夠"},{cta_category:"下載文件 (PDF/DOC/XLSX)",distinct_links:6,sessions:15,users:15,sample_note:"足夠"},{cta_category:"入學方式",distinct_links:4,sessions:6,users:6,sample_note:"足夠"},{cta_category:"LINE",distinct_links:1,sessions:2,users:2,sample_note:"樣本較少"},{cta_category:"電話",distinct_links:0,sessions:0,users:0,sample_note:"資料不足"},{cta_category:"Email",distinct_links:0,sessions:0,users:0,sample_note:"資料不足"},{cta_category:"報名系統",distinct_links:0,sessions:0,users:0,sample_note:"資料不足"},{cta_category:"聯絡表單",distinct_links:0,sessions:0,users:0,sample_note:"資料不足"}],cta_links:[{category:"LINE",link_text:"加入 ITM 招生 LINE 群組",source_page:"首頁",destination:"https://line.me/R/ti/p/itm-tcu",clicks:2,users:2,valid_rate:1},{category:"招生簡章",link_text:"招生入學方式",source_page:"入學方式",destination:"/p/404-1022-36099.php",clicks:4,users:4,valid_rate:1},{category:"下載文件",link_text:"招生簡章 PDF",source_page:"首頁",destination:"/var/file/22/1022/img/1870/424380578.pdf",clicks:2,users:2,valid_rate:1},{category:"入學方式",link_text:"個人申請",source_page:"招生頁",destination:"/p/404-1022-30026.php?Lang=zh-tw",clicks:1,users:1,valid_rate:1}],international:[{country:"臺灣",sessions:129,users:93,avg_eng_sec:57,top_landing:"/",admission_cta:0,contact_click:0,sample_note:"足夠"},{country:"中國",sessions:54,users:54,avg_eng_sec:1.9,top_landing:"/?Lang=zh-tw",admission_cta:0,contact_click:0,sample_note:"足夠"},{country:"美國",sessions:5,users:4,avg_eng_sec:35.3,top_landing:"/p/406-1022-45544,r733.php?Lang=zh-tw",admission_cta:0,contact_click:0,sample_note:"樣本較少"},{country:"德國",sessions:1,users:1,avg_eng_sec:2.4,top_landing:"/",admission_cta:0,contact_click:0,sample_note:"樣本較少"},{country:"其他",sessions:0,users:0,avg_eng_sec:0,top_landing:"-",admission_cta:0,contact_click:0,sample_note:"資料不足"}],user_paths:[{landing:"/",second_page:"/",exit_action:"瀏覽後離開",sessions:42,exit_share:.65},{landing:"/p/426-1022-2.php",second_page:"/p/426-1022-2.php",exit_action:"瀏覽後離開",sessions:24,exit_share:.96},{landing:"/",second_page:"/",exit_action:"瀏覽後離開",sessions:23,exit_share:.36},{landing:"/p/412-1022-2586.php",second_page:"/p/412-1022-2586.php",exit_action:"瀏覽後離開",sessions:8,exit_share:.35},{landing:"/p/404-1022-52388.php",second_page:"/p/404-1022-52388.php",exit_action:"瀏覽後離開",sessions:6,exit_share:.6},{landing:"/p/403-1022-452-1.php",second_page:"/p/403-1022-452-1.php",exit_action:"瀏覽後離開",sessions:6,exit_share:.75},{landing:"/p/412-1022-2570.php",second_page:"/p/412-1022-2570.php",exit_action:"瀏覽後離開",sessions:5,exit_share:.71},{landing:"/p/404-1022-36099.php",second_page:"/p/404-1022-36099.php",exit_action:"瀏覽後離開",sessions:4,exit_share:.5},{landing:"/p/412-1022-2590.php",second_page:"/p/412-1022-2590.php",exit_action:"瀏覽後離開",sessions:4,exit_share:1},{landing:"/p/403-1022-703-1.php",second_page:"/p/403-1022-703-1.php",exit_action:"瀏覽後離開",sessions:4,exit_share:1},{landing:"/p/404-1022-60990.php",second_page:"/p/404-1022-60990.php",exit_action:"瀏覽後離開",sessions:3,exit_share:1},{landing:"/p/17-1022.php",second_page:"/p/17-1022.php",exit_action:"瀏覽後離開",sessions:3,exit_share:1},{landing:"/p/426-1022-5.php",second_page:"/p/426-1022-5.php",exit_action:"瀏覽後離開",sessions:2,exit_share:1},{landing:"/p/406-1022-65878,r452.php",second_page:"/p/406-1022-65878,r452.php",exit_action:"瀏覽後離開",sessions:2,exit_share:1},{landing:"/p/404-1022-45541.php",second_page:"/p/404-1022-45541.php",exit_action:"瀏覽後離開",sessions:2,exit_share:1},{landing:"/p/406-1022-45544,r733.php",second_page:"/p/406-1022-45544,r733.php",exit_action:"瀏覽後離開",sessions:2,exit_share:1},{landing:"/p/403-1022-709-1.php",second_page:"/p/403-1022-709-1.php",exit_action:"瀏覽後離開",sessions:2,exit_share:1}],user_path_transitions:[{from:"/",to:"/p/412-1022-2570.php",sessions:0},{from:"/",to:"/p/404-1022-52388.php",sessions:0},{from:"/",to:"/p/426-1022-2.php",sessions:0},{from:"/",to:"/p/412-1022-2586.php",sessions:0},{from:"/",to:"/p/404-1022-36099.php",sessions:0}],data_quality_snapshot:[{issue_type:"missing_jsonld",affected_count:1,example:"全站 application/ld+json = 0",severity:"高",suggested_owner:"電算中心",status:"待改善",evidence_rule:"首頁 HTML regex application/ld\\+json"},{issue_type:"old_domain",affected_count:13,example:"itm.tcust.edu.tw 出現於 13 個站內連結",severity:"中",suggested_owner:"單位網站管理人",status:"待改善",evidence_rule:"首頁 HTML 內 itm.tcust.edu.tw 字串計數"},{issue_type:"missing_canonical",affected_count:1,example:"首頁缺少 canonical link 標記",severity:"中",suggested_owner:"電算中心",status:"待改善",evidence_rule:'首頁 HTML regex <link rel="canonical">'},{issue_type:"multiple_h1",affected_count:2,example:"首頁偵測到 2 個 H1（重複 H1 違規）",severity:"中",suggested_owner:"電算中心",status:"待改善",evidence_rule:"首頁 <h1> 標籤計數"},{issue_type:"og_image_favicon",affected_count:1,example:"og:image 仍指向 /images/favicon.ico（非正式主視覺）",severity:"中",suggested_owner:"單位網站管理人",status:"待改善",evidence_rule:"og:image 屬性內容檢查"},{issue_type:"iframe_no_title",affected_count:26,example:"26 個 iframe 全部未設定 title",severity:"低",suggested_owner:"單位網站管理人",status:"待改善",evidence_rule:"首頁 iframe title 屬性檢查"},{issue_type:"empty_alt",affected_count:3,example:"24 張圖片中 3 張 alt 為空",severity:"低",suggested_owner:"單位網站管理人",status:"待改善",evidence_rule:"首頁 圖片 alt 文字長度 ≤ 2"},{issue_type:"unknown_source",affected_count:0,example:"本期未發現未分類 source/medium",severity:"低",suggested_owner:"—",status:"正常",evidence_rule:"all_units_summary source NOT IN known list"}]}};const Un=[{id:"EV-GA4-TREND-001",title:"網站流量八週趨勢完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"GA4-WEEKLY-TREND-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang dari 2026-07-31）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:3f817420927acb6d3f0de7ff7c93de47212bb3240963adf787b9bde4d1c149d7",status:"正常",description:"逐週工作階段、瀏覽量、匿名使用者、平均互動秒數與每工作階段頁數。",filterKeys:[],chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["pageviews","瀏覽量"]]},columns:[["week","週別"],["sessions","工作階段"],["pageviews","瀏覽量"],["users","匿名使用者"],["engagement_seconds","平均互動秒數"],["pages_per_session","每工作階段頁數"]],rows:[{week:"07/25",sessions:15,pageviews:35,users:14,engagement_seconds:1,pages_per_session:2.33},{week:"07/26",sessions:17,pageviews:39,users:17,engagement_seconds:1.1,pages_per_session:2.29},{week:"07/27",sessions:36,pageviews:170,users:33,engagement_seconds:1.2,pages_per_session:4.72},{week:"07/28",sessions:42,pageviews:116,users:39,engagement_seconds:1.3,pages_per_session:2.76},{week:"07/29",sessions:40,pageviews:177,users:29,engagement_seconds:.9,pages_per_session:4.42},{week:"07/30",sessions:40,pageviews:186,users:34,engagement_seconds:.7,pages_per_session:4.65},{week:"07/31",sessions:45,pageviews:148,users:41,engagement_seconds:.8,pages_per_session:3.29}],sql:"SELECT week, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 0) AS engagement_seconds, ROUND(SAFE_DIVIDE(COUNTIF(event_name='page_view'), COUNT(DISTINCT ga_session_id)), 2) AS pages_per_session FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week;"},{id:"EV-GA4-AUDIENCE-001",title:"國家、裝置與流量來源完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"GA4-AUDIENCE-SOURCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:76d0b418e4b170345d14b5988378c9f2354a725e417fa420a863eab9fecf5e99",status:"正常",description:"近一週使用者來源國家、使用的裝置類別與流量來源／媒介分布。",filterKeys:["dimension"],chart:{type:"bar",xKey:"name",series:[["sessions","工作階段"]]},columns:[["dimension","維度"],["name","類別"],["sessions","工作階段"],["users","匿名使用者"],["pageviews","瀏覽量"]],rows:[{dimension:"來源",name:"直接進站",sessions:154,users:0,pageviews:0},{dimension:"來源",name:"自然搜尋",sessions:50,users:0,pageviews:0},{dimension:"來源",name:"外部推薦",sessions:4,users:0,pageviews:0},{dimension:"來源",name:"AI 推薦",sessions:1,users:0,pageviews:0},{dimension:"裝置",name:"desktop",sessions:134,users:0,pageviews:0},{dimension:"裝置",name:"mobile",sessions:73,users:0,pageviews:0},{dimension:"裝置",name:"tablet",sessions:2,users:0,pageviews:0},{dimension:"國家",name:"Taiwan",sessions:139,users:0,pageviews:0},{dimension:"國家",name:"China",sessions:63,users:0,pageviews:0},{dimension:"國家",name:"United States",sessions:4,users:0,pageviews:0},{dimension:"國家",name:"Germany",sessions:1,users:0,pageviews:0},{dimension:"國家",name:"Indonesia",sessions:1,users:0,pageviews:0}],sql:"SELECT '國家' AS dimension, country AS name, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY country UNION ALL SELECT '裝置', device_category, COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), COUNTIF(event_name='page_view') FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY device_category UNION ALL SELECT '流量來源', CONCAT(COALESCE(source,'(direct)'),'/',COALESCE(medium,'(none)')), COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), 0 FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY source, medium;"},{id:"EV-GSC-PAGE-001",title:"GSC 頁面曝光點擊完整報表",sourceType:"BigQuery",sourceTable:"all_gsc_summary",queryCode:"GSC-PAGE-EVIDENCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:a317196984cd338bc71598ad112b5bea60c82eb2824ec727f1c8e39a08ad29f2",status:"需改善",description:"Google 搜尋結果中各頁面的曝光、點擊與平均排名（前 20 名）。",filterKeys:[],chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["avg_pos","平均排名"]],rows:[{rank:1,path:"/",imp:478,clk:22,avg_pos:12.5},{rank:2,path:"/p/412-1022-2586.php",imp:138,clk:12,avg_pos:13.2},{rank:3,path:"/p/404-1022-36099.php",imp:90,clk:5,avg_pos:9.4},{rank:4,path:"/p/406-1022-65878,r452.php?Lang=zh-tw",imp:65,clk:2,avg_pos:10.8},{rank:5,path:"/p/404-1022-52388.php?Lang=zh-tw",imp:63,clk:5,avg_pos:10.9},{rank:6,path:"/p/16-1022-45542.php?Lang=zh-tw",imp:60,clk:1,avg_pos:18.9},{rank:7,path:"/p/404-1022-34441.php",imp:57,clk:1,avg_pos:6},{rank:8,path:"/p/16-1022-34006.php?Lang=zh-tw",imp:38,clk:0,avg_pos:13.1},{rank:9,path:"/p/404-1022-45541.php?Lang=zh-tw",imp:37,clk:0,avg_pos:15.2},{rank:10,path:"/p/404-1022-30082.php",imp:33,clk:0,avg_pos:34.7},{rank:11,path:"/p/404-1022-30107.php",imp:33,clk:2,avg_pos:10.5},{rank:12,path:"/p/412-1022-2570.php?Lang=zh-tw",imp:33,clk:0,avg_pos:.6},{rank:13,path:"/var/file/22/1022/img/1199/458067580.pdf",imp:33,clk:0,avg_pos:11.7},{rank:14,path:"/?Lang=en",imp:32,clk:1,avg_pos:27.1},{rank:15,path:"/p/404-1022-30026.php?Lang=zh-tw",imp:32,clk:1,avg_pos:8.8},{rank:16,path:"/p/404-1022-52388.php?Lang=en",imp:25,clk:3,avg_pos:9.5},{rank:17,path:"/p/404-1022-36089.php?Lang=zh-tw",imp:23,clk:0,avg_pos:1.2},{rank:18,path:"/p/16-1022-45541.php?Lang=zh-tw",imp:22,clk:0,avg_pos:42.2},{rank:19,path:"/var/file/22/1022/img/1870/424380578.pdf",imp:21,clk:1,avg_pos:16.3},{rank:20,path:"/p/16-1022-36083.php?Lang=zh-tw",imp:20,clk:0,avg_pos:18.8}],sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY url ORDER BY imp DESC LIMIT 20;"},{id:"EV-SEARCH-BEHAVIOR-001",title:"搜尋字詞到達後行為完整報表",sourceType:"BigQuery",sourceTable:"search_behavior_summary",queryCode:"SEARCH-BEHAVIOR-EVIDENCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:2823e2492f70d4d2872f91105454ff376ec05b0c86d57e687c36e3cdc5ca8d79",status:"注意",description:"搜尋字詞 × 後續站內行為：曝光、Google 點擊、總互動事件、到達頁數。",filterKeys:[],chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["behavior_events","站內互動事件"],["pages_count","到達頁數"],["users","活躍使用者"]],rows:[{query:"site:itm.tcu.edu.tw",imp:400,clk:0,behavior_events:246,pages_count:189,users:34},{query:"site:itm.tcust.edu.tw",imp:132,clk:0,behavior_events:160,pages_count:36,users:23},{query:"慈大學資",imp:124,clk:0,behavior_events:260,pages_count:2,users:31},{query:"tcust",imp:53,clk:0,behavior_events:227,pages_count:3,users:26},{query:"itm",imp:47,clk:0,behavior_events:220,pages_count:2,users:27},{query:"慈濟大學 資管系",imp:37,clk:4,behavior_events:332,pages_count:7,users:41},{query:"慈大 學資",imp:34,clk:0,behavior_events:377,pages_count:2,users:39},{query:"tcu",imp:31,clk:0,behavior_events:260,pages_count:1,users:31},{query:"慈濟大學資訊科技與管理學系",imp:24,clk:3,behavior_events:366,pages_count:8,users:44},{query:"慈濟大學資管系",imp:20,clk:2,behavior_events:344,pages_count:8,users:33},{query:"慈濟大學科系",imp:18,clk:0,behavior_events:115,pages_count:1,users:15},{query:"大學專題競賽",imp:16,clk:0,behavior_events:0,pages_count:1,users:0},{query:"證照",imp:15,clk:0,behavior_events:4,pages_count:1,users:1},{query:"慈大資管",imp:14,clk:2,behavior_events:216,pages_count:7,users:23},{query:"慈濟it",imp:13,clk:0,behavior_events:82,pages_count:1,users:10},{query:"資管",imp:13,clk:0,behavior_events:37,pages_count:1,users:5},{query:"tcu itm",imp:12,clk:2,behavior_events:193,pages_count:7,users:23},{query:"李國彰",imp:11,clk:0,behavior_events:75,pages_count:2,users:11},{query:"大學專題競賽2026",imp:11,clk:0,behavior_events:0,pages_count:1,users:0},{query:"資訊科技系",imp:11,clk:0,behavior_events:242,pages_count:1,users:28}],sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, SUM(total_behavior_events) AS behavior_events, COUNT(DISTINCT url) AS pages_count FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 20;"},{id:"EV-AI-REFERRAL-001",title:"AI 搜尋引擎 referrer 完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"AI-REFERRAL-EVIDENCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:a6615084cee92103670892f0c556662f19f21141dccb1e42857a2882cec65e3e",status:"查詢可用",description:"從 ChatGPT、Perplexity、Gemini、Claude 等 AI 搜尋引擎（透過 page_referrer、Google source/medium 屬性）偵測到的工作階段清單。",filterKeys:["ai_engine"],chart:{type:"bar",xKey:"ai_engine",series:[["sessions","工作階段"]]},columns:[["ai_engine","AI 引擎"],["detection_method","偵測方法"],["sessions","工作階段"],["users","活躍使用者"],["last_seen","最後觀察日"]],rows:[{ai_engine:"chatgpt.com",detection_method:"source_medium",sessions:1,users:1,last_seen:"2026-07-21"}],sql:"WITH raw_signals AS (SELECT user_pseudo_id, ga_session_id, date, page_referrer, source, medium FROM `hopeful-timing-478708-c0.ga4_history.all_units_summary` WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26'), classified AS (SELECT *, CASE WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' THEN 'page_referrer' WHEN LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' OR LOWER(COALESCE(medium,'')) LIKE '%ai%' THEN 'source_medium' END AS detection_method, CASE WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' THEN 'chatgpt.com' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' THEN 'perplexity.ai' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' THEN 'gemini.google.com' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' THEN 'claude.ai' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' THEN 'copilot.microsoft.com' END AS ai_engine FROM raw_signals WHERE LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' OR LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' OR LOWER(COALESCE(medium,'')) LIKE '%ai%'), dedup AS (SELECT DISTINCT user_pseudo_id, ga_session_id, ai_engine, detection_method FROM classified) SELECT ai_engine, detection_method, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users FROM dedup GROUP BY ai_engine, detection_method ORDER BY sessions DESC"},{id:"EV-DATA-QUALITY-001",title:"三張資料表品質檢核完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary",queryCode:"DATA-QUALITY-EVIDENCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:297b437d0fc045e258f0e5bdb589dcb174892c972c78efd31f602c55797f8e06",status:"正常",description:"三張主要資料表的最新日期、總列數、最新 BigQuery Job ID 與定義檢核結果。",filterKeys:["table_name"],chart:{type:"bar",xKey:"table_name",series:[["recent_rows","近一週列數"]]},columns:[["table_name","資料表"],["max_date","最新資料日期"],["recent_rows","近一週列數"],["last_job_id","BigQuery Job ID"],["check_status","檢核結果"],["generated_at","產生時間"],["data_hash","資料雜湊"]],rows:[{table_name:"all_units_summary",max_date:"2026-07-29",recent_rows:250323,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"},{table_name:"all_gsc_summary",max_date:"2026-07-27",recent_rows:145930,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"},{table_name:"search_behavior_summary",max_date:"2026-07-29",recent_rows:97227,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"}],sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, COUNT(*) AS recent_rows FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'all_gsc_summary', MAX(data_date), COUNT(*) FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'search_behavior_summary', MAX(date), COUNT(*) FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26';"},{id:"EV-FUNNEL-001",title:"招生內容到達率八週完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"FUNNEL-COURSE-FACULTY-FEATURE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:7e969e5e6ea4d5286d4afce275035769e2c332088d71e7bb8f3b85f91672c9a4",status:"查詢可用",description:"每週課程頁、師資頁、特色頁瀏覽量，用於追蹤招生到達率趨勢。",filterKeys:[],chart:{type:"line",xKey:"week",series:[["course_pv","課程頁"],["faculty_pv","師資頁"],["feature_pv","特色頁"]]},columns:[["week","週別"],["course_pv","課程頁瀏覽"],["faculty_pv","師資頁瀏覽"],["feature_pv","特色頁瀏覽"]],rows:[{week:"07/25",course_pv:10,faculty_pv:8,feature_pv:4},{week:"07/26",course_pv:12,faculty_pv:0,feature_pv:7},{week:"07/27",course_pv:42,faculty_pv:39,feature_pv:6},{week:"07/28",course_pv:13,faculty_pv:12,feature_pv:11},{week:"07/29",course_pv:22,faculty_pv:14,feature_pv:18},{week:"07/30",course_pv:13,faculty_pv:11,feature_pv:17},{week:"07/31",course_pv:45,faculty_pv:15,feature_pv:10}],sql:"SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, SUM(CASE WHEN page_title LIKE '%課程地圖%' OR page_title LIKE '%課程規劃%' OR page_title LIKE '%碩士班專區%' THEN 1 ELSE 0 END) AS course_pv, SUM(CASE WHEN page_title LIKE '%師資陣容%' THEN 1 ELSE 0 END) AS faculty_pv, SUM(CASE WHEN page_title LIKE '%本系特色%' OR page_title LIKE '%業界實習%' OR page_title LIKE '%實習流程%' OR page_title LIKE '%實務專題%' THEN 1 ELSE 0 END) AS feature_pv FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' AND page_title != '' GROUP BY week ORDER BY week;"},{id:"EV-CONTACT-001",title:"聯絡方式與招生窗口完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary（衍生）+ HTML 原始碼",queryCode:"CONTACT-INFO-EVIDENCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:24c91d4ad87a4d53a4bf7ea3e55da4c1422bf3aa940cd28681e62e6df6479769",status:"資料正常",description:"從 ITM 網頁 HTML 與 GA4 連結點擊目標解析出的聯絡電話、Email、LINE 群組、招生窗口。",filterKeys:["type"],chart:{type:"bar",xKey:"name",series:[["clicks","近一週點擊次數"]]},columns:[["type","類別"],["name","名稱"],["value","值／連結"],["clicks","近一週點擊次數"]],rows:[{type:"other",name:"最新消息",value:"https://itm.tcust.edu.tw/p/412-1022-2570.php?Lang=zh-tw",clicks:11},{type:"other",name:"",value:"https://cec.tcu.edu.tw/?p=5033",clicks:10},{type:"other",name:"",value:"https://itm.tcust.edu.tw/p/412-1022-2570.php?Lang=zh-tw",clicks:10},{type:"other",name:"招生簡章",value:"https://cec.tcu.edu.tw/?p=5033",clicks:10},{type:"other",name:"",value:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%",clicks:9},{type:"other",name:"入學方式",value:"https://itm.tcu.edu.tw/p/404-1022-30020.php",clicks:8},{type:"other",name:"查看更多新聞",value:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%",clicks:8},{type:"other",name:"四技二專甄選入學",value:"https://admissions.tcu.edu.tw/?page_id=5316",clicks:7},{type:"other",name:"",value:"https://itm.tcust.edu.tw/var/file/22/1022/img/1843/540712717.doc",clicks:6},{type:"other",name:"",value:"https://admissions.tcu.edu.tw/?page_id=5316",clicks:6},{type:"other",name:"",value:"https://itm.tcust.edu.tw/var/file/22/1022/img/1214/686385563.ods",clicks:5},{type:"other",name:"下載",value:"https://itm.tcust.edu.tw/var/file/22/1022/img/1214/686385563.ods",clicks:5},{type:"other",name:"資訊科技與管理系碩士班-資管系碩士論文格式",value:"https://itm.tcust.edu.tw/var/file/22/1022/img/1843/540712717.doc",clicks:5},{type:"other",name:"首頁",value:"https://itm.tcu.edu.tw/index.php",clicks:4},{type:"other",name:"2026全國商管暨跨域創新實務專題競賽 資管學系榮獲佳作",value:"https://itm.tcust.edu.tw/p/406-1022-66113,r452.php?Lang=zh-tw",clicks:4},{type:"other",name:"第三人生大學",value:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw",clicks:4},{type:"other",name:"下載",value:"https://itm.tcu.edu.tw/var/file/22/1022/attach/15/pta_90538_1108797_18692.pdf",clicks:4},{type:"other",name:"上課資訊",value:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw#schedule",clicks:4},{type:"other",name:"課程特色",value:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw#courses",clicks:3},{type:"other",name:"碩士學位考試要點（適用111、112入學）",value:"https://itm.tcu.edu.tw/var/file/22/1022/attach/89/pta_91542_65775_42024.pdf",clicks:3}],sql:"SELECT '電話' AS type, 'ITM 系辦' AS name, '+886-3-8572677' AS value, COUNT(*) AS clicks FROM all_units_summary WHERE site_name='資訊科技與管理系' AND link_url LIKE '%tel:%' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'Email', '資管系聯絡信箱', 'itm@tcu.edu.tw', COUNT(*) FROM all_units_summary WHERE site_name='資訊科技與管理系' AND (link_url LIKE '%mailto:itm%' OR link_text LIKE '%itm%@%') AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26';"},{id:"EV-GEO-SOURCE-001",title:"GEO 技術原始碼完整檢核報表",sourceType:"網站原始碼掃描",sourceTable:"首頁 HTML",queryCode:"SITE-SOURCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"非 BigQuery",dataHash:"sha256:ff4f58b55f34edd2130013bbb7792aa8efa097e5ca8de966597a56250b6c4def",status:"需改善",description:"這份報表不是 BigQuery 行為數據，而是 GEO／SEO 技術掃描證據。",filterKeys:["category","result"],chart:{type:"bar",xKey:"category",series:[["issue_count","問題數"]]},columns:[["category","類別"],["check_item","檢核項"],["result","結果"],["issue_count","問題數"],["evidence","證據摘要"],["owner","主責"]],rows:[{category:"實體",check_item:"首頁唯一 H1",result:"待修補",issue_count:1,evidence:"首頁偵測到 2 個 H1 標籤（建議合併為單一標題）",owner:"電算中心"},{category:"結構化資料",check_item:"JSON-LD blocks",result:"待修補",issue_count:1,evidence:"偵測到 0 個 JSON-LD 結構化資料區塊",owner:"電算中心"},{category:"Meta",check_item:"canonical link",result:"缺失",issue_count:1,evidence:"未偵測到 canonical link",owner:"電算中心"},{category:"Meta",check_item:"description 長度",result:"已實作",issue_count:0,evidence:"description 158 字",owner:"電算中心"},{category:"Open Graph",check_item:"og:title",result:"缺失",issue_count:1,evidence:"og:title 缺失",owner:"電算中心"},{category:"Open Graph",check_item:"og:description",result:"缺失",issue_count:1,evidence:"og:description 缺失",owner:"電算中心"},{category:"Open Graph",check_item:"og:url / og:type",result:"缺失",issue_count:2,evidence:"og:url 缺失, og:type 缺失",owner:"電算中心"},{category:"hreflang",check_item:"中英文版標記",result:"缺失",issue_count:1,evidence:"未偵測到 hreflang 標記",owner:"電算中心"},{category:"內容結構",check_item:"h2 數量",result:"已實作",issue_count:0,evidence:"h2 × 13",owner:"電算中心"},{category:"圖片",check_item:"alt 屬性",result:"待改善",issue_count:4,evidence:"26 張 img 中 4 張缺少 alt",owner:"電算中心"},{category:"DOM",check_item:"重複 ID",result:"待修補",issue_count:41,evidence:"41 個 DOM ID 重複",owner:"電算中心"}],sql:"非 BigQuery。由 Hermes／爬蟲解析首頁 HTML，輸出標籤、屬性、數量與原始碼片段。"},{id:"EV-SEO-001",title:"高曝光零點擊搜尋字詞完整報表",sourceType:"BigQuery",sourceTable:"search_behavior_summary",queryCode:"SEO-ZEROCLICK-EVIDENCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:abc9276ccc111fdad2452ca591ffaf1c8b21368ea5a957bff0e182fa576dd2c6",status:"需改善",description:"近一週曝光 ≥10 但點擊 = 0 的搜尋字詞清單，含建議修正方向。",filterKeys:["recommendation"],chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["ctr","點擊率%"],["position","平均排名"],["recommendation","建議"]],rows:[{query:"site:itm.tcu.edu.tw",imp:400,clk:0,ctr:0,position:5,recommendation:"需建立專門 landing page 或加入系名"},{query:"site:itm.tcust.edu.tw",imp:132,clk:0,ctr:0,position:5,recommendation:"需建立專門 landing page 或加入系名"},{query:"慈大學資",imp:124,clk:0,ctr:0,position:5,recommendation:"需建立專門 landing page 或加入系名"},{query:"tcust",imp:53,clk:0,ctr:0,position:5,recommendation:"需建立專門 landing page 或加入系名"},{query:"itm",imp:47,clk:0,ctr:0,position:5,recommendation:"需建立專門 landing page 或加入系名"},{query:"慈濟大學 資管系",imp:37,clk:4,ctr:10.81,position:5,recommendation:"可優化 title 加系名"},{query:"慈大 學資",imp:34,clk:0,ctr:0,position:5,recommendation:"需建立專門 landing page 或加入系名"},{query:"tcu",imp:31,clk:0,ctr:0,position:5,recommendation:"需建立專門 landing page 或加入系名"},{query:"慈濟大學資訊科技與管理學系",imp:24,clk:3,ctr:12.5,position:5,recommendation:"可優化 title 加系名"},{query:"慈濟大學資管系",imp:20,clk:2,ctr:10,position:5,recommendation:"可優化 title 加系名"}],sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, ROUND(100 * SAFE_DIVIDE(SUM(gsc_clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS position FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY query HAVING imp >= 10 AND clk = 0 ORDER BY imp DESC LIMIT 20;"},{id:"EV-PAGES-TABLE-001",title:"Top 10 高曝光頁面表格完整版",sourceType:"BigQuery",sourceTable:"all_gsc_summary",queryCode:"GSC-PAGES-TOP10-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:597741c7b1bb5c43e70fdbf362f7fca6f3830a1d49cfdcab1b4f19a8447c08f5",status:"資料正常",description:"Top 10 高曝光頁面完整表格（含曝光、點擊、CTR、平均排名）。",filterKeys:[],chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["ctr","CTR%"],["avg_pos","平均排名"]],rows:[{rank:1,path:"/p/426-1022-2.php?Lang=zh-tw",imp:116,clk:34,ctr:0,avg_pos:0},{rank:2,path:"/index.php",imp:172,clk:30,ctr:0,avg_pos:0},{rank:3,path:"/p/412-1022-2586.php",imp:70,clk:24,ctr:0,avg_pos:0},{rank:4,path:"/",imp:100,clk:24,ctr:0,avg_pos:0},{rank:5,path:"/p/403-1022-452-1.php?Lang=zh-tw",imp:24,clk:10,ctr:0,avg_pos:0},{rank:6,path:"/p/404-1022-52388.php?Lang=zh-tw",imp:25,clk:9,ctr:0,avg_pos:0},{rank:7,path:"/p/412-1022-2570.php?Lang=zh-tw",imp:23,clk:8,ctr:0,avg_pos:0},{rank:8,path:"/p/404-1022-36099.php",imp:50,clk:8,ctr:0,avg_pos:0},{rank:9,path:"/p/404-1022-30026.php?Lang=zh-tw",imp:16,clk:7,ctr:0,avg_pos:0},{rank:10,path:"/p/426-1022-5.php?Lang=zh-tw",imp:13,clk:6,ctr:0,avg_pos:0}],sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY url ORDER BY imp DESC LIMIT 10;"},{id:"EV-PERIOD-ANOMALY-001",title:"期間比較與異常提醒完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary + all_gsc_summary",queryCode:"GA4-WEEKLY-TREND-001 + GSC-WEEKLY-TREND-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:b208984b0bb6cc9fea1844a63f9b94ca83d40df2a74ec13ad84eea9f24695251",status:"正常",description:"8 週完整週期（06/01-07/26）的工作階段、活躍使用者、瀏覽量、搜尋曝光、點擊、CTR 與異常狀態。Refreshed 2026-07-31T12:11:40Z。",filterKeys:["week"],chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["users","活躍使用者"],["pageviews","瀏覽量"]]},columns:[["week","週別"],["sessions","工作階段"],["users","活躍使用者"],["pageviews","瀏覽量"],["impressions","搜尋曝光"],["clicks","搜尋點擊"],["ctr","CTR"],["status","狀態"],["delta_pct","與前期差異%"]],rows:[{week:"06/07",sessions:493,users:338,pageviews:1753,impressions:4265,clicks:302,ctr:7.08,status:"基準期",delta_pct:0},{week:"06/14",sessions:694,users:431,pageviews:3491,impressions:4418,clicks:307,ctr:6.95,status:"基準期",delta_pct:0},{week:"06/21",sessions:91,users:70,pageviews:502,impressions:3666,clicks:160,ctr:4.36,status:"基準期",delta_pct:0},{week:"06/28",sessions:338,users:264,pageviews:1330,impressions:3158,clicks:110,ctr:3.48,status:"基準期",delta_pct:0},{week:"07/05",sessions:218,users:171,pageviews:649,impressions:2535,clicks:69,ctr:2.72,status:"基準期",delta_pct:0},{week:"07/12",sessions:221,users:168,pageviews:743,impressions:2527,clicks:70,ctr:2.77,status:"基準期",delta_pct:0},{week:"07/19",sessions:229,users:184,pageviews:833,impressions:1902,clicks:55,ctr:2.89,status:"基準期",delta_pct:0},{week:"07/26",sessions:222,users:181,pageviews:843,impressions:2587,clicks:81,ctr:3.13,status:"基準期",delta_pct:0}],sql:"SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, COUNT(DISTINCT CONCAT(user_pseudo_id, ':', ga_session_id)) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week; UNION ALL SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(data_date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, SUM(impressions) AS impressions, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week;"},{id:"EV-BRAND-NONBRAND-001",title:"品牌詞 vs 非品牌詞完整報表",sourceType:"BigQuery",sourceTable:"all_gsc_summary",queryCode:"GSC-KEYWORD-BRAND-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:ab79ca0132dbc4d783f87a76b5ba17d6df7b9d4ed1bf78fc896eaed17446267b",status:"正常",description:"搜尋字詞的品牌/非品牌分類、曝光、點擊、CTR、平均排名、到達頁（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",filterKeys:["cls"],chart:{type:"bar",xKey:"query",series:[["imp","曝光"],["clicks","點擊"]]},columns:[["query","query"],["cls","分類"],["imp","曝光"],["clicks","點擊"],["ctr","CTR%"],["avg_pos","平均排名"],["landing","到達頁"]],rows:[{query:"慈大學資",cls:"nonbrand",imp:3999,clicks:1,ctr:.03,avg_pos:3.8,landing:"/"},{query:"慈濟it",cls:"nonbrand",imp:539,clicks:0,ctr:0,avg_pos:3.3,landing:"/"},{query:"itm",cls:"nonbrand",imp:458,clicks:0,ctr:0,avg_pos:7.2,landing:"/"},{query:"慈大 學資",cls:"nonbrand",imp:390,clicks:0,ctr:0,avg_pos:2.2,landing:"/"},{query:"tcu",cls:"nonbrand",imp:362,clicks:0,ctr:0,avg_pos:.4,landing:"/"},{query:"tcust",cls:"nonbrand",imp:332,clicks:3,ctr:.9,avg_pos:.3,landing:"/p/404-1022-36089.php?Lang=zh-tw"},{query:"專題海報",cls:"nonbrand",imp:287,clicks:0,ctr:0,avg_pos:51.7,landing:"/p/16-1022-45541.php?Lang=zh-tw"},{query:"碩士",cls:"nonbrand",imp:265,clicks:0,ctr:0,avg_pos:7,landing:"/p/404-1022-52388.php?Lang=zh-tw"},{query:"慈濟大學",cls:"nonbrand",imp:208,clicks:3,ctr:1.44,avg_pos:2,landing:"/"},{query:"蔡宗宏",cls:"nonbrand",imp:193,clicks:28,ctr:14.51,avg_pos:.7,landing:"/p/412-1022-2586.php"},{query:"專題",cls:"nonbrand",imp:187,clicks:0,ctr:0,avg_pos:31.6,landing:"/p/16-1022-45541.php?Lang=zh-tw"},{query:"謝金峰",cls:"nonbrand",imp:128,clicks:1,ctr:.78,avg_pos:3.8,landing:"/p/406-1022-65238,r452.php?Lang=zh-tw"},{query:"大學專題競賽",cls:"nonbrand",imp:116,clicks:1,ctr:.86,avg_pos:4.7,landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},{query:"李國彰",cls:"nonbrand",imp:113,clicks:1,ctr:.88,avg_pos:8.3,landing:"/var/file/22/1022/img/1870/242198580.pdf"},{query:"慈大資管",cls:"nonbrand",imp:103,clicks:74,ctr:71.84,avg_pos:0,landing:"/"},{query:"資訊證照",cls:"nonbrand",imp:102,clicks:0,ctr:0,avg_pos:9.6,landing:"/p/404-1022-30082.php"},{query:"資訊科技與管理學系",cls:"nonbrand",imp:102,clicks:2,ctr:1.96,avg_pos:4.3,landing:"/"},{query:"慈濟大學科系",cls:"nonbrand",imp:97,clicks:1,ctr:1.03,avg_pos:7.5,landing:"/"},{query:"證照",cls:"nonbrand",imp:91,clicks:0,ctr:0,avg_pos:68.4,landing:"/p/404-1022-30082.php"},{query:"簡子超",cls:"nonbrand",imp:91,clicks:27,ctr:29.67,avg_pos:.5,landing:"/p/412-1022-2586.php"}],sql:"SELECT query, CASE WHEN REGEXP_CONTAINS(LOWER(query), r'慈濟|慈大|慈|tcu|tzu chi|itm|資管|資訊科技與管理') THEN 'brand' ELSE 'nonbrand' END AS cls, SUM(impressions) AS imp, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 50;"},{id:"EV-CONTENT-MATRIX-001",title:"內容效益矩陣完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"GA4-PAGE-MATRIX-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:365d761966271707f0fa46f0fa0ee3076c44b01a4d40c6446cd7199a666dfb59",status:"正常",description:"正規化 URL 的活躍使用者、工作階段、瀏覽量與平均互動時間；用於四象限分類（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",filterKeys:["quadrant"],chart:{type:"scatter",xKey:"users",series:[["engagement_sec","平均互動秒/使用者"]]},columns:[["normalized_path","路徑"],["title","頁面"],["users","活躍使用者"],["sessions","工作階段"],["pageviews","瀏覽量"],["engagement_sec","平均互動秒"],["median_users","中位數使用者"],["median_eng","中位數互動"],["quadrant","象限"]],rows:[{normalized_path:"/p/426-1022-2.php?Lang=zh-tw",title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系",users:34,sessions:34,pageviews:116,engagement_sec:.5,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/index.php",title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",users:30,sessions:48,pageviews:172,engagement_sec:.6,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/",title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",users:24,sessions:30,pageviews:100,engagement_sec:.9,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/p/412-1022-2586.php",title:"師資陣容 - 資訊科技與管理學系",users:24,sessions:24,pageviews:70,engagement_sec:.4,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/p/403-1022-452-1.php?Lang=zh-tw",title:"最新消息 - 資訊科技與管理學系",users:10,sessions:10,pageviews:24,engagement_sec:1.9,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/p/404-1022-52388.php?Lang=zh-tw",title:"碩士班專區 - 資訊科技與管理學系",users:9,sessions:11,pageviews:25,engagement_sec:.3,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/p/404-1022-36099.php",title:"課程地圖與開課學分時數表 / Curriculum Map and Table of Courses Offered with Credit Hours - 資訊科技與管理學系",users:8,sessions:8,pageviews:50,engagement_sec:.7,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/p/412-1022-2570.php?Lang=zh-tw",title:"最新消息 - 資訊科技與管理學系",users:8,sessions:8,pageviews:23,engagement_sec:1.1,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/p/404-1022-30026.php?Lang=zh-tw",title:"系所介紹 - 資訊科技與管理學系",users:7,sessions:8,pageviews:16,engagement_sec:.4,median_users:7,median_eng:25,quadrant:"Q3"},{normalized_path:"/p/404-1022-34441.php",title:"課程規劃 - 資訊科技與管理學系",users:6,sessions:6,pageviews:16,engagement_sec:.4,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/?Lang=zh-tw",title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系",users:6,sessions:6,pageviews:11,engagement_sec:.7,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/404-1022-30020.php",title:"入學方式 - 資訊科技與管理學系",users:6,sessions:6,pageviews:16,engagement_sec:.3,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/426-1022-5.php?Lang=zh-tw",title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系",users:6,sessions:6,pageviews:13,engagement_sec:.5,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/404-1022-30062.php",title:"規章辦法 - 資訊科技與管理學系",users:4,sessions:4,pageviews:10,engagement_sec:.2,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/412-1022-2590.php?Lang=zh-tw",title:"業界實習 - 資訊科技與管理學系",users:4,sessions:4,pageviews:6,engagement_sec:2.7,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/403-1022-703-1.php?Lang=zh-tw",title:"Photo - 資訊科技與管理學系",users:4,sessions:4,pageviews:8,engagement_sec:.6,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/404-1022-66044.php?Lang=zh-tw",title:"智慧物聯實驗室 - 資訊科技與管理學系",users:4,sessions:4,pageviews:6,engagement_sec:.1,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/404-1022-60990.php?Lang=zh-tw",title:"碩士班相關表格 - 資訊科技與管理學系",users:4,sessions:4,pageviews:14,engagement_sec:.7,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/404-1022-47588.php?Lang=zh-tw",title:"人工智慧高階電腦教室 - 資訊科技與管理學系",users:3,sessions:3,pageviews:9,engagement_sec:.3,median_users:7,median_eng:25,quadrant:"Q4"},{normalized_path:"/p/17-1022.php?Lang=zh-tw",title:"網站導覽 - 資訊科技與管理學系",users:3,sessions:3,pageviews:4,engagement_sec:.1,median_users:7,median_eng:25,quadrant:"Q4"}],sql:"SELECT REGEXP_REPLACE(REGEXP_REPLACE(REGEXP_REPLACE(page_location, r'?.*$', ''), r'/$', ''), r'(?|&)(utm_[^&]+|gclid=[^&]+|fbclid=[^&]+)', '') AS normalized_path, ANY_VALUE(page_title) AS title, COUNT(DISTINCT user_pseudo_id) AS users, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT user_pseudo_id)), 1) AS engagement_sec FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='page_view' GROUP BY normalized_path ORDER BY users DESC LIMIT 50;"},{id:"EV-SOURCE-QUALITY-001",title:"流量來源品質完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"GA4-SOURCE-QUALITY-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:8fe75a6e5b482eb35b4284244606c1f7130408f571364c80d47036aae2040b79",status:"正常",description:"依 source × medium 彙總的工作階段、活躍使用者、互動時間與頁內事件（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",filterKeys:["group"],chart:{type:"bar",xKey:"source",series:[["sessions","工作階段"],["avg_eng_sec_per_session","平均互動秒/工作階段"]]},columns:[["group","分組"],["source","source"],["medium","medium"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec_per_session","平均互動秒/工作階段"],["internal_clicks","站內點擊"],["downloads","下載"],["cta_clicks","CTA 點擊"],["sample_note","樣本狀態"]],rows:[{group:"direct",source:"(direct)",medium:"(none)",sessions:154,users:132,avg_eng_sec_per_session:.6,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"足夠"},{group:"organic",source:"google",medium:"organic",sessions:49,users:40,avg_eng_sec_per_session:.4,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"足夠"},{group:"referral",source:"lle.moe.edu.tw",medium:"referral",sessions:3,users:3,avg_eng_sec_per_session:.2,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"},{group:"ai",source:"chatgpt.com",medium:"ai-assistant",sessions:1,users:1,avg_eng_sec_per_session:nan,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"},{group:"referral",source:"cse.google.com",medium:"referral",sessions:1,users:1,avg_eng_sec_per_session:.3,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"},{group:"referral",source:"collego.edu.tw",medium:"referral",sessions:1,users:1,avg_eng_sec_per_session:.2,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"}],sql:"SELECT CASE WHEN source='(direct)' OR medium='(none)' THEN 'Direct' WHEN source='google' AND medium='organic' THEN 'Organic Search' WHEN REGEXP_CONTAINS(COALESCE(page_referrer,''), r'chatgpt|perplexity|gemini|copilot|claude|openai') THEN 'AI Referral' WHEN medium='referral' AND source LIKE '%edu%' OR source LIKE 'lle%' THEN 'Internal Referral' WHEN medium='referral' THEN 'External Referral' WHEN source='facebook.com' OR source='twitter.com' OR medium='social' THEN 'Social' ELSE 'Other' END AS group, source, medium, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec_per_session, SUM(CASE WHEN event_name='click' AND link_class IN ('internal-cta','internal-link') THEN 1 ELSE 0 END) AS internal_clicks, SUM(CASE WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN 1 ELSE 0 END) AS downloads, SUM(CASE WHEN event_name='click' AND link_class='admission-cta' THEN 1 ELSE 0 END) AS cta_clicks FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY group, source, medium ORDER BY sessions DESC;"},{id:"EV-AI-DETECTION-RULES-001",title:"AI 平台 referrer 完整報表（已修正）",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"AI-REFERRAL-EVIDENCE-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:18f9be2da8fa4b52f20106efc66e0e6a17604e04326218393dd14b1a36a29756",status:"已說明",description:"從 ChatGPT / Perplexity / Gemini / Copilot / Claude 等 AI 搜尋引擎 referrer 進站的工作階段。Refreshed 2026-07-31T12:11:40Z：偵測到 1 個來自 chatgpt.com 的工作階段（medium=ai-assistant, 2026-07-26），其餘平台 0。",columns:[["pattern_name","偵測模式"],["regex","正規表達式"],["supported","已實作"],["field_definitions","欄位定義"],["limitations","限制說明"]],rows:[{pattern_name:"chatgpt.com",regex:"%chatgpt%",supported:!0,field_definitions:"page_referrer LIKE '%chatgpt%'",limitations:"僅偵測來自 chatgpt.com 網域的 referrer"},{pattern_name:"perplexity.ai",regex:"%perplexity%",supported:!0,field_definitions:"page_referrer LIKE '%perplexity%'",limitations:"可能誤判其他 perplexity subdomain"},{pattern_name:"claude.ai",regex:"%claude%",supported:!0,field_definitions:"page_referrer LIKE '%claude%'",limitations:"需要區分 claude.ai 與 anthropic.com"},{pattern_name:"gemini.google.com",regex:"%gemini%",supported:!0,field_definitions:"page_referrer LIKE '%gemini%'",limitations:"需要區分 gemini.google.com 與 bard.google.com"},{pattern_name:"其他 AI 來源",regex:"N/A",supported:!1,field_definitions:"medium = 'ai-assistant'",limitations:"未在資料中觀察到其他 AI 平台"}],sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer, '(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND (COALESCE(page_referrer,'') LIKE '%chatgpt%' OR COALESCE(page_referrer,'') LIKE '%openai%' OR COALESCE(page_referrer,'') LIKE '%perplexity%' OR COALESCE(page_referrer,'') LIKE '%gemini%' OR COALESCE(page_referrer,'') LIKE '%bard%' OR COALESCE(page_referrer,'') LIKE '%copilot%' OR COALESCE(page_referrer,'') LIKE '%claude%' OR medium='ai-assistant') GROUP BY ai_engine;"},{id:"EV-ADMISSION-CTA-001",title:"招生 CTA 行動次數完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary click 事件",queryCode:"CTA-CATEGORY-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:19fdeec8e7303172071fe3493f2761420da121159f5b1c856ae16626b0722a5a",status:"行動代理指標",description:"依 CTA 類別（招生簡章、入學方式、報名、LINE、tel、mailto、表單、其他連結、PDF/DOC/XLSX） 彙總的點擊次數與使用者數（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",filterKeys:["category"],chart:{type:"bar",xKey:"link_text",series:[["clicks","點擊"]]},columns:[["category","CTA 類別"],["link_text","連結文字"],["source_page","來源頁"],["destination","目的地"],["clicks","點擊"],["users","使用者"],["valid_events","有效事件"],["valid_rate","有效率"]],rows:[{category:"校內招生",link_text:"招生簡章",source_page:"p/426-1022-2.php?Lang=zh-tw",destination:"https://cec.tcu.edu.tw/?p=5033",clicks:10,users:7,valid_events:10,valid_rate:1},{category:"校內招生",link_text:"nan",source_page:"p/426-1022-2.php?Lang=zh-tw",destination:"https://cec.tcu.edu.tw/?p=5033",clicks:10,users:7,valid_events:10,valid_rate:1},{category:"其他連結",link_text:"nan",source_page:"index.php",destination:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E8%88%87%E7%AE",clicks:7,users:2,valid_events:7,valid_rate:1},{category:"其他連結",link_text:"查看更多新聞",source_page:"index.php",destination:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E8%88%87%E7%AE",clicks:6,users:2,valid_events:6,valid_rate:1},{category:"其他連結",link_text:"nan",source_page:"p/404-1022-60990.php?Lang=zh-tw",destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1843/540712717.doc",clicks:6,users:2,valid_events:0,valid_rate:0},{category:"招生入口",link_text:"四技二專甄選入學",source_page:"index.php",destination:"https://admissions.tcu.edu.tw/?page_id=5316",clicks:5,users:2,valid_events:5,valid_rate:1},{category:"其他連結",link_text:"下載",source_page:"p/404-1022-36099.php",destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1214/686385563.ods",clicks:5,users:3,valid_events:0,valid_rate:0},{category:"招生入口",link_text:"nan",source_page:"index.php",destination:"https://admissions.tcu.edu.tw/?page_id=5316",clicks:5,users:2,valid_events:5,valid_rate:1},{category:"其他連結",link_text:"nan",source_page:"p/404-1022-36099.php",destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1214/686385563.ods",clicks:5,users:3,valid_events:0,valid_rate:0},{category:"其他連結",link_text:"資訊科技與管理系碩士班-資管系碩士論文格式",source_page:"p/404-1022-60990.php?Lang=zh-tw",destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1843/540712717.doc",clicks:5,users:2,valid_events:0,valid_rate:0},{category:"其他連結",link_text:"第三人生大學",source_page:"p/426-1022-2.php?Lang=zh-tw",destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw",clicks:4,users:3,valid_events:4,valid_rate:1},{category:"其他連結",link_text:"下載",source_page:"p/404-1022-36099.php",destination:"https://itm.tcu.edu.tw/var/file/22/1022/attach/15/pta_90538_1108797_18692.pdf",clicks:4,users:3,valid_events:4,valid_rate:1},{category:"其他連結",link_text:"上課資訊",source_page:"p/426-1022-2.php?Lang=zh-tw",destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw#schedule",clicks:4,users:4,valid_events:4,valid_rate:1},{category:"其他連結",link_text:"課程特色",source_page:"p/426-1022-2.php?Lang=zh-tw",destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw#courses",clicks:3,users:2,valid_events:3,valid_rate:1},{category:"其他連結",link_text:"入學方式",source_page:"",destination:"https://itm.tcu.edu.tw/p/404-1022-30020.php",clicks:3,users:3,valid_events:3,valid_rate:1}],sql:"SELECT CASE WHEN link_url LIKE 'line.me%' OR link_url LIKE '%line.me%' THEN 'LINE' WHEN link_url LIKE 'tel:%' THEN '電話' WHEN link_url LIKE 'mailto:%' THEN 'Email' WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN '下載文件' WHEN (page_title LIKE '%招生%' OR link_text LIKE '%招生%') AND (link_url LIKE '%adm%' OR link_url LIKE '%recruit%' OR link_url LIKE '%p/16%' OR link_url LIKE '%p/406%') THEN '招生簡章' WHEN (page_title LIKE '%入學%' OR link_text LIKE '%入學%') THEN '入學方式' WHEN link_url LIKE '%apply%' OR link_text LIKE '%報名%' THEN '報名系統' ELSE '其他連結' END AS category, ANY_VALUE(link_text) AS link_text, ANY_VALUE(page_title) AS source_page, link_url AS destination, COUNT(*) AS clicks, COUNT(DISTINCT user_pseudo_id) AS users, 1.0 AS valid_rate FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='click' AND link_url IS NOT NULL AND link_url != '' GROUP BY category, destination ORDER BY clicks DESC LIMIT 50;"},{id:"EV-INTERNATIONAL-QUALITY-001",title:"國際訪客品質完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"GA4-COUNTRY-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:c4fa434a77b5d328d19e593807fef59cd9ea214f859fcbe349e860d063263f01",status:"正常",description:"依國家彙總的工作階段、活躍使用者、平均互動、到達頁與 CTA 點擊（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",filterKeys:["country"],chart:{type:"bar",xKey:"country",series:[["sessions","工作階段"],["avg_eng_sec","平均互動秒/工作階段"]]},columns:[["country","國家"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec","平均互動秒/工作階段"],["top_landing","主要到達頁"],["admission_cta","招生 CTA 點擊"],["contact_click","聯絡點擊"],["sample_note","樣本狀態"]],rows:[{country:"China",sessions:8,users:8,avg_eng_sec:3.3,top_landing:"/",admission_cta:0,contact_click:0,sample_note:"足夠"},{country:"United States",sessions:2,users:1,avg_eng_sec:173.8,top_landing:"/",admission_cta:0,contact_click:0,sample_note:"資料不足"},{country:"Canada",sessions:1,users:1,avg_eng_sec:1.9,top_landing:"/",admission_cta:0,contact_click:0,sample_note:"資料不足"},{country:"Germany",sessions:1,users:1,avg_eng_sec:2.4,top_landing:"/",admission_cta:0,contact_click:0,sample_note:"資料不足"},{country:"Indonesia",sessions:1,users:1,avg_eng_sec:.3,top_landing:"/",admission_cta:0,contact_click:0,sample_note:"資料不足"}],sql:"SELECT country, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec, ANY_VALUE(page_location) AS top_landing, SUM(CASE WHEN link_class='admission-cta' THEN 1 ELSE 0 END) AS admission_cta, SUM(CASE WHEN link_class IN ('tel','mailto','line','form') THEN 1 ELSE 0 END) AS contact_click FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY country ORDER BY sessions DESC LIMIT 50;"},{id:"EV-USER-PATH-001",title:"使用者路徑（入口→第二頁）完整報表",sourceType:"BigQuery",sourceTable:"all_units_summary",queryCode:"GA4-LANDING-NEXT-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:5f69fc7ddcc4e142091f57cc1ce962c60890fa93f8f113ccb3a810d4d4cd7c1b",status:"路徑代理",description:"依 page_view 事件彙總的「入口頁 → 第二頁」共同出現次數（2026-07-20 至 2026-07-26 期間，5 個完整天）。本期資料以 ROW_NUMBER() OVER (PARTITION BY session ORDER BY event_timestamp) 重建單一工作階段內的時序。Refreshed 2026-07-31T12:11:40Z：本期 150/177 工作階段僅有 1 個 page_view，入口頁和第二頁多為同一頁（self-loop），故右側「入口頁重點轉換」表全為 0。",filterKeys:["landing"],chart:{type:"bar",xKey:"landing",series:[["sessions","工作階段"]]},columns:[["from_path","來源頁"],["to_path","到達頁"],["transitions","轉場數"]],rows:[{from_path:"/index.php",to_path:"/p/412-1022-2586.php",transitions:11},{from_path:"/p/412-1022-2586.php",to_path:"/index.php",transitions:5},{from_path:"/p/404-1022-52388.php?Lang=zh-tw",to_path:"/p/404-1022-30062.php",transitions:4},{from_path:"/index.php",to_path:"/p/404-1022-30026.php?Lang=zh-tw",transitions:3},{from_path:"/p/426-1022-2.php?Lang=zh-tw",to_path:"/p/426-1022-5.php?Lang=zh-tw",transitions:3},{from_path:"/",to_path:"/p/404-1022-30020.php",transitions:3},{from_path:"/p/412-1022-2586.php",to_path:"/",transitions:3},{from_path:"/p/404-1022-34441.php",to_path:"/p/404-1022-36099.php",transitions:3},{from_path:"/",to_path:"/index.php",transitions:3},{from_path:"/p/404-1022-34441.php",to_path:"/p/406-1022-35988.php",transitions:2},{from_path:"/p/404-1022-30039.php",to_path:"/index.php",transitions:2},{from_path:"/",to_path:"/p/412-1022-2586.php",transitions:2},{from_path:"/p/404-1022-30020.php",to_path:"/",transitions:2},{from_path:"/p/404-1022-30037.php",to_path:"/index.php",transitions:2},{from_path:"/index.php",to_path:"/p/404-1022-30020.php",transitions:2}],sql:"SELECT first_page AS landing, second_page, '瀏覽後離開' AS exit_action, COUNT(DISTINCT ga_session_id) AS sessions, ROUND(SAFE_DIVIDE(COUNT(*), SUM(COUNT(*)) OVER (PARTITION BY first_page)), 2) AS exit_share FROM (SELECT ga_session_id, MIN_BY(page_title, event_timestamp) AS first_page, NTH_VALUE(page_title, 2) OVER (PARTITION BY ga_session_id ORDER BY event_timestamp ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS second_page FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='page_view' GROUP BY ga_session_id, page_title, event_timestamp) GROUP BY first_page, second_page ORDER BY sessions DESC LIMIT 50;"},{id:"EV-WEBSITE-GOVERNANCE-001",title:"資料品質與網站治理完整報表",sourceType:"BigQuery + 網站原始碼掃描",sourceTable:"all_units_summary + 首頁 HTML",queryCode:"DATA-QUALITY-SCAN-001",period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）",maxDate:"2026-07-31",generatedAt:"2026-08-03T12:00:00Z",jobId:"not captured",dataHash:"sha256:71f7c3468723de7b59b1e48311b2f9a753d8373cbaed29fc792451c79627107e",status:"待改善",description:"本期資料品質快照：問題類型、影響數、嚴重性、建議負責、狀態、證據規則。Refreshed 2026-07-31T12:11:40Z（3 empty_alt, 從 16 改善）。",filterKeys:["severity"],chart:{type:"bar",xKey:"issue_type",series:[["affected_count","影響數"]]},columns:[["issue_type","問題類型"],["affected_count","影響數"],["example","範例"],["severity","嚴重性"],["suggested_owner","建議負責"],["status","狀態"],["evidence_rule","證據規則"]],rows:[{issue_type:"meta_description",affected_count:1,example:"meta description 已被清空（regressed）",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"meta_description_length>0"},{issue_type:"canonical_link",affected_count:1,example:'未偵測到 <link rel="canonical">',severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"canonical_present"},{issue_type:"og_tags",affected_count:4,example:"og:title/description/url/type 全部缺失",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"og_tags_complete"},{issue_type:"json_ld",affected_count:1,example:"JSON-LD 結構化資料 regressed to 0 個",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"json_ld_count>=2"},{issue_type:"hreflang",affected_count:1,example:"hreflang en-US 缺失",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"hreflang_present"},{issue_type:"dom_id_conflict",affected_count:41,example:"41 個 DOM ID 重複（多為 Hln_* template-generated）",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"dom_id_unique"},{issue_type:"h1_duplicate",affected_count:2,example:"首頁偵測到 2 個 H1 標籤（應合併為單一標題）",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"h1_count==1"},{issue_type:"img_alt",affected_count:4,example:"26 張 img 中 4 張缺少 alt 屬性",severity:"low",suggested_owner:"電算中心",status:"待修補",evidence_rule:"img_alt_present"}],sql:"SELECT 'missing_jsonld' AS issue_type, COUNTIF(REGEXP_CONTAINS(body, r'application/ld+json')) AS affected_count FROM `project.all_units_summary` WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL /* … */ ;"}];window.WEBINSIGHT=window.WEBINSIGHT||{};window.WEBINSIGHT.EVIDENCE_REPORTS=Un;const xi={};function Ve(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function gn(n){return Un.find(e=>e.id===n)}function Qo(n){document.body.className="view-evidence",setTimeout(()=>document.getElementById("ev-"+n)?.scrollIntoView({behavior:"smooth",block:"start"}),80)}function Jo(n,e){return[...new Set(n.map(t=>t[e]).filter(t=>t!=null&&t!==""))].sort()}function vn(n){return xi[n.id]||(xi[n.id]={search:"",filters:{},sortKey:null,sortDir:1,page:1,pageSize:10}),xi[n.id]}function so(n){const e=vn(n);let t=n.rows.filter(i=>{const s=Object.values(i).join(" ").toLowerCase();if(e.search&&!s.includes(e.search.toLowerCase()))return!1;for(const[r,o]of Object.entries(e.filters))if(o&&String(i[r])!==o)return!1;return!0});return e.sortKey&&(t=[...t].sort((i,s)=>{const r=i[e.sortKey],o=s[e.sortKey];return typeof r=="number"&&typeof o=="number"?(r-o)*e.sortDir:String(r??"").localeCompare(String(o??""),"zh-Hant")*e.sortDir})),t}function ro(){const n=document.getElementById("evidenceIndex");n&&(n.innerHTML=Un.map(e=>`
    <div class="ev-index-card">
      <h3>${Ve(e.title)}</h3>
      <div class="meta-row"><span class="ev-badge ${e.sourceType==="BigQuery"?"bq":"scan"}">${Ve(e.sourceType)}</span><span class="ev-badge ${e.status==="正常"?"ok":""}">${Ve(e.status)}</span></div>
      <div class="small"><code>${Ve(e.id)}</code></div>
      <div class="small">來源：${Ve(e.sourceTable)}</div>
      <div class="small">資料至：${Ve(e.maxDate)}｜${e.rows.length} 列</div>
      <button onclick="evOpen('${e.id}')">開啟完整報表</button>
    </div>`).join(""))}function ao(n){const e=vn(n),t=(n.filterKeys||[]).map(i=>{const s=(n.columns.find(o=>o[0]===i)||[i,i])[1],r=Jo(n.rows,i).map(o=>`<option value="${Ve(o)}" ${e.filters[i]===String(o)?"selected":""}>${Ve(o)}</option>`).join("");return`<select onchange="evSetFilter('${n.id}','${i}',this.value)"><option value="">全部${Ve(s)}</option>${r}</select>`}).join("");return`<div class="ev-toolbar">
    <input type="search" value="${Ve(e.search)}" placeholder="搜尋本報表全部欄位" oninput="evSearch('${n.id}',this.value)">
    ${t}
    <select onchange="evPageSize('${n.id}',this.value)"><option value="10" ${e.pageSize==10?"selected":""}>每頁 10 列</option><option value="25" ${e.pageSize==25?"selected":""}>每頁 25 列</option><option value="50" ${e.pageSize==50?"selected":""}>每頁 50 列</option></select>
    <button class="ev-btn" onclick="evDownload('${n.id}',false)">下載目前篩選 CSV</button>
    <button class="ev-btn" onclick="evReset('${n.id}')">清除篩選</button>
  </div>`}function oo(){const n=document.getElementById("evidenceReports");n&&(n.innerHTML=Un.map(e=>`
    <article class="ev-report" id="ev-${e.id}">
      <div class="ev-head">
        <div class="ev-head-top">
          <div><h3>${Ve(e.title)}</h3><div class="ev-sub">${Ve(e.description)}</div></div>
          <div class="ev-badges">
            <span class="ev-badge ${e.sourceType==="BigQuery"?"bq":"scan"}">${Ve(e.sourceType)}</span>
            <span class="ev-badge">${Ve(e.queryCode)}</span>
            <span class="ev-badge ${e.status==="正常"?"ok":""}">${Ve(e.status)}</span>
          </div>
        </div>
      </div>
      <div id="toolbar-${e.id}">${ao(e)}</div>
      <div class="ev-body">
        <div class="ev-chart-wrap"><canvas id="chart-${e.id}"></canvas><div class="small">圖表會隨篩選條件更新；滑過資料列可查看完整數值。</div></div>
        <div class="ev-table-wrap"><table class="ev-table"><thead id="thead-${e.id}"></thead><tbody id="tbody-${e.id}"></tbody></table></div>
      </div>
      <div class="ev-pager" id="pager-${e.id}"></div>
      <details class="ev-manifest"><summary>查看報表來源、BigQuery 工作資訊與 SQL 定義</summary>
        <div class="ev-manifest-grid">
          <div><strong>來源類型：</strong>${Ve(e.sourceType)}</div><div><strong>來源表：</strong>${Ve(e.sourceTable)}</div>
          <div><strong>查詢代碼：</strong>${Ve(e.queryCode)}</div><div><strong>BigQuery Job ID：</strong>${Ve(e.jobId)}</div>
          <div><strong>資料期間：</strong>${Ve(e.period)}</div><div><strong>最大資料日期：</strong>${Ve(e.maxDate)}</div>
          <div><strong>產製時間：</strong>${Ve(e.generatedAt)}</div><div><strong>資料雜湊：</strong>${Ve(e.dataHash)}</div>
          <div><strong>完整列數：</strong>${e.rows.length}</div><div><strong>報表狀態：</strong>${Ve(e.status)}</div>
        </div>
        <div class="ev-sql">${Ve(e.sql)}</div>
      </details>
    </article>`).join(""),Un.forEach(e=>tn(e.id)))}function tn(n){const e=gn(n);if(!e)return;const t=vn(e),i=so(e),s=Math.max(1,Math.ceil(i.length/t.pageSize));t.page>s&&(t.page=s);const r=(t.page-1)*t.pageSize,o=i.slice(r,r+t.pageSize),a=document.getElementById("toolbar-"+n);a&&(a.innerHTML=ao(e));const l=document.getElementById("thead-"+n);l&&(l.innerHTML="<tr>"+e.columns.map(p=>`<th onclick="evSort('${n}','${p[0]}')">${Ve(p[1])}${t.sortKey===p[0]?t.sortDir===1?" ▲":" ▼":""}</th>`).join("")+"</tr>");const c=document.getElementById("tbody-"+n);c&&(c.innerHTML=o.map(p=>"<tr>"+e.columns.map(f=>`<td class="${typeof p[f[0]]=="number"?"num":""}">${Ve(p[f[0]])}</td>`).join("")+"</tr>").join("")||`<tr><td colspan="${e.columns.length}">沒有符合條件的資料</td></tr>`);const d=document.getElementById("pager-"+n);d&&(d.innerHTML=`<span>顯示 ${i.length?r+1:0}–${Math.min(r+t.pageSize,i.length)}／共 ${i.length} 列；完整報表 ${e.rows.length} 列</span><div class="buttons"><button onclick="evPage('${n}',-1)" ${t.page<=1?"disabled":""}>上一頁</button><span>第 ${t.page}／${s} 頁</span><button onclick="evPage('${n}',1)" ${t.page>=s?"disabled":""}>下一頁</button><button onclick="evDownload('${n}',true)">下載完整 CSV</button></div>`),lo(e,i)}function el(n,e){const t=vn(gn(n));t.search=e,t.page=1,tn(n)}function tl(n,e,t){const i=vn(gn(n));i.filters[e]=t,i.page=1,tn(n)}function nl(n,e){const t=vn(gn(n));t.pageSize=Number(e),t.page=1,tn(n)}function il(n,e){const t=vn(gn(n));t.page+=e,tn(n)}function sl(n,e){const t=vn(gn(n));t.sortKey===e?t.sortDir*=-1:(t.sortKey=e,t.sortDir=1),t.page=1,tn(n)}function rl(n){xi[n]={search:"",filters:{},sortKey:null,sortDir:1,page:1,pageSize:10},tn(n)}function al(n,e){const t=gn(n),i=e?t.rows:so(t),s=t.columns.map(c=>c[1]),r=t.columns.map(c=>c[0]),o=[s,...i.map(c=>r.map(d=>c[d]??""))].map(c=>c.map(d=>`"${String(d).replace(/"/g,'""')}"`).join(",")).join(`
`),a=new Blob(["\uFEFF"+o],{type:"text/csv;charset=utf-8"}),l=document.createElement("a");l.href=URL.createObjectURL(a),l.download=`${n}_${e?"full":"filtered"}.csv`,l.click(),URL.revokeObjectURL(l.href)}function lo(n,e){const t=document.getElementById("chart-"+n.id);if(!t)return;const i=window.devicePixelRatio||1,s=t.clientWidth||420,r=280;t.width=s*i,t.height=r*i;const o=t.getContext("2d");o.scale(i,i),o.clearRect(0,0,s,r);const a=n.chart||{},l=a.series||[];if(!e.length||!l.length){o.fillStyle="#667085",o.fillText("沒有可繪製的資料",20,30);return}const c=a.type==="bar"?e.slice(0,12):e,d={l:52,r:16,t:18,b:54},p=s-d.l-d.r,f=r-d.t-d.b,m=c.flatMap(h=>l.map(u=>Number(h[u[0]])||0));let _=Math.max(...m,1);for(let h=0;h<5;h++){let u=d.t+h*f/4;o.strokeStyle="#e7edf3",o.beginPath(),o.moveTo(d.l,u),o.lineTo(s-d.r,u),o.stroke(),o.fillStyle="#667085",o.font="11px Arial",o.textAlign="right",o.fillText(Math.round(_-h*_/4),d.l-7,u+4)}const g=["#1d6fd8","#0f766e","#a35b00","#6941c6"];if(a.type==="line")c.forEach((h,u)=>{o.fillStyle="#667085",o.textAlign="center",o.fillText(String(h[a.xKey]).slice(0,10),d.l+u*p/Math.max(1,c.length-1),r-16)}),l.forEach((h,u)=>{o.strokeStyle=g[u%g.length],o.lineWidth=3,o.beginPath(),c.forEach((M,E)=>{let S=d.l+E*p/Math.max(1,c.length-1),C=d.t+f-(Number(M[h[0]])||0)*f/_;E?o.lineTo(S,C):o.moveTo(S,C)}),o.stroke()});else{const h=p/c.length,u=Math.max(4,h*.68/l.length);c.forEach((M,E)=>{l.forEach((S,C)=>{let w=Number(M[S[0]])||0,b=d.l+E*h+(h-u*l.length)/2+C*u,q=d.t+f-w*f/_;o.fillStyle=g[C%g.length],o.fillRect(b,q,u-2,d.t+f-q)}),o.save(),o.translate(d.l+E*h+h/2,r-10),o.rotate(-Math.PI/7),o.fillStyle="#667085",o.font="10px Arial",o.textAlign="right",o.fillText(String(M[a.xKey]).slice(0,22),0,0),o.restore()})}l.forEach((h,u)=>{o.fillStyle=g[u%g.length],o.fillRect(d.l+u*145,d.t-12,12,4),o.fillStyle="#475467",o.textAlign="left",o.font="11px Arial",o.fillText(h[1],d.l+16+u*145,d.t-7)})}function tr(){ro(),oo(),window.addEventListener("resize",()=>Un.forEach(n=>tn(n.id)))}typeof window<"u"&&typeof window!==null&&(window.evOpen=Qo,window.evReport=gn,window.evEsc=Ve,window.evInit=tr,window.evRenderIndex=ro,window.evRenderReports=oo,window.evRenderOne=tn,window.evSearch=el,window.evSetFilter=tl,window.evPageSize=nl,window.evPage=il,window.evSort=sl,window.evReset=rl,window.evDownload=al,window.evDrawChart=lo,window.EV_STATE=xi,window.EVIDENCE_REPORTS=Un);document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tr):tr();const nr={AI:"人工智慧：會理解與總結內容的電腦程式（ChatGPT、Google AI Overviews 等）。",BigQuery:"Google 的雲端資料倉儲，所有數字都是從這裡撈出來的。",CSV:"Excel 可開啟的純文字資料檔。",CTA:"行動呼籲：網頁上的「按這裡」「立即報名」按鈕。",CTR:"點擊率：看過的人中有幾%真的點進來。",ContactPoint:"Google 結構化資料的「聯絡方式」標記類型。",Department:"Google 結構化資料的「大學系所」標記類型。",EducationalOrganization:"Google 結構化資料的「教育機構」標記類型。",FAQ:"常見問題：把使用者常問的整理成 Q&A。",FAQPage:"Google 看得懂的 Q&A 結構化資料標記。",Funnel:"漏斗分析：追蹤使用者從「看到 A 頁」到「點 B 頁」的轉換率。",GA4:"Google Analytics 4：Google 的新版網站分析工具。",GEO:"讓生成式 AI 正確理解與引用網站內容的優化。",GSC:"Google Search Console：觀察網站在 Google 搜尋的表現。",H1:"網頁最重要的標題，每頁應該只有 1 個。",H2:"次要標題，一頁可有多個，用於分段。",JSON:"一種資料格式，用 `{}` 和 `[]` 表達。","JSON-LD":"寫在網頁裡的一段 JSON，用來告訴 Google「這頁是什麼東西」。",KPI:"關鍵指標：可以用數字衡量表現的東西。",OG:"Open Graph。",P0:"最高優先級：本週必做。",P1:"高優先級：本月必做。",P2:"中優先級：本季完成。",SQL:"跟資料庫溝通的語言，用來撈數字。",URL:"網址。",Wayback:"網站時光機：archive.org 提供的歷史快照。","Wayback Machine":"網站時光機資料庫，可查過去某天的網頁版本。",acceptance:"驗收標準：怎樣算改善完成。",active_users:"在這段時間內實際操作過的使用者人數（不重複計算）。",all_gsc_summary:"這是放所有系所「Google 搜尋曝光與點擊」資料的總表。報告只取 ITM 資管的部分。",all_unit_summary:"拼字錯誤，正確為 all_units_summary。",all_units_summary:"這是放整個慈濟大學「所有 97 個系所」上網資料的總表。報告只取 ITM 資管的數字，需要先過濾。",audit:"稽核：定期檢查資料正確性與進度。",canonical:"告訴搜尋引擎「這個網址才是正式版」。",channel:"流量的管道分類，由 source + medium 自動歸類。",city:"使用者所在的城市（從 IP 推測，僅供參考）。",click_class:"被點擊的按鈕或連結的 CSS class 名稱（網頁程式設計師的命名）。",country:"使用者所在的國家（從 IP 推測）。",deadline:"完成期限。",decision:"一筆主管決定。",decisions:"主管這週需要做的決定清單。",description:"描述欄位。",device:"使用者用的裝置類型：桌機 / 手機 / 平板。",docTitle:"等同 <title>。為求一致，請使用 'title'。","duplicate ID":"同一個網頁裡有重複的元素 ID，是 bug。",engagement_time_msec:"使用者實際捲動、點擊的時間（不算發呆）。",event:"使用者在網站上做的任何一個動作，每一個動作都會記錄成一個事件。",event_name:"這個動作叫什麼名字，例如：page_view（瀏覽一頁）、click（點擊）、scroll（捲動）。",event_timestamp:"事件發生的精確時間（記到微秒等級）。",funnel:"漏斗。",ga_session_id:"訪客一次完整到訪的編號。同一人來兩天算兩個編號。",hreflang:"告訴搜尋引擎「這個頁面有英文／日文等其他語言版本」。",iframe:"內嵌的網頁框架（YouTube 嵌入、地圖都是 iframe）。",image_alt:"圖片的替代文字，給看不見圖片的人或搜尋引擎讀的說明文字。",impact:"影響。",lead:"潛在學生。",link_text:"連結上面寫的可見文字，例如「加入 LINE 群組」。",link_url:"連結實際指向的網址。",medium:"流量媒介，例如 organic（自然搜尋）、cpc（付費廣告）、referral（從別的網站點進來）。",meta:"網頁的中介資料。","meta description":"Google 搜尋結果標題下面那段說明文字。",name:"名稱欄位。",og:"Open Graph：控制分享到 LINE、Facebook 時顯示的標題/說明/圖片。","og:description":"分享時顯示的說明。","og:image":"分享時顯示的圖片。","og:title":"分享時顯示的標題。","og:url":"分享時的標準網址。",operating_system:"使用者用的系統，例如 Windows、Mac、Android、iOS。",page:"泛指網頁。",page_group:"自定義分類，把頁面歸類為「課程」「師資」「特色」等大群組。",page_location:"事件發生那一頁的網址。",page_referrer:"使用者到這頁之前，是從哪個網址點過來的。",page_title:"那一頁的標題（瀏覽器分頁上看到的文字）。",page_view:"使用者瀏覽一頁的紀錄。",pageview:"瀏覽次數。",priority:"優先級。",provenance:"資料出處：每個數字旁邊註明從哪張表來的。",robots:"搜尋引擎的爬蟲程式。","robots.txt":"放在網站根目錄的檔案，告訴 Google 哪些頁面可索引、哪些不行。",search_behavior_summary:"這是放「使用者搜尋什麼關鍵字之後，在網站做了什麼」資料的總表。",session:"使用者一次完整到訪。",session_key:"把「誰」跟「哪一次」併起來當唯一識別。例：`user_pseudo_id_1234_session_567`。",session_number:"使用者當天第幾次到訪。",site:"BigQuery 報表中對一個系所的統稱。注意本報告全程固定 `site='資訊科技與管理系'`。<br><br>例子：`WHERE site_name='資訊科技與管理系'`。",site_academy:"系所隸屬的學院。ITM 屬於人文社會學院。",site_id:"Google Analytics 給這個系所的內部編號。",site_link_clicks:"在 Google 搜尋結果裡，點擊了「同一個站的其他連結」的次數。",site_url:"系所首頁的網址，例如 ITM 的就是 `https://itm.tcu.edu.tw/`。",social_platform:"使用者從哪個社群平台來，例如 Facebook、LINE。",source:"流量來源，例如 google、facebook.com、(direct)。",sparkline:"小折線圖：KPI 卡裡的趨勢縮圖。",subdomain:"系所的子網域簡寫，ITM 就是 `itm`。",sum_position:"Google 搜尋結果「曝光在哪幾名」的加權平均。數字越小越前面。",telephone:"電話號碼欄位。",title:"網頁標題。","title-variant":"<title> 別名。同 'title' 處理。",total_behavior_events:"使用者搜尋後在站內繼續操作的總次數（瀏覽+點擊）。",unit_category:"97 個系所的分類，例如「教學單位」、「行政單位」。",url:"網址。",user:"訪客（已去識別化）。",user_pseudo_id:"給每位訪客的匿名編號（Google 為了保護隱私，把個人識別轉成亂碼）。",view:"瀏覽。",主題與實體清楚度:"首頁有沒有清楚告訴 Google「這是哪個學校、哪個系」。<br><br>📝 例子：好 = 標題寫「慈濟大學資訊科技與管理學系」；不好 = 只寫「首頁」或「歡迎光臨」。",內容結構與可擷取性:"Google 機器人能不能順利讀懂網站內容、把人話整理成答案。<br><br>📝 例子：好 = 內容有清楚的標題階層（H1、H2、H3）、有列表、有表格；不好 = 全部塞在一張大圖片裡，Google 看不到字。",單位網站管理人:"負責網頁內容的人（標題、聯絡電話、CTA、內容）。",工作階段:"Session — 使用者一次連續瀏覽的多個事件，通常 30 分鐘無活動後結束。<br><br>📝 例子：同學進來看完 5 頁然後離開，這段過程算一個「工作階段」。","技術 GEO":'網站有沒有安裝「結構化資料」標記讓 Google 認識學校與系所、有沒有 og 標籤讓分享時漂亮顯示。<br><br>📝 例子：好 = 安裝 JSON-LD 標記 `"@type": "EducationalOrganization"`；不好 = 完全沒有結構化資料，Google 只知道它是個「網站」但不知道是「大學系所」。',招生問題回答能力:"學生問「學什麼」「怎麼考」「學費多少」時，網站有沒有答案。<br><br>📝 例子：好 = 有「入學方式」頁面列出 115 學年度的入學管道與名額；不好 = 完全沒有提到如何入學。",證據與可信度:"網站有沒有提供「學生作品、競賽得獎、企業實習」這類證據讓人相信這個系很強。<br><br>📝 例子：好 = 列出「畢業生錄取半導體公司 12 位」「學生競賽獲獎 5 項」；不好 = 完全沒有數字、沒有案例。",過期:"頁面內容年份標記已過時，但 Google 還在推薦。對 SEO 是傷害。",電算中心技術支援:"負責資料查詢、報表維護、技術問題的人。",ARIA:"Accessible Rich Internet Applications。HTML 屬性集合，幫助輔助科技（如螢幕閱讀器）理解網頁內容。例如 aria-label 給元素加可讀標籤。",DOM:"Document Object Model。瀏覽器把 HTML 解析成的樹狀結構。JavaScript 透過 DOM API 操作頁面元素。","DOM ID":"HTML 元素的 id 屬性。同一頁面內 id 必須唯一。重複的 id 會破壞 JavaScript selector、ARIA 與無障礙工具。ITM 首頁偵測到 80 處重複。",Widget:"頁面中的一個互動小區塊（例如嵌入的 YouTube 影片、地圖、聯絡表單）。ITM 首頁有 26 個 iframe widget，全部缺 title 屬性。","application/ld+json":"JSON-LD 結構化資料在 HTML 中的 MIME 類型標記。出現這個 type 的 script 標籤就代表該網頁有寫結構化資料。","console.log":"JavaScript 內建的開發者工具函式，用來把訊息輸出到瀏覽器的 Console 面板。本報告的 gloss tooltip 系統靠它來除錯。",device_category:"BigQuery 欄位：裝置類別的另一個命名，等同 device。","favicon.ico":"瀏覽器分頁左上角顯示的小圖示（網站圖標）。Open Graph 的 og:image 指向 favicon.ico 不是好的實作，應該改為正式的 1200×630 招生主視覺圖。",null:"在 JavaScript / BigQuery 中表示「空值」或「不存在」。本報告用 null 代表「這項指標根本沒寫進網站原始碼」（例如 hreflang=null 表示從來沒有寫過這個標籤）。",parentOrganization:"在 schema.org 結構化資料裡，用來標示某個單位（例如資管系）隸屬於哪個較大的組織（例如慈濟大學）。這層關係幫助 Google 正確判斷機構階層。","schema.org/Department":"schema.org 提供的一種結構化資料類型。用 JSON 格式寫在網頁中，告訴 Google 這個頁面代表的是大學裡的「系所」單位。寫了之後，Google 搜尋結果能正確顯示系所名稱、地址、聯絡方式等。","<h1>":"HTML 標籤 <h1>。代表頁面的「主要標題」。SEO 與無障礙規範要求每頁只能有一個 <h1>，用來告訴搜尋引擎與螢幕閱讀器這個頁面的主題是什麼。","<h2>":"HTML 標籤 <h2>。代表頁面的「次要標題」。一頁通常會有多個 <h2> 用來區分章節。層級必須是 <h1> → <h2> → <h3>...，不能跳級。",contactPoint:"schema.org/Department JSON-LD 結構化資料中的欄位。用來寫這個系所的聯絡方式（電話、Email、地址、聯絡表單 URL）。","Hln_*":"範本自動產生的 HTML id 前綴（例如 Hln_a1b2）。同一個頁面上 id 必須唯一，重複的 id 會破壞 JavaScript selector、ARIA 與螢幕閱讀器的可訪問性。ITM 首頁偵測到 80 處這類 id 衝突。"},as=/(?:(?:(?<![A-Za-z0-9_])EducationalOrganization(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])search_behavior_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])schema\.org\/Department(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])total_behavior_events(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])engagement_time_msec(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])application\/ld\+json(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])parentOrganization(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_units_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_unit_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])meta description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])operating_system(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_link_clicks(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Wayback Machine(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_gsc_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])device_category(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event_timestamp(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])social_platform(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session_number(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])user_pseudo_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ga_session_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_location(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_referrer(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])title-variant(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])unit_category(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ContactPoint(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])active_users(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])contactPoint(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])duplicate ID(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_academy(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])sum_position(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])click_class(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])console\.log(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])favicon\.ico(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session_key(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Department(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])acceptance(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event_name(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_group(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])provenance(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])robots\.txt(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])canonical(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])decisions(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])image_alt(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])link_text(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_view(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])sparkline(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])subdomain(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])telephone(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])內容結構與可擷取性(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])BigQuery(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])deadline(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])decision(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])docTitle(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])hreflang(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])link_url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:image(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])pageview(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])priority(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])主題與實體清楚度(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])招生問題回答能力(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])電算中心技術支援(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])FAQPage(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])JSON-LD(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Wayback(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])channel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])country(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])單位網站管理人(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])DOM ID(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Funnel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Widget(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])device(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])funnel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])iframe(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])impact(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])medium(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])robots(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])source(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])技術 GEO(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])證據與可信度(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Hln_\*(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])audit(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])<h1>(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])<h2>(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ARIA(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])JSON(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])city(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])lead(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])meta(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])name(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])null(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])user(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])view(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])工作階段(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CSV(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CTA(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CTR(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])DOM(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])FAQ(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GA4(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GEO(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GSC(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])KPI(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])SQL(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])URL(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])AI(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])H1(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])H2(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])OG(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P0(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P1(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P2(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])過期(?![A-Za-z0-9_])))/g,Rr=new Set;function ol(n){if(!n||!n.parentNode)return!0;const e=n.parentNode;if(e.nodeType!==1)return!1;const t=e.tagName;return!!(["SCRIPT","STYLE","NOSCRIPT","TEMPLATE"].includes(t)||e.classList&&e.classList.contains("gloss-tip")||e.classList&&e.classList.contains("gloss")||e.classList&&e.classList.contains("ev-table")||e.tagName==="A"&&e.getAttribute("href"))}function ll(n){const e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,{acceptNode:function(s){return!s.nodeValue||!s.nodeValue.trim()||ol(s)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),t=[];let i;for(;i=e.nextNode();)t.push(i);return t}function cl(n){const e=n.nodeValue;as.lastIndex=0;const t=[];let i;for(;(i=as.exec(e))!==null;)t.push({start:i.index,end:i.index+i[0].length,term:i[0]});if(t.length===0)return null;const s=document.createDocumentFragment();let r=0;for(const o of t){o.start>r&&s.appendChild(document.createTextNode(e.substring(r,o.start)));const a=document.createElement("span");a.setAttribute("data-term",o.term),a.textContent=o.term,Rr.has(o.term)?a.className="gloss repeat":(Rr.add(o.term),a.className="gloss anchor"),s.appendChild(a),r=o.end}return r<e.length&&s.appendChild(document.createTextNode(e.substring(r))),s}function Ei(){const n=ll(document.body);for(const e of n){if(!e.parentNode)continue;const t=cl(e);t&&e.parentNode.replaceChild(t,e)}}let sn=null,ii=null,Ii=null;function Cr(n){var e=document.createElement("div");return e.appendChild(document.createTextNode(n)),e.innerHTML}function Lr(n,e){if(!n)return;const t=nr[n];if(!t)return;ii&&ir(!0);const i=document.createElement("div");i.className="gloss-tip",i.innerHTML='<div class="tip-label">'+Cr(n)+'（hover 說明）</div><div class="tip-def">'+Cr(t)+'</div><div class="tip-db">📚 完整資料庫：附錄 A｜術語資料庫（v56）</div>',document.body.appendChild(i);const s=e.getBoundingClientRect();let r=s.left+window.scrollX,o=s.bottom+window.scrollY+6;requestAnimationFrame(()=>{const a=i.getBoundingClientRect();r+a.width>window.innerWidth-10&&(r=window.innerWidth-a.width-10),r<10&&(r=10),i.style.left=r+"px",i.style.top=o+"px",i.classList.add("show")}),ii=i}function ir(n){if(Ii&&(clearTimeout(Ii),Ii=null),ii){const e=ii;n?(e.remove(),ii=null):Ii=setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>{e.remove(),ii=null},200)},100)}}function Di(){document.body.addEventListener("mouseover",function(n){const e=n.target.closest(".gloss");if(!e)return;const t=e.getAttribute("data-term");sn&&clearTimeout(sn),sn=setTimeout(()=>Lr(t,e),800)}),document.body.addEventListener("mouseout",function(n){n.target.closest(".gloss")&&(sn&&(clearTimeout(sn),sn=null),ir(!1))}),document.body.addEventListener("click",function(n){const e=n.target.closest(".gloss");if(!e){ir(!0);return}const t=e.getAttribute("data-term");sn&&clearTimeout(sn),Lr(t,e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",function(){Ei(),Di(),window.WEBINSIGHT=window.WEBINSIGHT||{},window.WEBINSIGHT.gloss={autoWrapAll:Ei,DB:nr,PATTERN:as,rebind:Di}}):(Ei(),Di(),window.WEBINSIGHT=window.WEBINSIGHT||{},window.WEBINSIGHT.gloss={autoWrapAll:Ei,DB:nr,PATTERN:as,rebind:Di});const ps=()=>{try{Ei()}catch{}};window.addEventListener("hashchange",ps);const Ir=window.setView;window.setView=function(n){typeof Ir=="function"&&Ir(n),setTimeout(ps,50)};setTimeout(ps,200);setTimeout(ps,800);(function(){function n(){const e=document.querySelectorAll(".geo-pill");if(!e.length)return;let t="tech";try{t=localStorage.getItem("geo-view")||"tech"}catch{t="tech"}document.body.setAttribute("data-geo-view",t);function i(){e.forEach(function(s){const r=s.getAttribute("data-view")===t;s.classList.toggle("active",r),s.setAttribute("aria-pressed",String(r))})}i(),e.forEach(function(s){s.addEventListener("click",function(r){r.preventDefault(),r.stopPropagation(),t=this.getAttribute("data-view"),document.body.setAttribute("data-geo-view",t);try{localStorage.setItem("geo-view",t)}catch{}i()})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()})();function ul(n){document.body.className="view-"+n,document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("active",e.dataset.view===n)),window.scrollTo({top:0,behavior:"smooth"})}typeof window<"u"&&typeof window!==null&&(window.setView=ul,window.spark=co,window.evidence=uo,window.issue=sr,window.draw=Cn,window.init=rr);function co(n){let e=Math.min(...n),t=Math.max(...n),i=t-e||1;return`<svg viewBox="0 0 100 34" preserveAspectRatio="none"><polyline points="${n.map((r,o)=>`${o*100/(n.length-1)},${32-(r-e)*28/i}`).join(" ")}"/></svg>`}function uo(n){return`<details class="evidence"><summary>查看數據證據與定義</summary><div class="egrid"><div><strong>資料表：</strong>${n.table}</div><div><strong>查詢代碼：</strong>${n.query}</div><div><strong>欄位：</strong>${n.fields}</div><div><strong>資料期間：</strong>${n.period}</div><div><strong>資料整理：</strong>電算中心技術支援</div><div><strong>限制：</strong>${n.limit}</div><div><strong>完整證據：</strong><a class="ev-link" href="#ev-reports" onclick="setView('evidence')">前往證據報表中心</a></div></div></details>`}function sr(n,e){return`<div class="issue"><div class="issue-head"><div><span class="pid">${n.id}</span><div class="issue-title">${n.title}</div></div><span class="${n.p==="P1"?"p1":"p2"}">${n.p}</span></div><div class="callout ${n.p==="P1"?"warn":""}"><strong>主管影響：</strong>${n.manager}</div><div class="owners">${e!=="it"?`<div class="owner unitbox"><strong>單位網站管理人</strong><br>頁面：${n.pages}<ul class="clean">${n.web.map(t=>`<li>${t}</li>`).join("")}</ul><strong>驗收：</strong>${n.accept}</div>`:""}${e!=="web"?`<div class="owner itbox"><strong>電算中心技術支援</strong><ul class="clean">${n.it.map(t=>`<li>${t}</li>`).join("")}</ul><strong>狀態：</strong>${n.status}</div>`:""}</div>${uo(n)}</div>`}function Cn(n,e,t,i){const s=document.getElementById(n),r=window.devicePixelRatio||1,o=s.clientWidth,a=240;s.width=o*r,s.height=a*r;let l=s.getContext("2d");l.scale(r,r),l.clearRect(0,0,o,a);let c={l:44,r:14,t:16,b:30},d=o-c.l-c.r,p=a-c.t-c.b,f=t.flat(),m=Math.min(...f),_=Math.max(...f);m===_&&(m=0,_=_||1);let g=(_-m)*.08;m=Math.max(0,m-g),_+=g;for(let h=0;h<5;h++){let u=c.t+h*p/4;l.strokeStyle="#e7edf3",l.beginPath(),l.moveTo(c.l,u),l.lineTo(o-c.r,u),l.stroke(),l.fillStyle="#667085",l.font="11px Arial",l.textAlign="right",l.fillText(Math.round(_-h*(_-m)/4),c.l-7,u+4)}e.forEach((h,u)=>{l.fillStyle="#667085",l.textAlign="center",l.fillText(h,c.l+u*d/(e.length-1),a-8)}),t.forEach((h,u)=>{l.strokeStyle=i[u],l.lineWidth=3,l.beginPath(),h.forEach((M,E)=>{let S=c.l+E*d/(e.length-1),C=c.t+p-(M-m)*p/(_-m);E?l.lineTo(S,C):l.moveTo(S,C)}),l.stroke()})}function dl(){const n=WEBINSIGHT.DATA.audience;if(!n)return;const e=n.total||n.source.reduce(function(r,o){return r+(o.sessions||0)},0),t=document.getElementById("audienceSource");if(t){const r=n.source.map(function(o){const a=e?Math.round((o.sessions||0)*1e3/e)/10:0,l=o.medium==="organic"?"teal":o.medium==="internal"?"orange":o.medium==="other"?"gray":"",c=a>0?a:.1;return'<div class="bar-row"><span>'+o.name+'</span><div class="bar-track"><div class="bar '+l+'" style="width:'+c+'%"></div></div><div class="bar-value">'+(o.sessions||0)+"｜"+a+"%</div></div>"}).join("");t.innerHTML=r}const i=document.getElementById("audienceDevice");if(i){const r=["#2f6fed","#0f8b8d","#d97706"];let o=0;const a=n.device.map(function(f,m){const _=e?Math.round((f.sessions||0)*1e3/e)/10:0,g=o;return o+=_,r[m%3]+" "+g+"% "+o+"%"}).join(", "),l=o,c=a+", #f4f7fb "+l+"% 100%",d={desktop:"桌機",mobile:"手機",tablet:"平板"};let p="";n.device.forEach(function(f){const m=e?Math.round((f.sessions||0)*1e3/e)/10:0,_=d[f.name]||f.name;p+="<div><span>"+_+"</span><b>"+(f.sessions||0)+"｜"+m+"%</b></div>"}),i.innerHTML='<div class="donut-wrap"><div class="donut" style="background:conic-gradient('+c+')" aria-label="device"><div class="donut-center">'+e+'<br>工作階段</div></div><div class="donut-legend">'+p+"</div></div>"}const s=document.getElementById("audienceCountry");s&&(s.innerHTML=n.country.map(function(r){const o=e?Math.round((r.sessions||0)*1e3/e)/10:0,a=r.name==="臺灣"?"green":r.name==="其他國家"?"gray":"teal",l=o>0?o:.1;return'<div class="bar-row"><span>'+r.name+'</span><div class="bar-track"><div class="bar '+a+'" style="width:'+l+'%"></div></div><div class="bar-value">'+(r.sessions||0)+"｜"+o+"%</div></div>"}).join(""))}function rr(){document.getElementById("kpis").innerHTML=WEBINSIGHT.DATA.kpis.map(n=>`<div class="metric"><div class="k">${n.k}</div><div class="v">${n.v}</div><div class="trend ${n.up?"up":"down"}">${n.trend} 較前週｜${n.avg} 較八週平均</div><div>${n.desc}</div><div class="spark">${co(n.spark)}</div><div class="source">來源：${n.src}</div></div>`).join(""),document.getElementById("decisions").innerHTML=WEBINSIGHT.DATA.decisions.map(n=>`<div class="decision"><div><span class="${n.p==="P1"?"p1":"p2"}">${n.p}</span><br><span class="pid">${n.id}</span></div><div><strong>${n.title}</strong><br>${n.reason}</div><div class="who"><span class="tag unit">主責：${n.who}</span><br><span class="tag it">${n.support}</span><br>期限：${n.due}</div></div>`).join(""),document.getElementById("webIssues").innerHTML=WEBINSIGHT.DATA.issues.filter(n=>n.pages!=="無需修改頁面").map(n=>sr(n,"web")).join(""),document.getElementById("commonIssues").innerHTML=WEBINSIGHT.DATA.issues.map(n=>sr(n,"all")).join(""),document.getElementById("webTable").innerHTML=WEBINSIGHT.DATA.webRows.map(n=>`<tr><td><span class="pid">${n[0]}</span></td><td>${n[1]}</td><td class="num">${n[2]}</td><td class="num">${n[3]}</td><td class="num">${n[4]}</td><td>${n[5]}</td><td>${n[6]}</td></tr>`).join(""),document.getElementById("quality").innerHTML=WEBINSIGHT.DATA.quality.map(n=>`<div class="metric"><div class="k"><code>${n[0]}</code></div><div class="v" style="font-size:23px">${n[2]}</div><div>最大資料日期：${n[1]}</div><div class="source">${n[3]}</div></div>`).join(""),document.getElementById("queryTable").innerHTML=WEBINSIGHT.DATA.queries.map(n=>`<tr><td><code>${n[0]}</code></td><td><code>${n[1]}</code></td><td>${n[2]}</td><td>${n[3]}</td><td>${n[4]}</td><td>${n[5]}</td></tr>`).join(""),Cn("trafficChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.traffic.a,WEBINSIGHT.DATA.traffic.b],["#1d6fd8","#0f766e"]),Cn("searchChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.search.a,WEBINSIGHT.DATA.search.b],["#1d6fd8","#0f766e"]),Cn("funnelChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.funnel.a,WEBINSIGHT.DATA.funnel.b,WEBINSIGHT.DATA.funnel.c],["#1d6fd8","#0f766e","#a35b00"])}window.addEventListener("resize",()=>{Cn("trafficChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.traffic.a,WEBINSIGHT.DATA.traffic.b],["#1d6fd8","#0f766e"]),Cn("searchChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.search.a,WEBINSIGHT.DATA.search.b],["#1d6fd8","#0f766e"]),Cn("funnelChart",WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.funnel.a,WEBINSIGHT.DATA.funnel.b,WEBINSIGHT.DATA.funnel.c],["#1d6fd8","#0f766e","#a35b00"])});dl();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rr):rr();const Ue={blue:"#2f6fed",teal:"#0f8b8d",orange:"#d97706",green:"#1d8a5a",gray:"#7b8797",navy:"#15334a",muted:"#647581",line:"#dce5e9"},On={t:20,r:80,b:36,l:64},Pi=window.devicePixelRatio||1;function Fn(n,e){if(!n)return null;const t=n.clientWidth||600;n.width=t*Pi,n.height=e*Pi,n.style.height=e+"px";const i=n.getContext("2d");return i.setTransform(Pi,0,0,Pi,0,0),{ctx:i,w:t,h:e}}function ct(n,e,t,i){n.font=(t?"bold ":"")+e+'px "Microsoft JhengHei", -apple-system, sans-serif',i&&(n.fillStyle=i)}function Bn(n,e,t){return{x:t.l,y:t.t,w:n-t.l-t.r,h:e-t.t-t.b}}function hl(n,e,t,i,s,r,o){n.strokeStyle=Ue.line,n.lineWidth=1,ct(n,10,!1,Ue.muted),n.textAlign="right",n.textBaseline="middle";for(let l=0;l<=s;l++){const c=t+(i-t)*l/s,d=e.y+e.h-(c-t)/(i-t)*e.h;n.beginPath(),n.moveTo(e.x,d),n.lineTo(e.x+e.w,d),n.stroke(),n.fillText(Math.round(c).toLocaleString(),e.x-8,d)}n.textAlign="center",n.textBaseline="top";const a=o;for(let l=0;l<r.length;l+=a){const c=e.x+(r.length===1?e.w/2:l/(r.length-1)*e.w);n.fillText(r[l],c,e.y+e.h+8)}}function Wt(n){return"<strong>主管判讀：</strong>"+n}function fl(n,e){const t=n[n.length-1],i=n[n.length-2],s=[];return[{key:"sessions",label:"工作階段",baseKey:"sessions"},{key:"users",label:"活躍使用者",baseKey:"users"},{key:"pageviews",label:"瀏覽量",baseKey:"pageviews"},{key:"impressions",label:"搜尋曝光",baseKey:"impressions"},{key:"clicks",label:"搜尋點擊",baseKey:"clicks"}].forEach(o=>{const a=t[o.key]||0,l=i[o.key]||0,c=e.min_base[o.baseKey]||0;let d,p,f,m;if(l<c)d="樣本較少",p="sample",f="前期基期過小",m="flat";else{const _=l?(a-l)*100/l:0,g=Math.abs(_);g>=e.threshold_pct?(d=_>0?"明顯成長":"明顯下降",p=_>0?"up":"down"):g>=15?(d="需要注意",p="warn"):(d="大致穩定",p="flat"),f=(_>0?"+":"")+_.toFixed(1)+"%",m=_>0?"up":_<0?"down":"flat"}s.push({label:o.label,current:a,previous:l,status:d,statusClass:p,deltaLabel:f,deltaCls:m})}),s}function pl(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.trends,e=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.anomaly_rule||{threshold_pct:30,min_base:{}};if(!n||!n.length)return;const t=n[n.length-1],i=n[n.length-2];Dr("chartTrendsGA4",n,[{key:"sessions",label:"工作階段",color:Ue.blue},{key:"users",label:"活躍使用者",color:Ue.green},{key:"pageviews",label:"瀏覽量",color:Ue.orange}]),Dr("chartTrendsGSC",n,[{key:"impressions",label:"曝光",color:Ue.blue},{key:"clicks",label:"點擊",color:Ue.orange}]);const s=document.getElementById("ctr-current-value"),r=document.getElementById("ctr-current-delta");if(s&&r){const m=t.impressions?t.clicks/t.impressions*100:0,_=i.impressions?i.clicks/i.impressions*100:0,g=m-_;s.textContent=m.toFixed(2)+"%";let h="flat",u="";Math.abs(g)>=.5&&(h=g>0?"up":"down",u=g>0?"+":""),r.className="ctr-delta "+h,r.textContent="比前期 "+u+g.toFixed(2)+" pt"}const o=fl(n,e),a=document.getElementById("scorecard-trends");a&&(a.innerHTML=o.map(m=>'<div class="scorecard '+m.statusClass+'"><div class="sc-label">'+m.label+'</div><div class="sc-value">'+m.current.toLocaleString()+'</div><div class="sc-delta">'+m.deltaLabel+"</div></div>").join(""));const l=document.getElementById("tableTrendWeekly");if(l){const m=n.slice().reverse().map(_=>{const g=_.impressions?_.clicks/_.impressions*100:0,h=n[n.indexOf(_)-1];let u="—",M="flat",E="—",S="flat";if(h){const C=h.sessions?(_.sessions-h.sessions)*100/h.sessions:0;if(u=(C>0?"+":"")+C.toFixed(1)+"%",M=C>0?"up":C<0?"down":"flat",h.sessions<e.min_base.sessions)E="樣本較少",S="sample";else{const w=Math.abs(C);w>=e.threshold_pct?(E=_.sessions>h.sessions?"明顯成長":"明顯下降",S=_.sessions>h.sessions?"up":"down"):w>=15?(E="需要注意",S="warn"):(E="大致穩定",S="flat")}}else E="基準期",S="flat";return"<tr><td>"+_.week+'</td><td class="num">'+_.sessions.toLocaleString()+'</td><td class="num">'+_.users.toLocaleString()+'</td><td class="num">'+_.pageviews.toLocaleString()+'</td><td class="num">'+_.impressions.toLocaleString()+'</td><td class="num">'+_.clicks.toLocaleString()+'</td><td class="num">'+g.toFixed(2)+'%</td><td class="num"><span class="ctr-delta '+M+'">'+u+'</span></td><td><span class="status-pill '+S+'">'+E+"</span></td></tr>"}).join("");l.innerHTML='<thead><tr><th>期間</th><th class="num">工作階段</th><th class="num">活躍使用者</th><th class="num">瀏覽量</th><th class="num">搜尋曝光</th><th class="num">搜尋點擊</th><th class="num">CTR</th><th class="num">與前期差異</th><th>狀態</th></tr></thead><tbody>'+m+"</tbody>"}const c=o.find(m=>m.label==="工作階段"),d=o.find(m=>m.label==="搜尋點擊"),p=o.find(m=>m.label==="搜尋曝光"),f=m=>m.statusClass==="up"?"成長":m.statusClass==="down"?"下降":m.statusClass==="warn"?"波動":m.statusClass==="sample"?"樣本較少":"穩定";document.getElementById("insight-trends").innerHTML=Wt("本期工作階段 "+f(c)+"、搜尋曝光 "+f(p)+"、搜尋點擊 "+f(d)+"，請優先確認變動 ≥30% 的指標是否同步變化。")}function Dr(n,e,t){const i=document.getElementById(n);if(!i)return;const s=Fn(i,240);if(!s)return;const{ctx:r,w:o,h:a}=s;r.clearRect(0,0,o,a);const l=Bn(o,a,On),c=e.map(h=>h.week),d=[];t.forEach(h=>e.forEach(u=>d.push(u[h.key]||0)));const p=Math.max(...d,1),f=Math.ceil(p*1.15);hl(r,l,0,f,4,c,1);const m=(h,u)=>({x:l.x+(e.length===1?l.w/2:u/(e.length-1)*l.w),y:l.y+l.h-h/f*l.h});t.forEach(h=>{r.strokeStyle=h.color,r.lineWidth=2.5,r.beginPath(),e.forEach((u,M)=>{const E=m(u[h.key]||0,M);M===0?r.moveTo(E.x,E.y):r.lineTo(E.x,E.y)}),r.stroke(),e.forEach((u,M)=>{const E=m(u[h.key]||0,M);r.fillStyle=h.color,r.beginPath(),r.arc(E.x,E.y,3,0,6.3),r.fill()})});let _=l.x;const g=l.y-14;t.forEach(h=>{r.fillStyle=h.color,r.fillRect(_,g,12,3),ct(r,11,!1,Ue.navy),r.textAlign="left",r.textBaseline="middle",r.fillText(h.label,_+18,g+1),_+=r.measureText(h.label).width+50})}function ml(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.brand_split,e=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.keyword_rows;if(!n||!n.length)return;const t=document.getElementById("chartBrandSplit");if(t){const l=Fn(t,240);if(l){const{ctx:c,w:d,h:p}=l;c.clearRect(0,0,d,p);const f=Bn(d,p,On),m=f.w/n.length*.6,_=f.w/n.length*.4;n.forEach((g,h)=>{const u=f.x+h*(m+_)+_/2,M=f.y+f.h,E=g.brand_pct/100*f.h,S=g.nonbrand_pct/100*f.h;c.fillStyle=Ue.blue,c.fillRect(u,M-E,m,E),c.fillStyle=Ue.gray,c.fillRect(u,M-E-S,m,S),ct(c,12,!0,Ue.navy),c.textAlign="center",c.textBaseline="top",c.fillText(g.month,u+m/2,M+6),ct(c,11,!0,"#fff"),c.textBaseline="middle",c.fillText(g.brand_pct+"%",u+m/2,M-E/2),c.fillText(g.nonbrand_pct+"%",u+m/2,M-E-S/2)}),c.fillStyle=Ue.blue,c.fillRect(f.x,f.y-22,14,10),c.fillStyle=Ue.gray,c.fillRect(f.x+110,f.y-22,14,10),ct(c,11,!1,Ue.navy),c.textAlign="left",c.textBaseline="middle",c.fillText("品牌詞曝光",f.x+20,f.y-17),c.fillText("非品牌詞曝光",f.x+130,f.y-17)}}const i=document.getElementById("chartBrandShare");if(i){const l=Fn(i,240);if(l){const{ctx:c,w:d,h:p}=l;c.clearRect(0,0,d,p);const f=Bn(d,p,On),m=n[n.length-1],g=m.nonbrand_pct/100*f.h;c.fillStyle=Ue.gray,c.fillRect(f.x+f.w/2-40,f.y+f.h-g,80,g),c.strokeStyle=Ue.line,c.strokeRect(f.x+f.w/2-40,f.y,80,f.h),ct(c,22,!0,Ue.navy),c.textAlign="center",c.textBaseline="middle",c.fillText(m.nonbrand_pct+"%",f.x+f.w/2,f.y+f.h/2),ct(c,11,!1,Ue.muted),c.fillText("非品牌曝光比例",f.x+f.w/2,f.y+f.h+16),c.fillText("("+m.month+")",f.x+f.w/2,f.y+f.h+32)}}const s=document.getElementById("scorecard-brand");if(s){const l=n[n.length-1],c=l.brand_imp?l.brand_clicks/l.brand_imp*100:0,d=l.nonbrand_imp?l.nonbrand_clicks/l.nonbrand_imp*100:0;s.innerHTML=[["品牌詞曝光",l.brand_imp.toLocaleString(),l.brand_pct+"%","blue"],["非品牌詞曝光",l.nonbrand_imp.toLocaleString(),l.nonbrand_pct+"%","teal"],["品牌詞 CTR",c.toFixed(2)+"%","點擊率","green"],["非品牌詞 CTR",d.toFixed(2)+"%","點擊率","orange"]].map(([p,f,m,_])=>'<div class="scorecard '+_+'"><div class="sc-label">'+p+'</div><div class="sc-value">'+f+'</div><div class="sc-delta">'+m+"</div></div>").join("")}const r=document.getElementById("tableKeywordAll");if(r&&e){const c=e.slice().sort((d,p)=>p.imp-d.imp).map(d=>{const p=d.imp?d.clicks/d.imp*100:0,f=d.imp?d.sum_position/d.imp:0,m=d.cls==="brand"?"up":"flat";return'<tr><td class="wrap">'+it(d.query)+'</td><td><span class="status-pill '+m+'">'+(d.cls==="brand"?"品牌":"非品牌")+'</span></td><td class="num">'+d.imp.toLocaleString()+'</td><td class="num">'+d.clicks.toLocaleString()+'</td><td class="num">'+p.toFixed(2)+'%</td><td class="num">'+(f>0?f.toFixed(1):"—")+'</td><td class="wrap">'+Qt(d.landing)+"</td></tr>"}).join("");r.innerHTML='<thead><tr><th>query</th><th>分類</th><th class="num">曝光</th><th class="num">點擊</th><th class="num">CTR</th><th class="num">平均排名</th><th>到達頁</th></tr></thead><tbody>'+c+"</tbody>"}const o=n[n.length-1],a=e?e.filter(l=>l.cls==="nonbrand").sort((l,c)=>c.imp-l.imp)[0]:null;document.getElementById("insight-brand").innerHTML=Wt("近三個月非品牌詞曝光佔比 "+o.nonbrand_pct+"%，主要為「"+(a?a.query:"—")+"」等一般查詢；建議保留並優化高曝光品牌詞 landing page。")}function it(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function _l(n){if(!n||n==="-")return"";let e=String(n);return/^https?:\/\//i.test(e)?e:(e.startsWith("/")||(e="/"+e),"https://itm.tcu.edu.tw"+e)}function Qt(n){const e=_l(n);return e?'<a href="'+e+'" target="_blank" rel="noopener" title="在新分頁開啟 '+e+'">'+it(n)+" ↗</a>":"—"}function gl(n,e){return n?'<a href="'+it(n)+'" target="_blank" rel="noopener">'+it(n)+" ↗</a>":"—"}function vl(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.content_matrix;if(!n||!n.length)return;const e=document.getElementById("scorecard-content");if(e){const h=n.length,u=n.filter(C=>C.users>=5).length,M=n.reduce((C,w)=>C+(w.users||0),0),E=n.reduce((C,w)=>C+(w.engagement_sec||0),0),S=M?E/M:0;e.innerHTML=[["總頁面數",h.toLocaleString(),"正規化後","blue"],["活躍頁面",u.toLocaleString(),"≥5 使用者","teal"],["總活躍使用者",M.toLocaleString(),"近一週","green"],["平均互動秒／使用者",S.toFixed(0),"全部頁面","orange"]].map(([C,w,b,q])=>'<div class="scorecard '+q+'"><div class="sc-label">'+C+'</div><div class="sc-value">'+w+'</div><div class="sc-delta">'+b+"</div></div>").join("")}const t=n.filter(h=>h.users>=5),i=t.map(h=>h.users).sort((h,u)=>h-u),s=t.map(h=>h.engagement_sec).sort((h,u)=>h-u),r=h=>h.length===0?0:h.length%2?h[(h.length-1)/2]:(h[h.length/2-1]+h[h.length/2])/2,o=r(i),a=r(s),l=document.getElementById("chartContentMatrix");if(l){const h=Fn(l,320);if(h){const{ctx:u,w:M,h:E}=h;u.clearRect(0,0,M,E);const S=Bn(M,E,On),C=Math.max(...n.map(z=>z.users),1),w=Math.max(...n.map(z=>z.engagement_sec),1),b=S.x+o/C*S.w,q=S.y+S.h-a/w*S.h;u.fillStyle="rgba(150,160,170,0.06)",u.fillStyle="rgba(150,160,170,0.06)",u.fillStyle="rgba(150,160,170,0.06)",u.fillStyle="rgba(150,160,170,0.06)",u.strokeStyle=Ue.muted,u.setLineDash([3,3]),u.lineWidth=1,u.beginPath(),u.moveTo(b,S.y),u.lineTo(b,S.y+S.h),u.stroke(),u.beginPath(),u.moveTo(S.x,q),u.lineTo(S.x+S.w,q),u.stroke(),u.setLineDash([]),ct(u,10,!0,Ue.muted),u.textAlign="left",u.textBaseline="top",u.fillText("中位數 使用者 ≈ "+o.toFixed(1),b+6,S.y+4),u.fillText("中位數 互動 ≈ "+a.toFixed(1)+" 秒",S.x+6,q+4),ct(u,10,!1,Ue.muted),u.textAlign="center",u.textBaseline="top",u.fillText("0",S.x,S.y+S.h+4),u.fillText(C.toFixed(0),S.x+S.w,S.y+S.h+4),u.textAlign="right",u.textBaseline="middle",u.fillText("0",S.x-6,S.y+S.h),u.fillText(w.toFixed(0),S.x-6,S.y);const T=6;n.forEach(z=>{const G=S.x+z.users/C*S.w,J=S.y+S.h-z.engagement_sec/w*S.h;z.users>=o,z.engagement_sec>=a;const L=Ue.gray;u.fillStyle=L,u.globalAlpha=z.users>=5?.85:.35,u.beginPath(),u.arc(G,J,z.users>=5?T:T-2,0,6.3),u.fill(),u.globalAlpha=1,u.strokeStyle=L,u.lineWidth=1.2,u.stroke()});const A=document.createElement("div");A.style.cssText="position:fixed;pointer-events:none;background:#15334a;color:#fff;font-size:12px;padding:6px 8px;border-radius:6px;display:none;z-index:9999;max-width:240px;line-height:1.4",document.body.appendChild(A),l.addEventListener("mousemove",z=>{const G=l.getBoundingClientRect(),J=z.clientX-G.left,L=z.clientY-G.top;let D=null;for(const H of n){const V=S.x+H.users/C*S.w,W=S.y+S.h-H.engagement_sec/w*S.h;if(Math.hypot(J-V,L-W)<10){D=H;break}}D?(A.innerHTML="<strong>"+it(D.title)+"</strong><br>路徑："+it(D.normalized_path)+"<br>使用者："+D.users+" ・ 工作階段："+D.sessions+"<br>瀏覽量："+D.pageviews+"<br>平均互動："+D.engagement_sec.toFixed(1)+" 秒／使用者",A.style.left=z.clientX+12+"px",A.style.top=z.clientY+12+"px",A.style.display="block"):A.style.display="none"}),l.addEventListener("mouseleave",()=>{A.style.display="none"}),ct(u,11,!0,Ue.muted),u.textAlign="center",u.textBaseline="top",u.fillText("高互動／高使用者",S.x+S.w*.75,S.y+4),u.fillText("低互動／高使用者",S.x+S.w*.75,S.y+S.h-24),u.fillText("高互動／低使用者",S.x+S.w*.25,S.y+4),u.fillText("低互動／低使用者",S.x+S.w*.25,S.y+S.h-24)}}const c=h=>{const u=h.users>=o,M=h.engagement_sec>=a;return u&&M?{key:"Q1",name:"高流量 × 高互動",action:"維持並放大",color:"gray"}:u&&!M?{key:"Q2",name:"高流量 × 低互動",action:"優先改善",color:"gray"}:!u&&M?{key:"Q3",name:"低流量 × 高互動",action:"增加導流",color:"gray"}:{key:"Q4",name:"低流量 × 低互動",action:"觀察／整併",color:"gray"}},d={Q2:1,Q3:2,Q1:3,Q4:4},p=n.map(h=>({d:h,q:c(h)}));p.sort((h,u)=>d[h.q.key]-d[u.q.key]||u.d.users-h.d.users);const f=document.getElementById("tableContentList");if(f){const h=p.map(({d:u,q:M})=>'<tr><td class="wrap">'+it(u.title)+'</td><td class="wrap">'+Qt(u.normalized_path)+'</td><td class="num">'+u.users+'</td><td class="num">'+u.engagement_sec.toFixed(0)+'</td><td><span class="status-pill '+M.color+'">'+M.name+'</span></td><td class="wrap">'+M.action+'</td><td><span class="status-pill '+(u.users>=5?"flat":"sample")+'">'+(u.users>=5?"足夠":"樣本不足")+"</span></td></tr>").join("");f.innerHTML='<thead><tr><th>頁面</th><th>路徑</th><th class="num">使用者</th><th class="num">平均互動</th><th>象限</th><th>建議行動</th><th>樣本狀態</th></tr></thead><tbody>'+h+"</tbody>"}const m=p.filter(h=>h.q.key==="Q2").slice(0,2),_=p.filter(h=>h.q.key==="Q3").slice(0,1),g=m.length||_.length?"本期「"+(m[0]?m[0].d.title:_[0].d.title)+"」等頁面值得優先檢視。"+(m.length?"高流量 × 低互動 的頁面建議先優化內容與 CTA。":"")+(_.length?"另有「"+_[0].d.title+"」互動不錯但流量低，可考慮加導流。":""):"目前可辨識的頁面互動差異有限，建議持續累積 2 週資料後再比較。";document.getElementById("insight-content").innerHTML=Wt(g)}function El(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.traffic_quality;if(!n||!n.length)return;const e=document.getElementById("scorecard-source");if(e){const a=n.reduce((p,f)=>p+(f.sessions||0),0),l=n.reduce((p,f)=>p+(f.users||0),0),c={};n.forEach(p=>{c[p.group]=(c[p.group]||0)+(p.sessions||0)});const d=Object.entries(c).sort((p,f)=>f[1]-p[1])[0];e.innerHTML=[["總工作階段",a.toLocaleString(),"所有來源","blue"],["總使用者",l.toLocaleString(),"去重後","teal"],["最大來源群組",d[0],d[1]+" sessions","green"],["來源群組數",Object.keys(c).length+" 個","Direct / Organic / Referrals 等","orange"]].map(([p,f,m,_])=>'<div class="scorecard '+_+'"><div class="sc-label">'+p+'</div><div class="sc-value">'+f+'</div><div class="sc-delta">'+m+"</div></div>").join("")}os("chartTrafficCount",n,a=>a.sessions,Math.max(1,...n.map(a=>a.sessions||0)),a=>a.source+" ("+a.medium+")","",Ue.blue),os("chartTrafficEng",n,a=>a.avg_eng_sec_per_session,Math.max(1,...n.map(a=>a.avg_eng_sec_per_session||0)),a=>a.source+" ("+a.medium+")","秒",Ue.teal);const t=document.getElementById("tableTrafficQuality");if(t){const a=n.map(l=>"<tr><td>"+it(l.group)+'</td><td class="wrap">'+it(l.source)+" / "+it(l.medium)+'</td><td class="num">'+(l.sessions||0).toLocaleString()+'</td><td class="num">'+(l.users||0).toLocaleString()+'</td><td class="num">'+(l.avg_eng_sec_per_session||0).toFixed(1)+' 秒</td><td class="num">'+(l.internal_clicks||0)+'</td><td class="num">'+(l.downloads||0)+'</td><td class="num">'+(l.cta_clicks||0)+'</td><td><span class="status-pill '+(l.sample_note==="足夠"?"up":l.sample_note==="樣本較少"?"sample":"empty")+'">'+l.sample_note+"</span></td></tr>").join("");t.innerHTML='<thead><tr><th>來源群組</th><th>來源 / 媒介</th><th class="num">工作階段</th><th class="num">活躍使用者</th><th class="num">平均互動</th><th class="num">站內點擊</th><th class="num">下載</th><th class="num">CTA 點擊</th><th>樣本狀態</th></tr></thead><tbody>'+a+"</tbody>"}const i=n.filter(a=>a.sessions>=5).slice().sort((a,l)=>l.sessions-a.sessions),s=n.filter(a=>a.sessions>=5).slice().sort((a,l)=>l.avg_eng_sec_per_session-a.avg_eng_sec_per_session),r=i[0],o=s[0];r?document.getElementById("insight-traffic").innerHTML=Wt("量最大來源是「"+r.source+" ("+r.medium+")」（"+r.sessions+" 工作階段），"+(o?"互動最佳來源是「"+o.source+"」（"+o.avg_eng_sec_per_session.toFixed(1)+" 秒／工作階段）。":"因多數來源樣本偏小，暫不下互動品質結論。")):document.getElementById("insight-traffic").innerHTML=Wt("目前樣本較少，暫不下來源品質結論。")}function os(n,e,t,i,s,r,o){const a=document.getElementById(n);if(!a)return;const l=Fn(a,240);if(!l)return;const{ctx:c,w:d,h:p}=l;c.clearRect(0,0,d,p);const f=Bn(d,p,On),m=f.h/e.length,_=m*.7;e.forEach((g,h)=>{const u=t(g)||0,M=f.y+h*m+(m-_)/2,E=u/i*f.w;c.fillStyle=o,c.fillRect(f.x,M,E,_),ct(c,11,!1,Ue.navy),c.textAlign="right",c.textBaseline="middle",c.fillText(s(g),f.x-8,M+_/2),ct(c,11,!0,Ue.navy),c.textAlign="left",c.fillText((u||0).toFixed(u<10?1:0)+r,f.x+E+4,M+_/2)}),ct(c,9,!1,Ue.muted),c.textBaseline="top",c.textAlign="center";for(let g=1;g<=4;g++){const h=f.x+g/4*f.w,u=g/4*i;c.strokeStyle="#eef1f5",c.beginPath(),c.moveTo(h,f.y),c.lineTo(h,f.y+f.h),c.stroke(),c.fillText(Math.round(u).toLocaleString(),h,f.y+f.h+4)}}function xl(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.ai_platforms,e=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.ai_total_period_sessions||0;if(!n)return;const t=document.getElementById("scorecard-ai");if(t){const r=e===0;t.innerHTML=[["本期可辨識 AI 工作階段",e.toLocaleString(),r?"資料不足":"已觀察",r?"empty":"up"],["已定義 AI 平台",n.length+" 個","ChatGPT / Perplexity / Gemini / Copilot / Claude","blue"],["偵測規則","referrer 網域","嚴格比對","teal"],["資料狀態",r?"本期沒有辨識到 AI 平台轉介流量":"已收集","",r?"sample":"green"]].map(([o,a,l,c])=>'<div class="scorecard '+c+'"><div class="sc-label">'+o+'</div><div class="sc-value">'+a+'</div><div class="sc-delta">'+l+"</div></div>").join("")}const i=document.getElementById("chartAIPlatforms");if(i){const r=Fn(i,240);if(r){const{ctx:o,w:a,h:l}=r;o.clearRect(0,0,a,l);const c=Bn(a,l,On),d=c.h/n.length,p=d*.7,f=Math.max(1,...n.map(m=>m.sessions||0));n.forEach((m,_)=>{const g=c.y+_*d+(d-p)/2,h=m.sessions/f*c.w;o.fillStyle=m.sessions?Ue.orange:Ue.gray,o.fillRect(c.x,g,h,p),ct(o,11,!1,Ue.navy),o.textAlign="right",o.textBaseline="middle",o.fillText(m.platform,c.x-8,g+p/2),ct(o,11,!0,Ue.navy),o.textAlign="left",o.fillText(m.sessions,c.x+h+4,g+p/2)}),e===0&&(ct(o,13,!0,Ue.muted),o.textAlign="center",o.textBaseline="middle",o.fillText("本期沒有辨識到 AI 平台轉介流量",c.x+c.w/2,c.y+c.h/2))}}const s=document.getElementById("tableAIPlatforms");if(s){const r=n.map(o=>"<tr><td>"+it(o.platform)+'</td><td class="num">'+o.sessions+'</td><td class="num">'+o.users+'</td><td class="wrap">'+Qt(o.landing_page||"-")+'</td><td class="num">'+(o.avg_eng_sec||0).toFixed(1)+' 秒</td><td class="num">'+(o.internal_clicks||0)+'</td><td><span class="status-pill '+(o.sample_note==="足夠"?"up":o.sample_note==="樣本較少"?"sample":"empty")+'">'+o.sample_note+"</span></td></tr>").join("");s.innerHTML='<thead><tr><th>平台</th><th class="num">Sessions</th><th class="num">使用者</th><th>到達頁</th><th class="num">平均互動</th><th class="num">站內點擊</th><th>樣本狀態</th></tr></thead><tbody>'+r+"</tbody>"}document.getElementById("insight-ai").innerHTML=Wt(e===0?"本期沒有辨識到 AI 平台轉介流量。建議持續監控 referrer，並留意未標記的 AI 流量無法被識別。":"可辨識的 AI 流量規模仍小，建議每月追蹤趨勢，避免單週變動過度解讀。")}function Sl(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.cta_funnel,e=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.cta_links;if(!n)return;const t=document.getElementById("scorecard-cta");if(t){const a=n.reduce((p,f)=>p+(f.sessions||0),0),l=n.reduce((p,f)=>p+(f.users||0),0),c=n.reduce((p,f)=>p+(f.distinct_links||0),0),d=n.filter(p=>p.sessions>0).length;t.innerHTML=[["CTA 點擊工作階段",a.toLocaleString(),"所有類別","blue"],["CTA 觸及使用者",l.toLocaleString(),"去重後","teal"],["獨立連結數",c.toLocaleString(),"近一週","green"],["有資料的 CTA 類別",d+" / "+n.length,"招生活動活躍度","orange"]].map(([p,f,m,_])=>'<div class="scorecard '+_+'"><div class="sc-label">'+p+'</div><div class="sc-value">'+f+'</div><div class="sc-delta">'+m+"</div></div>").join("")}const i=document.getElementById("chartCTAFunnel");if(i){const a=Fn(i,280);if(a){const{ctx:l,w:c,h:d}=a;l.clearRect(0,0,c,d);const p=Bn(c,d,On),f=p.h/n.length,m=f*.7,_=Math.max(1,...n.map(g=>g.sessions||0));n.forEach((g,h)=>{const u=p.y+h*f+(f-m)/2,M=g.sessions/_*p.w;l.fillStyle=g.sessions>0?Ue.blue:Ue.gray,l.fillRect(p.x,u,M,m),ct(l,11,!1,Ue.navy),l.textAlign="right",l.textBaseline="middle",l.fillText(g.cta_category,p.x-8,u+m/2),ct(l,11,!0,Ue.navy),l.textAlign="left",l.fillText(g.sessions+" 次 ("+(g.users||0)+" 使用者)",p.x+M+4,u+m/2)})}}const s=document.getElementById("tableCTALinks");if(s&&e){const l=e.slice().sort((c,d)=>d.clicks-c.clicks).map(c=>"<tr><td>"+it(c.category)+'</td><td class="wrap">'+it(c.link_text)+'</td><td class="wrap">'+Qt(c.source_page)+'</td><td class="wrap">'+gl(c.destination)+'</td><td class="num">'+c.clicks+'</td><td class="num">'+c.users+'</td><td class="num">'+(c.valid_rate*100).toFixed(0)+"%</td></tr>").join("");s.innerHTML='<thead><tr><th>CTA 類別</th><th>連結文字</th><th>來源頁</th><th>目的地</th><th class="num">點擊</th><th class="num">使用者</th><th class="num">有效率</th></tr></thead><tbody>'+l+"</tbody>"}const o=n.filter(a=>a.sessions>0).slice().sort((a,l)=>l.sessions-a.sessions)[0];document.getElementById("insight-cta").innerHTML=Wt(o?"本期 CTA 點擊以「"+o.cta_category+"」最多（"+o.sessions+" 次）。報名系統與聯絡表單目前為 0 點擊，建議確認入口與表單是否可正常觸發。":"本期沒有任何 CTA 點擊紀錄。請先確認 click 事件是否正常送出。")}function Tl(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.international;if(!n)return;const e=document.getElementById("scorecard-intl");if(e){const s=n.reduce((l,c)=>l+(c.sessions||0),0),r=n.find(l=>l.country==="臺灣"),o=n.filter(l=>l.country!=="臺灣").reduce((l,c)=>l+(c.sessions||0),0),a=s?o/s*100:0;e.innerHTML=[["總工作階段",s.toLocaleString(),"全部國家","blue"],["臺灣占比",r?Math.round(r.sessions/s*100)+"%":"—",r?r.sessions+" sessions":"—","green"],["非臺灣工作階段",o.toLocaleString(),a.toFixed(1)+"%","orange"],["樣本狀態","Top 3 已足夠","其他國家 0 為缺值","teal"]].map(([l,c,d,p])=>'<div class="scorecard '+p+'"><div class="sc-label">'+l+'</div><div class="sc-value">'+c+'</div><div class="sc-delta">'+d+"</div></div>").join("")}os("chartIntlSessions",n,s=>s.sessions,Math.max(1,...n.map(s=>s.sessions||0)),s=>s.country,"",Ue.blue),os("chartIntlEng",n,s=>s.avg_eng_sec,Math.max(1,...n.map(s=>s.avg_eng_sec||0)),s=>s.country," 秒",Ue.teal);const t=document.getElementById("tableInternational");if(t){const s=n.map(r=>"<tr><td>"+it(r.country)+'</td><td class="num">'+(r.sessions||0).toLocaleString()+'</td><td class="num">'+(r.users||0).toLocaleString()+'</td><td class="num">'+(r.avg_eng_sec||0).toFixed(1)+' 秒</td><td class="wrap">'+Qt(r.top_landing||"-")+'</td><td class="num">'+(r.admission_cta||0)+'</td><td class="num">'+(r.contact_click||0)+'</td><td><span class="status-pill '+(r.sample_note==="足夠"?"up":r.sample_note==="樣本較少"?"sample":"empty")+'">'+r.sample_note+"</span></td></tr>").join("");t.innerHTML='<thead><tr><th>國家／地區</th><th class="num">工作階段</th><th class="num">活躍使用者</th><th class="num">平均互動</th><th>主要到達頁</th><th class="num">招生 CTA</th><th class="num">聯絡點擊</th><th>樣本狀態</th></tr></thead><tbody>'+s+"</tbody>"}const i=n.slice().sort((s,r)=>r.sessions-s.sessions)[0];document.getElementById("insight-intl").innerHTML=Wt(i?"本期主要訪客來自「"+i.country+"」（"+i.sessions+" 工作階段），建議保留臺灣優先並觀察其他國家趨勢。":"本期沒有國際訪客資料。")}function yl(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.user_paths,e=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.user_path_transitions;if(!n)return;const t=document.getElementById("scorecard-paths");if(t){const o=n.reduce((l,c)=>l+(c.sessions||0),0),a=n.reduce((l,c)=>l+(c.exit_share||0),0)/n.length;t.innerHTML=[["Top 入口頁",n.length+" 個","近一週","blue"],["代理工作階段",o.toLocaleString(),"入口→第二頁","teal"],["平均停留率",(a*100).toFixed(0)+"%","離開比例","orange"],["資料型態","頁面共同出現","非逐事件時序","green"]].map(([l,c,d,p])=>'<div class="scorecard '+p+'"><div class="sc-label">'+l+'</div><div class="sc-value">'+c+'</div><div class="sc-delta">'+d+"</div></div>").join("")}const i=document.getElementById("tableUserPaths");if(i){const a=n.slice().sort((l,c)=>c.sessions-l.sessions).map(l=>'<tr><td class="wrap">'+Qt(l.landing)+'</td><td class="wrap">'+Qt(l.second_page)+'</td><td class="wrap">'+it(l.exit_action)+'</td><td class="num">'+l.sessions+'</td><td class="num">'+(l.exit_share*100).toFixed(0)+"%</td></tr>").join("");i.innerHTML='<thead><tr><th>入口頁</th><th>第二頁</th><th>最終動作</th><th class="num">工作階段</th><th class="num">離開占比</th></tr></thead><tbody>'+a+"</tbody>"}const s=document.getElementById("tableUserPathTransitions");if(s&&e){const a=e.slice().sort((l,c)=>c.sessions-l.sessions).map(l=>'<tr><td class="wrap">'+Qt(l.from)+'</td><td class="wrap">'+Qt(l.to)+'</td><td class="num">'+l.sessions+"</td></tr>").join("");s.innerHTML='<thead><tr><th>從</th><th>到</th><th class="num">工作階段</th></tr></thead><tbody>'+a+"</tbody>"}const r=n.slice().sort((o,a)=>a.sessions-o.sessions)[0];document.getElementById("insight-paths").innerHTML=Wt(r?"主要入口頁是「"+r.landing+"」（"+r.sessions+" 工作階段），建議檢視此頁的 CTA 是否明確引導到課程或入學頁。":"本期沒有符合條件的路徑資料。")}function Ml(){const n=WEBINSIGHT.DATA.sections&&WEBINSIGHT.DATA.sections.data_quality_snapshot;if(!n)return;const e=n.filter(a=>a.severity==="高").length,t=n.filter(a=>a.severity==="中").length,i=n.filter(a=>a.severity==="低").length,s=document.getElementById("scorecard-dq");s&&(s.innerHTML=[["高嚴重性",e+" 項","本期","orange"],["中嚴重性",t+" 項","本期","warn"],["低嚴重性",i+" 項","本期","flat"],["資料快照","本期","不繪製 8 週趨勢","teal"]].map(([a,l,c,d])=>'<div class="scorecard '+d+'"><div class="sc-label">'+a+'</div><div class="sc-value">'+l+'</div><div class="sc-delta">'+c+"</div></div>").join(""));const r=document.getElementById("tableDataQuality");if(r){const a={高:1,中:2,低:3},c=n.slice().sort((d,p)=>(a[d.severity]||9)-(a[p.severity]||9)).map(d=>'<tr><td class="wrap">'+it(d.issue_type)+'</td><td class="num">'+d.affected_count+'</td><td class="wrap">'+it(d.example)+'</td><td><span class="sev-pill '+(d.severity==="高"?"high":d.severity==="中"?"mid":"low")+'">'+d.severity+'</span></td><td class="wrap">'+it(d.suggested_owner)+'</td><td><span class="status-pill '+(d.status==="正常"?"up":"warn")+'">'+d.status+'</span></td><td class="wrap">'+it(d.evidence_rule)+"</td></tr>").join("");r.innerHTML='<thead><tr><th>問題類型</th><th class="num">影響數</th><th>範例</th><th>嚴重性</th><th>建議負責</th><th>狀態</th><th>證據規則</th></tr></thead><tbody>'+c+"</tbody>"}const o=n.slice().sort((a,l)=>(a.severity==="高"?-1:1)-(l.severity==="高"?-1:1))[0];document.getElementById("insight-dq").innerHTML=Wt(o?"本期最嚴重問題為「"+o.issue_type+"」（"+o.example+"）。建議 "+o.suggested_owner+" 優先處理。":"本期沒有發現待改善的問題。")}function Al(){WEBINSIGHT.DATA.sections&&(pl(),ml(),vl(),El(),xl(),Sl(),Tl(),yl(),Ml())}Al();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gr="160",bl=0,Pr=1,wl=2,ho=1,Rl=2,$t=3,_n=0,yt=1,jt=2,fn=0,Ln=1,Nr=2,Ur=3,Or=4,Cl=5,wn=100,Ll=101,Il=102,Fr=103,Br=104,Dl=200,Pl=201,Nl=202,Ul=203,ar=204,or=205,Ol=206,Fl=207,Bl=208,zl=209,kl=210,Hl=211,Gl=212,Wl=213,Vl=214,Xl=0,ql=1,Zl=2,ls=3,Yl=4,Kl=5,$l=6,jl=7,fo=0,Ql=1,Jl=2,pn=0,ec=1,tc=2,nc=3,ic=4,sc=5,rc=6,po=300,oi=301,li=302,lr=303,cr=304,ms=306,ur=1e3,zt=1001,dr=1002,xt=1003,zr=1004,Ms=1005,It=1006,ac=1007,Ti=1008,mn=1009,oc=1010,lc=1011,vr=1012,mo=1013,un=1014,dn=1015,yi=1016,_o=1017,go=1018,In=1020,cc=1021,kt=1023,uc=1024,dc=1025,Dn=1026,ci=1027,hc=1028,vo=1029,fc=1030,Eo=1031,xo=1033,As=33776,bs=33777,ws=33778,Rs=33779,kr=35840,Hr=35841,Gr=35842,Wr=35843,So=36196,Vr=37492,Xr=37496,qr=37808,Zr=37809,Yr=37810,Kr=37811,$r=37812,jr=37813,Qr=37814,Jr=37815,ea=37816,ta=37817,na=37818,ia=37819,sa=37820,ra=37821,Cs=36492,aa=36494,oa=36495,pc=36283,la=36284,ca=36285,ua=36286,To=3e3,Pn=3001,mc=3200,_c=3201,gc=0,vc=1,Pt="",dt="srgb",en="srgb-linear",Er="display-p3",_s="display-p3-linear",cs="linear",$e="srgb",us="rec709",ds="p3",Hn=7680,da=519,Ec=512,xc=513,Sc=514,yo=515,Tc=516,yc=517,Mc=518,Ac=519,ha=35044,fa="300 es",hr=1035,Jt=2e3,hs=2001;class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,fr=180/Math.PI;function Mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function bc(n,e){return(n%e+e)%e}function Is(n,e,t){return(1-t)*n+t*e}function pa(n){return(n&n-1)===0&&n!==0}function pr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,s,r,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],p=i[7],f=i[2],m=i[5],_=i[8],g=s[0],h=s[3],u=s[6],M=s[1],E=s[4],S=s[7],C=s[2],w=s[5],b=s[8];return r[0]=o*g+a*M+l*C,r[3]=o*h+a*E+l*w,r[6]=o*u+a*S+l*b,r[1]=c*g+d*M+p*C,r[4]=c*h+d*E+p*w,r[7]=c*u+d*S+p*b,r[2]=f*g+m*M+_*C,r[5]=f*h+m*E+_*w,r[8]=f*u+m*S+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*o-a*c,f=a*l-d*r,m=c*r-o*l,_=t*p+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=p*g,e[1]=(s*c-d*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(d*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Be;function Mo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wc(){const n=fs("canvas");return n.style.display="block",n}const ma={};function Si(n){n in ma||(ma[n]=!0,console.warn(n))}const _a=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ga=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[en]:{transfer:cs,primaries:us,toReference:n=>n,fromReference:n=>n},[dt]:{transfer:$e,primaries:us,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_s]:{transfer:cs,primaries:ds,toReference:n=>n.applyMatrix3(ga),fromReference:n=>n.applyMatrix3(_a)},[Er]:{transfer:$e,primaries:ds,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ga),fromReference:n=>n.applyMatrix3(_a).convertLinearToSRGB()}},Rc=new Set([en,_s]),Xe={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Rc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ni[e].toReference,s=Ni[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ni[n].primaries},getTransfer:function(n){return n===Pt?cs:Ni[n].transfer}};function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gn;class Ao{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=fs("canvas")),Gn.width=e.width,Gn.height=e.height;const i=Gn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cc=0;class bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ns(s[o].image)):r.push(Ns(s[o]))}else r=Ns(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ns(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lc=0;class Mt extends di{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=zt,s=zt,r=It,o=Ti,a=kt,l=mn,c=Mt.DEFAULT_ANISOTROPY,d=Pt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Mi(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Pn?dt:Pt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Pn:To}set encoding(e){Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pn?dt:Pt}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=po;Mt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],p=l[8],f=l[1],m=l[5],_=l[9],g=l[2],h=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-g)<.01&&Math.abs(_-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+g)<.1&&Math.abs(_+h)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(m+1)/2,C=(u+1)/2,w=(d+f)/4,b=(p+g)/4,q=(_+h)/4;return E>S&&E>C?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=b/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=q/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=b/r,s=q/r),this.set(i,s,r,t),this}let M=Math.sqrt((h-_)*(h-_)+(p-g)*(p-g)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(h-_)/M,this.y=(p-g)/M,this.z=(f-d)/M,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ic extends di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Si("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pn?dt:Pt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Mt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Ic{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wo extends Mt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dc extends Mt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],p=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(p!==g||l!==f||c!==m||d!==_){let h=1-a;const u=l*f+c*m+d*_+p*g,M=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const C=Math.sqrt(E),w=Math.atan2(C,u*M);h=Math.sin(h*w)/C,a=Math.sin(a*w)/C}const S=a*M;if(l=l*h+f*S,c=c*h+m*S,d=d*h+_*S,p=p*h+g*S,h===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=C,c*=C,d*=C,p*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],p=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+d*p+l*m-c*f,e[t+1]=l*_+d*f+c*p-a*m,e[t+2]=c*_+d*m+a*f-l*p,e[t+3]=d*_-a*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),p=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*d*p+c*m*_,this._y=c*m*p-f*d*_,this._z=c*d*_+f*m*p,this._w=c*d*p-f*m*_;break;case"YXZ":this._x=f*d*p+c*m*_,this._y=c*m*p-f*d*_,this._z=c*d*_-f*m*p,this._w=c*d*p+f*m*_;break;case"ZXY":this._x=f*d*p-c*m*_,this._y=c*m*p+f*d*_,this._z=c*d*_+f*m*p,this._w=c*d*p-f*m*_;break;case"ZYX":this._x=f*d*p-c*m*_,this._y=c*m*p+f*d*_,this._z=c*d*_-f*m*p,this._w=c*d*p+f*m*_;break;case"YZX":this._x=f*d*p+c*m*_,this._y=c*m*p+f*d*_,this._z=c*d*_-f*m*p,this._w=c*d*p-f*m*_;break;case"XZY":this._x=f*d*p-c*m*_,this._y=c*m*p-f*d*_,this._z=c*d*_+f*m*p,this._w=c*d*p+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],p=t[10],f=i+a+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),p=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*p+this._w*f,this._x=i*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),p=2*(r*i-o*t);return this.x=t+l*c+o*p-a*d,this.y=i+l*d+a*c-r*p,this.z=s+l*p+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new F,va=new Ai;class bi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ut):Ut.fromBufferAttribute(r,o),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ui.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ui.copy(i.boundingBox)),Ui.applyMatrix4(e.matrixWorld),this.union(Ui)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Oi.subVectors(this.max,mi),Wn.subVectors(e.a,mi),Vn.subVectors(e.b,mi),Xn.subVectors(e.c,mi),rn.subVectors(Vn,Wn),an.subVectors(Xn,Vn),Sn.subVectors(Wn,Xn);let t=[0,-rn.z,rn.y,0,-an.z,an.y,0,-Sn.z,Sn.y,rn.z,0,-rn.x,an.z,0,-an.x,Sn.z,0,-Sn.x,-rn.y,rn.x,0,-an.y,an.x,0,-Sn.y,Sn.x,0];return!Os(t,Wn,Vn,Xn,Oi)||(t=[1,0,0,0,1,0,0,0,1],!Os(t,Wn,Vn,Xn,Oi))?!1:(Fi.crossVectors(rn,an),t=[Fi.x,Fi.y,Fi.z],Os(t,Wn,Vn,Xn,Oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xt=[new F,new F,new F,new F,new F,new F,new F,new F],Ut=new F,Ui=new bi,Wn=new F,Vn=new F,Xn=new F,rn=new F,an=new F,Sn=new F,mi=new F,Oi=new F,Fi=new F,Tn=new F;function Os(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Tn.fromArray(n,r);const a=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),l=e.dot(Tn),c=t.dot(Tn),d=i.dot(Tn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Pc=new bi,_i=new F,Fs=new F;class gs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pc.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_i,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Fs)),this.expandByPoint(_i.copy(e.center).sub(Fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new F,Bs=new F,Bi=new F,on=new F,zs=new F,zi=new F,ks=new F;class Ro{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.origin).addScaledVector(this.direction,t),qt.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bs.copy(e).add(t).multiplyScalar(.5),Bi.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Bs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bi),a=on.dot(this.direction),l=-on.dot(Bi),c=on.lengthSq(),d=Math.abs(1-o*o);let p,f,m,_;if(d>0)if(p=o*l-a,f=o*a-l,_=r*d,p>=0)if(f>=-_)if(f<=_){const g=1/d;p*=g,f*=g,m=p*(p+o*f+2*a)+f*(o*p+f+2*l)+c}else f=r,p=Math.max(0,-(o*f+a)),m=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(o*f+a)),m=-p*p+f*(f+2*l)+c;else f<=-_?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c):f<=_?(p=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Bs).addScaledVector(Bi,f),m}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const i=qt.dot(this.direction),s=qt.dot(qt)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,i,s,r){zs.subVectors(t,e),zi.subVectors(i,e),ks.crossVectors(zs,zi);let o=this.direction.dot(ks),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;on.subVectors(this.origin,e);const l=a*this.direction.dot(zi.crossVectors(on,zi));if(l<0)return null;const c=a*this.direction.dot(zs.cross(on));if(c<0||l+c>o)return null;const d=-a*on.dot(ks);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,s,r,o,a,l,c,d,p,f,m,_,g,h){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,p,f,m,_,g,h)}set(e,t,i,s,r,o,a,l,c,d,p,f,m,_,g,h){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=f,u[3]=m,u[7]=_,u[11]=g,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qn.setFromMatrixColumn(e,0).length(),r=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const f=o*d,m=o*p,_=a*d,g=a*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*p,_=c*d,g=c*p;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*p,_=c*d,g=c*p;t[0]=f-g*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*d,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*p,_=a*d,g=a*p;t[0]=l*d,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*p,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*d,t[4]=g-f*p,t[8]=_*p+m,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*p+_,t[10]=f-g*p}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=f*p+g,t[5]=o*d,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*d,t[10]=g*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nc,e,Uc)}lookAt(e,t,i){const s=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),ln.crossVectors(i,wt),ln.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),ln.crossVectors(i,wt)),ln.normalize(),ki.crossVectors(wt,ln),s[0]=ln.x,s[4]=ki.x,s[8]=wt.x,s[1]=ln.y,s[5]=ki.y,s[9]=wt.y,s[2]=ln.z,s[6]=ki.z,s[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],p=i[5],f=i[9],m=i[13],_=i[2],g=i[6],h=i[10],u=i[14],M=i[3],E=i[7],S=i[11],C=i[15],w=s[0],b=s[4],q=s[8],T=s[12],A=s[1],z=s[5],G=s[9],J=s[13],L=s[2],D=s[6],H=s[10],V=s[14],W=s[3],X=s[7],Z=s[11],ee=s[15];return r[0]=o*w+a*A+l*L+c*W,r[4]=o*b+a*z+l*D+c*X,r[8]=o*q+a*G+l*H+c*Z,r[12]=o*T+a*J+l*V+c*ee,r[1]=d*w+p*A+f*L+m*W,r[5]=d*b+p*z+f*D+m*X,r[9]=d*q+p*G+f*H+m*Z,r[13]=d*T+p*J+f*V+m*ee,r[2]=_*w+g*A+h*L+u*W,r[6]=_*b+g*z+h*D+u*X,r[10]=_*q+g*G+h*H+u*Z,r[14]=_*T+g*J+h*V+u*ee,r[3]=M*w+E*A+S*L+C*W,r[7]=M*b+E*z+S*D+C*X,r[11]=M*q+E*G+S*H+C*Z,r[15]=M*T+E*J+S*V+C*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],f=e[10],m=e[14],_=e[3],g=e[7],h=e[11],u=e[15];return _*(+r*l*p-s*c*p-r*a*f+i*c*f+s*a*m-i*l*m)+g*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*d-r*l*d)+h*(+t*c*p-t*a*m-r*o*p+i*o*m+r*a*d-i*c*d)+u*(-s*a*d-t*l*p+t*a*f+s*o*p-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],f=e[10],m=e[11],_=e[12],g=e[13],h=e[14],u=e[15],M=p*h*c-g*f*c+g*l*m-a*h*m-p*l*u+a*f*u,E=_*f*c-d*h*c-_*l*m+o*h*m+d*l*u-o*f*u,S=d*g*c-_*p*c+_*a*m-o*g*m-d*a*u+o*p*u,C=_*p*l-d*g*l-_*a*f+o*g*f+d*a*h-o*p*h,w=t*M+i*E+s*S+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=M*b,e[1]=(g*f*r-p*h*r-g*s*m+i*h*m+p*s*u-i*f*u)*b,e[2]=(a*h*r-g*l*r+g*s*c-i*h*c-a*s*u+i*l*u)*b,e[3]=(p*l*r-a*f*r-p*s*c+i*f*c+a*s*m-i*l*m)*b,e[4]=E*b,e[5]=(d*h*r-_*f*r+_*s*m-t*h*m-d*s*u+t*f*u)*b,e[6]=(_*l*r-o*h*r-_*s*c+t*h*c+o*s*u-t*l*u)*b,e[7]=(o*f*r-d*l*r+d*s*c-t*f*c-o*s*m+t*l*m)*b,e[8]=S*b,e[9]=(_*p*r-d*g*r-_*i*m+t*g*m+d*i*u-t*p*u)*b,e[10]=(o*g*r-_*a*r+_*i*c-t*g*c-o*i*u+t*a*u)*b,e[11]=(d*a*r-o*p*r-d*i*c+t*p*c+o*i*m-t*a*m)*b,e[12]=C*b,e[13]=(d*g*s-_*p*s+_*i*f-t*g*f-d*i*h+t*p*h)*b,e[14]=(_*a*s-o*g*s-_*i*l+t*g*l+o*i*h-t*a*h)*b,e[15]=(o*p*s-d*a*s+d*i*l-t*p*l-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,p=a+a,f=r*c,m=r*d,_=r*p,g=o*d,h=o*p,u=a*p,M=l*c,E=l*d,S=l*p,C=i.x,w=i.y,b=i.z;return s[0]=(1-(g+u))*C,s[1]=(m+S)*C,s[2]=(_-E)*C,s[3]=0,s[4]=(m-S)*w,s[5]=(1-(f+u))*w,s[6]=(h+M)*w,s[7]=0,s[8]=(_+E)*b,s[9]=(h-M)*b,s[10]=(1-(f+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=qn.set(s[0],s[1],s[2]).length();const o=qn.set(s[4],s[5],s[6]).length(),a=qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ot.copy(this);const c=1/r,d=1/o,p=1/a;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=d,Ot.elements[5]*=d,Ot.elements[6]*=d,Ot.elements[8]*=p,Ot.elements[9]*=p,Ot.elements[10]*=p,t.setFromRotationMatrix(Ot),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Jt){const l=this.elements,c=2*r/(t-e),d=2*r/(i-s),p=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(a===Jt)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===hs)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Jt){const l=this.elements,c=1/(t-e),d=1/(i-s),p=1/(o-r),f=(t+e)*c,m=(i+s)*d;let _,g;if(a===Jt)_=(o+r)*p,g=-2*p;else if(a===hs)_=r*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qn=new F,Ot=new ut,Nc=new F(0,0,0),Uc=new F(1,1,1),ln=new F,ki=new F,wt=new F,Ea=new ut,xa=new Ai;class vs{constructor(e=0,t=0,i=0,s=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],p=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ea,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xa.setFromEuler(this),this.setFromQuaternion(xa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oc=0;const Sa=new F,Zn=new Ai,Zt=new ut,Hi=new F,gi=new F,Fc=new F,Bc=new Ai,Ta=new F(1,0,0),ya=new F(0,1,0),Ma=new F(0,0,1),zc={type:"added"},kc={type:"removed"};class At extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new F,t=new vs,i=new Ai,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Be}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Ta,e)}rotateY(e){return this.rotateOnAxis(ya,e)}rotateZ(e){return this.rotateOnAxis(Ma,e)}translateOnAxis(e,t){return Sa.copy(e).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ta,e)}translateY(e){return this.translateOnAxis(ya,e)}translateZ(e){return this.translateOnAxis(Ma,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hi.copy(e):Hi.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(gi,Hi,this.up):Zt.lookAt(Hi,gi,this.up),this.quaternion.setFromRotationMatrix(Zt),s&&(Zt.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,Fc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,Bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),p=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new F,Yt=new F,Hs=new F,Kt=new F,Yn=new F,Kn=new F,Aa=new F,Gs=new F,Ws=new F,Vs=new F;let Gi=!1;class Bt{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ft.subVectors(e,t),s.cross(Ft);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ft.subVectors(s,t),Yt.subVectors(i,t),Hs.subVectors(e,t);const o=Ft.dot(Ft),a=Ft.dot(Yt),l=Ft.dot(Hs),c=Yt.dot(Yt),d=Yt.dot(Hs),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const f=1/p,m=(c*l-a*d)*f,_=(o*d-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kt)===null?!1:Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getUV(e,t,i,s,r,o,a,l){return Gi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gi=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Kt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kt.x),l.addScaledVector(o,Kt.y),l.addScaledVector(a,Kt.z),l)}static isFrontFacing(e,t,i,s){return Ft.subVectors(i,t),Yt.subVectors(e,t),Ft.cross(Yt).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),Ft.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Gi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gi=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Bt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Yn.subVectors(s,i),Kn.subVectors(r,i),Gs.subVectors(e,i);const l=Yn.dot(Gs),c=Kn.dot(Gs);if(l<=0&&c<=0)return t.copy(i);Ws.subVectors(e,s);const d=Yn.dot(Ws),p=Kn.dot(Ws);if(d>=0&&p<=d)return t.copy(s);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Yn,o);Vs.subVectors(e,r);const m=Yn.dot(Vs),_=Kn.dot(Vs);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Kn,a);const h=d*_-m*p;if(h<=0&&p-d>=0&&m-_>=0)return Aa.subVectors(r,s),a=(p-d)/(p-d+(m-_)),t.copy(s).addScaledVector(Aa,a);const u=1/(h+g+f);return o=g*u,a=f*u,t.copy(i).addScaledVector(Yn,o).addScaledVector(Kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=bc(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xs(o,r,e+1/3),this.g=Xs(o,r,e),this.b=Xs(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=Lo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Xe.fromWorkingColorSpace(mt.copy(this),e),Math.round(Tt(mt.r*255,0,255))*65536+Math.round(Tt(mt.g*255,0,255))*256+Math.round(Tt(mt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(mt.copy(this),t);const i=mt.r,s=mt.g,r=mt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=d<=.5?p/(o+a):p/(2-o-a),o){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=dt){Xe.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,i=mt.g,s=mt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Wi);const i=Is(cn.h,Wi.h,t),s=Is(cn.s,Wi.s,t),r=Is(cn.l,Wi.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new He;He.NAMES=Lo;let Hc=0;class wi extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Ln,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ar,this.blendDst=or,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ln&&(i.blending=this.blending),this.side!==_n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ar&&(i.blendSrc=this.blendSrc),this.blendDst!==or&&(i.blendDst=this.blendDst),this.blendEquation!==wn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Io extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new F,Vi=new qe;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ha,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vi.fromBufferAttribute(this,t),Vi.applyMatrix3(e),this.setXY(t,Vi.x,Vi.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ha&&(e.usage=this.usage),e}}class Do extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Po extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gc=0;const Lt=new ut,qs=new At,$n=new F,Rt=new bi,vi=new bi,lt=new F;class nn extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mo(e)?Po:Do)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,i){return Lt.makeTranslation(e,t,i),this.applyMatrix4(Lt),this}scale(e,t,i){return Lt.makeScale(e,t,i),this.applyMatrix4(Lt),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(Rt.min,vi.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,vi.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(vi.min),Rt.expandByPoint(vi.max))}Rt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)lt.fromBufferAttribute(a,c),l&&($n.fromBufferAttribute(e,c),lt.add($n)),s=Math.max(s,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<a;A++)c[A]=new F,d[A]=new F;const p=new F,f=new F,m=new F,_=new qe,g=new qe,h=new qe,u=new F,M=new F;function E(A,z,G){p.fromArray(s,A*3),f.fromArray(s,z*3),m.fromArray(s,G*3),_.fromArray(o,A*2),g.fromArray(o,z*2),h.fromArray(o,G*2),f.sub(p),m.sub(p),g.sub(_),h.sub(_);const J=1/(g.x*h.y-h.x*g.y);isFinite(J)&&(u.copy(f).multiplyScalar(h.y).addScaledVector(m,-g.y).multiplyScalar(J),M.copy(m).multiplyScalar(g.x).addScaledVector(f,-h.x).multiplyScalar(J),c[A].add(u),c[z].add(u),c[G].add(u),d[A].add(M),d[z].add(M),d[G].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,z=S.length;A<z;++A){const G=S[A],J=G.start,L=G.count;for(let D=J,H=J+L;D<H;D+=3)E(i[D+0],i[D+1],i[D+2])}const C=new F,w=new F,b=new F,q=new F;function T(A){b.fromArray(r,A*3),q.copy(b);const z=c[A];C.copy(z),C.sub(b.multiplyScalar(b.dot(z))).normalize(),w.crossVectors(q,z);const J=w.dot(d[A])<0?-1:1;l[A*4]=C.x,l[A*4+1]=C.y,l[A*4+2]=C.z,l[A*4+3]=J}for(let A=0,z=S.length;A<z;++A){const G=S[A],J=G.start,L=G.count;for(let D=J,H=J+L;D<H;D+=3)T(i[D+0]),T(i[D+1]),T(i[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,p=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),h=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,h),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,h),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,p=a.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,h=l.length;g<h;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Nt(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,p=c.length;d<p;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ba=new ut,yn=new Ro,Xi=new gs,wa=new F,jn=new F,Qn=new F,Jn=new F,Zs=new F,qi=new F,Zi=new qe,Yi=new qe,Ki=new qe,Ra=new F,Ca=new F,La=new F,$i=new F,ji=new F;class hn extends At{constructor(e=new nn,t=new Io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],p=r[l];d!==0&&(Zs.fromBufferAttribute(p,e),o?qi.addScaledVector(Zs,d):qi.addScaledVector(Zs.sub(t),d))}t.add(qi)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xi.copy(i.boundingSphere),Xi.applyMatrix4(r),yn.copy(e.ray).recast(e.near),!(Xi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Xi,wa)===null||yn.origin.distanceToSquared(wa)>(e.far-e.near)**2))&&(ba.copy(r).invert(),yn.copy(e.ray).applyMatrix4(ba),!(i.boundingBox!==null&&yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const h=f[_],u=o[h.materialIndex],M=Math.max(h.start,m.start),E=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let S=M,C=E;S<C;S+=3){const w=a.getX(S),b=a.getX(S+1),q=a.getX(S+2);s=Qi(this,u,e,i,c,d,p,w,b,q),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let h=_,u=g;h<u;h+=3){const M=a.getX(h),E=a.getX(h+1),S=a.getX(h+2);s=Qi(this,o,e,i,c,d,p,M,E,S),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const h=f[_],u=o[h.materialIndex],M=Math.max(h.start,m.start),E=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let S=M,C=E;S<C;S+=3){const w=S,b=S+1,q=S+2;s=Qi(this,u,e,i,c,d,p,w,b,q),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let h=_,u=g;h<u;h+=3){const M=h,E=h+1,S=h+2;s=Qi(this,o,e,i,c,d,p,M,E,S),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function Wc(n,e,t,i,s,r,o,a){let l;if(e.side===yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===_n,a),l===null)return null;ji.copy(a),ji.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ji);return c<t.near||c>t.far?null:{distance:c,point:ji.clone(),object:n}}function Qi(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,jn),n.getVertexPosition(l,Qn),n.getVertexPosition(c,Jn);const d=Wc(n,e,t,i,jn,Qn,Jn,$i);if(d){s&&(Zi.fromBufferAttribute(s,a),Yi.fromBufferAttribute(s,l),Ki.fromBufferAttribute(s,c),d.uv=Bt.getInterpolation($i,jn,Qn,Jn,Zi,Yi,Ki,new qe)),r&&(Zi.fromBufferAttribute(r,a),Yi.fromBufferAttribute(r,l),Ki.fromBufferAttribute(r,c),d.uv1=Bt.getInterpolation($i,jn,Qn,Jn,Zi,Yi,Ki,new qe),d.uv2=d.uv1),o&&(Ra.fromBufferAttribute(o,a),Ca.fromBufferAttribute(o,l),La.fromBufferAttribute(o,c),d.normal=Bt.getInterpolation($i,jn,Qn,Jn,Ra,Ca,La,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new F,materialIndex:0};Bt.getNormal(jn,Qn,Jn,p.normal),d.face=p}return d}class Ri extends nn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(d,3)),this.setAttribute("uv",new Nn(p,2));function _(g,h,u,M,E,S,C,w,b,q,T){const A=S/b,z=C/q,G=S/2,J=C/2,L=w/2,D=b+1,H=q+1;let V=0,W=0;const X=new F;for(let Z=0;Z<H;Z++){const ee=Z*z-J;for(let te=0;te<D;te++){const k=te*A-G;X[g]=k*M,X[h]=ee*E,X[u]=L,c.push(X.x,X.y,X.z),X[g]=0,X[h]=0,X[u]=w>0?1:-1,d.push(X.x,X.y,X.z),p.push(te/b),p.push(1-Z/q),V+=1}}for(let Z=0;Z<q;Z++)for(let ee=0;ee<b;ee++){const te=f+ee+D*Z,k=f+ee+D*(Z+1),Y=f+(ee+1)+D*(Z+1),oe=f+(ee+1)+D*Z;l.push(te,k,oe),l.push(k,Y,oe),W+=6}a.addGroup(m,W,T),m+=W,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ui(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=ui(n[t]);for(const s in i)e[s]=i[s]}return e}function Vc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function No(n){return n.getRenderTarget()===null?n.outputColorSpace:Xe.workingColorSpace}const Xc={clone:ui,merge:Et};var qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qc,this.fragmentShader=Zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=Vc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uo extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Jt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Uo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class Yc extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dt(ei,ti,e,t);s.layers=this.layers,this.add(s);const r=new Dt(ei,ti,e,t);r.layers=this.layers,this.add(r);const o=new Dt(ei,ti,e,t);o.layers=this.layers,this.add(o);const a=new Dt(ei,ti,e,t);a.layers=this.layers,this.add(a);const l=new Dt(ei,ti,e,t);l.layers=this.layers,this.add(l);const c=new Dt(ei,ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jt)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Oo extends Mt{constructor(e,t,i,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:oi,super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kc extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Si("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Pn?dt:Pt),this.texture=new Oo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yt,blending:fn});r.uniforms.tEquirect.value=t;const o=new hn(s,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=It),new Yc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ys=new F,$c=new F,jc=new Be;class An{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ys.subVectors(i,t).cross($c.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ys),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jc.getNormalMatrix(e),s=this.coplanarPoint(Ys).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new gs,Ji=new F;class Fo{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,o=new An){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jt){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],p=s[6],f=s[7],m=s[8],_=s[9],g=s[10],h=s[11],u=s[12],M=s[13],E=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,h-m,S-u).normalize(),i[1].setComponents(l+r,f+c,h+m,S+u).normalize(),i[2].setComponents(l+o,f+d,h+_,S+M).normalize(),i[3].setComponents(l-o,f-d,h-_,S-M).normalize(),i[4].setComponents(l-a,f-p,h-g,S-E).normalize(),t===Jt)i[5].setComponents(l+a,f+p,h+g,S+E).normalize();else if(t===hs)i[5].setComponents(a,p,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(e){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ji.x=s.normal.x>0?e.max.x:e.min.x,Ji.y=s.normal.y>0?e.max.y:e.min.y,Ji.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ji)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bo(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qc(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,d){const p=c.array,f=c.usage,m=p.byteLength,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,p,f),c.onUploadCallback();let g;if(p instanceof Float32Array)g=n.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=n.SHORT;else if(p instanceof Uint32Array)g=n.UNSIGNED_INT;else if(p instanceof Int32Array)g=n.INT;else if(p instanceof Int8Array)g=n.BYTE;else if(p instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,d,p){const f=d.array,m=d._updateRange,_=d.updateRanges;if(n.bindBuffer(p,c),m.count===-1&&_.length===0&&n.bufferSubData(p,0,f),_.length!==0){for(let g=0,h=_.length;g<h;g++){const u=_[g];t?n.bufferSubData(p,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(p,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,s(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,c,d),p.version=c.version}}return{get:o,remove:a,update:l}}class xr extends nn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,p=e/a,f=t/l,m=[],_=[],g=[],h=[];for(let u=0;u<d;u++){const M=u*f-o;for(let E=0;E<c;E++){const S=E*p-r;_.push(S,-M,0),g.push(0,0,1),h.push(E/a),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){const E=M+c*u,S=M+c*(u+1),C=M+1+c*(u+1),w=M+1+c*u;m.push(E,S,w),m.push(S,C,w)}this.setIndex(m),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
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
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
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
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
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
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,du=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hu=`#ifdef USE_IRIDESCENCE
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
#endif`,fu=`#ifdef USE_BUMPMAP
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
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
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mu=`vec3 transformedNormal = objectNormal;
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
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`
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
}`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
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
}`,Hu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xu=`uniform bool receiveShadow;
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
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ju=`PhysicalMaterial material;
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
#endif`,Qu=`struct PhysicalMaterial {
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
}`,Ju=`
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
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
#endif`,md=`#ifdef USE_MORPHTARGETS
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
#endif`,_d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sd=`#ifdef USE_NORMALMAP
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
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fd=`float getShadowMask() {
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
}`,Bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,th=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ih=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sh=`#include <common>
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
}`,rh=`#if DEPTH_PACKING == 3200
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
}`,ah=`#define DISTANCE
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
}`,oh=`#define DISTANCE
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
}`,lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ch=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uh=`uniform float scale;
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
}`,dh=`uniform vec3 diffuse;
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
}`,hh=`#include <common>
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
}`,fh=`uniform vec3 diffuse;
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
}`,ph=`#define LAMBERT
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
}`,mh=`#define LAMBERT
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
}`,_h=`#define MATCAP
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
}`,gh=`#define MATCAP
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
}`,vh=`#define NORMAL
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
}`,Eh=`#define NORMAL
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
}`,xh=`#define PHONG
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
}`,Sh=`#define PHONG
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
}`,Th=`#define STANDARD
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
}`,yh=`#define STANDARD
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
}`,Mh=`#define TOON
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
}`,Ah=`#define TOON
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
}`,bh=`uniform float size;
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
}`,wh=`uniform vec3 diffuse;
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
}`,Rh=`#include <common>
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
}`,Ch=`uniform vec3 color;
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
}`,Lh=`uniform float rotation;
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
}`,Ih=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:Jc,alphahash_pars_fragment:eu,alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:su,aomap_fragment:ru,aomap_pars_fragment:au,batching_pars_vertex:ou,batching_vertex:lu,begin_vertex:cu,beginnormal_vertex:uu,bsdfs:du,iridescence_fragment:hu,bumpmap_pars_fragment:fu,clipping_planes_fragment:pu,clipping_planes_pars_fragment:mu,clipping_planes_pars_vertex:_u,clipping_planes_vertex:gu,color_fragment:vu,color_pars_fragment:Eu,color_pars_vertex:xu,color_vertex:Su,common:Tu,cube_uv_reflection_fragment:yu,defaultnormal_vertex:Mu,displacementmap_pars_vertex:Au,displacementmap_vertex:bu,emissivemap_fragment:wu,emissivemap_pars_fragment:Ru,colorspace_fragment:Cu,colorspace_pars_fragment:Lu,envmap_fragment:Iu,envmap_common_pars_fragment:Du,envmap_pars_fragment:Pu,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:qu,envmap_vertex:Uu,fog_vertex:Ou,fog_pars_vertex:Fu,fog_fragment:Bu,fog_pars_fragment:zu,gradientmap_pars_fragment:ku,lightmap_fragment:Hu,lightmap_pars_fragment:Gu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Vu,lights_pars_begin:Xu,lights_toon_fragment:Zu,lights_toon_pars_fragment:Yu,lights_phong_fragment:Ku,lights_phong_pars_fragment:$u,lights_physical_fragment:ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:Ju,lights_fragment_maps:ed,lights_fragment_end:td,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:rd,map_fragment:ad,map_pars_fragment:od,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphcolor_vertex:hd,morphnormal_vertex:fd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:_d,normal_fragment_maps:gd,normal_pars_fragment:vd,normal_pars_vertex:Ed,normal_vertex:xd,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:Md,iridescence_pars_fragment:Ad,opaque_fragment:bd,packing:wd,premultiplied_alpha_fragment:Rd,project_vertex:Cd,dithering_fragment:Ld,dithering_pars_fragment:Id,roughnessmap_fragment:Dd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Ud,shadowmap_vertex:Od,shadowmask_pars_fragment:Fd,skinbase_vertex:Bd,skinning_pars_vertex:zd,skinning_vertex:kd,skinnormal_vertex:Hd,specularmap_fragment:Gd,specularmap_pars_fragment:Wd,tonemapping_fragment:Vd,tonemapping_pars_fragment:Xd,transmission_fragment:qd,transmission_pars_fragment:Zd,uv_pars_fragment:Yd,uv_pars_vertex:Kd,uv_vertex:$d,worldpos_vertex:jd,background_vert:Qd,background_frag:Jd,backgroundCube_vert:eh,backgroundCube_frag:th,cube_vert:nh,cube_frag:ih,depth_vert:sh,depth_frag:rh,distanceRGBA_vert:ah,distanceRGBA_frag:oh,equirect_vert:lh,equirect_frag:ch,linedashed_vert:uh,linedashed_frag:dh,meshbasic_vert:hh,meshbasic_frag:fh,meshlambert_vert:ph,meshlambert_frag:mh,meshmatcap_vert:_h,meshmatcap_frag:gh,meshnormal_vert:vh,meshnormal_frag:Eh,meshphong_vert:xh,meshphong_frag:Sh,meshphysical_vert:Th,meshphysical_frag:yh,meshtoon_vert:Mh,meshtoon_frag:Ah,points_vert:bh,points_frag:wh,shadow_vert:Rh,shadow_frag:Ch,sprite_vert:Lh,sprite_frag:Ih},ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Gt={basic:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Et([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Et([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Et([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Et([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Et([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Et([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Et([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Et([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Et([ie.common,ie.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Et([ie.lights,ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Gt.physical={uniforms:Et([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const es={r:0,b:0,g:0};function Dh(n,e,t,i,s,r,o){const a=new He(0);let l=r===!0?0:1,c,d,p=null,f=0,m=null;function _(h,u){let M=!1,E=u.isScene===!0?u.background:null;E&&E.isTexture&&(E=(u.backgroundBlurriness>0?t:e).get(E)),E===null?g(a,l):E&&E.isColor&&(g(E,1),M=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===ms)?(d===void 0&&(d=new hn(new Ri(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ui(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(E.colorSpace)!==$e,(p!==E||f!==E.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=E,f=E.version,m=n.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new hn(new xr(2,2),new kn({name:"BackgroundMaterial",uniforms:ui(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(E.colorSpace)!==$e,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||f!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=E,f=E.version,m=n.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function g(h,u){h.getRGB(es,No(n)),i.buffers.color.setClear(es.r,es.g,es.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(h,u=1){a.set(h),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,g(a,l)},render:_}}function Ph(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=h(null);let c=l,d=!1;function p(L,D,H,V,W){let X=!1;if(o){const Z=g(V,H,D);c!==Z&&(c=Z,m(c.object)),X=u(L,V,H,W),X&&M(L,V,H,W)}else{const Z=D.wireframe===!0;(c.geometry!==V.id||c.program!==H.id||c.wireframe!==Z)&&(c.geometry=V.id,c.program=H.id,c.wireframe=Z,X=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,q(L,D,H,V),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,D,H){const V=H.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let X=W[D.id];X===void 0&&(X={},W[D.id]=X);let Z=X[V];return Z===void 0&&(Z=h(f()),X[V]=Z),Z}function h(L){const D=[],H=[],V=[];for(let W=0;W<s;W++)D[W]=0,H[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:V,object:L,attributes:{},index:null}}function u(L,D,H,V){const W=c.attributes,X=D.attributes;let Z=0;const ee=H.getAttributes();for(const te in ee)if(ee[te].location>=0){const Y=W[te];let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;Z++}return c.attributesNum!==Z||c.index!==V}function M(L,D,H,V){const W={},X=D.attributes;let Z=0;const ee=H.getAttributes();for(const te in ee)if(ee[te].location>=0){let Y=X[te];Y===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),W[te]=oe,Z++}c.attributes=W,c.attributesNum=Z,c.index=V}function E(){const L=c.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function S(L){C(L,0)}function C(L,D){const H=c.newAttributes,V=c.enabledAttributes,W=c.attributeDivisors;H[L]=1,V[L]===0&&(n.enableVertexAttribArray(L),V[L]=1),W[L]!==D&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),W[L]=D)}function w(){const L=c.newAttributes,D=c.enabledAttributes;for(let H=0,V=D.length;H<V;H++)D[H]!==L[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function b(L,D,H,V,W,X,Z){Z===!0?n.vertexAttribIPointer(L,D,H,W,X):n.vertexAttribPointer(L,D,H,V,W,X)}function q(L,D,H,V){if(i.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const W=V.attributes,X=H.getAttributes(),Z=D.defaultAttributeValues;for(const ee in X){const te=X[ee];if(te.location>=0){let k=W[ee];if(k===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){const Y=k.normalized,oe=k.itemSize,me=t.get(k);if(me===void 0)continue;const pe=me.buffer,we=me.type,Ce=me.bytesPerElement,Se=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||k.gpuType===mo);if(k.isInterleavedBufferAttribute){const ke=k.data,P=ke.stride,_t=k.offset;if(ke.isInstancedInterleavedBuffer){for(let ge=0;ge<te.locationSize;ge++)C(te.location+ge,ke.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let ge=0;ge<te.locationSize;ge++)S(te.location+ge);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ge=0;ge<te.locationSize;ge++)b(te.location+ge,oe/te.locationSize,we,Y,P*Ce,(_t+oe/te.locationSize*ge)*Ce,Se)}else{if(k.isInstancedBufferAttribute){for(let ke=0;ke<te.locationSize;ke++)C(te.location+ke,k.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ke=0;ke<te.locationSize;ke++)S(te.location+ke);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ke=0;ke<te.locationSize;ke++)b(te.location+ke,oe/te.locationSize,we,Y,oe*Ce,oe/te.locationSize*ke*Ce,Se)}}else if(Z!==void 0){const Y=Z[ee];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(te.location,Y);break;case 3:n.vertexAttrib3fv(te.location,Y);break;case 4:n.vertexAttrib4fv(te.location,Y);break;default:n.vertexAttrib1fv(te.location,Y)}}}}w()}function T(){G();for(const L in a){const D=a[L];for(const H in D){const V=D[H];for(const W in V)_(V[W].object),delete V[W];delete D[H]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;const D=a[L.id];for(const H in D){const V=D[H];for(const W in V)_(V[W].object),delete V[W];delete D[H]}delete a[L.id]}function z(L){for(const D in a){const H=a[D];if(H[L.id]===void 0)continue;const V=H[L.id];for(const W in V)_(V[W].object),delete V[W];delete H[L.id]}}function G(){J(),d=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:G,resetDefaultState:J,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:S,disableUnusedAttributes:w}}function Nh(n,e,t,i){const s=i.isWebGL2;let r;function o(d){r=d}function a(d,p){n.drawArrays(r,d,p),t.update(p,r,1)}function l(d,p,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,d,p,f),t.update(p,r,f)}function c(d,p,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(d[_],p[_]);else{m.multiDrawArraysWEBGL(r,d,0,p,0,f);let _=0;for(let g=0;g<f;g++)_+=p[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Uh(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,S=o||e.has("OES_texture_float"),C=E&&S,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:h,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:E,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:w}}function Oh(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new An,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||s;return s=f,i=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,g=p.clipIntersection,h=p.clipShadows,u=n.get(p);if(!s||_===null||_.length===0||r&&!h)r?d(null):c();else{const M=r?0:i,E=M*4;let S=u.clippingState||null;l.value=S,S=d(_,f,E,m);for(let C=0;C!==E;++C)S[C]=t[C];u.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,m,_){const g=p!==null?p.length:0;let h=null;if(g!==0){if(h=l.value,_!==!0||h===null){const u=m+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(h===null||h.length<u)&&(h=new Float32Array(u));for(let E=0,S=m;E!==g;++E,S+=4)o.copy(p[E]).applyMatrix4(M,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,h}}function Fh(n){let e=new WeakMap;function t(o,a){return a===lr?o.mapping=oi:a===cr&&(o.mapping=li),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lr||a===cr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Bh extends Uo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,Ia=[.125,.215,.35,.446,.526,.582],Rn=20,Ks=new Bh,Da=new He;let $s=null,js=0,Qs=0;const bn=(1+Math.sqrt(5))/2,ni=1/bn,Pa=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,bn,ni),new F(0,bn,-ni),new F(ni,0,bn),new F(-ni,0,bn),new F(bn,ni,0),new F(-bn,ni,0)];class Na{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$s=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s,js,Qs),e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:yi,format:kt,colorSpace:en,depthBuffer:!1},s=Ua(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zh(r)),this._blurMaterial=kh(r,e,t)}return s}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,i,s){const a=new Dt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Da),d.toneMapping=pn,d.autoClear=!1;const m=new Io({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),_=new hn(new Ri,m);let g=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,g=!0):(m.color.copy(Da),g=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const E=this._cubeSize;ts(s,M*E,u>2?E:0,E,E),d.setRenderTarget(s),g&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===oi||e.mapping===li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pa[(s-1)%Pa.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new hn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Rn-1),g=r/_,h=isFinite(r)?1+Math.floor(d*g):Rn;h>Rn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Rn}`);const u=[];let M=0;for(let b=0;b<Rn;++b){const q=b/g,T=Math.exp(-q*q/2);u.push(T),b===0?M+=T:b<h&&(M+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/M;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const S=this._sizeLods[s],C=3*S*(s>E-si?s-E+si:0),w=4*(this._cubeSize-S);ts(t,C,w,3*S,2*S),l.setRenderTarget(t),l.render(p,Ks)}}function zh(n){const e=[],t=[],i=[];let s=n;const r=n-si+1+Ia.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-si?l=Ia[o-n+si-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,_=6,g=3,h=2,u=1,M=new Float32Array(g*_*m),E=new Float32Array(h*_*m),S=new Float32Array(u*_*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,q=w>2?0:-1,T=[b,q,0,b+2/3,q,0,b+2/3,q+1,0,b,q,0,b+2/3,q+1,0,b,q+1,0];M.set(T,g*_*w),E.set(f,h*_*w);const A=[w,w,w,w,w,w];S.set(A,u*_*w)}const C=new nn;C.setAttribute("position",new Nt(M,g)),C.setAttribute("uv",new Nt(E,h)),C.setAttribute("faceIndex",new Nt(S,u)),e.push(C),s>si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ua(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function kh(n,e,t){const i=new Float32Array(Rn),s=new F(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Oa(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sr(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Fa(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Sr(){return`

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
	`}function Hh(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lr||l===cr,d=l===oi||l===li;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Na(n)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||d&&p&&s(p)){t===null&&(t=new Na(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Gh(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Wh(n,e,t,i){const s={},r=new WeakMap;function o(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let h=0,u=g.length;h<u;h++)e.remove(g[h])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(p){const f=p.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const g=m[_];for(let h=0,u=g.length;h<u;h++)e.update(g[h],n.ARRAY_BUFFER)}}function c(p){const f=[],m=p.index,_=p.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let E=0,S=M.length;E<S;E+=3){const C=M[E+0],w=M[E+1],b=M[E+2];f.push(C,w,w,b,b,C)}}else if(_!==void 0){const M=_.array;g=_.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const C=E+0,w=E+1,b=E+2;f.push(C,w,w,b,b,C)}}else return;const h=new(Mo(f)?Po:Do)(f,1);h.version=g;const u=r.get(p);u&&e.remove(u),r.set(p,h)}function d(p){const f=r.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function Vh(n,e,t,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,_){n.drawElements(r,_,a,m*l),t.update(_,r,1)}function p(m,_,g){if(g===0)return;let h,u;if(s)h=n,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[u](r,_,a,m*l,g),t.update(_,r,g)}function f(m,_,g){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<g;u++)this.render(m[u]/l,_[u]);else{h.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let u=0;for(let M=0;M<g;M++)u+=_[M];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=f}function Xh(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qh(n,e){return n[0]-e[0]}function Zh(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Yh(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,p){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let h=r.get(d);if(h===void 0||h.count!==g){let D=function(){J.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var m=D;h!==void 0&&h.texture.dispose();const E=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],q=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),S===!0&&(T=2),C===!0&&(T=3);let A=d.attributes.position.count*T,z=1;A>e.maxTextureSize&&(z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const G=new Float32Array(A*z*4*g),J=new wo(G,A,z,g);J.type=dn,J.needsUpdate=!0;const L=T*4;for(let H=0;H<g;H++){const V=w[H],W=b[H],X=q[H],Z=A*z*4*H;for(let ee=0;ee<V.count;ee++){const te=ee*L;E===!0&&(o.fromBufferAttribute(V,ee),G[Z+te+0]=o.x,G[Z+te+1]=o.y,G[Z+te+2]=o.z,G[Z+te+3]=0),S===!0&&(o.fromBufferAttribute(W,ee),G[Z+te+4]=o.x,G[Z+te+5]=o.y,G[Z+te+6]=o.z,G[Z+te+7]=0),C===!0&&(o.fromBufferAttribute(X,ee),G[Z+te+8]=o.x,G[Z+te+9]=o.y,G[Z+te+10]=o.z,G[Z+te+11]=X.itemSize===4?o.w:1)}}h={count:g,texture:J,size:new qe(A,z)},r.set(d,h),d.addEventListener("dispose",D)}let u=0;for(let E=0;E<f.length;E++)u+=f[E];const M=d.morphTargetsRelative?1:1-u;p.getUniforms().setValue(n,"morphTargetBaseInfluence",M),p.getUniforms().setValue(n,"morphTargetInfluences",f),p.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const _=f===void 0?0:f.length;let g=i[d.id];if(g===void 0||g.length!==_){g=[];for(let S=0;S<_;S++)g[S]=[S,0];i[d.id]=g}for(let S=0;S<_;S++){const C=g[S];C[0]=S,C[1]=f[S]}g.sort(Zh);for(let S=0;S<8;S++)S<_&&g[S][1]?(a[S][0]=g[S][0],a[S][1]=g[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(qh);const h=d.morphAttributes.position,u=d.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const C=a[S],w=C[0],b=C[1];w!==Number.MAX_SAFE_INTEGER&&b?(h&&d.getAttribute("morphTarget"+S)!==h[w]&&d.setAttribute("morphTarget"+S,h[w]),u&&d.getAttribute("morphNormal"+S)!==u[w]&&d.setAttribute("morphNormal"+S,u[w]),s[S]=b,M+=b):(h&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),s[S]=0)}const E=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(n,"morphTargetBaseInfluence",E),p.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Kh(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,p=e.get(l,d);if(s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class zo extends Mt{constructor(e,t,i,s,r,o,a,l,c,d){if(d=d!==void 0?d:Dn,d!==Dn&&d!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Dn&&(i=un),i===void 0&&d===ci&&(i=In),super(null,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ko=new Mt,Ho=new zo(1,1);Ho.compareFunction=yo;const Go=new wo,Wo=new Dc,Vo=new Oo,Ba=[],za=[],ka=new Float32Array(16),Ha=new Float32Array(9),Ga=new Float32Array(4);function hi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ba[s];if(r===void 0&&(r=new Float32Array(s),Ba[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Es(n,e){let t=za[e];t===void 0&&(t=new Int32Array(e),za[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $h(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),rt(t,e)}}function Qh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),rt(t,e)}}function Jh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),rt(t,e)}}function ef(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,i))return;Ga.set(i),n.uniformMatrix2fv(this.addr,!1,Ga),rt(t,i)}}function tf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,i))return;Ha.set(i),n.uniformMatrix3fv(this.addr,!1,Ha),rt(t,i)}}function nf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,i))return;ka.set(i),n.uniformMatrix4fv(this.addr,!1,ka),rt(t,i)}}function sf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),rt(t,e)}}function af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),rt(t,e)}}function of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),rt(t,e)}}function lf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),rt(t,e)}}function uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),rt(t,e)}}function df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),rt(t,e)}}function hf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Ho:ko;t.setTexture2D(e||r,s)}function ff(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wo,s)}function pf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vo,s)}function mf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Go,s)}function _f(n){switch(n){case 5126:return $h;case 35664:return jh;case 35665:return Qh;case 35666:return Jh;case 35674:return ef;case 35675:return tf;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return rf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return lf;case 36294:return cf;case 36295:return uf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}function gf(n,e){n.uniform1fv(this.addr,e)}function vf(n,e){const t=hi(e,this.size,2);n.uniform2fv(this.addr,t)}function Ef(n,e){const t=hi(e,this.size,3);n.uniform3fv(this.addr,t)}function xf(n,e){const t=hi(e,this.size,4);n.uniform4fv(this.addr,t)}function Sf(n,e){const t=hi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tf(n,e){const t=hi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yf(n,e){const t=hi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mf(n,e){n.uniform1iv(this.addr,e)}function Af(n,e){n.uniform2iv(this.addr,e)}function bf(n,e){n.uniform3iv(this.addr,e)}function wf(n,e){n.uniform4iv(this.addr,e)}function Rf(n,e){n.uniform1uiv(this.addr,e)}function Cf(n,e){n.uniform2uiv(this.addr,e)}function Lf(n,e){n.uniform3uiv(this.addr,e)}function If(n,e){n.uniform4uiv(this.addr,e)}function Df(n,e,t){const i=this.cache,s=e.length,r=Es(t,s);st(i,r)||(n.uniform1iv(this.addr,r),rt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ko,r[o])}function Pf(n,e,t){const i=this.cache,s=e.length,r=Es(t,s);st(i,r)||(n.uniform1iv(this.addr,r),rt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wo,r[o])}function Nf(n,e,t){const i=this.cache,s=e.length,r=Es(t,s);st(i,r)||(n.uniform1iv(this.addr,r),rt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vo,r[o])}function Uf(n,e,t){const i=this.cache,s=e.length,r=Es(t,s);st(i,r)||(n.uniform1iv(this.addr,r),rt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Go,r[o])}function Of(n){switch(n){case 5126:return gf;case 35664:return vf;case 35665:return Ef;case 35666:return xf;case 35674:return Sf;case 35675:return Tf;case 35676:return yf;case 5124:case 35670:return Mf;case 35667:case 35671:return Af;case 35668:case 35672:return bf;case 35669:case 35673:return wf;case 5125:return Rf;case 36294:return Cf;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Uf}}class Ff{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_f(t.type)}}class Bf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Of(t.type)}}class zf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function Wa(n,e){n.seq.push(e),n.map[e.id]=e}function kf(n,e,t){const i=n.name,s=i.length;for(Js.lastIndex=0;;){const r=Js.exec(i),o=Js.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wa(t,c===void 0?new Ff(a,n,e):new Bf(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new zf(a),Wa(t,p)),t=p}}}class rs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);kf(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Va(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hf=37297;let Gf=0;function Wf(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Vf(n){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(n);let i;switch(e===t?i="":e===ds&&t===us?i="LinearDisplayP3ToLinearSRGB":e===us&&t===ds&&(i="LinearSRGBToLinearDisplayP3"),n){case en:case _s:return[i,"LinearTransferOETF"];case dt:case Er:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Xa(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Wf(n.getShaderSource(e),o)}else return s}function Xf(n,e){const t=Vf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qf(n,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="OptimizedCineon";break;case ic:t="ACESFilmic";break;case rc:t="AgX";break;case sc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ri).join(`
`)}function Yf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ri).join(`
`)}function Kf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $f(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ri(n){return n!==""}function qa(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Za(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function mr(n){return n.replace(jf,Jf)}const Qf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jf(n,e){let t=Ie[e];if(t===void 0){const i=Qf.get(e);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mr(t)}const ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(n){return n.replace(ep,tp)}function tp(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ka(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function np(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ho?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function ip(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case oi:case li:e="ENVMAP_TYPE_CUBE";break;case ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function rp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ql:e="ENVMAP_BLENDING_MIX";break;case Jl:e="ENVMAP_BLENDING_ADD";break}return e}function ap(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function op(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=np(t),c=ip(t),d=sp(t),p=rp(t),f=ap(t),m=t.isWebGL2?"":Zf(t),_=Yf(t),g=Kf(r),h=s.createProgram();let u,M,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ri).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ri).join(`
`),M.length>0&&(M+=`
`)):(u=[Ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ri).join(`
`),M=[m,Ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==pn?qf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Xf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ri).join(`
`)),o=mr(o),o=qa(o,t),o=Za(o,t),a=mr(a),a=qa(a,t),a=Za(a,t),o=Ya(o),a=Ya(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=E+u+o,C=E+M+a,w=Va(s,s.VERTEX_SHADER,S),b=Va(s,s.FRAGMENT_SHADER,C);s.attachShader(h,w),s.attachShader(h,b),t.index0AttributeName!==void 0?s.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(h,0,"position"),s.linkProgram(h);function q(G){if(n.debug.checkShaderErrors){const J=s.getProgramInfoLog(h).trim(),L=s.getShaderInfoLog(w).trim(),D=s.getShaderInfoLog(b).trim();let H=!0,V=!0;if(s.getProgramParameter(h,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,h,w,b);else{const W=Xa(s,w,"vertex"),X=Xa(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(h,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+W+`
`+X)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||D==="")&&(V=!1);V&&(G.diagnostics={runnable:H,programLog:J,vertexShader:{log:L,prefix:u},fragmentShader:{log:D,prefix:M}})}s.deleteShader(w),s.deleteShader(b),T=new rs(s,h),A=$f(s,h)}let T;this.getUniforms=function(){return T===void 0&&q(this),T};let A;this.getAttributes=function(){return A===void 0&&q(this),A};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(h,Hf)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gf++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=b,this}let lp=0;class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new up(e),t.set(e,i)),i}}class up{constructor(e){this.id=lp++,this.code=e,this.usedTimes=0}}function dp(n,e,t,i,s,r,o){const a=new Co,l=new cp,c=[],d=s.isWebGL2,p=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return T===0?"uv":`uv${T}`}function h(T,A,z,G,J){const L=G.fog,D=J.geometry,H=T.isMeshStandardMaterial?G.environment:null,V=(T.isMeshStandardMaterial?t:e).get(T.envMap||H),W=V&&V.mapping===ms?V.image.height:null,X=_[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ee=Z!==void 0?Z.length:0;let te=0;D.morphAttributes.position!==void 0&&(te=1),D.morphAttributes.normal!==void 0&&(te=2),D.morphAttributes.color!==void 0&&(te=3);let k,Y,oe,me;if(X){const gt=Gt[X];k=gt.vertexShader,Y=gt.fragmentShader}else k=T.vertexShader,Y=T.fragmentShader,l.update(T),oe=l.getVertexShaderID(T),me=l.getFragmentShaderID(T);const pe=n.getRenderTarget(),we=J.isInstancedMesh===!0,Ce=J.isBatchedMesh===!0,Se=!!T.map,ke=!!T.matcap,P=!!V,_t=!!T.aoMap,ge=!!T.lightMap,Ae=!!T.bumpMap,de=!!T.normalMap,je=!!T.displacementMap,De=!!T.emissiveMap,y=!!T.metalnessMap,v=!!T.roughnessMap,U=T.anisotropy>0,j=T.clearcoat>0,$=T.iridescence>0,Q=T.sheen>0,he=T.transmission>0,ae=U&&!!T.anisotropyMap,ce=j&&!!T.clearcoatMap,xe=j&&!!T.clearcoatNormalMap,Pe=j&&!!T.clearcoatRoughnessMap,K=$&&!!T.iridescenceMap,We=$&&!!T.iridescenceThicknessMap,ze=Q&&!!T.sheenColorMap,Me=Q&&!!T.sheenRoughnessMap,_e=!!T.specularMap,ue=!!T.specularColorMap,Le=!!T.specularIntensityMap,Ge=he&&!!T.transmissionMap,Je=he&&!!T.thicknessMap,Oe=!!T.gradientMap,ne=!!T.alphaMap,R=T.alphaTest>0,se=!!T.alphaHash,re=!!T.extensions,Te=!!D.attributes.uv1,ve=!!D.attributes.uv2,Ze=!!D.attributes.uv3;let Ye=pn;return T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ye=n.toneMapping),{isWebGL2:d,shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:k,fragmentShader:Y,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ce,instancing:we,instancingColor:we&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:en,map:Se,matcap:ke,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:W,aoMap:_t,lightMap:ge,bumpMap:Ae,normalMap:de,displacementMap:f&&je,emissiveMap:De,normalMapObjectSpace:de&&T.normalMapType===vc,normalMapTangentSpace:de&&T.normalMapType===gc,metalnessMap:y,roughnessMap:v,anisotropy:U,anisotropyMap:ae,clearcoat:j,clearcoatMap:ce,clearcoatNormalMap:xe,clearcoatRoughnessMap:Pe,iridescence:$,iridescenceMap:K,iridescenceThicknessMap:We,sheen:Q,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:_e,specularColorMap:ue,specularIntensityMap:Le,transmission:he,transmissionMap:Ge,thicknessMap:Je,gradientMap:Oe,opaque:T.transparent===!1&&T.blending===Ln,alphaMap:ne,alphaTest:R,alphaHash:se,combine:T.combine,mapUv:Se&&g(T.map.channel),aoMapUv:_t&&g(T.aoMap.channel),lightMapUv:ge&&g(T.lightMap.channel),bumpMapUv:Ae&&g(T.bumpMap.channel),normalMapUv:de&&g(T.normalMap.channel),displacementMapUv:je&&g(T.displacementMap.channel),emissiveMapUv:De&&g(T.emissiveMap.channel),metalnessMapUv:y&&g(T.metalnessMap.channel),roughnessMapUv:v&&g(T.roughnessMap.channel),anisotropyMapUv:ae&&g(T.anisotropyMap.channel),clearcoatMapUv:ce&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(T.sheenRoughnessMap.channel),specularMapUv:_e&&g(T.specularMap.channel),specularColorMapUv:ue&&g(T.specularColorMap.channel),specularIntensityMapUv:Le&&g(T.specularIntensityMap.channel),transmissionMapUv:Ge&&g(T.transmissionMap.channel),thicknessMapUv:Je&&g(T.thicknessMap.channel),alphaMapUv:ne&&g(T.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(de||U),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:ve,vertexUv3s:Ze,pointsUvs:J.isPoints===!0&&!!D.attributes.uv&&(Se||ne),fog:!!L,useFog:T.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:J.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Se&&T.map.isVideoTexture===!0&&Xe.getTransfer(T.map.colorSpace)===$e,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===jt,flipSided:T.side===yt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:re&&T.extensions.derivatives===!0,extensionFragDepth:re&&T.extensions.fragDepth===!0,extensionDrawBuffers:re&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function u(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)A.push(z),A.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(M(A,T),E(A,T),A.push(n.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function M(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function E(T,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),T.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function S(T){const A=_[T.type];let z;if(A){const G=Gt[A];z=Xc.clone(G.uniforms)}else z=T.uniforms;return z}function C(T,A){let z;for(let G=0,J=c.length;G<J;G++){const L=c[G];if(L.cacheKey===A){z=L,++z.usedTimes;break}}return z===void 0&&(z=new op(n,A,T,r),c.push(z)),z}function w(T){if(--T.usedTimes===0){const A=c.indexOf(T);c[A]=c[c.length-1],c.pop(),T.destroy()}}function b(T){l.remove(T)}function q(){l.dispose()}return{getParameters:h,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:q}}function hp(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function fp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $a(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ja(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(p,f,m,_,g,h){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:m,groupOrder:_,renderOrder:p.renderOrder,z:g,group:h},n[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=g,u.group=h),e++,u}function a(p,f,m,_,g,h){const u=o(p,f,m,_,g,h);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(p,f,m,_,g,h){const u=o(p,f,m,_,g,h);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(p,f){t.length>1&&t.sort(p||fp),i.length>1&&i.sort(f||$a),s.length>1&&s.sort(f||$a)}function d(){for(let p=e,f=n.length;p<f;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function pp(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ja,n.set(i,[o])):s>=r.length?(o=new ja,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new He};break;case"SpotLight":t={position:new F,direction:new F,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function _p(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gp=0;function vp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ep(n,e){const t=new mp,i=_p(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new F);const r=new F,o=new ut,a=new ut;function l(d,p){let f=0,m=0,_=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let g=0,h=0,u=0,M=0,E=0,S=0,C=0,w=0,b=0,q=0,T=0;d.sort(vp);const A=p===!0?Math.PI:1;for(let G=0,J=d.length;G<J;G++){const L=d[G],D=L.color,H=L.intensity,V=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=D.r*H*A,m+=D.g*H*A,_+=D.b*H*A;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],H);T++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const Z=L.shadow,ee=i.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,s.directionalShadow[g]=ee,s.directionalShadowMap[g]=W,s.directionalShadowMatrix[g]=L.shadow.matrix,S++}s.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(D).multiplyScalar(H*A),X.distance=V,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[u]=X;const Z=L.shadow;if(L.map&&(s.spotLightMap[b]=L.map,b++,Z.updateMatrices(L),L.castShadow&&q++),s.spotLightMatrix[u]=Z.matrix,L.castShadow){const ee=i.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,s.spotShadow[u]=ee,s.spotShadowMap[u]=W,w++}u++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(D).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[M]=X,M++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*A),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Z=L.shadow,ee=i.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,s.pointShadow[h]=ee,s.pointShadowMap[h]=W,s.pointShadowMatrix[h]=L.shadow.matrix,C++}s.point[h]=X,h++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(H*A),X.groundColor.copy(L.groundColor).multiplyScalar(H*A),s.hemi[E]=X,E++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const z=s.hash;(z.directionalLength!==g||z.pointLength!==h||z.spotLength!==u||z.rectAreaLength!==M||z.hemiLength!==E||z.numDirectionalShadows!==S||z.numPointShadows!==C||z.numSpotShadows!==w||z.numSpotMaps!==b||z.numLightProbes!==T)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=M,s.point.length=h,s.hemi.length=E,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=w+b-q,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=T,z.directionalLength=g,z.pointLength=h,z.spotLength=u,z.rectAreaLength=M,z.hemiLength=E,z.numDirectionalShadows=S,z.numPointShadows=C,z.numSpotShadows=w,z.numSpotMaps=b,z.numLightProbes=T,s.version=gp++)}function c(d,p){let f=0,m=0,_=0,g=0,h=0;const u=p.matrixWorldInverse;for(let M=0,E=d.length;M<E;M++){const S=d[M];if(S.isDirectionalLight){const C=s.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),f++}else if(S.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const C=s.rectArea[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const C=s.hemi[h];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(u),h++}}}return{setup:l,setupView:c,state:s}}function Qa(n,e){const t=new Ep(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(p){i.push(p)}function a(p){s.push(p)}function l(p){t.setup(i,p)}function c(p){t.setupView(i,p)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xp(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Qa(n,e),t.set(r,[l])):o>=a.length?(l=new Qa(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class Sp extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tp extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
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
}`;function Ap(n,e,t){let i=new Fo;const s=new qe,r=new qe,o=new ht,a=new Sp({depthPacking:_c}),l=new Tp,c={},d=t.maxTextureSize,p={[_n]:yt,[yt]:_n,[jt]:jt},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:yp,fragmentShader:Mp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new hn(_,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let u=this.type;this.render=function(w,b,q){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const T=n.getRenderTarget(),A=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),G=n.state;G.setBlending(fn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=u!==$t&&this.type===$t,L=u===$t&&this.type!==$t;for(let D=0,H=w.length;D<H;D++){const V=w[D],W=V.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const X=W.getFrameExtents();if(s.multiply(X),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/X.x),s.x=r.x*X.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/X.y),s.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||J===!0||L===!0){const ee=this.type!==$t?{minFilter:xt,magFilter:xt}:{};W.map!==null&&W.map.dispose(),W.map=new zn(s.x,s.y,ee),W.map.texture.name=V.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Z=W.getViewportCount();for(let ee=0;ee<Z;ee++){const te=W.getViewport(ee);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),G.viewport(o),W.updateMatrices(V,ee),i=W.getFrustum(),S(b,q,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===$t&&M(W,q),W.needsUpdate=!1}u=this.type,h.needsUpdate=!1,n.setRenderTarget(T,A,z)};function M(w,b){const q=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,q,f,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,q,m,g,null)}function E(w,b,q,T){let A=null;const z=q.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)A=z;else if(A=q.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=A.uuid,J=b.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let D=L[J];D===void 0&&(D=A.clone(),L[J]=D,b.addEventListener("dispose",C)),A=D}if(A.visible=b.visible,A.wireframe=b.wireframe,T===$t?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:p[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=n.properties.get(A);G.light=q}return A}function S(w,b,q,T,A){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===$t)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld);const J=e.update(w),L=w.material;if(Array.isArray(L)){const D=J.groups;for(let H=0,V=D.length;H<V;H++){const W=D[H],X=L[W.materialIndex];if(X&&X.visible){const Z=E(w,X,T,A);w.onBeforeShadow(n,w,b,q,J,Z,W),n.renderBufferDirect(q,null,J,Z,w,W),w.onAfterShadow(n,w,b,q,J,Z,W)}}}else if(L.visible){const D=E(w,L,T,A);w.onBeforeShadow(n,w,b,q,J,D,null),n.renderBufferDirect(q,null,J,D,w,null),w.onAfterShadow(n,w,b,q,J,D,null)}}const G=w.children;for(let J=0,L=G.length;J<L;J++)S(G[J],b,q,T,A)}function C(w){w.target.removeEventListener("dispose",C);for(const q in c){const T=c[q],A=w.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function bp(n,e,t){const i=t.isWebGL2;function s(){let R=!1;const se=new ht;let re=null;const Te=new ht(0,0,0,0);return{setMask:function(ve){re!==ve&&!R&&(n.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){R=ve},setClear:function(ve,Ze,Ye,at,gt){gt===!0&&(ve*=at,Ze*=at,Ye*=at),se.set(ve,Ze,Ye,at),Te.equals(se)===!1&&(n.clearColor(ve,Ze,Ye,at),Te.copy(se))},reset:function(){R=!1,re=null,Te.set(-1,0,0,0)}}}function r(){let R=!1,se=null,re=null,Te=null;return{setTest:function(ve){ve?Ce(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(ve){se!==ve&&!R&&(n.depthMask(ve),se=ve)},setFunc:function(ve){if(re!==ve){switch(ve){case Xl:n.depthFunc(n.NEVER);break;case ql:n.depthFunc(n.ALWAYS);break;case Zl:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=ve}},setLocked:function(ve){R=ve},setClear:function(ve){Te!==ve&&(n.clearDepth(ve),Te=ve)},reset:function(){R=!1,se=null,re=null,Te=null}}}function o(){let R=!1,se=null,re=null,Te=null,ve=null,Ze=null,Ye=null,at=null,gt=null;return{setTest:function(Ke){R||(Ke?Ce(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!R&&(n.stencilMask(Ke),se=Ke)},setFunc:function(Ke,vt,Ht){(re!==Ke||Te!==vt||ve!==Ht)&&(n.stencilFunc(Ke,vt,Ht),re=Ke,Te=vt,ve=Ht)},setOp:function(Ke,vt,Ht){(Ze!==Ke||Ye!==vt||at!==Ht)&&(n.stencilOp(Ke,vt,Ht),Ze=Ke,Ye=vt,at=Ht)},setLocked:function(Ke){R=Ke},setClear:function(Ke){gt!==Ke&&(n.clearStencil(Ke),gt=Ke)},reset:function(){R=!1,se=null,re=null,Te=null,ve=null,Ze=null,Ye=null,at=null,gt=null}}}const a=new s,l=new r,c=new o,d=new WeakMap,p=new WeakMap;let f={},m={},_=new WeakMap,g=[],h=null,u=!1,M=null,E=null,S=null,C=null,w=null,b=null,q=null,T=new He(0,0,0),A=0,z=!1,G=null,J=null,L=null,D=null,H=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=X>=2);let ee=null,te={};const k=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),oe=new ht().fromArray(k),me=new ht().fromArray(Y);function pe(R,se,re,Te){const ve=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(R,Ze),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<re;Ye++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(se+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Ze}const we={};we[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(ls),De(!1),y(Pr),Ce(n.CULL_FACE),de(fn);function Ce(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function Se(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function ke(R,se){return m[R]!==se?(n.bindFramebuffer(R,se),m[R]=se,i&&(R===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),R===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function P(R,se){let re=g,Te=!1;if(R)if(re=_.get(se),re===void 0&&(re=[],_.set(se,re)),R.isWebGLMultipleRenderTargets){const ve=R.texture;if(re.length!==ve.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,Ye=ve.length;Ze<Ye;Ze++)re[Ze]=n.COLOR_ATTACHMENT0+Ze;re.length=ve.length,Te=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,Te=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function _t(R){return h!==R?(n.useProgram(R),h=R,!0):!1}const ge={[wn]:n.FUNC_ADD,[Ll]:n.FUNC_SUBTRACT,[Il]:n.FUNC_REVERSE_SUBTRACT};if(i)ge[Fr]=n.MIN,ge[Br]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ge[Fr]=R.MIN_EXT,ge[Br]=R.MAX_EXT)}const Ae={[Dl]:n.ZERO,[Pl]:n.ONE,[Nl]:n.SRC_COLOR,[ar]:n.SRC_ALPHA,[kl]:n.SRC_ALPHA_SATURATE,[Bl]:n.DST_COLOR,[Ol]:n.DST_ALPHA,[Ul]:n.ONE_MINUS_SRC_COLOR,[or]:n.ONE_MINUS_SRC_ALPHA,[zl]:n.ONE_MINUS_DST_COLOR,[Fl]:n.ONE_MINUS_DST_ALPHA,[Hl]:n.CONSTANT_COLOR,[Gl]:n.ONE_MINUS_CONSTANT_COLOR,[Wl]:n.CONSTANT_ALPHA,[Vl]:n.ONE_MINUS_CONSTANT_ALPHA};function de(R,se,re,Te,ve,Ze,Ye,at,gt,Ke){if(R===fn){u===!0&&(Se(n.BLEND),u=!1);return}if(u===!1&&(Ce(n.BLEND),u=!0),R!==Cl){if(R!==M||Ke!==z){if((E!==wn||w!==wn)&&(n.blendEquation(n.FUNC_ADD),E=wn,w=wn),Ke)switch(R){case Ln:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nr:n.blendFunc(n.ONE,n.ONE);break;case Ur:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Or:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ln:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ur:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Or:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,C=null,b=null,q=null,T.set(0,0,0),A=0,M=R,z=Ke}return}ve=ve||se,Ze=Ze||re,Ye=Ye||Te,(se!==E||ve!==w)&&(n.blendEquationSeparate(ge[se],ge[ve]),E=se,w=ve),(re!==S||Te!==C||Ze!==b||Ye!==q)&&(n.blendFuncSeparate(Ae[re],Ae[Te],Ae[Ze],Ae[Ye]),S=re,C=Te,b=Ze,q=Ye),(at.equals(T)===!1||gt!==A)&&(n.blendColor(at.r,at.g,at.b,gt),T.copy(at),A=gt),M=R,z=!1}function je(R,se){R.side===jt?Se(n.CULL_FACE):Ce(n.CULL_FACE);let re=R.side===yt;se&&(re=!re),De(re),R.blending===Ln&&R.transparent===!1?de(fn):de(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Te=R.stencilWrite;c.setTest(Te),Te&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),U(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(R){G!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),G=R)}function y(R){R!==bl?(Ce(n.CULL_FACE),R!==J&&(R===Pr?n.cullFace(n.BACK):R===wl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),J=R}function v(R){R!==L&&(W&&n.lineWidth(R),L=R)}function U(R,se,re){R?(Ce(n.POLYGON_OFFSET_FILL),(D!==se||H!==re)&&(n.polygonOffset(se,re),D=se,H=re)):Se(n.POLYGON_OFFSET_FILL)}function j(R){R?Ce(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function $(R){R===void 0&&(R=n.TEXTURE0+V-1),ee!==R&&(n.activeTexture(R),ee=R)}function Q(R,se,re){re===void 0&&(ee===null?re=n.TEXTURE0+V-1:re=ee);let Te=te[re];Te===void 0&&(Te={type:void 0,texture:void 0},te[re]=Te),(Te.type!==R||Te.texture!==se)&&(ee!==re&&(n.activeTexture(re),ee=re),n.bindTexture(R,se||we[R]),Te.type=R,Te.texture=se)}function he(){const R=te[ee];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function We(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(R){oe.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),oe.copy(R))}function Ge(R){me.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function Je(R,se){let re=p.get(se);re===void 0&&(re=new WeakMap,p.set(se,re));let Te=re.get(R);Te===void 0&&(Te=n.getUniformBlockIndex(se,R.name),re.set(R,Te))}function Oe(R,se){const Te=p.get(se).get(R);d.get(se)!==Te&&(n.uniformBlockBinding(se,Te,R.__bindingPointIndex),d.set(se,Te))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ee=null,te={},m={},_=new WeakMap,g=[],h=null,u=!1,M=null,E=null,S=null,C=null,w=null,b=null,q=null,T=new He(0,0,0),A=0,z=!1,G=null,J=null,L=null,D=null,H=null,oe.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:Se,bindFramebuffer:ke,drawBuffers:P,useProgram:_t,setBlending:de,setMaterial:je,setFlipSided:De,setCullFace:y,setLineWidth:v,setPolygonOffset:U,setScissorTest:j,activeTexture:$,bindTexture:Q,unbindTexture:he,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:_e,texImage3D:ue,updateUBOMapping:Je,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:Me,texSubImage2D:xe,texSubImage3D:Pe,compressedTexSubImage2D:K,compressedTexSubImage3D:We,scissor:Le,viewport:Ge,reset:ne}}function wp(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):fs("canvas")}function g(y,v,U,j){let $=1;if((y.width>j||y.height>j)&&($=j/Math.max(y.width,y.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const Q=v?pr:Math.floor,he=Q($*y.width),ae=Q($*y.height);p===void 0&&(p=_(he,ae));const ce=U?_(he,ae):p;return ce.width=he,ce.height=ae,ce.getContext("2d").drawImage(y,0,0,he,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+he+"x"+ae+")."),ce}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function h(y){return pa(y.width)&&pa(y.height)}function u(y){return a?!1:y.wrapS!==zt||y.wrapT!==zt||y.minFilter!==xt&&y.minFilter!==It}function M(y,v){return y.generateMipmaps&&v&&y.minFilter!==xt&&y.minFilter!==It}function E(y){n.generateMipmap(y)}function S(y,v,U,j,$=!1){if(a===!1)return v;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Q=v;if(v===n.RED&&(U===n.FLOAT&&(Q=n.R32F),U===n.HALF_FLOAT&&(Q=n.R16F),U===n.UNSIGNED_BYTE&&(Q=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Q=n.R8UI),U===n.UNSIGNED_SHORT&&(Q=n.R16UI),U===n.UNSIGNED_INT&&(Q=n.R32UI),U===n.BYTE&&(Q=n.R8I),U===n.SHORT&&(Q=n.R16I),U===n.INT&&(Q=n.R32I)),v===n.RG&&(U===n.FLOAT&&(Q=n.RG32F),U===n.HALF_FLOAT&&(Q=n.RG16F),U===n.UNSIGNED_BYTE&&(Q=n.RG8)),v===n.RGBA){const he=$?cs:Xe.getTransfer(j);U===n.FLOAT&&(Q=n.RGBA32F),U===n.HALF_FLOAT&&(Q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Q=he===$e?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(y,v,U){return M(y,U)===!0||y.isFramebufferTexture&&y.minFilter!==xt&&y.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function w(y){return y===xt||y===zr||y===Ms?n.NEAREST:n.LINEAR}function b(y){const v=y.target;v.removeEventListener("dispose",b),T(v),v.isVideoTexture&&d.delete(v)}function q(y){const v=y.target;v.removeEventListener("dispose",q),z(v)}function T(y){const v=i.get(y);if(v.__webglInit===void 0)return;const U=y.source,j=f.get(U);if(j){const $=j[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(y),Object.keys(j).length===0&&f.delete(U)}i.remove(y)}function A(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const U=y.source,j=f.get(U);delete j[v.__cacheKey],o.memory.textures--}function z(y){const v=y.texture,U=i.get(y),j=i.get(v);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(U.__webglFramebuffer[$]))for(let Q=0;Q<U.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(U.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(U.__webglFramebuffer[$]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[$])}else{if(Array.isArray(U.__webglFramebuffer))for(let $=0;$<U.__webglFramebuffer.length;$++)n.deleteFramebuffer(U.__webglFramebuffer[$]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let $=0;$<U.__webglColorRenderbuffer.length;$++)U.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[$]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let $=0,Q=v.length;$<Q;$++){const he=i.get(v[$]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(v[$])}i.remove(v),i.remove(y)}let G=0;function J(){G=0}function L(){const y=G;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),G+=1,y}function D(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function H(y,v){const U=i.get(y);if(y.isVideoTexture&&je(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const j=y.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,y,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function V(y,v){const U=i.get(y);if(y.version>0&&U.__version!==y.version){oe(U,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function W(y,v){const U=i.get(y);if(y.version>0&&U.__version!==y.version){oe(U,y,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function X(y,v){const U=i.get(y);if(y.version>0&&U.__version!==y.version){me(U,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const Z={[ur]:n.REPEAT,[zt]:n.CLAMP_TO_EDGE,[dr]:n.MIRRORED_REPEAT},ee={[xt]:n.NEAREST,[zr]:n.NEAREST_MIPMAP_NEAREST,[Ms]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[ac]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},te={[Ec]:n.NEVER,[Ac]:n.ALWAYS,[xc]:n.LESS,[yo]:n.LEQUAL,[Sc]:n.EQUAL,[Mc]:n.GEQUAL,[Tc]:n.GREATER,[yc]:n.NOTEQUAL};function k(y,v,U){if(U?(n.texParameteri(y,n.TEXTURE_WRAP_S,Z[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,Z[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,Z[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ee[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ee[v.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==zt||v.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==xt&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===xt||v.minFilter!==Ms&&v.minFilter!==Ti||v.type===dn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===yi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(y,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Y(y,v){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",b));const j=v.source;let $=f.get(j);$===void 0&&($={},f.set(j,$));const Q=D(v);if(Q!==y.__cacheKey){$[Q]===void 0&&($[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[Q].usedTimes++;const he=$[y.__cacheKey];he!==void 0&&($[y.__cacheKey].usedTimes--,he.usedTimes===0&&A(v)),y.__cacheKey=Q,y.__webglTexture=$[Q].texture}return U}function oe(y,v,U){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const $=Y(y,v),Q=v.source;t.bindTexture(j,y.__webglTexture,n.TEXTURE0+U);const he=i.get(Q);if(Q.version!==he.__version||$===!0){t.activeTexture(n.TEXTURE0+U);const ae=Xe.getPrimaries(Xe.workingColorSpace),ce=v.colorSpace===Pt?null:Xe.getPrimaries(v.colorSpace),xe=v.colorSpace===Pt||ae===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=u(v)&&h(v.image)===!1;let K=g(v.image,Pe,!1,s.maxTextureSize);K=De(v,K);const We=h(K)||a,ze=r.convert(v.format,v.colorSpace);let Me=r.convert(v.type),_e=S(v.internalFormat,ze,Me,v.colorSpace,v.isVideoTexture);k(j,v,We);let ue;const Le=v.mipmaps,Ge=a&&v.isVideoTexture!==!0&&_e!==So,Je=he.__version===void 0||$===!0,Oe=C(v,K,We);if(v.isDepthTexture)_e=n.DEPTH_COMPONENT,a?v.type===dn?_e=n.DEPTH_COMPONENT32F:v.type===un?_e=n.DEPTH_COMPONENT24:v.type===In?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:v.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Dn&&_e===n.DEPTH_COMPONENT&&v.type!==vr&&v.type!==un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=un,Me=r.convert(v.type)),v.format===ci&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,v.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=In,Me=r.convert(v.type))),Je&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,_e,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,ze,Me,null));else if(v.isDataTexture)if(Le.length>0&&We){Ge&&Je&&t.texStorage2D(n.TEXTURE_2D,Oe,_e,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)ue=Le[ne],Ge?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,Me,ue.data):t.texImage2D(n.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ze,Me,ue.data);v.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(n.TEXTURE_2D,Oe,_e,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,ze,Me,K.data)):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,ze,Me,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ge&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,_e,Le[0].width,Le[0].height,K.depth);for(let ne=0,R=Le.length;ne<R;ne++)ue=Le[ne],v.format!==kt?ze!==null?Ge?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,K.depth,ze,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,K.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,K.depth,ze,Me,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,_e,ue.width,ue.height,K.depth,0,ze,Me,ue.data)}else{Ge&&Je&&t.texStorage2D(n.TEXTURE_2D,Oe,_e,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)ue=Le[ne],v.format!==kt?ze!==null?Ge?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue.width,ue.height,ze,Me,ue.data):t.texImage2D(n.TEXTURE_2D,ne,_e,ue.width,ue.height,0,ze,Me,ue.data)}else if(v.isDataArrayTexture)Ge?(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,_e,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ze,Me,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,K.width,K.height,K.depth,0,ze,Me,K.data);else if(v.isData3DTexture)Ge?(Je&&t.texStorage3D(n.TEXTURE_3D,Oe,_e,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ze,Me,K.data)):t.texImage3D(n.TEXTURE_3D,0,_e,K.width,K.height,K.depth,0,ze,Me,K.data);else if(v.isFramebufferTexture){if(Je)if(Ge)t.texStorage2D(n.TEXTURE_2D,Oe,_e,K.width,K.height);else{let ne=K.width,R=K.height;for(let se=0;se<Oe;se++)t.texImage2D(n.TEXTURE_2D,se,_e,ne,R,0,ze,Me,null),ne>>=1,R>>=1}}else if(Le.length>0&&We){Ge&&Je&&t.texStorage2D(n.TEXTURE_2D,Oe,_e,Le[0].width,Le[0].height);for(let ne=0,R=Le.length;ne<R;ne++)ue=Le[ne],Ge?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ze,Me,ue):t.texImage2D(n.TEXTURE_2D,ne,_e,ze,Me,ue);v.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(n.TEXTURE_2D,Oe,_e,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Me,K)):t.texImage2D(n.TEXTURE_2D,0,_e,ze,Me,K);M(v,We)&&E(j),he.__version=Q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function me(y,v,U){if(v.image.length!==6)return;const j=Y(y,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+U);const Q=i.get($);if($.version!==Q.__version||j===!0){t.activeTexture(n.TEXTURE0+U);const he=Xe.getPrimaries(Xe.workingColorSpace),ae=v.colorSpace===Pt?null:Xe.getPrimaries(v.colorSpace),ce=v.colorSpace===Pt||he===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,Pe=v.image[0]&&v.image[0].isDataTexture,K=[];for(let ne=0;ne<6;ne++)!xe&&!Pe?K[ne]=g(v.image[ne],!1,!0,s.maxCubemapSize):K[ne]=Pe?v.image[ne].image:v.image[ne],K[ne]=De(v,K[ne]);const We=K[0],ze=h(We)||a,Me=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),ue=S(v.internalFormat,Me,_e,v.colorSpace),Le=a&&v.isVideoTexture!==!0,Ge=Q.__version===void 0||j===!0;let Je=C(v,We,ze);k(n.TEXTURE_CUBE_MAP,v,ze);let Oe;if(xe){Le&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,ue,We.width,We.height);for(let ne=0;ne<6;ne++){Oe=K[ne].mipmaps;for(let R=0;R<Oe.length;R++){const se=Oe[R];v.format!==kt?Me!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,se.width,se.height,Me,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,se.width,se.height,Me,_e,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,se.width,se.height,0,Me,_e,se.data)}}}else{Oe=v.mipmaps,Le&&Ge&&(Oe.length>0&&Je++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,ue,K[0].width,K[0].height));for(let ne=0;ne<6;ne++)if(Pe){Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,K[ne].width,K[ne].height,Me,_e,K[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,K[ne].width,K[ne].height,0,Me,_e,K[ne].data);for(let R=0;R<Oe.length;R++){const re=Oe[R].image[ne].image;Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,re.width,re.height,Me,_e,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,re.width,re.height,0,Me,_e,re.data)}}else{Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Me,_e,K[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Me,_e,K[ne]);for(let R=0;R<Oe.length;R++){const se=Oe[R];Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,Me,_e,se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,Me,_e,se.image[ne])}}}M(v,ze)&&E(n.TEXTURE_CUBE_MAP),Q.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function pe(y,v,U,j,$,Q){const he=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),ce=S(U.internalFormat,he,ae,U.colorSpace);if(!i.get(v).__hasExternalTextures){const Pe=Math.max(1,v.width>>Q),K=Math.max(1,v.height>>Q);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,Q,ce,Pe,K,v.depth,0,he,ae,null):t.texImage2D($,Q,ce,Pe,K,0,he,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),de(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,$,i.get(U).__webglTexture,0,Ae(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,$,i.get(U).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(y,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let j=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||de(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===dn?j=n.DEPTH_COMPONENT32F:$.type===un&&(j=n.DEPTH_COMPONENT24));const Q=Ae(v);de(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,j,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,j,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const j=Ae(v);U&&de(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):de(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const j=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<j.length;$++){const Q=j[$],he=r.convert(Q.format,Q.colorSpace),ae=r.convert(Q.type),ce=S(Q.internalFormat,he,ae,Q.colorSpace),xe=Ae(v);U&&de(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ce,v.width,v.height):de(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ce,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ce,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const j=i.get(v.depthTexture).__webglTexture,$=Ae(v);if(v.depthTexture.format===Dn)de(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===ci)de(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Se(y){const v=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,y)}else if(U){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=n.createRenderbuffer(),we(v.__webglDepthbuffer[j],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),we(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(y,v,U){const j=i.get(y);v!==void 0&&pe(j.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Se(y)}function P(y){const v=y.texture,U=i.get(y),j=i.get(v);y.addEventListener("dispose",q),y.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,o.memory.textures++);const $=y.isWebGLCubeRenderTarget===!0,Q=y.isWebGLMultipleRenderTargets===!0,he=h(y)||a;if($){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let ce=0;ce<v.mipmaps.length;ce++)U.__webglFramebuffer[ae][ce]=n.createFramebuffer()}else U.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Q)if(s.drawBuffers){const ae=y.texture;for(let ce=0,xe=ae.length;ce<xe;ce++){const Pe=i.get(ae[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&de(y)===!1){const ae=Q?v:[v];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){const xe=ae[ce];U.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Pe=r.convert(xe.format,xe.colorSpace),K=r.convert(xe.type),We=S(xe.internalFormat,Pe,K,xe.colorSpace,y.isXRRenderTarget===!0),ze=Ae(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,We,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),we(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),k(n.TEXTURE_CUBE_MAP,v,he);for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)pe(U.__webglFramebuffer[ae][ce],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else pe(U.__webglFramebuffer[ae],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);M(v,he)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ae=y.texture;for(let ce=0,xe=ae.length;ce<xe;ce++){const Pe=ae[ce],K=i.get(Pe);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),k(n.TEXTURE_2D,Pe,he),pe(U.__webglFramebuffer,y,Pe,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),M(Pe,he)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ae=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,j.__webglTexture),k(ae,v,he),a&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)pe(U.__webglFramebuffer[ce],y,v,n.COLOR_ATTACHMENT0,ae,ce);else pe(U.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ae,0);M(v,he)&&E(ae),t.unbindTexture()}y.depthBuffer&&Se(y)}function _t(y){const v=h(y)||a,U=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0,$=U.length;j<$;j++){const Q=U[j];if(M(Q,v)){const he=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(Q).__webglTexture;t.bindTexture(he,ae),E(he),t.unbindTexture()}}}function ge(y){if(a&&y.samples>0&&de(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],U=y.width,j=y.height;let $=n.COLOR_BUFFER_BIT;const Q=[],he=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(y),ce=y.isWebGLMultipleRenderTargets===!0;if(ce)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){Q.push(n.COLOR_ATTACHMENT0+xe),y.depthBuffer&&Q.push(he);const Pe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Pe===!1&&(y.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]),Pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[he]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[he])),ce){const K=i.get(v[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,U,j,0,0,U,j,$,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]);const Pe=i.get(v[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ae(y){return Math.min(s.maxSamples,y.samples)}function de(y){const v=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function je(y){const v=o.render.frame;d.get(y)!==v&&(d.set(y,v),y.update())}function De(y,v){const U=y.colorSpace,j=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===hr||U!==en&&U!==Pt&&(Xe.getTransfer(U)===$e?a===!1?e.has("EXT_sRGB")===!0&&j===kt?(y.format=hr,y.minFilter=It,y.generateMipmaps=!1):v=Ao.sRGBToLinear(v):(j!==kt||$!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=L,this.resetTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=ke,this.setupRenderTarget=P,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=de}function Rp(n,e,t){const i=t.isWebGL2;function s(r,o=Pt){let a;const l=Xe.getTransfer(o);if(r===mn)return n.UNSIGNED_BYTE;if(r===_o)return n.UNSIGNED_SHORT_4_4_4_4;if(r===go)return n.UNSIGNED_SHORT_5_5_5_1;if(r===oc)return n.BYTE;if(r===lc)return n.SHORT;if(r===vr)return n.UNSIGNED_SHORT;if(r===mo)return n.INT;if(r===un)return n.UNSIGNED_INT;if(r===dn)return n.FLOAT;if(r===yi)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===cc)return n.ALPHA;if(r===kt)return n.RGBA;if(r===uc)return n.LUMINANCE;if(r===dc)return n.LUMINANCE_ALPHA;if(r===Dn)return n.DEPTH_COMPONENT;if(r===ci)return n.DEPTH_STENCIL;if(r===hr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===hc)return n.RED;if(r===vo)return n.RED_INTEGER;if(r===fc)return n.RG;if(r===Eo)return n.RG_INTEGER;if(r===xo)return n.RGBA_INTEGER;if(r===As||r===bs||r===ws||r===Rs)if(l===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kr||r===Hr||r===Gr||r===Wr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===kr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===So)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vr||r===Xr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vr)return l===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qr||r===Zr||r===Yr||r===Kr||r===$r||r===jr||r===Qr||r===Jr||r===ea||r===ta||r===na||r===ia||r===sa||r===ra)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===qr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$r)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jr)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ea)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ta)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===na)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ia)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sa)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ra)return l===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cs||r===aa||r===oa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Cs)return l===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===aa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pc||r===la||r===ca||r===ua)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Cs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===la)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ca)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ua)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===In?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Cp extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ns extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lp={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const h=t.getJointPose(g,i),u=this._getHandJoint(c,g);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ip extends di{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,p=null,f=null,m=null,_=null;const g=t.getContextAttributes();let h=null,u=null;const M=[],E=[],S=new qe;let C=null;const w=new Dt;w.layers.enable(1),w.viewport=new ht;const b=new Dt;b.layers.enable(2),b.viewport=new ht;const q=[w,b],T=new Cp;T.layers.enable(1),T.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=M[k];return Y===void 0&&(Y=new er,M[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=M[k];return Y===void 0&&(Y=new er,M[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=M[k];return Y===void 0&&(Y=new er,M[k]=Y),Y.getHandSpace()};function G(k){const Y=E.indexOf(k.inputSource);if(Y===-1)return;const oe=M[Y];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||o),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function J(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",L);for(let k=0;k<M.length;k++){const Y=E[k];Y!==null&&(E[k]=null,M[k].disconnect(Y))}A=null,z=null,e.setRenderTarget(h),m=null,f=null,p=null,s=null,u=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",J),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new zn(m.framebufferWidth,m.framebufferHeight,{format:kt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,oe=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=g.stencil?ci:Dn,oe=g.stencil?In:un);const pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};p=new XRWebGLBinding(s,t),f=p.createProjectionLayer(pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new zn(f.textureWidth,f.textureHeight,{format:kt,type:mn,depthTexture:new zo(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const we=e.properties.get(u);we.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(k){for(let Y=0;Y<k.removed.length;Y++){const oe=k.removed[Y],me=E.indexOf(oe);me>=0&&(E[me]=null,M[me].disconnect(oe))}for(let Y=0;Y<k.added.length;Y++){const oe=k.added[Y];let me=E.indexOf(oe);if(me===-1){for(let we=0;we<M.length;we++)if(we>=E.length){E.push(oe),me=we;break}else if(E[we]===null){E[we]=oe,me=we;break}if(me===-1)break}const pe=M[me];pe&&pe.connect(oe)}}const D=new F,H=new F;function V(k,Y,oe){D.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const me=D.distanceTo(H),pe=Y.projectionMatrix.elements,we=oe.projectionMatrix.elements,Ce=pe[14]/(pe[10]-1),Se=pe[14]/(pe[10]+1),ke=(pe[9]+1)/pe[5],P=(pe[9]-1)/pe[5],_t=(pe[8]-1)/pe[0],ge=(we[8]+1)/we[0],Ae=Ce*_t,de=Ce*ge,je=me/(-_t+ge),De=je*-_t;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(De),k.translateZ(je),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const y=Ce+je,v=Se+je,U=Ae-De,j=de+(me-De),$=ke*Se/v*y,Q=P*Se/v*y;k.projectionMatrix.makePerspective(U,j,$,Q,y,v),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;T.near=b.near=w.near=k.near,T.far=b.far=w.far=k.far,(A!==T.near||z!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,z=T.far);const Y=k.parent,oe=T.cameras;W(T,Y);for(let me=0;me<oe.length;me++)W(oe[me],Y);oe.length===2?V(T,w,b):T.projectionMatrix.copy(w.projectionMatrix),X(k,T,Y)};function X(k,Y,oe){oe===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=fr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let Z=null;function ee(k,Y){if(d=Y.getViewerPose(c||o),_=Y,d!==null){const oe=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let me=!1;oe.length!==T.cameras.length&&(T.cameras.length=0,me=!0);for(let pe=0;pe<oe.length;pe++){const we=oe[pe];let Ce=null;if(m!==null)Ce=m.getViewport(we);else{const ke=p.getViewSubImage(f,we);Ce=ke.viewport,pe===0&&(e.setRenderTargetTextures(u,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(u))}let Se=q[pe];Se===void 0&&(Se=new Dt,Se.layers.enable(pe),Se.viewport=new ht,q[pe]=Se),Se.matrix.fromArray(we.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(we.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),pe===0&&(T.matrix.copy(Se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),me===!0&&T.cameras.push(Se)}}for(let oe=0;oe<M.length;oe++){const me=E[oe],pe=M[oe];me!==null&&pe!==void 0&&pe.update(me,Y,c||o)}Z&&Z(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const te=new Bo;te.setAnimationLoop(ee),this.setAnimationLoop=function(k){Z=k},this.dispose=function(){}}}function Dp(n,e){function t(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function i(h,u){u.color.getRGB(h.fogColor.value,No(n)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function s(h,u,M,E,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(h,u):u.isMeshToonMaterial?(r(h,u),p(h,u)):u.isMeshPhongMaterial?(r(h,u),d(h,u)):u.isMeshStandardMaterial?(r(h,u),f(h,u),u.isMeshPhysicalMaterial&&m(h,u,S)):u.isMeshMatcapMaterial?(r(h,u),_(h,u)):u.isMeshDepthMaterial?r(h,u):u.isMeshDistanceMaterial?(r(h,u),g(h,u)):u.isMeshNormalMaterial?r(h,u):u.isLineBasicMaterial?(o(h,u),u.isLineDashedMaterial&&a(h,u)):u.isPointsMaterial?l(h,u,M,E):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,t(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===yt&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,t(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===yt&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,t(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,t(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const M=e.get(u).envMap;if(M&&(h.envMap.value=M,h.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap){h.lightMap.value=u.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=u.lightMapIntensity*E,t(u.lightMap,h.lightMapTransform)}u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,h.aoMapTransform))}function o(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform))}function a(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,M,E){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*M,h.scale.value=E*.5,u.map&&(h.map.value=u.map,t(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function p(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function f(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,h.roughnessMapTransform)),e.get(u).envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function m(h,u,M){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&h.clearcoatNormalScale.value.negate())),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,u){u.matcap&&(h.matcap.value=u.matcap)}function g(h,u){const M=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Pp(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,E){const S=E.program;i.uniformBlockBinding(M,S)}function c(M,E){let S=s[M.id];S===void 0&&(_(M),S=d(M),s[M.id]=S,M.addEventListener("dispose",h));const C=E.program;i.updateUBOMapping(M,C);const w=e.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function d(M){const E=p();M.__bindingPointIndex=E;const S=n.createBuffer(),C=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function p(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const E=s[M.id],S=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,b=S.length;w<b;w++){const q=Array.isArray(S[w])?S[w]:[S[w]];for(let T=0,A=q.length;T<A;T++){const z=q[T];if(m(z,w,T,C)===!0){const G=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let D=0;D<J.length;D++){const H=J[D],V=g(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+L,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,E,S,C){const w=M.value,b=E+"_"+S;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const q=C[b];if(typeof w=="number"||typeof w=="boolean"){if(q!==w)return C[b]=w,!0}else if(q.equals(w)===!1)return q.copy(w),!0}return!1}function _(M){const E=M.uniforms;let S=0;const C=16;for(let b=0,q=E.length;b<q;b++){const T=Array.isArray(E[b])?E[b]:[E[b]];for(let A=0,z=T.length;A<z;A++){const G=T[A],J=Array.isArray(G.value)?G.value:[G.value];for(let L=0,D=J.length;L<D;L++){const H=J[L],V=g(H),W=S%C;W!==0&&C-W<V.boundary&&(S+=C-W),G.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=V.storage}}}const w=S%C;return w>0&&(S+=C-w),M.__size=S,M.__cache={},this}function g(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function h(M){const E=M.target;E.removeEventListener("dispose",h);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Xo{constructor(e={}){const{canvas:t=wc(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const u=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const E=this;let S=!1,C=0,w=0,b=null,q=-1,T=null;const A=new ht,z=new ht;let G=null;const J=new He(0);let L=0,D=t.width,H=t.height,V=1,W=null,X=null;const Z=new ht(0,0,D,H),ee=new ht(0,0,D,H);let te=!1;const k=new Fo;let Y=!1,oe=!1,me=null;const pe=new ut,we=new qe,Ce=new F,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return b===null?V:1}let P=i;function _t(x,I){for(let O=0;O<x.length;O++){const B=x[O],N=t.getContext(B,I);if(N!==null)return N}return null}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gr}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",se,!1),P===null){const I=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&I.shift(),P=_t(I,x),P===null)throw _t(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ge,Ae,de,je,De,y,v,U,j,$,Q,he,ae,ce,xe,Pe,K,We,ze,Me,_e,ue,Le,Ge;function Je(){ge=new Gh(P),Ae=new Uh(P,ge,e),ge.init(Ae),ue=new Rp(P,ge,Ae),de=new bp(P,ge,Ae),je=new Xh(P),De=new hp,y=new wp(P,ge,de,De,Ae,ue,je),v=new Fh(E),U=new Hh(E),j=new Qc(P,Ae),Le=new Ph(P,ge,j,Ae),$=new Wh(P,j,je,Le),Q=new Kh(P,$,j,je),ze=new Yh(P,Ae,y),Pe=new Oh(De),he=new dp(E,v,U,ge,Ae,Le,Pe),ae=new Dp(E,De),ce=new pp,xe=new xp(ge,Ae),We=new Dh(E,v,U,de,Q,f,l),K=new Ap(E,Q,Ae),Ge=new Pp(P,je,Ae,de),Me=new Nh(P,ge,je,Ae),_e=new Vh(P,ge,je,Ae),je.programs=he.programs,E.capabilities=Ae,E.extensions=ge,E.properties=De,E.renderLists=ce,E.shadowMap=K,E.state=de,E.info=je}Je();const Oe=new Ip(E,P);this.xr=Oe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=ge.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ge.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(D,H,!1))},this.getSize=function(x){return x.set(D,H)},this.setSize=function(x,I,O=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=x,H=I,t.width=Math.floor(x*V),t.height=Math.floor(I*V),O===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(D*V,H*V).floor()},this.setDrawingBufferSize=function(x,I,O){D=x,H=I,V=O,t.width=Math.floor(x*O),t.height=Math.floor(I*O),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(Z)},this.setViewport=function(x,I,O,B){x.isVector4?Z.set(x.x,x.y,x.z,x.w):Z.set(x,I,O,B),de.viewport(A.copy(Z).multiplyScalar(V).floor())},this.getScissor=function(x){return x.copy(ee)},this.setScissor=function(x,I,O,B){x.isVector4?ee.set(x.x,x.y,x.z,x.w):ee.set(x,I,O,B),de.scissor(z.copy(ee).multiplyScalar(V).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(x){de.setScissorTest(te=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){X=x},this.getClearColor=function(x){return x.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(x=!0,I=!0,O=!0){let B=0;if(x){let N=!1;if(b!==null){const le=b.texture.format;N=le===xo||le===Eo||le===vo}if(N){const le=b.texture.type,fe=le===mn||le===un||le===vr||le===In||le===_o||le===go,Ee=We.getClearColor(),ye=We.getClearAlpha(),Ne=Ee.r,be=Ee.g,Re=Ee.b;fe?(m[0]=Ne,m[1]=be,m[2]=Re,m[3]=ye,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Ne,_[1]=be,_[2]=Re,_[3]=ye,P.clearBufferiv(P.COLOR,0,_))}else B|=P.COLOR_BUFFER_BIT}I&&(B|=P.DEPTH_BUFFER_BIT),O&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),xe.dispose(),De.dispose(),v.dispose(),U.dispose(),Q.dispose(),Le.dispose(),Ge.dispose(),he.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",gt),Oe.removeEventListener("sessionend",Ke),me&&(me.dispose(),me=null),vt.stop()};function ne(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const x=je.autoReset,I=K.enabled,O=K.autoUpdate,B=K.needsUpdate,N=K.type;Je(),je.autoReset=x,K.enabled=I,K.autoUpdate=O,K.needsUpdate=B,K.type=N}function se(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function re(x){const I=x.target;I.removeEventListener("dispose",re),Te(I)}function Te(x){ve(x),De.remove(x)}function ve(x){const I=De.get(x).programs;I!==void 0&&(I.forEach(function(O){he.releaseProgram(O)}),x.isShaderMaterial&&he.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,O,B,N,le){I===null&&(I=Se);const fe=N.isMesh&&N.matrixWorld.determinant()<0,Ee=Yo(x,I,O,B,N);de.setMaterial(B,fe);let ye=O.index,Ne=1;if(B.wireframe===!0){if(ye=$.getWireframeAttribute(O),ye===void 0)return;Ne=2}const be=O.drawRange,Re=O.attributes.position;let tt=be.start*Ne,bt=(be.start+be.count)*Ne;le!==null&&(tt=Math.max(tt,le.start*Ne),bt=Math.min(bt,(le.start+le.count)*Ne)),ye!==null?(tt=Math.max(tt,0),bt=Math.min(bt,ye.count)):Re!=null&&(tt=Math.max(tt,0),bt=Math.min(bt,Re.count));const ot=bt-tt;if(ot<0||ot===1/0)return;Le.setup(N,B,Ee,O,ye);let Vt,Qe=Me;if(ye!==null&&(Vt=j.get(ye),Qe=_e,Qe.setIndex(Vt)),N.isMesh)B.wireframe===!0?(de.setLineWidth(B.wireframeLinewidth*ke()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(N.isLine){let Fe=B.linewidth;Fe===void 0&&(Fe=1),de.setLineWidth(Fe*ke()),N.isLineSegments?Qe.setMode(P.LINES):N.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else N.isPoints?Qe.setMode(P.POINTS):N.isSprite&&Qe.setMode(P.TRIANGLES);if(N.isBatchedMesh)Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Qe.renderInstances(tt,ot,N.count);else if(O.isInstancedBufferGeometry){const Fe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,xs=Math.min(O.instanceCount,Fe);Qe.renderInstances(tt,ot,xs)}else Qe.render(tt,ot)};function Ze(x,I,O){x.transparent===!0&&x.side===jt&&x.forceSinglePass===!1?(x.side=yt,x.needsUpdate=!0,Li(x,I,O),x.side=_n,x.needsUpdate=!0,Li(x,I,O),x.side=jt):Li(x,I,O)}this.compile=function(x,I,O=null){O===null&&(O=x),h=xe.get(O),h.init(),M.push(h),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),x!==O&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(E._useLegacyLights);const B=new Set;return x.traverse(function(N){const le=N.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const Ee=le[fe];Ze(Ee,O,N),B.add(Ee)}else Ze(le,O,N),B.add(le)}),M.pop(),h=null,B},this.compileAsync=function(x,I,O=null){const B=this.compile(x,I,O);return new Promise(N=>{function le(){if(B.forEach(function(fe){De.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){N(x);return}setTimeout(le,10)}ge.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ye=null;function at(x){Ye&&Ye(x)}function gt(){vt.stop()}function Ke(){vt.start()}const vt=new Bo;vt.setAnimationLoop(at),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(x){Ye=x,Oe.setAnimationLoop(x),x===null?vt.stop():vt.start()},Oe.addEventListener("sessionstart",gt),Oe.addEventListener("sessionend",Ke),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(I),I=Oe.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,I,b),h=xe.get(x,M.length),h.init(),M.push(h),pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,Y=Pe.init(this.clippingPlanes,oe),g=ce.get(x,u.length),g.init(),u.push(g),Ht(x,I,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,Y===!0&&Pe.beginShadows();const O=h.state.shadowsArray;if(K.render(O,x,I),Y===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(g,x),h.setupLights(E._useLegacyLights),I.isArrayCamera){const B=I.cameras;for(let N=0,le=B.length;N<le;N++){const fe=B[N];Tr(g,x,fe,fe.viewport)}}else Tr(g,x,I);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),x.isScene===!0&&x.onAfterRender(E,x,I),Le.resetDefaultState(),q=-1,T=null,M.pop(),M.length>0?h=M[M.length-1]:h=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Ht(x,I,O,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||k.intersectsSprite(x)){B&&Ce.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pe);const fe=Q.update(x),Ee=x.material;Ee.visible&&g.push(x,fe,Ee,O,Ce.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||k.intersectsObject(x))){const fe=Q.update(x),Ee=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ce.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ce.copy(fe.boundingSphere.center)),Ce.applyMatrix4(x.matrixWorld).applyMatrix4(pe)),Array.isArray(Ee)){const ye=fe.groups;for(let Ne=0,be=ye.length;Ne<be;Ne++){const Re=ye[Ne],tt=Ee[Re.materialIndex];tt&&tt.visible&&g.push(x,fe,tt,O,Ce.z,Re)}}else Ee.visible&&g.push(x,fe,Ee,O,Ce.z,null)}}const le=x.children;for(let fe=0,Ee=le.length;fe<Ee;fe++)Ht(le[fe],I,O,B)}function Tr(x,I,O,B){const N=x.opaque,le=x.transmissive,fe=x.transparent;h.setupLightsView(O),Y===!0&&Pe.setGlobalState(E.clippingPlanes,O),le.length>0&&Zo(N,le,I,O),B&&de.viewport(A.copy(B)),N.length>0&&Ci(N,I,O),le.length>0&&Ci(le,I,O),fe.length>0&&Ci(fe,I,O),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Zo(x,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const le=Ae.isWebGL2;me===null&&(me=new zn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?yi:mn,minFilter:Ti,samples:le?4:0})),E.getDrawingBufferSize(we),le?me.setSize(we.x,we.y):me.setSize(pr(we.x),pr(we.y));const fe=E.getRenderTarget();E.setRenderTarget(me),E.getClearColor(J),L=E.getClearAlpha(),L<1&&E.setClearColor(16777215,.5),E.clear();const Ee=E.toneMapping;E.toneMapping=pn,Ci(x,O,B),y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me);let ye=!1;for(let Ne=0,be=I.length;Ne<be;Ne++){const Re=I[Ne],tt=Re.object,bt=Re.geometry,ot=Re.material,Vt=Re.group;if(ot.side===jt&&tt.layers.test(B.layers)){const Qe=ot.side;ot.side=yt,ot.needsUpdate=!0,yr(tt,O,B,bt,ot,Vt),ot.side=Qe,ot.needsUpdate=!0,ye=!0}}ye===!0&&(y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me)),E.setRenderTarget(fe),E.setClearColor(J,L),E.toneMapping=Ee}function Ci(x,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){const fe=x[N],Ee=fe.object,ye=fe.geometry,Ne=B===null?fe.material:B,be=fe.group;Ee.layers.test(O.layers)&&yr(Ee,I,O,ye,Ne,be)}}function yr(x,I,O,B,N,le){x.onBeforeRender(E,I,O,B,N,le),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(E,I,O,B,x,le),N.transparent===!0&&N.side===jt&&N.forceSinglePass===!1?(N.side=yt,N.needsUpdate=!0,E.renderBufferDirect(O,I,B,N,x,le),N.side=_n,N.needsUpdate=!0,E.renderBufferDirect(O,I,B,N,x,le),N.side=jt):E.renderBufferDirect(O,I,B,N,x,le),x.onAfterRender(E,I,O,B,N,le)}function Li(x,I,O){I.isScene!==!0&&(I=Se);const B=De.get(x),N=h.state.lights,le=h.state.shadowsArray,fe=N.state.version,Ee=he.getParameters(x,N.state,le,I,O),ye=he.getProgramCacheKey(Ee);let Ne=B.programs;B.environment=x.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(x.isMeshStandardMaterial?U:v).get(x.envMap||B.environment),Ne===void 0&&(x.addEventListener("dispose",re),Ne=new Map,B.programs=Ne);let be=Ne.get(ye);if(be!==void 0){if(B.currentProgram===be&&B.lightsStateVersion===fe)return Ar(x,Ee),be}else Ee.uniforms=he.getUniforms(x),x.onBuild(O,Ee,E),x.onBeforeCompile(Ee,E),be=he.acquireProgram(Ee,ye),Ne.set(ye,be),B.uniforms=Ee.uniforms;const Re=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),Ar(x,Ee),B.needsLights=$o(x),B.lightsStateVersion=fe,B.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=be,B.uniformsList=null,be}function Mr(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=rs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Ar(x,I){const O=De.get(x);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Yo(x,I,O,B,N){I.isScene!==!0&&(I=Se),y.resetTextureUnits();const le=I.fog,fe=B.isMeshStandardMaterial?I.environment:null,Ee=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:en,ye=(B.isMeshStandardMaterial?U:v).get(B.envMap||fe),Ne=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,be=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!O.morphAttributes.position,tt=!!O.morphAttributes.normal,bt=!!O.morphAttributes.color;let ot=pn;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ot=E.toneMapping);const Vt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qe=Vt!==void 0?Vt.length:0,Fe=De.get(B),xs=h.state.lights;if(Y===!0&&(oe===!0||x!==T)){const Ct=x===T&&B.id===q;Pe.setState(B,x,Ct)}let et=!1;B.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==xs.state.version||Fe.outputColorSpace!==Ee||N.isBatchedMesh&&Fe.batching===!1||!N.isBatchedMesh&&Fe.batching===!0||N.isInstancedMesh&&Fe.instancing===!1||!N.isInstancedMesh&&Fe.instancing===!0||N.isSkinnedMesh&&Fe.skinning===!1||!N.isSkinnedMesh&&Fe.skinning===!0||N.isInstancedMesh&&Fe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Fe.instancingColor===!1&&N.instanceColor!==null||Fe.envMap!==ye||B.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Pe.numPlanes||Fe.numIntersection!==Pe.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==be||Fe.morphTargets!==Re||Fe.morphNormals!==tt||Fe.morphColors!==bt||Fe.toneMapping!==ot||Ae.isWebGL2===!0&&Fe.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Fe.__version=B.version);let En=Fe.currentProgram;et===!0&&(En=Li(B,I,N));let br=!1,fi=!1,Ss=!1;const ft=En.getUniforms(),xn=Fe.uniforms;if(de.useProgram(En.program)&&(br=!0,fi=!0,Ss=!0),B.id!==q&&(q=B.id,fi=!0),br||T!==x){ft.setValue(P,"projectionMatrix",x.projectionMatrix),ft.setValue(P,"viewMatrix",x.matrixWorldInverse);const Ct=ft.map.cameraPosition;Ct!==void 0&&Ct.setValue(P,Ce.setFromMatrixPosition(x.matrixWorld)),Ae.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ft.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),T!==x&&(T=x,fi=!0,Ss=!0)}if(N.isSkinnedMesh){ft.setOptional(P,N,"bindMatrix"),ft.setOptional(P,N,"bindMatrixInverse");const Ct=N.skeleton;Ct&&(Ae.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),ft.setValue(P,"boneTexture",Ct.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(ft.setOptional(P,N,"batchingTexture"),ft.setValue(P,"batchingTexture",N._matricesTexture,y));const Ts=O.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0&&Ae.isWebGL2===!0)&&ze.update(N,O,En),(fi||Fe.receiveShadow!==N.receiveShadow)&&(Fe.receiveShadow=N.receiveShadow,ft.setValue(P,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(xn.envMap.value=ye,xn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),fi&&(ft.setValue(P,"toneMappingExposure",E.toneMappingExposure),Fe.needsLights&&Ko(xn,Ss),le&&B.fog===!0&&ae.refreshFogUniforms(xn,le),ae.refreshMaterialUniforms(xn,B,V,H,me),rs.upload(P,Mr(Fe),xn,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(rs.upload(P,Mr(Fe),xn,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ft.setValue(P,"center",N.center),ft.setValue(P,"modelViewMatrix",N.modelViewMatrix),ft.setValue(P,"normalMatrix",N.normalMatrix),ft.setValue(P,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ct=B.uniformsGroups;for(let ys=0,jo=Ct.length;ys<jo;ys++)if(Ae.isWebGL2){const wr=Ct[ys];Ge.update(wr,En),Ge.bind(wr,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function Ko(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function $o(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(x,I,O){De.get(x.texture).__webglTexture=I,De.get(x.depthTexture).__webglTexture=O;const B=De.get(x);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,I){const O=De.get(x);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,O=0){b=x,C=I,w=O;let B=!0,N=null,le=!1,fe=!1;if(x){const ye=De.get(x);ye.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(P.FRAMEBUFFER,null),B=!1):ye.__webglFramebuffer===void 0?y.setupRenderTarget(x):ye.__hasExternalTextures&&y.rebindTextures(x,De.get(x.texture).__webglTexture,De.get(x.depthTexture).__webglTexture);const Ne=x.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const be=De.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(be[I])?N=be[I][O]:N=be[I],le=!0):Ae.isWebGL2&&x.samples>0&&y.useMultisampledRTT(x)===!1?N=De.get(x).__webglMultisampledFramebuffer:Array.isArray(be)?N=be[O]:N=be,A.copy(x.viewport),z.copy(x.scissor),G=x.scissorTest}else A.copy(Z).multiplyScalar(V).floor(),z.copy(ee).multiplyScalar(V).floor(),G=te;if(de.bindFramebuffer(P.FRAMEBUFFER,N)&&Ae.drawBuffers&&B&&de.drawBuffers(x,N),de.viewport(A),de.scissor(z),de.setScissorTest(G),le){const ye=De.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,O)}else if(fe){const ye=De.get(x.texture),Ne=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,Ne)}q=-1},this.readRenderTargetPixels=function(x,I,O,B,N,le,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=De.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Ee=Ee[fe]),Ee){de.bindFramebuffer(P.FRAMEBUFFER,Ee);try{const ye=x.texture,Ne=ye.format,be=ye.type;if(Ne!==kt&&ue.convert(Ne)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=be===yi&&(ge.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ge.has("EXT_color_buffer_float"));if(be!==mn&&ue.convert(be)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===dn&&(Ae.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&O>=0&&O<=x.height-N&&P.readPixels(I,O,B,N,ue.convert(Ne),ue.convert(be),le)}finally{const ye=b!==null?De.get(b).__webglFramebuffer:null;de.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(x,I,O=0){const B=Math.pow(2,-O),N=Math.floor(I.image.width*B),le=Math.floor(I.image.height*B);y.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,x.x,x.y,N,le),de.unbindTexture()},this.copyTextureToTexture=function(x,I,O,B=0){const N=I.image.width,le=I.image.height,fe=ue.convert(O.format),Ee=ue.convert(O.type);y.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,x.x,x.y,N,le,fe,Ee,I.image.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,x.x,x.y,I.mipmaps[0].width,I.mipmaps[0].height,fe,I.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,B,x.x,x.y,fe,Ee,I.image),B===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(x,I,O,B,N=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,fe=x.max.y-x.min.y+1,Ee=x.max.z-x.min.z+1,ye=ue.convert(B.format),Ne=ue.convert(B.type);let be;if(B.isData3DTexture)y.setTexture3D(B,0),be=P.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)y.setTexture2DArray(B,0),be=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const Re=P.getParameter(P.UNPACK_ROW_LENGTH),tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),bt=P.getParameter(P.UNPACK_SKIP_PIXELS),ot=P.getParameter(P.UNPACK_SKIP_ROWS),Vt=P.getParameter(P.UNPACK_SKIP_IMAGES),Qe=O.isCompressedTexture?O.mipmaps[N]:O.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Qe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,x.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,x.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?P.texSubImage3D(be,N,I.x,I.y,I.z,le,fe,Ee,ye,Ne,Qe.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(be,N,I.x,I.y,I.z,le,fe,Ee,ye,Qe.data)):P.texSubImage3D(be,N,I.x,I.y,I.z,le,fe,Ee,ye,Ne,Qe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Re),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,bt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt),N===0&&B.generateMipmaps&&P.generateMipmap(be),de.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),de.unbindTexture()},this.resetState=function(){C=0,w=0,b=null,de.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Er?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===_s?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Pn:To}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pn?dt:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Np extends Xo{}Np.prototype.isWebGL1Renderer=!0;class Up extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class qo extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ja=new ut,_r=new Ro,is=new gs,ss=new F;class Op extends At{constructor(e=new nn,t=new qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),is.radius+=r,e.ray.intersectsSphere(is)===!1)return;Ja.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Ja);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,g=m;_<g;_++){const h=c.getX(_);ss.fromBufferAttribute(p,h),eo(ss,h,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let _=f,g=m;_<g;_++)ss.fromBufferAttribute(p,_),eo(ss,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function eo(n,e,t,i,s,r,o){const a=_r.distanceSqToPoint(n);if(a<t){const l=new F;_r.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Fp extends Mt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=to(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=to();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function to(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gr);function zp(){const n=document.getElementById("three-bg");if(!n)return;const e=new Up,t=new Dt(60,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=50;const i=250,s=new Float32Array(i*3),r=new Float32Array(i*3),o=[new He("#1d7d78"),new He("#2563eb"),new He("#647581"),new He("#b45309")];for(let u=0;u<i;u++){s[u*3]=(Math.random()-.5)*100,s[u*3+1]=(Math.random()-.5)*60,s[u*3+2]=(Math.random()-.5)*40;const M=o[Math.floor(Math.random()*o.length)];r[u*3]=M.r,r[u*3+1]=M.g,r[u*3+2]=M.b}const a=new nn;a.setAttribute("position",new Nt(s,3)),a.setAttribute("color",new Nt(r,3));const l=document.createElement("canvas");l.width=l.height=64;const c=l.getContext("2d"),d=c.createRadialGradient(32,32,0,32,32,32);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.4,"rgba(255,255,255,0.6)"),d.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=d,c.fillRect(0,0,64,64);const p=new Fp(l),f=new qo({size:1.2,map:p,vertexColors:!0,transparent:!0,opacity:.65,depthWrite:!1,blending:Ln}),m=new Op(a,f);e.add(m);const _=new Xo({alpha:!0,antialias:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(0,0),n.appendChild(_.domElement);const g=new Bp;function h(){const u=g.getElapsedTime();m.rotation.y=u*.03,m.rotation.x=Math.sin(u*.2)*.05,window.__mx!==void 0&&(m.rotation.y+=window.__mx*8e-4),_.render(e,t),requestAnimationFrame(h)}h(),window.addEventListener("mousemove",u=>{window.__mx=(u.clientX/window.innerWidth-.5)*2}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),_.setSize(window.innerWidth,window.innerHeight)}),window.__three={scene:e,camera:t,renderer:_,points:m}}const no={GEO:"讓生成式 AI 更容易理解、摘要與引用網站內容的優化方法。","GEO 自評":"本報表依 5 項 KPI（主題、招生問答、證據、結構、技術）對 itm.tcu.edu.tw 原始碼評分；非 Google 官方分數。","JSON-LD":"以 JSON 格式標記結構化資料的標準；搜尋引擎靠它建立 entity graph。",canonical:"告訴搜尋引擎頁面正式網址，避免重複頁面混淆。",hreflang:"標記頁面語系／地區變體，避免多語系被當重複。","Open Graph":"網站分享到社群平台時使用的標題、說明與圖片（og:title/og:description/og:image）。","YouTube facade":"先用靜圖代替 iframe，點擊後才載入 player，省頻寬與 LCP。",LCP:"Largest Contentful Paint，行動版目標 < 2.5s。",轉換追蹤:"記錄電話、Email、表單、招生按鈕等重要行動。",過期:"頁面內容的學年度或年份標記早於 cutoff（本期為 2022 AD），仍出現在 GSC Top pages 但已不具時效性。","Wayback Machine":"archive.org 提供的網頁歷史快照資料庫，可比對 HTML 在不同時間點的差異。",P0:"P0 = 本週必做；P1 = 1 個月內；P2 = 1 季內；P3 = 例行維護。"};function kp(){const n=Object.keys(no).sort((d,p)=>p.length-d.length),e=d=>d.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),t=new RegExp("("+n.map(e).join("|")+")(?![^<]*>)","g");function i(d){const p=new Set(["SCRIPT","STYLE","CODE","PRE","TEXTAREA"]);function f(g){for(;g&&g!==d;){if(p.has(g.tagName)||g.classList&&g.classList.contains("gloss"))return!0;g=g.parentNode}return!1}const m=document.createTreeWalker(d,NodeFilter.SHOW_TEXT,{acceptNode(g){return!g.nodeValue.trim()||f(g.parentNode)||!t.test(g.nodeValue)?NodeFilter.FILTER_REJECT:(t.lastIndex=0,NodeFilter.FILTER_ACCEPT)}}),_=[];for(;m.nextNode();)_.push(m.currentNode);_.forEach(g=>{const h=g.nodeValue,u=document.createDocumentFragment();let M=0;t.lastIndex=0;let E;for(;E=t.exec(h);){u.appendChild(document.createTextNode(h.slice(M,E.index)));const S=document.createElement("span");S.className="gloss",S.setAttribute("data-term",E[1]),S.textContent=E[1],u.appendChild(S),M=E.index+E[1].length}M>0&&(u.appendChild(document.createTextNode(h.slice(M))),g.parentNode.replaceChild(u,g))})}function s(d,p){const f=p.getBoundingClientRect(),m=window.scrollY||window.pageYOffset,_=window.scrollX||window.pageXOffset;d.style.left=Math.min(window.innerWidth-320,Math.max(8,f.left+_))+"px";let g=f.top+m-d.offsetHeight-12;g<m+8?(g=f.bottom+m+12,d.classList.add("below")):d.classList.remove("below"),d.style.top=g+"px"}let r=null,o=null,a=null;function l(d){const p=no[d.getAttribute("data-term")];r||(r=document.createElement("div"),r.className="gloss-tip",document.body.appendChild(r)),r.innerHTML="<strong>"+d.getAttribute("data-term")+"</strong>"+p,r.style.display="block",requestAnimationFrame(()=>s(r,d)),setTimeout(()=>r&&r.classList.add("show"),10)}function c(){a&&(clearTimeout(a),a=null),r&&(r.classList.remove("show"),setTimeout(()=>{r&&(r.style.display="none")},200))}document.addEventListener("mouseover",d=>{const p=d.target.closest&&d.target.closest(".gloss");!p||p===o||(a&&clearTimeout(a),o=p,a=setTimeout(()=>l(p),1e3))}),document.addEventListener("mouseout",d=>{const p=d.target.closest&&d.target.closest(".gloss");p&&p===o&&setTimeout(()=>{o===p&&c()},100)}),document.addEventListener("click",d=>{const p=d.target.closest&&d.target.closest(".gloss");p&&(a&&clearTimeout(a),l(p),setTimeout(c,4e3))}),window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("resize",c),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>i(document.body)):i(document.body)}function Hp(){const n=document.querySelector(".print");n&&n.addEventListener("click",()=>{setTimeout(()=>window.print(),100)})}function io(){zp(),kp(),Hp(),console.log("[TCU WebInsight v49] ready — Three.js + glossary")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",io):io();

// After bundle runs
console.log("AFTER BUNDLE:");
console.log("  window.setView:", typeof window.setView);
console.log("  window.init:", typeof window.init);
console.log("  window.draw:", typeof window.draw);
console.log("  window.WEBINSIGHT:", typeof window.WEBINSIGHT);
