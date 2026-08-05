// src/generated-report-data.js
// Single source of truth for ALL frequently changing ITM report values.
// This file is regenerated on every report refresh. To update the report,
// edit only this file (and generated-evidence-data.js for EV-* records).
// All other files (index.html, app.js, main.js, evidence-renderer.js,
// report-renderer.js) read from window.WEBINSIGHT.REPORT_DATA.
//
// Latest refresh: 2026-08-04 (Tue)
// Cutoff (smallest max_date across 3 sources): 2026-08-02
// Site: 資訊科技與管理系 (itm.tcu.edu.tw)

window.WEBINSIGHT = window.WEBINSIGHT || {};

window.WEBINSIGHT.REPORT_DATA = {
  meta: {
    siteName: "資訊科技與管理系",
    siteDomain: "itm.tcu.edu.tw",
    reportVersion: "v56",
    updatedAt: "2026/08/04",
    sourceCount: 3
  },

  periods: {
    current: {
      start: "2026/07/27",
      end: "2026/08/02"
    },
    previous: {
      start: "2026/07/20",
      end: "2026/07/26"
    },
    trend: {
      start: "2026/06/08",
      end: "2026/08/02"
    }
  },

  chartLabels: [
    "07/27", "07/28", "07/29", "07/30", "07/31", "08/01", "08/02"
  ],

  // ===== Frequently changing metrics =====
  // Migrated verbatim from data.js. Sub-keys preserve the exact shape that
  // app.js + report-renderer.js read via window.WEBINSIGHT.DATA.* .
  metrics: {
    kpis: [
      {k: "本週造訪人數", v: "226", trend: "+48.7%", avg: "前 7 天", up: true, desc: "近 7 天有幾個獨立訪客實際造訪了網站", src: "all_units_summary｜GA4-USERS-001", spark: [33, 40, 30, 34, 42, 15, 32]},
      {k: "本週工作階段", v: "262", trend: "+50.6%", avg: "前 7 天", up: true, desc: "近 7 天網站被造訪的次數（含重複訪客）", src: "all_units_summary｜GA4-SESSIONS-001", spark: [38, 45, 45, 40, 47, 15, 32]},
      {k: "Google 搜尋點擊", v: "88", trend: "+39.7%", avg: "前 7 天", up: true, desc: "近 7 天從 Google 搜尋點進來的人數", src: "all_gsc_summary｜GSC-KPI-001", spark: [22, 13, 24, 11, 4, 6, 8]},
      {k: "Google 搜尋點擊率", v: "3.65%", trend: "+30.8%", avg: "前 7 天平均", up: true, desc: "看到搜尋結果後真的點進來的比率", src: "all_gsc_summary｜GSC-CTR-001", spark: [22, 13, 24, 11, 4, 6, 8]}
    ],
    traffic: {a: [38, 45, 45, 40, 47, 15, 32], b: [170, 116, 177, 186, 148, 27, 76]},
    search: {a: [358, 321, 308, 327, 253, 231, 614], b: [22, 13, 24, 11, 4, 6, 8]},
    funnel: {a: [43, 36, 22, 34, 29, 14, 17], b: [148, 177, 91, 250, 103, 35, 39], c: [0, 0, 0, 0, 0, 0, 0]},
    audience: {
      total: 222,
      country: [
        {name: "Taiwan", sessions: 149, users: 109, share: 67.1},
        {name: "China", sessions: 65, users: 65, share: 29.3},
        {name: "United States", sessions: 5, users: 4, share: 2.3},
        {name: "Indonesia", sessions: 1, users: 1, share: 0.5}
      ],
      device: [
        {name: "desktop", sessions: 147, users: 129, share: 66.2},
        {name: "tablet", sessions: 2, users: 2, share: 0.9},
        {name: "mobile", sessions: 73, users: 50, share: 32.9}
      ],
      source: [
        {name: "(direct)/(none)", medium: "other", sessions: 162, users: 135, share: 73.0},
        {name: "google/organic", medium: "organic", sessions: 53, users: 40, share: 23.9},
        {name: "lle.moe.edu.tw/referral", medium: "internal", sessions: 3, users: 3, share: 1.4},
        {name: "cse.google.com/referral", medium: "other", sessions: 2, users: 1, share: 0.9},
        {name: "chatgpt.com/ai-assistant", medium: "ai", sessions: 1, users: 1, share: 0.5}
      ]
    },
    // Migrated from data.js sections{} — keep top-level access for app.js
    decisions: [],
    issues: [],
    webRows: [],
    quality: [],
    queries: [],
    sections: {
      trends: [
        {week: "06/07", sessions: 707, users: 438, pageviews: 3481, impressions: 4385, clicks: 342},
        {week: "06/14", sessions: 166, users: 124, pageviews: 868, impressions: 3960, clicks: 179},
        {week: "06/21", sessions: 316, users: 247, pageviews: 1275, impressions: 3159, clicks: 112},
        {week: "06/28", sessions: 214, users: 171, pageviews: 622, impressions: 2543, clicks: 70},
        {week: "07/05", sessions: 219, users: 163, pageviews: 762, impressions: 2553, clicks: 73},
        {week: "07/12", sessions: 240, users: 195, pageviews: 843, impressions: 2002, clicks: 54},
        {week: "07/19", sessions: 221, users: 180, pageviews: 857, impressions: 2436, clicks: 77},
        {week: "07/26", sessions: 18, users: 17, pageviews: 39, impressions: 387, clicks: 13}
      ],
      anomaly_rule: {
        threshold_pct: 30,
        min_base: {sessions: 20, impressions: 100, clicks: 10, users: 20, pageviews: 50}
      },
      brand_config: {
        terms: ["慈濟大學", "慈大", "慈濟", "Tzu Chi", "TCU", "tcu", "資管", "資訊科技與管理", "ITM", "itm"]
      },
      brand_split: [
        {month: "05/01", brand_pct: 74.1, nonbrand_pct: 25.9, brand_imp: 4101, brand_clicks: 79, nonbrand_imp: 1434, nonbrand_clicks: 35},
        {month: "06/01", brand_pct: 74.3, nonbrand_pct: 25.7, brand_imp: 4101, brand_clicks: 79, nonbrand_imp: 1434, nonbrand_clicks: 35},
        {month: "07/01", brand_pct: 69.2, nonbrand_pct: 30.8, brand_imp: 2102, brand_clicks: 42, nonbrand_imp: 936, nonbrand_clicks: 16}
      ],
      keyword_rows: [
        {query: "慈大學資",                 cls: "brand",    imp: 94,  clicks: 0, sum_position: 367, landing: "/"},
        {query: "site:itm.tcust.edu.tw",    cls: "brand",    imp: 50,  clicks: 0, sum_position: 225, landing: "/"},
        {query: "tcust",                    cls: "brand",    imp: 40,  clicks: 0, sum_position: 0,   landing: "/"},
        {query: "site:itm.tcu.edu.tw",      cls: "brand",    imp: 40,  clicks: 0, sum_position: 180, landing: "/"},
        {query: "慈濟大學 資管系",          cls: "brand",    imp: 37,  clicks: 4, sum_position: 0,   landing: "/p/412-1022-2586.php"},
        {query: "itm",                      cls: "brand",    imp: 27,  clicks: 0, sum_position: 184, landing: "/?Lang=en"},
        {query: "慈大 學資",                cls: "brand",    imp: 26,  clicks: 0, sum_position: 140, landing: "/"},
        {query: "tcu",                      cls: "brand",    imp: 24,  clicks: 0, sum_position: 72,  landing: "/"},
        {query: "慈濟大學資管系",            cls: "brand",    imp: 20,  clicks: 2, sum_position: 0,   landing: "/p/412-1022-2586.php"},
        {query: "慈濟大學資訊科技與管理學系", cls: "brand",  imp: 17,  clicks: 2, sum_position: 0,   landing: "/p/406-1022-65878,r452.php?Lang=zh-tw"},
        {query: "大學專題競賽",              cls: "nonbrand", imp: 16,  clicks: 0, sum_position: 82,  landing: "/p/404-1022-34441.php"},
        {query: "tcu itm",                  cls: "brand",    imp: 12,  clicks: 2, sum_position: 0,   landing: "/?Lang=en"},
        {query: "證照",                     cls: "nonbrand", imp: 12,  clicks: 0, sum_position: 509, landing: "/p/404-1022-30082.php"},
        {query: "資訊科技系",                cls: "nonbrand", imp: 10,  clicks: 0, sum_position: 91,  landing: "/"},
        {query: "大學專題競賽2026",         cls: "nonbrand", imp: 9,   clicks: 0, sum_position: 53,  landing: "/p/404-1022-34441.php"},
        {query: "慈濟大學科系",              cls: "brand",    imp: 8,   clicks: 0, sum_position: 50,  landing: "/"},
        {query: "蕭志清",                    cls: "nonbrand", imp: 8,   clicks: 2, sum_position: 33,  landing: "/p/412-1022-2586.php"},
        {query: "楊明軒",                    cls: "nonbrand", imp: 7,   clicks: 0, sum_position: 68,  landing: "/p/412-1022-2586.php"},
        {query: "2026專題競賽",              cls: "nonbrand", imp: 7,   clicks: 0, sum_position: 44,  landing: "/p/404-1022-34441.php"},
        {query: "慈大資管",                  cls: "brand",    imp: 7,   clicks: 1, sum_position: 0,   landing: "/p/412-1022-2586.php"},
        {query: "謝金峰",                    cls: "nonbrand", imp: 7,   clicks: 0, sum_position: 38,  landing: "/p/412-1022-2586.php"}
      ],
      content_matrix: [],
      traffic_quality: [],
      ai_config: {domains: []},
      ai_timeseries: [],
      ai_platforms: [],
      ai_total_period_sessions: 0,
      cta_funnel: [],
      cta_links: [],
      international: [],
      user_paths: [],
      user_path_transitions: [],
      data_quality_snapshot: []
    }
  },

  geo: {
    auditDate: "2026-08-04",
    auditedUrl: "https://itm.tcu.edu.tw/",
    maximumScore: 100,

    // Sub-scores drive EVERY other GEO number — do not duplicate the
    // overall score anywhere else. report-renderer.js sums these.
    subscores: [
      {label: "主題清楚度（網站主題是否明確）",     score: 11, max: 20},
      {label: "招生資訊完整度（能否回答學生和家長的問題）", score: 18, max: 20},
      {label: "可信度（聯絡資訊和地址是否完整）",     score: 20, max: 20},
      {label: "內容深度（網站章節數和說明完整性）",   score: 11, max: 20},
      {label: "技術名片（社群分享和搜尋預覽標籤）",   score: 2,  max: 20}
    ],

    managerSummary: {
      introduction: "目前這個系所網站 GEO 基礎大約 {score} 分（待加強）。",
      findings: [
        "內容介紹完整 — 資訊科技與管理系的課程（大數據、雲端、互動多媒體）、師資、招生資訊都有，但缺少讓搜尋引擎讀懂的「資料名片」。",
        "分享預覽失效 — 當家長把網站貼到 LINE 或 Facebook 時，看不到系所名稱與簡介（缺技術名片）。",
        "改版有倒退 — 自上次更新，JSON-LD 結構化資料被移除、canonical 與 hreflang 標記也被移除；{score} 分需要重新補齊這些技術標籤。"
      ]
    },

    technicalAudit: {
      implemented: [
        {n: 1, label: "<code>&lt;h1&gt;</code>", value: " × 2（標題結構問題 — 出現兩個 H1，應合併為單一標題）"},
        {n: 2, label: "<code>&lt;h2&gt;</code>", value: " × 13（heading hierarchy OK，內容深度提升）"},
        {n: 3, label: "<code>&lt;meta name=\"description\"&gt;</code>", value: ' 158 chars（含 AI 大數據、數位多媒體培育主軸）'},
        {n: 4, label: "<code>hreflang</code>", value: " 0 entries（英文版多語系標記缺失）"}
      ],
      warnings: [
        {n: 1, label: "<code>og:image</code>", value: " 系統路徑（建議改為正式主視覺 URL）"},
        {n: 2, label: " 4 張 img 缺少 ", valueAfter: " <code>alt</code> 屬性（26 張 img 中 4 張缺失）"},
        {n: 3, label: " 41 個 DOM ID 重複（template-generated Hln_* 系列）"}
      ],
      missing: [
        {n: 1, label: "<code>application/ld+json</code>", value: " 缺失（regressed from 2 個 JSON-LD 結構化資料）"},
        {n: 2, label: "<code>&lt;link rel=\"canonical\"&gt;</code>", value: " 缺失（regressed）"},
        {n: 3, label: "<code>og:title</code>", value: " 缺失（regressed）"},
        {n: 4, label: "<code>og:description</code>", value: " 缺失（regressed）"},
        {n: 5, label: "<code>hreflang=\"en-US\"</code>", value: " 缺失（regressed）"},
        {n: 6, label: "<code>og:url</code>", value: " 缺失"}
      ]
    }
  }
};

// ===== Backward-compatible alias =====
// Older app.js + evidence.js read window.WEBINSIGHT.DATA.* — keep that
// working. data.js (legacy) does `window.WEBINSIGHT.DATA = window.WEBINSIGHT.REPORT_DATA.metrics`,
// but the GEO block needs to be reachable too. The renderer (report-renderer.js)
// reads REPORT_DATA directly; the alias below keeps legacy code paths happy.
if (!window.WEBINSIGHT.DATA) {
  window.WEBINSIGHT.DATA = window.WEBINSIGHT.REPORT_DATA.metrics;
}
