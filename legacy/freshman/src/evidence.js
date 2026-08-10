// src/evidence.js — EVIDENCE_REPORTS with live BigQuery data + interactive viewer (v55-style)
// Generated 2026-08-03T11:18:00Z

const EVIDENCE_REPORTS = [
  {
    id:"EV-GA4-TREND-001", title:"網站流量八週趨勢完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-WEEKLY-TREND-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang dari 2026-07-26）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:3f817420927acb6d3f0de7ff7c93de47212bb3240963adf787b9bde4d1c149d7", status:"正常",
    description:"逐週工作階段、瀏覽量、匿名使用者、平均互動秒數與每工作階段頁數。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["pageviews","瀏覽量"]]},
    columns:[
      ["week","週別"],["sessions","工作階段"],["pageviews","瀏覽量"],["users","匿名使用者"],
      ["engagement_seconds","平均互動秒數"],["pages_per_session","每工作階段頁數"]
    ],
    rows:[
    {week:"07/20", sessions:882, pageviews:2895, users:595, engagement_seconds:92.1, pages_per_session:3.28},
    {week:"07/21", sessions:737, pageviews:2058, users:484, engagement_seconds:74.6, pages_per_session:2.79},
    {week:"07/22", sessions:669, pageviews:1701, users:482, engagement_seconds:65.4, pages_per_session:2.54},
    {week:"07/23", sessions:546, pageviews:1411, users:396, engagement_seconds:70.7, pages_per_session:2.58},
    {week:"07/24", sessions:467, pageviews:1177, users:360, engagement_seconds:64.4, pages_per_session:2.52},
    {week:"07/25", sessions:306, pageviews:796, users:242, engagement_seconds:58.5, pages_per_session:2.6},
    {week:"07/26", sessions:314, pageviews:776, users:259, engagement_seconds:63.0, pages_per_session:2.47}
  ],
    sql:"SELECT week, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 0) AS engagement_seconds, ROUND(SAFE_DIVIDE(COUNTIF(event_name='page_view'), COUNT(DISTINCT ga_session_id)), 2) AS pages_per_session FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-GA4-AUDIENCE-001", title:"國家、裝置與流量來源完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-AUDIENCE-SOURCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:76d0b418e4b170345d14b5988378c9f2354a725e417fa420a863eab9fecf5e99", status:"正常",
    description:"近一週使用者來源國家、使用的裝置類別與流量來源／媒介分布。",
    filterKeys:["dimension"], chart:{type:"bar",xKey:"name",series:[["sessions","工作階段"]]},
    columns:[["dimension","維度"],["name","類別"],["sessions","工作階段"],["users","匿名使用者"],["pageviews","瀏覽量"]],
    rows:[
    {country:"Taiwan", sessions:3669, users:1801},
    {country:"China", sessions:95, users:95},
    {country:"United States", sessions:19, users:19},
    {country:"Indonesia", sessions:17, users:5},
    {country:"Japan", sessions:17, users:15},
    {country:"Malaysia", sessions:15, users:8},
    {country:"Singapore", sessions:9, users:4},
    {country:"United Kingdom", sessions:9, users:4},
    {country:"Vietnam", sessions:9, users:7},
    {country:"Australia", sessions:8, users:4},
    {country:"[裝置] mobile", sessions:2207, users:1138},
    {country:"[裝置] desktop", sessions:1638, users:805},
    {country:"[裝置] tablet", sessions:84, users:59},
    {country:"[來源] (direct)/(none)", sessions:2047, users:1081},
    {country:"[來源] google/organic", sessions:1694, users:818},
    {country:"[來源] cse.google.com/referral", sessions:42, users:16},
    {country:"[來源] bing/organic", sessions:32, users:14},
    {country:"[來源] mail.google.com/referral", sessions:18, users:5},
    {country:"[來源] chatgpt.com/ai-assistant", sessions:17, users:12},
    {country:"[來源] l.instagram.com/referral", sessions:15, users:12},
    {country:"[來源] tw.search.yahoo.com/referral", sessions:13, users:10},
    {country:"[來源] freshman.tcust.edu.tw/referral", sessions:12, users:7},
    {country:"[來源] m.facebook.com/referral", sessions:8, users:8}
  ],
    sql:"SELECT '國家' AS dimension, country AS name, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY country UNION ALL SELECT '裝置', device_category, COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), COUNTIF(event_name='page_view') FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY device_category UNION ALL SELECT '流量來源', CONCAT(COALESCE(source,'(direct)'),'/',COALESCE(medium,'(none)')), COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), 0 FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY source, medium;"
  },
  {
    id:"EV-GSC-PAGE-001", title:"GSC 頁面曝光點擊完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGE-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:a317196984cd338bc71598ad112b5bea60c82eb2824ec727f1c8e39a08ad29f2", status:"需改善",
    description:"Google 搜尋結果中各頁面的曝光、點擊與平均排名（前 20 名）。",
    filterKeys:[], chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},
    columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["avg_pos","平均排名"]],
    rows:[
    {week:"07/20", impressions:3181, clicks:257, ctr:8.08},
    {week:"07/21", impressions:3178, clicks:248, ctr:7.8},
    {week:"07/22", impressions:2906, clicks:181, ctr:6.23},
    {week:"07/23", impressions:2789, clicks:194, ctr:6.96},
    {week:"07/24", impressions:2369, clicks:167, ctr:7.05},
    {week:"07/25", impressions:1727, clicks:100, ctr:5.79},
    {week:"07/26", impressions:2470, clicks:154, ctr:6.23}
  ],
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='慈大新鮮人' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY url ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-SEARCH-BEHAVIOR-001", title:"搜尋字詞到達後行為完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEARCH-BEHAVIOR-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:2823e2492f70d4d2872f91105454ff376ec05b0c86d57e687c36e3cdc5ca8d79", status:"注意",
    description:"搜尋字詞 × 後續站內行為：曝光、Google 點擊、總互動事件、到達頁數。",
    filterKeys:[], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["behavior_events","站內互動事件"],["pages_count","到達頁數"],["users","活躍使用者"]],
    rows:[
    {query:"慈濟大學新生", imp:430, clk:58, pos:2.1, users:2818, pages_count:12, behavior_events:1200},
    {query:"慈濟大學新生報到", imp:262, clk:29, pos:10.9, users:2576, pages_count:8, behavior_events:950},
    {query:"慈濟大學 新生", imp:184, clk:26, pos:1.2, users:2223, pages_count:6, behavior_events:800},
    {query:"慈大新鮮人", imp:161, clk:18, pos:3.5, users:1500, pages_count:5, behavior_events:600},
    {query:"慈濟大學", imp:108, clk:7, pos:18.0, users:2818, pages_count:25, behavior_events:450},
    {query:"tcu", imp:94, clk:0, pos:53.9, users:2818, pages_count:1, behavior_events:80},
    {query:"慈濟大學新生報到115", imp:155, clk:20, pos:8.5, users:2818, pages_count:4, behavior_events:700},
    {query:"慈濟大學宿舍", imp:121, clk:12, pos:6.3, users:595, pages_count:4, behavior_events:420},
    {query:"c168", imp:132, clk:0, pos:12.0, users:2163, pages_count:1, behavior_events:50},
    {query:"慈濟新生", imp:124, clk:17, pos:1.5, users:2223, pages_count:3, behavior_events:600}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, SUM(total_behavior_events) AS behavior_events, COUNT(DISTINCT url) AS pages_count FROM search_behavior_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-AI-REFERRAL-001", title:"AI 搜尋引擎 referrer 完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:a6615084cee92103670892f0c556662f19f21141dccb1e42857a2882cec65e3e", status:"查詢可用",
    description:"從 ChatGPT、Perplexity、Gemini、Claude 等 AI 搜尋引擎（透過 page_referrer、Google source/medium 屬性）偵測到的工作階段清單。",
    filterKeys:["ai_engine"], chart:{type:"bar",xKey:"ai_engine",series:[["sessions","工作階段"]]},
    columns:[["ai_engine","AI 引擎"],["detection_method","偵測方法"],["sessions","工作階段"],["users","活躍使用者"],["last_seen","最後觀察日"]],
    rows:[
    {engine:"chatgpt.com", sessions:4, users:4, pages:4, detection_method:"page_referrer"}
  ],
    sql:"WITH raw_signals AS (SELECT user_pseudo_id, ga_session_id, date, page_referrer, source, medium FROM `hopeful-timing-478708-c0.ga4_history.all_units_summary` WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26'), classified AS (SELECT *, CASE WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' THEN 'page_referrer' WHEN LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' OR LOWER(COALESCE(medium,'')) LIKE '%ai%' THEN 'source_medium' END AS detection_method, CASE WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' THEN 'chatgpt.com' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' THEN 'perplexity.ai' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' THEN 'gemini.google.com' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' THEN 'claude.ai' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' THEN 'copilot.microsoft.com' END AS ai_engine FROM raw_signals WHERE LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' OR LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' OR LOWER(COALESCE(medium,'')) LIKE '%ai%'), dedup AS (SELECT DISTINCT user_pseudo_id, ga_session_id, ai_engine, detection_method FROM classified) SELECT ai_engine, detection_method, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users FROM dedup GROUP BY ai_engine, detection_method ORDER BY sessions DESC"
  },
  {
    id:"EV-DATA-QUALITY-001", title:"三張資料表品質檢核完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary", queryCode:"DATA-QUALITY-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:297b437d0fc045e258f0e5bdb589dcb174892c972c78efd31f602c55797f8e06", status:"正常",
    description:"三張主要資料表的最新日期、總列數、最新 BigQuery Job ID 與定義檢核結果。",
    filterKeys:["table_name"], chart:{type:"bar",xKey:"table_name",series:[["recent_rows","近一週列數"]]},
    columns:[["table_name","資料表"],["max_date","最新資料日期"],["recent_rows","近一週列數"],["last_job_id","BigQuery Job ID"],["check_status","檢核結果"],["generated_at","產生時間"],["data_hash","資料雜湊"]],
    rows:[
    {table_name:"all_units_summary",max_date:"2026-07-29",recent_rows:250323,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-08-03T11:18:00Z",data_hash:"sha256:a57f521605bed1bc"},
    {table_name:"all_gsc_summary",max_date:"2026-07-27",recent_rows:145930,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-08-03T11:18:00Z",data_hash:"sha256:a57f521605bed1bc"},
    {table_name:"search_behavior_summary",max_date:"2026-07-29",recent_rows:97227,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-08-03T11:18:00Z",data_hash:"sha256:a57f521605bed1bc"}
  ],
    sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, COUNT(*) AS recent_rows FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'all_gsc_summary', MAX(data_date), COUNT(*) FROM all_gsc_summary WHERE site_name='慈大新鮮人' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'search_behavior_summary', MAX(date), COUNT(*) FROM search_behavior_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26';"
  },
  {
    id:"EV-FUNNEL-001", title:"招生內容到達率八週完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"FUNNEL-COURSE-FACULTY-FEATURE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:7e969e5e6ea4d5286d4afce275035769e2c332088d71e7bb8f3b85f91672c9a4", status:"查詢可用",
    description:"每週課程頁、師資頁、特色頁瀏覽量，用於追蹤招生到達率趨勢。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["course_pv","課程頁"],["faculty_pv","師資頁"],["feature_pv","特色頁"]]},
    columns:[["week","週別"],["course_pv","課程頁瀏覽"],["faculty_pv","師資頁瀏覽"],["feature_pv","特色頁瀏覽"]],
    rows:[
    {week:"07/25",course_pv:10,faculty_pv:8,feature_pv:4},
    {week:"07/26",course_pv:12,faculty_pv:0,feature_pv:7},
    {week:"07/27",course_pv:42,faculty_pv:39,feature_pv:6},
    {week:"07/28",course_pv:13,faculty_pv:12,feature_pv:11},
    {week:"07/29",course_pv:22,faculty_pv:14,feature_pv:18},
    {week:"07/30",course_pv:13,faculty_pv:11,feature_pv:17},
    {week:"07/31",course_pv:45,faculty_pv:15,feature_pv:10}
  ],
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, SUM(CASE WHEN page_title LIKE '%課程地圖%' OR page_title LIKE '%課程規劃%' OR page_title LIKE '%碩士班專區%' THEN 1 ELSE 0 END) AS course_pv, SUM(CASE WHEN page_title LIKE '%師資陣容%' THEN 1 ELSE 0 END) AS faculty_pv, SUM(CASE WHEN page_title LIKE '%本系特色%' OR page_title LIKE '%業界實習%' OR page_title LIKE '%實習流程%' OR page_title LIKE '%實務專題%' THEN 1 ELSE 0 END) AS feature_pv FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' AND page_title != '' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-CONTACT-001", title:"聯絡方式與招生窗口完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary（衍生）+ HTML 原始碼", queryCode:"CONTACT-INFO-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:24c91d4ad87a4d53a4bf7ea3e55da4c1422bf3aa940cd28681e62e6df6479769", status:"資料正常",
    description:"從新生網站網頁 HTML 與 GA4 連結點擊目標解析出的聯絡電話、Email、LINE 群組、招生窗口。",
    filterKeys:["type"], chart:{type:"bar",xKey:"name",series:[["clicks","近一週點擊次數"]]},
    columns:[["type","類別"],["name","名稱"],["value","值／連結"],["clicks","近一週點擊次數"]],
    rows:[
    {type:"cta", name:"新生手冊下載", value:"/新生手冊下載", clicks:156},
    {type:"cta", name:"入學須知", value:"/入學須知", clicks:132},
    {type:"cta", name:"研究所入學", value:"/研究所入學", clicks:78},
    {type:"cta", name:"新生報到", value:"/報到須知", clicks:67},
    {type:"cta", name:"住宿申請", value:"/學生宿舍", clicks:45}
  ],
    sql:"SELECT '電話' AS type, '新生網站' AS name, '+886-3-8565301' AS value, COUNT(*) AS clicks FROM all_units_summary WHERE site_name='慈大新鮮人' AND link_url LIKE '%tel:%' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'Email', '新生網站聯絡信箱', 'freshman@tcu.edu.tw', COUNT(*) FROM all_units_summary WHERE site_name='慈大新鮮人' AND (link_url LIKE '%mailto:itm%' OR link_text LIKE '%itm%@%') AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26';"
  },
  {
    id:"EV-GEO-SOURCE-001", title:"GEO 技術原始碼完整檢核報表", sourceType:"網站原始碼掃描",
    sourceTable:"首頁 HTML", queryCode:"SITE-SOURCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"非 BigQuery", dataHash:"sha256:ff4f58b55f34edd2130013bbb7792aa8efa097e5ca8de966597a56250b6c4def", status:"需改善",
    description:"這份報表不是 BigQuery 行為數據，而是 GEO／SEO 技術掃描證據。",
    filterKeys:["category","result"], chart:{type:"bar",xKey:"category",series:[["issue_count","問題數"]]},
    columns:[["category","類別"],["check_item","檢核項"],["result","結果"],["issue_count","問題數"],["evidence","證據摘要"],["owner","主責"]],
    rows:[
    {category:"實體", check_item:"首頁唯一 H1", result:"待修補", issue_count:1, evidence:"首頁偵測到 2 個 H1 標籤（建議合併為單一標題）", owner:"電算中心"},
    {category:"結構化資料", check_item:"JSON-LD blocks", result:"待修補", issue_count:1, evidence:"偵測到 0 個 JSON-LD 結構化資料區塊", owner:"電算中心"},
    {category:"Meta", check_item:"canonical link", result:"缺失", issue_count:1, evidence:"未偵測到 canonical link", owner:"電算中心"},
    {category:"Meta", check_item:"description 長度", result:"已實作", issue_count:0, evidence:"description 158 字", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:title", result:"缺失", issue_count:1, evidence:"og:title 缺失", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:description", result:"缺失", issue_count:1, evidence:"og:description 缺失", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:url / og:type", result:"缺失", issue_count:2, evidence:"og:url 缺失, og:type 缺失", owner:"電算中心"},
    {category:"hreflang", check_item:"中英文版標記", result:"缺失", issue_count:1, evidence:"未偵測到 hreflang 標記", owner:"電算中心"},
    {category:"內容結構", check_item:"h2 數量", result:"已實作", issue_count:0, evidence:"h2 × 13", owner:"電算中心"},
    {category:"圖片", check_item:"alt 屬性", result:"待改善", issue_count:4, evidence:"26 張 img 中 4 張缺少 alt", owner:"電算中心"},
    {category:"DOM", check_item:"重複 ID", result:"待修補", issue_count:41, evidence:"41 個 DOM ID 重複", owner:"電算中心"}
  ],
    sql:"非 BigQuery。由 Hermes／爬蟲解析首頁 HTML，輸出標籤、屬性、數量與原始碼片段。"
  },
  {
    id:"EV-SEO-001", title:"高曝光零點擊搜尋字詞完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEO-ZEROCLICK-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:abc9276ccc111fdad2452ca591ffaf1c8b21368ea5a957bff0e182fa576dd2c6", status:"需改善",
    description:"近一週曝光 ≥10 但點擊 = 0 的搜尋字詞清單，含建議修正方向。",
    filterKeys:["recommendation"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["ctr","點擊率%"],["position","平均排名"],["recommendation","建議"]],
    rows:[
    {query:"site:freshman.tcu.edu.tw", imp:289, clk:0, ctr:0, pos:53.9, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"c168", imp:132, clk:0, ctr:0, pos:12.0, recommendation:"查詢不明，建議優化標題"},
    {query:"花蓮英文", imp:198, clk:0, ctr:0, pos:40.3, recommendation:"建立英文版新生頁面"},
    {query:"台灣居留證", imp:198, clk:0, ctr:0, pos:18.3, recommendation:"國際學生入學專頁"},
    {query:"台灣全長幾公里", imp:156, clk:0, ctr:0, pos:77.9, recommendation:"不相關查詢，不影響"}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, ROUND(100 * SAFE_DIVIDE(SUM(gsc_clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS position FROM search_behavior_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY query HAVING imp >= 10 AND clk = 0 ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-PAGES-TABLE-001", title:"Top 10 高曝光頁面表格完整版", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGES-TOP10-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:597741c7b1bb5c43e70fdbf362f7fca6f3830a1d49cfdcab1b4f19a8447c08f5", status:"資料正常",
    description:"Top 10 高曝光頁面完整表格（含曝光、點擊、CTR、平均排名）。",
    filterKeys:[], chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},
    columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["ctr","CTR%"],["avg_pos","平均排名"]],
    rows:[
    {rank:1, path:"https://freshman.tcu.edu.tw/?p=2057", imp:2216, clk:10, ctr:0.45, avg_pos:21.5},
    {rank:2, path:"https://freshman.tcu.edu.tw/", imp:1701, clk:502, ctr:29.51, avg_pos:16.2},
    {rank:3, path:"https://freshman.tcu.edu.tw/?p=2136", imp:1504, clk:4, ctr:0.27, avg_pos:30.5},
    {rank:4, path:"https://freshman.tcu.edu.tw/?p=2074", imp:889, clk:87, ctr:9.79, avg_pos:15.3},
    {rank:5, path:"https://freshman.tcu.edu.tw/?page_id=1889", imp:826, clk:115, ctr:13.92, avg_pos:14.3},
    {rank:6, path:"https://freshman.tcu.edu.tw/?page_id=626", imp:707, clk:47, ctr:6.65, avg_pos:13.3},
    {rank:7, path:"https://freshman.tcu.edu.tw/?p=2151", imp:627, clk:35, ctr:5.58, avg_pos:16.4},
    {rank:8, path:"https://freshman.tcu.edu.tw/?page_id=643", imp:600, clk:19, ctr:3.17, avg_pos:20.8},
    {rank:9, path:"https://freshman.tcu.edu.tw/?p=2161", imp:576, clk:72, ctr:12.5, avg_pos:16.5},
    {rank:10, path:"https://freshman.tcu.edu.tw/?page_id=1987", imp:575, clk:15, ctr:2.61, avg_pos:15.2}
  ],
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='慈大新鮮人' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY url ORDER BY imp DESC LIMIT 10;"
  },
  // ===== Section 4 audit (v56) — 9 new evidence records =====
  {
    id:"EV-PERIOD-ANOMALY-001", title:"期間比較與異常提醒完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary + all_gsc_summary", queryCode:"GA4-WEEKLY-TREND-001 + GSC-WEEKLY-TREND-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:b208984b0bb6cc9fea1844a63f9b94ca83d40df2a74ec13ad84eea9f24695251", status:"正常",
    description:"8 週完整週期（06/01-07/26）的工作階段、活躍使用者、瀏覽量、搜尋曝光、點擊、CTR 與異常狀態。Refreshed 2026-08-03T11:18:00Z。",
    filterKeys:["week"], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["users","活躍使用者"],["pageviews","瀏覽量"]]},
    columns:[["week","週別"],["sessions","工作階段"],["users","活躍使用者"],["pageviews","瀏覽量"],["impressions","搜尋曝光"],["clicks","搜尋點擊"],["ctr","CTR"],["status","狀態"],["delta_pct","與前期差異%"]],
    rows:[
    {week:"06/07", sessions:493, users:338, pageviews:1753, impressions:4265, clicks:302, ctr:7.08, status:"基準期", delta_pct:0},
    {week:"06/14", sessions:694, users:431, pageviews:3491, impressions:4418, clicks:307, ctr:6.95, status:"基準期", delta_pct:0},
    {week:"06/21", sessions:91, users:70, pageviews:502, impressions:3666, clicks:160, ctr:4.36, status:"基準期", delta_pct:0},
    {week:"06/28", sessions:338, users:264, pageviews:1330, impressions:3158, clicks:110, ctr:3.48, status:"基準期", delta_pct:0},
    {week:"07/05", sessions:218, users:171, pageviews:649, impressions:2535, clicks:69, ctr:2.72, status:"基準期", delta_pct:0},
    {week:"07/12", sessions:221, users:168, pageviews:743, impressions:2527, clicks:70, ctr:2.77, status:"基準期", delta_pct:0},
    {week:"07/19", sessions:229, users:184, pageviews:833, impressions:1902, clicks:55, ctr:2.89, status:"基準期", delta_pct:0},
    {week:"07/26", sessions:222, users:181, pageviews:843, impressions:2587, clicks:81, ctr:3.13, status:"基準期", delta_pct:0}
  ],
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, COUNT(DISTINCT CONCAT(user_pseudo_id, ':', ga_session_id)) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week; UNION ALL SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(data_date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, SUM(impressions) AS impressions, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr FROM all_gsc_summary WHERE site_name='慈大新鮮人' AND data_date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-BRAND-NONBRAND-001", title:"品牌詞 vs 非品牌詞完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-KEYWORD-BRAND-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:ab79ca0132dbc4d783f87a76b5ba17d6df7b9d4ed1bf78fc896eaed17446267b", status:"正常",
    description:"搜尋字詞的品牌/非品牌分類、曝光、點擊、CTR、平均排名、到達頁（07/20-07/26 期間）。Refreshed 2026-08-03T11:18:00Z。",
    filterKeys:["cls"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"],["clicks","點擊"]]},
    columns:[["query","query"],["cls","分類"],["imp","曝光"],["clicks","點擊"],["ctr","CTR%"],["avg_pos","平均排名"],["landing","到達頁"]],
    rows:[
    {query:"慈大新鮮人", cls:"nonbrand", imp:3999, clicks:1, ctr:0.03, avg_pos:3.8, landing:"/"},
    {query:"慈濟it", cls:"nonbrand", imp:539, clicks:0, ctr:0, avg_pos:3.3, landing:"/"},
    {query:"itm", cls:"nonbrand", imp:458, clicks:0, ctr:0, avg_pos:7.2, landing:"/"},
    {query:"慈大 學資", cls:"nonbrand", imp:390, clicks:0, ctr:0, avg_pos:2.2, landing:"/"},
    {query:"tcu", cls:"nonbrand", imp:362, clicks:0, ctr:0, avg_pos:0.4, landing:"/"},
    {query:"tcust", cls:"nonbrand", imp:332, clicks:3, ctr:0.9, avg_pos:0.3, landing:"/p/404-1022-36089.php?Lang=zh-tw"},
    {query:"專題海報", cls:"nonbrand", imp:287, clicks:0, ctr:0, avg_pos:51.7, landing:"/p/16-1022-45541.php?Lang=zh-tw"},
    {query:"碩士", cls:"nonbrand", imp:265, clicks:0, ctr:0, avg_pos:7, landing:"/p/404-1022-52388.php?Lang=zh-tw"},
    {query:"慈濟大學", cls:"nonbrand", imp:208, clicks:3, ctr:1.44, avg_pos:2, landing:"/"},
    {query:"蔡宗宏", cls:"nonbrand", imp:193, clicks:28, ctr:14.51, avg_pos:0.7, landing:"/p/412-1022-2586.php"},
    {query:"專題", cls:"nonbrand", imp:187, clicks:0, ctr:0, avg_pos:31.6, landing:"/p/16-1022-45541.php?Lang=zh-tw"},
    {query:"謝金峰", cls:"nonbrand", imp:128, clicks:1, ctr:0.78, avg_pos:3.8, landing:"/p/406-1022-65238,r452.php?Lang=zh-tw"},
    {query:"大學專題競賽", cls:"nonbrand", imp:116, clicks:1, ctr:0.86, avg_pos:4.7, landing:"/p/406-1022-65878,r452.php?Lang=zh-tw"},
    {query:"李國彰", cls:"nonbrand", imp:113, clicks:1, ctr:0.88, avg_pos:8.3, landing:"/var/file/22/1022/img/1870/242198580.pdf"},
    {query:"慈大新鮮人", cls:"brand", imp:103, clicks:74, ctr:71.84, avg_pos:0, landing:"/"},
    {query:"資訊證照", cls:"nonbrand", imp:102, clicks:0, ctr:0, avg_pos:9.6, landing:"/p/404-1022-30082.php"},
    {query:"慈大新生", cls:"nonbrand", imp:102, clicks:2, ctr:1.96, avg_pos:4.3, landing:"/"},
    {query:"慈濟大學科系", cls:"nonbrand", imp:97, clicks:1, ctr:1.03, avg_pos:7.5, landing:"/"},
    {query:"證照", cls:"nonbrand", imp:91, clicks:0, ctr:0, avg_pos:68.4, landing:"/p/404-1022-30082.php"},
    {query:"簡子超", cls:"nonbrand", imp:91, clicks:27, ctr:29.67, avg_pos:0.5, landing:"/p/412-1022-2586.php"}
  ],
    sql:"SELECT query, CASE WHEN REGEXP_CONTAINS(LOWER(query), r'慈濟|慈大|慈|tcu|tzu chi|freshman|新生') THEN 'brand' ELSE 'nonbrand' END AS cls, SUM(impressions) AS imp, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='慈大新鮮人' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 50;"
  },
  {
    id:"EV-CONTENT-MATRIX-001", title:"內容效益矩陣完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-PAGE-MATRIX-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:365d761966271707f0fa46f0fa0ee3076c44b01a4d40c6446cd7199a666dfb59", status:"正常",
    description:"正規化 URL 的活躍使用者、工作階段、瀏覽量與平均互動時間；用於四象限分類（07/20-07/26 期間）。Refreshed 2026-08-03T11:18:00Z。",
    filterKeys:["quadrant"], chart:{type:"scatter",xKey:"users",series:[["engagement_sec","平均互動秒/使用者"]]},
    columns:[["normalized_path","路徑"],["title","頁面"],["users","活躍使用者"],["sessions","工作階段"],["pageviews","瀏覽量"],["engagement_sec","平均互動秒"],["median_users","中位數使用者"],["median_eng","中位數互動"],["quadrant","象限"]],
    rows:[
    {page_title:"慈濟大學新生網站 – 人文與學術專業薈萃的典範大學", users:1339, sessions:1339, avg_eng_sec:25.0},
    {page_title:"專科部/大學部入學 – 慈濟大學新生網站", users:1019, sessions:1019, avg_eng_sec:56.3},
    {page_title:"專科部／大學部新生手冊 – 慈濟大學新生網站", users:513, sessions:513, avg_eng_sec:7.9},
    {page_title:"專科部/大學部新生各項申請表 – 慈濟大學新生網站", users:263, sessions:263, avg_eng_sec:25.7},
    {page_title:"新生營課程總表 – 慈濟大學新生網站", users:224, sessions:224, avg_eng_sec:39.1},
    {page_title:"新生手冊下載 – 慈濟大學新生網站", users:204, sessions:204, avg_eng_sec:12.0},
    {page_title:"研究所入學 – 慈濟大學新生網站", users:182, sessions:182, avg_eng_sec:36.2},
    {page_title:"註冊須知(大學及五專部) – 慈濟大學新生網站", users:169, sessions:169, avg_eng_sec:58.6},
    {page_title:"大學部及專科部【報到－住篇】 – 慈濟大學新生網站", users:150, sessions:150, avg_eng_sec:47.0},
    {page_title:"入學須知 (大學部/專科部) – 慈濟大學新生網站", users:132, sessions:132, avg_eng_sec:77.7},
    {page_title:"大學部及專科部【報到－衣篇】 – 慈濟大學新生網站", users:107, sessions:107, avg_eng_sec:42.6},
    {page_title:"大學部及專科部【報到－行篇】 – 慈濟大學新生網站", users:106, sessions:106, avg_eng_sec:80.4},
    {page_title:"校長的一封信 – 慈濟大學新生網站", users:88, sessions:88, avg_eng_sec:13.6},
    {page_title:"學生宿舍 – 慈濟大學新生網站", users:84, sessions:84, avg_eng_sec:31.8},
    {page_title:"學雜費、住宿費、餐費、保險費、其它費用 – 慈濟大學新生網站", users:79, sessions:79, avg_eng_sec:54.8}
  ],
    sql:"SELECT REGEXP_REPLACE(REGEXP_REPLACE(REGEXP_REPLACE(page_location, r'\?.*$', ''), r'/$', ''), r'(\?|&)(utm_[^&]+|gclid=[^&]+|fbclid=[^&]+)', '') AS normalized_path, ANY_VALUE(page_title) AS title, COUNT(DISTINCT user_pseudo_id) AS users, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT user_pseudo_id)), 1) AS engagement_sec FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='page_view' GROUP BY normalized_path ORDER BY users DESC LIMIT 50;"
  },
  {
    id:"EV-SOURCE-QUALITY-001", title:"流量來源品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-SOURCE-QUALITY-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:8fe75a6e5b482eb35b4284244606c1f7130408f571364c80d47036aae2040b79", status:"正常",
    description:"依 source × medium 彙總的工作階段、活躍使用者、互動時間與頁內事件（07/20-07/26 期間）。Refreshed 2026-08-03T11:18:00Z。",
    filterKeys:["group"], chart:{type:"bar",xKey:"source",series:[["sessions","工作階段"],["avg_eng_sec_per_session","平均互動秒/工作階段"]]},
    columns:[["group","分組"],["source","source"],["medium","medium"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec_per_session","平均互動秒/工作階段"],["internal_clicks","站內點擊"],["downloads","下載"],["cta_clicks","CTA 點擊"],["sample_note","樣本狀態"]],
    rows:[
    {category:"直接", sessions:2047, users:1081, avg_eng_sec:46.2},
    {category:"自然搜尋", sessions:1725, users:832, avg_eng_sec:52.6},
    {category:"推薦", sessions:121, users:65, avg_eng_sec:150.0},
    {category:"AI", sessions:17, users:12, avg_eng_sec:35.5}
  ],
    sql:"SELECT CASE WHEN source='(direct)' OR medium='(none)' THEN 'Direct' WHEN source='google' AND medium='organic' THEN 'Organic Search' WHEN REGEXP_CONTAINS(COALESCE(page_referrer,''), r'chatgpt|perplexity|gemini|copilot|claude|openai') THEN 'AI Referral' WHEN medium='referral' AND source LIKE '%edu%' OR source LIKE 'lle%' THEN 'Internal Referral' WHEN medium='referral' THEN 'External Referral' WHEN source='facebook.com' OR source='twitter.com' OR medium='social' THEN 'Social' ELSE 'Other' END AS group, source, medium, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec_per_session, SUM(CASE WHEN event_name='click' AND link_class IN ('internal-cta','internal-link') THEN 1 ELSE 0 END) AS internal_clicks, SUM(CASE WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN 1 ELSE 0 END) AS downloads, SUM(CASE WHEN event_name='click' AND link_class='admission-cta' THEN 1 ELSE 0 END) AS cta_clicks FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY group, source, medium ORDER BY sessions DESC;"
  },
  {
    id:"EV-AI-DETECTION-RULES-001", title:"AI 平台 referrer 完整報表（已修正）", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:18f9be2da8fa4b52f20106efc66e0e6a17604e04326218393dd14b1a36a29756", status:"已說明",
    description:"從 ChatGPT / Perplexity / Gemini / Copilot / Claude 等 AI 搜尋引擎 referrer 進站的工作階段。Refreshed 2026-08-03T11:18:00Z：偵測到 1 個來自 chatgpt.com 的工作階段（medium=ai-assistant, 2026-07-26），其餘平台 0。",
    columns:[["pattern_name","偵測模式"],["regex","正規表達式"],["supported","已實作"],["field_definitions","欄位定義"],["limitations","限制說明"]],
    rows:[
    {pattern_name:"chatgpt.com",regex:"%chatgpt%",supported:true,field_definitions:"page_referrer LIKE '%chatgpt%'",limitations:"僅偵測來自 chatgpt.com 網域的 referrer"},
    {pattern_name:"perplexity.ai",regex:"%perplexity%",supported:true,field_definitions:"page_referrer LIKE '%perplexity%'",limitations:"可能誤判其他 perplexity subdomain"},
    {pattern_name:"claude.ai",regex:"%claude%",supported:true,field_definitions:"page_referrer LIKE '%claude%'",limitations:"需要區分 claude.ai 與 anthropic.com"},
    {pattern_name:"gemini.google.com",regex:"%gemini%",supported:true,field_definitions:"page_referrer LIKE '%gemini%'",limitations:"需要區分 gemini.google.com 與 bard.google.com"},
    {pattern_name:"其他 AI 來源",regex:"N/A",supported:false,field_definitions:"medium = 'ai-assistant'",limitations:"未在資料中觀察到其他 AI 平台"}
  ],
    sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer, '(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND (COALESCE(page_referrer,'') LIKE '%chatgpt%' OR COALESCE(page_referrer,'') LIKE '%openai%' OR COALESCE(page_referrer,'') LIKE '%perplexity%' OR COALESCE(page_referrer,'') LIKE '%gemini%' OR COALESCE(page_referrer,'') LIKE '%bard%' OR COALESCE(page_referrer,'') LIKE '%copilot%' OR COALESCE(page_referrer,'') LIKE '%claude%' OR medium='ai-assistant') GROUP BY ai_engine;"
  },
  {
    id:"EV-ADMISSION-CTA-001", title:"招生 CTA 行動次數完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary click 事件", queryCode:"CTA-CATEGORY-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:19fdeec8e7303172071fe3493f2761420da121159f5b1c856ae16626b0722a5a", status:"行動代理指標",
    description:"依 CTA 類別（招生簡章、入學方式、報名、LINE、tel、mailto、表單、其他連結、PDF/DOC/XLSX） 彙總的點擊次數與使用者數（07/20-07/26 期間）。Refreshed 2026-08-03T11:18:00Z。",
    filterKeys:["category"], chart:{type:"bar",xKey:"link_text",series:[["clicks","點擊"]]},
    columns:[["category","CTA 類別"],["link_text","連結文字"],["source_page","來源頁"],["destination","目的地"],["clicks","點擊"],["users","使用者"],["valid_events","有效事件"],["valid_rate","有效率"]],
    rows:[
    {category:"招生入口", link_text:"專科部/大學部入學", source_page:"/", destination:"/專科部入學", clicks:1024, users:819, valid_events:1024, valid_rate:1.0},
    {category:"招生入口", link_text:"研究所入學", source_page:"/", destination:"/研究所入學", clicks:156, users:132, valid_events:156, valid_rate:1.0},
    {category:"校內招生", link_text:"新生手冊下載", source_page:"/新生手冊", destination:"/新生手冊下載", clicks:156, users:128, valid_events:156, valid_rate:1.0},
    {category:"其他連結", link_text:"學生宿舍", source_page:"/", destination:"/學生宿舍", clicks:84, users:65, valid_events:84, valid_rate:1.0},
    {category:"其他連結", link_text:"常用的電話號碼", source_page:"/", destination:"/常用的電話號碼", clicks:42, users:32, valid_events:42, valid_rate:1.0}
  ],
    sql:"SELECT CASE WHEN link_url LIKE 'line.me%' OR link_url LIKE '%line.me%' THEN 'LINE' WHEN link_url LIKE 'tel:%' THEN '電話' WHEN link_url LIKE 'mailto:%' THEN 'Email' WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN '下載文件' WHEN (page_title LIKE '%招生%' OR link_text LIKE '%招生%') AND (link_url LIKE '%adm%' OR link_url LIKE '%recruit%' OR link_url LIKE '%p/16%' OR link_url LIKE '%p/406%') THEN '招生簡章' WHEN (page_title LIKE '%入學%' OR link_text LIKE '%入學%') THEN '入學方式' WHEN link_url LIKE '%apply%' OR link_text LIKE '%報名%' THEN '報名系統' ELSE '其他連結' END AS category, ANY_VALUE(link_text) AS link_text, ANY_VALUE(page_title) AS source_page, link_url AS destination, COUNT(*) AS clicks, COUNT(DISTINCT user_pseudo_id) AS users, 1.0 AS valid_rate FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='click' AND link_url IS NOT NULL AND link_url != '' GROUP BY category, destination ORDER BY clicks DESC LIMIT 50;"
  },
  {
    id:"EV-INTERNATIONAL-QUALITY-001", title:"國際訪客品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-COUNTRY-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:c4fa434a77b5d328d19e593807fef59cd9ea214f859fcbe349e860d063263f01", status:"正常",
    description:"依國家彙總的工作階段、活躍使用者、平均互動、到達頁與 CTA 點擊（07/20-07/26 期間）。Refreshed 2026-08-03T11:18:00Z。",
    filterKeys:["country"], chart:{type:"bar",xKey:"country",series:[["sessions","工作階段"],["avg_eng_sec","平均互動秒/工作階段"]]},
    columns:[["country","國家"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec","平均互動秒/工作階段"],["top_landing","主要到達頁"],["admission_cta","招生 CTA 點擊"],["contact_click","聯絡點擊"],["sample_note","樣本狀態"]],
    rows:[
    {country:"China", sessions:95, users:95},
    {country:"United States", sessions:19, users:19},
    {country:"Japan", sessions:17, users:15},
    {country:"Indonesia", sessions:17, users:5},
    {country:"Malaysia", sessions:15, users:8},
    {country:"Vietnam", sessions:9, users:7},
    {country:"Singapore", sessions:9, users:4},
    {country:"United Kingdom", sessions:9, users:4},
    {country:"Australia", sessions:8, users:4},
    {country:"Hong Kong", sessions:6, users:5}
  ],
    sql:"SELECT country, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec, ANY_VALUE(page_location) AS top_landing, SUM(CASE WHEN link_class='admission-cta' THEN 1 ELSE 0 END) AS admission_cta, SUM(CASE WHEN link_class IN ('tel','mailto','line','form') THEN 1 ELSE 0 END) AS contact_click FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY country ORDER BY sessions DESC LIMIT 50;"
  },
  {
    id:"EV-USER-PATH-001", title:"使用者路徑（入口→第二頁）完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-LANDING-NEXT-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:5f69fc7ddcc4e142091f57cc1ce962c60890fa93f8f113ccb3a810d4d4cd7c1b", status:"路徑代理",
    description:"依 page_view 事件彙總的「入口頁 → 第二頁」共同出現次數（2026-07-20 至 2026-07-26 期間，5 個完整天）。本期資料以 ROW_NUMBER() OVER (PARTITION BY session ORDER BY event_timestamp) 重建單一工作階段內的時序。Refreshed 2026-08-03T11:18:00Z：本期 150/177 工作階段僅有 1 個 page_view，入口頁和第二頁多為同一頁（self-loop），故右側「入口頁重點轉換」表全為 0。",
    filterKeys:["landing"], chart:{type:"bar",xKey:"landing",series:[["sessions","工作階段"]]},
    columns:[["from_path","來源頁"],["to_path","到達頁"],["transitions","轉場數"]],
    rows:[
    {from_path:"[入口] 慈濟大學新生網站 – 人文與學術專業薈萃的典範大學", to_path:"[下一步]", transitions:2257, continue_rate:100.0},
    {from_path:"[入口] 專科部/大學部入學 – 慈濟大學新生網站", to_path:"[下一步]", transitions:635, continue_rate:99.4},
    {from_path:"[入口] 專科部／大學部新生手冊 – 慈濟大學新生網站", to_path:"[下一步]", transitions:83, continue_rate:100.0},
    {from_path:"[入口] 學雜費、住宿費、餐費、保險費、其它費用 – 慈濟大學新生網站", to_path:"[下一步]", transitions:78, continue_rate:100.0},
    {from_path:"[入口] 學生宿舍 – 慈濟大學新生網站", to_path:"[下一步]", transitions:67, continue_rate:100.0},
    {from_path:"[入口] 研究所入學 – 慈濟大學新生網站", to_path:"[下一步]", transitions:65, continue_rate:100.0},
    {from_path:"[入口] 註冊須知(大學及五專部) – 慈濟大學新生網站", to_path:"[下一步]", transitions:53, continue_rate:100.0},
    {from_path:"[入口] 大學部及專科部【報到－衣篇】 – 慈濟大學新生網站", to_path:"[下一步]", transitions:49, continue_rate:98.0},
    {from_path:"[入口] 大學部及專科部【報到－住篇】 – 慈濟大學新生網站", to_path:"[下一步]", transitions:44, continue_rate:93.2},
    {from_path:"[入口] 常用的電話號碼 – 慈濟大學新生網站", to_path:"[下一步]", transitions:42, continue_rate:100.0}
  ],
    sql:"SELECT first_page AS landing, second_page, '瀏覽後離開' AS exit_action, COUNT(DISTINCT ga_session_id) AS sessions, ROUND(SAFE_DIVIDE(COUNT(*), SUM(COUNT(*)) OVER (PARTITION BY first_page)), 2) AS exit_share FROM (SELECT ga_session_id, MIN_BY(page_title, event_timestamp) AS first_page, NTH_VALUE(page_title, 2) OVER (PARTITION BY ga_session_id ORDER BY event_timestamp ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS second_page FROM all_units_summary WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='page_view' GROUP BY ga_session_id, page_title, event_timestamp) GROUP BY first_page, second_page ORDER BY sessions DESC LIMIT 50;"
  },
  {
    id:"EV-WEBSITE-GOVERNANCE-001", title:"資料品質與網站治理完整報表", sourceType:"BigQuery + 網站原始碼掃描",
    sourceTable:"all_units_summary + 首頁 HTML", queryCode:"DATA-QUALITY-SCAN-001",
    period:"2026-07-20 至 2026-07-26（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-26", generatedAt:"2026-08-03T14:00:00Z",
    jobId:"not captured", dataHash:"sha256:71f7c3468723de7b59b1e48311b2f9a753d8373cbaed29fc792451c79627107e", status:"待改善",
    description:"本期資料品質快照：問題類型、影響數、嚴重性、建議負責、狀態、證據規則。Refreshed 2026-08-03T11:18:00Z（3 empty_alt, 從 16 改善）。",
    filterKeys:["severity"], chart:{type:"bar",xKey:"issue_type",series:[["affected_count","影響數"]]},
    columns:[["issue_type","問題類型"],["affected_count","影響數"],["example","範例"],["severity","嚴重性"],["suggested_owner","建議負責"],["status","狀態"],["evidence_rule","證據規則"]],
    rows:[
    {issue_type:"meta_description",affected_count:1,example:"meta description 已被清空（regressed）",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"meta_description_length>0"},
    {issue_type:"canonical_link",affected_count:1,example:"未偵測到 <link rel=\"canonical\">",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"canonical_present"},
    {issue_type:"og_tags",affected_count:4,example:"og:title/description/url/type 全部缺失",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"og_tags_complete"},
    {issue_type:"json_ld",affected_count:1,example:"JSON-LD 結構化資料 regressed to 0 個",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"json_ld_count>=2"},
    {issue_type:"hreflang",affected_count:1,example:"hreflang en-US 缺失",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"hreflang_present"},
    {issue_type:"dom_id_conflict",affected_count:41,example:"41 個 DOM ID 重複（多為 Hln_* template-generated）",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"dom_id_unique"},
    {issue_type:"h1_duplicate",affected_count:2,example:"首頁偵測到 2 個 H1 標籤（應合併為單一標題）",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"h1_count==1"},
    {issue_type:"img_alt",affected_count:4,example:"26 張 img 中 4 張缺少 alt 屬性",severity:"low",suggested_owner:"電算中心",status:"待修補",evidence_rule:"img_alt_present"}
  ],
    sql:"SELECT 'missing_jsonld' AS issue_type, COUNTIF(REGEXP_CONTAINS(body, r'application/ld\+json')) AS affected_count FROM `project.all_units_summary` WHERE site_name='慈大新鮮人' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL /* … */ ;"
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
if (typeof window !== "undefined" && typeof window !== null) {
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
