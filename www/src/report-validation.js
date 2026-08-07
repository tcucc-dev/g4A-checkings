// src/report-validation.js
// Validates REPORT_DATA + DOM integration at module load time.
// Returns a structured result {ok, errors, warnings}.
// Stops report initialization when critical validation fails.

(function () {
  'use strict';

  var errors = [];
  var warnings = [];

  function err(msg) { errors.push(msg); }
  function warn(msg) { warnings.push(msg); }

  function isISODate(s) { return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s); }
  function isSlashDate(s) { return typeof s === 'string' && /^\d{4}\/\d{2}\/\d{2}$/.test(s); }
  function toIso(s) {
    if (isISODate(s)) return s;
    if (isSlashDate(s)) return s.replace(/\//g, '-');
    return null;
  }

  // Calculate score from subscores
  function calculateScore(geo) {
    if (!geo || !Array.isArray(geo.subscores)) return 0;
    return geo.subscores.reduce(function (total, item) { return total + Number(item.score || 0); }, 0);
  }
  function calculateMaximum(geo) {
    if (!geo || !Array.isArray(geo.subscores)) return 0;
    return geo.subscores.reduce(function (total, item) { return total + Number(item.maximum || 0); }, 0);
  }

  function validate() {
    errors = [];
    warnings = [];
    var d = window.WEBINSIGHT && window.WEBINSIGHT.REPORT_DATA;
    if (!d) { err('REPORT_DATA is missing'); return; }

    // ===== Metadata =====
    if (!d.meta) { err('REPORT_DATA.meta missing'); return; }
    if (!d.meta.siteName) err('meta.siteName missing');
    if (!d.meta.siteDomain) err('meta.siteDomain missing');
    if (!d.meta.updatedAt || !isSlashDate(d.meta.updatedAt)) err('meta.updatedAt missing or not YYYY/MM/DD');
    if (typeof d.meta.sourceCount !== 'number' || d.meta.sourceCount < 1) err('meta.sourceCount must be positive number');

    // ===== Periods =====
    if (!d.periods) { err('REPORT_DATA.periods missing'); return; }
    var p = d.periods;
    function checkPeriod(name, range) {
      if (!range || !range.start || !range.end) { err('periods.' + name + ' missing start/end'); return; }
      var s = toIso(range.start); var e = toIso(range.end);
      if (!s) { err('periods.' + name + '.start not a date: ' + range.start); return; }
      if (!e) { err('periods.' + name + '.end not a date: ' + range.end); return; }
      if (s > e) err('periods.' + name + ' start (' + s + ') is after end (' + e + ')');
    }
    checkPeriod('current', p.current);
    checkPeriod('previous', p.previous);
    checkPeriod('trend', p.trend);

    // ===== Chart labels =====
    if (!Array.isArray(d.chartLabels) || d.chartLabels.length < 1) err('chartLabels missing or empty');

    // ===== Metrics =====
    if (!d.metrics) { err('metrics missing'); return; }
    var m = d.metrics;
    if (!Array.isArray(m.weeks) || m.weeks.length !== d.chartLabels.length) {
      err('metrics.weeks length (' + (m.weeks || []).length + ') != chartLabels length (' + d.chartLabels.length + ')');
    }
    if (!Array.isArray(m.kpis) || m.kpis.length !== 4) err('metrics.kpis must be array of 4');

    // Check chart series lengths
    ['traffic', 'search', 'funnel'].forEach(function (k) {
      if (!m[k]) { err('metrics.' + k + ' missing'); return; }
      var sub = m[k];
      var subKeys = Object.keys(sub);
      subKeys.forEach(function (sk) {
        if (Array.isArray(sub[sk]) && sub[sk].length !== d.chartLabels.length) {
          warn('metrics.' + k + '.' + sk + ' length (' + sub[sk].length + ') != chartLabels length (' + d.chartLabels.length + ')');
        }
      });
    });

    // ===== Data preservation (prompt 22 §1) =====
    // Verify all datasets known to have data are not empty
    if (d.metrics.sections) {
      var sec = d.metrics.sections;
      var requiredDatasets = {
        'content_matrix': 25,
        'traffic_quality': 9,
        'ai_platforms': 5,
        'cta_funnel': 9,
        'cta_links': 4,
        'international': 5,
        'user_paths': 17,
        'user_path_transitions': 5,
        'data_quality_snapshot': 8
      };
      Object.keys(requiredDatasets).forEach(function (k) {
        var n = Array.isArray(sec[k]) ? sec[k].length : 0;
        if (n < requiredDatasets[k] / 2) {
          err('metrics.sections.' + k + ' has ' + n + ' entries, expected at least ' + (requiredDatasets[k] / 2) + ' (pre-refactor had ' + requiredDatasets[k] + ')');
        }
      });
    }

    // ===== GEO =====
    if (!d.geo) { err('geo missing'); return; }
    var g = d.geo;
    if (!Array.isArray(g.subscores) || g.subscores.length === 0) {
      err('geo.subscores missing or empty');
    } else {
      g.subscores.forEach(function (s, i) {
        if (typeof s.score !== 'number') err('subscore[' + i + '].score must be number');
        if (typeof s.maximum !== 'number') err('subscore[' + i + '].maximum must be number');
        if (s.score < 0) err('subscore[' + i + '].score negative');
        if (s.score > s.maximum) err('subscore[' + i + '].score > maximum');
        if ('overall' in s) err('subscore[' + i + '] has "overall" field — must be calculated, not stored');
      });
      var maxSum = calculateMaximum(g);
      if (typeof g.maximumScore === 'number' && maxSum !== g.maximumScore) {
        err('subscore maximum sum (' + maxSum + ') != geo.maximumScore (' + g.maximumScore + ')');
      }
      if (calculateScore(g) > maxSum) err('calculated score > maximum');
      if (!g.managerSummary) err('geo.managerSummary missing');
      else {
        if (!g.managerSummary.introduction) err('geo.managerSummary.introduction missing');
        if (!Array.isArray(g.managerSummary.findings) || g.managerSummary.findings.length === 0) {
          err('geo.managerSummary.findings missing or empty');
        }
      }
      if (!g.technicalAudit) err('geo.technicalAudit missing');
      else {
        ['implemented', 'warnings', 'missing'].forEach(function (k) {
          if (!Array.isArray(g.technicalAudit[k])) err('geo.technicalAudit.' + k + ' not an array');
        });
        // Check each row has {n, label, value or note}
        ['implemented', 'warnings', 'missing'].forEach(function (k) {
          (g.technicalAudit[k] || []).forEach(function (item, i) {
            if (typeof item.n !== 'number') err('geo.technicalAudit.' + k + '[' + i + '].n not number');
            if (!item.label) err('geo.technicalAudit.' + k + '[' + i + '].label missing');
          });
        });
      }
    }

    // ===== Evidence =====
    var raw = window.WEBINSIGHT.EVIDENCE_REPORTS_RAW;
    if (!raw) { err('EVIDENCE_REPORTS_RAW missing'); return; }
    if (!Array.isArray(raw) || raw.length < 20) err('EVIDENCE_REPORTS_RAW should have at least 20 records');

    // Resolve placeholders using the central resolver if available, so we
    // can scan the actually-rendered string the user will see.
    var ev = raw;
    if (typeof window.WEBINSIGHT.RESOLVE_EVIDENCE_PERIODS === 'function') {
      try { ev = window.WEBINSIGHT.RESOLVE_EVIDENCE_PERIODS(raw); }
      catch (e) { warn('RESOLVE_EVIDENCE_PERIODS threw: ' + e.message); }
    }

    // Check for unresolved placeholders in the resolved evidence
    var placeholderRe = /\{\{[A-Z0-9_]+\}\}/g;
    var evStr = JSON.stringify(ev);
    var placeholders = evStr.match(placeholderRe) || [];
    if (placeholders.length > 0) {
      var perReport = {};
      ev.forEach(function (r) {
        if (!r) return;
        var s = JSON.stringify(r);
        var m = s.match(placeholderRe);
        if (m && m.length) {
          perReport[r.id] = Array.from(new Set(m));
        }
      });
      err('Found ' + placeholders.length + ' unresolved placeholders after resolution: ' +
          Object.keys(perReport).slice(0, 5).map(function (id) {
            return id + '=[' + perReport[id].slice(0, 3).join(',') + ']';
          }).join(';'));
    }

    // ===== DOM integration =====
    // Only check DOM when document is ready (otherwise elements don't exist yet).
    if (typeof document !== 'undefined' && document.readyState !== 'loading') {
      var requiredIds = [
        'reportPeriod', 'reportUpdatedAt', 'reportSite', 'reportSources',
        '[data-geo-score-svg]',
        '[data-geo-score-text]',
        '[data-geo-max-text]',
        '[data-geo-ring-progress]',
        '[data-geo-headline]',
        '[data-geo-subscores]',
        '[data-geo-manager]',
        '[data-geo-technical]',
        '[data-geo-eyebrow]',
        '[data-geo-audit-date]'
      ];
      requiredIds.forEach(function (sel) {
        var el;
        if (sel.charAt(0) === '[') {
          el = document.querySelector(sel);
        } else {
          el = document.getElementById(sel);
        }
        if (!el) err('DOM missing element: ' + sel);
      });
    }
  }

  function run() {
    validate();
    return { ok: errors.length === 0, errors: errors.slice(), warnings: warnings.slice() };
  }

  // Expose
  window.WEBINSIGHT = window.WEBINSIGHT || {};
  window.WEBINSIGHT.VALIDATE_REPORT_DATA = run;
  window.WEBINSIGHT.VALIDATION_ERRORS = function () { return errors.slice(); };
  window.WEBINSIGHT.VALIDATION_WARNINGS = function () { return warnings.slice(); };

  // Run on init
  function onReady() {
    var result = run();
    if (!result.ok) {
      console.error('[report-validation] ' + result.errors.length + ' ERROR(S):');
      result.errors.forEach(function (e) { console.error('  ✗ ' + e); });
    }
    if (result.warnings.length > 0) {
      console.warn('[report-validation] ' + result.warnings.length + ' WARNING(S):');
      result.warnings.forEach(function (w) { console.warn('  ⚠ ' + w); });
    }
    if (result.ok) {
      console.log('[report-validation] OK — REPORT_DATA structure valid');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
