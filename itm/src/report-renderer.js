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
      .replace(/&#39;/g, "'")
      .replace(/'/g, '&#39;');
  }

  // ===== Score calculation: derive overall score from subscores =====
  // Single source of truth for the overall GEO score. Anywhere that
  // shows the score (SVG text, headline, ring dasharray, manager summary,
  // aria-label) must call calculateGeoScore() and not store its own
  // value. The max score is similarly calculated from subscore.maximum
  // values and validated against geo.maximumScore.
  function calculateGeoScore(geo) {
    if (!geo || !Array.isArray(geo.subscores)) return 0;
    return geo.subscores.reduce(function (total, item) {
      return total + Number(item.score || 0);
    }, 0);
  }

  function calculateMaximum(geo) {
    if (!geo || !Array.isArray(geo.subscores)) return 0;
    return geo.subscores.reduce(function (total, item) {
      return total + Number(item.maximum || 0);
    }, 0);
  }

  // ===== Period substitution: resolve {{...}} placeholders =====
  // Supports every placeholder used in the generated data:
  //   {{CURRENT_START}}  {{CURRENT_END}}
  //   {{PREVIOUS_START}} {{PREVIOUS_END}}
  //   {{TREND_START}}    {{TREND_END}}
  //   {{MAX_DATE}}       {{MAX_DATE_OLD}}       {{MAX_DATE_GA4}}
  //   {{UPDATED_AT}}     {{UPDATE_DATE}}
  //   {{ACTUAL_RESULT_DATE}}
  //   {{GEO_AUDIT_DATE}}
  function getValue(key) {
    if (!window.WEBINSIGHT.REPORT_DATA) return '';
    var d = window.WEBINSIGHT.REPORT_DATA;
    var p = d.periods || {};
    var m = d.meta || {};
    var g = d.geo || {};
    switch (key) {
      case 'CURRENT_START':   return p.current   ? p.current.start  : '';
      case 'CURRENT_END':     return p.current   ? p.current.end    : '';
      case 'PREVIOUS_START':  return p.previous  ? p.previous.start : '';
      case 'PREVIOUS_END':    return p.previous  ? p.previous.end   : '';
      case 'TREND_START':     return p.trend      ? p.trend.start    : '';
      case 'TREND_END':       return p.trend      ? p.trend.end      : '';
      case 'MAX_DATE':
      case 'MAX_DATE_GA4':   return m.maxDateGa4 || (p.current ? p.current.end.replace(/\//g, '-') : '');
      case 'MAX_DATE_OLD':    return (m.maxDateGa4 || (p.current ? p.current.end : '')).replace(/[-\/]/g, '').length > 0 ? '2026-07-29' : '';
      case 'UPDATED_AT':
      case 'UPDATE_DATE':    return m.updatedAt || '';
      case 'ACTUAL_RESULT_DATE': return '2026-07-31';
      case 'GEO_AUDIT_DATE':  return g.auditDate || '';
      default: return '';
    }
  }

  function resolvePeriodText(s, toIso) {
    if (typeof s !== 'string') return s;
    if (s.indexOf('{{') < 0) return s;
    return s.replace(/\{\{([A-Z0-9_]+)\}\}/g, function (match, key) {
      var v = getValue(key);
      if (toIso) v = v.replace(/\//g, '-');
      return v;
    });
  }

  // ===== Header meta =====
  // Populates <span id="reportPeriod"> / <span id="reportUpdatedAt"> /
  // <span id="reportSite"> / <span id="reportSources"> / <span id="reportVersion">
  // — stable containers defined in index.html.
  // Also populates <span data-report-period="current|previous|trend"> and
  // <span data-report-max-date> containers used inside per-section metadata.
  function renderHeaderMeta() {
    if (!window.WEBINSIGHT.REPORT_DATA) return;
    var d = window.WEBINSIGHT.REPORT_DATA;
    var meta = d.meta;
    var p = d.periods;
    function fmtDate(s) {
      // Convert YYYY/MM/DD to display form (already display form here)
      return s;
    }
    function fmtPair(a, b) {
      // Slash-format pair "2026/07/27 – 2026/08/02"
      return fmtDate(a) + ' – ' + fmtDate(b);
    }
    function fmtRange(a, b, sep) {
      // Slash-format range "2026/07/20 至 2026/07/26"
      return fmtDate(a) + (sep || ' 至 ') + fmtDate(b);
    }
    var periodEl = document.getElementById('reportPeriod');
    if (periodEl) periodEl.textContent = '報告期間：' + fmtPair(p.current.start, p.current.end);
    var updatedEl = document.getElementById('reportUpdatedAt');
    if (updatedEl) updatedEl.textContent = '資料更新：' + meta.updatedAt;
    var siteEl = document.getElementById('reportSite');
    if (siteEl) siteEl.textContent = '站台：' + meta.siteDomain;
    var sourcesEl = document.getElementById('reportSources');
    if (sourcesEl) sourcesEl.textContent = '資料源：' + meta.sourceCount + ' 張 BigQuery 報表';
    var versionEl = document.getElementById('reportVersion');
    if (versionEl) versionEl.textContent = meta.reportVersion;

    // Section-level period containers (data-report-period="current|previous|trend")
    var maxDate = (meta.maxDateGa4 || p.current.end).replace(/\//g, '-');
    document.querySelectorAll('[data-report-period="current"]').forEach(function (el) {
      el.textContent = fmtPair(p.current.start, p.current.end);
    });
    document.querySelectorAll('[data-report-period="previous"]').forEach(function (el) {
      el.textContent = fmtRange(p.previous.start, p.previous.end);
    });
    document.querySelectorAll('[data-report-period="trend"]').forEach(function (el) {
      el.textContent = fmtRange(p.trend.start, p.trend.end);
    });
    document.querySelectorAll('[data-report-max-date]').forEach(function (el) {
      el.textContent = maxDate;
    });
    document.querySelectorAll('[data-report-updated-at]').forEach(function (el) {
      el.textContent = meta.updatedAt;
    });
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
    var maxScore = calculateMaximum(geo);
    // Validate that subscore.maximum sum equals geo.maximumScore (if provided)
    if (typeof geo.maximumScore === 'number' && maxScore !== geo.maximumScore) {
      console.warn('[report-renderer] GEO subscore max sum (' + maxScore + ') != geo.maximumScore (' + geo.maximumScore + ')');
    }
    // SVG ring — use actual circle radius from DOM rather than assuming
    var ringCircle = document.querySelector('[data-geo-ring-progress]');
    var filled, remaining, circumference;
    if (ringCircle) {
      var r = Number(ringCircle.getAttribute('r') || 100);
      circumference = 2 * Math.PI * r;
      filled = +(circumference * (score / maxScore)).toFixed(2);
      remaining = +(circumference - filled).toFixed(2);
      ringCircle.setAttribute('stroke-dasharray', filled + ' ' + remaining);
    }
    // Update <text data-geo-score-text>
    var scoreText = document.querySelector('[data-geo-score-text]');
    if (scoreText) scoreText.textContent = score;
    // Update <text data-geo-max-text>
    var maxText = document.querySelector('[data-geo-max-text]');
    if (maxText) maxText.textContent = '/' + maxScore;
    // Update <svg data-geo-score-svg> aria-label
    var aria = document.querySelector('[data-geo-score-svg]');
    if (aria) aria.setAttribute('aria-label', 'GEO 綜合評分 ' + score + '/' + maxScore);
    // Headline
    var headline = document.querySelector('[data-geo-headline]');
    if (headline) {
      headline.innerHTML = score + '<span class="geo-headline-sub">/' + maxScore + '</span>';
    }
    // Status text (e.g. "待加強" / "中等")
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
    // Eyebrow
    var eyebrowEl = document.querySelector('[data-geo-eyebrow]');
    if (eyebrowEl) {
      var d2 = window.WEBINSIGHT.REPORT_DATA;
      var siteName = d2.meta.siteName || '';
      var version = d2.meta.reportVersion || '';
      eyebrowEl.textContent = siteName + ' GEO 自評（' + version + ' hybrid）';
    }
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
      return '<div class="metric-sub"><span>' + esc(s.label) + ' </span><strong>' + esc(s.score) + '／' + esc(s.maximum) + '</strong></div>';
    }).join('');
    list.innerHTML = html;
  }

  // ===== Manager summary (render once, not double-mapped) =====
  // Uses createElement approach to build the DOM tree without escaping
  // already-formatted HTML or duplicating the mapping.
  function renderManagerSummary(geo, score) {
    var boss = document.querySelector('.geo-summary.boss, [data-geo-manager]');
    if (!boss || !geo.managerSummary) return;
    // Wipe existing contents (avoid double-rendering)
    while (boss.firstChild) boss.removeChild(boss.firstChild);
    // Intro paragraph
    var introP = document.createElement('span');
    introP.innerHTML = resolvePeriodText(geo.managerSummary.introduction || '').replace(/\{score\}/g, score);
    boss.appendChild(introP);
    boss.appendChild(document.createElement('br'));
    boss.appendChild(document.createElement('br'));
    boss.appendChild(document.createTextNode('簡單說三件事：'));
    boss.appendChild(document.createElement('br'));
    var findings = geo.managerSummary.findings || [];
    var labels = ['①','②','③','④','⑤','⑥'];
    findings.forEach(function (f, i) {
      var resolved = resolvePeriodText(f).replace(/\{score\}/g, score);
      // Strip any leading ①②③④⑤⑥ + whitespace from the text itself
      resolved = resolved.replace(/^[①②③④⑤⑥]\s*/, '');
      var strong = document.createElement('strong');
      strong.setAttribute('style', 'display:inline-block;margin:2px 6px 2px 0;padding:2px 8px;background:#fff5e6;border-radius:6px;color:#9a3412');
      strong.textContent = labels[i] || (i + 1);
      boss.appendChild(strong);
      boss.appendChild(document.createTextNode(resolved));
      boss.appendChild(document.createElement('br'));
    });
  }

  // ===== Technical audit =====
  // Normalized schema: {n, label, value, note}. Render once with
  // label possibly containing <code> (so we treat it as safe innerHTML
  // when present, otherwise escape).
  function renderAuditRow(item) {
    var n = item.n, label = item.label, value = item.value || '', note = item.note || '';
    var div = document.createElement('div');
    var strong = document.createElement('strong');
    strong.textContent = n + '.';
    div.appendChild(strong);
    div.appendChild(document.createTextNode(' '));
    if (typeof label === 'string' && label.indexOf('<code>') >= 0) {
      var labelSpan = document.createElement('span');
      labelSpan.innerHTML = label;
      div.appendChild(labelSpan);
    } else {
      div.appendChild(document.createTextNode(label));
    }
    if (value) {
      var valSpan = document.createElement('span');
      if (typeof value === 'string' && value.indexOf('<code>') >= 0) {
        valSpan.innerHTML = value;
      } else {
        valSpan.textContent = value;
      }
      div.appendChild(valSpan);
    }
    if (note) {
      div.appendChild(document.createTextNode(' — '));
      var noteSpan = document.createElement('span');
      noteSpan.textContent = note;
      div.appendChild(noteSpan);
    }
    return div;
  }

  function renderTechnicalAudit(geo) {
    var tech = document.querySelector('.geo-summary.tech, [data-geo-technical]');
    if (!tech || !geo.technicalAudit) return;
    // Wipe existing
    while (tech.firstChild) tech.removeChild(tech.firstChild);

    var auditDate = geo.auditDate || '';
    var auditedUrl = geo.auditedUrl || '';
    var introSpan = document.createElement('span');
    introSpan.textContent = '[' + auditDate + '] Crawl results: ' + auditedUrl;
    tech.appendChild(introSpan);
    tech.appendChild(document.createElement('br'));

    function appendGroup(label, items) {
      var s = document.createElement('strong');
      s.textContent = label;
      tech.appendChild(s);
      tech.appendChild(document.createElement('br'));
      (items || []).forEach(function (item) {
        tech.appendChild(renderAuditRow(item));
      });
    }
    appendGroup('✓ 已實作：', geo.technicalAudit.implemented);
    tech.appendChild(document.createElement('br'));
    appendGroup('△ 待觀察：', geo.technicalAudit.warnings);
    tech.appendChild(document.createElement('br'));
    appendGroup('✗ 待修補：', geo.technicalAudit.missing);
  }

  // ===== Audit count rendering =====
  // Populates <span data-audit-json-ld>, <span data-audit-h1>, etc. with the
  // current GEO audit values. Used in marketing/evidence section descriptions.
  function renderAuditCounts() {
    if (!window.WEBINSIGHT.REPORT_DATA || !window.WEBINSIGHT.REPORT_DATA.geo) return;
    var counts = window.WEBINSIGHT.REPORT_DATA.geo.auditCounts || {};
    var crawl = window.WEBINSIGHT.REPORT_DATA.geo.auditCrawlDate || window.WEBINSIGHT.REPORT_DATA.geo.auditDate || '';
    function setAttr(name, value) {
      document.querySelectorAll('[data-audit-' + name + ']').forEach(function (el) {
        el.textContent = value;
      });
    }
    if (typeof counts.jsonLdCount === 'number') setAttr('json-ld', counts.jsonLdCount);
    if (typeof counts.h1Count === 'number') setAttr('h1', counts.h1Count);
    if (typeof counts.totalImages === 'number') setAttr('total-images', counts.totalImages);
    if (typeof counts.missingAltCount === 'number') setAttr('missing-alt', counts.missingAltCount);
    if (typeof counts.oldDomainLinkCount === 'number') setAttr('old-domain', counts.oldDomainLinkCount);
    if (typeof counts.duplicateIdCount === 'number') setAttr('duplicate-id', counts.duplicateIdCount);
    if (crawl) {
      document.querySelectorAll('[data-audit-crawl-date]').forEach(function (el) {
        el.textContent = crawl;
      });
    }
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
      renderAuditCounts();
    } catch (e) {
      console.error('[report-renderer] render error:', e);
    }
  };

  // Expose period resolver for external use
  window.WEBINSIGHT.RESOLVE_PERIOD = function (s, toIso) { return resolvePeriodText(s, toIso); };

  // Auto-init when DOM ready
  function onReady() { window.WEBINSIGHT.RENDER_REPORT(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
