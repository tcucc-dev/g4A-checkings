// ===== Entry: Vite ES module =====
// These imports trigger side-effect init scripts loaded sequentially after DOM ready.
// Order matters: data → validation → renderers → app (so renderers can validate + use REPORT_DATA).
import './generated-report-data.js';   // window.WEBINSIGHT.REPORT_DATA (single source of truth)
import './generated-evidence-data.js'; // window.WEBINSIGHT.EVIDENCE_REPORTS_RAW (with date placeholders)
import './report-validation.js';       // validates REPORT_DATA + EVIDENCE_REPORTS_RAW
import './report-renderer.js';         // renders header dates + GEO (calculated from sub-scores)
import './evidence-renderer.js';       // EVIDENCE_REPORTS renderers (filters, sort, paginate, CSV, charts)
import './data.js';                    // legacy compat — sets window.WEBINSIGHT.DATA = REPORT_DATA.metrics
import './evidence.js';                // legacy compat — sets window.WEBINSIGHT.EVIDENCE_REPORTS = resolved
import './glossary.js';                // glossary+tooltip
import '/itm/geo-toggle.js';              // 主管/技術人員 pill
import './app.js';                     // KPI/decisions/etc renderer
// main.js itself (below) handles Three.js BG + glossary per-v49 logic.
// Three.js + glossary logic from v49 already lives in main.js body (this file).

// ===== main.js =====
// TCU WebInsight v49 — Vite + Three.js entry point
//   1. Three.js floating particles background
//   2. Glossary tooltip system (1-second hover delay)
//   3. Page lifecycle: load → animate → resize

import * as THREE from 'three';

// ============================================================
// 1. THREE.JS BACKGROUND — floating subtle particles
// ============================================================
function initThreeBackground() {
  // Find the canvas mount point (created in index.html)
  const mount = document.getElementById('three-bg');
  if (!mount) return;

  // Guard: skip on browsers without WebGL (silent fallback instead of broken UI)
  const hasWebGL = (() => {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
    } catch (_) { return false; }
  })();
  if (!hasWebGL) {
    console.warn('[three-bg] WebGL unavailable — skipping particle background');
    mount.style.background = 'radial-gradient(ellipse at top, rgba(29,125,120,0.06), transparent 60%)';
    return;
  }

  try {
    // Scene + camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Particles: 250 dots floating slowly
    const COUNT = 250;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    const palette = [
      new THREE.Color('#1d7d78'),  // teal
      new THREE.Color('#2563eb'),  // blue
      new THREE.Color('#647581'),  // muted gray
      new THREE.Color('#b45309'),  // amber
    ];

    for (let i = 0; i < COUNT; i++) {
      // Spread across a wide area behind the report
      positions[i * 3]     = (Math.random() - 0.5) * 100;  // x: -50..+50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;   // y: -30..+30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;   // z: -20..+20

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Soft circular sprite for each particle
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = spriteCanvas.height = 64;
    const ctx = spriteCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.6)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(spriteCanvas);

    const material = new THREE.PointsMaterial({
      size: 1.2,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Renderer — try WebGL2 first, then WebGL1 fallback
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch (_) {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
      });
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);  // transparent
    // Ensure canvas fills the mount (covers full viewport)
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    mount.appendChild(renderer.domElement);

    // Mouse tracking (for parallax) — register BEFORE animate loop reads it
    window.__mx = 0;
    window.addEventListener('mousemove', (e) => {
      window.__mx = (e.clientX / window.innerWidth - 0.5) * 2;
    });

    // Animate
    const clock = new THREE.Clock();
    let running = true;
    function animate() {
      if (!running) return;
      const t = clock.getElapsedTime();
      points.rotation.y = t * 0.03;
      points.rotation.x = Math.sin(t * 0.2) * 0.05;

      // Subtle mouse parallax
      if (window.__mx !== undefined) {
        points.rotation.y += window.__mx * 0.0008;
      }

      try {
        renderer.render(scene, camera);
      } catch (e) {
        running = false;
        console.warn('[three-bg] render error — stopped:', e);
        return;
      }
      requestAnimationFrame(animate);
    }
    animate();

    // Resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Expose for debugging
    window.__three = { scene, camera, renderer, points };
    console.log('[three-bg] initialized', COUNT, 'particles');
  } catch (e) {
    console.error('[three-bg] init failed:', e);
    mount.style.background = 'radial-gradient(ellipse at top, rgba(29,125,120,0.06), transparent 60%)';
  }
}

