// src/evidence.js — LEGACY COMPATIBILITY SHIM
// All evidence data has moved to generated-evidence-data.js (RAW with placeholders).
// All evidence render logic has moved to evidence-renderer.js.
// This file exists only to maintain the legacy `const EVIDENCE_REPORTS = [...]`
// global for any consumer that reads it before report-renderer.js has
// resolved the RAW array.

// generated-evidence-data.js has already loaded EVIDENCE_REPORTS_RAW and
// report-renderer.js has already resolved it. If the resolved array is
// available, expose it. Otherwise fall back to the RAW (which still
// has unresolved placeholders — consumers must handle that or wait).
if (window.WEBINSIGHT && window.WEBINSIGHT.EVIDENCE_REPORTS) {
  // Use resolved version (set by report-renderer.js)
  // (or fall back to RAW if not yet resolved)
  if (!window.WEBINSIGHT.EVIDENCE_REPORTS.length ||
      /\{\{[A-Z_]+\}\}/.test(JSON.stringify(window.WEBINSIGHT.EVIDENCE_REPORTS[0] || {}))) {
    // Still has placeholders — try RAW
    if (window.WEBINSIGHT.EVIDENCE_REPORTS_RAW) {
      window.WEBINSIGHT.EVIDENCE_REPORTS = window.WEBINSIGHT.EVIDENCE_REPORTS_RAW;
    }
  }
} else if (window.WEBINSIGHT && window.WEBINSIGHT.EVIDENCE_REPORTS_RAW) {
  // No resolved version yet — use RAW (with placeholders)
  window.WEBINSIGHT.EVIDENCE_REPORTS = window.WEBINSIGHT.EVIDENCE_REPORTS_RAW;
}
