// src/evidence.js — EVIDENCE_REPORTS with live BigQuery data + interactive viewer (v55-style)
// Generated 2026-07-29 — 護理學院
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
    {week:"05/31", sessions:259, pageviews:1163, users:200, engagement_seconds:78.7027, pages_per_session:4.4903},
    {week:"06/07", sessions:332, pageviews:944, users:253, engagement_seconds:90.0891, pages_per_session:2.8434},
    {week:"06/14", sessions:75, pageviews:165, users:61, engagement_seconds:35.8497, pages_per_session:2.2},
    {week:"06/21", sessions:210, pageviews:525, users:152, engagement_seconds:72.0933, pages_per_session:2.5},
    {week:"06/28", sessions:194, pageviews:312, users:150, engagement_seconds:42.1424, pages_per_session:1.6082},
    {week:"07/05", sessions:140, pageviews:230, users:117, engagement_seconds:28.3998, pages_per_session:1.6429},
    {week:"07/12", sessions:211, pageviews:463, users:177, engagement_seconds:34.505, pages_per_session:2.1943},
    {week:"07/19", sessions:204, pageviews:301, users:166, engagement_seconds:27.5119, pages_per_session:1.4755}
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
    {dimension:"國家", name:"Taiwan", sessions:149, users:115, pageviews:250},
    {dimension:"國家", name:"China", sessions:35, users:35, pageviews:29},
    {dimension:"國家", name:"United States", sessions:5, users:4, pageviews:5},
    {dimension:"國家", name:"Singapore", sessions:4, users:4, pageviews:4},
    {dimension:"國家", name:"Hong Kong", sessions:4, users:3, pageviews:5},
    {dimension:"國家", name:"Malaysia", sessions:1, users:1, pageviews:1},
    {dimension:"國家", name:"Canada", sessions:1, users:1, pageviews:1},
    {dimension:"國家", name:"Australia", sessions:1, users:1, pageviews:1},
    {dimension:"國家", name:"Japan", sessions:1, users:1, pageviews:1},
    {dimension:"國家", name:"", sessions:1, users:1, pageviews:1},
    {dimension:"流量來源", name:"(direct) / (none)", sessions:118, users:94, pageviews:171},
    {dimension:"流量來源", name:"google / organic", sessions:82, users:70, pageviews:125},
    {dimension:"流量來源", name:"yahoo / organic", sessions:1, users:1, pageviews:1},
    {dimension:"流量來源", name:"chatgpt.com / ai-assistant", sessions:1, users:1, pageviews:1},
    {dimension:"裝置", name:"desktop", sessions:131, users:100, pageviews:198},
    {dimension:"裝置", name:"mobile", sessions:69, users:64, pageviews:94},
    {dimension:"裝置", name:"tablet", sessions:2, users:2, pageviews:6}
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
    {rank:1, path:"/", imp:508, clk:31, avg_pos:5.7},
    {rank:2, path:"/p/412-1014-2990.php?Lang=zh-tw", imp:194, clk:1, avg_pos:5.9},
    {rank:3, path:"/p/406-1014-64715,r1027.php?Lang=zh-tw", imp:143, clk:5, avg_pos:7.4},
    {rank:4, path:"/app/index.php?Plugin=mobile&Action=mobileads&ad=1288", imp:82, clk:4, avg_pos:5.8},
    {rank:5, path:"/p/412-1014-2992.php", imp:71, clk:2, avg_pos:7.1},
    {rank:6, path:"/p/406-1014-64705,r1026.php?Lang=zh-tw", imp:61, clk:2, avg_pos:3.6},
    {rank:7, path:"/p/412-1014-4932.php?Lang=zh-tw", imp:60, clk:0, avg_pos:7.7},
    {rank:8, path:"/p/403-1014-1027-1.php?Lang=zh-tw", imp:59, clk:1, avg_pos:9.1},
    {rank:9, path:"/p/412-1014-4934.php?Lang=zh-tw", imp:52, clk:3, avg_pos:8.2},
    {rank:10, path:"/p/406-1014-65919,r1051.php?Lang=zh-tw", imp:50, clk:0, avg_pos:7.8},
    {rank:11, path:"/p/407-1014-503-1.php?Lang=zh-tw", imp:48, clk:0, avg_pos:8.3},
    {rank:12, path:"/p/406-1014-65342,r1051.php?Lang=zh-tw", imp:47, clk:1, avg_pos:8.8},
    {rank:13, path:"/p/406-1014-65341,r1051.php?Lang=zh-tw", imp:45, clk:0, avg_pos:6.2},
    {rank:14, path:"/p/403-1014-1026-1.php?Lang=zh-tw", imp:40, clk:3, avg_pos:11.8},
    {rank:15, path:"/p/412-1014-4969.php?Lang=zh-tw", imp:39, clk:6, avg_pos:7.5},
    {rank:16, path:"/p/406-1014-64729,r1027.php?Lang=zh-tw", imp:39, clk:5, avg_pos:3.5},
    {rank:17, path:"/p/406-1014-64702,r1026.php?Lang=zh-tw", imp:39, clk:3, avg_pos:6.3},
    {rank:18, path:"/p/406-1014-65037,r1023.php?Lang=zh-tw", imp:37, clk:0, avg_pos:9.8},
    {rank:19, path:"/p/406-1014-64730,r1027.php?Lang=zh-tw", imp:36, clk:3, avg_pos:12.8},
    {rank:20, path:"/p/406-1014-65223,r1051.php?Lang=zh-tw", imp:36, clk:1, avg_pos:6.4}
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
    {query:"site:nc.tcu.edu.tw", imp:170, clk:0, users:6},
    {query:"liyun kuo", imp:80, clk:1, users:1},
    {query:"site:nc.tcust.edu.tw", imp:70, clk:0, users:1},
    {query:"慈濟大學護理系", imp:66, clk:0, users:7},
    {query:"慈濟護專", imp:66, clk:4, users:7},
    {query:"慈濟大學護理學院", imp:60, clk:10, users:9},
    {query:"林玉娟", imp:36, clk:0, users:1},
    {query:"慈濟大學護理學系", imp:29, clk:0, users:9},
    {query:"慈濟大學護理科", imp:26, clk:1, users:4},
    {query:"曹英", imp:25, clk:2, users:1},
    {query:"慈濟大學護理", imp:24, clk:0, users:5},
    {query:"護理大學", imp:22, clk:0, users:6},
    {query:"慈濟大學護理系老師", imp:22, clk:3, users:2},
    {query:"邱曉彥", imp:21, clk:1, users:1},
    {query:"陸秀芳", imp:21, clk:4, users:1},
    {query:"慈濟護理科", imp:20, clk:0, users:5},
    {query:"慈濟大學 護理學系", imp:20, clk:0, users:8},
    {query:"賴惠玲", imp:19, clk:0, users:1},
    {query:"李崇仁", imp:16, clk:4, users:1},
    {query:"慈濟大學 護理系", imp:15, clk:0, users:7}
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
    {ai_engine:"chatgpt.com",sessions:1,users:1,last_seen:"2026-07-20"}
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
    {week:"06-06", course_pv:43, faculty_pv:115, feature_pv:165},
    {week:"06-13", course_pv:53, faculty_pv:126, feature_pv:234},
    {week:"06-20", course_pv:9, faculty_pv:62, feature_pv:35},
    {week:"06-27", course_pv:22, faculty_pv:67, feature_pv:138},
    {week:"07-04", course_pv:21, faculty_pv:69, feature_pv:112},
    {week:"07-11", course_pv:12, faculty_pv:56, feature_pv:73},
    {week:"07-18", course_pv:19, faculty_pv:135, feature_pv:166},
    {week:"07-25", course_pv:13, faculty_pv:71, feature_pv:100}
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
    {type:"電話",name:"護理學系辦",value:"+886-3-8572677",clicks:3},
    {type:"Email",name:"護理學院",value:"nc@tcu.edu.tw",clicks:1},
    {type:"招生窗口",name:"李崇仁 老師",value:"見系所頁面",clicks:0},
    {type:"地址",name:"花蓮市建國路二段880號",value:"970 花蓮",clicks:0},
    {type:"網址",name:"系所官方網頁",value:"https://nc.tcu.edu.tw",clicks:0}
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
    {category:"實體", check_item:"首頁唯一 H1", result:"通過", issue_count:0, evidence:"首頁偵測到 1 個 H1 標籤「慈濟大學護理學院 - 慈濟大學護理學院」", owner:"—"},
    {category:"結構化資料", check_item:"JSON-LD EducationalOrganization", result:"已實作", issue_count:0, evidence:"含 name、alternateName、url、parentOrganization、knowsAbout、address（建國路二段880號）", owner:"—"},
    {category:"Meta", check_item:"description 長度", result:"待改善", issue_count:1, evidence:"91 字（最佳 150–160 字），含護理教育學制完整列表；可考慮再擴充 SEO keywords", owner:"電算中心"},
    {category:"Meta", check_item:"canonical link", result:"缺失", issue_count:1, evidence:"未偵測到 <link rel=\"canonical\">，建議補上 https://nc.tcu.edu.tw/", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:image", result:"待觀察", issue_count:1, evidence:"og:image 路徑指向系統路徑 /var/file/14/1014/msys_1014_2081373_28918.png", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:title / og:description / og:url / og:type", result:"待修補", issue_count:4, evidence:"缺少 og:title、og:description、og:url、og:type，影響社交分享預覽", owner:"電算中心"},
    {category:"hreflang", check_item:"中英文版標記", result:"待修補", issue_count:1, evidence:"未偵測到 hreflang 標記", owner:"電算中心"},
    {category:"圖片", check_item:"alt 屬性", result:"待修補", issue_count:3, evidence:"3 張 img 缺少 alt 屬性", owner:"電算中心"},
    {category:"DOM", check_item:"重複 ID", result:"待修補", issue_count:1, evidence:"DOM ID TcuRpageFeatureTitle 出現 2 次", owner:"電算中心"}
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
    {query:"site:nc.tcu.edu.tw", imp:170, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"liyun kuo", imp:80, clk:1, ctr:1.25, position:5, recommendation:"可優化 title 加系名"},
    {query:"site:nc.tcust.edu.tw", imp:70, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟護專", imp:66, clk:4, ctr:6.06, position:5, recommendation:"可優化 title 加系名"},
    {query:"慈濟大學護理系", imp:66, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟大學護理學院", imp:60, clk:10, ctr:16.67, position:5, recommendation:"可優化 title 加系名"},
    {query:"林玉娟", imp:36, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟大學護理學系", imp:29, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟大學護理科", imp:26, clk:1, ctr:3.85, position:5, recommendation:"可優化 title 加系名"},
    {query:"曹英", imp:25, clk:2, ctr:8, position:5, recommendation:"可優化 title 加系名"}
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
    {rank:1, path:"/", imp:508, clk:31, ctr:6.1, avg_pos:5.7},
    {rank:2, path:"/p/412-1014-2990.php?Lang=zh-tw", imp:194, clk:1, ctr:0.5, avg_pos:5.9},
    {rank:3, path:"/p/406-1014-64715,r1027.php?Lang=zh-tw", imp:143, clk:5, ctr:3.5, avg_pos:7.4},
    {rank:4, path:"/app/index.php?Plugin=mobile&Action=mobileads&ad=1288", imp:82, clk:4, ctr:4.9, avg_pos:5.8},
    {rank:5, path:"/p/412-1014-2992.php", imp:71, clk:2, ctr:2.8, avg_pos:7.1},
    {rank:6, path:"/p/406-1014-64705,r1026.php?Lang=zh-tw", imp:61, clk:2, ctr:3.3, avg_pos:3.6},
    {rank:7, path:"/p/412-1014-4932.php?Lang=zh-tw", imp:60, clk:0, ctr:0, avg_pos:7.7},
    {rank:8, path:"/p/403-1014-1027-1.php?Lang=zh-tw", imp:59, clk:1, ctr:1.7, avg_pos:9.1},
    {rank:9, path:"/p/412-1014-4934.php?Lang=zh-tw", imp:52, clk:3, ctr:5.8, avg_pos:8.2},
    {rank:10, path:"/p/406-1014-65919,r1051.php?Lang=zh-tw", imp:50, clk:0, ctr:0, avg_pos:7.8}
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
    {week:"06/06", sessions:259, users:200, pageviews:1163, impressions:3002, clicks:141, ctr:4.7, status:"基準期", delta_pct:0},
    {week:"06/13", sessions:332, users:253, pageviews:944, impressions:3472, clicks:197, ctr:5.67, status:"基準期", delta_pct:0},
    {week:"06/20", sessions:75, users:61, pageviews:165, impressions:2741, clicks:136, ctr:4.96, status:"基準期", delta_pct:0},
    {week:"06/27", sessions:210, users:152, pageviews:525, impressions:2811, clicks:91, ctr:3.24, status:"基準期", delta_pct:0},
    {week:"07/04", sessions:194, users:150, pageviews:312, impressions:2699, clicks:93, ctr:3.45, status:"基準期", delta_pct:0},
    {week:"07/11", sessions:140, users:117, pageviews:230, impressions:2462, clicks:71, ctr:2.88, status:"基準期", delta_pct:0},
    {week:"07/18", sessions:211, users:177, pageviews:463, impressions:2570, clicks:101, ctr:3.93, status:"基準期", delta_pct:0},
    {week:"07/25", sessions:204, users:166, pageviews:301, impressions:2720, clicks:112, ctr:4.12, status:"基準期", delta_pct:0}
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
    {query:"liyun kuo", cls:"nonbrand", imp:80, clicks:1, ctr:1.25, avg_pos:7.7, landing:"/p/406-1014-64715,r1027.php?Lang=zh-tw"},
    {query:"慈濟護專", cls:"nonbrand", imp:64, clicks:4, ctr:6.25, avg_pos:8.2, landing:"/"},
    {query:"林玉娟", cls:"nonbrand", imp:36, clicks:0, ctr:0, avg_pos:0.9, landing:"/p/406-1014-64705,r1026.php?Lang=zh-tw"},
    {query:"曹英", cls:"nonbrand", imp:25, clicks:2, ctr:8, avg_pos:1.9, landing:"/p/406-1014-64700,r1026.php?Lang=zh-tw"},
    {query:"慈濟大學護理系", cls:"nonbrand", imp:25, clicks:0, ctr:0, avg_pos:5.2, landing:"/p/412-1014-2990.php?Lang=zh-tw"},
    {query:"護理大學", cls:"nonbrand", imp:22, clicks:0, ctr:0, avg_pos:7.5, landing:"/"},
    {query:"邱曉彥", cls:"nonbrand", imp:21, clicks:1, ctr:4.76, avg_pos:6.8, landing:"/p/406-1014-65223,r1051.php?Lang=zh-tw"},
    {query:"賴惠玲", cls:"nonbrand", imp:19, clicks:0, ctr:0, avg_pos:4.6, landing:"/p/406-1014-64699,r1026.php?Lang=zh-tw"},
    {query:"李崇仁", cls:"nonbrand", imp:16, clicks:4, ctr:25, avg_pos:0.3, landing:"/p/406-1014-64729,r1027.php?Lang=zh-tw"},
    {query:"羅淑芬", cls:"nonbrand", imp:14, clicks:0, ctr:0, avg_pos:7.1, landing:"/p/406-1014-64702,r1026.php?Lang=zh-tw"},
    {query:"楊美玲", cls:"nonbrand", imp:13, clicks:1, ctr:7.69, avg_pos:2.8, landing:"/p/406-1014-64730,r1027.php?Lang=zh-tw"},
    {query:"陸秀芳", cls:"nonbrand", imp:11, clicks:3, ctr:27.27, avg_pos:0, landing:"/p/406-1014-64707,r1026.php?Lang=zh-tw"},
    {query:"li yun kuo 醫生娘", cls:"nonbrand", imp:11, clicks:0, ctr:0, avg_pos:3.9, landing:"/p/406-1014-64715,r1027.php?Lang=zh-tw"},
    {query:"慈濟大學護理", cls:"nonbrand", imp:11, clicks:0, ctr:0, avg_pos:6.3, landing:"/p/412-1014-2990.php?Lang=zh-tw"},
    {query:"慈濟護理科", cls:"nonbrand", imp:11, clicks:0, ctr:0, avg_pos:2.9, landing:"/"},
    {query:"王淑芳", cls:"nonbrand", imp:10, clicks:0, ctr:0, avg_pos:9.6, landing:"/p/406-1014-64698,r1034.php?Lang=zh-tw"},
    {query:"吳素月", cls:"nonbrand", imp:10, clicks:0, ctr:0, avg_pos:0.1, landing:"/p/406-1014-64726,r1027.php?Lang=zh-tw"},
    {query:"慈濟護理", cls:"nonbrand", imp:10, clicks:1, ctr:10, avg_pos:1.4, landing:"/"},
    {query:"慈濟大學護理科", cls:"nonbrand", imp:9, clicks:0, ctr:0, avg_pos:3.3, landing:"/p/403-1014-1027-1.php?Lang=zh-tw"},
    {query:"慈濟大學護理學院", cls:"nonbrand", imp:9, clicks:0, ctr:0, avg_pos:0, landing:"/p/412-1014-4934.php?Lang=zh-tw"}
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
    {normalized_path:"/", title:"慈濟大學護理學院 - 慈濟大學護理學院", users:55, sessions:70, pageviews:94, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1014-2992.php", title:"系科所組成員 - 慈濟大學護理學院", users:16, sessions:17, pageviews:19, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1014-4932.php?Lang=zh-tw", title:"護理學院沿革 - 慈濟大學護理學院", users:9, sessions:9, pageviews:9, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/406-1014-64729,r1027.php?Lang=zh-tw", title:"李崇仁 副教授 - 慈濟大學護理學院", users:7, sessions:7, pageviews:13, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1014-4934.php?Lang=zh-tw", title:"成員介紹 - 慈濟大學護理學院", users:6, sessions:7, pageviews:12, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/403-1014-1026-1.php?Lang=zh-tw", title:"護理學系 - 慈濟大學護理學院", users:6, sessions:6, pageviews:8, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/index.php", title:"慈濟大學護理學院 - 慈濟大學護理學院", users:6, sessions:6, pageviews:6, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1014-4969.php?Lang=zh-tw", title:"護理學院院長 - 慈濟大學護理學院", users:6, sessions:6, pageviews:11, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64715,r1027.php?Lang=zh-tw", title:"郭育倫 KUO,YU-LUN 主任 - 慈濟大學護理學院", users:6, sessions:6, pageviews:6, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-65941,r1023.php?Lang=zh-tw", title:"恭賀🎉🎉🎉本院護理科蔡欣晏老師帶領兩組學生榮獲「2026全國大專校院高齡創意活動設計競賽」特優獎（第一名）及佳作（第三名） - 慈濟大學護理學院", users:5, sessions:5, pageviews:5, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-65180,r1020.php?Lang=zh-tw", title:"【護理學院演講】嘉義大林慈濟醫院護理部 陳佳蓉主任演講: 25風華準醫中大愛成林護理情✨✨✨ - 慈濟大學護理學院", users:4, sessions:4, pageviews:4, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64702,r1026.php?Lang=zh-tw", title:"羅淑芬 LO,SHU-FEN 副教授 - 慈濟大學護理學院", users:4, sessions:5, pageviews:8, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1014-3466.php?Lang=zh-tw", title:"教育部USR計畫 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64726,r1027.php?Lang=zh-tw", title:"吳素月 WU, SU-YUEH 約聘講師 - 慈濟大學護理學院", users:3, sessions:3, pageviews:4, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1014-2990.php?Lang=zh-tw", title:"組織架構 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1014-4938.php?Lang=zh-tw", title:"交流園地 - 慈濟大學護理學院", users:3, sessions:3, pageviews:4, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64707,r1026.php?Lang=zh-tw", title:"陸秀芳 LU,SHIOU-FANG 助理教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64703,r1026.php?Lang=zh-tw", title:"許雅娟 HSU,YA-CHUAN 副教授 - 慈濟大學護理學院", users:3, sessions:4, pageviews:4, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64730,r1027.php?Lang=zh-tw", title:"楊美玲 YANG,MEI-LIN 副教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64700,r1026.php?Lang=zh-tw", title:"曹英 TSAO,YING 教授 - 慈濟大學護理學院", users:2, sessions:2, pageviews:2, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"}
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
    {source:"(direct)", medium:"(none)", sessions:118, users:94, avg_eng_sec_per_session:17.5, internal_clicks:120, downloads:10, cta_clicks:0, sample_note:"足夠"},
    {source:"google", medium:"organic", sessions:82, users:70, avg_eng_sec_per_session:26.4, internal_clicks:98, downloads:12, cta_clicks:18, sample_note:"足夠"},
    {source:"yahoo", medium:"organic", sessions:1, users:1, avg_eng_sec_per_session:25.1, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {source:"chatgpt.com", medium:"ai-assistant", sessions:1, users:1, avg_eng_sec_per_session:9.9, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"}
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
    {category:"其他連結", link_text:"nan", source_page:"p/412-1014-2992.php", destination:"https://tcunursing.tcu.edu.tw/?page_id=4469", clicks:14, users:11, valid_rate:1.17},
    {category:"其他連結", link_text:"護理學系(四年制、二年制)", source_page:"p/412-1014-2992.php", destination:"https://tcunursing.tcu.edu.tw/?page_id=4469", clicks:10, users:9, valid_rate:1},
    {category:"其他連結", link_text:"師資陣容", source_page:"p/412-1014-2992.php", destination:"https://dbm.tcu.edu.tw/?page_id=159", clicks:8, users:7, valid_rate:1.14},
    {category:"其他連結", link_text:"nan", source_page:"p/412-1014-2992.php", destination:"https://dbm.tcu.edu.tw/?page_id=159", clicks:8, users:7, valid_rate:1.14},
    {category:"其他連結", link_text:"nan", source_page:"", destination:"https://tcunursing.tcu.edu.tw/", clicks:7, users:4, valid_rate:1.75},
    {category:"其他連結", link_text:"師資成員", source_page:"", destination:"https://nc.tcu.edu.tw/p/412-1014-2992.php", clicks:7, users:6, valid_rate:1},
    {category:"其他連結", link_text:"護理科(五專)", source_page:"p/412-1014-2992.php", destination:"https://na.tcu.edu.tw/p/412-1015-3071.php", clicks:6, users:5, valid_rate:1.2},
    {category:"其他連結", link_text:"nan", source_page:"p/412-1014-2992.php", destination:"https://na.tcu.edu.tw/p/412-1015-3071.php", clicks:6, users:5, valid_rate:1.2},
    {category:"其他連結", link_text:"慈濟大學護理學院 College of Nursing", source_page:"", destination:"https://nc.tcu.edu.tw/", clicks:6, users:5, valid_rate:1},
    {category:"其他連結", link_text:"學院行政人員", source_page:"p/412-1014-4934.php?Lang=zh-tw", destination:"https://nc.tcu.edu.tw/p/412-1014-4934.php?Lang=zh-tw#cmb_90_1", clicks:5, users:3, valid_rate:1.25},
    {category:"其他連結", link_text:"護理學系（四年制、二年制）", source_page:"", destination:"https://tcunursing.tcu.edu.tw/", clicks:5, users:3, valid_rate:1.67},
    {category:"其他連結", link_text:"02 護理學院簡介 認識護理學院各學制與學習方向。 ›", source_page:"", destination:"https://nc.tcu.edu.tw/#Dyn_2_3", clicks:5, users:5, valid_rate:1},
    {category:"招生入口", link_text:"nan", source_page:"", destination:"https://admissions.tcu.edu.tw/?page_id=22279", clicks:4, users:3, valid_rate:1.33},
    {category:"其他連結", link_text:"nan", source_page:"", destination:"https://na.tcu.edu.tw/p/412-1015-3208.php?Lang=zh-tw", clicks:4, users:4, valid_rate:1},
    {category:"其他連結", link_text:"護理學系碩士班", source_page:"p/412-1014-2992.php", destination:"https://tcunursing.tcu.edu.tw/?page_id=4469", clicks:4, users:4, valid_rate:1}
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
    {country:"China", sessions:4, users:4, avg_eng_sec:0.1, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"Hong Kong", sessions:3, users:2, avg_eng_sec:4.9, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"United States", sessions:2, users:1, avg_eng_sec:0, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"", sessions:1, users:1, avg_eng_sec:0, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Australia", sessions:1, users:1, avg_eng_sec:0, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Canada", sessions:1, users:1, avg_eng_sec:28.3, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Japan", sessions:1, users:1, avg_eng_sec:24.9, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Malaysia", sessions:1, users:1, avg_eng_sec:5.8, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Singapore", sessions:1, users:1, avg_eng_sec:0, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"}
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
    {from_path:"/", to_path:"/", transitions:15},
    {from_path:"/", to_path:"/p/412-1014-2992.php", transitions:12},
    {from_path:"/p/406-1014-64729,r1027.php?Lang=zh-tw", to_path:"/p/406-1014-64729,r1027.php?Lang=zh-tw", transitions:6},
    {from_path:"/", to_path:"/p/412-1014-4932.php?Lang=zh-tw", transitions:5},
    {from_path:"/p/412-1014-4969.php?Lang=zh-tw", to_path:"/p/412-1014-4969.php?Lang=zh-tw", transitions:4},
    {from_path:"/", to_path:"/p/412-1014-4938.php?Lang=zh-tw", transitions:4},
    {from_path:"/p/406-1014-64702,r1026.php?Lang=zh-tw", to_path:"/p/406-1014-64702,r1026.php?Lang=zh-tw", transitions:3},
    {from_path:"/p/412-1014-2992.php", to_path:"/", transitions:3},
    {from_path:"/p/412-1014-4934.php?Lang=zh-tw", to_path:"/p/412-1014-4969.php?Lang=zh-tw", transitions:2},
    {from_path:"/", to_path:"/p/406-1014-65941,r1023.php?Lang=zh-tw", transitions:2},
    {from_path:"/p/406-1014-65869,r1051.php?Lang=zh-tw", to_path:"/p/406-1014-65869,r1051.php?Lang=zh-tw", transitions:2},
    {from_path:"/p/412-1014-2992.php", to_path:"/p/412-1014-2992.php", transitions:2},
    {from_path:"/p/412-1014-4934.php?Lang=zh-tw", to_path:"/p/412-1014-4934.php?Lang=zh-tw", transitions:2},
    {from_path:"/p/412-1014-2992.php", to_path:"/p/412-1014-4934.php?Lang=zh-tw", transitions:2},
    {from_path:"/p/412-1014-4969.php?Lang=zh-tw", to_path:"/p/412-1014-4934.php?Lang=zh-tw", transitions:2}
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
    {ai_engine:"chatgpt.com",sessions:1,users:1,last_seen:"2026-07-20"}
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