// ============================================================
// 2. GLOSSARY TOOLTIP — 1-second hover delay
// ============================================================
const GLOSSARY = {
  'GEO': '讓生成式 AI 更容易理解、摘要與引用網站內容的優化方法。',
  'GEO 自評': '本報表依 5 項 KPI（主題、招生問答、證據、結構、技術）對 itm.tcu.edu.tw 原始碼評分；非 Google 官方分數。',
  'JSON-LD': '以 JSON 格式標記結構化資料的標準；搜尋引擎靠它建立 entity graph。',
  'canonical': '告訴搜尋引擎頁面正式網址，避免重複頁面混淆。',
  'hreflang': '標記頁面語系／地區變體，避免多語系被當重複。',
  'Open Graph': '網站分享到社群平台時使用的標題、說明與圖片（og:title/og:description/og:image）。',
  'YouTube facade': '先用靜圖代替 iframe，點擊後才載入 player，省頻寬與 LCP。',
  'LCP': 'Largest Contentful Paint，行動版目標 < 2.5s。',
  '轉換追蹤': '記錄電話、Email、表單、招生按鈕等重要行動。',
  '過期': '頁面內容的學年度或年份標記早於 cutoff（本期為 2022 AD），仍出現在 GSC Top pages 但已不具時效性。',
  'Wayback Machine': 'archive.org 提供的網頁歷史快照資料庫，可比對 HTML 在不同時間點的差異。',
  'P0': 'P0 = 本週必做；P1 = 1 個月內；P2 = 1 季內；P3 = 例行維護。'
};

function initGlossaryTooltips() {
  const TERMS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
  const ESC = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const PATTERN = new RegExp('(' + TERMS.map(ESC).join('|') + ')(?![^<]*>)', 'g');

  function wrapTerms(root) {
    const SKIP = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'TEXTAREA']);
    function isInsideSkip(el) {
      while (el && el !== root) {
        if (SKIP.has(el.tagName)) return true;
        if (el.classList && el.classList.contains('gloss')) return true;
        el = el.parentNode;
      }
      return false;
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (isInsideSkip(n.parentNode)) return NodeFilter.FILTER_REJECT;
        if (!PATTERN.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        PATTERN.lastIndex = 0;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const targets = [];
    while (walker.nextNode()) targets.push(walker.currentNode);
    targets.forEach(t => {
      const s = t.nodeValue, frag = document.createDocumentFragment();
      let last = 0;
      PATTERN.lastIndex = 0;
      let m;
      while ((m = PATTERN.exec(s))) {
        frag.appendChild(document.createTextNode(s.slice(last, m.index)));
        const sp = document.createElement('span');
        sp.className = 'gloss';
        sp.setAttribute('data-term', m[1]);
        sp.textContent = m[1];
        frag.appendChild(sp);
        last = m.index + m[1].length;
      }
      if (last > 0) {
        frag.appendChild(document.createTextNode(s.slice(last)));
        t.parentNode.replaceChild(frag, t);
      }
    });
  }

  function positionTip(tip, host) {
    const r = host.getBoundingClientRect();
    const sy = window.scrollY || window.pageYOffset;
    const sx = window.scrollX || window.pageXOffset;
    tip.style.left = Math.min(window.innerWidth - 320, Math.max(8, r.left + sx)) + 'px';
    let top = r.top + sy - tip.offsetHeight - 12;
    if (top < sy + 8) {
      top = r.bottom + sy + 12;
      tip.classList.add('below');
    } else {
      tip.classList.remove('below');
    }
    tip.style.top = top + 'px';
  }

  let tip = null, active = null, timer = null;
  function show(host) {
    const def = GLOSSARY[host.getAttribute('data-term')];
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'gloss-tip';
      document.body.appendChild(tip);
    }
    tip.innerHTML = '<strong>' + host.getAttribute('data-term') + '</strong>' + def;
    tip.style.display = 'block';
    requestAnimationFrame(() => positionTip(tip, host));
    setTimeout(() => tip && tip.classList.add('show'), 10);
  }
  function hide() {
    if (timer) { clearTimeout(timer); timer = null; }
    if (tip) {
      tip.classList.remove('show');
      setTimeout(() => { if (tip) tip.style.display = 'none'; }, 200);
    }
  }
  document.addEventListener('mouseover', e => {
    const h = e.target.closest && e.target.closest('.gloss');
    if (!h || h === active) return;
    if (timer) clearTimeout(timer);
    active = h;
    timer = setTimeout(() => show(h), 1000);
  });
  document.addEventListener('mouseout', e => {
    const h = e.target.closest && e.target.closest('.gloss');
    if (h && h === active) {
      setTimeout(() => { if (active === h) hide(); }, 100);
    }
  });
  document.addEventListener('click', e => {
    const h = e.target.closest && e.target.closest('.gloss');
    if (h) {
      if (timer) clearTimeout(timer);
      show(h);
      setTimeout(hide, 4000);
    }
  });
  window.addEventListener('scroll', hide, { passive: true });
  window.addEventListener('resize', hide);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => wrapTerms(document.body));
  } else {
    wrapTerms(document.body);
  }
}

// ============================================================
// 3. PRINT BUTTON HOOK (optional)
// ============================================================
function initPrintButton() {
  const btn = document.querySelector('.print');
  if (!btn) return;
  btn.addEventListener('click', () => {
    setTimeout(() => window.print(), 100);
  });
}

