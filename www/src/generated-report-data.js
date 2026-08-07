// src/generated-report-data.js
// Single source of truth for ALL frequently changing ... report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026/08/07 (Fri)
// Cutoff (smallest max_date across 3 sources): 2026-08-04 (GSC); GA4 through None
// Site: ... (www.tcu.edu.tw)
//
// Migration note (2026-08-07, analytics_refresh.py v2): adds 8 missing sections,
// the top-level geo object, real KPI trend/avg/spark, GSC merge in weekly aggregate.

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "...",
    siteDomain: "www.tcu.edu.tw",
    reportVersion: "v56",
    updatedAt: "2026/08/07",
    maxDateGa4: "None",
    maxDateGsc: "2026-08-04",
    sourceCount: 3
  },

  periods: {
    current: { start: "2026/07/29", end: "2026/08/04" },
    previous: { start: "2026/07/22", end: "2026/07/28" },
    trend:    { start: "2026/06/09", end: "2026/07/28" }
  },

  chartLabels: ["07/29","07/30","07/31","08/01","08/02","08/03","08/04"],

  metrics: {
    weeks:["07/29","07/30","07/31","08/01","08/02","08/03","08/04"],
    kpis:[
    {k:"本週造訪人數",v:"0",trend:"+0.0%",avg:"前 8 週平均 0",up:true,desc:"近 7 天有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[0,0,0,0,0,0,0]},
    {k:"本週工作階段",v:"0",trend:"+0.0%",avg:"前 8 週平均 0",up:true,desc:"近 7 天網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊",v:"4972",trend:"+18.0%",avg:"前 8 週平均 5812",up:true,desc:"近 7 天從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[0,0,0,0,0,0,0]},
    {k:"Google 搜尋點擊率",v:"6.69%",trend:"-0.08pt",avg:"前 8 週平均 7.38%",up:false,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[0,0,0,0,0,0,0]}],
    traffic:{a:[],b:[]},
    search:{a:[10893,10889,8427,7175,11207,13513,12270],b:[742,760,523,441,685,995,826]},
    funnel:{a:[],b:[],c:[]},
    audience:{total:0,country:[],device:[],source:[]},
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections:{
  trends:[
    {week:"06/08",sessions:0,users:0,pageviews:0,impressions:101704,clicks:7548},{week:"06/15",sessions:0,users:0,pageviews:0,impressions:109457,clicks:8629},{week:"06/22",sessions:0,users:0,pageviews:0,impressions:107406,clicks:8294},{week:"06/29",sessions:0,users:0,pageviews:0,impressions:90362,clicks:6817},{week:"07/06",sessions:0,users:0,pageviews:0,impressions:70702,clicks:4985},{week:"07/13",sessions:0,users:0,pageviews:0,impressions:66876,clicks:4557},{week:"07/20",sessions:0,users:0,pageviews:0,impressions:62624,clicks:4217},{week:"07/27",sessions:0,users:0,pageviews:0,impressions:20819,clicks:1446}],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },
  brand_config:{
    terms:[]
  },
  brand_split:[
    {month:"2026-04", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:33793, brand_clicks:2827, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-05", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:349820, brand_clicks:30319, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-06", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:372252, brand_clicks:33820, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-07", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:230550, brand_clicks:19288, nonbrand_imp:0, nonbrand_clicks:0},
    {month:"2026-08", brand_pct:100.0, nonbrand_pct:0.0, brand_imp:33061, brand_clicks:2604, nonbrand_imp:0, nonbrand_clicks:0}
  ],
  keyword_rows:[
    {query:"慈濟大學", cls:"nonbrand", imp:26515, clicks:2995, sum_position:17974, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟", cls:"nonbrand", imp:4841, clicks:10, sum_position:41219, landing:"http://www.tcu.edu.tw/"},
    {query:"tcu", cls:"nonbrand", imp:2245, clicks:311, sum_position:4080, landing:"http://www.tcu.edu.tw/"},
    {query:"慈大", cls:"nonbrand", imp:2045, clicks:336, sum_position:3602, landing:"http://www.tcu.edu.tw/"},
    {query:"tzu chi university", cls:"nonbrand", imp:725, clicks:10, sum_position:1621, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學行事曆", cls:"nonbrand", imp:718, clicks:184, sum_position:1271, landing:"https://www.tcu.edu.tw/"},
    {query:"慈濟大學校務系統", cls:"nonbrand", imp:694, clicks:5, sum_position:3171, landing:"https://www.tcu.edu.tw/"},
    {query:"慈濟大學建國校區", cls:"nonbrand", imp:594, clicks:29, sum_position:639, landing:"http://www.tcu.edu.tw/"},
    {query:"花蓮慈濟大學", cls:"nonbrand", imp:548, clicks:32, sum_position:417, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟科技大學", cls:"nonbrand", imp:529, clicks:24, sum_position:1474, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學學生資訊系統", cls:"nonbrand", imp:504, clicks:1, sum_position:3088, landing:"https://www.tcu.edu.tw/"},
    {query:"花蓮慈濟", cls:"nonbrand", imp:434, clicks:0, sum_position:3150, landing:"https://www.tcu.edu.tw/"},
    {query:"慈濟大學科系", cls:"nonbrand", imp:373, clicks:26, sum_position:1388, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學圖書館", cls:"nonbrand", imp:334, clicks:4, sum_position:999, landing:"http://www.tcu.edu.tw/"},
    {query:"花蓮大學", cls:"nonbrand", imp:311, clicks:2, sum_position:569, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學介仁校區", cls:"nonbrand", imp:240, clicks:6, sum_position:923, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟學校財團法人慈濟大學", cls:"nonbrand", imp:235, clicks:11, sum_position:129, landing:"http://www.tcu.edu.tw/"},
    {query:"慈济大学", cls:"nonbrand", imp:230, clicks:18, sum_position:116, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟大學 行事曆", cls:"nonbrand", imp:206, clicks:48, sum_position:383, landing:"https://www.tcu.edu.tw/"},
    {query:"慈濟大學中央校區", cls:"nonbrand", imp:201, clicks:7, sum_position:718, landing:"http://www.tcu.edu.tw/"},
    {query:"花蓮校務系統", cls:"nonbrand", imp:198, clicks:0, sum_position:725, landing:"https://www.tcu.edu.tw/"},
    {query:"site:www.tcu.edu.tw", cls:"nonbrand", imp:197, clicks:0, sum_position:2076, landing:"https://www.tcu.edu.tw/"},
    {query:"tcu 大學", cls:"nonbrand", imp:192, clicks:3, sum_position:296, landing:"http://www.tcu.edu.tw/"},
    {query:"慈大學資", cls:"nonbrand", imp:190, clicks:0, sum_position:1114, landing:"http://www.tcu.edu.tw/"},
    {query:"慈濟科大", cls:"nonbrand", imp:181, clicks:6, sum_position:307, landing:"http://www.tcu.edu.tw/"},
    {query:"魔豆", cls:"nonbrand", imp:173, clicks:0, sum_position:856, landing:"https://www.tcu.edu.tw/p/412-1033-4836.php"},
    {query:"慈科大", cls:"nonbrand", imp:158, clicks:6, sum_position:248, landing:"http://www.tcu.edu.tw/"},
    {query:"慈大校務", cls:"nonbrand", imp:147, clicks:0, sum_position:647, landing:"https://www.tcu.edu.tw/"},
    {query:"慈濟技術學院", cls:"nonbrand", imp:140, clicks:4, sum_position:341, landing:"http://www.tcu.edu.tw/"},
    {query:"慈大公告", cls:"nonbrand", imp:136, clicks:0, sum_position:347, landing:"https://www.tcu.edu.tw/"}
  ],
  content_matrix:[
  ],
  traffic_quality:[
  ],
  ai_platforms:[
    {platform:"ChatGPT",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Perplexity",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Gemini",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Copilot",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Claude",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"},
    {platform:"Other",sessions:0,users:0,landing_page:"-",avg_eng_sec:0,internal_clicks:0,sample_note:"樣本極少"}
  ],
  ai_total_period_sessions:0,
  cta_funnel:[
    {cta_category:"招生簡章",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"下載文件",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"入學方式",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"LINE",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"電話",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"Email",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"報名系統",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"聯絡表單",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"},
    {cta_category:"其他連結",distinct_links:0,sessions:0,users:0,sample_note:"本期 0 點擊"}
  ],
  cta_links:[
  ],
  international:[
  ],
  user_paths:[
  ],
  user_path_transitions:[
  ],
  data_quality_snapshot:[
    {issue_type:"JSON-LD 結構化資料缺失",affected_count:0,example:"首頁未偵測到 application/ld+json",severity:"高",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-SCHEMA-001: 缺 Department / Organization schema"},
    {issue_type:"H1 不唯一或不存在",affected_count:1,example:"首頁 H1 數量與規範不符",severity:"高",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-ENTITY-001: 主標唯一性檢核"},
    {issue_type:"圖片 alt 為空白或泛稱",affected_count:0,example:"alt 為空、為數字或為通用詞",severity:"中",suggested_owner:"單位網站管理人",status:"待修",evidence_rule:"GEO-MEDIA-001: 圖片語意描述檢核"},
    {issue_type:"舊網域 (tcust) 連結",affected_count:0,example:"首頁有 tcust.edu.tw 連結",severity:"中",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-DOMAIN-001: 301 與 canonical 修正"},
    {issue_type:"重複元素 ID",affected_count:0,example:"模板生成的 Hln_* 系列 ID 重複",severity:"中",suggested_owner:"電算中心",status:"待修",evidence_rule:"GEO-DUPLICATE-ID-001: 模板 ID 重整"},
    {issue_type:"未知國家/未設定",affected_count:0,example:"country 為 (not set) 的工作階段",severity:"中",suggested_owner:"GA4",status:"正常",evidence_rule:"GA4-COUNTRY-NULL: 已知資料限制"},
    {issue_type:"內部迴圈工作階段",affected_count:0,example:"medium=internal 的工作階段",severity:"低",suggested_owner:"GA4",status:"正常",evidence_rule:"GA4-INTERNAL-001: 站內跳轉監控"},
    {issue_type:"零點擊高曝光查詢",affected_count:30,example:"曝光 > 50 但點擊 = 0 的查詢",severity:"中",suggested_owner:"單位網站管理人",status:"待修",evidence_rule:"GSC-ZERO-CTR-001: 標題/描述優化對象"}
  ],

    }
  },

  geo: {
      auditDate: "2026-08-07",
      auditedUrl: "https://www.tcu.edu.tw/",
      maximumScore: 100,
      auditCounts: {
        jsonLdCount: 0,
        h1Count: 1,
        totalImages: 1,
        missingAltCount: 1,
        oldDomainLinkCount: 0,
        duplicateIdCount: 29
      },
      auditCrawlDate: "2026-08-07",
      subscores: [
        {
          label: "主題清楚度",
          score: 20,
          maximum: 20
        },
        {
          label: "招生資訊完整度",
          score: 8,
          maximum: 20
        },
        {
          label: "可信度",
          score: 16,
          maximum: 20
        },
        {
          label: "內容深度",
          score: 0,
          maximum: 20
        },
        {
          label: "技術名片",
          score: 18,
          maximum: 20
        }
      ],
      managerSummary: {
        introduction: "本次針對 ... 首頁做 GEO 基礎檢核；綜合評分 62/100。最高分代表「主題清楚、招生資訊完整、可被驗證、內容深度足夠、技術名片一致」全部到位。本期分數主要受 JSON-LD 結構化資料、圖片 alt 覆蓋率、舊網域連結與重複 ID 影響。",
        findings: [
          "主題與 H1：目前偵測到 1 個 H1，建議維持單一明確主標。",
          "結構化資料：JSON-LD 0 組，建議補 Department / EducationalOrganization schema。",
          "圖片覆蓋：1/1 圖片 alt 為空白或泛稱。",
          "舊網域連結：0 個 tcust.edu.tw 連結待替換為正式網域。",
          "重複 ID：29 處，建議重整模板輸出。"
        ]
      },
      technicalAudit: {
        implemented: [],
        warnings: [
          {
            n: 2,
            label: "唯一 H1",
            value: "1 個",
            note: "建議單一明確主標"
          },
          {
            n: 3,
            label: "圖片總數",
            value: "1 張",
            note: "其中 alt 為空白或泛稱者需補上語意"
          }
        ],
        missing: [
          {
            n: 1,
            label: "JSON-LD 結構化資料",
            value: "0 組",
            note: "Department / EducationalOrganization 尚未輸出"
          },
          {
            n: 4,
            label: "舊網域 (tcust) 連結",
            value: "0 個",
            note: "需替換或設 301 轉址"
          },
          {
            n: 5,
            label: "重複元素 ID",
            value: "29 處",
            note: "多為模板生成，建議改為 class 或動態 ID"
          }
        ]
      },
      status: "中等"
    }
};
