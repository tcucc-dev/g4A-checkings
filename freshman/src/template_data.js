// src/template_data.js — LEGACY COMPATIBILITY SHIM
// This file used to contain all the KPI / period / traffic data.
// That data has moved to generated-report-data.js (window.WEBINSIGHT.REPORT_DATA).
// The old `window.WEBINSIGHT.DATA` namespace is preserved as an alias
// of REPORT_DATA.metrics so existing renderers in app.js continue to work.

// generated-report-data.js has already run by the time this file loads
// (import order in main.js). Bind DATA as an alias to metrics for back-compat.
if (window.WEBINSIGHT && window.WEBINSIGHT.REPORT_DATA) {
  window.WEBINSIGHT.DATA = window.WEBINSIGHT.REPORT_DATA.metrics;
}
