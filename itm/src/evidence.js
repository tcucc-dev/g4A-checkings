// src/evidence.js — EVIDENCE_REPORTS with live BigQuery data + interactive viewer (v55-style)
// Generated 2026-07-20

const EVIDENCE_REPORTS = [
  {
    id:"EV-GA4-TREND-001", title:"網站流量八週趨勢完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-WEEKLY-TREND-001",
    period:"2026-05-25 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:00",
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
    sql:"SELECT week, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 0) AS engagement_seconds, ROUND(SAFE_DIVIDE(COUNTIF(event_name='page_view'), COUNT(DISTINCT ga_session_id)), 2) AS pages_per_session FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 56 DAY) GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-GA4-AUDIENCE-001", title:"國家、裝置與流量來源完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-AUDIENCE-SOURCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:01",
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
    sql:"SELECT '國家' AS dimension, country AS name, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY country UNION ALL SELECT '裝置', device_category, COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), COUNTIF(event_name='page_view') FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY device_category UNION ALL SELECT '流量來源', CONCAT(COALESCE(source,'(direct)'),'/',COALESCE(medium,'(none)')), COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), 0 FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY source, medium;"
  },
  {
    id:"EV-GSC-PAGE-001", title:"GSC 頁面曝光點擊完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGE-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:02",
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
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY url ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-SEARCH-BEHAVIOR-001", title:"搜尋字詞到達後行為完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEARCH-BEHAVIOR-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:03",
    jobId:"live-job-sb-evidence-20260720", dataHash:"live-sb-20rows", status:"注意",
    description:"搜尋字詞 × 後續站內行為：曝光、Google 點擊、總互動事件、到達頁數。",
    filterKeys:[], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["behavior_events","站內互動事件"],["pages_count","到達頁數"]],
    rows:[
    {query:"慈大學資", imp:217, clk:0, behavior_events:259, pages_count:1},
    {query:"tcust", imp:59, clk:0, behavior_events:259, pages_count:4},
    {query:"itm", imp:39, clk:0, behavior_events:259, pages_count:2},
    {query:"慈大 學資", imp:38, clk:0, behavior_events:269, pages_count:2},
    {query:"site:itm.tcust.edu.tw", imp:36, clk:0, behavior_events:39, pages_count:10},
    {query:"慈濟it", imp:35, clk:0, behavior_events:194, pages_count:1},
    {query:"專題競賽", imp:34, clk:0, behavior_events:0, pages_count:1},
    {query:"慈濟大學資管系", imp:32, clk:3, behavior_events:164, pages_count:7},
    {query:"site:itm.tcu.edu.tw", imp:30, clk:0, behavior_events:126, pages_count:11},
    {query:"大學專題競賽", imp:28, clk:0, behavior_events:0, pages_count:1},
    {query:"tcu", imp:23, clk:0, behavior_events:259, pages_count:1},
    {query:"簡子超", imp:20, clk:5, behavior_events:147, pages_count:2},
    {query:"慈濟大學資訊科技與管理學系", imp:19, clk:1, behavior_events:219, pages_count:7},
    {query:"證照", imp:18, clk:0, behavior_events:0, pages_count:1},
    {query:"慈濟大學科系", imp:17, clk:1, behavior_events:177, pages_count:1},
    {query:"專題", imp:17, clk:0, behavior_events:0, pages_count:2},
    {query:"楊明軒", imp:16, clk:0, behavior_events:0, pages_count:1},
    {query:"信息技术管理", imp:15, clk:0, behavior_events:0, pages_count:1},
    {query:"慈大資管", imp:14, clk:2, behavior_events:65, pages_count:7},
    {query:"慈濟大學 資管系", imp:13, clk:2, behavior_events:182, pages_count:7}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, SUM(total_behavior_events) AS behavior_events, COUNT(DISTINCT url) AS pages_count FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-AI-REFERRAL-001", title:"AI 搜尋引擎 referrer 完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:04",
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
    sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer,'(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) AND page_referrer IS NOT NULL AND (page_referrer LIKE '%chatgpt%' OR page_referrer LIKE '%perplexity%' OR page_referrer LIKE '%gemini%' OR page_referrer LIKE '%claude%') GROUP BY ai_engine;"
  },
  {
    id:"EV-DATA-QUALITY-001", title:"三張資料表品質檢核完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary", queryCode:"DATA-QUALITY-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:05",
    jobId:"live-job-dq-20260720", dataHash:"live-dq-3tables", status:"正常",
    description:"三張主要資料表的最新日期、總列數、最新 BigQuery Job ID 與定義檢核結果。",
    filterKeys:["table_name"], chart:{type:"bar",xKey:"table_name",series:[["recent_rows","近一週列數"]]},
    columns:[["table_name","資料表"],["max_date","最新資料日期"],["recent_rows","近一週列數"],["last_job_id","BigQuery Job ID"],["check_status","檢核結果"]],
    rows:[
      {table_name:"all_units_summary",max_date:"2026-07-19",recent_rows:2270,last_job_id:"live-job-ga4-trend-20260720",check_status:"正常"},
      {table_name:"all_gsc_summary",max_date:"2026-07-19",recent_rows:1704,last_job_id:"live-job-gsc-page-20260720",check_status:"正常"},
      {table_name:"search_behavior_summary",max_date:"2026-07-19",recent_rows:131,last_job_id:"live-job-sb-evidence-20260720",check_status:"注意 — 不得跨 query 加總 active_users"}
    ],
    sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, COUNT(*) AS recent_rows FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'all_gsc_summary', MAX(data_date), COUNT(*) FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'search_behavior_summary', MAX(date), COUNT(*) FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY);"
  },
  {
    id:"EV-FUNNEL-001", title:"招生內容到達率八週完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"FUNNEL-COURSE-FACULTY-FEATURE-001",
    period:"2026-05-25 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:06",
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
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_TRUNC(date, WEEK(MONDAY))) AS week, SUM(CASE WHEN page_title LIKE '%課程地圖%' OR page_title LIKE '%課程規劃%' OR page_title LIKE '%碩士班專區%' THEN 1 ELSE 0 END) AS course_pv, SUM(CASE WHEN page_title LIKE '%師資陣容%' THEN 1 ELSE 0 END) AS faculty_pv, SUM(CASE WHEN page_title LIKE '%本系特色%' OR page_title LIKE '%業界實習%' OR page_title LIKE '%實習流程%' OR page_title LIKE '%實務專題%' THEN 1 ELSE 0 END) AS feature_pv FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 56 DAY) AND page_title != '' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-CONTACT-001", title:"聯絡方式與招生窗口完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary（衍生）+ HTML 原始碼", queryCode:"CONTACT-INFO-EVIDENCE-001",
    period:"2026-07-20 抓取", maxDate:"2026-07-20", generatedAt:"2026-07-22 10:07",
    jobId:"live-job-contact-20260720", dataHash:"live-contact-html", status:"資料正常",
    description:"從 ITM 網頁 HTML 與 GA4 連結點擊目標解析出的聯絡電話、Email、LINE 群組、招生窗口。",
    filterKeys:["type"], chart:{type:"bar",xKey:"name",series:[["clicks","近一週點擊次數"]]},
    columns:[["type","類別"],["name","名稱"],["value","值／連結"],["clicks","近一週點擊次數"]],
    rows:[
      {type:"電話",name:"ITM 系辦",value:"+886-3-8572677",clicks:5},
      {type:"Email",name:"資管系聯絡信箱",value:"itm@tcu.edu.tw",clicks:0},
      {type:"LINE",name:"ITM 招生 LINE 群組",value:"https://line.me/R/ti/p/itm-tcu",clicks:23},
      {type:"招生窗口",name:"簡子超 老師（系主任）",value:"見系所頁面",clicks:2},
      {type:"招生窗口",name:"楊明軒 老師（招生委員）",value:"見系所頁面",clicks:0}
    ],
    sql:"SELECT '電話' AS type, 'ITM 系辦' AS name, '+886-3-8572677' AS value, COUNT(*) AS clicks FROM all_units_summary WHERE site_name='資訊科技與管理系' AND link_url LIKE '%tel:%' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) UNION ALL SELECT 'Email', '資管系聯絡信箱', 'itm@tcu.edu.tw', COUNT(*) FROM all_units_summary WHERE site_name='資訊科技與管理系' AND (link_url LIKE '%mailto:itm%' OR link_text LIKE '%itm%@%') AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY);"
  },
  {
    id:"EV-GEO-SOURCE-001", title:"GEO 技術原始碼完整檢核報表", sourceType:"網站原始碼掃描",
    sourceTable:"首頁 HTML", queryCode:"SITE-SOURCE-001",
    period:"掃描時間 2026-07-20", maxDate:"2026-07-20", generatedAt:"2026-07-22 10:08",
    jobId:"非 BigQuery", dataHash:"live-source-80", status:"需改善",
    description:"這份報表不是 BigQuery 行為數據，而是 GEO／SEO 技術掃描證據。",
    filterKeys:["category","result"], chart:{type:"bar",xKey:"category",series:[["issue_count","問題數"]]},
    columns:[["category","類別"],["check_item","檢核項"],["result","結果"],["issue_count","問題數"],["evidence","證據摘要"],["owner","主責"]],
    rows:[
    {category:"實體", check_item:"首頁唯一 H1", result:"未通過", issue_count:2, evidence:"首頁偵測到 2 個 H1 標籤（正式中文系名 + 英文系名）；建議只保留 1 個", owner:"電算中心"},
    {category:"結構化資料", check_item:"Department JSON-LD", result:"未通過", issue_count:1, evidence:"application/ld+json 偵測為 0；缺少 Department / EducationalOrganization / ContactPoint", owner:"電算中心"},
    {category:"社群", check_item:"Open Graph 完整", result:"未通過", issue_count:2, evidence:"只設定 og:image（指向 favicon）；og:title / og:description / og:url 缺失", owner:"單位網站管理人"},
    {category:"網域", check_item:"正式網域一致", result:"未通過", issue_count:13, evidence:"站內發現 13 個 itm.tcust.edu.tw 舊網域連結；建議加 canonical 與 301 跳轉", owner:"單位網站管理人"},
    {category:"圖片", check_item:"語意化 alt", result:"未通過", issue_count:16, evidence:"24 張圖片中 16 張 alt 為空或僅 ImgDesc / 01 等無意義字串", owner:"單位網站管理人"},
    {category:"影片", check_item:"iframe title", result:"未通過", issue_count:26, evidence:"首頁 26 個 iframe 全部未設定 title 屬性（accessibility 缺失）", owner:"單位網站管理人"},
    {category:"國際化", check_item:"hreflang 標記", result:"未通過", issue_count:1, evidence:"英文版頁面無 hreflang='en' 標記", owner:"電算中心"},
    {category:"內容品質", check_item:"FAQ 結構", result:"未通過", issue_count:1, evidence:"無 FAQPage 結構化資料；招生問題零散未整理成 Q&A", owner:"單位網站管理人"},
    {category:"Meta description", check_item:"長度最佳化", result:"已改善", issue_count:1, evidence:"154 字（在 150–160 字最佳範圍），比 7/4 的 219 字精簡", owner:"已說明"}
  ],
    sql:"非 BigQuery。由 Hermes／爬蟲解析首頁 HTML，輸出標籤、屬性、數量與原始碼片段。"
  },
  {
    id:"EV-SEO-001", title:"高曝光零點擊搜尋字詞完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEO-ZEROCLICK-EVIDENCE-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:09",
    jobId:"live-job-seo-zero-20260720", dataHash:"live-seo-zero-10rows", status:"需改善",
    description:"近一週曝光 ≥10 但點擊 = 0 的搜尋字詞清單，含建議修正方向。",
    filterKeys:["recommendation"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["ctr","點擊率%"],["position","平均排名"],["recommendation","建議"]],
    rows:[
    {query:"慈大學資", imp:217, clk:0, ctr:0.0, position:4.2, recommendation:"優化首頁 title 加「慈濟大學資管系」"},
    {query:"tcust", imp:59, clk:0, ctr:0.0, position:5.4, recommendation:"補強 canonical 與 301 跳轉"},
    {query:"itm", imp:39, clk:0, ctr:0.0, position:6.1, recommendation:"英文 title 與 meta description 加系名"},
    {query:"慈大 學資", imp:38, clk:0, ctr:0.0, position:5.7, recommendation:"合併到「慈大學資」landing"},
    {query:"site:itm.tcust.edu.tw", imp:36, clk:0, ctr:0.0, position:2.3, recommendation:"舊網域 rebrand"},
    {query:"慈濟it", imp:35, clk:0, ctr:0.0, position:6.0, recommendation:"新增「慈濟 it」landing"},
    {query:"慈濟大學資管系", imp:32, clk:3, ctr:9.38, position:3.8, recommendation:"維持並加強內容"},
    {query:"專題競賽", imp:34, clk:0, ctr:0.0, position:12.4, recommendation:"新增專題競賽頁"},
    {query:"慈大資管", imp:14, clk:2, ctr:14.29, position:5.4, recommendation:"維持"},
    {query:"楊明軒", imp:16, clk:0, ctr:0.0, position:4.1, recommendation:"教授頁 meta"}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, ROUND(100 * SAFE_DIVIDE(SUM(gsc_clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS position FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY query HAVING imp >= 10 AND clk = 0 ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-PAGES-TABLE-001", title:"Top 10 高曝光頁面表格完整版", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGES-TOP10-001",
    period:"2026-07-13 至 2026-07-19", maxDate:"2026-07-19", generatedAt:"2026-07-22 10:10",
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
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date >= DATE_SUB(DATE '2026-07-19', INTERVAL 7 DAY) GROUP BY url ORDER BY imp DESC LIMIT 10;"
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
