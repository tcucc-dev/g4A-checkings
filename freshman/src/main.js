// ===== Entry: Vite ES module =====
// These imports trigger side-effect init scripts loaded sequentially after DOM ready.
import './data.js';          // sets window.WEBINSIGHT.DATA
import './evidence.js';      // EVIDENCE_REPORTS + helpers
import './glossary.js';      // glossary+tooltip
import './geo-toggle.js';    // 主管/技術人員 pill
import './app.js';           // KPI/decisions/etc renderer
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

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);  // transparent
  mount.appendChild(renderer.domElement);

  // Animate
  const clock = new THREE.Clock();
  function animate() {
    const t = clock.getElapsedTime();
    points.rotation.y = t * 0.03;
    points.rotation.x = Math.sin(t * 0.2) * 0.05;

    // Subtle mouse parallax
    if (window.__mx !== undefined) {
      points.rotation.y += window.__mx * 0.0008;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  // Mouse tracking (for parallax)
  window.addEventListener('mousemove', (e) => {
    window.__mx = (e.clientX / window.innerWidth - 0.5) * 2;
  });

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Expose for debugging
  window.__three = { scene, camera, renderer, points };
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
function boot() {
  initThreeBackground();
  initGlossaryTooltips();
  initPrintButton();
  // v56+: kick the report renderer after data.js has populated window.WEBINSIGHT.DATA
  // app.js calls init() itself once window.WEBINSIGHT.DATA is set and DOM is ready (Vite ESM)
  console.log('[TCU WebInsight v49] ready — Three.js + glossary');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
