/* ============================================================================
   TCU WebInsight v3 — shared report renderer
   Fetches /data.json, renders the entire dept report.
   No build step. No ESM. Plain JS for max compatibility.
   ============================================================================ */

(function () {
  'use strict';

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmtNum = n => (typeof n === 'number') ? n.toLocaleString('zh-TW') : (n ?? '-');
  const fmtPct = n => (typeof n === 'number') ? `${n.toFixed(1)}%` : (n ?? '-');
  const $ = sel => document.querySelector(sel);

  /* ---------- BOOTSTRAP ---------- */
  async function init() {
    let data;
    try {
      const res = await fetch('data.json?ts=' + Date.now());
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      data = await res.json();
    } catch (e) {
      document.getElementById('report-root').innerHTML = `
        <div class="section">
          <div class="section-body" style="text-align:center;padding:60px 20px;">
            <h2 style="color:var(--bad-fg);margin-bottom:12px;">⚠ 載入失敗</h2>
            <p style="color:var(--muted);">無法讀取 <code>data.json</code>。<br>
            請確認檔案存在於 ${location.pathname.replace(/index\.html$/, '')}data.json<br>
            <small>${esc(e.message)}</small></p>
          </div>
        </div>`;
      console.error('data.json fetch failed:', e);
      return;
    }

    renderHeader(data);
    renderKpis(data);
    renderTrends(data);
    renderTopKeywords(data);
    renderTopPages(data);
    renderAudience(data);
    renderIssues(data);
    renderGeo(data);
    renderEvidence(data);
    renderStalePages(data);
    renderFooter(data);

    // Collapse all expert sections by default except #quick-view
    document.querySelectorAll('section.section').forEach(sec => {
      if (sec.id !== 'quick-view' && sec.id !== 'top-actions') {
        sec.classList.add('collapsed');
      }
    });
    // Bind toggle
    document.querySelectorAll('.section-header').forEach(h => {
      h.addEventListener('click', () => h.parentElement.classList.toggle('collapsed'));
    });
  }

  /* ---------- HEADER ---------- */
  function renderHeader(d) {
    $('#site-name').textContent = d.meta.siteName;
    $('#site-domain').textContent = d.meta.siteDomain;
    $('#report-period').textContent = `${d.periods.current.start} – ${d.periods.current.end}`;
    $('#report-updated').textContent = d.meta.updatedAt;
    $('#report-version').textContent = `v${d.meta.reportVersion}`;
    document.title = `${d.meta.siteName}｜TCU 網站分析報告 v${d.meta.reportVersion}`;
  }

  /* ---------- KPI CARDS ---------- */
  function renderKpis(d) {
    const k = d.kpis;
    const html = `
      <div class="kpi-card">
        <div class="label">${esc(k.users.label)}</div>
        <div class="value">${fmtNum(k.users.value)}</div>
        <div class="trend ${k.users.trend_pct > 0 ? 'up' : k.users.trend_pct < 0 ? 'down' : 'flat'}">
          <span class="arrow">${k.users.trend_pct > 0 ? '↑' : k.users.trend_pct < 0 ? '↓' : '–'}</span>
          ${k.users.trend_pct > 0 ? '+' : ''}${k.users.trend_pct.toFixed(1)}% 較前週
        </div>
        <div class="vs-avg">${esc(k.users.avg)}</div>
        <div class="source">${esc(k.users.src)}</div>
      </div>
      <div class="kpi-card">
        <div class="label">${esc(k.sessions.label)}</div>
        <div class="value">${fmtNum(k.sessions.value)}</div>
        <div class="trend ${k.sessions.trend_pct > 0 ? 'up' : k.sessions.trend_pct < 0 ? 'down' : 'flat'}">
          <span class="arrow">${k.sessions.trend_pct > 0 ? '↑' : k.sessions.trend_pct < 0 ? '↓' : '–'}</span>
          ${k.sessions.trend_pct > 0 ? '+' : ''}${k.sessions.trend_pct.toFixed(1)}% 較前週
        </div>
        <div class="vs-avg">${esc(k.sessions.avg)}</div>
        <div class="source">${esc(k.sessions.src)}</div>
      </div>
      <div class="kpi-card">
        <div class="label">${esc(k.gsc.label)}</div>
        <div class="value">${fmtNum(k.gsc.value)}</div>
        <div class="trend ${k.gsc.trend_pct > 0 ? 'up' : k.gsc.trend_pct < 0 ? 'down' : 'flat'}">
          <span class="arrow">${k.gsc.trend_pct > 0 ? '↑' : k.gsc.trend_pct < 0 ? '↓' : '–'}</span>
          ${k.gsc.trend_pct > 0 ? '+' : ''}${k.gsc.trend_pct.toFixed(1)}% 較前週
        </div>
        <div class="vs-avg">${esc(k.gsc.avg)}</div>
        <div class="source">${esc(k.gsc.src)}</div>
      </div>
      <div class="kpi-card">
        <div class="label">${esc(k.ctr.label)}</div>
        <div class="value">${esc(k.ctr.value)}</div>
        <div class="trend ${k.ctr.trend_pct > 0 ? 'up' : k.ctr.trend_pct < 0 ? 'down' : 'flat'}">
          <span class="arrow">${k.ctr.trend_pct > 0 ? '↑' : k.ctr.trend_pct < 0 ? '↓' : '–'}</span>
          ${k.ctr.trend_pct > 0 ? '+' : ''}${k.ctr.trend_pct.toFixed(2)}pt 較前週
        </div>
        <div class="vs-avg">${esc(k.ctr.avg)}</div>
        <div class="source">${esc(k.ctr.src)}</div>
      </div>
    `;
    $('#kpi-grid').innerHTML = html;
  }

  /* ---------- TRENDS (charts) ---------- */
  let chartRefs = [];
  function renderTrends(d) {
    if (!window.Chart) {
      console.warn('Chart.js not loaded; showing fallback tables');
      renderTrendTableFallback('trend-ga4-tbl', d.trendsGA4);
      renderTrendTableFallback('trend-gsc-tbl', d.trendsGSC);
      return;
    }
    const labels = d.trendsGA4.map(r => r.week);
    const sessColor = getCss('--blue');
    const pageColor = getCss('--teal');
    const impColor = getCss('--amber');
    const clkColor = getCss('--green');

    chartRefs.push(new Chart($('#chart-ga4'), {
      type: 'line',
      data: {
        labels,
        datasets: [
          { label: '工作階段', data: d.trendsGA4.map(r => r.sessions), borderColor: sessColor, backgroundColor: sessColor + '20', tension: 0.3 },
          { label: '瀏覽量', data: d.trendsGA4.map(r => r.pageviews), borderColor: pageColor, backgroundColor: pageColor + '20', tension: 0.3, yAxisID: 'y1' },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: '工作階段', font: { size: 10 } } },
          y1: { beginAtZero: true, position: 'right', title: { display: true, text: '瀏覽量', font: { size: 10 } }, grid: { drawOnChartArea: false } }
        }
      }
    }));

    chartRefs.push(new Chart($('#chart-gsc'), {
      type: 'line',
      data: {
        labels,
        datasets: [
          { label: '曝光', data: d.trendsGSC.map(r => r.impressions), borderColor: impColor, backgroundColor: impColor + '20', tension: 0.3 },
          { label: '點擊', data: d.trendsGSC.map(r => r.clicks), borderColor: clkColor, backgroundColor: clkColor + '20', tension: 0.3, yAxisID: 'y1' },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: '曝光', font: { size: 10 } } },
          y1: { beginAtZero: true, position: 'right', title: { display: true, text: '點擊', font: { size: 10 } }, grid: { drawOnChartArea: false } }
        }
      }
    }));
  }

  function renderTrendTableFallback(tblId, rows) {
    const el = document.getElementById(tblId);
    if (!el) return;
    el.innerHTML = `
      <div class="tbl-wrap" style="margin-top:8px">
        <table class="data">
          <thead><tr><th>週</th><th class="num">工作階段</th><th class="num">瀏覽量</th><th class="num">曝光</th><th class="num">點擊</th></tr></thead>
          <tbody>${rows.map(r => `<tr><td>${esc(r.week)}</td><td class="num">${fmtNum(r.sessions ?? '-')}</td><td class="num">${fmtNum(r.pageviews ?? '-')}</td><td class="num">${fmtNum(r.impressions ?? '-')}</td><td class="num">${fmtNum(r.clicks ?? '-')}</td></tr>`).join('')}</tbody>
        </table>
      </div>`;
  }

  /* ---------- TOP KEYWORDS ---------- */
  function renderTopKeywords(d) {
    const rows = d.topKeywords || [];
    $('#kw-count').textContent = `${rows.length} 個關鍵字`;
    $('#kw-tbody').innerHTML = rows.map((r, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${esc(r.kw)}</td>
        <td>${r.brand ? '<span class="pill" style="background:var(--ok-bg);color:var(--ok-fg);padding:2px 8px;border-radius:999px;font-size:11px;font-weight:600;">品牌</span>' : '<span class="pill" style="background:var(--info-bg);color:var(--info-fg);padding:2px 8px;border-radius:999px;font-size:11px;font-weight:600;">非品牌</span>'}</td>
        <td class="num">${fmtNum(r.impressions)}</td>
        <td class="num">${fmtNum(r.clicks)}</td>
        <td class="num">${fmtPct(r.ctr)}</td>
        <td class="num">${(r.pos ?? 0).toFixed(1)}</td>
        <td class="url"><a href="${esc(r.landing)}" target="_blank" rel="noopener">${esc(r.landing)}</a></td>
      </tr>`).join('');
  }

  /* ---------- TOP PAGES ---------- */
  function renderTopPages(d) {
    const rows = d.topPages || [];
    $('#pg-count').textContent = `${rows.length} 個頁面`;
    $('#pg-tbody').innerHTML = rows.map((r, i) => `
      <tr>
        <td>${i + 1}</td>
        <td class="url"><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.url)}</a></td>
        <td class="num">${fmtNum(r.impressions)}</td>
        <td class="num">${fmtNum(r.clicks)}</td>
        <td class="num">${fmtPct(r.ctr)}</td>
        <td class="num">${(r.pos ?? 0).toFixed(1)}</td>
        <td class="num">${fmtNum(r.users)}</td>
      </tr>`).join('');
  }

  /* ---------- AUDIENCE ---------- */
  function renderAudience(d) {
    const a = d.audience;
    const maxBar = (arr, key) => Math.max(...arr.map(r => r[key]), 1);
    const renderBar = (rows, key, label) => {
      const max = maxBar(rows, key);
      return rows.map(r => `
        <div class="bar-row">
          <div class="name">${esc(r.name)}${r.medium ? ` <span style="color:var(--muted);font-size:11px;">(${esc(r.medium)})</span>` : ''}</div>
          <div class="bar"><span style="width:${(r[key] / max * 100).toFixed(1)}%"></span></div>
          <div class="val">${fmtNum(r[key])}｜${(r.share ?? 0).toFixed(1)}%</div>
        </div>`).join('');
    };
    $('#bar-country').innerHTML = renderBar(a.country, 'sessions', 'country');
    $('#bar-device').innerHTML = renderBar(a.device, 'sessions', 'device');
    $('#bar-source').innerHTML = renderBar(a.source, 'sessions', 'source');
  }

  /* ---------- ISSUES (top 3 actions) ---------- */
  function renderIssues(d) {
    const items = d.topIssues || [];
    if (!items.length) {
      $('#issues-list').innerHTML = `<p style="color:var(--muted);padding:8px 0;">✓ 目前沒有待辦的高優先級問題。</p>`;
      return;
    }
    $('#issues-list').innerHTML = items.map(it => `
      <div class="issue-item">
        <span class="sev ${it.severity === 'high' ? 'high' : it.severity === 'medium' ? 'med' : 'low'}">${it.severity === 'high' ? '高' : it.severity === 'medium' ? '中' : '低'}</span>
        <div>
          <div class="title">${esc(it.title)}</div>
          <div class="desc">${esc(it.desc)}</div>
        </div>
        <div class="who"><strong>${esc(it.owner)}</strong><br>期限 ${esc(it.due)}</div>
      </div>`).join('');
  }

  /* ---------- GEO ---------- */
  function renderGeo(d) {
    const g = d.geo;
    if (!g) {
      $('#geo-section').style.display = 'none';
      return;
    }
    const score = g.subscores.reduce((a, s) => a + s.score, 0);
    const max = g.subscores.reduce((a, s) => a + s.maximum, 0);
    const pct = score / max;

    // SVG ring
    const R = 90, C = 2 * Math.PI * R;
    $('#geo-ring').innerHTML = `
      <svg class="geo-ring" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="${R}" fill="none" stroke="#e2e8f0" stroke-width="14"/>
        <circle cx="100" cy="100" r="${R}" fill="none" stroke="var(--teal)" stroke-width="14"
          stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}"
          transform="rotate(-90 100 100)" stroke-linecap="round"/>
        <text x="100" y="96" text-anchor="middle" font-size="44" font-weight="900" fill="#15334a">${score}</text>
        <text x="100" y="118" text-anchor="middle" font-size="14" fill="#647581">/ ${max}</text>
        <text x="100" y="146" text-anchor="middle" font-size="12" font-weight="700" fill="#1d7d78">GEO 綜合評分</text>
      </svg>`;
    $('#geo-status').innerHTML = `<span style="background:${pct >= 0.7 ? 'var(--ok-bg)' : pct >= 0.5 ? 'var(--warn-bg)' : 'var(--bad-bg)'};color:${pct >= 0.7 ? 'var(--ok-fg)' : pct >= 0.5 ? 'var(--warn-fg)' : 'var(--bad-fg)'};padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;">${esc(g.status)}</span>`;
    $('#geo-summary').textContent = g.managerSummary?.introduction || '';
    $('#geo-subscores').innerHTML = g.subscores.map(s => `
      <div class="item">
        <div class="lab">${esc(s.label)}</div>
        <div class="val">${s.score}/${s.maximum}</div>
      </div>`).join('');
    if (g.managerSummary?.findings?.length) {
      $('#geo-findings').innerHTML = `<strong>重點發現：</strong><ul>${g.managerSummary.findings.map(f => `<li>${esc(f)}</li>`).join('')}</ul>`;
      $('#geo-findings').style.display = 'block';
    } else {
      $('#geo-findings').style.display = 'none';
    }
    $('#geo-audit-meta').textContent = `檢核日期：${g.auditDate} · ${g.auditedUrl}`;
  }

  /* ---------- EVIDENCE GRID (20 reports) ---------- */
  function renderEvidence(d) {
    const ev = d.evidence || [];
    const groups = {
      ga4: [], gsc: [], geo: [], behavior: [], quality: []
    };
    ev.forEach(r => {
      const id = r.id || '';
      if (id.startsWith('EV-GA4')) groups.ga4.push(r);
      else if (id.startsWith('EV-GSC')) groups.gsc.push(r);
      else if (id.startsWith('EV-GEO')) groups.geo.push(r);
      else if (id.startsWith('EV-SEARCH') || id.startsWith('EV-AI')) groups.behavior.push(r);
      else groups.quality.push(r);
    });
    const html = (rows) => rows.map(r => {
      const st = r.status || '正常';
      const stClass = st.includes('待') || st.includes('修') || st.includes('需') ? 'warn' : st.includes('注意') ? 'bad' : 'ok';
      return `
        <div class="ev-card">
          <div class="ev-id">${esc(r.id)}</div>
          <div class="ev-title">${esc(r.title)}</div>
          <div class="ev-rows">${esc(r.rows ?? '-')} 列 · ${esc(r.table ?? '')} · 查詢代碼 ${esc(r.code ?? '-')}</div>
          <span class="ev-status ${stClass}">${esc(st)}</span>
        </div>`;
    }).join('');
    $('#ev-ga4').innerHTML = html(groups.ga4);
    $('#ev-gsc').innerHTML = html(groups.gsc);
    $('#ev-geo').innerHTML = html(groups.geo);
    $('#ev-behavior').innerHTML = html(groups.behavior);
    $('#ev-quality').innerHTML = html(groups.quality);
    $('#ev-counts').textContent = `${ev.length} 張證據報表`;
  }

  /* ---------- STALE PAGES ---------- */
  function renderStalePages(d) {
    const rows = d.stalePages || [];
    if (!rows.length) {
      $('#stale-section').style.display = 'none';
      return;
    }
    $('#stale-tbody').innerHTML = rows.map((r, i) => `
      <tr>
        <td>${i + 1}</td>
        <td class="url"><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.url)}</a></td>
        <td>${r.year ? `${r.year} 學年度` : '-'}</td>
        <td class="num">${fmtNum(r.impressions ?? 0)}</td>
        <td class="num">${fmtNum(r.clicks ?? 0)}</td>
        <td class="num">${r.pos ? r.pos.toFixed(1) : '-'}</td>
        <td>${esc(r.note || '')}</td>
      </tr>`).join('');
    $('#stale-count').textContent = `${rows.length} 個過期頁面`;
  }

  /* ---------- FOOTER ---------- */
  function renderFooter(d) {
    const cutoff = [d.meta.maxDateGa4, d.meta.maxDateGsc].filter(Boolean).join(' / ');
    $('#footer-meta').textContent = `報告版本 v${d.meta.reportVersion} · 更新時間 ${d.meta.updatedAt} · 資料截止 ${cutoff || '-'} · 來源：Google BigQuery 3 張資料表`;
  }

  /* ---------- helpers ---------- */
  function getCss(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#1d7d78';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
