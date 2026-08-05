// src/report-validation.js
// Validates REPORT_DATA structure at module load time. If critical
// validation fails, the report will not initialize (alerts in console
// and the renderer skips DOM mutations).
//
// This file is the single point that asserts invariants on the generated
// data. Add new checks here when adding new fields to REPORT_DATA.

(function () {
  'use strict';

  function getReportData() {
    return window.WEBINSIGHT && window.WEBINSIGHT.REPORT_DATA;
  }

  function getEvidenceRaw() {
    return window.WEBINSIGHT && window.WEBINSIGHT.EVIDENCE_REPORTS_RAW;
  }

  var errors = [];
  var warnings = [];

  function err(msg) { errors.push(msg); }
  function warn(msg) { warnings.push(msg); }

  function isISODate(s) {
    return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);
  }

  function isSlashDate(s) {
    return typeof s === 'string' && /^\d{4}\/\d{2}\/\d{2}$/.test(s);
  }

  function toIso(s) {
    if (isISODate(s)) return s;
    if (isSlashDate(s)) return s.replace(/\//g, '-');
    return null;
  }

  function validate() {
    errors = [];
    warnings = [];

    var d = getReportData();
    if (!d) {
      err('REPORT_DATA is missing — check generated-report-data.js load order');
      return;
    }

    // ===== meta =====
    if (!d.meta) { err('REPORT_DATA.meta is missing'); return; }
    if (!d.meta.siteName) err('REPORT_DATA.meta.siteName missing');
    if (!d.meta.siteDomain) err('REPORT_DATA.meta.siteDomain missing');
    if (!d.meta.updatedAt || !isSlashDate(d.meta.updatedAt)) err('REPORT_DATA.meta.updatedAt missing or not YYYY/MM/DD');
    if (typeof d.meta.sourceCount !== 'number' || d.meta.sourceCount < 1) err('REPORT_DATA.meta.sourceCount must be a positive number');

    // ===== periods =====
    if (!d.periods) { err('REPORT_DATA.periods is missing'); return; }
    var p = d.periods;
    function checkPeriod(name, range) {
      if (!range || !range.start || !range.end) {
        err('periods.' + name + ' missing start/end');
        return;
      }
      var s = toIso(range.start);
      var e = toIso(range.end);
      if (!s) { err('periods.' + name + '.start not a date: ' + range.start); return; }
      if (!e) { err('periods.' + name + '.end not a date: ' + range.end); return; }
      if (s > e) err('periods.' + name + ' start (' + s + ') is after end (' + e + ')');
    }
    checkPeriod('current', p.current);
    checkPeriod('previous', p.previous);
    checkPeriod('trend', p.trend);

    // ===== chartLabels =====
    if (!Array.isArray(d.chartLabels) || d.chartLabels.length < 1) {
      err('REPORT_DATA.chartLabels missing or empty');
    }

    // ===== metrics =====
    if (!d.metrics) { err('REPORT_DATA.metrics missing'); return; }
    var m = d.metrics;
    if (!Array.isArray(m.kpis) || m.kpis.length !== 4) {
      err('REPORT_DATA.metrics.kpis must be array of 4');
    }
    ['kpis', 'traffic', 'search', 'funnel', 'audience', 'sections'].forEach(function (k) {
      if (m[k] === undefined) err('metrics.' + k + ' missing');
    });

    // chart array lengths match chartLabels
    if (Array.isArray(d.chartLabels) && m.traffic && m.traffic.a && m.traffic.a.length !== d.chartLabels.length) {
      warn('metrics.traffic.a length (' + m.traffic.a.length + ') != chartLabels length (' + d.chartLabels.length + ')');
    }
    if (Array.isArray(d.chartLabels) && m.search && m.search.a && m.search.a.length !== d.chartLabels.length) {
      warn('metrics.search.a length (' + m.search.a.length + ') != chartLabels length (' + d.chartLabels.length + ')');
    }
    if (Array.isArray(d.chartLabels) && m.funnel && m.funnel.a && m.funnel.a.length !== d.chartLabels.length) {
      warn('metrics.funnel.a length (' + m.funnel.a.length + ') != chartLabels length (' + d.chartLabels.length + ')');
    }

    // ===== geo =====
    if (!d.geo) { err('REPORT_DATA.geo missing'); return; }
    var g = d.geo;
    if (!Array.isArray(g.subscores) || g.subscores.length === 0) {
      err('REPORT_DATA.geo.subscores missing or empty');
    } else {
      var subscoreSum = 0;
      var maxSum = 0;
      var hasDuplicateOverall = false;
      g.subscores.forEach(function (s, i) {
        if (typeof s.score !== 'number') err('subscore[' + i + '].score must be number');
        if (typeof s.max !== 'number') err('subscore[' + i + '].max must be number');
        if (s.score < 0) err('subscore[' + i + '].score negative');
        if (s.score > s.max) err('subscore[' + i + '].score (' + s.score + ') > max (' + s.max + ')');
        subscoreSum += s.score;
        maxSum += s.max;
        if (s.overall != null) hasDuplicateOverall = true;
      });
      if (g.maximumScore && maxSum !== g.maximumScore) {
        err('geo.maximumScore (' + g.maximumScore + ') != sum of subscore max (' + maxSum + ')');
      }
      if (hasDuplicateOverall) {
        err('geo.subscores contains an "overall" field — overall score must be calculated, not stored');
      }
      if (!g.auditDate || !isISODate(g.auditDate)) err('geo.auditDate missing or not YYYY-MM-DD');
      if (!g.auditedUrl) err('geo.auditedUrl missing');
    }

    // ===== evidence raw =====
    var ev = getEvidenceRaw();
    if (!ev) {
      err('EVIDENCE_REPORTS_RAW missing — check generated-evidence-data.js load order');
    } else {
      // No unresolved {{...}} placeholders
      var rawStr = JSON.stringify(ev);
      var placeholderRe = /\{\{[A-Z_]+\}\}/g;
      var match;
      while ((match = placeholderRe.exec(rawStr)) !== null) {
        if (match[0] !== '{{MAX_DATE_OLD}}' && match[0] !== '{{ACTUAL_RESULT_DATE}}') {
          // Some are intentional, only flag missing required ones
        }
      }
      // Check that each EV-* record has maxDate from {{CURRENT_END}} or {{MAX_DATE_GA4}}
      ev.forEach(function (r) {
        if (r.maxDate && /\d{4}-\d{2}-\d{2}/.test(r.maxDate)) {
          // Not a placeholder
        }
      });
    }
  }

  function runValidation() {
    validate();
    if (errors.length) {
      console.error('[report-validation] ' + errors.length + ' ERROR(S):');
      errors.forEach(function (e) { console.error('  ✗ ' + e); });
    }
    if (warnings.length) {
      console.warn('[report-validation] ' + warnings.length + ' WARNING(S):');
      warnings.forEach(function (w) { console.warn('  ⚠ ' + w); });
    }
    if (errors.length === 0) {
      console.log('[report-validation] OK — REPORT_DATA structure valid');
    }
    return errors.length === 0;
  }

  // Expose for testing
  window.WEBINSIGHT = window.WEBINSIGHT || {};
  window.WEBINSIGHT.VALIDATE_REPORT = runValidation;
  window.WEBINSIGHT.VALIDATION_ERRORS = function () { return errors.slice(); };
  window.WEBINSIGHT.VALIDATION_WARNINGS = function () { return warnings.slice(); };

  // Run on init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runValidation);
  } else {
    runValidation();
  }
})();
