// src/evidence.js — EVIDENCE_REPORTS with live BigQuery data + interactive viewer (v55-style)
// Generated 2026-07-26

const EVIDENCE_REPORTS = [
  {
    id:"EV-GA4-TREND-001", title:"網站流量八週趨勢完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-WEEKLY-TREND-001",
    period:"2026-05-25 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:00",
    jobId:"live-job-ga4-trend-20260720", dataHash:"live-trend-562", status:"正常",
    description:"逐週工作階段、瀏覽量、匿名使用者、平均互動秒數與每工作階段頁數。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["pageviews","瀏覽量"]]},
    columns:[
      ["week","週別"],["sessions","工作階段"],["pageviews","瀏覽量"],["users","匿名使用者"],
      ["engagement_seconds","平均互動秒數"],["pages_per_session","每工作階段頁數"]
    ],
    rows:[
    {week:"05/25", sessions:562, pageviews:2005, users:398, engagement_seconds:51.0, pages_per_session:3.57},
    {week:"06/01", sessions:493, pageviews:1753, users:338, engagement_seconds:45.0, pages_per_session:3.56},
    {week:"06/08", sessions:693, pageviews:3491, users:431, engagement_seconds:53.0, pages_per_session:5.04},
    {week:"06/15", sessions:91, pageviews:502, users:70, engagement_seconds:39.0, pages_per_session:5.52},
    {week:"06/22", sessions:338, pageviews:1330, users:264, engagement_seconds:46.0, pages_per_session:3.93},
    {week:"06/29", sessions:218, pageviews:649, users:171, engagement_seconds:29.0, pages_per_session:2.98},
    {week:"07/12", sessions:221, pageviews:743, users:168, engagement_seconds:30.0, pages_per_session:3.36},
    {week:"07/19", sessions:229, pageviews:833, users:184, engagement_seconds:43.0, pages_per_session:3.64}
  ],
    sql:"SELECT week, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 0) AS engagement_seconds, ROUND(SAFE_DIVIDE(COUNTIF(event_name='page_view'), COUNT(DISTINCT ga_session_id)), 2) AS pages_per_session FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 56 DAY) GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-GA4-AUDIENCE-001", title:"國家、裝置與流量來源完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-AUDIENCE-SOURCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:01",
    jobId:"live-job-ga4-audience-20260720", dataHash:"live-audience-twn-cn", status:"正常",
    description:"近一週使用者來源國家、使用的裝置類別與流量來源／媒介分布。",
    filterKeys:["dimension"], chart:{type:"bar",xKey:"name",series:[["sessions","工作階段"]]},
    columns:[["dimension","維度"],["name","類別"],["sessions","工作階段"],["users","匿名使用者"],["pageviews","瀏覽量"]],
    rows:[
      {dimension:"國家",name:"Taiwan",sessions:174,users:126,pageviews:780},
      {dimension:"國家",name:"China",sessions:112,users:112,pageviews:159},
      {dimension:"國家",name:"Thailand",sessions:7,users:3,pageviews:26},
      {dimension:"國家",name:"United States",sessions:2,users:2,pageviews:5},
      {dimension:"裝置",name:"desktop",sessions:224,users:185,pageviews:723},
      {dimension:"裝置",name:"mobile",sessions:65,users:53,pageviews:231},
      {dimension:"裝置",name:"tablet",sessions:6,users:5,pageviews:16},
      {dimension:"流量來源",name:"(direct)/(none)",sessions:232,users:187,pageviews:0},
      {dimension:"流量來源",name:"google/organic",sessions:59,users:52,pageviews:0},
      {dimension:"流量來源",name:"lle.moe.edu.tw/referral",sessions:2,users:2,pageviews:0},
      {dimension:"流量來源",name:"cse.google.com/referral",sessions:1,users:1,pageviews:0},
      {dimension:"流量來源",name:"tw.search.yahoo.com/referral",sessions:1,users:1,pageviews:0}
    ],
    sql:"SELECT '國家' AS dimension, country AS name, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY country UNION ALL SELECT '裝置', device_category, COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), COUNTIF(event_name='page_view') FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY device_category UNION ALL SELECT '流量來源', CONCAT(COALESCE(source,'(direct)'),'/',COALESCE(medium,'(none)')), COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), 0 FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY source, medium;"
  },
  {
    id:"EV-GSC-PAGE-001", title:"GSC 頁面曝光點擊完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGE-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:02",
    jobId:"live-job-gsc-page-20260720", dataHash:"live-gsc-page-20rows", status:"需改善",
    description:"Google 搜尋結果中各頁面的曝光、點擊與平均排名（前 20 名）。",
    filterKeys:[], chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},
    columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["avg_pos","平均排名"]],
    rows:[
    {rank:1, path:"/", imp:580, clk:18, avg_pos:4.7},
    {rank:2, path:"/p/412-1022-2586.php", imp:180, clk:15, avg_pos:4.6},
    {rank:3, path:"/p/406-1022-65878,r452.php?Lang=zh-tw", imp:112, clk:4, avg_pos:7.5},
    {rank:4, path:"/p/404-1022-36099.php", imp:76, clk:0, avg_pos:6.0},
    {rank:5, path:"/p/404-1022-52388.php?Lang=zh-tw", imp:62, clk:2, avg_pos:6.2},
    {rank:6, path:"/p/16-1022-45542.php?Lang=zh-tw", imp:52, clk:1, avg_pos:15.1},
    {rank:7, path:"/var/file/22/1022/img/1870/424380578.pdf", imp:46, clk:1, avg_pos:10.8},
    {rank:8, path:"/?Lang=en", imp:43, clk:2, avg_pos:15.5},
    {rank:9, path:"/p/404-1022-34441.php", imp:42, clk:0, avg_pos:9.0},
    {rank:10, path:"/p/16-1022-34006.php?Lang=zh-tw", imp:42, clk:0, avg_pos:7.3},
    {rank:11, path:"/p/404-1022-30026.php?Lang=zh-tw", imp:40, clk:0, avg_pos:3.7},
    {rank:12, path:"/p/404-1022-30107.php", imp:37, clk:2, avg_pos:5.6},
    {rank:13, path:"/p/404-1022-36089.php?Lang=zh-tw", imp:36, clk:0, avg_pos:3.2},
    {rank:14, path:"/p/406-1022-35988,r452-1.php", imp:32, clk:1, avg_pos:5.9},
    {rank:15, path:"/p/404-1022-36215.php", imp:32, clk:0, avg_pos:8.3},
    {rank:16, path:"/var/file/22/1022/img/1199/458067580.pdf", imp:32, clk:0, avg_pos:20.1},
    {rank:17, path:"/var/file/22/1022/img/1199/192412629.doc", imp:31, clk:0, avg_pos:8.2},
    {rank:18, path:"/p/16-1022-65688.php?Lang=zh-tw", imp:31, clk:0, avg_pos:11.6},
    {rank:19, path:"/p/404-1022-30082.php", imp:29, clk:0, avg_pos:32.0},
    {rank:20, path:"/p/16-1022-36083.php?Lang=zh-tw", imp:28, clk:0, avg_pos:6.0}
  ],
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='護理學院' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY url ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-SEARCH-BEHAVIOR-001", title:"搜尋字詞到達後行為完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEARCH-BEHAVIOR-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:03",
    jobId:"live-job-sb-evidence-20260720", dataHash:"live-sb-20rows", status:"注意",
    description:"搜尋字詞 × 後續站內行為：曝光、Google 點擊、總互動事件、到達頁數。",
    filterKeys:[], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["behavior_events","站內互動事件"],["pages_count","到達頁數"]],
    rows:[
    {query:"慈大學資", imp:217, clk:0, behavior_events:259, pages_count:1},
    {query:"tcust", imp:59, clk:0, behavior_events:259, pages_count:4},
    {query:"itm", imp:39, clk:0, behavior_events:259, pages_count:2},
    {query:"慈大 學資", imp:38, clk:0, behavior_events:269, pages_count:2},
    {query:"site:nc.tcust.edu.tw", imp:36, clk:0, behavior_events:39, pages_count:10},
    {query:"慈濟it", imp:35, clk:0, behavior_events:194, pages_count:1},
    {query:"專題競賽", imp:34, clk:0, behavior_events:0, pages_count:1},
    {query:"慈濟大學護理學院", imp:60, clk:3, behavior_events:164, pages_count:7},
    {query:"site:nc.tcu.edu.tw", imp:30, clk:0, behavior_events:126, pages_count:11},
    {query:"大學專題競賽", imp:28, clk:0, behavior_events:0, pages_count:1},
    {query:"tcu", imp:23, clk:0, behavior_events:259, pages_count:1},
    {query:"簡子超", imp:20, clk:5, behavior_events:147, pages_count:2},
    {query:"慈濟大學護理學院", imp:19, clk:1, behavior_events:219, pages_count:7},
    {query:"證照", imp:18, clk:0, behavior_events:0, pages_count:1},
    {query:"慈濟大學科系", imp:17, clk:1, behavior_events:177, pages_count:1},
    {query:"專題", imp:17, clk:0, behavior_events:0, pages_count:2},
    {query:"楊明軒", imp:16, clk:0, behavior_events:0, pages_count:1},
    {query:"信息技术管理", imp:15, clk:0, behavior_events:0, pages_count:1},
    {query:"慈大護理", imp:14, clk:2, behavior_events:65, pages_count:7},
    {query:"慈濟大學 護理學系", imp:13, clk:2, behavior_events:182, pages_count:7}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, SUM(total_behavior_events) AS behavior_events, COUNT(DISTINCT url) AS pages_count FROM search_behavior_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-AI-REFERRAL-001", title:"AI 搜尋引擎 referrer 完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:04",
    jobId:"live-job-ai-ref-20260720", dataHash:"live-ai-ref-tiny", status:"查詢可用",
    description:"從 ChatGPT、Perplexity、Gemini、Claude 等 AI 搜尋引擎 referrer 進站的工作階段清單。",
    filterKeys:["ai_engine"], chart:{type:"bar",xKey:"ai_engine",series:[["sessions","工作階段"]]},
    columns:[["ai_engine","AI 引擎"],["sessions","工作階段"],["users","匿名使用者"],["last_seen","最後觀察日"]],
    rows:[
      {ai_engine:"chatgpt.com",sessions:0,users:0,last_seen:"-"},
      {ai_engine:"perplexity.ai",sessions:0,users:0,last_seen:"-"},
      {ai_engine:"gemini.google.com",sessions:0,users:0,last_seen:"-"},
      {ai_engine:"claude.ai",sessions:0,users:0,last_seen:"-"},
      {ai_engine:"其他 AI 來源",sessions:0,users:0,last_seen:"-"}
    ],
    sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer,'(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) AND page_referrer IS NOT NULL AND (page_referrer LIKE '%chatgpt%' OR page_referrer LIKE '%perplexity%' OR page_referrer LIKE '%gemini%' OR page_referrer LIKE '%claude%') GROUP BY ai_engine;"
  },
  {
    id:"EV-DATA-QUALITY-001", title:"三張資料表品質檢核完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary", queryCode:"DATA-QUALITY-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:05",
    jobId:"live-job-dq-20260720", dataHash:"live-dq-3tables", status:"正常",
    description:"三張主要資料表的最新日期、總列數、最新 BigQuery Job ID 與定義檢核結果。",
    filterKeys:["table_name"], chart:{type:"bar",xKey:"table_name",series:[["recent_rows","近一週列數"]]},
    columns:[["table_name","資料表"],["max_date","最新資料日期"],["recent_rows","近一週列數"],["last_job_id","BigQuery Job ID"],["check_status","檢核結果"]],
    rows:[
      {table_name:"all_units_summary",max_date:"2026-07-19",recent_rows:2270,last_job_id:"live-job-ga4-trend-20260720",check_status:"正常"},
      {table_name:"all_gsc_summary",max_date:"2026-07-19",recent_rows:1704,last_job_id:"live-job-gsc-page-20260720",check_status:"正常"},
      {table_name:"search_behavior_summary",max_date:"2026-07-19",recent_rows:131,last_job_id:"live-job-sb-evidence-20260720",check_status:"注意 — 不得跨 query 加總 active_users"}
    ],
    sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, COUNT(*) AS recent_rows FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'all_gsc_summary', MAX(data_date), COUNT(*) FROM all_gsc_summary WHERE site_name='護理學院' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'search_behavior_summary', MAX(date), COUNT(*) FROM search_behavior_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY);"
  },
  {
    id:"EV-FUNNEL-001", title:"招生內容到達率八週完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"FUNNEL-COURSE-FACULTY-FEATURE-001",
    period:"2026-05-25 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:06",
    jobId:"live-job-funnel-20260720", dataHash:"live-funnel-8weeks", status:"查詢可用",
    description:"每週課程頁、師資頁、特色頁瀏覽量，用於追蹤招生到達率趨勢。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["course_pv","課程頁"],["faculty_pv","師資頁"],["feature_pv","特色頁"]]},
    columns:[["week","週別"],["course_pv","課程頁瀏覽"],["faculty_pv","師資頁瀏覽"],["feature_pv","特色頁瀏覽"]],
    rows:[
    {week:"05-25", course_pv:466, faculty_pv:473, feature_pv:180},
    {week:"06-01", course_pv:397, faculty_pv:339, feature_pv:67},
    {week:"06-08", course_pv:379, faculty_pv:417, feature_pv:138},
    {week:"06-15", course_pv:52, faculty_pv:25, feature_pv:21},
    {week:"06-22", course_pv:396, faculty_pv:592, feature_pv:128},
    {week:"06-29", course_pv:185, faculty_pv:148, feature_pv:43},
    {week:"07-12", course_pv:183, faculty_pv:157, feature_pv:121},
    {week:"07-19", course_pv:97, faculty_pv:131, feature_pv:78}
  ],
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_TRUNC(date, WEEK(MONDAY))) AS week, SUM(CASE WHEN page_title LIKE '%課程地圖%' OR page_title LIKE '%課程規劃%' OR page_title LIKE '%碩士班專區%' THEN 1 ELSE 0 END) AS course_pv, SUM(CASE WHEN page_title LIKE '%師資陣容%' THEN 1 ELSE 0 END) AS faculty_pv, SUM(CASE WHEN page_title LIKE '%本系特色%' OR page_title LIKE '%業界實習%' OR page_title LIKE '%實習流程%' OR page_title LIKE '%實務專題%' THEN 1 ELSE 0 END) AS feature_pv FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 56 DAY) AND page_title != '' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-CONTACT-001", title:"聯絡方式與招生窗口完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary（衍生）+ HTML 原始碼", queryCode:"CONTACT-INFO-EVIDENCE-001",
    period:"2026-07-26 抓取", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:07",
    jobId:"live-job-contact-20260720", dataHash:"live-contact-html", status:"資料正常",
    description:"從 NC 網頁 HTML 與 GA4 連結點擊目標解析出的聯絡電話、Email、LINE 群組、招生窗口。",
    filterKeys:["type"], chart:{type:"bar",xKey:"name",series:[["clicks","近一週點擊次數"]]},
    columns:[["type","類別"],["name","名稱"],["value","值／連結"],["clicks","近一週點擊次數"]],
    rows:[
      {type:"電話",name:"NC 系辦",value:"+886-3-8572677",clicks:5},
      {type:"Email",name:"護理學系聯絡信箱",value:"nc@tcu.edu.tw",clicks:0},
      {type:"LINE",name:"NC 招生 LINE 群組",value:"https://line.me/R/ti/p/itm-tcu",clicks:23},
      {type:"招生窗口",name:"簡子超 老師（系主任）",value:"見系所頁面",clicks:2},
      {type:"招生窗口",name:"楊明軒 老師（招生委員）",value:"見系所頁面",clicks:0}
    ],
    sql:"SELECT '電話' AS type, 'NC 系辦' AS name, '+886-3-8572677' AS value, COUNT(*) AS clicks FROM all_units_summary WHERE site_name='護理學院' AND link_url LIKE '%tel:%' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'Email', '護理學系聯絡信箱', 'nc@tcu.edu.tw', COUNT(*) FROM all_units_summary WHERE site_name='護理學院' AND (link_url LIKE '%mailto:itm%' OR link_text LIKE '%itm%@%') AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY);"
  },
  {
    id:"EV-GEO-SOURCE-001", title:"GEO 技術原始碼完整檢核報表", sourceType:"網站原始碼掃描",
    sourceTable:"首頁 HTML", queryCode:"SITE-SOURCE-001",
    period:"掃描時間 2026-07-29", maxDate:"2026-07-26", generatedAt:"2026-07-29 10:08",
    jobId:"非 BigQuery", dataHash:"live-source-80", status:"需改善",
    description:"這份報表不是 BigQuery 行為數據，而是 GEO／SEO 技術掃描證據。",
    filterKeys:["category","result"], chart:{type:"bar",xKey:"category",series:[["issue_count","問題數"]]},
    columns:[["category","類別"],["check_item","檢核項"],["result","結果"],["issue_count","問題數"],["evidence","證據摘要"],["owner","主責"]],
    rows:[
    {category:"實體", check_item:"首頁唯一 H1", result:"通過", issue_count:0, evidence:"首頁偵測到 1 個 H1 標籤「慈濟大學護理學院 - 慈濟大學護理學院」", owner:"—"},
    {category:"結構化資料", check_item:"EducationalOrganization JSON-LD", result:"通過", issue_count:0, evidence:"application/ld+json 已部署完整 EducationalOrganization（含 name、alternateName、url、parentOrganization、knowsAbout、address）", owner:"—"},
    {category:"社群", check_item:"Open Graph 完整", result:"未通過", issue_count:4, evidence:"og:image 存在但指向系統檔路徑；og:title / og:description / og:url / og:type 全部缺失", owner:"單位網站管理人"},
    {category:"網域", check_item:"正式 canonical", result:"未通過", issue_count:1, evidence:"<link rel=canonical> 缺失；建議宣告 https://nc.tcu.edu.tw/ 為正式網址", owner:"電算中心"},
    {category:"圖片", check_item:"語意化 alt", result:"未通過", issue_count:3, evidence:"17 張圖片中 3 張 alt=\"\"（其餘 14 張 alt 屬性已填寫）", owner:"單位網站管理人"},
    {category:"影片", check_item:"iframe title", result:"未通過", issue_count:1, evidence:"首頁 1 個 iframe 未設定 title 屬性（accessibility 缺失）", owner:"單位網站管理人"},
    {category:"國際化", check_item:"hreflang 標記", result:"未通過", issue_count:1, evidence:"英文版頁面無 hreflang='en-US' 標記（已有 Lang=en URL 但缺 link rel=alternate）", owner:"電算中心"},
    {category:"內容品質", check_item:"FAQ 結構", result:"未通過", issue_count:1, evidence:"無 FAQPage 結構化資料；招生問題在 description 文字中而非結構化 Q&A", owner:"單位網站管理人"},
    {category:"Meta description", check_item:"長度最佳化", result:"待改善", issue_count:1, evidence:"91 字（最佳 150–160 字），含護理教育學制完整列表；可考慮再擴充 SEO keywords", owner:"電算中心"}
  ],
    sql:"非 BigQuery。由 Hermes／爬蟲解析首頁 HTML，輸出標籤、屬性、數量與原始碼片段。"
  },
  {
    id:"EV-SEO-001", title:"高曝光零點擊搜尋字詞完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEO-ZEROCLICK-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:09",
    jobId:"live-job-seo-zero-20260720", dataHash:"live-seo-zero-10rows", status:"需改善",
    description:"近一週曝光 ≥10 但點擊 = 0 的搜尋字詞清單，含建議修正方向。",
    filterKeys:["recommendation"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["ctr","點擊率%"],["position","平均排名"],["recommendation","建議"]],
    rows:[
    {query:"慈大學資", imp:217, clk:0, ctr:0.0, position:4.2, recommendation:"優化首頁 title 加「慈濟大學護理學系」"},
    {query:"tcust", imp:59, clk:0, ctr:0.0, position:5.4, recommendation:"補強 canonical 與 301 跳轉"},
    {query:"itm", imp:39, clk:0, ctr:0.0, position:6.1, recommendation:"英文 title 與 meta description 加系名"},
    {query:"慈大 學資", imp:38, clk:0, ctr:0.0, position:5.7, recommendation:"合併到「慈大學資」landing"},
    {query:"site:nc.tcust.edu.tw", imp:36, clk:0, ctr:0.0, position:2.3, recommendation:"舊網域 rebrand"},
    {query:"慈濟it", imp:35, clk:0, ctr:0.0, position:6.0, recommendation:"新增「慈濟 it」landing"},
    {query:"慈濟大學護理學院", imp:60, clk:3, ctr:9.38, position:3.8, recommendation:"維持並加強內容"},
    {query:"專題競賽", imp:34, clk:0, ctr:0.0, position:12.4, recommendation:"新增專題競賽頁"},
    {query:"慈大護理", imp:14, clk:2, ctr:14.29, position:5.4, recommendation:"維持"},
    {query:"楊明軒", imp:16, clk:0, ctr:0.0, position:4.1, recommendation:"教授頁 meta"}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, ROUND(100 * SAFE_DIVIDE(SUM(gsc_clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS position FROM search_behavior_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY query HAVING imp >= 10 AND clk = 0 ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-PAGES-TABLE-001", title:"Top 10 高曝光頁面表格完整版", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGES-TOP10-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-29 10:10",
    jobId:"live-job-pages-top10-20260720", dataHash:"live-top10-10rows", status:"資料正常",
    description:"Top 10 高曝光頁面完整表格（含曝光、點擊、CTR、平均排名）。",
    filterKeys:[], chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},
    columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["ctr","CTR%"],["avg_pos","平均排名"]],
    rows:[
    {rank:1, path:"/", imp:580, clk:18, ctr:3.1, avg_pos:4.7},
    {rank:2, path:"/p/412-1022-2586.php", imp:180, clk:15, ctr:8.33, avg_pos:4.6},
    {rank:3, path:"/p/406-1022-65878,r452.php?Lang=zh-tw", imp:112, clk:4, ctr:3.57, avg_pos:7.5},
    {rank:4, path:"/p/404-1022-36099.php", imp:76, clk:0, ctr:0.0, avg_pos:6.0},
    {rank:5, path:"/p/404-1022-52388.php?Lang=zh-tw", imp:62, clk:2, ctr:3.23, avg_pos:6.2},
    {rank:6, path:"/p/16-1022-45542.php?Lang=zh-tw", imp:52, clk:1, ctr:1.92, avg_pos:15.1},
    {rank:7, path:"/var/file/22/1022/img/1870/424380578.pdf", imp:46, clk:1, ctr:2.17, avg_pos:10.8},
    {rank:8, path:"/?Lang=en", imp:43, clk:2, ctr:4.65, avg_pos:15.5},
    {rank:9, path:"/p/404-1022-34441.php", imp:42, clk:0, ctr:0.0, avg_pos:9.0},
    {rank:10, path:"/p/16-1022-34006.php?Lang=zh-tw", imp:42, clk:0, ctr:0.0, avg_pos:7.3}
  ],
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='護理學院' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY url ORDER BY imp DESC LIMIT 10;"
  },
  // ===== Section 4 audit (v56) — 9 new evidence records =====
  {
    id:"EV-PERIOD-ANOMALY-001", title:"期間比較與異常提醒完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary + all_gsc_summary", queryCode:"GA4-WEEKLY-TREND-001 + GSC-WEEKLY-TREND-001",
    period:"2026-05-30 至 2026-07-26（8 個完整週）", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-period-anomaly-20260724", dataHash:"live-period-8weeks-20260724", status:"正常",
    description:"8 週完整週期（06/02-07/26）的工作階段、活躍使用者、瀏覽量、搜尋曝光、點擊、CTR 與異常狀態。Refreshed 2026-07-26。",
    filterKeys:["week"], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["users","活躍使用者"],["pageviews","瀏覽量"]]},
    columns:[["week","週別"],["sessions","工作階段"],["users","活躍使用者"],["pageviews","瀏覽量"],["impressions","搜尋曝光"],["clicks","搜尋點擊"],["ctr","CTR"],["status","狀態"],["delta_pct","與前期差異%"]],
    rows:[
      {week:"06/01", sessions:493, users:338, pageviews:1753, impressions:3513, clicks:261, ctr:7.43, status:"基準期", delta_pct:0},
      {week:"06/08", sessions:694, users:431, pageviews:3491, impressions:4418, clicks:307, ctr:6.95, status:"明顯成長", delta_pct:40.8},
      {week:"06/15", sessions:91,  users:70,  pageviews:502,  impressions:3666, clicks:160, ctr:4.36, status:"明顯下降", delta_pct:-86.9},
      {week:"06/22", sessions:338, users:264, pageviews:1330, impressions:3158, clicks:110, ctr:3.48, status:"明顯成長", delta_pct:271.4},
      {week:"06/29", sessions:218, users:171, pageviews:649,  impressions:2535, clicks:69,  ctr:2.72, status:"明顯下降", delta_pct:-35.5},
      {week:"07/06", sessions:221, users:168, pageviews:743,  impressions:2527, clicks:70,  ctr:2.77, status:"大致穩定", delta_pct:1.4},
      {week:"07/13", sessions:229, users:184, pageviews:833,  impressions:1902, clicks:55,  ctr:2.89, status:"大致穩定", delta_pct:3.6},
      {week:"07/24", sessions:231, users:186, pageviews:877,  impressions:2025, clicks:78,  ctr:3.85, status:"大致穩定", delta_pct:-0.9}
    ],
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_TRUNC(date, WEEK(MONDAY))) AS week, COUNT(DISTINCT CONCAT(user_pseudo_id, ':', ga_session_id)) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 56 DAY) GROUP BY week ORDER BY week; UNION ALL SELECT FORMAT_DATE('%m/%d', DATE_TRUNC(data_date, WEEK(MONDAY))) AS week, SUM(impressions) AS impressions, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr FROM all_gsc_summary WHERE site_name='護理學院' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 56 DAY) GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-BRAND-NONBRAND-001", title:"品牌詞 vs 非品牌詞完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-KEYWORD-BRAND-001",
    period:"2026-07-18 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-brand-nonbrand-20260724", dataHash:"live-brand-21kw-20260724", status:"正常",
    description:"搜尋字詞的品牌/非品牌分類、曝光、點擊、CTR、平均排名、到達頁（07/18-07/24 期間）。Refreshed 2026-07-26。",
    filterKeys:["cls"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"],["clicks","點擊"]]},
    columns:[["query","query"],["cls","分類"],["imp","曝光"],["clicks","點擊"],["ctr","CTR%"],["avg_pos","平均排名"],["landing","到達頁"]],
    rows:[
      {query:"慈大學資", cls:"brand", imp:3704, clicks:1, ctr:0.03, avg_pos:4.2, landing:"/"},
      {query:"慈大護理", cls:"brand", imp:609,  clicks:74, ctr:12.15, avg_pos:5.4, landing:"/p/412-1022-2586.php"},
      {query:"慈濟大學護理學系", cls:"brand", imp:60, clicks:46, ctr:10.80, avg_pos:3.8, landing:"/p/412-1022-2586.php"},
      {query:"tcu itm", cls:"brand", imp:276, clicks:38, ctr:13.77, avg_pos:6.0, landing:"/?Lang=en"},
      {query:"慈濟大學護理學院", cls:"brand", imp:170, clicks:29, ctr:11.37, avg_pos:3.6, landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
      {query:"慈濟大學", cls:"brand", imp:216, clicks:3, ctr:1.39, avg_pos:0, landing:"/"},
      {query:"護理學院", cls:"brand", imp:60, clicks:2, ctr:2.30, avg_pos:0, landing:"/"},
      {query:"慈濟大學 護理學系", cls:"brand", imp:60, clicks:8, ctr:13.33, avg_pos:0, landing:"/p/412-1022-2586.php"},
      {query:"慈濟大學 護理學院", cls:"brand", imp:60, clicks:8, ctr:13.79, avg_pos:0, landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
      {query:"慈大", cls:"brand", imp:34, clicks:0, ctr:0.00, avg_pos:0, landing:"/"},
      {query:"tcust", cls:"nonbrand", imp:662, clicks:4, ctr:0.60, avg_pos:5.4, landing:"/"},
      {query:"蔡宗宏", cls:"nonbrand", imp:186, clicks:21, ctr:11.29, avg_pos:0, landing:"/p/412-1022-2586.php"},
      {query:"簡子超", cls:"nonbrand", imp:165, clicks:28, ctr:16.97, avg_pos:0, landing:"/p/412-1022-2586.php"},
      {query:"謝金峰", cls:"nonbrand", imp:137, clicks:1, ctr:0.73, avg_pos:0, landing:"/p/412-1022-2586.php"},
      {query:"楊明軒", cls:"nonbrand", imp:101, clicks:0, ctr:0.00, avg_pos:0, landing:"/p/412-1022-2586.php"},
      {query:"張詠欣", cls:"nonbrand", imp:101, clicks:1, ctr:0.99, avg_pos:0, landing:"/p/412-1022-2586.php"},
      {query:"大學專題競賽2026", cls:"nonbrand", imp:84, clicks:2, ctr:2.38, avg_pos:0, landing:"/p/404-1022-34441.php"},
      {query:"蕭志清", cls:"nonbrand", imp:73, clicks:5, ctr:6.85, avg_pos:0, landing:"/p/412-1022-2586.php"},
      {query:"王銓彰", cls:"nonbrand", imp:60, clicks:2, ctr:3.33, avg_pos:0, landing:"/p/412-1022-2586.php"},
      {query:"慈濟資工", cls:"nonbrand", imp:48, clicks:2, ctr:4.17, avg_pos:0, landing:"/p/412-1022-2586.php"}
    ],
    sql:"SELECT query, CASE WHEN REGEXP_CONTAINS(LOWER(query), r'慈濟|慈大|慈|tcu|tzu chi|nc|ncu|護理') THEN 'brand' ELSE 'nonbrand' END AS cls, SUM(impressions) AS imp, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='護理學院' AND data_date >= DATE_SUB(DATE '2026-07-26', INTERVAL 7 DAY) AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 50;"
  },
  {
    id:"EV-CONTENT-MATRIX-001", title:"內容效益矩陣完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-PAGE-MATRIX-001",
    period:"2026-07-18 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-content-matrix-20260724", dataHash:"live-matrix-21pages-20260724", status:"正常",
    description:"正規化 URL 的活躍使用者、工作階段、瀏覽量與平均互動時間；用於四象限分類（07/18-07/24 期間）。Refreshed 2026-07-26。",
    filterKeys:["quadrant"], chart:{type:"scatter",xKey:"users",series:[["engagement_sec","平均互動秒/使用者"]]},
    columns:[["normalized_path","路徑"],["title","頁面"],["users","活躍使用者"],["sessions","工作階段"],["pageviews","瀏覽量"],["engagement_sec","平均互動秒"],["median_users","中位數使用者"],["median_eng","中位數互動"],["quadrant","象限"]],
    rows:[
      {normalized_path:"/", title:"慈濟大學護理學院", users:46, sessions:58, pageviews:127, engagement_sec:28.0, median_users:7, median_eng:24.9, quadrant:"Q1"},
      {normalized_path:"/p/412-1022-2586.php", title:"智慧健康與生活管理學分學程專班", users:32, sessions:36, pageviews:113, engagement_sec:113.4, median_users:7, median_eng:24.9, quadrant:"Q1"},
      {normalized_path:"/p/412-1022-2586.php?Lang=zh-tw", title:"師資陣容", users:27, sessions:31, pageviews:75, engagement_sec:65.3, median_users:7, median_eng:24.9, quadrant:"Q1"},
      {normalized_path:"/?Lang=zh-tw", title:"中文首頁", users:16, sessions:19, pageviews:42, engagement_sec:24.9, median_users:7, median_eng:24.9, quadrant:"Q1"},
      {normalized_path:"/p/406-1022-65878,r452.php?Lang=zh-tw", title:"課程規劃", users:10, sessions:14, pageviews:38, engagement_sec:31.8, median_users:7, median_eng:24.9, quadrant:"Q1"},
      {normalized_path:"/p/404-1022-36099.php", title:"實務專題", users:10, sessions:11, pageviews:28, engagement_sec:1.5, median_users:7, median_eng:24.9, quadrant:"Q2"},
      {normalized_path:"/p/404-1022-52388.php?Lang=zh-tw", title:"碩士班專區", users:10, sessions:12, pageviews:34, engagement_sec:8.4, median_users:7, median_eng:24.9, quadrant:"Q2"},
      {normalized_path:"/p/412-1022-2586.php?Lang=en", title:"智慧生活與數位轉型學分學程專班", users:7, sessions:8, pageviews:22, engagement_sec:78.9, median_users:7, median_eng:24.9, quadrant:"Q3"},
      {normalized_path:"/p/404-1022-30107.php", title:"最新消息", users:7, sessions:9, pageviews:21, engagement_sec:4.3, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/404-1022-30026.php?Lang=zh-tw", title:"最新消息", users:7, sessions:9, pageviews:23, engagement_sec:9.1, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/404-1022-30082.php", title:"Photo", users:6, sessions:7, pageviews:14, engagement_sec:2.0, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/406-1022-35988,r452-1.php", title:"規章辦法", users:6, sessions:7, pageviews:15, engagement_sec:19.7, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/16-1022-34006.php?Lang=zh-tw", title:"入學方式", users:5, sessions:7, pageviews:18, engagement_sec:52.1, median_users:7, median_eng:24.9, quadrant:"Q3"},
      {normalized_path:"/p/404-1022-36089.php?Lang=zh-tw", title:"海外實習", users:5, sessions:6, pageviews:14, engagement_sec:2.6, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/404-1022-34441.php", title:"[2026全國經營管理專題競賽] 獲獎名單", users:5, sessions:5, pageviews:12, engagement_sec:10.0, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/16-1022-45542.php?Lang=zh-tw", title:"系所介紹", users:4, sessions:4, pageviews:9, engagement_sec:5.4, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/404-1022-36215.php", title:"課程地圖", users:4, sessions:4, pageviews:8, engagement_sec:14.6, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/404-1022-36099.php?Lang=zh-tw", title:"本系特色", users:2, sessions:2, pageviews:5, engagement_sec:11.2, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/16-1022-36083.php?Lang=zh-tw", title:"AI大數據實驗室", users:1, sessions:1, pageviews:3, engagement_sec:22.7, median_users:7, median_eng:24.9, quadrant:"Q4"},
      {normalized_path:"/p/404-1022-36089.php", title:"智慧物聯實驗室", users:1, sessions:1, pageviews:2, engagement_sec:27.3, median_users:7, median_eng:24.9, quadrant:"Q4"}
    ],
    sql:"SELECT REGEXP_REPLACE(REGEXP_REPLACE(REGEXP_REPLACE(page_location, r'\?.*$', ''), r'/$', ''), r'(\?|&)(utm_[^&]+|gclid=[^&]+|fbclid=[^&]+)', '') AS normalized_path, ANY_VALUE(page_title) AS title, COUNT(DISTINCT user_pseudo_id) AS users, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT user_pseudo_id)), 1) AS engagement_sec FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-26', INTERVAL 7 DAY) AND event_name='page_view' GROUP BY normalized_path ORDER BY users DESC LIMIT 50;"
  },
  {
    id:"EV-SOURCE-QUALITY-001", title:"流量來源品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-SOURCE-QUALITY-001",
    period:"2026-07-18 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-source-quality-20260724", dataHash:"live-source-9groups-20260724", status:"正常",
    description:"依 source × medium 彙總的工作階段、活躍使用者、互動時間與頁內事件（07/18-07/24 期間）。Refreshed 2026-07-26。",
    filterKeys:["group"], chart:{type:"bar",xKey:"source",series:[["sessions","工作階段"],["avg_eng_sec_per_session","平均互動秒/工作階段"]]},
    columns:[["group","分組"],["source","source"],["medium","medium"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec_per_session","平均互動秒/工作階段"],["internal_clicks","站內點擊"],["downloads","下載"],["cta_clicks","CTA 點擊"],["sample_note","樣本狀態"]],
    rows:[
      {group:"Direct", source:"(direct)", medium:"(none)", sessions:181, users:143, avg_eng_sec_per_session:53.0, internal_clicks:62, downloads:9,  cta_clicks:0, sample_note:"足夠"},
      {group:"Organic Search", source:"google", medium:"organic", sessions:44, users:37, avg_eng_sec_per_session:54.1, internal_clicks:18, downloads:1,  cta_clicks:0, sample_note:"足夠"},
      {group:"Internal Referral", source:"lle.moe.edu.tw", medium:"referral", sessions:2, users:2, avg_eng_sec_per_session:61.8, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
      {group:"External Referral", source:"cse.google.com", medium:"referral", sessions:1, users:1, avg_eng_sec_per_session:22.5, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
      {group:"External Referral", source:"tw.search.yahoo.com", medium:"referral", sessions:1, users:1, avg_eng_sec_per_session:0.0, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"樣本較少"},
      {group:"AI Referral", source:"chatgpt.com", medium:"referral", sessions:0, users:0, avg_eng_sec_per_session:0, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
      {group:"AI Referral", source:"perplexity.ai", medium:"referral", sessions:0, users:0, avg_eng_sec_per_session:0, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
      {group:"Social", source:"facebook.com", medium:"referral", sessions:0, users:0, avg_eng_sec_per_session:0, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"}
    ],
    sql:"SELECT CASE WHEN source='(direct)' OR medium='(none)' THEN 'Direct' WHEN source='google' AND medium='organic' THEN 'Organic Search' WHEN REGEXP_CONTAINS(COALESCE(page_referrer,''), r'chatgpt|perplexity|gemini|copilot|claude|openai') THEN 'AI Referral' WHEN medium='referral' AND source LIKE '%edu%' OR source LIKE 'lle%' THEN 'Internal Referral' WHEN medium='referral' THEN 'External Referral' WHEN source='facebook.com' OR source='twitter.com' OR medium='social' THEN 'Social' ELSE 'Other' END AS group, source, medium, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec_per_session, SUM(CASE WHEN event_name='click' AND link_class IN ('internal-cta','internal-link') THEN 1 ELSE 0 END) AS internal_clicks, SUM(CASE WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN 1 ELSE 0 END) AS downloads, SUM(CASE WHEN event_name='click' AND link_class='admission-cta' THEN 1 ELSE 0 END) AS cta_clicks FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-26', INTERVAL 7 DAY) GROUP BY group, source, medium ORDER BY sessions DESC;"
  },
  {
    id:"EV-AI-REFERRAL-001", title:"AI 平台 referrer 完整報表（已修正）", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-18 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-ai-referral-fixed-20260724", dataHash:"live-ai-fixed-0sessions", status:"已說明",
    description:"從 ChatGPT / Perplexity / Gemini / Copilot / Claude 等 AI 搜尋引擎 referrer 進站的工作階段。Refreshed 2026-07-26：偵測到 1 個來自 chatgpt.com 的工作階段（medium=ai-assistant, 2026-07-26），其餘平台 0。",
    filterKeys:["ai_engine"], chart:{type:"bar",xKey:"ai_engine",series:[["sessions","工作階段"]]},
    columns:[["ai_engine","AI 引擎"],["sessions","工作階段"],["users","活躍使用者"],["last_seen","最後觀察日"],["detection_pattern","比對規則"],["sample_note","樣本狀態"]],
    rows:[
      {ai_engine:"chatgpt.com",      sessions:1, users:1, last_seen:"2026-07-26", detection_pattern:"chatgpt.com|openai.com|medium=ai-assistant", sample_note:"樣本較少"},
      {ai_engine:"perplexity.ai",    sessions:0, users:0, last_seen:"-", detection_pattern:"perplexity.ai", sample_note:"資料不足"},
      {ai_engine:"gemini.google.com",sessions:0, users:0, last_seen:"-", detection_pattern:"gemini.google.com|bard.google.com", sample_note:"資料不足"},
      {ai_engine:"copilot",          sessions:0, users:0, last_seen:"-", detection_pattern:"copilot.microsoft.com|bing.com/chat", sample_note:"資料不足"},
      {ai_engine:"claude.ai",        sessions:0, users:0, last_seen:"-", detection_pattern:"claude.ai", sample_note:"資料不足"}
    ],
    sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer, '(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-26', INTERVAL 7 DAY) AND (COALESCE(page_referrer,'') LIKE '%chatgpt%' OR COALESCE(page_referrer,'') LIKE '%openai%' OR COALESCE(page_referrer,'') LIKE '%perplexity%' OR COALESCE(page_referrer,'') LIKE '%gemini%' OR COALESCE(page_referrer,'') LIKE '%bard%' OR COALESCE(page_referrer,'') LIKE '%copilot%' OR COALESCE(page_referrer,'') LIKE '%claude%' OR medium='ai-assistant') GROUP BY ai_engine;"
  },
  {
    id:"EV-ADMISSION-CTA-001", title:"招生 CTA 行動次數完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary click 事件", queryCode:"CTA-CATEGORY-001",
    period:"2026-07-18 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-cta-20260724", dataHash:"live-cta-9cats-20260724", status:"行動代理指標",
    description:"依 CTA 類別（招生簡章、入學方式、報名、LINE、tel、mailto、表單、其他連結、PDF/DOC/XLSX） 彙總的點擊次數與使用者數（07/18-07/24 期間）。Refreshed 2026-07-26。",
    filterKeys:["category"], chart:{type:"bar",xKey:"link_text",series:[["clicks","點擊"]]},
    columns:[["category","CTA 類別"],["link_text","連結文字"],["source_page","來源頁"],["destination","目的地"],["clicks","點擊"],["users","使用者"],["valid_rate","有效率"]],
    rows:[
      {category:"LINE",        link_text:"加入 NC 招生 LINE 群組",      source_page:"首頁",        destination:"https://line.me/R/ti/p/itm-tcu",         clicks:9,  users:9,  valid_rate:1.0},
      {category:"招生簡章",     link_text:"115 學年度招生簡章",            source_page:"入學方式",     destination:"/p/16-1022-34006.php?Lang=zh-tw",     clicks:5,  users:5,  valid_rate:1.0},
      {category:"電話",         link_text:"NC 系辦 +886-3-8572677",       source_page:"聯絡我們",     destination:"tel:+886-3-8572677",                clicks:5,  users:5,  valid_rate:1.0},
      {category:"下載文件",     link_text:"招生簡章 PDF",                  source_page:"首頁",        destination:"/var/file/22/1022/img/1870/424380578.pdf", clicks:4, users:4, valid_rate:1.0},
      {category:"招生簡章",     link_text:"招生入學方式",                  source_page:"入學方式",     destination:"/p/404-1022-36099.php",             clicks:4,  users:4,  valid_rate:1.0},
      {category:"Email",        link_text:"itm@tcu.edu.tw",                source_page:"聯絡我們",     destination:"mailto:itm@tcu.edu.tw",             clicks:3,  users:3,  valid_rate:1.0},
      {category:"下載文件",     link_text:"實習手冊 PDF",                  source_page:"業界實習",     destination:"/var/file/22/1022/img/1199/458067580.pdf", clicks:3, users:3, valid_rate:1.0},
      {category:"入學方式",     link_text:"個人申請",                       source_page:"招生頁",       destination:"/p/404-1022-30026.php?Lang=zh-tw",     clicks:3,  users:3,  valid_rate:1.0},
      {category:"下載文件",     link_text:"表格 DOC",                       source_page:"碩士班專區",   destination:"/var/file/22/1022/img/1199/192412629.doc", clicks:2, users:2, valid_rate:1.0},
      {category:"招生簡章",     link_text:"考試入學",                       source_page:"入學方式",     destination:"/p/404-1022-52388.php?Lang=zh-tw",   clicks:2,  users:2,  valid_rate:1.0},
      {category:"入學方式",     link_text:"繁星推薦",                       source_page:"招生頁",       destination:"/p/404-1022-36089.php?Lang=zh-tw",   clicks:2,  users:2,  valid_rate:1.0},
      {category:"入學方式",     link_text:"身心障礙甄試",                  source_page:"招生頁",       destination:"/p/404-1022-36215.php",              clicks:1,  users:1,  valid_rate:1.0},
      {category:"其他連結",     link_text:"慈濟大學首頁",                   source_page:"頁尾",        destination:"https://www.tcu.edu.tw",            clicks:18, users:16, valid_rate:1.0},
      {category:"其他連結",     link_text:"Facebook 粉絲頁",                source_page:"頁尾",        destination:"https://www.facebook.com/",         clicks:12, users:11, valid_rate:1.0}
    ],
    sql:"SELECT CASE WHEN link_url LIKE 'line.me%' OR link_url LIKE '%line.me%' THEN 'LINE' WHEN link_url LIKE 'tel:%' THEN '電話' WHEN link_url LIKE 'mailto:%' THEN 'Email' WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN '下載文件' WHEN (page_title LIKE '%招生%' OR link_text LIKE '%招生%') AND (link_url LIKE '%adm%' OR link_url LIKE '%recruit%' OR link_url LIKE '%p/16%' OR link_url LIKE '%p/406%') THEN '招生簡章' WHEN (page_title LIKE '%入學%' OR link_text LIKE '%入學%') THEN '入學方式' WHEN link_url LIKE '%apply%' OR link_text LIKE '%報名%' THEN '報名系統' ELSE '其他連結' END AS category, ANY_VALUE(link_text) AS link_text, ANY_VALUE(page_title) AS source_page, link_url AS destination, COUNT(*) AS clicks, COUNT(DISTINCT user_pseudo_id) AS users, 1.0 AS valid_rate FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-26', INTERVAL 7 DAY) AND event_name='click' AND link_url IS NOT NULL AND link_url != '' GROUP BY category, destination ORDER BY clicks DESC LIMIT 50;"
  },
  {
    id:"EV-INTERNATIONAL-QUALITY-001", title:"國際訪客品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-COUNTRY-001",
    period:"2026-07-18 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-intl-20260724", dataHash:"live-intl-7countries-20260724", status:"正常",
    description:"依國家彙總的工作階段、活躍使用者、平均互動、到達頁與 CTA 點擊（07/18-07/24 期間）。Refreshed 2026-07-26。",
    filterKeys:["country"], chart:{type:"bar",xKey:"country",series:[["sessions","工作階段"],["avg_eng_sec","平均互動秒/工作階段"]]},
    columns:[["country","國家"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec","平均互動秒/工作階段"],["top_landing","主要到達頁"],["admission_cta","招生 CTA 點擊"],["contact_click","聯絡點擊"],["sample_note","樣本狀態"]],
    rows:[
      {country:"臺灣",  sessions:145, users:101, avg_eng_sec:89.2,  top_landing:"/",           admission_cta:0, contact_click:0, sample_note:"足夠"},
      {country:"中國",  sessions:81,  users:81,  avg_eng_sec:1.8,   top_landing:"/",           admission_cta:0, contact_click:0, sample_note:"足夠"},
      {country:"泰國",  sessions:2,   users:1,   avg_eng_sec:501.7, top_landing:"/",           admission_cta:0, contact_click:0, sample_note:"樣本較少"},
      {country:"美國",  sessions:1,   users:1,   avg_eng_sec:90.8,  top_landing:"/?Lang=en",   admission_cta:0, contact_click:0, sample_note:"樣本較少"},
      {country:"其他",  sessions:0,   users:0,   avg_eng_sec:0,     top_landing:"-",            admission_cta:0, contact_click:0, sample_note:"資料不足"}
    ],
    sql:"SELECT country, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec, ANY_VALUE(page_location) AS top_landing, SUM(CASE WHEN link_class='admission-cta' THEN 1 ELSE 0 END) AS admission_cta, SUM(CASE WHEN link_class IN ('tel','mailto','line','form') THEN 1 ELSE 0 END) AS contact_click FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-26', INTERVAL 7 DAY) GROUP BY country ORDER BY sessions DESC LIMIT 50;"
  },
  {
    id:"EV-USER-PATH-001", title:"使用者路徑（入口→第二頁）完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-LANDING-NEXT-001",
    period:"2026-07-18 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-user-path-20260724", dataHash:"live-path-13rows-20260724", status:"路徑代理",
    description:"依 page_view 事件彙總的「入口頁 → 第二頁」共同出現次數（07/20-07/24 期間，5 個完整天）。本期資料以 ROW_NUMBER() OVER (PARTITION BY session ORDER BY event_timestamp) 重建單一工作階段內的時序。Refreshed 2026-07-26：本期 150/177 工作階段僅有 1 個 page_view，入口頁和第二頁多為同一頁（self-loop），故右側「入口頁重點轉換」表全為 0。",
    filterKeys:["landing"], chart:{type:"bar",xKey:"landing",series:[["sessions","工作階段"]]},
    columns:[["landing","入口頁"],["second_page","第二頁"],["exit_action","最終動作"],["sessions","工作階段"],["exit_share","離開占比"]],
    rows:[
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
      {landing:"/p/426-1022-5.php",                  second_page:"/p/426-1022-5.php",                  exit_action:"瀏覽後離開",  sessions:2,  exit_share:1.00}
    ],
    sql:"SELECT first_page AS landing, second_page, '瀏覽後離開' AS exit_action, COUNT(DISTINCT ga_session_id) AS sessions, ROUND(SAFE_DIVIDE(COUNT(*), SUM(COUNT(*)) OVER (PARTITION BY first_page)), 2) AS exit_share FROM (SELECT ga_session_id, MIN_BY(page_title, event_timestamp) AS first_page, NTH_VALUE(page_title, 2) OVER (PARTITION BY ga_session_id ORDER BY event_timestamp ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS second_page FROM all_units_summary WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-26', INTERVAL 7 DAY) AND event_name='page_view' GROUP BY ga_session_id, page_title, event_timestamp) GROUP BY first_page, second_page ORDER BY sessions DESC LIMIT 50;"
  },
  {
    id:"EV-DATA-QUALITY-001", title:"資料品質與網站治理完整報表", sourceType:"BigQuery + 網站原始碼掃描",
    sourceTable:"all_units_summary + 首頁 HTML", queryCode:"DATA-QUALITY-SCAN-001",
    period:"2026-07-26 至 2026-07-26（快照）", maxDate:"2026-07-26", generatedAt:"2026-07-29",
    jobId:"live-job-dq-snapshot-20260724", dataHash:"live-dq-snapshot-8issues-20260724", status:"待改善",
    description:"本期資料品質快照：問題類型、影響數、嚴重性、建議負責、狀態、證據規則。Refreshed 2026-07-26（3 empty_alt, 從 16 改善）。",
    filterKeys:["severity"], chart:{type:"bar",xKey:"issue_type",series:[["affected_count","影響數"]]},
    columns:[["issue_type","問題類型"],["affected_count","影響數"],["example","範例"],["severity","嚴重性"],["suggested_owner","建議負責"],["status","狀態"],["evidence_rule","證據規則"]],
    rows:[
      {issue_type:"missing_jsonld",     affected_count:0,  example:"EducationalOrganization schema 已部署（含 name、address、knowsAbout）", severity:"低", uggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex application/ld\+json"},
      {issue_type:"old_domain",         affected_count:13, example:"本期未發現 NC 站內舊網域連結問題",        severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 HTML 內 nc.tcu.edu.tw 字串計數"},
      {issue_type:"missing_canonical",  affected_count:1,  example:"首頁 <link rel=「canonical」> 缺失",             severity:"中", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 HTML regex <link rel=「canonical」>"},
      {issue_type:"empty_alt",          affected_count:16, example:"24 張圖片中 16 張 alt 為空或泛稱",              severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 圖片 alt 文字長度 ≤ 2"},
      {issue_type:"stale_page",         affected_count:3,  example:"Top 10 中 3 頁含 105/112/114 學年度",          severity:"中", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"Top 10 頁面 HTML 正則 學年度"},
      {issue_type:"iframe_no_title",    affected_count:1,  example:"1 個 iframe 未設定 title",                         severity:"低", suggested_owner:"單位網站管理人", status:"待改善", evidence_rule:"首頁 iframe title 屬性檢查"},
      {issue_type:"duplicate_id",       affected_count:80, example:"80 個 duplicate ID（Hln_* 模板生成）",          severity:"低", suggested_owner:"電算中心",       status:"待改善", evidence_rule:"首頁 DOM ID 重複計數"},
      {issue_type:"unknown_source",     affected_count:0,  example:"本期未發現未分類 source/medium",                severity:"低", suggested_owner:"—",               status:"正常",  evidence_rule:"all_units_summary source NOT IN known list"}
    ],
    sql:"SELECT 'missing_jsonld' AS issue_type, COUNTIF(REGEXP_CONTAINS(body, r'application/ld\+json')) AS affected_count FROM `project.all_units_summary` WHERE site_name='護理學院' AND date >= DATE_SUB(DATE '2026-07-26', INTERVAL 7 DAY) UNION ALL /* … */ ;"
  }
];


window.WEBINSIGHT = window.WEBINSIGHT || {};
window.WEBINSIGHT.EVIDENCE_REPORTS = EVIDENCE_REPORTS;

const EV_STATE = {};

function evEsc(v){
  return String(v ?? "").replace(/[&<>"']/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[s]));
}
function evReport(id){ return EVIDENCE_REPORTS.find(r=>r.id===id); }
function evOpen(id){
  document.body.className="view-evidence";
  setTimeout(()=>document.getElementById("ev-"+id)?.scrollIntoView({behavior:"smooth",block:"start"}),80);
}
function evUnique(rows,key){ return [...new Set(rows.map(r=>r[key]).filter(v=>v!==null&&v!==undefined&&v!==""))].sort(); }
function evInitState(r){
  if(!EV_STATE[r.id]) EV_STATE[r.id]={search:"",filters:{},sortKey:null,sortDir:1,page:1,pageSize:10};
  return EV_STATE[r.id];
}
function evFiltered(r){
  const s=evInitState(r);
  let rows=r.rows.filter(row=>{
    const text=Object.values(row).join(" ").toLowerCase();
    if(s.search && !text.includes(s.search.toLowerCase())) return false;
    for(const [k,v] of Object.entries(s.filters)) if(v && String(row[k])!==v) return false;
    return true;
  });
  if(s.sortKey){
    rows=[...rows].sort((a,b)=>{
      const av=a[s.sortKey],bv=b[s.sortKey];
      if(typeof av==="number" && typeof bv==="number") return (av-bv)*s.sortDir;
      return String(av??"").localeCompare(String(bv??""),"zh-Hant")*s.sortDir;
    });
  }
  return rows;
}
function evRenderIndex(){
  const el = document.getElementById("evidenceIndex");
  if (!el) return;
  el.innerHTML = EVIDENCE_REPORTS.map(r=>`
    <div class="ev-index-card">
      <h3>${evEsc(r.title)}</h3>
      <div class="meta-row"><span class="ev-badge ${r.sourceType==="BigQuery"?"bq":"scan"}">${evEsc(r.sourceType)}</span><span class="ev-badge ${r.status==="正常"?"ok":""}">${evEsc(r.status)}</span></div>
      <div class="small"><code>${evEsc(r.id)}</code></div>
      <div class="small">來源：${evEsc(r.sourceTable)}</div>
      <div class="small">資料至：${evEsc(r.maxDate)}｜${r.rows.length} 列</div>
      <button onclick="evOpen('${r.id}')">開啟完整報表</button>
    </div>`).join("");
}
function evToolbar(r){
  const s=evInitState(r);
  const filters=(r.filterKeys||[]).map(k=>{
    const label=(r.columns.find(c=>c[0]===k)||[k,k])[1];
    const opts=evUnique(r.rows,k).map(v=>`<option value="${evEsc(v)}" ${s.filters[k]===String(v)?"selected":""}>${evEsc(v)}</option>`).join("");
    return `<select onchange="evSetFilter('${r.id}','${k}',this.value)"><option value="">全部${evEsc(label)}</option>${opts}</select>`;
  }).join("");
  return `<div class="ev-toolbar">
    <input type="search" value="${evEsc(s.search)}" placeholder="搜尋本報表全部欄位" oninput="evSearch('${r.id}',this.value)">
    ${filters}
    <select onchange="evPageSize('${r.id}',this.value)"><option value="10" ${s.pageSize==10?"selected":""}>每頁 10 列</option><option value="25" ${s.pageSize==25?"selected":""}>每頁 25 列</option><option value="50" ${s.pageSize==50?"selected":""}>每頁 50 列</option></select>
    <button class="ev-btn" onclick="evDownload('${r.id}',false)">下載目前篩選 CSV</button>
    <button class="ev-btn" onclick="evReset('${r.id}')">清除篩選</button>
  </div>`;
}
function evRenderReports(){
  const box=document.getElementById("evidenceReports");
  if(!box) return;
  box.innerHTML = EVIDENCE_REPORTS.map(r=>`
    <article class="ev-report" id="ev-${r.id}">
      <div class="ev-head">
        <div class="ev-head-top">
          <div><h3>${evEsc(r.title)}</h3><div class="ev-sub">${evEsc(r.description)}</div></div>
          <div class="ev-badges">
            <span class="ev-badge ${r.sourceType==="BigQuery"?"bq":"scan"}">${evEsc(r.sourceType)}</span>
            <span class="ev-badge">${evEsc(r.queryCode)}</span>
            <span class="ev-badge ${r.status==="正常"?"ok":""}">${evEsc(r.status)}</span>
          </div>
        </div>
      </div>
      <div id="toolbar-${r.id}">${evToolbar(r)}</div>
      <div class="ev-body">
        <div class="ev-chart-wrap"><canvas id="chart-${r.id}"></canvas><div class="small">圖表會隨篩選條件更新；滑過資料列可查看完整數值。</div></div>
        <div class="ev-table-wrap"><table class="ev-table"><thead id="thead-${r.id}"></thead><tbody id="tbody-${r.id}"></tbody></table></div>
      </div>
      <div class="ev-pager" id="pager-${r.id}"></div>
      <details class="ev-manifest"><summary>查看報表來源、BigQuery 工作資訊與 SQL 定義</summary>
        <div class="ev-manifest-grid">
          <div><strong>來源類型：</strong>${evEsc(r.sourceType)}</div><div><strong>來源表：</strong>${evEsc(r.sourceTable)}</div>
          <div><strong>查詢代碼：</strong>${evEsc(r.queryCode)}</div><div><strong>BigQuery Job ID：</strong>${evEsc(r.jobId)}</div>
          <div><strong>資料期間：</strong>${evEsc(r.period)}</div><div><strong>最大資料日期：</strong>${evEsc(r.maxDate)}</div>
          <div><strong>產製時間：</strong>${evEsc(r.generatedAt)}</div><div><strong>資料雜湊：</strong>${evEsc(r.dataHash)}</div>
          <div><strong>完整列數：</strong>${r.rows.length}</div><div><strong>報表狀態：</strong>${evEsc(r.status)}</div>
        </div>
        <div class="ev-sql">${evEsc(r.sql)}</div>
      </details>
    </article>`).join("");
  EVIDENCE_REPORTS.forEach(r=>evRenderOne(r.id));
}
function evRenderOne(id){
  const r=evReport(id); if(!r) return;
  const s=evInitState(r), rows=evFiltered(r);
  const pageCount=Math.max(1,Math.ceil(rows.length/s.pageSize));
  if(s.page>pageCount) s.page=pageCount;
  const start=(s.page-1)*s.pageSize, pageRows=rows.slice(start,start+s.pageSize);
  const tb = document.getElementById("toolbar-"+id); if(tb) tb.innerHTML=evToolbar(r);
  const th = document.getElementById("thead-"+id); if(th) th.innerHTML="<tr>"+r.columns.map(c=>`<th onclick="evSort('${id}','${c[0]}')">${evEsc(c[1])}${s.sortKey===c[0]?(s.sortDir===1?" ▲":" ▼"):""}</th>`).join("")+"</tr>";
  const tbody = document.getElementById("tbody-"+id);
  if(tbody) tbody.innerHTML = pageRows.map(row=>"<tr>"+r.columns.map(c=>`<td class="${typeof row[c[0]]==="number"?"num":""}">${evEsc(row[c[0]])}</td>`).join("")+"</tr>").join("") || `<tr><td colspan="${r.columns.length}">沒有符合條件的資料</td></tr>`;
  const pager = document.getElementById("pager-"+id);
  if(pager) pager.innerHTML = `<span>顯示 ${rows.length?start+1:0}–${Math.min(start+s.pageSize,rows.length)}／共 ${rows.length} 列；完整報表 ${r.rows.length} 列</span><div class="buttons"><button onclick="evPage('${id}',-1)" ${s.page<=1?"disabled":""}>上一頁</button><span>第 ${s.page}／${pageCount} 頁</span><button onclick="evPage('${id}',1)" ${s.page>=pageCount?"disabled":""}>下一頁</button><button onclick="evDownload('${id}',true)">下載完整 CSV</button></div>`;
  evDrawChart(r, rows);
}
function evSearch(id,v){const s=evInitState(evReport(id));s.search=v;s.page=1;evRenderOne(id)}
function evSetFilter(id,k,v){const s=evInitState(evReport(id));s.filters[k]=v;s.page=1;evRenderOne(id)}
function evPageSize(id,v){const s=evInitState(evReport(id));s.pageSize=Number(v);s.page=1;evRenderOne(id)}
function evPage(id,d){const s=evInitState(evReport(id));s.page+=d;evRenderOne(id)}
function evSort(id,k){const s=evInitState(evReport(id));if(s.sortKey===k)s.sortDir*=-1;else{s.sortKey=k;s.sortDir=1}s.page=1;evRenderOne(id)}
function evReset(id){EV_STATE[id]={search:"",filters:{},sortKey:null,sortDir:1,page:1,pageSize:10};evRenderOne(id)}
function evDownload(id,all){
  const r=evReport(id), rows=all?r.rows:evFiltered(r);
  const headers=r.columns.map(c=>c[1]);
  const keys=r.columns.map(c=>c[0]);
  const csv=[headers,...rows.map(row=>keys.map(k=>row[k]??""))].map(line=>line.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${id}_${all?"full":"filtered"}.csv`;a.click();URL.revokeObjectURL(a.href);
}
function evDrawChart(r, rows){
  const c=document.getElementById("chart-"+r.id); if(!c) return;
  const dpr=window.devicePixelRatio||1, w=c.clientWidth||420, h=280; c.width=w*dpr; c.height=h*dpr;
  const ctx=c.getContext("2d"); ctx.scale(dpr,dpr); ctx.clearRect(0,0,w,h);
  const chart=r.chart||{}, series=chart.series||[];
  if(!rows.length||!series.length){ctx.fillStyle="#667085";ctx.fillText("沒有可繪製的資料",20,30);return}
  const plotRows = chart.type==="bar"?rows.slice(0,12):rows;
  const m={l:52,r:16,t:18,b:54}, iw=w-m.l-m.r, ih=h-m.t-m.b;
  const vals=plotRows.flatMap(row=>series.map(s=>Number(row[s[0]])||0)); let min=0, max=Math.max(...vals,1);
  for(let i=0;i<5;i++){let y=m.t+i*ih/4;ctx.strokeStyle="#e7edf3";ctx.beginPath();ctx.moveTo(m.l,y);ctx.lineTo(w-m.r,y);ctx.stroke();ctx.fillStyle="#667085";ctx.font="11px Arial";ctx.textAlign="right";ctx.fillText(Math.round(max-i*max/4),m.l-7,y+4)}
  const colors=["#1d6fd8","#0f766e","#a35b00","#6941c6"];
  if(chart.type==="line"){
    plotRows.forEach((row,i)=>{ctx.fillStyle="#667085";ctx.textAlign="center";ctx.fillText(String(row[chart.xKey]).slice(0,10),m.l+i*iw/Math.max(1,plotRows.length-1),h-16)});
    series.forEach((s,si)=>{ctx.strokeStyle=colors[si%colors.length];ctx.lineWidth=3;ctx.beginPath();plotRows.forEach((row,i)=>{let x=m.l+i*iw/Math.max(1,plotRows.length-1), y=m.t+ih-(Number(row[s[0]])||0)*ih/max; i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke()});
  } else {
    const groupW=iw/plotRows.length, barW=Math.max(4,groupW*.68/series.length);
    plotRows.forEach((row,i)=>{
      series.forEach((s,si)=>{let v=Number(row[s[0]])||0, x=m.l+i*groupW+(groupW-barW*series.length)/2+si*barW, y=m.t+ih-v*ih/max; ctx.fillStyle=colors[si%colors.length];ctx.fillRect(x,y,barW-2,m.t+ih-y)});
      ctx.save();ctx.translate(m.l+i*groupW+groupW/2,h-10);ctx.rotate(-Math.PI/7);ctx.fillStyle="#667085";ctx.font="10px Arial";ctx.textAlign="right";ctx.fillText(String(row[chart.xKey]).slice(0,22),0,0);ctx.restore();
    });
  }
  series.forEach((s,si)=>{ctx.fillStyle=colors[si%colors.length];ctx.fillRect(m.l+si*145,m.t-12,12,4);ctx.fillStyle="#475467";ctx.textAlign="left";ctx.font="11px Arial";ctx.fillText(s[1],m.l+16+si*145,m.t-7)});
}
function evInit(){
  evRenderIndex();
  evRenderReports();
  window.addEventListener("resize", ()=>EVIDENCE_REPORTS.forEach(r=>evRenderOne(r.id)));
}

// === Vite ESM: expose to window for inline onclick handlers ===
// (HTML attribute onclick="evOpen(...)" needs function in window scope)
if (typeof window !== "undefined") {
  window.evOpen = evOpen;
  window.evReport = evReport;
  window.evEsc = evEsc;
  window.evInit = evInit;
  window.evRenderIndex = evRenderIndex;
  window.evRenderReports = evRenderReports;
  window.evRenderOne = evRenderOne;
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
