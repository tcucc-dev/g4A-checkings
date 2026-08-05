// src/report-renderer.js
// Stable rendering logic for ITM report metadata, dates, and GEO content.
// Reads from window.WEBINSIGHT.REPORT_DATA (single source of truth).
// No hardcoded dates, scores, or site-specific values in this file.

(function () {
  'use strict';

  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function safeText(s) {
    return esc(s);
  }

  // ===== Score calculation: derive overall score from subscores =====
  // Single source of truth for the overall GEO score. Anywhere that
  // shows the score (SVG text, headline, ring dasharray, manager summary,
  // aria-label) must call calculateGeoScore() and not store its own
  // value.
  function calculateGeoScore(geo) {
    if (!geo || !Array.isArray(geo.subscores)) return 0;
    return geo.subscores.reduce(function (total, item) {
      return total + Number(item.score || 0);
    }, 0);
  }

  function calculateMaxScore(geo) {
    if (!geo || !Array.isArray(geo.subscores)) return 0;
    return geo.subscores.reduce(function (total, item) {
      return total + Number(item.max || 0);
    }, 0);
  }

  // ===== Period substitution: resolve {{...}} placeholders =====
  function resolvePeriodText(s) {
    if (typeof s !== 'string') return s;
    if (s.indexOf('{{') < 0) return s;
    if (!window.WEBINSIGHT.REPORT_DATA) return s;
    var p = window.WEBINSIGHT.REPORT_DATA.periods;
    var m = window.WEBINSIGHT.REPORT_DATA.meta;
    return s
      .replace(/\{\{CURRENT_START\}\}/g, p.current.start)
      .replace(/\{\{CURRENT_END\}\}/g, p.current.end)
      .replace(/\{\{PREVIOUS_START\}\}/g, p.previous.start)
      .replace(/\{\{PREVIOUS_END\}\}/g, p.previous.end)
      .replace(/\{\{TREND_START\}\}/g, p.trend.start)
      .replace(/\{\{TREND_END\}\}/g, p.trend.end)
      .replace(/\{\{MAX_DATE_GA4\}\}/g, m.maxDateGa4 || p.current.end)
      .replace(/\{\{UPDATE_DATE\}\}/g, m.updatedAt || '');
  }

  function resolvePeriodTextIso(s) {
    if (typeof s !== 'string') return s;
    if (s.indexOf('{{') < 0) return s;
    if (!window.WEBINSIGHT.REPORT_DATA) return s;
    var p = window.WEBINSIGHT.REPORT_DATA.periods;
    var m = window.WEBINSIGHT.REPORT_DATA.meta;
    var toIso = function (d) { return d ? d.replace(/\//g, '-') : ''; };
    return s
      .replace(/\{\{CURRENT_START\}\}/g, toIso(p.current.start))
      .replace(/\{\{CURRENT_END\}\}/g, toIso(p.current.end))
      .replace(/\{\{PREVIOUS_START\}\}/g, toIso(p.previous.start))
      .replace(/\{\{PREVIOUS_END\}\}/g, toIso(p.previous.end))
      .replace(/\{\{TREND_START\}\}/g, toIso(p.trend.start))
      .replace(/\{\{TREND_END\}\}/g, toIso(p.trend.end))
      .replace(/\{\{MAX_DATE_GA4\}\}/g, m.maxDateGa4 || toIso(p.current.end))
      .replace(/\{\{UPDATE_DATE\}\}/g, toIso(m.updatedAt || ''));
  }

  // ===== Header meta =====
  // Populates <span id="reportPeriod"> / <span id="reportUpdatedAt"> /
  // <span id="reportSite"> / <span id="reportSources"> / <span id="reportVersion">
  // — stable containers defined in index.html.
  function renderHeaderMeta() {
    if (!window.WEBINSIGHT.REPORT_DATA) return;
    var d = window.WEBINSIGHT.REPORT_DATA;
    var meta = d.meta;
    var p = d.periods;
    var periodEl = document.getElementById('reportPeriod');
    if (periodEl) periodEl.textContent = '報告期間：' + p.current.start + ' – ' + p.current.end;
    var updatedEl = document.getElementById('reportUpdatedAt');
    if (updatedEl) updatedEl.textContent = '資料更新：' + meta.updatedAt;
    var siteEl = document.getElementById('reportSite');
    if (siteEl) siteEl.textContent = '站台：' + meta.siteDomain;
    var sourcesEl = document.getElementById('reportSources');
    if (sourcesEl) sourcesEl.textContent = '資料源：' + meta.sourceCount + ' 張 BigQuery 報表';
    var versionEl = document.getElementById('reportVersion');
    if (versionEl) versionEl.textContent = meta.reportVersion;
  }

  // ===== GEO rendering =====
  // Calculates the overall score from subscores; never reads a stored
  // duplicate value. All visible score references (SVG text, aria-label,
  // ring progress, headline) MUST use calculateGeoScore().
  function renderGeo() {
    if (!window.WEBINSIGHT.REPORT_DATA) return;
    var geo = window.WEBINSIGHT.REPORT_DATA.geo;
    if (!geo) return;
    var score = calculateGeoScore(geo);
    var maxScore = calculateMaxScore(geo);
    if (maxScore !== geo.maximumScore) {
      console.warn('[report-renderer] GEO subscore max sum (' + maxScore + ') != geo.maximumScore (' + geo.maximumScore + ')');
    }
    // SVG ring — circumference = 2*pi*100 ≈ 628.32; filled = maxScore * score/maxScore
    var ringCircumference = 2 * Math.PI * 100;
    var filled = +(ringCircumference * (score / maxScore)).toFixed(2);
    var remaining = +(ringCircumference - filled).toFixed(2);
    // Update <svg class="geo-ring"> progress circle
    var ringCircle = document.querySelector('svg.geo-ring circle.geo-ring-progress');
    if (ringCircle) {
      ringCircle.setAttribute('stroke-dasharray', filled + ' ' + remaining);
    }
    // Update <text class="geo-score-number">
    var scoreText = document.querySelector('text.geo-score-number, .geo-headline-num');
    if (scoreText) scoreText.textContent = score;
    var aria = document.querySelector('svg.geo-ring, .geo-ring, [aria-label*="GEO"]');
    if (aria) aria.setAttribute('aria-label', 'GEO 綜合評分 ' + score + '/' + maxScore);
    // Headline (HTML)
    var headline = document.querySelector('.geo-headline');
    if (headline) {
      // Keep existing structure: headline has <span>/<span class="geo-headline-sub">
      headline.innerHTML = score + '<span class="geo-headline-sub">/' + maxScore + '</span>';
    }
    // Status text next to headline (e.g. "待加強" / "中等")
    var statusEl = document.querySelector('.geo-status, [data-geo-status]');
    if (statusEl && geo.status) statusEl.textContent = geo.status;
    // Sub-scores
    renderSubscores(geo);
    // Manager / technical audit
    renderManagerSummary(geo, score);
    renderTechnicalAudit(geo);
    // Audit date and URL
    var auditDateEl = document.querySelector('[data-geo-audit-date]');
    if (auditDateEl) auditDateEl.textContent = '[' + geo.auditDate + ']';
    var auditUrlEl = document.querySelector('[data-geo-audit-url]');
    if (auditUrlEl) auditUrlEl.textContent = geo.auditedUrl;
    // Validation: aria-label matches visible number
    if (aria && aria.getAttribute('aria-label')) {
      var m = aria.getAttribute('aria-label').match(/(\d+)\/(\d+)/);
      if (m && (parseInt(m[1], 10) !== score || parseInt(m[2], 10) !== maxScore)) {
        console.warn('[report-renderer] aria-label score mismatch');
      }
    }
  }

  function renderSubscores(geo) {
    if (!Array.isArray(geo.subscores)) return;
    var list = document.querySelector('[data-geo-subscores]');
    if (!list) return;
    var html = geo.subscores.map(function (s) {
      return '<div class="metric-sub"><span>' + esc(s.label) + ' </span><strong>' + esc(s.score) + '／' + esc(s.max) + '</strong></div>';
    }).join('');
    list.innerHTML = html;
  }

  function renderManagerSummary(geo, score) {
    var boss = document.querySelector('.geo-summary.boss, [data-geo-manager]');
    if (!boss || !geo.managerSummary) return;
    var intro = resolvePeriodText(geo.managerSummary.introduction || '').replace(/\{score\}/g, score);
    var findings = (geo.managerSummary.findings || []).map(function (f) {
      return '<strong style="display:inline-block; min-width:32px;">' + '①' + '</strong>' + esc(resolvePeriodText(f).replace(/\{score\}/g, score));
    });
    // Use ①②③ etc — derived from index, simple bullet
    var findingsHtml = findings.map(function (f, i) {
      var c = ['①','②','③','④','⑤','⑥'][i] || (i+1);
      return '<strong style="display:inline-block; min-width:32px;">' + c + '</strong>' + esc(resolvePeriodText(f.replace(/^[①②③④⑤⑥]\s*/, '')).replace(/\{score\}/g, score));
    });
    boss.innerHTML = intro + '<br><br>簡單說三件事：<br>' + findingsHtml.join('<br>');
  }

  function renderTechnicalAudit(geo) {
    var tech = document.querySelector('.geo-summary.tech, [data-geo-technical]');
    if (!tech || !geo.technicalAudit) return;
    var auditDate = esc(geo.auditDate);
    var auditedUrl = esc(geo.auditedUrl);
    function row(n, label, value, valueAfter) {
      var nStr = '<strong>' + esc(n) + '.</strong> ';
      var labelStr = label.indexOf('<code>') >= 0 ? label : esc(label);
      var valStr = value ? (labelStr === label ? esc(value) : value) : '';
      var after = valueAfter ? ' ' + valueAfter : '';
      return '<div>' + nStr + labelStr + valStr + after + '</div>';
    }
    var imp = (geo.technicalAudit.implemented || []).map(function (r) { return row(r.n, r.label, r.value, ''); }).join('');
    var warn = (geo.technicalAudit.warnings || []).map(function (r) { return row(r.n, r.label, '', r.valueAfter); }).join('');
    var miss = (geo.technicalAudit.missing || []).map(function (r) { return row(r.n, r.label, r.value, ''); }).join('');
    var html = '[' + auditDate + '] Crawl results: ' + auditedUrl + '<br>' +
      '<strong>✓ 已實作：</strong><br>' + imp + '<br>' +
      '<strong>△ 待觀察：</strong><br>' + warn + '<br>' +
      '<strong>✗ 待修補：</strong><br>' + miss;
    tech.innerHTML = html;
  }

  // ===== Resolve EVIDENCE_REPORTS_RAW → EVIDENCE_REPORTS =====
  function resolveEvidenceReports() {
    if (!window.WEBINSIGHT.EVIDENCE_REPORTS_RAW) return;
    if (!window.WEBINSIGHT.RESOLVE_EVIDENCE_PERIODS) return;
    var resolved = window.WEBINSIGHT.RESOLVE_EVIDENCE_PERIODS(window.WEBINSIGHT.EVIDENCE_REPORTS_RAW);
    window.WEBINSIGHT.EVIDENCE_REPORTS = resolved;
  }

  // ===== Public init =====
  window.WEBINSIGHT.RENDER_REPORT = function () {
    try {
      resolveEvidenceReports();
      renderHeaderMeta();
      renderGeo();
    } catch (e) {
      console.error('[report-renderer] render error:', e);
    }
  };

  // Auto-init when DOM ready
  function onReady() { window.WEBINSIGHT.RENDER_REPORT(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
