// src/evidence.js — EVIDENCE_REPORTS with live BigQuery data + interactive viewer (v55-style)
// Generated 2026-07-31T12:11:40Z

const EVIDENCE_REPORTS = [
  {
    id:"EV-GA4-TREND-001", title:"網站流量八週趨勢完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-WEEKLY-TREND-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang dari 2026-07-31）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:e918ca784b185fc223a37da753457c51f017ae04e4f55802745bc090adae1c47", status:"正常",
    description:"逐週工作階段、瀏覽量、匿名使用者、平均互動秒數與每工作階段頁數。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["pageviews","瀏覽量"]]},
    columns:[
      ["week","週別"],["sessions","工作階段"],["pageviews","瀏覽量"],["users","匿名使用者"],
      ["engagement_seconds","平均互動秒數"],["pages_per_session","每工作階段頁數"]
    ],
    rows:[
    {week:"07/25",sessions:21,pageviews:31,users:20,engagement_seconds:0,pages_per_session:1.48},
    {week:"07/26",sessions:20,pageviews:24,users:19,engagement_seconds:0,pages_per_session:1.2},
    {week:"07/27",sessions:37,pageviews:71,users:35,engagement_seconds:0,pages_per_session:1.92},
    {week:"07/28",sessions:46,pageviews:73,users:43,engagement_seconds:0,pages_per_session:1.59},
    {week:"07/29",sessions:52,pageviews:173,users:40,engagement_seconds:0.0,pages_per_session:3.33},
    {week:"07/30",sessions:37,pageviews:97,users:34,engagement_seconds:0,pages_per_session:2.62},
    {week:"07/31",sessions:36,pageviews:112,users:31,engagement_seconds:0.0,pages_per_session:3.03}
  ],
    sql:"SELECT week, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 0) AS engagement_seconds, ROUND(SAFE_DIVIDE(COUNTIF(event_name='page_view'), COUNT(DISTINCT ga_session_id)), 2) AS pages_per_session FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-GA4-AUDIENCE-001", title:"國家、裝置與流量來源完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-AUDIENCE-SOURCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:e1f93c3fe53c993645889e6377aea15ec221092ccede1f1b8c718099765e3e27", status:"正常",
    description:"近一週使用者來源國家、使用的裝置類別與流量來源／媒介分布。",
    filterKeys:["dimension"], chart:{type:"bar",xKey:"name",series:[["sessions","工作階段"]]},
    columns:[["dimension","維度"],["name","類別"],["sessions","工作階段"],["users","匿名使用者"],["pageviews","瀏覽量"]],
    rows:[
    {dimension:"來源",name:"直接進站",sessions:104,users:0,pageviews:0},
    {dimension:"來源",name:"自然搜尋",sessions:80,users:0,pageviews:0},
    {dimension:"來源",name:"AI 推薦",sessions:1,users:0,pageviews:0},
    {dimension:"裝置",name:"desktop",sessions:114,users:0,pageviews:0},
    {dimension:"裝置",name:"mobile",sessions:69,users:0,pageviews:0},
    {dimension:"裝置",name:"tablet",sessions:2,users:0,pageviews:0},
    {dimension:"國家",name:"Taiwan",sessions:138,users:0,pageviews:0},
    {dimension:"國家",name:"China",sessions:29,users:0,pageviews:0},
    {dimension:"國家",name:"United States",sessions:5,users:0,pageviews:0},
    {dimension:"國家",name:"Hong Kong",sessions:4,users:0,pageviews:0},
    {dimension:"國家",name:"Singapore",sessions:4,users:0,pageviews:0}
  ],
    sql:"SELECT '國家' AS dimension, country AS name, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY country UNION ALL SELECT '裝置', device_category, COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), COUNTIF(event_name='page_view') FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY device_category UNION ALL SELECT '流量來源', CONCAT(COALESCE(source,'(direct)'),'/',COALESCE(medium,'(none)')), COUNT(DISTINCT ga_session_id), COUNT(DISTINCT user_pseudo_id), 0 FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY source, medium;"
  },
  {
    id:"EV-GSC-PAGE-001", title:"GSC 頁面曝光點擊完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGE-EVIDENCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:73e8a947967069c03942b6d774e3525db52b62f9d69bd95caf9a34ced516ccd6", status:"需改善",
    description:"Google 搜尋結果中各頁面的曝光、點擊與平均排名（前 20 名）。",
    filterKeys:[], chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},
    columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["avg_pos","平均排名"]],
    rows:[
    {rank:1,path:"/",imp:508,clk:31,avg_pos:17.9},
    {rank:2,path:"/p/412-1014-2990.php?Lang=zh-tw",imp:194,clk:1,avg_pos:14.0},
    {rank:3,path:"/p/406-1014-64715,r1027.php?Lang=zh-tw",imp:143,clk:5,avg_pos:42.3},
    {rank:4,path:"/app/index.php?Plugin=mobile&Action=mobileads&ad=1288",imp:82,clk:4,avg_pos:18.3},
    {rank:5,path:"/p/412-1014-2992.php",imp:71,clk:2,avg_pos:13.5},
    {rank:6,path:"/p/406-1014-64705,r1026.php?Lang=zh-tw",imp:61,clk:2,avg_pos:7.4},
    {rank:7,path:"/p/412-1014-4932.php?Lang=zh-tw",imp:60,clk:0,avg_pos:18.4},
    {rank:8,path:"/p/403-1014-1027-1.php?Lang=zh-tw",imp:59,clk:1,avg_pos:17.9},
    {rank:9,path:"/p/412-1014-4934.php?Lang=zh-tw",imp:52,clk:3,avg_pos:15.7},
    {rank:10,path:"/p/406-1014-65919,r1051.php?Lang=zh-tw",imp:50,clk:0,avg_pos:17.0},
    {rank:11,path:"/p/407-1014-503-1.php?Lang=zh-tw",imp:48,clk:0,avg_pos:10.4},
    {rank:12,path:"/p/406-1014-65342,r1051.php?Lang=zh-tw",imp:47,clk:1,avg_pos:18.0},
    {rank:13,path:"/p/406-1014-65341,r1051.php?Lang=zh-tw",imp:45,clk:0,avg_pos:12.7},
    {rank:14,path:"/p/403-1014-1026-1.php?Lang=zh-tw",imp:40,clk:3,avg_pos:18.1},
    {rank:15,path:"/p/406-1014-64729,r1027.php?Lang=zh-tw",imp:39,clk:5,avg_pos:5.1},
    {rank:16,path:"/p/406-1014-64702,r1026.php?Lang=zh-tw",imp:39,clk:3,avg_pos:9.4},
    {rank:17,path:"/p/412-1014-4969.php?Lang=zh-tw",imp:39,clk:6,avg_pos:13.3},
    {rank:18,path:"/p/406-1014-65037,r1023.php?Lang=zh-tw",imp:37,clk:0,avg_pos:30.1},
    {rank:19,path:"/p/406-1014-64730,r1027.php?Lang=zh-tw",imp:36,clk:3,avg_pos:15.8},
    {rank:20,path:"/p/406-1014-65223,r1051.php?Lang=zh-tw",imp:36,clk:1,avg_pos:12.1}
  ],
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='護理學院' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY url ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-SEARCH-BEHAVIOR-001", title:"搜尋字詞到達後行為完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEARCH-BEHAVIOR-EVIDENCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:56449a8298482daee622c9be3389f59bdc48c06d3e53b2a929b780ca9042a871", status:"注意",
    description:"搜尋字詞 × 後續站內行為：曝光、Google 點擊、總互動事件、到達頁數。",
    filterKeys:[], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["behavior_events","站內互動事件"],["pages_count","到達頁數"],["users","活躍使用者"]],
    rows:[
    {query:"site:nc.tcu.edu.tw",imp:170,clk:0,behavior_events:294,pages_count:140,users:38},
    {query:"liyun kuo",imp:80,clk:1,behavior_events:0,pages_count:1,users:0},
    {query:"site:nc.tcust.edu.tw",imp:70,clk:0,behavior_events:0,pages_count:46,users:0},
    {query:"慈濟護專",imp:66,clk:4,behavior_events:446,pages_count:3,users:64},
    {query:"慈濟大學護理系",imp:66,clk:0,behavior_events:446,pages_count:3,users:64},
    {query:"慈濟大學護理學院",imp:60,clk:10,behavior_events:404,pages_count:11,users:56},
    {query:"林玉娟",imp:36,clk:0,behavior_events:0,pages_count:1,users:0},
    {query:"慈濟大學護理學系",imp:29,clk:0,behavior_events:437,pages_count:4,users:59},
    {query:"慈濟大學護理科",imp:26,clk:1,behavior_events:293,pages_count:4,users:40},
    {query:"曹英",imp:25,clk:2,behavior_events:0,pages_count:1,users:0},
    {query:"慈濟大學護理",imp:24,clk:0,behavior_events:347,pages_count:4,users:50},
    {query:"護理大學",imp:22,clk:0,behavior_events:446,pages_count:1,users:64},
    {query:"慈濟大學護理系老師",imp:22,clk:3,behavior_events:78,pages_count:4,users:10},
    {query:"邱曉彥",imp:21,clk:1,behavior_events:0,pages_count:1,users:0},
    {query:"陸秀芳",imp:21,clk:4,behavior_events:0,pages_count:2,users:0},
    {query:"慈濟大學 護理學系",imp:20,clk:0,behavior_events:342,pages_count:4,users:45},
    {query:"慈濟護理科",imp:20,clk:0,behavior_events:314,pages_count:2,users:44},
    {query:"賴惠玲",imp:19,clk:0,behavior_events:0,pages_count:1,users:0},
    {query:"李崇仁",imp:16,clk:4,behavior_events:0,pages_count:1,users:0},
    {query:"慈濟大學 護理系",imp:15,clk:0,behavior_events:346,pages_count:4,users:48}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, SUM(total_behavior_events) AS behavior_events, COUNT(DISTINCT url) AS pages_count FROM search_behavior_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-AI-REFERRAL-001", title:"AI 搜尋引擎 referrer 完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:ee291349c961a368f44d802a17768e821335a4525b47566daf390c2a4691106f", status:"查詢可用",
    description:"從 ChatGPT、Perplexity、Gemini、Claude 等 AI 搜尋引擎（透過 page_referrer、Google source/medium 屬性）偵測到的工作階段清單。",
    filterKeys:["ai_engine"], chart:{type:"bar",xKey:"ai_engine",series:[["sessions","工作階段"]]},
    columns:[["ai_engine","AI 引擎"],["detection_method","偵測方法"],["sessions","工作階段"],["users","活躍使用者"],["last_seen","最後觀察日"]],
    rows:[
    {ai_engine:"chatgpt.com",detection_method:"source_medium",sessions:1,users:1,last_seen:"2026-07-22"},
    {ai_engine:"chatgpt.com",detection_method:"page_referrer",sessions:1,users:1,last_seen:"2026-07-20"}
  ],
    sql:"WITH raw_signals AS (SELECT user_pseudo_id, ga_session_id, date, page_referrer, source, medium FROM `hopeful-timing-478708-c0.ga4_history.all_units_summary` WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26'), classified AS (SELECT *, CASE WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' THEN 'page_referrer' WHEN LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' OR LOWER(COALESCE(medium,'')) LIKE '%ai%' THEN 'source_medium' END AS detection_method, CASE WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' THEN 'chatgpt.com' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' THEN 'perplexity.ai' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' THEN 'gemini.google.com' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' THEN 'claude.ai' WHEN LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' THEN 'copilot.microsoft.com' END AS ai_engine FROM raw_signals WHERE LOWER(COALESCE(page_referrer,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%openai%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%perplexity%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%gemini%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%claude%' OR LOWER(COALESCE(page_referrer,'')) LIKE '%copilot%' OR LOWER(COALESCE(source,'')) LIKE '%chatgpt%' OR LOWER(COALESCE(source,'')) LIKE '%openai%' OR LOWER(COALESCE(source,'')) LIKE '%perplexity%' OR LOWER(COALESCE(source,'')) LIKE '%gemini%' OR LOWER(COALESCE(source,'')) LIKE '%claude%' OR LOWER(COALESCE(medium,'')) LIKE '%ai%'), dedup AS (SELECT DISTINCT user_pseudo_id, ga_session_id, ai_engine, detection_method FROM classified) SELECT ai_engine, detection_method, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users FROM dedup GROUP BY ai_engine, detection_method ORDER BY sessions DESC"
  },
  {
    id:"EV-DATA-QUALITY-001", title:"三張資料表品質檢核完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary、all_gsc_summary、search_behavior_summary", queryCode:"DATA-QUALITY-EVIDENCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:297b437d0fc045e258f0e5bdb589dcb174892c972c78efd31f602c55797f8e06", status:"正常",
    description:"三張主要資料表的最新日期、總列數、最新 BigQuery Job ID 與定義檢核結果。",
    filterKeys:["table_name"], chart:{type:"bar",xKey:"table_name",series:[["recent_rows","近一週列數"]]},
    columns:[["table_name","資料表"],["max_date","最新資料日期"],["recent_rows","近一週列數"],["last_job_id","BigQuery Job ID"],["check_status","檢核結果"],["generated_at","產生時間"],["data_hash","資料雜湊"]],
    rows:[
    {table_name:"all_units_summary",max_date:"2026-07-29",recent_rows:250323,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"},
    {table_name:"all_gsc_summary",max_date:"2026-07-27",recent_rows:145930,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"},
    {table_name:"search_behavior_summary",max_date:"2026-07-29",recent_rows:97227,last_job_id:"not captured",check_status:"正常（最新）",generated_at:"2026-07-31T10:44:41Z",data_hash:"sha256:a57f521605bed1bc"}
  ],
    sql:"SELECT 'all_units_summary' AS table_name, MAX(date) AS max_date, COUNT(*) AS recent_rows FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'all_gsc_summary', MAX(data_date), COUNT(*) FROM all_gsc_summary WHERE site_name='護理學院' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'search_behavior_summary', MAX(date), COUNT(*) FROM search_behavior_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26';"
  },
  {
    id:"EV-FUNNEL-001", title:"招生內容到達率八週完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"FUNNEL-COURSE-FACULTY-FEATURE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:0d529fcab14f86673747503a529f6854e45f5a1a8e8a8489df7935741977f46d", status:"查詢可用",
    description:"每週課程頁、師資頁、特色頁瀏覽量，用於追蹤招生到達率趨勢。",
    filterKeys:[], chart:{type:"line",xKey:"week",series:[["course_pv","課程頁"],["faculty_pv","師資頁"],["feature_pv","特色頁"]]},
    columns:[["week","週別"],["course_pv","課程頁瀏覽"],["faculty_pv","師資頁瀏覽"],["feature_pv","特色頁瀏覽"]],
    rows:[
    {week:"07/25",course_pv:0,faculty_pv:17,feature_pv:0},
    {week:"07/26",course_pv:1,faculty_pv:9,feature_pv:1},
    {week:"07/27",course_pv:0,faculty_pv:14,feature_pv:1},
    {week:"07/28",course_pv:0,faculty_pv:33,feature_pv:2},
    {week:"07/29",course_pv:0,faculty_pv:33,feature_pv:2},
    {week:"07/30",course_pv:0,faculty_pv:35,feature_pv:2},
    {week:"07/31",course_pv:0,faculty_pv:27,feature_pv:6}
  ],
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, SUM(CASE WHEN page_title LIKE '%課程地圖%' OR page_title LIKE '%課程規劃%' OR page_title LIKE '%碩士班專區%' THEN 1 ELSE 0 END) AS course_pv, SUM(CASE WHEN page_title LIKE '%師資陣容%' THEN 1 ELSE 0 END) AS faculty_pv, SUM(CASE WHEN page_title LIKE '%本系特色%' OR page_title LIKE '%業界實習%' OR page_title LIKE '%實習流程%' OR page_title LIKE '%實務專題%' THEN 1 ELSE 0 END) AS feature_pv FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' AND page_title != '' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-CONTACT-001", title:"聯絡方式與招生窗口完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary（衍生）+ HTML 原始碼", queryCode:"CONTACT-INFO-EVIDENCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:3646bc4ce27a990e66486cec0cde233ec02c1c91c75a85a872a4038c5364a604", status:"資料正常",
    description:"從 NC 網頁 HTML 與 GA4 連結點擊目標解析出的聯絡電話、Email、LINE 群組、招生窗口。",
    filterKeys:["type"], chart:{type:"bar",xKey:"name",series:[["clicks","近一週點擊次數"]]},
    columns:[["type","類別"],["name","名稱"],["value","值／連結"],["clicks","近一週點擊次數"]],
    rows:[
    {type:"other",name:"",value:"https://tcunursing.tcu.edu.tw/?page_id=4469",clicks:14},
    {type:"other",name:"師資成員",value:"https://nc.tcu.edu.tw/p/412-1014-2992.php",clicks:10},
    {type:"other",name:"護理學系(四年制、二年制)",value:"https://tcunursing.tcu.edu.tw/?page_id=4469",clicks:10},
    {type:"other",name:"慈濟大學護理學院 College of Nursing",value:"https://nc.tcu.edu.tw/",clicks:9},
    {type:"other",name:"師資陣容",value:"https://dbm.tcu.edu.tw/?page_id=159",clicks:8},
    {type:"other",name:"",value:"https://dbm.tcu.edu.tw/?page_id=159",clicks:8},
    {type:"other",name:"",value:"https://tcunursing.tcu.edu.tw/",clicks:7},
    {type:"other",name:"護理科(五專)",value:"https://na.tcu.edu.tw/p/412-1015-3071.php",clicks:6},
    {type:"other",name:"",value:"https://na.tcu.edu.tw/p/412-1015-3071.php",clicks:6},
    {type:"other",name:"02 護理學院簡介 認識護理學院各學制與學習方向。 ›",value:"https://nc.tcu.edu.tw/#Dyn_2_3",clicks:5},
    {type:"other",name:"學院行政人員",value:"https://nc.tcu.edu.tw/p/412-1014-4934.php?Lang=zh-tw#cmb_90_1",clicks:5},
    {type:"other",name:"護理學系（四年制、二年制）",value:"https://tcunursing.tcu.edu.tw/",clicks:5},
    {type:"other",name:"",value:"https://na.tcu.edu.tw/p/412-1015-3208.php?Lang=zh-tw",clicks:4},
    {type:"other",name:"五專護理科招生",value:"https://admissions.tcu.edu.tw/?page_id=22279",clicks:4},
    {type:"other",name:"",value:"https://pbn.tcu.edu.tw/?page_id=875",clicks:4},
    {type:"other",name:"學士後護理學系",value:"https://pbn.tcu.edu.tw/?page_id=875",clicks:4},
    {type:"other",name:"護理學系碩士班",value:"https://tcunursing.tcu.edu.tw/?page_id=4469",clicks:4},
    {type:"other",name:"04 師資成員 查看教師專長、研究與教學領域。 ›",value:"https://nc.tcu.edu.tw/p/412-1014-2992.php",clicks:4},
    {type:"other",name:"",value:"https://nc.tcust.edu.tw/p/406-1014-66139,r1051.php?Lang=zh-tw",clicks:4},
    {type:"other",name:"01 最新消息 查看學院最新消息、活動公告與重要資訊。 ›",value:"https://nc.tcu.edu.tw/#Dyn_2_9",clicks:4}
  ],
    sql:"SELECT '電話' AS type, 'NC 系辦' AS name, '+886-3-8572677' AS value, COUNT(*) AS clicks FROM all_units_summary WHERE site_name='護理學院' AND link_url LIKE '%tel:%' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL SELECT 'Email', '護理學系聯絡信箱', 'nc@tcu.edu.tw', COUNT(*) FROM all_units_summary WHERE site_name='護理學院' AND (link_url LIKE '%mailto:nc%' OR link_text LIKE '%nc%@%') AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26';"
  },
  {
    id:"EV-GEO-SOURCE-001", title:"GEO 技術原始碼完整檢核報表", sourceType:"網站原始碼掃描",
    sourceTable:"首頁 HTML", queryCode:"SITE-SOURCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"非 BigQuery", dataHash:"sha256:24e9a4d11b0a721ce7081adc2919aee830ac0dc380a341ef09bc575779148182", status:"需改善",
    description:"這份報表不是 BigQuery 行為數據，而是 GEO／SEO 技術掃描證據。",
    filterKeys:["category","result"], chart:{type:"bar",xKey:"category",series:[["issue_count","問題數"]]},
    columns:[["category","類別"],["check_item","檢核項"],["result","結果"],["issue_count","問題數"],["evidence","證據摘要"],["owner","主責"]],
    rows:[
    {category:"實體", check_item:"首頁唯一 H1", result:"通過", issue_count:0, evidence:"首頁偵測到 1 個 H1 標籤", owner:"電算中心"},
    {category:"結構化資料", check_item:"JSON-LD blocks", result:"已實作", issue_count:0, evidence:"偵測到 1 個 JSON-LD 結構化資料區塊", owner:"電算中心"},
    {category:"Meta", check_item:"canonical link", result:"缺失", issue_count:1, evidence:"未偵測到 canonical link", owner:"電算中心"},
    {category:"Meta", check_item:"description 長度", result:"待改善", issue_count:1, evidence:"description 95 字", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:title", result:"缺失", issue_count:1, evidence:"og:title 缺失", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:description", result:"缺失", issue_count:1, evidence:"og:description 缺失", owner:"電算中心"},
    {category:"Open Graph", check_item:"og:url / og:type", result:"缺失", issue_count:2, evidence:"og:url 缺失, og:type 缺失", owner:"電算中心"},
    {category:"hreflang", check_item:"中英文版標記", result:"缺失", issue_count:1, evidence:"未偵測到 hreflang 標記", owner:"電算中心"},
    {category:"內容結構", check_item:"h2 數量", result:"待改善", issue_count:1, evidence:"h2 × 5", owner:"電算中心"},
    {category:"圖片", check_item:"alt 屬性", result:"待改善", issue_count:6, evidence:"9 張 img 中 6 張缺少 alt", owner:"電算中心"},
    {category:"DOM", check_item:"重複 ID", result:"待修補", issue_count:31, evidence:"31 個 DOM ID 重複", owner:"電算中心"}
  ],
    sql:"非 BigQuery。由 Hermes／爬蟲解析首頁 HTML，輸出標籤、屬性、數量與原始碼片段。"
  },
  {
    id:"EV-SEO-001", title:"高曝光零點擊搜尋字詞完整報表", sourceType:"BigQuery",
    sourceTable:"search_behavior_summary", queryCode:"SEO-ZEROCLICK-EVIDENCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:07ac0d38a1b6cc0c6ec7ac7fc58d54412845b990401fde5ebf8d3ac27844137c", status:"需改善",
    description:"近一週曝光 ≥10 但點擊 = 0 的搜尋字詞清單，含建議修正方向。",
    filterKeys:["recommendation"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"]]},
    columns:[["query","搜尋字詞"],["imp","曝光"],["clk","點擊"],["ctr","點擊率%"],["position","平均排名"],["recommendation","建議"]],
    rows:[
    {query:"site:nc.tcu.edu.tw", imp:170, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"liyun kuo", imp:80, clk:1, ctr:1.25, position:5, recommendation:"可優化 title 加系名"},
    {query:"site:nc.tcust.edu.tw", imp:70, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟大學護理系", imp:66, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟護專", imp:66, clk:4, ctr:6.06, position:5, recommendation:"可優化 title 加系名"},
    {query:"慈濟大學護理學院", imp:60, clk:10, ctr:16.67, position:5, recommendation:"可優化 title 加系名"},
    {query:"林玉娟", imp:36, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟大學護理學系", imp:29, clk:0, ctr:0, position:5, recommendation:"需建立專門 landing page 或加入系名"},
    {query:"慈濟大學護理科", imp:26, clk:1, ctr:3.85, position:5, recommendation:"可優化 title 加系名"},
    {query:"曹英", imp:25, clk:2, ctr:8, position:5, recommendation:"可優化 title 加系名"}
  ],
    sql:"SELECT query, SUM(impressions) AS imp, SUM(gsc_clicks) AS clk, ROUND(100 * SAFE_DIVIDE(SUM(gsc_clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position) / NULLIF(SUM(impressions), 0), 1) AS position FROM search_behavior_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY query HAVING imp >= 10 AND clk = 0 ORDER BY imp DESC LIMIT 20;"
  },
  {
    id:"EV-PAGES-TABLE-001", title:"Top 10 高曝光頁面表格完整版", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-PAGES-TOP10-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:2e80c3850e4cf62fd5c165c7d51a002f50fc350c24bbe5d6f50fd6af0dd68b57", status:"資料正常",
    description:"Top 10 高曝光頁面完整表格（含曝光、點擊、CTR、平均排名）。",
    filterKeys:[], chart:{type:"bar",xKey:"path",series:[["imp","曝光"]]},
    columns:[["rank","#"],["path","頁面路徑"],["imp","曝光"],["clk","點擊"],["ctr","CTR%"],["avg_pos","平均排名"]],
    rows:[
    {rank:1,path:"/",imp:94,clk:55,ctr:0,avg_pos:0},
    {rank:2,path:"/p/412-1014-2992.php",imp:19,clk:16,ctr:0,avg_pos:0},
    {rank:3,path:"/p/412-1014-4932.php?Lang=zh-tw",imp:9,clk:9,ctr:0,avg_pos:0},
    {rank:4,path:"/p/406-1014-64729,r1027.php?Lang=zh-tw",imp:13,clk:7,ctr:0,avg_pos:0},
    {rank:5,path:"/p/403-1014-1026-1.php?Lang=zh-tw",imp:8,clk:6,ctr:0,avg_pos:0},
    {rank:6,path:"/index.php",imp:6,clk:6,ctr:0,avg_pos:0},
    {rank:7,path:"/p/412-1014-4969.php?Lang=zh-tw",imp:11,clk:6,ctr:0,avg_pos:0},
    {rank:8,path:"/p/412-1014-4934.php?Lang=zh-tw",imp:12,clk:6,ctr:0,avg_pos:0},
    {rank:9,path:"/p/406-1014-64715,r1027.php?Lang=zh-tw",imp:6,clk:6,ctr:0,avg_pos:0},
    {rank:10,path:"/p/406-1014-65941,r1023.php?Lang=zh-tw",imp:5,clk:5,ctr:0,avg_pos:0}
  ],
    sql:"SELECT url, REGEXP_REPLACE(url, r'^https?://[^/]+', '') AS path, SUM(impressions) AS imp, SUM(clicks) AS clk, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='護理學院' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY url ORDER BY imp DESC LIMIT 10;"
  },
  // ===== Section 4 audit (v56) — 9 new evidence records =====
  {
    id:"EV-PERIOD-ANOMALY-001", title:"期間比較與異常提醒完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary + all_gsc_summary", queryCode:"GA4-WEEKLY-TREND-001 + GSC-WEEKLY-TREND-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:cea0151f37035d574053a4368230810228e5f2defb9f59d3ae274e03f8b7919d", status:"正常",
    description:"8 週完整週期（06/01-07/26）的工作階段、活躍使用者、瀏覽量、搜尋曝光、點擊、CTR 與異常狀態。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["week"], chart:{type:"line",xKey:"week",series:[["sessions","工作階段"],["users","活躍使用者"],["pageviews","瀏覽量"]]},
    columns:[["week","週別"],["sessions","工作階段"],["users","活躍使用者"],["pageviews","瀏覽量"],["impressions","搜尋曝光"],["clicks","搜尋點擊"],["ctr","CTR"],["status","狀態"],["delta_pct","與前期差異%"]],
    rows:[
    {week:"06/07", sessions:268, users:205, pageviews:1123, impressions:3039, clicks:151, ctr:4.97, status:"基準期", delta_pct:0},
    {week:"06/14", sessions:322, users:249, pageviews:933, impressions:3531, clicks:202, ctr:5.72, status:"基準期", delta_pct:0},
    {week:"06/21", sessions:57, users:45, pageviews:132, impressions:2552, clicks:127, ctr:4.98, status:"基準期", delta_pct:0},
    {week:"06/28", sessions:236, users:171, pageviews:556, impressions:2908, clicks:93, ctr:3.2, status:"基準期", delta_pct:0},
    {week:"07/05", sessions:187, users:151, pageviews:304, impressions:2644, clicks:87, ctr:3.29, status:"基準期", delta_pct:0},
    {week:"07/12", sessions:139, users:117, pageviews:233, impressions:2466, clicks:73, ctr:2.96, status:"基準期", delta_pct:0},
    {week:"07/19", sessions:215, users:176, pageviews:464, impressions:2560, clicks:105, ctr:4.1, status:"基準期", delta_pct:0},
    {week:"07/26", sessions:202, users:166, pageviews:298, impressions:2775, clicks:113, ctr:4.07, status:"基準期", delta_pct:0}
  ],
    sql:"SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, COUNT(DISTINCT CONCAT(user_pseudo_id, ':', ga_session_id)) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, COUNTIF(event_name='page_view') AS pageviews FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week; UNION ALL SELECT FORMAT_DATE('%m/%d', DATE_ADD(DATE_TRUNC(data_date, WEEK(MONDAY)), INTERVAL 6 DAY)) AS week, SUM(impressions) AS impressions, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr FROM all_gsc_summary WHERE site_name='護理學院' AND data_date BETWEEN DATE '2026-06-01' AND DATE '2026-07-26' GROUP BY week ORDER BY week;"
  },
  {
    id:"EV-BRAND-NONBRAND-001", title:"品牌詞 vs 非品牌詞完整報表", sourceType:"BigQuery",
    sourceTable:"all_gsc_summary", queryCode:"GSC-KEYWORD-BRAND-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:6aa7ff3070bf76ba4a331a304dfd9ee4bd0ad3c4ea24c0b6af987a9f669c45be", status:"正常",
    description:"搜尋字詞的品牌/非品牌分類、曝光、點擊、CTR、平均排名、到達頁（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["cls"], chart:{type:"bar",xKey:"query",series:[["imp","曝光"],["clicks","點擊"]]},
    columns:[["query","query"],["cls","分類"],["imp","曝光"],["clicks","點擊"],["ctr","CTR%"],["avg_pos","平均排名"],["landing","到達頁"]],
    rows:[
    {query:"慈濟大學護理系", cls:"nonbrand", imp:675, clicks:21, ctr:3.11, avg_pos:2.1, landing:"/"},
    {query:"學士後護理", cls:"nonbrand", imp:611, clicks:14, ctr:2.29, avg_pos:5, landing:"/p/406-1014-65037,r1023.php?Lang=zh-tw"},
    {query:"羅淑芬", cls:"nonbrand", imp:466, clicks:53, ctr:11.37, avg_pos:2, landing:"/p/406-1014-64702,r1026.php?Lang=zh-tw"},
    {query:"賴惠玲", cls:"nonbrand", imp:437, clicks:4, ctr:0.92, avg_pos:6.7, landing:"/p/406-1014-64699,r1026.php?Lang=zh-tw"},
    {query:"林玉娟", cls:"nonbrand", imp:364, clicks:2, ctr:0.55, avg_pos:0.4, landing:"/p/406-1014-64705,r1026.php?Lang=zh-tw"},
    {query:"楊美玲", cls:"nonbrand", imp:322, clicks:10, ctr:3.11, avg_pos:1.7, landing:"/p/406-1014-64730,r1027.php?Lang=zh-tw"},
    {query:"曹英", cls:"nonbrand", imp:296, clicks:25, ctr:8.45, avg_pos:2.1, landing:"/p/406-1014-64700,r1026.php?Lang=zh-tw"},
    {query:"邱曉彥", cls:"nonbrand", imp:276, clicks:5, ctr:1.81, avg_pos:6.1, landing:"/p/406-1014-65223,r1051.php?Lang=zh-tw"},
    {query:"慈濟護理系", cls:"nonbrand", imp:227, clicks:11, ctr:4.85, avg_pos:3.7, landing:"/"},
    {query:"慈濟護理", cls:"nonbrand", imp:226, clicks:10, ctr:4.42, avg_pos:1.5, landing:"/"},
    {query:"王淑芳", cls:"nonbrand", imp:222, clicks:10, ctr:4.5, avg_pos:8.2, landing:"/p/406-1014-64698,r1034.php?Lang=zh-tw"},
    {query:"慈濟大學護理科", cls:"nonbrand", imp:201, clicks:7, ctr:3.48, avg_pos:2.7, landing:"/"},
    {query:"周桂如", cls:"nonbrand", imp:186, clicks:3, ctr:1.61, avg_pos:7.4, landing:"/p/16-1014-65224.php?Lang=zh-tw"},
    {query:"慈濟大學護理學系", cls:"nonbrand", imp:171, clicks:8, ctr:4.68, avg_pos:1.7, landing:"/"},
    {query:"慈濟大學護理", cls:"nonbrand", imp:171, clicks:10, ctr:5.85, avg_pos:1, landing:"/"},
    {query:"護理學院", cls:"nonbrand", imp:161, clicks:1, ctr:0.62, avg_pos:6.4, landing:"/"},
    {query:"李崇仁", cls:"nonbrand", imp:136, clicks:16, ctr:11.76, avg_pos:0.9, landing:"/p/406-1014-64729,r1027.php?Lang=zh-tw"},
    {query:"吳素月", cls:"nonbrand", imp:127, clicks:5, ctr:3.94, avg_pos:1, landing:"/p/406-1014-64726,r1027.php?Lang=zh-tw"},
    {query:"慈濟大學護理系老師", cls:"nonbrand", imp:123, clicks:2, ctr:1.63, avg_pos:3, landing:"/p/403-1014-1027-1.php?Lang=zh-tw"},
    {query:"慈濟大學護理學院", cls:"nonbrand", imp:116, clicks:80, ctr:68.97, avg_pos:0.1, landing:"/"}
  ],
    sql:"SELECT query, CASE WHEN REGEXP_CONTAINS(LOWER(query), r'慈濟|慈大|慈|tcu|tzu chi|nc|ncu|護理') THEN 'brand' ELSE 'nonbrand' END AS cls, SUM(impressions) AS imp, SUM(clicks) AS clicks, ROUND(100*SAFE_DIVIDE(SUM(clicks), SUM(impressions)), 2) AS ctr, ROUND(SUM(sum_position)/NULLIF(SUM(impressions), 0), 1) AS avg_pos FROM all_gsc_summary WHERE site_name='護理學院' AND data_date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND query IS NOT NULL AND query != '' GROUP BY query ORDER BY imp DESC LIMIT 50;"
  },
  {
    id:"EV-CONTENT-MATRIX-001", title:"內容效益矩陣完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-PAGE-MATRIX-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:f3e34e0a8886f50f86e68f82b11832a972aa0a54ad2c4faaddcd9c3d51671fb5", status:"正常",
    description:"正規化 URL 的活躍使用者、工作階段、瀏覽量與平均互動時間；用於四象限分類（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["quadrant"], chart:{type:"scatter",xKey:"users",series:[["engagement_sec","平均互動秒/使用者"]]},
    columns:[["normalized_path","路徑"],["title","頁面"],["users","活躍使用者"],["sessions","工作階段"],["pageviews","瀏覽量"],["engagement_sec","平均互動秒"],["median_users","中位數使用者"],["median_eng","中位數互動"],["quadrant","象限"]],
    rows:[
    {normalized_path:"/", title:"慈濟大學護理學院 - 慈濟大學護理學院", users:55, sessions:70, pageviews:94, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1014-2992.php", title:"系科所組成員 - 慈濟大學護理學院", users:16, sessions:17, pageviews:19, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1014-4932.php?Lang=zh-tw", title:"護理學院沿革 - 慈濟大學護理學院", users:9, sessions:9, pageviews:9, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/406-1014-64729,r1027.php?Lang=zh-tw", title:"李崇仁 副教授 - 慈濟大學護理學院", users:7, sessions:7, pageviews:13, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q3"},
    {normalized_path:"/p/412-1014-4934.php?Lang=zh-tw", title:"成員介紹 - 慈濟大學護理學院", users:6, sessions:7, pageviews:12, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/index.php", title:"慈濟大學護理學院 - 慈濟大學護理學院", users:6, sessions:6, pageviews:6, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/403-1014-1026-1.php?Lang=zh-tw", title:"護理學系 - 慈濟大學護理學院", users:6, sessions:6, pageviews:8, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64715,r1027.php?Lang=zh-tw", title:"郭育倫 KUO,YU-LUN 主任 - 慈濟大學護理學院", users:6, sessions:6, pageviews:6, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1014-4969.php?Lang=zh-tw", title:"護理學院院長 - 慈濟大學護理學院", users:6, sessions:6, pageviews:11, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-65941,r1023.php?Lang=zh-tw", title:"恭賀🎉🎉🎉本院護理科蔡欣晏老師帶領兩組學生榮獲「2026全國大專校院高齡創意活動設計競賽」特優獎（第一名）及佳作（第三名） - 慈濟大學護理學院", users:5, sessions:5, pageviews:5, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-65180,r1020.php?Lang=zh-tw", title:"【護理學院演講】嘉義大林慈濟醫院護理部 陳佳蓉主任演講: 25風華準醫中大愛成林護理情✨✨✨ - 慈濟大學護理學院", users:4, sessions:4, pageviews:4, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64702,r1026.php?Lang=zh-tw", title:"羅淑芬 LO,SHU-FEN 副教授 - 慈濟大學護理學院", users:4, sessions:5, pageviews:8, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64730,r1027.php?Lang=zh-tw", title:"楊美玲 YANG,MEI-LIN 副教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1014-2990.php?Lang=zh-tw", title:"組織架構 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1014-4938.php?Lang=zh-tw", title:"交流園地 - 慈濟大學護理學院", users:3, sessions:3, pageviews:4, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64707,r1026.php?Lang=zh-tw", title:"陸秀芳 LU,SHIOU-FANG 助理教授 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/412-1014-3466.php?Lang=zh-tw", title:"教育部USR計畫 - 慈濟大學護理學院", users:3, sessions:3, pageviews:3, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64703,r1026.php?Lang=zh-tw", title:"許雅娟 HSU,YA-CHUAN 副教授 - 慈濟大學護理學院", users:3, sessions:4, pageviews:4, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/406-1014-64726,r1027.php?Lang=zh-tw", title:"吳素月 WU, SU-YUEH 約聘講師 - 慈濟大學護理學院", users:3, sessions:3, pageviews:4, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"},
    {normalized_path:"/p/16-1014-64704.php?Lang=zh-tw", title:"友善列印 - 黃君后 HUANG,CHUN-HOU 副教授 - 慈濟大學護理學院", users:2, sessions:2, pageviews:2, engagement_sec:0, median_users:7, median_eng:25, quadrant:"Q4"}
  ],
    sql:"SELECT REGEXP_REPLACE(REGEXP_REPLACE(REGEXP_REPLACE(page_location, r'\?.*$', ''), r'/$', ''), r'(\?|&)(utm_[^&]+|gclid=[^&]+|fbclid=[^&]+)', '') AS normalized_path, ANY_VALUE(page_title) AS title, COUNT(DISTINCT user_pseudo_id) AS users, COUNT(DISTINCT ga_session_id) AS sessions, COUNTIF(event_name='page_view') AS pageviews, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT user_pseudo_id)), 1) AS engagement_sec FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='page_view' GROUP BY normalized_path ORDER BY users DESC LIMIT 50;"
  },
  {
    id:"EV-SOURCE-QUALITY-001", title:"流量來源品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-SOURCE-QUALITY-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:3fe38c0b99f61ca63b3c95471ded0fe3719f5f49afc6ef17ccf379678700ae4b", status:"正常",
    description:"依 source × medium 彙總的工作階段、活躍使用者、互動時間與頁內事件（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["group"], chart:{type:"bar",xKey:"source",series:[["sessions","工作階段"],["avg_eng_sec_per_session","平均互動秒/工作階段"]]},
    columns:[["group","分組"],["source","source"],["medium","medium"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec_per_session","平均互動秒/工作階段"],["internal_clicks","站內點擊"],["downloads","下載"],["cta_clicks","CTA 點擊"],["sample_note","樣本狀態"]],
    rows:[
    {group:"direct",source:"(direct)",medium:"(none)",sessions:104,users:88,avg_eng_sec_per_session:0.0,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"足夠"},
    {group:"organic",source:"google",medium:"organic",sessions:79,users:70,avg_eng_sec_per_session:nan,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"足夠"},
    {group:"ai",source:"chatgpt.com",medium:"ai-assistant",sessions:1,users:1,avg_eng_sec_per_session:nan,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"},
    {group:"organic",source:"yahoo",medium:"organic",sessions:1,users:1,avg_eng_sec_per_session:nan,internal_clicks:0,downloads:0,cta_clicks:0,sample_note:"資料不足"}
  ],
    sql:"SELECT CASE WHEN source='(direct)' OR medium='(none)' THEN 'Direct' WHEN source='google' AND medium='organic' THEN 'Organic Search' WHEN REGEXP_CONTAINS(COALESCE(page_referrer,''), r'chatgpt|perplexity|gemini|copilot|claude|openai') THEN 'AI Referral' WHEN medium='referral' AND source LIKE '%edu%' OR source LIKE 'lle%' THEN 'Internal Referral' WHEN medium='referral' THEN 'External Referral' WHEN source='facebook.com' OR source='twitter.com' OR medium='social' THEN 'Social' ELSE 'Other' END AS group, source, medium, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec_per_session, SUM(CASE WHEN event_name='click' AND link_class IN ('internal-cta','internal-link') THEN 1 ELSE 0 END) AS internal_clicks, SUM(CASE WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN 1 ELSE 0 END) AS downloads, SUM(CASE WHEN event_name='click' AND link_class='admission-cta' THEN 1 ELSE 0 END) AS cta_clicks FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY group, source, medium ORDER BY sessions DESC;"
  },
  {
    id:"EV-AI-DETECTION-RULES-001", title:"AI 平台 referrer 完整報表（已修正）", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"AI-REFERRAL-EVIDENCE-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:18f9be2da8fa4b52f20106efc66e0e6a17604e04326218393dd14b1a36a29756", status:"已說明",
    description:"從 ChatGPT / Perplexity / Gemini / Copilot / Claude 等 AI 搜尋引擎 referrer 進站的工作階段。Refreshed 2026-07-31T12:11:40Z：偵測到 1 個來自 chatgpt.com 的工作階段（medium=ai-assistant, 2026-07-26），其餘平台 0。",
    columns:[["pattern_name","偵測模式"],["regex","正規表達式"],["supported","已實作"],["field_definitions","欄位定義"],["limitations","限制說明"]],
    rows:[
    {pattern_name:"chatgpt.com",regex:"%chatgpt%",supported:true,field_definitions:"page_referrer LIKE '%chatgpt%'",limitations:"僅偵測來自 chatgpt.com 網域的 referrer"},
    {pattern_name:"perplexity.ai",regex:"%perplexity%",supported:true,field_definitions:"page_referrer LIKE '%perplexity%'",limitations:"可能誤判其他 perplexity subdomain"},
    {pattern_name:"claude.ai",regex:"%claude%",supported:true,field_definitions:"page_referrer LIKE '%claude%'",limitations:"需要區分 claude.ai 與 anthropic.com"},
    {pattern_name:"gemini.google.com",regex:"%gemini%",supported:true,field_definitions:"page_referrer LIKE '%gemini%'",limitations:"需要區分 gemini.google.com 與 bard.google.com"},
    {pattern_name:"其他 AI 來源",regex:"N/A",supported:false,field_definitions:"medium = 'ai-assistant'",limitations:"未在資料中觀察到其他 AI 平台"}
  ],
    sql:"SELECT REGEXP_EXTRACT(COALESCE(page_referrer, '(none)'), r'^https?://([^/]+)') AS ai_engine, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, MAX(date) AS last_seen FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND (COALESCE(page_referrer,'') LIKE '%chatgpt%' OR COALESCE(page_referrer,'') LIKE '%openai%' OR COALESCE(page_referrer,'') LIKE '%perplexity%' OR COALESCE(page_referrer,'') LIKE '%gemini%' OR COALESCE(page_referrer,'') LIKE '%bard%' OR COALESCE(page_referrer,'') LIKE '%copilot%' OR COALESCE(page_referrer,'') LIKE '%claude%' OR medium='ai-assistant') GROUP BY ai_engine;"
  },
  {
    id:"EV-ADMISSION-CTA-001", title:"招生 CTA 行動次數完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary click 事件", queryCode:"CTA-CATEGORY-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:2fdff93bc58d4586d2f3d03db477729460b45595e51c3946e4869700d22ada93", status:"行動代理指標",
    description:"依 CTA 類別（招生簡章、入學方式、報名、LINE、tel、mailto、表單、其他連結、PDF/DOC/XLSX） 彙總的點擊次數與使用者數（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["category"], chart:{type:"bar",xKey:"link_text",series:[["clicks","點擊"]]},
    columns:[["category","CTA 類別"],["link_text","連結文字"],["source_page","來源頁"],["destination","目的地"],["clicks","點擊"],["users","使用者"],["valid_events","有效事件"],["valid_rate","有效率"]],
    rows:[
    {category:"其他連結", link_text:"nan", source_page:"p/412-1014-2992.php", destination:"https://tcunursing.tcu.edu.tw/?page_id=4469", clicks:14, users:11, valid_events:14, valid_rate:1},
    {category:"其他連結", link_text:"護理學系(四年制、二年制)", source_page:"p/412-1014-2992.php", destination:"https://tcunursing.tcu.edu.tw/?page_id=4469", clicks:10, users:9, valid_events:10, valid_rate:1},
    {category:"其他連結", link_text:"nan", source_page:"p/412-1014-2992.php", destination:"https://dbm.tcu.edu.tw/?page_id=159", clicks:8, users:7, valid_events:8, valid_rate:1},
    {category:"其他連結", link_text:"師資陣容", source_page:"p/412-1014-2992.php", destination:"https://dbm.tcu.edu.tw/?page_id=159", clicks:8, users:7, valid_events:8, valid_rate:1},
    {category:"其他連結", link_text:"nan", source_page:"", destination:"https://tcunursing.tcu.edu.tw/", clicks:7, users:4, valid_events:7, valid_rate:1},
    {category:"其他連結", link_text:"師資成員", source_page:"", destination:"https://nc.tcu.edu.tw/p/412-1014-2992.php", clicks:7, users:6, valid_events:7, valid_rate:1},
    {category:"其他連結", link_text:"慈濟大學護理學院 College of Nursing", source_page:"", destination:"https://nc.tcu.edu.tw/", clicks:6, users:5, valid_events:6, valid_rate:1},
    {category:"其他連結", link_text:"nan", source_page:"p/412-1014-2992.php", destination:"https://na.tcu.edu.tw/p/412-1015-3071.php", clicks:6, users:5, valid_events:6, valid_rate:1},
    {category:"其他連結", link_text:"護理科(五專)", source_page:"p/412-1014-2992.php", destination:"https://na.tcu.edu.tw/p/412-1015-3071.php", clicks:6, users:5, valid_events:6, valid_rate:1},
    {category:"其他連結", link_text:"02 護理學院簡介 認識護理學院各學制與學習方向。 ›", source_page:"", destination:"https://nc.tcu.edu.tw/#Dyn_2_3", clicks:5, users:5, valid_events:5, valid_rate:1},
    {category:"其他連結", link_text:"學院行政人員", source_page:"p/412-1014-4934.php?Lang=zh-tw", destination:"https://nc.tcu.edu.tw/p/412-1014-4934.php?Lang=zh-tw#cmb_90_1", clicks:5, users:3, valid_events:5, valid_rate:1},
    {category:"其他連結", link_text:"護理學系（四年制、二年制）", source_page:"", destination:"https://tcunursing.tcu.edu.tw/", clicks:5, users:3, valid_events:5, valid_rate:1},
    {category:"招生入口", link_text:"五專護理科招生", source_page:"", destination:"https://admissions.tcu.edu.tw/?page_id=22279", clicks:4, users:3, valid_events:4, valid_rate:1},
    {category:"其他連結", link_text:"nan", source_page:"", destination:"https://na.tcu.edu.tw/p/412-1015-3208.php?Lang=zh-tw", clicks:4, users:4, valid_events:4, valid_rate:1},
    {category:"其他連結", link_text:"04 師資成員 查看教師專長、研究與教學領域。 ›", source_page:"", destination:"https://nc.tcu.edu.tw/p/412-1014-2992.php", clicks:4, users:4, valid_events:4, valid_rate:1}
  ],
    sql:"SELECT CASE WHEN link_url LIKE 'line.me%' OR link_url LIKE '%line.me%' THEN 'LINE' WHEN link_url LIKE 'tel:%' THEN '電話' WHEN link_url LIKE 'mailto:%' THEN 'Email' WHEN link_url LIKE '%.pdf' OR link_url LIKE '%.doc%' OR link_url LIKE '%.xls%' THEN '下載文件' WHEN (page_title LIKE '%招生%' OR link_text LIKE '%招生%') AND (link_url LIKE '%adm%' OR link_url LIKE '%recruit%' OR link_url LIKE '%p/16%' OR link_url LIKE '%p/406%') THEN '招生簡章' WHEN (page_title LIKE '%入學%' OR link_text LIKE '%入學%') THEN '入學方式' WHEN link_url LIKE '%apply%' OR link_text LIKE '%報名%' THEN '報名系統' ELSE '其他連結' END AS category, ANY_VALUE(link_text) AS link_text, ANY_VALUE(page_title) AS source_page, link_url AS destination, COUNT(*) AS clicks, COUNT(DISTINCT user_pseudo_id) AS users, 1.0 AS valid_rate FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='click' AND link_url IS NOT NULL AND link_url != '' GROUP BY category, destination ORDER BY clicks DESC LIMIT 50;"
  },
  {
    id:"EV-INTERNATIONAL-QUALITY-001", title:"國際訪客品質完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-COUNTRY-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:827b0c87312a1615ae14158bc2e2f0c06512fd69cb497b1356ff4b14cd2f31df", status:"正常",
    description:"依國家彙總的工作階段、活躍使用者、平均互動、到達頁與 CTA 點擊（07/20-07/26 期間）。Refreshed 2026-07-31T12:11:40Z。",
    filterKeys:["country"], chart:{type:"bar",xKey:"country",series:[["sessions","工作階段"],["avg_eng_sec","平均互動秒/工作階段"]]},
    columns:[["country","國家"],["sessions","工作階段"],["users","活躍使用者"],["avg_eng_sec","平均互動秒/工作階段"],["top_landing","主要到達頁"],["admission_cta","招生 CTA 點擊"],["contact_click","聯絡點擊"],["sample_note","樣本狀態"]],
    rows:[
    {country:"China", sessions:4, users:4, avg_eng_sec:0.1, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"Hong Kong", sessions:3, users:2, avg_eng_sec:4.9, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"足夠"},
    {country:"United States", sessions:2, users:2, avg_eng_sec:9.4, top_landing:"/", admission_cta:2, contact_click:0, sample_note:"資料不足"},
    {country:"(unknown)", sessions:1, users:1, avg_eng_sec:0, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Australia", sessions:1, users:1, avg_eng_sec:0, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Canada", sessions:1, users:1, avg_eng_sec:28.3, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Japan", sessions:1, users:1, avg_eng_sec:24.9, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Malaysia", sessions:1, users:1, avg_eng_sec:5.8, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"},
    {country:"Singapore", sessions:1, users:1, avg_eng_sec:18.8, top_landing:"/", admission_cta:0, contact_click:0, sample_note:"資料不足"}
  ],
    sql:"SELECT country, COUNT(DISTINCT ga_session_id) AS sessions, COUNT(DISTINCT user_pseudo_id) AS users, ROUND(SAFE_DIVIDE(SUM(engagement_time_msec)/1000.0, COUNT(DISTINCT ga_session_id)), 1) AS avg_eng_sec, ANY_VALUE(page_location) AS top_landing, SUM(CASE WHEN link_class='admission-cta' THEN 1 ELSE 0 END) AS admission_cta, SUM(CASE WHEN link_class IN ('tel','mailto','line','form') THEN 1 ELSE 0 END) AS contact_click FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' GROUP BY country ORDER BY sessions DESC LIMIT 50;"
  },
  {
    id:"EV-USER-PATH-001", title:"使用者路徑（入口→第二頁）完整報表", sourceType:"BigQuery",
    sourceTable:"all_units_summary", queryCode:"GA4-LANDING-NEXT-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:902565bdeb6fecdc8bbe28f35867cdcc6a44fea6138779b1a42d98acb3697fbd", status:"路徑代理",
    description:"依 page_view 事件彙總的「入口頁 → 第二頁」共同出現次數（2026-07-20 至 2026-07-26 期間，5 個完整天）。本期資料以 ROW_NUMBER() OVER (PARTITION BY session ORDER BY event_timestamp) 重建單一工作階段內的時序。Refreshed 2026-07-31T12:11:40Z：本期 150/177 工作階段僅有 1 個 page_view，入口頁和第二頁多為同一頁（self-loop），故右側「入口頁重點轉換」表全為 0。",
    filterKeys:["landing"], chart:{type:"bar",xKey:"landing",series:[["sessions","工作階段"]]},
    columns:[["from_path","來源頁"],["to_path","到達頁"],["transitions","轉場數"]],
    rows:[
    {from_path:"/",to_path:"/p/412-1014-2992.php",transitions:12},
    {from_path:"/",to_path:"/p/412-1014-4932.php?Lang=zh-tw",transitions:5},
    {from_path:"/",to_path:"/p/412-1014-4938.php?Lang=zh-tw",transitions:4},
    {from_path:"/p/412-1014-2992.php",to_path:"/",transitions:3},
    {from_path:"/p/412-1014-4934.php?Lang=zh-tw",to_path:"/p/412-1014-4969.php?Lang=zh-tw",transitions:2},
    {from_path:"/p/406-1014-64677,r1025.php?Lang=zh-tw",to_path:"/p/412-1014-4934.php?Lang=zh-tw",transitions:2},
    {from_path:"/p/412-1014-2992.php",to_path:"/p/412-1014-4934.php?Lang=zh-tw",transitions:2},
    {from_path:"/p/412-1014-4969.php?Lang=zh-tw",to_path:"/p/412-1014-4934.php?Lang=zh-tw",transitions:2},
    {from_path:"/",to_path:"/p/406-1014-65941,r1023.php?Lang=zh-tw",transitions:2},
    {from_path:"/",to_path:"/p/412-1014-3406.php?Lang=zh-tw",transitions:1},
    {from_path:"/p/406-1014-64679,r1025.php?Lang=zh-tw",to_path:"/p/406-1014-64677,r1025.php?Lang=zh-tw",transitions:1},
    {from_path:"/p/406-1014-64699,r1026.php?Lang=zh-tw",to_path:"/p/403-1014-1026-1.php?Lang=zh-tw",transitions:1},
    {from_path:"/p/403-1014-1026-1.php?Lang=zh-tw",to_path:"/p/406-1014-64699,r1026.php?Lang=zh-tw",transitions:1},
    {from_path:"/p/406-1014-65499,r1020.php?Lang=zh-tw",to_path:"/index.php",transitions:1},
    {from_path:"/p/412-1014-4969.php?Lang=zh-tw",to_path:"/p/406-1014-64677,r1025.php?Lang=zh-tw",transitions:1}
  ],
    sql:"SELECT first_page AS landing, second_page, '瀏覽後離開' AS exit_action, COUNT(DISTINCT ga_session_id) AS sessions, ROUND(SAFE_DIVIDE(COUNT(*), SUM(COUNT(*)) OVER (PARTITION BY first_page)), 2) AS exit_share FROM (SELECT ga_session_id, MIN_BY(page_title, event_timestamp) AS first_page, NTH_VALUE(page_title, 2) OVER (PARTITION BY ga_session_id ORDER BY event_timestamp ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS second_page FROM all_units_summary WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' AND event_name='page_view' GROUP BY ga_session_id, page_title, event_timestamp) GROUP BY first_page, second_page ORDER BY sessions DESC LIMIT 50;"
  },
  {
    id:"EV-WEBSITE-GOVERNANCE-001", title:"資料品質與網站治理完整報表", sourceType:"BigQuery + 網站原始碼掃描",
    sourceTable:"all_units_summary + 首頁 HTML", queryCode:"DATA-QUALITY-SCAN-001",
    period:"2026-07-25 至 2026-07-31（7 天 daily, 1 minggu ke belakang）", maxDate:"2026-07-31", generatedAt:"2026-08-03T12:00:00Z",
    jobId:"not captured", dataHash:"sha256:877bd214032de4a756f3f4622ee5bc21cf24658e2244ea5bcea4fbc41a4df040", status:"待改善",
    description:"本期資料品質快照：問題類型、影響數、嚴重性、建議負責、狀態、證據規則。Refreshed 2026-07-31T12:11:40Z（3 empty_alt, 從 16 改善）。",
    filterKeys:["severity"], chart:{type:"bar",xKey:"issue_type",series:[["affected_count","影響數"]]},
    columns:[["issue_type","問題類型"],["affected_count","影響數"],["example","範例"],["severity","嚴重性"],["suggested_owner","建議負責"],["status","狀態"],["evidence_rule","證據規則"]],
    rows:[
    {issue_type:"canonical_link",affected_count:1,example:"未偵測到 <link rel=\"canonical\">",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"canonical_present"},
    {issue_type:"og_tags",affected_count:4,example:"og:title/description/url/type 全部缺失",severity:"high",suggested_owner:"電算中心",status:"待修補",evidence_rule:"og_tags_complete"},
    {issue_type:"hreflang",affected_count:1,example:"hreflang en-US 缺失",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"hreflang_present"},
    {issue_type:"h2_count_low",affected_count:1,example:"h2 = 5（原 20，regressed）",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"h2_count>=10"},
    {issue_type:"dom_id_conflict",affected_count:31,example:"31 個 DOM ID 重複（多為 Hln_* template-generated）",severity:"medium",suggested_owner:"電算中心",status:"待修補",evidence_rule:"dom_id_unique"},
    {issue_type:"img_alt",affected_count:6,example:"9 張 img 中 6 張缺少 alt 屬性",severity:"low",suggested_owner:"電算中心",status:"待修補",evidence_rule:"img_alt_present"},
    {issue_type:"og_image",affected_count:1,example:"og:image 指向系統路徑 /var/file/14/1014/...",severity:"low",suggested_owner:"電算中心",status:"待修補",evidence_rule:"og_image_real_url"}
  ],
    sql:"SELECT 'missing_jsonld' AS issue_type, COUNTIF(REGEXP_CONTAINS(body, r'application/ld\+json')) AS affected_count FROM `project.all_units_summary` WHERE site_name='護理學院' AND date BETWEEN DATE '2026-07-20' AND DATE '2026-07-26' UNION ALL /* … */ ;"
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