// ============================================================
// BOOT
// ============================================================
// Logical initialization order (prompt 23 §12):
//   1. Load generated report data   (import order in main.js head)
//   2. Load generated evidence data (import order)
//   3. Backward-compatible aliases  (data.js / evidence.js run on import)
//   4. Run report data validation   (VALIDATE_REPORT_DATA)
//   5. Stop on critical failure
//   6. Render report metadata + GEO (RENDER_REPORT — runs on DOMContentLoaded)
//   7. Initialize evidence content  (evidence-renderer.js evInit)
//   8. Run DOM integration validation
//   9. Init charts, toggles, glossary, Three.js, etc.
function boot() {
  // ----- Step 4+5: Validate report data -----
  var validationResult = null;
  if (window.WEBINSIGHT && typeof window.WEBINSIGHT.VALIDATE_REPORT_DATA === 'function') {
    validationResult = window.WEBINSIGHT.VALIDATE_REPORT_DATA();
  }
  if (!validationResult || !validationResult.ok) {
    console.error('[boot] Validation failed — report rendering stopped.');
    if (validationResult && validationResult.errors) {
      console.error('[boot] Errors:', validationResult.errors);
    }
    // Non-destructive: keep Three.js + glossary (page chrome), show banner.
    initThreeBackground();
    initGlossaryTooltips();
    initPrintButton();
    showValidationError((validationResult && validationResult.errors) || ['Unknown validation failure']);
    return;
  }

  // ----- Step 6: Render report metadata + GEO -----
  // report-renderer.js self-initializes on DOMContentLoaded; kick it
  // explicitly here in case the DOM is already ready (Vite async modules).
  if (typeof window.WEBINSIGHT.RENDER_REPORT === 'function') {
    try { window.WEBINSIGHT.RENDER_REPORT(); }
    catch (e) { console.error('[boot] RENDER_REPORT failed:', e); }
  } else if (document.readyState !== 'loading') {
    // DOM ready but renderer not yet attached — wait one tick
    setTimeout(function () {
      if (typeof window.WEBINSIGHT.RENDER_REPORT === 'function') {
        try { window.WEBINSIGHT.RENDER_REPORT(); } catch (e) {}
      }
    }, 0);
  }

  // ----- Step 7: Initialize evidence content -----
  if (typeof window.evInit === 'function') {
    try { window.evInit(); }
    catch (e) { console.error('[boot] evInit failed:', e); }
  }

  // ----- Step 8: DOM integration validation -----
  var domOK = validateDOMIntegration();
  if (!domOK) {
    console.error('[boot] DOM integration validation failed — some containers missing.');
  }

  // ----- Step 9: Init charts, toggles, glossary, Three.js, etc. -----
  initThreeBackground();
  initGlossaryTooltips();
  initPrintButton();

  // app.js calls init() and renderReports() itself with its own deferral.
  // geo-toggle.js self-initializes. Glossary already wired above.

  console.log('[TCU WebInsight v49] ready — three.js + glossary + renderers');
}

// Verify required DOM containers exist (prompt 23 §12 step 8).
// Returns true if everything required is present; false otherwise.
function validateDOMIntegration() {
  if (typeof document === 'undefined') return true;
  var required = [
    'reportPeriod',
    'reportUpdatedAt',
    'reportSite',
    'reportSources',
    '[data-geo-score-svg]',
    '[data-geo-score-text]',
    '[data-geo-max-text]',
    '[data-geo-ring-progress]',
    '[data-geo-headline]',
    '[data-geo-subscores]',
    '[data-geo-manager]',
    '[data-geo-technical]',
    '[data-geo-eyebrow]',
    '[data-geo-audit-date]',
    'evidenceIndex',
    'evidenceReports',
    'kpis'
  ];
  var missing = [];
  required.forEach(function (sel) {
    var el;
    if (sel.charAt(0) === '[') {
      el = document.querySelector(sel);
    } else {
      el = document.getElementById(sel);
    }
    if (!el) missing.push(sel);
  });
  if (missing.length > 0) {
    console.error('[boot] DOM missing containers:', missing);
    return false;
  }
  return true;
}

// Show small non-destructive error message in the report area (prompt 22 §12)
function showValidationError(errors) {
  try {
    var main = document.querySelector('main') || document.body;
    var banner = document.createElement('div');
    banner.setAttribute('role', 'alert');
    banner.style.cssText = 'background:#fef2f2;border:2px solid #b91c1c;color:#7f1d1d;padding:16px 20px;margin:20px;border-radius:8px;font-size:14px;';
    var h = document.createElement('h3');
    h.textContent = '⚠ 報告初始化已停止';
    h.style.cssText = 'margin:0 0 8px 0;color:#7f1d1d;font-size:16px;';
    banner.appendChild(h);
    var p = document.createElement('p');
    p.textContent = '資料驗證失敗，請檢查瀏覽器 Console：';
    p.style.cssText = 'margin:4px 0;';
    banner.appendChild(p);
    var ul = document.createElement('ul');
    ul.style.cssText = 'margin:8px 0 0 16px;padding:0;';
    errors.slice(0, 10).forEach(function (err) {
      var li = document.createElement('li');
      li.textContent = err;
      li.style.cssText = 'margin:2px 0;font-family:monospace;font-size:12px;';
      ul.appendChild(li);
    });
    banner.appendChild(ul);
    main.insertBefore(banner, main.firstChild);
  } catch (e) {
    console.error('[boot] Could not show validation banner:', e);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
