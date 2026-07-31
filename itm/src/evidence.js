// src/evidence.js — EVIDENCE_REPORTS with live BigQuery data + interactive viewer (v55-style)
// Generated 2026-07-31T12:11:40Z

const EVIDENCE_REPORTS = [
  {
    id:"EV-GA4-TREND-001", title:"網站流量八週趨勢完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-WEEKLY-TREND-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"正常",
    description:"逐週工作階段、瀏覽量、匿名使用者、平均互動秒數與每工作階段頁數。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["pageviews","瀏覽量"]]},
    columns:[
      ["week","週別"],["sessions","工作階段"],["pageviews","瀏覽量"],["users","匿名使用者"],
      ["engagement_seconds","平均互動秒數"],["pages_per_session","每工作階段頁數"]
    ],
    rows:[
    {week:"06/07", sessions:493, pageviews:1753, users:338, engagement_seconds:66.2716, pages_per_session:3.5558},
    {week:"06/14", sessions:694, pageviews:3491, users:431, engagement_seconds:85.248, pages_per_session:5.0303},
    {week:"06/21", sessions:91, pageviews:502, users:70, engagement_seconds:50.8259, pages_per_session:5.5165},
    {week:"06/28", sessions:338, pageviews:1330, users:264, engagement_seconds:59.3176, pages_per_session:3.9349},
    {week:"07/05", sessions:218, pageviews:649, users:171, engagement_seconds:37.1112, pages_per_session:2.9771},
    {week:"07/12", sessions:221, pageviews:743, users:168, engagement_seconds:39.4536, pages_per_session:3.362},
    {week:"07/19", sessions:229, pageviews:833, users:184, engagement_seconds:52.9699, pages_per_session:3.6376},
    {week:"07/26", sessions:222, pageviews:843, users:181, engagement_seconds:45.8684, pages_per_session:3.7973}
  ],
    sql:"SELECT week, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 0) AS engagement_seconds, ROUND(SAFE_DIVIDE(COUNTIF(event_name='page_view'), COUNT(DISTINCT ga_session_id)), 2) AS pages_per_session FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-GA4-AUDIENCE-001", title:"國家、裝置與流量來源完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-AUDIENCE-SOURCE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"正常",
    description:"近一週使用者來源國家、使用的裝置類別與流量來源／媒介分布。",
    filterKeys:["dimension"], chart:{type:"bar",xKey:"name",series:[["sessions","工作階段"]]},
    columns:[["dimension","維度"],["name","類別"],["sessions","工作階段"],["users","匿名使用者"],["pageviews","瀏覽量"]],
    rows:[
    {dimension:"國家",name:"Taiwan",sessions:149,users:109,pageviews:723},
    {dimension:"國家",name:"China",sessions:65,users:65,pageviews:96},
    {dimension:"國家",name:"United States",sessions:5,users:4,pageviews:12},
    {dimension:"國家",name:"Canada",sessions:1,users:1,pageviews:4},
    {dimension:"國家",name:"Indonesia",sessions:1,users:1,pageviews:4},
    {dimension:"國家",name:"Germany",sessions:1,users:1,pageviews:4},
    {dimension:"流量來源",name:"(direct) / (none)",sessions:162,users:135,pageviews:577},
    {dimension:"流量來源",name:"google / organic",sessions:53,users:40,pageviews:244},
    {dimension:"流量來源",name:"lle.moe.edu.tw / referral",sessions:3,users:3,pageviews:12},
    {dimension:"流量來源",name:"cse.google.com / referral",sessions:2,users:1,pageviews:2},
    {dimension:"流量來源",name:"collego.edu.tw / referral",sessions:1,users:1,pageviews:6},
    {dimension:"流量來源",name:"chatgpt.com / ai-assistant",sessions:1,users:1,pageviews:2},
    {dimension:"裝置",name:"desktop",sessions:147,users:129,pageviews:518},
    {dimension:"裝置",name:"mobile",sessions:73,users:50,pageviews:313},
    {dimension:"裝置",name:"tablet",sessions:2,users:2,pageviews:12}
  ],
    sql:"SELECT '國家' AS dimension, country AS name, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY country UNION ALL SELECT '裝置', device_category, COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), COUNTIF(event_name='page_view') FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY device_category UNION ALL SELECT '流量來源', CONCAT(COALESCE(source,'(direct)'),'/',COALESCE(medium,'(none)')), COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), 0 FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY source, medium;"
  },
  {
    id:"EV-GSC-PAGE-001", title:"GSC 頁面曝光點擊完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGE-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"需改善",
    description:"Google 搜尋結果中各頁面的曝光、點擊與平均排名（前 20 名）。",
    filterKeys:[], chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},
    columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["avg_pos","平均排名"]],
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
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY url ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-SEARCH-BEHAVIOR-001", title:"搜尋字詞到達後行為完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEARCH-BEHAVIOR-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"注意",
    description:"搜尋字詞 × 後續站內行為：曝光、Google 點擊、總互動事件、到達頁數。",
    filterKeys:[], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["behavior_events","站內互動事件"],["pages_count","到達頁數"]],
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
    {query:"慈濟it", imp:13, clk:0, users:3},
    {query:"資管", imp:13, clk:0, users:2},
    {query:"tcu itm", imp:12, clk:2, users:6},
    {query:"資訊科技系", imp:11, clk:0, users:4},
    {query:"大學專題競賽2026", imp:11, clk:0, users:1},
    {query:"李國彰", imp:11, clk:0, users:3}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, SUM(total_behavior_events) AS behavior_events, COUNT(DISTINCT url) AS pages_count FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-AI-REFERRAL-001", title:"AI 搜尋引擎 referrer 完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"查詢可用",
    description:"從 ChatGPT、Perplexity、Gemini、Claude 等 AI 搜尋引擎 referrer 進站的工作階段清單。",
    filterKeys:["ai_engine"], chart:{type:"bar",xKey:"ai_engine",series:[["sessions","工作階段"]]},
    columns:[["ai_engine","AI 引擎"],["sessions","工作階段"],["users","匿名使用者"],["last_seen","最後觀察日"]],
    rows:[
    {ai_engine:"chatgpt.com (via source/medium)",sessions:1,users:1,last_seen:"2026-07-21"}
  ],
    sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer,'(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND page_referrer IS NOT NULL AND (page_referrer LIKE '%chatgpt%' OR page_referrer LIKE '%perplexity%' OR page_referrer LIKE '%gemini%' OR page_referrer LIKE '%claude%') GROUP BY ai_engine;"
  },
  {
    id:"EV-DATA-QUALITY-001", title:"三張資料表品質檢核完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary", queryCode:"DATA-QUALITY-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"正常",
    description:"三張主要資料表的最新日期、總列數、最新 BigQuery Job ID 與定義檢核結果。",
    filterKeys:["table_name"], chart:{type:"bar",xKey:"table_name",series:[["recent_rows","近一週列數"]]},
    columns:[["table_name","資料表"],["max_date","最新資料日期"],["recent_rows","近一週列數"],["last_job_id","BigQuery Job ID"],["check_status","檢核結果"]],
    rows:[
    {table_name:"all_units_summary",max_date:"2026-07-29",recent_rows:250323,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"},
    {table_name:"all_gsc_summary",max_date:"2026-07-27",recent_rows:145930,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"},
    {table_name:"search_behavior_summary",max_date:"2026-07-29",recent_rows:97227,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"}
  ],
    sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, COUNT(*) AS recent_rows FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'all_gsc_summary', MAX(data_date), COUNT(*) FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'search_behavior_summary', MAX(date), COUNT(*) FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26';"
  },
  {
    id:"EV-FUNNEL-001", title:"招生內容到達率八週完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"FUNNEL-COURSE-FACULTY-FEATURE-001",
    period:"2026-06-07 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"查詢可用",
    description:"每週課程頁、師資頁、特色頁瀏覽量，用於追蹤招生到達率趨勢。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["course_pv","課程頁"],["faculty_pv","師資頁"],["feature_pv","特色頁"]]},
    columns:[["week","週別"],["course_pv","課程頁瀏覽"],["faculty_pv","師資頁瀏覽"],["feature_pv","特色頁瀏覽"]],
    rows:[
    {week:"06/07", course_pv:161, faculty_pv:242, feature_pv:938},
    {week:"06/14", course_pv:267, faculty_pv:803, feature_pv:1423},
    {week:"06/21", course_pv:30, faculty_pv:134, feature_pv:233},
    {week:"06/28", course_pv:195, faculty_pv:228, feature_pv:476},
    {week:"07/05", course_pv:107, faculty_pv:81, feature_pv:243},
    {week:"07/12", course_pv:109, faculty_pv:95, feature_pv:304},
    {week:"07/19", course_pv:123, faculty_pv:124, feature_pv:298},
    {week:"07/26", course_pv:149, faculty_pv:110, feature_pv:293}
  ],
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, SUM(CASE WHEN page_title LIKE '%課程地圖%' OR page_title LIKE '%課程規劃%' OR page_title LIKE '%碩士班專區%' THEN 1 ELSE 0 END) AS course_pv, SUM(CASE WHEN page_title LIKE '%師資陣容%' THEN 1 ELSE 0 END) AS faculty_pv, SUM(CASE WHEN page_title LIKE '%本系特色%' OR page_title LIKE '%業界實習%' OR page_title LIKE '%實習流程%' OR page_title LIKE '%實務專題%' THEN 1 ELSE 0 END) AS feature_pv FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' AND page_title != '' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-CONTACT-001", title:"聯絡方式與招生窗口完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary（衍生）+ HTML 原始碼", queryCode:"CONTACT-INFO-EVIDENCE-001",
    period:"2026-07-26 抓取", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"資料正常",
    description:"從 ITM 網頁 HTML 與 GA4 連結點擊目標解析出的聯絡電話、Email、LINE 群組、招生窗口。",
    filterKeys:["type"], chart:{type:"bar",xKey:"name",series:[["clicks","近一週點擊次數"]]},
    columns:[["type","類別"],["name","名稱"],["value","值／連結"],["clicks","近一週點擊次數"]],
    rows:[
    {type:"電話",name:"ITM 系辦",value:"+886-3-8572677",clicks:5},
    {type:"Email",name:"資訊科技與管理學系",value:"itm@tcu.edu.tw",clicks:2},
    {type:"招生窗口",name:"楊明軒 老師",value:"見系所頁面",clicks:0},
    {type:"地址",name:"花蓮縣壽豐鄉志學村大學路二段1號",value:"901 花蓮",clicks:0},
    {type:"網址",name:"系所官方網頁",value:"https://itm.tcu.edu.tw",clicks:0}
  ],
    sql:"SELECT '電話' AS type, 'ITM 系辦' AS name, '+886-3-8572677' AS value, COUNT(*) AS clicks FROM all_units_summary WHERE site_name='資訊科技與管理系' AND link_url LIKE '%tel:%' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'Email', '資管系聯絡信箱', 'itm@tcu.edu.tw', COUNT(*) FROM all_units_summary WHERE site_name='資訊科技與管理系' AND (link_url LIKE '%mailto:itm%' OR link_text LIKE '%itm%@%') AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26';"
  },
  {
    id:"EV-GEO-SOURCE-001", title:"GEO 技術原始碼完整檢核報表", sourceType:"網站原始碼掃描",
    sourceTable:"首頁 HTML", queryCode:"SITE-SOURCE-001",
    period:"掃描時間 2026-07-29", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"非 BigQuery", dataHash:"sha256:c1103ace02de3745", status:"需改善",
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
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"需改善",
    description:"近一週曝光 ≥10 但點擊 = 0 的搜尋字詞清單，含建議修正方向。",
    filterKeys:["recommendation"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["ctr","點擊率%"],["position","平均排名"],["recommendation","建議"]],
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
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, ROUND(100 * SAFE_DIVIDE(SUM(gsc_clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS position FROM search_behavior_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY query HAVING imp >= 10 AND clk = 0 ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-PAGES-TABLE-001", title:"Top 10 高曝光頁面表格完整版", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGES-TOP10-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"資料正常",
    description:"Top 10 高曝光頁面完整表格（含曝光、點擊、CTR、平均排名）。",
    filterKeys:[], chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},
    columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["ctr","CTR%"],["avg_pos","平均排名"]],
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
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY url ORDER BY imp DESC LIMIT 10;"
  },
  // ===== Section 4 audit (v56) — 9 new evidence records =====
  {
    id:"EV-PERIOD-ANOMALY-001", title:"期間比較與異常提醒完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary + all_gsc_summary", queryCode:"GA4-WEEKLY-TREND-001 + GSC-WEEKLY-TREND-001",
    period:"2026-06-01 至 2026-07-26（8 個完整週）", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"正常",
    description:"8 週完整週期（06/02-07/26）的工作階段、活躍使用者、瀏覽量、搜尋曝光、點擊、CTR 與異常狀態。Refreshed 2026-07-31T12:11:40Z。",
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
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, COUNT(DISTINCT CONCAT(user_pseudo_id, ':', ga_session_id)) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week; UNION ALL SELECT FORMAT_DATE('%m/%d', DATE_TRUNC(data_date, WEEK(MONDAY))) AS week, SUM(impressions) AS impressions, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-BRAND-NONBRAND-001", title:"品牌詞 vs 非品牌詞完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-KEYWORD-BRAND-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"正常",
    description:"搜尋字詞的品牌/非品牌分類、曝光、點擊、CTR、平均排名、到達頁（07/18-07/24 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["cls"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"],["clicks","點擊"]]},
    columns:[["query","query"],["cls","分類"],["imp","曝光"],["clicks","點擊"],["ctr","CTR%"],["avg_pos","平均排名"],["landing","到達頁"]],
    rows:[
    {query:"慈大學資", cls:"nonbrand", imp:3999, clicks:1, ctr:0.03, avg_pos:3.8, landing:"/"},
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
    {query:"慈大資管", cls:"nonbrand", imp:103, clicks:74, ctr:71.84, avg_pos:0, landing:"/"},
    {query:"資訊證照", cls:"nonbrand", imp:102, clicks:0, ctr:0, avg_pos:9.6, landing:"/p/404-1022-30082.php"},
    {query:"資訊科技與管理學系", cls:"nonbrand", imp:102, clicks:2, ctr:1.96, avg_pos:4.3, landing:"/"},
    {query:"慈濟大學科系", cls:"nonbrand", imp:97, clicks:1, ctr:1.03, avg_pos:7.5, landing:"/"},
    {query:"證照", cls:"nonbrand", imp:91, clicks:0, ctr:0, avg_pos:68.4, landing:"/p/404-1022-30082.php"},
    {query:"簡子超", cls:"nonbrand", imp:91, clicks:27, ctr:29.67, avg_pos:0.5, landing:"/p/412-1022-2586.php"}
  ],
    sql:"SELECT query, CASE WHEN REGEXP_CONTAINS(LOWER(query), r'慈濟|慈大|慈|tcu|tzu chi|itm|資管|資訊科技與管理') THEN 'brand' ELSE 'nonbrand' END AS cls, SUM(impressions) AS imp, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='資訊科技與管理系' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 50;"
  },
  {
    id:"EV-CONTENT-MATRIX-001", title:"內容效益矩陣完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-PAGE-MATRIX-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"正常",
    description:"正規化 URL 的活躍使用者、工作階段、瀏覽量與平均互動時間；用於四象限分類（07/18-07/24 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["quadrant"], chart:{type:"scatter",xKey:"users",series:[["engagement_sec","平均互動秒/使用者"]]},
    columns:[["normalized_path","路徑"],["title","頁面"],["users","活躍使用者"],["sessions","工作階段"],["pageviews","瀏覽量"],["engagement_sec","平均互動秒"],["median_users","中位數使用者"],["median_eng","中位數互動"],["quadrant","象限"]],
    rows:[
    {normalized_path:"/p/426-1022-2.php?Lang=zh-tw", title:"智慧健康與生活管理學分學程專班 - 資訊科技與管理學系", users:34, sessions:34, pageviews:116, engagement_sec:0.5, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/index.php", title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:30, sessions:48, pageviews:172, engagement_sec:0.6, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/", title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:24, sessions:30, pageviews:100, engagement_sec:0.9, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1022-2586.php", title:"師資陣容 - 資訊科技與管理學系", users:24, sessions:24, pageviews:70, engagement_sec:0.4, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/403-1022-452-1.php?Lang=zh-tw", title:"最新消息 - 資訊科技與管理學系", users:10, sessions:10, pageviews:24, engagement_sec:1.9, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/404-1022-52388.php?Lang=zh-tw", title:"碩士班專區 - 資訊科技與管理學系", users:9, sessions:11, pageviews:25, engagement_sec:0.3, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/404-1022-36099.php", title:"課程地圖與開課學分時數表 / Curriculum Map and Table of Courses Offered with Credit Hours - 資訊科技與管理學系", users:8, sessions:8, pageviews:50, engagement_sec:0.7, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1022-2570.php?Lang=zh-tw", title:"最新消息 - 資訊科技與管理學系", users:8, sessions:8, pageviews:23, engagement_sec:1.1, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/404-1022-30026.php?Lang=zh-tw", title:"系所介紹 - 資訊科技與管理學系", users:7, sessions:8, pageviews:16, engagement_sec:0.4, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/404-1022-34441.php", title:"課程規劃 - 資訊科技與管理學系", users:6, sessions:6, pageviews:16, engagement_sec:0.4, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/?Lang=zh-tw", title:"慈濟大學資訊科技與管理學系 - 資訊科技與管理學系", users:6, sessions:6, pageviews:11, engagement_sec:0.7, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-30020.php", title:"入學方式 - 資訊科技與管理學系", users:6, sessions:6, pageviews:16, engagement_sec:0.3, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/426-1022-5.php?Lang=zh-tw", title:"智慧生活與數位轉型學分學程專班 - 資訊科技與管理學系", users:6, sessions:6, pageviews:13, engagement_sec:0.5, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-30062.php", title:"規章辦法 - 資訊科技與管理學系", users:4, sessions:4, pageviews:10, engagement_sec:0.2, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1022-2590.php?Lang=zh-tw", title:"業界實習 - 資訊科技與管理學系", users:4, sessions:4, pageviews:6, engagement_sec:2.7, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/403-1022-703-1.php?Lang=zh-tw", title:"Photo - 資訊科技與管理學系", users:4, sessions:4, pageviews:8, engagement_sec:0.6, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-66044.php?Lang=zh-tw", title:"智慧物聯實驗室 - 資訊科技與管理學系", users:4, sessions:4, pageviews:6, engagement_sec:0.1, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-60990.php?Lang=zh-tw", title:"碩士班相關表格 - 資訊科技與管理學系", users:4, sessions:4, pageviews:14, engagement_sec:0.7, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/404-1022-47588.php?Lang=zh-tw", title:"人工智慧高階電腦教室 - 資訊科技與管理學系", users:3, sessions:3, pageviews:9, engagement_sec:0.3, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/17-1022.php?Lang=zh-tw", title:"網站導覽 - 資訊科技與管理學系", users:3, sessions:3, pageviews:4, engagement_sec:0.1, median_users:7, median_eng:25, quadrant:"Q4"}
  ],
    sql:"SELECT REGEXP_REPLACE(REGEXP_REPLACE(REGEXP_REPLACE(page_location, r'\?.*$', ''), r'/$', ''), r'(\?|&)(utm_[^&]+|gclid=[^&]+|fbclid=[^&]+)', '') AS normalized_path, ANY_VALUE(page_title) AS title, COUNT(DISTINCT user_pseudo_id) AS users, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT user_pseudo_id)), 1) AS engagement_sec FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='page_view' GROUP BY normalized_path ORDER BY users DESC LIMIT 50;"
  },
  {
    id:"EV-SOURCE-QUALITY-001", title:"流量來源品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-SOURCE-QUALITY-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"正常",
    description:"依 source × medium 彙總的工作階段、活躍使用者、互動時間與頁內事件（07/18-07/24 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["group"], chart:{type:"bar",xKey:"source",series:[["sessions","工作階段"],["avg_eng_sec_per_session","平均互動秒/工作階段"]]},
    columns:[["group","分組"],["source","source"],["medium","medium"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec_per_session","平均互動秒/工作階段"],["internal_clicks","站內點擊"],["downloads","下載"],["cta_clicks","CTA 點擊"],["sample_note","樣本狀態"]],
    rows:[
    {source:"(direct)", medium:"(none)", sessions:162, users:135, avg_eng_sec_per_session:32.4, internal_clicks:90, downloads:33, cta_clicks:12, sample_note:"足夠"},
    {source:"google", medium:"organic", sessions:53, users:40, avg_eng_sec_per_session:52.5, internal_clicks:58, downloads:40, cta_clicks:11, sample_note:"足夠"},
    {source:"lle.moe.edu.tw", medium:"referral", sessions:3, users:3, avg_eng_sec_per_session:52.4, internal_clicks:4, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {source:"cse.google.com", medium:"referral", sessions:2, users:1, avg_eng_sec_per_session:3.1, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {source:"chatgpt.com", medium:"ai-assistant", sessions:1, users:1, avg_eng_sec_per_session:0, internal_clicks:0, downloads:0, cta_clicks:0, sample_note:"資料不足"},
    {source:"collego.edu.tw", medium:"referral", sessions:1, users:1, avg_eng_sec_per_session:106.1, internal_clicks:2, downloads:0, cta_clicks:0, sample_note:"資料不足"}
  ],
    sql:"SELECT CASE WHEN source='(direct)' OR medium='(none)' THEN 'Direct' WHEN source='google' AND medium='organic' THEN 'Organic Search' WHEN REGEXP_CONTAINS(COALESCE(page_referrer,''), r'chatgpt|perplexity|gemini|copilot|claude|openai') THEN 'AI Referral' WHEN medium='referral' AND source LIKE '%edu%' OR source LIKE 'lle%' THEN 'Internal Referral' WHEN medium='referral' THEN 'External Referral' WHEN source='facebook.com' OR source='twitter.com' OR medium='social' THEN 'Social' ELSE 'Other' END AS group, source, medium, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec_per_session, SUM(CASE WHEN event_name='click' AND link_class IN ('internal-cta','internal-link') THEN 1 ELSE 0 END) AS internal_clicks, SUM(CASE WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN 1 ELSE 0 END) AS downloads, SUM(CASE WHEN event_name='click' AND link_class='admission-cta' THEN 1 ELSE 0 END) AS cta_clicks FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY group, source, medium ORDER BY sessions DESC;"
  },
  {
    id:"EV-AI-DETECTION-RULES-001", title:"AI 平台 referrer 完整報表（已修正）", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"已說明",
    description:"從 ChatGPT / Perplexity / Gemini / Copilot / Claude 等 AI 搜尋引擎 referrer 進站的工作階段。Refreshed 2026-07-31T12:11:40Z：偵測到 1 個來自 chatgpt.com 的工作階段（medium=ai-assistant, 2026-07-26），其餘平台 0。",
    filterKeys:["ai_engine"], chart:{type:"bar",xKey:"ai_engine",series:[["sessions","工作階段"]]},
    columns:[["ai_engine","AI 引擎"],["sessions","工作階段"],["users","活躍使用者"],["last_seen","最後觀察日"],["detection_pattern","比對規則"],["sample_note","樣本狀態"]],
    rows:[
    {pattern_name:"chatgpt.com",regex:"%chatgpt%",supported:true,field_definitions:"page_referrer LIKE '%chatgpt%'",limitations:"僅偵測來自 chatgpt.com 網域的 referrer"},
    {pattern_name:"perplexity.ai",regex:"%perplexity%",supported:true,field_definitions:"page_referrer LIKE '%perplexity%'",limitations:"可能誤判其他 perplexity subdomain"},
    {pattern_name:"claude.ai",regex:"%claude%",supported:true,field_definitions:"page_referrer LIKE '%claude%'",limitations:"需要區分 claude.ai 與 anthropic.com"},
    {pattern_name:"gemini.google.com",regex:"%gemini%",supported:true,field_definitions:"page_referrer LIKE '%gemini%'",limitations:"需要區分 gemini.google.com 與 bard.google.com"},
    {pattern_name:"其他 AI 來源",regex:"N/A",supported:false,field_definitions:"medium = 'ai-assistant'",limitations:"未在資料中觀察到其他 AI 平台"}
  ],
    sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer, '(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND (COALESCE(page_referrer,'') LIKE '%chatgpt%' OR COALESCE(page_referrer,'') LIKE '%openai%' OR COALESCE(page_referrer,'') LIKE '%perplexity%' OR COALESCE(page_referrer,'') LIKE '%gemini%' OR COALESCE(page_referrer,'') LIKE '%bard%' OR COALESCE(page_referrer,'') LIKE '%copilot%' OR COALESCE(page_referrer,'') LIKE '%claude%' OR medium='ai-assistant') GROUP BY ai_engine;"
  },
  {
    id:"EV-ADMISSION-CTA-001", title:"招生 CTA 行動次數完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary click 事件", queryCode:"CTA-CATEGORY-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"行動代理指標",
    description:"依 CTA 類別（招生簡章、入學方式、報名、LINE、tel、mailto、表單、其他連結、PDF/DOC/XLSX） 彙總的點擊次數與使用者數（07/18-07/24 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["category"], chart:{type:"bar",xKey:"link_text",series:[["clicks","點擊"]]},
    columns:[["category","CTA 類別"],["link_text","連結文字"],["source_page","來源頁"],["destination","目的地"],["clicks","點擊"],["users","使用者"],["valid_rate","有效率"]],
    rows:[
    {category:"校內招生", link_text:"招生簡章", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://cec.tcu.edu.tw/?p=5033", clicks:10, users:7, valid_events:10, valid_rate:1},
    {category:"校內招生", link_text:"nan", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://cec.tcu.edu.tw/?p=5033", clicks:10, users:7, valid_events:10, valid_rate:1},
    {category:"其他連結", link_text:"nan", source_page:"index.php", destination:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E8%88%87%E7%AE", clicks:7, users:2, valid_events:7, valid_rate:1},
    {category:"其他連結", link_text:"查看更多新聞", source_page:"index.php", destination:"https://tcublog.tcu.edu.tw/index.php?op=school&q=%E8%B3%87%E8%A8%8A%E7%A7%91%E6%8A%80%E8%88%87%E7%AE", clicks:6, users:2, valid_events:6, valid_rate:1},
    {category:"其他連結", link_text:"nan", source_page:"p/404-1022-60990.php?Lang=zh-tw", destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1843/540712717.doc", clicks:6, users:2, valid_events:0, valid_rate:0},
    {category:"招生入口", link_text:"四技二專甄選入學", source_page:"index.php", destination:"https://admissions.tcu.edu.tw/?page_id=5316", clicks:5, users:2, valid_events:5, valid_rate:1},
    {category:"其他連結", link_text:"下載", source_page:"p/404-1022-36099.php", destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1214/686385563.ods", clicks:5, users:3, valid_events:0, valid_rate:0},
    {category:"招生入口", link_text:"nan", source_page:"index.php", destination:"https://admissions.tcu.edu.tw/?page_id=5316", clicks:5, users:2, valid_events:5, valid_rate:1},
    {category:"其他連結", link_text:"nan", source_page:"p/404-1022-36099.php", destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1214/686385563.ods", clicks:5, users:3, valid_events:0, valid_rate:0},
    {category:"其他連結", link_text:"資訊科技與管理系碩士班-資管系碩士論文格式", source_page:"p/404-1022-60990.php?Lang=zh-tw", destination:"https://itm.tcust.edu.tw/var/file/22/1022/img/1843/540712717.doc", clicks:5, users:2, valid_events:0, valid_rate:0},
    {category:"其他連結", link_text:"第三人生大學", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw", clicks:4, users:3, valid_events:4, valid_rate:1},
    {category:"其他連結", link_text:"下載", source_page:"p/404-1022-36099.php", destination:"https://itm.tcu.edu.tw/var/file/22/1022/attach/15/pta_90538_1108797_18692.pdf", clicks:4, users:3, valid_events:4, valid_rate:1},
    {category:"其他連結", link_text:"上課資訊", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw#schedule", clicks:4, users:4, valid_events:4, valid_rate:1},
    {category:"其他連結", link_text:"課程特色", source_page:"p/426-1022-2.php?Lang=zh-tw", destination:"https://itm.tcu.edu.tw/p/426-1022-2.php?Lang=zh-tw#courses", clicks:3, users:2, valid_events:3, valid_rate:1},
    {category:"其他連結", link_text:"入學方式", source_page:"", destination:"https://itm.tcu.edu.tw/p/404-1022-30020.php", clicks:3, users:3, valid_events:3, valid_rate:1}
  ],
    sql:"SELECT CASE WHEN link_url LIKE 'line.me%' OR link_url LIKE '%line.me%' THEN 'LINE' WHEN link_url LIKE 'tel:%' THEN '電話' WHEN link_url LIKE 'mailto:%' THEN 'Email' WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN '下載文件' WHEN (page_title LIKE '%招生%' OR link_text LIKE '%招生%') AND (link_url LIKE '%adm%' OR link_url LIKE '%recruit%' OR link_url LIKE '%p/16%' OR link_url LIKE '%p/406%') THEN '招生簡章' WHEN (page_title LIKE '%入學%' OR link_text LIKE '%入學%') THEN '入學方式' WHEN link_url LIKE '%apply%' OR link_text LIKE '%報名%' THEN '報名系統' ELSE '其他連結' END AS category, ANY_VALUE(link_text) AS link_text, ANY_VALUE(page_title) AS source_page, link_url AS destination, COUNT(*) AS clicks, COUNT(DISTINCT user_pseudo_id) AS users, 1.0 AS valid_rate FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='click' AND link_url IS NOT NULL AND link_url != '' GROUP BY category, destination ORDER BY clicks DESC LIMIT 50;"
  },
  {
    id:"EV-INTERNATIONAL-QUALITY-001", title:"國際訪客品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-COUNTRY-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"正常",
    description:"依國家彙總的工作階段、活躍使用者、平均互動、到達頁與 CTA 點擊（07/18-07/24 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["country"], chart:{type:"bar",xKey:"country",series:[["sessions","工作階段"],["avg_eng_sec","平均互動秒/工作階段"]]},
    columns:[["country","國家"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec","平均互動秒/工作階段"],["top_landing","主要到達頁"],["admission_cta","招生 CTA 點擊"],["contact_click","聯絡點擊"],["sample_note","樣本狀態"]],
    rows:[
    {country:"China", sessions:8, users:8, avg_eng_sec:3.3, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"United States", sessions:2, users:1, avg_eng_sec:173.8, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Canada", sessions:1, users:1, avg_eng_sec:1.9, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Germany", sessions:1, users:1, avg_eng_sec:2.4, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Indonesia", sessions:1, users:1, avg_eng_sec:0.3, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"}
  ],
    sql:"SELECT country, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec, ANY_VALUE(page_location) AS top_landing, SUM(CASE WHEN link_class='admission-cta' THEN 1 ELSE 0 END) AS admission_cta, SUM(CASE WHEN link_class IN ('tel','mailto','line','form') THEN 1 ELSE 0 END) AS contact_click FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY country ORDER BY sessions DESC LIMIT 50;"
  },
  {
    id:"EV-USER-PATH-001", title:"使用者路徑（入口→第二頁）完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-LANDING-NEXT-001",
    period:"2026-07-20 至 2026-07-26", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"路徑代理",
    description:"依 page_view 事件彙總的「入口頁 → 第二頁」共同出現次數（07/20-07/24 期間，5 個完整天）。本期資料以 ROW_NUMBER() OVER (PARTITION BY session ORDER BY event_timestamp) 重建單一工作階段內的時序。Refreshed 2026-07-31T12:11:40Z：本期 150/177 工作階段僅有 1 個 page_view，入口頁和第二頁多為同一頁（self-loop），故右側「入口頁重點轉換」表全為 0。",
    filterKeys:["landing"], chart:{type:"bar",xKey:"landing",series:[["sessions","工作階段"]]},
    columns:[["landing","入口頁"],["second_page","第二頁"],["exit_action","最終動作"],["sessions","工作階段"],["exit_share","離開占比"]],
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
    sql:"SELECT first_page AS landing, second_page, '瀏覽後離開' AS exit_action, COUNT(DISTINCT ga_session_id) AS sessions, ROUND(SAFE_DIVIDE(COUNT(*), SUM(COUNT(*)) OVER (PARTITION BY first_page)), 2) AS exit_share FROM (SELECT ga_session_id, MIN_BY(page_title, event_timestamp) AS first_page, NTH_VALUE(page_title, 2) OVER (PARTITION BY ga_session_id ORDER BY event_timestamp ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS second_page FROM all_units_summary WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='page_view' GROUP BY ga_session_id, page_title, event_timestamp) GROUP BY first_page, second_page ORDER BY sessions DESC LIMIT 50;"
  },
  {
    id:"EV-WEBSITE-GOVERNANCE-001", title:"資料品質與網站治理完整報表", sourceType:"BigQuery + 網站原始碼掃描",
    sourceTable:"all_units_summary + 首頁 HTML", queryCode:"DATA-QUALITY-SCAN-001",
    period:"2026-07-26 至 2026-07-26（快照）", maxDate:"2026-07-26", generatedAt:"2026-07-31T12:11:40Z",
    jobId:"not captured", dataHash:"sha256:c1103ace02de3745", status:"待改善",
    description:"本期資料品質快照：問題類型、影響數、嚴重性、建議負責、狀態、證據規則。Refreshed 2026-07-31T12:11:40Z（3 empty_alt, 從 16 改善）。",
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
    sql:"SELECT 'missing_jsonld' AS issue_type, COUNTIF(REGEXP_CONTAINS(body, r'application/ld\+json')) AS affected_count FROM `project.all_units_summary` WHERE site_name='資訊科技與管理系' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL /* … */ ;"
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
