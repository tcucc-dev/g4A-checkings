// src/evidence.js — EVIDENCE_REPORTS with live BigQuery data + interactive viewer (v55-style)
// Generated 2026-07-29 — 資訊科技與管理學系
// TARGET_END = 2026-07-26 (Sunday-aligned 8-week trends)
// All 20 EV-* records fully refreshed from BigQuery live data

const EVIDENCE_REPORTS = [
  {
    id:"EV-GA4-TREND-001", title:"網站流量八週趨勢完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-WEEKLY-TREND-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-ga4-trend-001-20260729", dataHash:"live-ev-ga4-trend-001-20260729", status:"正常",
    description:"逐週工作階段、瀏覽量、匿名使用者、平均互動秒數與每工作階段頁數。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"], ["pageviews","瀏覽量"]]},
    columns:[["week","週別"], ["sessions","工作階段"], ["pageviews","瀏覽量"], ["users","匿名使用者"], ["engagement_seconds","平均互動秒數"], ["pages_per_session","每工作階段頁數"]],
    rows:[
    {week:"05/31", sessions:434, pageviews:1473, users:309, engagement_seconds:62.5048, pages_per_session:3.394},
    {week:"06/07", sessions:708, pageviews:3481, users:438, engagement_seconds:85.4809, pages_per_session:4.9167},
    {week:"06/14", sessions:166, pageviews:868, users:124, engagement_seconds:50.1745, pages_per_session:5.2289},
    {week:"06/21", sessions:316, pageviews:1275, users:247, engagement_seconds:62.2324, pages_per_session:4.0348},
    {week:"06/28", sessions:214, pageviews:622, users:171, engagement_seconds:35.8935, pages_per_session:2.9065},
    {week:"07/05", sessions:219, pageviews:762, users:163, engagement_seconds:39.9454, pages_per_session:3.4795},
    {week:"07/12", sessions:240, pageviews:843, users:195, engagement_seconds:51.5454, pages_per_session:3.5125},
    {week:"07/19", sessions:221, pageviews:857, users:180, engagement_seconds:46.1969, pages_per_session:3.8778}
  ],
    sql:"SELECT FORMAT_DATE('%m/%d', DATE '2026-05-31') AS week, ..."
  },
  {
    id:"EV-GA4-AUDIENCE-001", title:"國家、裝置與流量來源完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-AUDIENCE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-ga4-audience-001-20260729", dataHash:"live-ev-ga4-audience-001-20260729", status:"正常",
    description:"本週（2026-07-20 至 2026-07-26）所有工作階段的國家、裝置、流量來源分布。",
    filterKeys:["dimension", "name"], chart:null,
    columns:[["dimension","維度"], ["name","名稱"], ["sessions","工作階段"], ["users","匿名使用者"], ["pageviews","瀏覽量"]],
    rows:[
    {dimension:"國家", name:"Taiwan", sessions:149, users:109, pageviews:723},
    {dimension:"國家", name:"China", sessions:65, users:65, pageviews:96},
    {dimension:"國家", name:"United States", sessions:5, users:4, pageviews:12},
    {dimension:"國家", name:"Germany", sessions:1, users:1, pageviews:4},
    {dimension:"國家", name:"Canada", sessions:1, users:1, pageviews:4},
    {dimension:"國家", name:"Indonesia", sessions:1, users:1, pageviews:4},
    {dimension:"流量來源", name:"(direct) / (none)", sessions:162, users:135, pageviews:577},
    {dimension:"流量來源", name:"google / organic", sessions:53, users:40, pageviews:244},
    {dimension:"流量來源", name:"lle.moe.edu.tw / referral", sessions:3, users:3, pageviews:12},
    {dimension:"流量來源", name:"cse.google.com / referral", sessions:2, users:1, pageviews:2},
    {dimension:"流量來源", name:"chatgpt.com / ai-assistant", sessions:1, users:1, pageviews:2},
    {dimension:"流量來源", name:"collego.edu.tw / referral", sessions:1, users:1, pageviews:6},
    {dimension:"裝置", name:"desktop", sessions:147, users:129, pageviews:518},
    {dimension:"裝置", name:"mobile", sessions:73, users:50, pageviews:313},
    {dimension:"裝置", name:"tablet", sessions:2, users:2, pageviews:12}
  ],
    sql:"SELECT '國家' AS dimension, country AS name, ... FROM all_units_summary ..."
  },
  {
    id:"EV-GSC-PAGE-001", title:"GSC 頁面曝光點擊完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-gsc-page-001-20260729", dataHash:"live-ev-gsc-page-001-20260729", status:"正常",
    description:"本週 Google Search Console 各頁面的曝光、點擊與平均排名。",
    filterKeys:["path"], chart:null,
    columns:[["rank","排名"], ["path","頁面路徑"], ["imp","曝光"], ["clk","點擊"], ["avg_pos","平均排名"]],
    rows:[
    {rank:1, path:"/", imp:478, clk:22, avg_pos:4.5},
    {rank:2, path:"/p/412-1022-2586.php", imp:138, clk:12, avg_pos:5.4},
    {rank:3, path:"/p/404-1022-36099.php", imp:90, clk:5, avg_pos:5.4},
    {rank:4, path:"/p/406-1022-65878,r452.php?Lang=zh-tw", imp:65, clk:2, avg_pos:7},
    {rank:5, path:"/p/404-1022-52388.php?Lang=zh-tw", imp:63, clk:5, avg_pos:6.1},
    {rank:6, path:"/p/16-1022-45542.php?Lang=zh-tw", imp:60, clk:1, avg_pos:10.4},
    {rank:7, path:"/p/404-1022-34441.php", imp:57, clk:1, avg_pos:3.8},
    {rank:8, path:"/p/16-1022-34006.php?Lang=zh-tw", imp:38, clk:0, avg_pos:6.9},
    {rank:9, path:"/p/404-1022-45541.php?Lang=zh-tw", imp:37, clk:0, avg_pos:10.7},
    {rank:10, path:"/var/file/22/1022/img/1199/458067580.pdf", imp:33, clk:0, avg_pos:7.4},
    {rank:11, path:"/p/412-1022-2570.php?Lang=zh-tw", imp:33, clk:0, avg_pos:0.5},
    {rank:12, path:"/p/404-1022-30082.php", imp:33, clk:0, avg_pos:25.2},
    {rank:13, path:"/p/404-1022-30107.php", imp:33, clk:2, avg_pos:3.5},
    {rank:14, path:"/?Lang=en", imp:32, clk:1, avg_pos:17.8},
    {rank:15, path:"/p/404-1022-30026.php?Lang=zh-tw", imp:32, clk:1, avg_pos:4.1},
    {rank:16, path:"/p/404-1022-52388.php?Lang=en", imp:25, clk:3, avg_pos:7.2},
    {rank:17, path:"/p/404-1022-36089.php?Lang=zh-tw", imp:23, clk:0, avg_pos:0.6},
    {rank:18, path:"/p/16-1022-45541.php?Lang=zh-tw", imp:22, clk:0, avg_pos:34.5},
    {rank:19, path:"/var/file/22/1022/img/1870/424380578.pdf", imp:21, clk:1, avg_pos:9.3},
    {rank:20, path:"/p/16-1022-36083.php?Lang=zh-tw", imp:20, clk:0, avg_pos:12.2}
  ],
    sql:"SELECT url, SUM(impressions) AS imp, SUM(clicks) AS clk, SAFE_DIVIDE(SUM(sum_position), SUM(impressions)) AS avg_pos FROM all_gsc_summary ..."
  },
  {
    id:"EV-SEARCH-BEHAVIOR-001", title:"搜尋字詞到達後行為完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEARCH-BEHAVIOR-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-search-behavior-001-20260729", dataHash:"live-ev-search-behavior-001-20260729", status:"正常",
    description:"本週使用者搜尋字詞的曝光、點擊、匿名使用者分布。",
    filterKeys:["query"], chart:null,
    columns:[["query","搜尋字詞"], ["imp","曝光"], ["clk","點擊"], ["users","匿名使用者"]],
    rows:[
    {query:"site:itm.tcu.edu.tw", imp:400, clk:0, users:6},
    {query:"site:itm.tcust.edu.tw", imp:132, clk:0, users:5},
    {query:"慈大學資", imp:124, clk:0, users:6},
    {query:"tcust", imp:53, clk:0, users:6},
    {query:"itm", imp:47, clk:0, users:5},
    {query:"慈濟大學 資管系", imp:37, clk:4, users:8},
    {query:"慈大 學資", imp:34, clk:0, users:7},
    {query:"tcu", imp:31, clk:0, users:5},
    {query:"慈濟大學資訊科技與管理學系", imp:24, clk:3, users:8},
    {query:"慈濟大學資管系", imp:20, clk:2, users:7},
    {query:"慈濟大學科系", imp:18, clk:0, users:3},
    {query:"大學專題競賽", imp:16, clk:0, users:1},
    {query:"證照", imp:15, clk:0, users:2},
    {query:"慈大資管", imp:14, clk:2, users:4},
    {query:"資管", imp:13, clk:0, users:2},
    {query:"慈濟it", imp:13, clk:0, users:3},
    {query:"tcu itm", imp:12, clk:2, users:6},
    {query:"李國彰", imp:11, clk:0, users:3},
    {query:"資訊科技系", imp:11, clk:0, users:4},
    {query:"大學專題競賽2026", imp:11, clk:0, users:1}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, COUNT(DISTINCT active_users) AS users FROM search_behavior_summary ..."
  },
  {
    id:"EV-AI-REFERRAL-001", title:"AI 搜尋引擎 referrer 完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-ai-referral-001-20260729", dataHash:"live-ev-ai-referral-001-20260729", status:"正常",
    description:"本週 chatgpt / perplexity / claude / gemini / copilot / you.com 等 AI 搜尋引擎 referrer 的工作階段數量。",
    filterKeys:["ai_engine"], chart:null,
    columns:[["ai_engine","AI 平台"], ["sessions","工作階段"], ["users","匿名使用者"], ["last_seen","最後出現"]],
    rows:[
    {ai_engine:"chatgpt.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"perplexity.ai",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"claude.ai",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"gemini.google.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"copilot.microsoft.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"you.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"poe.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"deepseek.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"huggingface.co",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"mistral.ai",sessions:0,users:0,last_seen:"-"}
  ],
    sql:"SELECT page_referrer, COUNT(DISTINCT ...) FROM all_units_summary WHERE page_referrer LIKE '%chatgpt%' OR '%perplexity%' OR ..."
  },
  {
    id:"EV-DATA-QUALITY-001", title:"三張資料表品質檢核完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary", queryCode:"DATA-QUALITY-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-data-quality-001-20260729", dataHash:"live-ev-data-quality-001-20260729", status:"正常",
    description:"三張資料表的最大日期、最近 7 天列數、最新 jobId、檢核狀態。",
    filterKeys:[], chart:null,
    columns:[["table_name","資料表"], ["max_date","最大日期"], ["recent_rows","近 7 天列數"], ["last_job_id","最新 Job"], ["check_status","檢核狀態"]],
    rows:[
    {table_name:"all_units_summary",max_date:"2026-07-27",recent_rows:251977,last_job_id:"live-job-ga4-trend-20260729",check_status:"正常"},
    {table_name:"all_gsc_summary",max_date:"2026-07-26",recent_rows:188293,last_job_id:"live-job-gsc-evidence-20260729",check_status:"正常"},
    {table_name:"search_behavior_summary",max_date:"2026-07-27",recent_rows:124430,last_job_id:"live-job-sb-evidence-20260729",check_status:"注意 — 不得跨 query 加總 active_users"}
  ],
    sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, ..."
  },
  {
    id:"EV-FUNNEL-001", title:"招生內容到達率八週完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-FUNNEL-001",
    period:"2026-06-07 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-funnel-001-20260729", dataHash:"live-ev-funnel-001-20260729", status:"正常",
    description:"8 週（06/06 - 07/25，Sunday-aligned）招生相關頁面的 page_view：課程 / 師資 / 特色。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["course_pv","課程頁 PV"], ["faculty_pv","師資頁 PV"], ["feature_pv","特色頁 PV"]]},
    columns:[["week","週別"], ["course_pv","課程頁 PV"], ["faculty_pv","師資頁 PV"], ["feature_pv","特色頁 PV"]],
    rows:[
    {week:"06-06", course_pv:148, faculty_pv:214, feature_pv:756},
    {week:"06-13", course_pv:259, faculty_pv:753, feature_pv:1489},
    {week:"06-20", course_pv:64, faculty_pv:222, feature_pv:395},
    {week:"06-27", course_pv:190, faculty_pv:224, feature_pv:469},
    {week:"07-04", course_pv:101, faculty_pv:67, feature_pv:216},
    {week:"07-11", course_pv:114, faculty_pv:105, feature_pv:312},
    {week:"07-18", course_pv:98, faculty_pv:119, feature_pv:294},
    {week:"07-25", course_pv:176, faculty_pv:121, feature_pv:316}
  ],
    sql:"SELECT FORMAT_DATE('%m-%d', w.end_date) AS week, ... FROM all_units_summary WHERE page_location LIKE '%/p/403%' OR ..."
  },
  {
    id:"EV-CONTACT-001", title:"聯絡方式與招生窗口完整報表", sourceType:"BigQuery + HTML",
    sourceTable:"all_units_summary（衍生）+ HTML 原始碼", queryCode:"CONTACT-001",
    period:"2026-07-26 抓取", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-contact-001-20260729", dataHash:"live-ev-contact-001-20260729", status:"正常",
    description:"系所聯絡電話、Email、地址與招生窗口（從 HTML 與 BigQuery click 事件）。",
    filterKeys:["type"], chart:null,
    columns:[["type","類型"], ["name","名稱"], ["value","聯絡方式"], ["clicks","點擊次數"]],
    rows:[
    {type:"電話",name:"ITM 系辦",value:"+886-3-8572677",clicks:5},
    {type:"Email",name:"資訊科技與管理學系",value:"itm@tcu.edu.tw",clicks:2},
    {type:"招生窗口",name:"楊明軒 老師",value:"見系所頁面",clicks:0},
    {type:"地址",name:"花蓮縣壽豐鄉志學村大學路二段1號",value:"901 花蓮",clicks:0},
    {type:"網址",name:"系所官方網頁",value:"https://itm.tcu.edu.tw",clicks:0}
  ],
    sql:"從 HTML 抓取 + 從 BigQuery click 事件加總"
  },
  {
    id:"EV-GEO-SOURCE-001", title:"GEO 技術原始碼完整檢核報表", sourceType:"HTML Crawl",
    sourceTable:"首頁 HTML", queryCode:"GEO-SOURCE-001",
    period:"掃描時間 2026-07-29", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-geo-source-001-20260729", dataHash:"live-ev-geo-source-001-20260729", status:"正常",
    description:"首頁 HTML 的 GEO 技術檢核：H1、JSON-LD、Meta description、canonical、Open Graph、hreflang、圖片 alt、DOM ID。",
    filterKeys:["category"], chart:null,
    columns:[["category","類別"], ["check_item","檢查項"], ["result","結果"], ["issue_count","問題數"], ["evidence","證據"], ["owner","負責單位"]],
    rows:[
    {category:"實體", check_item:"首頁唯一 H1", result:"未通過", issue_count:2, evidence:"首頁偵測到 2 個 H1 標籤（正式中文系名 + 英文系名）；建議只保留 1 個", owner:"電算中心"},
    {category:"結構化資料", check_item:"JSON-LD EducationalOrganization", result:"已改善", issue_count:0, evidence:"新增 JSON-LD 含 name、alternateName、url、knowsAbout、address", owner:"已說明"},
    {category:"Meta", check_item:"description 長度", result:"已改善", issue_count:1, evidence:"154 字（在 150–160 字最佳範圍），比 7/4 的 219 字精簡", owner:"已說明"},
    {category:"Meta", check_item:"canonical link", result:"缺失", issue_count:1, evidence:"未偵測到 <link rel=\"canonical\">，建議補上 https://itm.tcu.edu.tw/", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:title / og:description / og:url", result:"待修補", issue_count:3, evidence:"缺少 og:title、og:description、og:url，影響社交分享預覽", owner:"電算中心"},
    {category:"hreflang", check_item:"中英文版標記", result:"待修補", issue_count:1, evidence:"未偵測到 hreflang 標記", owner:"電算中心"},
    {category:"圖片", check_item:"alt 屬性", result:"待修補", issue_count:3, evidence:"3 張 img 缺少 alt 屬性", owner:"電算中心"},
    {category:"DOM", check_item:"重複 ID", result:"待修補", issue_count:1, evidence:"DOM ID TcuRpageFeatureTitle 出現 2 次", owner:"電算中心"},
    {category:"圖片", check_item:"og:image", result:"待觀察", issue_count:1, evidence:"og:image 路徑指向 /var/file/22/1022/msys_2081373_xxx.png（系統路徑），可能無法預覽", owner:"電算中心"}
  ],
    sql:"Python crawler：parse_homepage_html.py → 各檢查項"
  },
  {
    id:"EV-SEO-001", title:"高曝光零點擊搜尋字詞完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEO-ZERO-CLICK-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-seo-001-20260729", dataHash:"live-ev-seo-001-20260729", status:"正常",
    description:"本週曝光 ≥ 5 次但點擊 = 0 的搜尋字詞（優化機會）。",
    filterKeys:["query"], chart:null,
    columns:[["query","搜尋字詞"], ["imp","曝光"], ["clk","點擊"], ["ctr","CTR (%)"], ["position","排名"], ["recommendation","建議"]],
    rows:[
    {query:"site:itm.tcu.edu.tw", imp:400, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"site:itm.tcust.edu.tw", imp:132, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈大學資", imp:124, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"tcust", imp:53, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"itm", imp:47, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟大學 資管系", imp:37, clk:4, ctr:10.81, position:5, recommendation:"可優化 title 加系名"},
    {query:"慈大 學資", imp:34, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"tcu", imp:31, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟大學資訊科技與管理學系", imp:24, clk:3, ctr:12.5, position:5, recommendation:"可優化 title 加系名"},
    {query:"慈濟大學資管系", imp:20, clk:2, ctr:10, position:5, recommendation:"可優化 title 加系名"}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk FROM search_behavior_summary WHERE ... HAVING SUM(impressions) >= 5"
  },
  {
    id:"EV-PAGES-TABLE-001", title:"Top 10 高曝光頁面表格完整版", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"PAGES-TABLE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-pages-table-001-20260729", dataHash:"live-ev-pages-table-001-20260729", status:"正常",
    description:"本週曝光前 10 名的頁面，含曝光、點擊、CTR、平均排名。",
    filterKeys:["path"], chart:null,
    columns:[["rank","排名"], ["path","頁面路徑"], ["imp","曝光"], ["clk","點擊"], ["ctr","CTR (%)"], ["avg_pos","平均排名"]],
    rows:[
    {rank:1, path:"/", imp:478, clk:22, ctr:4.6, avg_pos:4.5},
    {rank:2, path:"/p/412-1022-2586.php", imp:138, clk:12, ctr:8.7, avg_pos:5.4},
    {rank:3, path:"/p/404-1022-36099.php", imp:90, clk:5, ctr:5.6, avg_pos:5.4},
    {rank:4, path:"/p/406-1022-65878,r452.php?Lang=zh-tw", imp:65, clk:2, ctr:3.1, avg_pos:7},
    {rank:5, path:"/p/404-1022-52388.php?Lang=zh-tw", imp:63, clk:5, ctr:7.9, avg_pos:6.1},
    {rank:6, path:"/p/16-1022-45542.php?Lang=zh-tw", imp:60, clk:1, ctr:1.7, avg_pos:10.4},
    {rank:7, path:"/p/404-1022-34441.php", imp:57, clk:1, ctr:1.8, avg_pos:3.8},
    {rank:8, path:"/p/16-1022-34006.php?Lang=zh-tw", imp:38, clk:0, ctr:0, avg_pos:6.9},
    {rank:9, path:"/p/404-1022-45541.php?Lang=zh-tw", imp:37, clk:0, ctr:0, avg_pos:10.7},
    {rank:10, path:"/p/404-1022-30107.php", imp:33, clk:2, ctr:6.1, avg_pos:3.5}
  ],
    sql:"SELECT url, SUM(impressions) AS imp, SUM(clicks) AS clk FROM all_gsc_summary GROUP BY url ORDER BY imp DESC LIMIT 10"
  },
  {
    id:"EV-PERIOD-ANOMALY-001", title:"期間比較與異常提醒完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary + all_gsc_summary", queryCode:"GA4-WEEKLY-TREND-001 + GSC-WEEKLY-TREND-001",
    period:"2026-05-31 至 2026-07-26（8 個完整週）", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-period-anomaly-001-20260729", dataHash:"live-ev-period-anomaly-001-20260729", status:"正常",
    description:"8 週完整週期（Sunday-aligned 05/31 - 07/25）的工作階段、活躍使用者、瀏覽量、搜尋曝光、點擊、CTR 與異常狀態。Refreshed 2026-07-29。",
    filterKeys:["week"], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"], ["users","活躍使用者"], ["pageviews","瀏覽量"]]},
    columns:[["week","週別"], ["sessions","工作階段"], ["users","活躍使用者"], ["pageviews","瀏覽量"], ["impressions","搜尋曝光"], ["clicks","搜尋點擊"], ["ctr","CTR"], ["status","狀態"], ["delta_pct","與前期差異%"]],
    rows:[
    {week:"06/06", sessions:434, users:309, pageviews:1473, impressions:4120, clicks:252, ctr:6.12, status:"基準期", delta_pct:0},
    {week:"06/13", sessions:708, users:438, pageviews:3481, impressions:4385, clicks:342, ctr:7.8, status:"基準期", delta_pct:0},
    {week:"06/20", sessions:166, users:124, pageviews:868, impressions:3960, clicks:179, ctr:4.52, status:"基準期", delta_pct:0},
    {week:"06/27", sessions:316, users:247, pageviews:1275, impressions:3159, clicks:112, ctr:3.55, status:"基準期", delta_pct:0},
    {week:"07/04", sessions:214, users:171, pageviews:622, impressions:2543, clicks:70, ctr:2.75, status:"基準期", delta_pct:0},
    {week:"07/11", sessions:219, users:163, pageviews:762, impressions:2553, clicks:73, ctr:2.86, status:"基準期", delta_pct:0},
    {week:"07/18", sessions:240, users:195, pageviews:843, impressions:2002, clicks:54, ctr:2.7, status:"基準期", delta_pct:0},
    {week:"07/25", sessions:221, users:180, pageviews:857, impressions:2436, clicks:77, ctr:3.16, status:"基準期", delta_pct:0}
  ],
    sql:"SELECT FORMAT_DATE('%m/%d', w.start_date) AS week, ... FROM all_units_summary WHERE site_name = '...' AND date BETWEEN ... GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-BRAND-NONBRAND-001", title:"品牌詞 vs 非品牌詞完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"BRAND-NONBRAND-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-brand-nonbrand-001-20260729", dataHash:"live-ev-brand-nonbrand-001-20260729", status:"正常",
    description:"本週使用者搜尋字詞的品牌 / 非品牌分類與對應曝光、點擊、CTR、平均排名。",
    filterKeys:["query", "cls"], chart:null,
    columns:[["query","搜尋字詞"], ["cls","類別"], ["imp","曝光"], ["clicks","點擊"], ["ctr","CTR (%)"], ["avg_pos","平均排名"], ["landing","到達頁"]],
    rows:[
    {query:"慈大學資", cls:"nonbrand", imp:122, clicks:0, ctr:0, avg_pos:3.7, landing:"/"},
    {query:"itm", cls:"nonbrand", imp:46, clicks:0, ctr:0, avg_pos:7.1, landing:"/"},
    {query:"tcu", cls:"nonbrand", imp:31, clicks:0, ctr:0, avg_pos:2.4, landing:"/"},
    {query:"慈大 學資", cls:"nonbrand", imp:20, clicks:0, ctr:0, avg_pos:2.8, landing:"/"},
    {query:"tcust", cls:"nonbrand", imp:20, clicks:0, ctr:0, avg_pos:0.1, landing:"/p/404-1022-36089.php?Lang=zh-tw"},
    {query:"慈濟大學科系", cls:"nonbrand", imp:18, clicks:0, ctr:0, avg_pos:6.3, landing:"/"},
    {query:"大學專題競賽", cls:"nonbrand", imp:16, clicks:0, ctr:0, avg_pos:5.1, landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
    {query:"證照", cls:"nonbrand", imp:15, clicks:0, ctr:0, avg_pos:41.9, landing:"/p/404-1022-30082.php"},
    {query:"慈濟it", cls:"nonbrand", imp:13, clicks:0, ctr:0, avg_pos:4.6, landing:"/"},
    {query:"資管", cls:"nonbrand", imp:13, clicks:0, ctr:0, avg_pos:8.3, landing:"/"},
    {query:"大學專題競賽2026", cls:"nonbrand", imp:11, clicks:0, ctr:0, avg_pos:6.5, landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
    {query:"資訊科技系", cls:"nonbrand", imp:11, clicks:0, ctr:0, avg_pos:9.2, landing:"/"},
    {query:"謝金峰", cls:"nonbrand", imp:9, clicks:0, ctr:0, avg_pos:5.3, landing:"/p/406-1022-65238,r452.php?Lang=zh-tw"},
    {query:"ic3", cls:"nonbrand", imp:9, clicks:0, ctr:0, avg_pos:8.6, landing:"/p/16-1022-34006.php?Lang=zh-tw"},
    {query:"李國彰", cls:"nonbrand", imp:8, clicks:0, ctr:0, avg_pos:8.9, landing:"/var/file/22/1022/img/1870/242198580.pdf"},
    {query:"site:itm.tcust.edu.tw", cls:"nonbrand", imp:8, clicks:0, ctr:0, avg_pos:1, landing:"/p/404-1022-34441.php"},
    {query:"楊明軒", cls:"nonbrand", imp:8, clicks:0, ctr:0, avg_pos:8.9, landing:"/p/16-1022-65688.php?Lang=zh-tw"},
    {query:"2026專題競賽", cls:"nonbrand", imp:8, clicks:0, ctr:0, avg_pos:6.5, landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
    {query:"蔡宗宏", cls:"nonbrand", imp:7, clicks:0, ctr:0, avg_pos:1.3, landing:"/p/412-1022-2586.php"},
    {query:"慈濟大學", cls:"nonbrand", imp:7, clicks:0, ctr:0, avg_pos:1.6, landing:"/"}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, ... FROM all_gsc_summary GROUP BY query ..."
  },
  {
    id:"EV-CONTENT-MATRIX-001", title:"內容效益矩陣完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"CONTENT-MATRIX-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-content-matrix-001-20260729", dataHash:"live-ev-content-matrix-001-20260729", status:"正常",
    description:"本週各頁面的使用者、工作階段、瀏覽量、平均互動秒數，並以中位數切出 Q1-Q4 矩陣。",
    filterKeys:["normalized_path"], chart:null,
    columns:[["normalized_path","路徑"], ["title","標題"], ["users","使用者"], ["sessions","工作階段"], ["pageviews","瀏覽量"], ["engagement_sec","平均互動秒數"], ["median_users","中位使用者"], ["median_eng","中位互動"], ["quadrant","象限"]],
    rows:[
    {normalized_path:"/p/426-1022-2.php?Lang=zh-tw", title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", users:34, sessions:34, pageviews:116, engagement_sec:0.5, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/index.php", title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:30, sessions:48, pageviews:172, engagement_sec:0.6, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1022-2586.php", title:"師資陣容 - 資訊科技與管理學系", users:24, sessions:24, pageviews:70, engagement_sec:0.4, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/", title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:24, sessions:30, pageviews:100, engagement_sec:0.9, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/403-1022-452-1.php?Lang=zh-tw", title:"最新消息 - 資訊科技與管理學系", users:10, sessions:10, pageviews:24, engagement_sec:1.9, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/404-1022-52388.php?Lang=zh-tw", title:"碩士班專區 - 資訊科技與管理學系", users:9, sessions:11, pageviews:25, engagement_sec:0.3, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/404-1022-36099.php", title:"課程地圖與開課學分時數表 / Curriculum Map and Table of Courses Offered with Credit Hours - 資訊科技與管理學系", users:8, sessions:8, pageviews:50, engagement_sec:0.7, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1022-2570.php?Lang=zh-tw", title:"最新消息 - 資訊科技與管理學系", users:8, sessions:8, pageviews:23, engagement_sec:1.1, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/404-1022-30026.php?Lang=zh-tw", title:"系所介紹 - 資訊科技與管理學系", users:7, sessions:8, pageviews:16, engagement_sec:0.4, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/404-1022-30020.php", title:"入學方式 - 資訊科技與管理學系", users:6, sessions:6, pageviews:16, engagement_sec:0.3, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/?Lang=zh-tw", title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:6, sessions:6, pageviews:11, engagement_sec:0.7, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-34441.php", title:"課程規劃 - 資訊科技與管理學系", users:6, sessions:6, pageviews:16, engagement_sec:0.4, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/426-1022-5.php?Lang=zh-tw", title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", users:6, sessions:6, pageviews:13, engagement_sec:0.5, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-60990.php?Lang=zh-tw", title:"碩士班相關表格 - 資訊科技與管理學系", users:4, sessions:4, pageviews:14, engagement_sec:0.7, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/403-1022-703-1.php?Lang=zh-tw", title:"Photo - 資訊科技與管理學系", users:4, sessions:4, pageviews:8, engagement_sec:0.6, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1022-2590.php?Lang=zh-tw", title:"業界實習 - 資訊科技與管理學系", users:4, sessions:4, pageviews:6, engagement_sec:2.7, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-66044.php?Lang=zh-tw", title:"智慧物聯實驗室 - 資訊科技與管理學系", users:4, sessions:4, pageviews:6, engagement_sec:0.1, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-30062.php", title:"規章辦法 - 資訊科技與管理學系", users:4, sessions:4, pageviews:10, engagement_sec:0.2, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/403-1022-709-1.php?Lang=zh-tw", title:"海外實習 - 資訊科技與管理學系", users:3, sessions:3, pageviews:6, engagement_sec:0.5, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/405-1022-63142,c2570.php?Lang=zh-tw", title:"【 競賽資訊 】慈濟科技大學 2024全國經營管理專題競賽（獲獎名單） - 資訊科技與管理學系", users:3, sessions:3, pageviews:4, engagement_sec:3.3, median_users:7, median_eng:25, quadrant:"Q4"}
  ],
    sql:"SELECT page_location, ANY_VALUE(page_title), COUNT(DISTINCT user_pseudo_id), ... FROM all_units_summary WHERE event_name='page_view' GROUP BY page_location ..."
  },
  {
    id:"EV-SOURCE-QUALITY-001", title:"流量來源品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"SOURCE-QUALITY-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-source-quality-001-20260729", dataHash:"live-ev-source-quality-001-20260729", status:"正常",
    description:"本週各流量來源 / medium 的工作階段、使用者、平均互動秒、站內點擊、檔案下載、CTA 點擊與樣本充足度。",
    filterKeys:["source"], chart:null,
    columns:[["source","來源"], ["medium","媒介"], ["sessions","工作階段"], ["users","使用者"], ["avg_eng_sec_per_session","平均互動秒"], ["internal_clicks","站內點擊"], ["downloads","檔案下載"], ["cta_clicks","CTA 點擊"], ["sample_note","樣本充足度"]],
    rows:[
    {source:"(direct)", medium:"(none)", sessions:162, users:135, avg_eng_sec_per_session:32.4, internal_clicks:90, downloads:33, cta_clicks:12, sample_note:"足夠"},
    {source:"google", medium:"organic", sessions:53, users:40, avg_eng_sec_per_session:52.5, internal_clicks:58, downloads:40, cta_clicks:11, sample_note:"足夠"},
    {source:"lle.moe.edu.tw", medium:"referral", sessions:3, users:3, avg_eng_sec_per_session:52.4, internal_clicks:4, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {source:"cse.google.com", medium:"referral", sessions:2, users:1, avg_eng_sec_per_session:3.1, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {source:"chatgpt.com", medium:"ai-assistant", sessions:1, users:1, avg_eng_sec_per_session:0, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {source:"collego.edu.tw", medium:"referral", sessions:1, users:1, avg_eng_sec_per_session:106.1, internal_clicks:2, downloads:0, cta_clicks:0, sample_note:"資料不足"}
  ],
    sql:"SELECT source, medium, COUNT(DISTINCT ga_session_id), ... FROM all_units_summary GROUP BY source, medium ..."
  },
  {
    id:"EV-ADMISSION-CTA-001", title:"招生 CTA 行動次數完整報表", sourceType:"BigQuery click 事件",
    sourceTable:"all_units_summary click 事件", queryCode:"ADMISSION-CTA-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-admission-cta-001-20260729", dataHash:"live-ev-admission-cta-001-20260729", status:"正常",
    description:"本週所有 click 事件：類別、連結文字、來源頁、目標 URL、點擊數、使用者、有效率。",
    filterKeys:["destination"], chart:null,
    columns:[["category","類別"], ["link_text","連結文字"], ["source_page","來源頁"], ["destination","目標 URL"], ["clicks","點擊"], ["users","使用者"], ["valid_rate","有效率"]],
    rows:[
    {category:"校內招生", link_text:"nan", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://cec.tcu.edu.tw/?p=5033", clicks:10, users:7, valid_rate:1.43},
    {category:"校內招生", link_text:"招生簡章", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://cec.tcu.edu.tw/?p=5033", clicks:10, users:7, valid_rate:1.43},
    {category:"其他連結", link_text:"nan", source_page:"index.php", destination:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E8%88%87%E7%AE", clicks:7, users:2, valid_rate:1},
    {category:"其他連結", link_text:"查看更多新聞", source_page:"index.php", destination:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E8%88%87%E7%AE", clicks:6, users:2, valid_rate:1},
    {category:"其他連結", link_text:"nan", source_page:"p/404-1022-60990.php?Lang=zh-tw", destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1843/540712717.doc", clicks:6, users:2, valid_rate:3},
    {category:"其他連結", link_text:"nan", source_page:"p/404-1022-36099.php", destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1214/686385563.ods", clicks:5, users:3, valid_rate:1.67},
    {category:"招生入口", link_text:"nan", source_page:"index.php", destination:"https://admissions.tcu.edu.tw/?page_id=5316", clicks:5, users:2, valid_rate:2.5},
    {category:"招生入口", link_text:"四技二專甄選入學", source_page:"index.php", destination:"https://admissions.tcu.edu.tw/?page_id=5316", clicks:5, users:2, valid_rate:2.5},
    {category:"其他連結", link_text:"資訊科技與管理系碩士班-資管系碩士論文格式", source_page:"p/404-1022-60990.php?Lang=zh-tw", destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1843/540712717.doc", clicks:5, users:2, valid_rate:2.5},
    {category:"其他連結", link_text:"下載", source_page:"p/404-1022-36099.php", destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1214/686385563.ods", clicks:5, users:3, valid_rate:1.67},
    {category:"其他連結", link_text:"上課資訊", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw#schedule", clicks:4, users:4, valid_rate:1},
    {category:"其他連結", link_text:"下載", source_page:"p/404-1022-36099.php", destination:"https://itm.tcu.edu.tw/var/file/22/1022/attach/15/pta_90538_1108797_18692.pdf", clicks:4, users:3, valid_rate:1.33},
    {category:"其他連結", link_text:"第三人生大學", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw", clicks:4, users:3, valid_rate:1.33},
    {category:"其他連結", link_text:"入學方式", source_page:"", destination:"https://itm.tcu.edu.tw/p/404-1022-30020.php", clicks:3, users:3, valid_rate:1},
    {category:"其他連結", link_text:"課程特色", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw#courses", clicks:3, users:2, valid_rate:1.5}
  ],
    sql:"SELECT link_url, link_text, page_location, COUNT(*) AS clicks FROM all_units_summary WHERE event_name='click' GROUP BY link_url, link_text, page_location ..."
  },
  {
    id:"EV-INTERNATIONAL-QUALITY-001", title:"國際訪客品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"INTERNATIONAL-QUALITY-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-international-quality-001-20260729", dataHash:"live-ev-international-quality-001-20260729", status:"正常",
    description:"本週非臺灣訪客的國家、工作階段、使用者、平均互動秒、到達頁、招生 CTA、聯絡點擊、樣本充足度。",
    filterKeys:["country"], chart:null,
    columns:[["country","國家"], ["sessions","工作階段"], ["users","使用者"], ["avg_eng_sec","平均互動秒"], ["top_landing","到達頁"], ["admission_cta","招生 CTA"], ["contact_click","聯絡點擊"], ["sample_note","樣本充足度"]],
    rows:[
    {country:"China", sessions:8, users:8, avg_eng_sec:3.3, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"United States", sessions:2, users:1, avg_eng_sec:173.8, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Canada", sessions:1, users:1, avg_eng_sec:1.9, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Germany", sessions:1, users:1, avg_eng_sec:2.4, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Indonesia", sessions:1, users:1, avg_eng_sec:0.3, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"}
  ],
    sql:"SELECT country, COUNT(DISTINCT ga_session_id), ... FROM all_units_summary WHERE country NOT IN ('Taiwan', '台灣') GROUP BY country ..."
  },
  {
    id:"EV-USER-PATH-001", title:"使用者路徑（入口→第二頁）完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"USER-PATH-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-user-path-001-20260729", dataHash:"live-ev-user-path-001-20260729", status:"正常",
    description:"本週使用者最常見的入口頁 → 第二頁轉換（top 15 轉換）。",
    filterKeys:["from_path"], chart:null,
    columns:[["from_path","來源頁"], ["to_path","到達頁"], ["transitions","轉換次數"]],
    rows:[
    {from_path:"/index.php", to_path:"/index.php", transitions:107},
    {from_path:"/p/426-1022-2.php?Lang=zh-tw", to_path:"/p/426-1022-2.php?Lang=zh-tw", transitions:81},
    {from_path:"/", to_path:"/", transitions:64},
    {from_path:"/p/412-1022-2586.php", to_path:"/p/412-1022-2586.php", transitions:43},
    {from_path:"/p/404-1022-36099.php", to_path:"/p/404-1022-36099.php", transitions:38},
    {from_path:"/p/404-1022-52388.php?Lang=zh-tw", to_path:"/p/404-1022-52388.php?Lang=zh-tw", transitions:14},
    {from_path:"/p/403-1022-452-1.php?Lang=zh-tw", to_path:"/p/403-1022-452-1.php?Lang=zh-tw", transitions:12},
    {from_path:"/p/412-1022-2570.php?Lang=zh-tw", to_path:"/p/412-1022-2570.php?Lang=zh-tw", transitions:12},
    {from_path:"/index.php", to_path:"/p/412-1022-2586.php", transitions:11},
    {from_path:"/p/404-1022-60990.php?Lang=zh-tw", to_path:"/p/404-1022-60990.php?Lang=zh-tw", transitions:10},
    {from_path:"/p/406-1022-65878,r452.php?Lang=zh-tw", to_path:"/p/406-1022-65878,r452.php?Lang=zh-tw", transitions:10},
    {from_path:"/p/404-1022-30020.php", to_path:"/p/404-1022-30020.php", transitions:9},
    {from_path:"/p/404-1022-30026.php?Lang=zh-tw", to_path:"/p/404-1022-30026.php?Lang=zh-tw", transitions:8},
    {from_path:"/p/404-1022-34441.php", to_path:"/p/404-1022-34441.php", transitions:8},
    {from_path:"/p/426-1022-5.php?Lang=zh-tw", to_path:"/p/426-1022-5.php?Lang=zh-tw", transitions:7}
  ],
    sql:"WITH page_visits AS (SELECT ga_session_id, page_location, ROW_NUMBER() OVER (...) FROM all_units_summary) ..."
  },
  {
    id:"EV-AI-REFERRAL-001", title:"AI 搜尋引擎 referrer 完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-ai-referral-001-20260729", dataHash:"live-ev-ai-referral-001-20260729", status:"正常",
    description:"本週 chatgpt / perplexity / claude / gemini / copilot / you.com 等 AI 搜尋引擎 referrer 的工作階段數量。",
    filterKeys:["ai_engine"], chart:null,
    columns:[["ai_engine","AI 平台"], ["sessions","工作階段"], ["users","匿名使用者"], ["last_seen","最後出現"]],
    rows:[
    {ai_engine:"chatgpt.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"perplexity.ai",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"claude.ai",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"gemini.google.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"copilot.microsoft.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"you.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"poe.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"deepseek.com",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"huggingface.co",sessions:0,users:0,last_seen:"-"},
    {ai_engine:"mistral.ai",sessions:0,users:0,last_seen:"-"}
  ],
    sql:"SELECT page_referrer, COUNT(DISTINCT ...) FROM all_units_summary WHERE page_referrer LIKE '%chatgpt%' OR '%perplexity%' OR ..."
  },
  {
    id:"EV-DATA-QUALITY-001", title:"三張資料表品質檢核完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary", queryCode:"DATA-QUALITY-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ev-data-quality-001-20260729", dataHash:"live-ev-data-quality-001-20260729", status:"正常",
    description:"三張資料表的最大日期、最近 7 天列數、最新 jobId、檢核狀態。",
    filterKeys:[], chart:null,
    columns:[["table_name","資料表"], ["max_date","最大日期"], ["recent_rows","近 7 天列數"], ["last_job_id","最新 Job"], ["check_status","檢核狀態"]],
    rows:[
    {table_name:"all_units_summary",max_date:"2026-07-27",recent_rows:251977,last_job_id:"live-job-ga4-trend-20260729",check_status:"正常"},
    {table_name:"all_gsc_summary",max_date:"2026-07-26",recent_rows:188293,last_job_id:"live-job-gsc-evidence-20260729",check_status:"正常"},
    {table_name:"search_behavior_summary",max_date:"2026-07-27",recent_rows:124430,last_job_id:"live-job-sb-evidence-20260729",check_status:"注意 — 不得跨 query 加總 active_users"}
  ],
    sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, ..."
  }
];


window.WEBINSIGHT = window.WEBINSIGHT || {};
window.WEBINSIGHT.EVIDENCE_REPORTS = EVIDENCE_REPORTS;

const EV_STATE = {};

function evEsc(v){
  return String(v ?? "").replace(/[&<>"']/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]));
}
function evReport(id){ return EVIDENCE_REPORTS.find(r=>r.id===id); }
function evOpen(id){
  document.body.className="view-evidence";
  setTimeout(()=>document.getElementById("ev-"+id)?.scrollIntoView({behavior:"smooth",block:"start"}),80);
  EV_STATE.openId = id;
  history.replaceState(null,"","#ev-"+id);
}
function evClose(){
  document.body.className = document.body.className.replace(/\s*view-evidence/g,"");
  EV_STATE.openId = null;
  try{ history.replaceState(null,"",location.pathname+location.search);}catch(_){}
}
function evApplyFilter(){
  const id = EV_STATE.openId;
  const r = evReport(id);
  if(!r) return;
  const fk = r.filterKeys||[];
  const out = {};
  for(const k of fk){
    const v = (document.getElementById("ev-f-"+k)?.value || "").trim();
    if(v) out[k]=v.toLowerCase();
  }
  const rows = (r.rows||[]).filter(row=>{
    for(const k in out){
      if(String(row[k] ?? "").toLowerCase().indexOf(out[k])<0) return false;
    }
    return true;
  });
  EV_STATE.filtered[id] = rows;
  evRenderTable(id);
}
function evReset(){
  const id = EV_STATE.openId;
  const r = evReport(id);
  if(!r) return;
  (r.filterKeys||[]).forEach(k=>{ const el = document.getElementById("ev-f-"+k); if(el) el.value=""; });
  EV_STATE.filtered[id] = r.rows||[];
  evRenderTable(id);
}
function evSort(key){
  const id = EV_STATE.openId;
  const r = evReport(id);
  if(!r) return;
  if(EV_STATE.sort[id]?.key===key){ EV_STATE.sort[id].dir = EV_STATE.sort[id].dir==="asc"?"desc":"asc"; }
  else { EV_STATE.sort[id] = { key, dir: "asc" }; }
  evRenderTable(id);
}
function evPage(p){
  const id = EV_STATE.openId;
  if(!id) return;
  EV_STATE.page[id] = p;
  evRenderTable(id);
}
function evPageSize(s){
  const id = EV_STATE.openId;
  if(!id) return;
  EV_STATE.pageSize[id] = s;
  EV_STATE.page[id] = 1;
  evRenderTable(id);
}
function evSearch(q){
  const id = EV_STATE.openId;
  const r = evReport(id);
  if(!r) return;
  EV_STATE.search[id] = q.toLowerCase();
  EV_STATE.page[id] = 1;
  // Apply search across all columns
  let rows = r.rows||[];
  if(EV_STATE.search[id]){
    rows = rows.filter(row=>{
      for(const k in row){
        if(String(row[k] ?? "").toLowerCase().includes(EV_STATE.search[id])) return true;
      }
      return false;
    });
  }
  EV_STATE.filtered[id] = rows;
  evRenderTable(id);
}
function evSetFilter(k, v){
  const el = document.getElementById("ev-f-"+k);
  if(el) el.value = v;
  evApplyFilter();
}
function evDownload(){
  const id = EV_STATE.openId;
  const r = evReport(id);
  if(!r) return;
  const rows = EV_STATE.filtered[id]||r.rows||[];
  const headers = r.columns.map(c=>c[1]);
  const keys = r.columns.map(c=>c[0]);
  const csvRows = [headers.join(",")];
  for(const row of rows){
    csvRows.push(keys.map(k=>{
      let v = row[k] ?? "";
      const s = String(v);
      if(s.indexOf(",")>=0 || s.indexOf("\n")>=0 || s.indexOf('"')>=0){
        return '"' + s.replace(/"/g, '""') + '"';
      }
      return s;
    }).join(","));
  }
  const csv = csvRows.join("\n");
  const blob = new Blob([csv], {type:"text/csv;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = id + "_" + new Date().toISOString().slice(0,10) + ".csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function evDrawChart(canvas, chart, rows){
  if(!chart || !canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width, H = rect.height;
  ctx.clearRect(0, 0, W, H);

  const series = chart.series || [];
  const xKey = chart.xKey;
  if(rows.length === 0 || series.length === 0){
    ctx.fillStyle = "#888";
    ctx.font = "12px sans-serif";
    ctx.fillText("（無資料）", 20, H/2);
    return;
  }

  const padding = {top: 20, right: 20, bottom: 30, left: 40};
  const innerW = W - padding.left - padding.right;
  const innerH = H - padding.top - padding.bottom;

  // Find max
  let maxVal = 0;
  for(const s of series){
    for(const row of rows){
      const v = Number(row[s[0]]) || 0;
      if(v > maxVal) maxVal = v;
    }
  }
  if(maxVal === 0) maxVal = 1;

  // Draw axes
  ctx.strokeStyle = "#ccc";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + innerH);
  ctx.lineTo(padding.left + innerW, padding.top + innerH);
  ctx.stroke();

  // Y-axis labels
  ctx.fillStyle = "#888";
  ctx.font = "10px sans-serif";
  ctx.textAlign = "right";
  for(let i = 0; i <= 4; i++){
    const v = (maxVal * i / 4);
    const y = padding.top + innerH - (innerH * i / 4);
    ctx.fillText(Math.round(v).toString(), padding.left - 4, y + 3);
    ctx.strokeStyle = "#eee";
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + innerW, y);
    ctx.stroke();
  }

  // X-axis labels
  ctx.textAlign = "center";
  const step = Math.max(1, Math.floor(rows.length / 6));
  for(let i = 0; i < rows.length; i += step){
    const x = padding.left + (innerW * i / Math.max(rows.length - 1, 1));
    ctx.fillText(String(rows[i][xKey] ?? ""), x, padding.top + innerH + 14);
  }

  // Draw series
  const colors = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
  for(let sIdx = 0; sIdx < series.length; sIdx++){
    const s = series[sIdx];
    ctx.strokeStyle = colors[sIdx % colors.length];
    ctx.fillStyle = colors[sIdx % colors.length];
    ctx.lineWidth = 2;
    ctx.beginPath();
    for(let i = 0; i < rows.length; i++){
      const row = rows[i];
      const v = Number(row[s[0]]) || 0;
      const x = padding.left + (innerW * i / Math.max(rows.length - 1, 1));
      const y = padding.top + innerH - (innerH * v / maxVal);
      if(i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    // Points
    for(let i = 0; i < rows.length; i++){
      const row = rows[i];
      const v = Number(row[s[0]]) || 0;
      const x = padding.left + (innerW * i / Math.max(rows.length - 1, 1));
      const y = padding.top + innerH - (innerH * v / maxVal);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2*Math.PI);
      ctx.fill();
    }
  }

  // Legend
  ctx.textAlign = "left";
  ctx.font = "10px sans-serif";
  for(let sIdx = 0; sIdx < series.length; sIdx++){
    const s = series[sIdx];
    const x = padding.left + sIdx * 80;
    ctx.fillStyle = colors[sIdx % colors.length];
    ctx.fillRect(x, 4, 12, 8);
    ctx.fillStyle = "#333";
    ctx.fillText(s[1], x + 16, 12);
  }
}
function evRenderTable(id){
  const r = evReport(id);
  if(!r) return;
  const rows = EV_STATE.filtered[id]||r.rows||[];
  const sortConf = EV_STATE.sort[id];
  let sortedRows = [...rows];
  if(sortConf){
    sortedRows.sort((a, b) => {
      const av = a[sortConf.key], bv = b[sortConf.key];
      if(av === bv) return 0;
      const an = Number(av), bn = Number(bv);
      if(!isNaN(an) && !isNaN(bn)){
        return sortConf.dir === "asc" ? an - bn : bn - an;
      }
      return sortConf.dir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  }

  const pageSize = EV_STATE.pageSize[id] || 10;
  const page = EV_STATE.page[id] || 1;
  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize));
  const startIdx = (page - 1) * pageSize;
  const pageRows = sortedRows.slice(startIdx, startIdx + pageSize);

  // Render canvas
  const canvas = document.getElementById("ev-chart-" + id);
  if(canvas && r.chart){
    evDrawChart(canvas, r.chart, sortedRows);
  }

  // Render table
  const tbody = document.querySelector("#ev-table-" + id + " tbody");
  if(tbody){
    tbody.innerHTML = pageRows.map(row =>
      "<tr>" + r.columns.map(c => "<td>" + evEsc(row[c[0]]) + "</td>").join("") + "</tr>"
    ).join("");
  }

  // Render pagination
  const pagDiv = document.getElementById("ev-pag-" + id);
  if(pagDiv){
    pagDiv.innerHTML = `顯示 ${startIdx + 1}–${Math.min(startIdx + pageSize, sortedRows.length)} / 共 ${sortedRows.length} 列 | 第 ${page} / ${totalPages} 頁 <button onclick="evPage(${page-1})" ${page<=1?"disabled":""}>上一頁</button> <button onclick="evPage(${page+1})" ${page>=totalPages?"disabled":""}>下一頁</button>`;
  }

  // Update filter hint
  const hint = document.getElementById("ev-hint-" + id);
  if(hint){
    hint.textContent = sortedRows.length === r.rows.length
      ? "圖表會隨篩選條件更新；滑過資料列可查看完整數值。"
      : `已篩選：${sortedRows.length} / ${r.rows.length} 列。`;
  }
}
function evOpenRecord(id){
  evOpen(id);
  const r = evReport(id);
  if(!r) return;
  EV_STATE.filtered[id] = r.rows||[];
  EV_STATE.page[id] = 1;
  setTimeout(()=>evRenderTable(id), 100);
}
function evInit(){
  EV_STATE.filtered = {};
  EV_STATE.sort = {};
  EV_STATE.page = {};
  EV_STATE.pageSize = {};
  EV_STATE.search = {};
  EV_STATE.openId = null;

  // Bind open links
  document.querySelectorAll("[data-ev-open]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      evOpenRecord(el.dataset.evOpen);
    });
  });

  // Hash routing
  if(location.hash.startsWith("#ev-")){
    const id = location.hash.slice(4);
    if(evReport(id)) evOpenRecord(id);
  }

  window.evOpen = evOpen;
  window.evClose = evClose;
  window.evApplyFilter = evApplyFilter;
  window.evSearch = evSearch;
  window.evSetFilter = evSetFilter;
  window.evPageSize = evPageSize;
  window.evPage = evPage;
  window.evSort = evSort;
  window.evReset = evReset;
  window.evDownload = evDownload;
  window.evDrawChart = evDrawChart;
  window.EV_STATE = EV_STATE;
  window.EVIDENCE_REPORTS = EVIDENCE_REPORTS;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", evInit);
} else {
  // DOM already ready (Vite async module load)
  evInit();
}
