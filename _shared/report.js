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

  /* ---------- SUPABASE CONFIG ----------
     Populated with live project values (anon key is safe to ship in browser).
     RLS only allows SELECT for anon. */
  const SUPABASE_CONFIG = {
    url: 'https://hcjhsrpitttpdudhdxnx.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjamhzcnBpdHR0cGR1ZGhkeG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MTE1NDMsImV4cCI6MjEwMTk4NzU0M30.3xH9ZA5xu2FKOWfoluTIojhxNm0FVesihSJPjg7FlDY',
  };
  const SUPABASE_ENABLED = !SUPABASE_CONFIG.url.includes('YOUR-PROJECT');

  /* ---------- BOOTSTRAP ---------- */

  // ===== Plain-language glossary for technical terms =====
  // Hover any of these terms in the report to see explanation
  const GLOSSARY = {
    'GSC': 'Google Search Console — Google 提供給網站管理員的免費工具，可看到你的網站在 Google 搜尋結果中出現的次數（曝光）、被點擊的次數、平均排名位置。',
    'GA4': 'Google Analytics 4 — Google 的網站流量分析工具。可看到有多少人造訪你的網站、他們從哪裡來、用什麼裝置、停留多久。',
    'CTR': '點擊率（Click-Through Rate）= 點擊次數 ÷ 曝光次數。例如 Google 結果頁顯示你的網站 100 次、被點擊 5 次，CTR 就是 5%。CTR 越高代表標題與摘要越吸引人。',
    '曝光': '你的網站出現在 Google 搜尋結果頁上的次數。即使沒人點擊也算一次曝光。',
    '點擊': '使用者在 Google 搜尋結果中點擊你的網站連結，進入你的網站的次數。',
    '工作階段': '一個使用者從進入網站到離開的完整過程。如果同一個人早上下午各來一次，就算 2 個工作階段。',
    '造訪人數': '不重複的訪客數量。例如同一人來 5 次，還是只算 1 個造訪人數（又稱「不重複使用者」）。',
    'JSON-LD': '一種結構化資料標記語法。寫在網頁 HTML 裡，告訴 Google「這個網頁是什麼類型、組織名稱、地址、電話」。讓 AI 搜尋引擎（ChatGPT、Gemini）更容易正確引用你的系所。',
    'canonical': '告訴 Google「這個頁面的正式網址是哪一個」。當同樣內容有多個 URL 時，避免重複內容導致 SEO 分數被稀釋。',
    'OG tags': 'Open Graph 標籤。當你把網頁分享到 Facebook、LINE、LinkedIn 時，決定顯示什麼標題、描述、圖片。缺了就不會有漂亮的預覽卡片。',
    'hreflang': '告訴 Google「這個網頁還有英文版/日文版/其他語言版本」。對多語系網站的國際 SEO 很重要。',
    'meta description': '出現在 Google 搜尋結果中標題下方的灰色說明文字。好的描述能提高點擊率。空白的話 Google 會自己挑段落顯示，效果通常較差。',
    'GEO': 'Generative Engine Optimization — 讓你的網站更容易被 ChatGPT、Perplexity、Gemini 等 AI 搜尋引擎正確讀懂、引用、推薦的優化工作。',
    'CTA': 'Call To Action（行動呼籲）— 網站上希望使用者做的具體動作，例如「點此報名」、「加入 LINE 詢問」、「下載簡章」。',
    'AI 搜尋': 'AI 搜尋引擎（ChatGPT、Perplexity、Gemini、Claude）。使用者直接問 AI 問題，AI 從多個網站整理答案。如果你的網站 GEO 做得好，可能被 AI 引用。',
    '首頁 H1': '網頁 HTML 中最重要的標題標籤（Heading 1）。SEO 最佳實務是每頁只有一個 H1，且內容清楚說明這個頁面是什麼。多個 H1 會讓搜尋引擎困惑。',
    '舊網域': 'tcust.edu.tw 是慈濟科技大學時期的舊網域。現在應該統一用 tcu.edu.tw。出現舊網域連結會讓 SEO 分數分散，且使用者點進去可能看到已經下架的內容。',
    '學年度': '台灣學校的年度編號（112 學年度 = 2023-2024 年）。如果網頁上還寫著 3-5 年前的學年度（例如招生資訊），代表內容過期、需要更新或下架。',
    '失效連結': '點下去會看到 404 錯誤的連結。可能是頁面已被刪除但其他頁面或搜尋引擎還連著它。應該下架或設定 301 轉址。',
    '品牌詞': '包含你的系所、校名簡稱（例如「慈濟」、「資管」、「Tzu Chi」）的搜尋字。搜品牌詞的人通常已經認識你，較容易轉換為實際行動。',
    '非品牌詞': '不包含校名/系所名的搜尋字（例如「護理系排名」、「大學資管科系」）。搜非品牌詞的人是新訪客來源，SEO 優化的重點。',
    'BigQuery': 'Google 的雲端資料倉儲。本報告所有數字都從這裡查詢。你可以把它想像成一個超快的 Excel，放在 Google 的雲端。',
    '證據報表': '本報告中每一張圖表、每一個數字背後的原始查詢。點到「證據報表中心」可以看到所有查詢的 SQL、列數、來源資料表。',
    '異常': '本週數字與前週差距超過 30% 的指標（且基期不能太小）。橘色 = 需要注意，紅色 = 嚴重異常。',
  };

  // Wrap matched terms in <span class="term" data-tip="...">term</span>
  // Skips text already inside an HTML tag or other span.term

  // Inner-skeleton: shown for each section while data is loading
  function addInnerSkeletons() {
    document.querySelectorAll('section.section').forEach(sec => {
      if (sec.id === 'health-score') return;
      // Remove any existing skeleton from previous loads
      const existing = sec.querySelector(':scope > .inner-skeleton');
      if (existing) existing.remove();
      // Append skeleton as a direct child of the section (not inside the body)
      // so render*() functions that fill the body don't overwrite it
      const skel = document.createElement('div');
      skel.className = 'inner-skeleton';
      skel.innerHTML = '<div class="skel-line skel-h1"></div><div class="skel-line"></div><div class="skel-line"></div><div class="skel-line"></div><div class="skel-line"></div><div class="skel-kpis"><div class="skel-line"></div><div class="skel-line"></div>';
      sec.appendChild(skel);
    });
  }

  function fadeOutAllSkeletons() {
    // Per-section skeletons (added dynamically by addInnerSkeletons)
    document.querySelectorAll('.inner-skeleton').forEach(sk => {
      sk.classList.add('is-fading');
      setTimeout(() => sk.remove(), 400);
    });
    // Top-of-page skeleton block (hardcoded in <dept>/index.html as #skeleton)
    const wrap = document.getElementById('skeleton');
    if (wrap) {
      wrap.classList.add('is-fading');
      setTimeout(() => wrap.remove(), 400);
    }
  }

  function annotateTerms(rootEl) {
    if (!rootEl) return;
    // Sort by length desc so longer phrases match first ("AI 搜尋" before "搜尋")
    const keys = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
    // Compile regexes once
    const reByKey = {};
    for (const term of keys) {
      const safe = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      reByKey[term] = new RegExp(`(${safe})`, 'g');
    }
    const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = (p.tagName || '').toLowerCase();
        if (tag === 'script' || tag === 'style') return NodeFilter.FILTER_REJECT;
        if (p.classList && (p.classList.contains('term') || p.classList.contains('no-annotate'))) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const targets = [];
    while (walker.nextNode()) targets.push(walker.currentNode);
    for (const node of targets) {
      // Skip if the text is INSIDE a data-tip attribute (avoid infinite annotation)
      let p = node.parentNode;
      let inTip = false;
      while (p && p !== rootEl) {
        if (p.classList && p.classList.contains('term')) { inTip = true; break; }
        p = p.parentNode;
      }
      if (inTip) continue;

      let text = node.nodeValue;
      let html = text;
      let changed = false;
      // For each glossary term, wrap occurrences with span.term
      // Use a placeholder approach so subsequent passes don't re-wrap inside spans
      const placeholders = [];
      for (const term of keys) {
        if (!html.includes(term)) continue;
        const re = reByKey[term];
        const idx = placeholders.length;
        re.lastIndex = 0;
        html = html.replace(re, (m, g1) => {
          const ph = `\x00P${idx}\x00`;
          placeholders.push({ ph, term, val: g1 });
          return ph;
        });
        changed = true;
      }
      if (!changed) continue;
      // Substitute placeholders with actual <span> tags
      for (const { ph, term, val } of placeholders) {
        const tip = GLOSSARY[term].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        const span = `<span class="term" data-tip="${tip}">${val}</span>`;
        html = html.split(ph).join(span);
      }
      const span = document.createElement('span');
      span.innerHTML = html;
      const parent = node.parentNode;
      while (span.firstChild) parent.insertBefore(span.firstChild, node);
      parent.removeChild(node);
    }
  }

  // Position each term's tooltip on hover/mouseenter so the pseudo-element
  // appears above the term and stays inside the viewport. Uses inline CSS
  // custom properties --tx/--ty on the span itself; the CSS in report.css
  // applies them via transform: translate(var(--tx), var(--ty)) on ::after/::before.
  // This approach is required because the existing .section-body uses
  // overflow: hidden for the collapse animation — position: absolute on the
  // tooltip would clip inside sections. position: fixed escapes any overflow.
  function positionTooltip(termEl) {
    const r = termEl.getBoundingClientRect();
    // Center horizontally on the term
    const termCenterX = r.left + r.width / 2;
    const tipWidth = Math.min(280, termEl.offsetWidth + 240); // estimate
    let tx = termCenterX - tipWidth / 2;
    // Clamp to viewport (avoid going off-screen)
    const minX = 8;
    const maxX = window.innerWidth - tipWidth - 8;
    if (tx < minX) tx = minX;
    if (tx > maxX) tx = maxX;
    // Vertical: place above the term (tooltip bottom = term top - 8px gap)
    const ty = r.top - 8; // --ty is the y of the tooltip's top edge
    termEl.style.setProperty('--tx', tx + 'px');
    termEl.style.setProperty('--ty', ty + 'px');
  }

  function attachTooltipHover() {
    document.querySelectorAll('.term').forEach(t => {
      if (t._tipBound) return;
      t._tipBound = true;
      t.addEventListener('mouseenter', () => positionTooltip(t));
      // Also reposition on scroll/resize so tooltip follows if user scrolls
      // while hovering (rare but happens on touchpads).
      const reposition = () => { if (t.matches(':hover')) positionTooltip(t); };
      window.addEventListener('scroll', reposition, { passive: true });
      window.addEventListener('resize', reposition);
    });
  }

  // Reposition tooltip if it would overflow the viewport (kept for compat)
  function positionTooltips() {
    // No-op: per-element positioning happens in attachTooltipHover on hover.
  }



  // Three.js animated background — runs regardless of data load
  function initThreeBg() {
    const canvas = document.getElementById('three-bg');
    if (!canvas || !window.THREE) return;
    // WebGL guard
    try {
      const test = document.createElement('canvas');
      if (!(test.getContext('webgl2') || test.getContext('webgl'))) return;
    } catch (_) { return; }

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Floating particles — soft glow look
    const COUNT = 180;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const palette = [
      new THREE.Color('#1d7d78'),
      new THREE.Color('#2563eb'),
      new THREE.Color('#647581'),
      new THREE.Color('#b45309'),
      new THREE.Color('#4ee0c1'),
    ];
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      sizes[i] = 0.4 + Math.random() * 0.8;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Round-dot sprite via canvas texture
    const dot = document.createElement('canvas');
    dot.width = dot.height = 32;
    const ctx = dot.getContext('2d');
    const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.6)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 32, 32);
    const sprite = new THREE.CanvasTexture(dot);

    const mat = new THREE.PointsMaterial({
      size: 1.2,
      map: sprite,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      opacity: 0.6,
    });
    const points = new THREE.Points(geom, mat);
    scene.add(points);

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    let raf;
    function tick() {
      points.rotation.y += 0.0008;
      points.rotation.x += 0.0004;
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    tick();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // Window lengths the user can pick
  const RANGE_DAYS = {
    '1d': 1, '2d': 2, '3d': 3, '4d': 4, '5d': 5, '6d': 6,
    '1w': 7, '2w': 14, '3w': 21,
    '1mo': 30, '3mo': 90, '6mo': 180,
  };

  async function fetchRangeData(deptKey, daysBack) {
    // Use Taiwan time (UTC+8) for "today" so window matches dept's date semantics
    const tzOffsetMs = 8 * 60 * 60 * 1000;
    const todayMs = Date.now() + tzOffsetMs;
    const todayISO = new Date(todayMs).toISOString().slice(0, 10);
    const startMs = todayMs - (daysBack - 1) * 86400000;
    const startISO = new Date(startMs).toISOString().slice(0, 10);
    // Previous window: same length, immediately before the current window
    const prevEndISO = new Date(startMs - 86400000).toISOString().slice(0, 10);
    const prevStartMs = startMs - daysBack * 86400000;
    const prevStartISO = new Date(prevStartMs).toISOString().slice(0, 10);

    if (window.supabase) {
      try {
        const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        const [cur, prev] = await Promise.all([
          client.from(deptKey).select('*').gte('date', startISO).lte('date', todayISO).order('date', { ascending: false }),
          client.from(deptKey).select('*').gte('date', prevStartISO).lte('date', prevEndISO).order('date', { ascending: false }),
        ]);
        if (cur.error) throw cur.error;
        if (prev.error) throw prev.error;
        const currentRows = cur.data || [];
        const previousRows = prev.data || [];
        if (currentRows.length || previousRows.length) {
          return {
            currentRows, previousRows,
            startStr: startISO, endStr: todayISO,
            prevStartStr: prevStartISO, prevEndStr: prevEndISO,
            source: 'supabase',
          };
        }
      } catch (e) {
        console.warn('[report] Supabase range fetch failed:', e);
      }
    }
    // Fallback: data.json doesn't have previous period → return current only
    try {
      const res = await fetch('data.json?ts=' + Date.now());
      if (res.ok) {
        const json = await res.json();
        // ponytail: data.json is a 7-day-week snapshot; it has no per-day rows
        // so any non-1w window will be approximate. The window labels still
        // show, the numbers don't scale. Upgrade: write one row per day in
        // build_data so every range hits a real Supabase sum.
        console.warn(`[report] no Supabase rows for ${deptKey} ${startISO}..${todayISO} (${daysBack}d); showing 7-day data.json snapshot as fallback`);
        return { currentRows: null, snapshot: json, previousRows: null, startStr: startISO, endStr: todayISO, source: 'data.json (current snapshot only)' };
      }
    } catch (e) { /* ignore */ }
    return null;
  }

  function aggregateRows(rows) {
    // Sum numeric columns when multiple rows exist. JSONB arrays take the latest.
    if (!rows || rows.length === 0) return null;
    if (rows.length === 1) return rows[0];
    const sum = (key) => rows.reduce((s, r) => s + (Number(r[key]) || 0), 0);
    const imp = sum('gsc_impressions');
    const ctr = imp > 0 ? (sum('gsc_clicks') / imp * 100) : 0;
    const latest = rows[0];
    return {
      ...latest,
      users: sum('users'),
      sessions: sum('sessions'),
      pageviews: sum('pageviews'),
      gsc_clicks: sum('gsc_clicks'),
      gsc_impressions: imp,
      ctr_pct: ctr,
    };
  }

  function rowToNested(row, deptKey, prevRow = null, windowDays = 7) {
    // Compute trend_pct: ((current - previous) / previous) * 100
    const trendPct = (curr, prev) => {
      if (!prevRow || !prev || prev === 0) return 0;
      return ((curr - prev) / prev) * 100;
    };
    const prevUsers = prevRow ? Number(prevRow.users) || 0 : null;
    const prevSessions = prevRow ? Number(prevRow.sessions) || 0 : null;
    const prevClicks = prevRow ? Number(prevRow.gsc_clicks) || 0 : null;
    const prevCtr = prevRow ? Number(prevRow.ctr_pct) || 0 : null;
    const comparisonLabel = `vs 前 ${windowDays} 天`;
    return {
      meta: {
        siteName: window.__SITE_NAME__ || '',
        siteDomain: deptKey + '.tcu.edu.tw',
        reportVersion: 'v3.0',
        updatedAt: (row.date || '').replace(/-/g, '/'),
        maxDateGa4: row.source_max_date,
        sourceCount: 3,
      },
      periods: {
        current: { start: (row.date || '').replace(/-/g, '/'), end: (row.date || '').replace(/-/g, '/') },
        previous: {}, trend: {},
      },
      kpis: {
        users: {
          label: '本區間造訪人數', value: row.users,
          trend_pct: +trendPct(row.users, prevUsers).toFixed(1),
          avg: prevRow ? `${prevUsers.toLocaleString()} (${comparisonLabel})` : '-', src: 'GA4',
        },
        sessions: {
          label: '本區間工作階段', value: row.sessions,
          trend_pct: +trendPct(row.sessions, prevSessions).toFixed(1),
          avg: prevRow ? `${prevSessions.toLocaleString()} (${comparisonLabel})` : '-', src: 'GA4',
        },
        gsc: {
          label: 'Google 搜尋點擊', value: row.gsc_clicks,
          trend_pct: +trendPct(row.gsc_clicks, prevClicks).toFixed(1),
          avg: prevRow ? `${prevClicks.toLocaleString()} (${comparisonLabel})` : '-', src: 'GSC',
        },
        ctr: {
          label: 'Google 搜尋點擊率', value: (Number(row.ctr_pct) || 0).toFixed(2) + '%',
          trend_pct: +(Number(row.ctr_pct) - prevCtr).toFixed(2),
          avg: prevRow ? `${prevCtr.toFixed(2)}% (${comparisonLabel})` : '-', src: 'GSC',
        },
      },
      trends52w: row.weekly_trends || { ga4: [], gsc: [] },
      daily_trends: row.daily_trends || [],
      audience: row.audience || { country: [], device: [], source: [] },
      topKeywords: row.keywords || [],
      topPages: row.top_pages || [],
      topIssues: row.issues || [],
      stalePages: row.stale_pages || [],
      geo: row.geo,
      evidence: row.evidence || [],
    };
  }

  async function init() {
    // Track when loading started so skeletons stay visible at least 400ms
    const loadingStartTime = Date.now();
    function fadeOutSkeletonsWithMinDelay() {
      const elapsed = Date.now() - loadingStartTime;
      const wait = Math.max(0, 400 - elapsed);
      setTimeout(fadeOutAllSkeletons, wait);
    }
    // Determine dept key from URL path (e.g., /itm/ → 'itm')
    const pathParts = location.pathname.split('/').filter(Boolean);
    const deptKey = pathParts[pathParts.length - 1] || 'itm';

    // Read selected time window from URL, default 1w
    const rangeEl = document.getElementById('time-range');
    const urlRange = new URLSearchParams(location.search).get('range');
    if (urlRange && RANGE_DAYS[urlRange] && rangeEl) rangeEl.value = urlRange;
    const rangeKey = rangeEl?.value || '1w';
    const daysBack = RANGE_DAYS[rangeKey] || 7;

    // Show per-section skeleton BEFORE the fetch so the user sees it during the wait
    addInnerSkeletons();
    console.log('[report] skeleton shown, fetching data for', deptKey, 'window', daysBack, 'days');

    let data = null;
    let sourceRange = '';
    let loadedFrom = '';

    const fetched = await fetchRangeData(deptKey, daysBack);
    console.log('[report] fetch complete, processing data');
    if (fetched) {
      if (fetched.currentRows && fetched.currentRows.length) {
        const curAgg = aggregateRows(fetched.currentRows);
        const prevAgg = fetched.previousRows && fetched.previousRows.length
          ? aggregateRows(fetched.previousRows)
          : null;
        data = rowToNested(curAgg, deptKey, prevAgg, daysBack);
        data.meta.windowDays = daysBack;
        loadedFrom = `${fetched.source} (current ${fetched.currentRows.length}天, prev ${fetched.previousRows?.length || 0}天)`;
      } else if (fetched.snapshot) {
        data = fetched.snapshot;
        loadedFrom = fetched.source;
      }
      sourceRange = `${fetched.startStr} – ${fetched.endStr}`;
      const previousRange = fetched.prevStartStr && fetched.prevEndStr
        ? `${fetched.prevStartStr} – ${fetched.prevEndStr}`
        : '';
      // ponytail: guard with `data &&` — when fetched has only previousRows
      // (current window empty, like ?range=1w/6d/5d with a partial Supabase
      // window), data stays null here and `data.meta` throws, aborting init()
      // before the skeleton ever fades.
      if (data && data.meta && previousRange) data.meta.previousRange = previousRange;
    }

    // Fallback: if Supabase has no rows for the requested window, snap to latest data
    if (!data) {
      try {
        // First check if Supabase has ANY data for this dept (latest available date)
        const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        const { data: lastRows } = await client
          .from(deptKey).select('*').order('date', { ascending: false }).limit(1);
        if (lastRows && lastRows.length) {
          // Use the latest available single day. Compute previous as the day before that.
          const cur = lastRows[0];
          const prevISO = new Date(Date.parse(cur.date) - 86400000).toISOString().slice(0, 10);
          const { data: prevRows } = await client
            .from(deptKey).select('*').eq('date', prevISO).limit(1);
          const prev = (prevRows && prevRows.length) ? prevRows[0] : null;
          data = rowToNested(cur, deptKey, prev, daysBack);
          data.meta.windowDays = daysBack;
          sourceRange = cur.date;
          previousRange = prev ? prev.date : '';
          loadedFrom = 'supabase (latest available: ' + cur.date + (daysBack > 1 ? '; requested ' + daysBack + ' days not all in DB' : '') + ')';
        } else {
          // No Supabase data at all — fall back to data.json
          const res = await fetch('data.json?ts=' + Date.now());
          if (res.ok) {
            data = await res.json();
            loadedFrom = 'data.json fallback';
          }
        }
      } catch (e) {
        console.error('[report] fallback failed:', e);
      }
    }

    if (!data) {
      // No data: clean up skeleton before showing the empty-state section
      fadeOutAllSkeletons();
      document.getElementById('report-root').innerHTML = '<div class="section"><div class="section-body" style="text-align:center;padding:60px 20px;"><h2>尚未有資料</h2><p>請等下一次排程更新，或聯絡電算中心。</p></div></div>';
      return;
    }

    data.meta.loadedFrom = loadedFrom;
    data.meta.sourceRange = sourceRange;
    console.log(`[report] data loaded from ${loadedFrom}, window ${sourceRange}`);
    // Stash the loaded payload so the trend-control handlers can
    // re-render the chart without re-fetching from Supabase.
    currentReportData = data;
    // ponytail: fade the skeleton FIRST (before ensureTrendControls) so the
    // user sees content immediately even if ensureTrendControls early-returns
    // (empty daily_trends) or throws. Without this, the fallback path (5d
    // query against Supabase that has 0 rows in window) keeps the skeleton
    // stuck while the render phase runs. The render try/finally still fades
    // it again as a safety net.
    fadeOutSkeletonsWithMinDelay();
    ensureTrendControls(data);

    // Render phase — wrap in try/finally so the skeleton ALWAYS fades out,
    // even if a render function throws.
    try {
      renderHeader(data);
      renderHealthScore(data);
      renderKpis(data);
      renderTrendChart(data);
      renderTopKeywords(data);
      renderTopPages(data);
      renderAudience(data);
      renderIssues(data);
      renderGeo(data);
      renderEvidence(data);
      renderStalePages(data);
      renderFooter(data);

      // Expert sections (10-20) — injected before collapse logic so they auto-collapse
      renderExpertSections(data);

      // Note: unified trend controls are already wired by ensureTrendControls()
      // (called outside the try block at line 493).
    } finally {
      // Fade out the skeleton loader now that real content is rendered (or failed)
      console.log('[report] render phase complete, scheduling fade-out');
      fadeOutSkeletonsWithMinDelay();
    }

    // Annotate glossary terms (GSC, CTR, JSON-LD, etc.) with hover tooltips
    annotateTerms(document.querySelector('main'));
    positionTooltips();
    attachTooltipHover();
    window.addEventListener('resize', positionTooltips);

    // (Legacy date picker removed — replaced by the time-range dropdown.)
    // Date picker init skipped: the old `起 / 迄` inputs are gone.
    // If you ever bring them back, just call initDatePicker({...}) here.

    // Wire time-range dropdown (primary control)
    const timeRangeEl = document.getElementById('time-range');
    const applyBtn = document.getElementById('btn-apply-range');
    if (timeRangeEl) {
      // On dropdown change: just show pending state on 套用 button. Don't reload yet.
      timeRangeEl.addEventListener('change', () => {
        if (applyBtn) applyBtn.classList.add('btn-pending');
      });
    }
    // On 套用 button click: navigate using currently selected dropdown value
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        if (!timeRangeEl) return;
        const url = new URL(location.href);
        url.searchParams.set('range', timeRangeEl.value);
        location.href = url.toString();
      });
    }
    $('#btn-expand-all').addEventListener('click', () => document.querySelectorAll('section.section').forEach(s => s.classList.remove('collapsed')));
    $('#btn-collapse-all').addEventListener('click', () => document.querySelectorAll('section.section').forEach(s => { if (s.id !== 'quick-view' && s.id !== 'top-actions') s.classList.add('collapsed'); }));

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

    // Mobile side-nav (hamburger) — built from current sections list
    initSideNav();
  }

  /* ---------- SIDE NAV (mobile hamburger) ---------- */
  function initSideNav() {
    const nav = document.getElementById('side-nav');
    const overlay = document.getElementById('side-nav-overlay');
    const btn = document.getElementById('hamburger-btn');
    const listEl = document.getElementById('side-nav-list');
    if (!nav || !overlay || !btn || !listEl) return;

    // Build side-nav list from current sections
    const sections = Array.from(document.querySelectorAll('section.section'));
    listEl.innerHTML = sections.map(sec => {
      const h2 = sec.querySelector('.section-header h2');
      if (!h2 || !sec.id) return '';
      const text = h2.textContent.replace(/\s+/g, ' ').trim();
      return `<a href="#${sec.id}" class="side-nav-item" data-target="${sec.id}">${esc(text)}</a>`;
    }).join('');

    // Open/close handler — single function, reused by every "close" trigger
    const toggleMenu = () => {
      const isOpen = !nav.hidden;
      nav.hidden = isOpen;
      overlay.hidden = isOpen;
      btn.classList.toggle('open', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    };

    btn.addEventListener('click', toggleMenu);
    document.getElementById('side-nav-close').addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Clicking a section item → smooth-scroll, then close
    listEl.querySelectorAll('.side-nav-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(item.dataset.target);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close after scroll starts (small delay so the user sees the close action)
        setTimeout(toggleMenu, 100);
      });
    });

    // ESC key closes the menu
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !nav.hidden) toggleMenu();
    });

    // Footer buttons reuse the existing header expand/collapse buttons
    document.querySelectorAll('.side-nav-footer button').forEach(b => {
      b.addEventListener('click', () => {
        const targetId = b.dataset.action === 'expand-all' ? 'btn-expand-all' : 'btn-collapse-all';
        const target = document.getElementById(targetId);
        if (target) target.click();
        setTimeout(toggleMenu, 100);
      });
    });

    // Highlight the currently visible section in the side-nav via IntersectionObserver
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const item = listEl.querySelector(`.side-nav-item[data-target="${entry.target.id}"]`);
          if (item && entry.isIntersecting) {
            listEl.querySelectorAll('.side-nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
      sections.forEach(s => observer.observe(s));
    }
  }

  /* ---------- HEALTH SCORE ---------- */
  function computeHealthScore(d) {
    // Weighted score from 0-100. Higher = healthier site.
    const scores = { freshness: 100, traffic: 100, ctr: 100, stale: 100, issues: 100, brand: 100, mobile: 100 };
    const weights = { freshness: 15, traffic: 15, ctr: 15, stale: 20, issues: 15, brand: 10, mobile: 10 };

    // 1. Freshness: how recent is the data vs today
    const maxDateStr = d.meta?.maxDateGa4 || d.meta?.updatedAt;
    if (maxDateStr) {
      const ds = String(maxDateStr).replace(/\//g, '-');
      const dt = new Date(ds + 'T00:00:00');
      if (!isNaN(dt)) {
        const daysOld = Math.floor((new Date() - dt) / 86400000);
        scores.freshness = daysOld <= 1 ? 100 : Math.max(0, 100 - daysOld * 15);
      }
    }

    // 2. Traffic: current sessions vs 8-week avg (from kpis.sessions.avg like "前 8 週平均 35")
    const avgMatch = String(d.kpis?.sessions?.avg || '').match(/平均\s*(\d+)/);
    const avg = avgMatch ? parseInt(avgMatch[1]) : 0;
    const current = d.kpis?.sessions?.value || 0;
    if (avg > 0) {
      const ratio = current / avg;
      scores.traffic = ratio >= 1.0 ? 100 : ratio >= 0.5 ? 70 : ratio >= 0.2 ? 40 : 10;
    }

    // 3. CTR quality
    const ctrPct = parseFloat(String(d.kpis?.ctr?.value || '0').replace('%', ''));
    scores.ctr = ctrPct >= 5 ? 100 : ctrPct >= 3 ? 70 : ctrPct >= 1 ? 40 : 0;

    // 4. Stale pages penalty
    const staleCount = (d.stalePages || []).length;
    scores.stale = staleCount === 0 ? 100 : staleCount <= 5 ? 70 : staleCount <= 15 ? 40 : staleCount <= 30 ? 15 : 0;

    // 5. SEO issues penalty
    const issues = d.topIssues || [];
    const highIssues = issues.filter(i => (i.severity === 'high' || i.severity === '高')).length;
    scores.issues = highIssues === 0 ? 100 : highIssues === 1 ? 60 : highIssues === 2 ? 30 : 10;

    // 6. Brand search ratio
    const kws = d.topKeywords || [];
    if (kws.length > 0) {
      const brandCount = kws.filter(k => k.brand === true || k.brand === 'true').length;
      const brandRatio = (brandCount / kws.length) * 100;
      scores.brand = (brandRatio >= 40 && brandRatio <= 60) ? 100 : 70;
    }

    // 7. Mobile traffic
    const devices = d.audience?.device || [];
    const total = devices.reduce((s, dv) => s + (dv.sessions || 0), 0);
    const mobile = devices.find(dv => dv.name === 'mobile' || dv.name === '手機');
    if (total > 0 && mobile) {
      const mobilePct = (mobile.sessions / total) * 100;
      scores.mobile = (mobilePct >= 30 && mobilePct <= 60) ? 100 : 70;
    }

    // Weighted sum
    let scoreTotal = 0;
    let scoreWeight = 0;
    for (const key in scores) {
      scoreTotal += scores[key] * weights[key];
      scoreWeight += weights[key];
    }
    const score = Math.round(scoreTotal / scoreWeight);

    // Color and label
    const color = score >= 90 ? { bg: '#047857', light: '#ecfdf5', label: 'Excellent', border: '#a7f3d0' }
               : score >= 75 ? { bg: '#1d4ed8', light: '#eff6ff', label: 'Good', border: '#bfdbfe' }
               : score >= 60 ? { bg: '#b45309', light: '#fffbeb', label: 'Fair', border: '#fde68a' }
               : score >= 40 ? { bg: '#c2410c', light: '#fff7ed', label: 'Warning', border: '#fed7aa' }
               : { bg: '#b91c1c', light: '#fef2f2', label: 'Critical', border: '#fecaca' };

    return { score, color, components: scores, weights };
  }

  function renderHealthScore(d) {
    const el = document.getElementById('health-score');
    if (!el) return;
    const h = computeHealthScore(d);
    // Map component key to a friendly Chinese label
    const labelMap = {
      freshness: '資料新鮮度',
      traffic: '流量',
      ctr: '點擊率',
      stale: '過期頁面',
      issues: 'SEO 問題',
      brand: '品牌搜尋',
      mobile: '行動裝置',
    };
    // Build the 7 breakdown rows
    const rows = Object.keys(h.components).map(key => {
      const v = Math.round(h.components[key]);
      const color = v >= 75 ? '#10b981' : v >= 50 ? '#f59e0b' : '#ef4444';
      return `<div class="hs-row">
        <span class="hs-label">${esc(labelMap[key] || key)}</span>
        <div class="hs-bar"><div class="hs-fill" style="width:${v}%; background:${color};"></div></div>
        <span class="hs-val">${v}</span>
      </div>`;
    }).join('');
    el.innerHTML = `
      <div class="hs-circle" style="background: conic-gradient(${h.color.bg} 0deg ${h.score * 3.6}deg, #e5e7eb ${h.score * 3.6}deg 360deg);">
        <div class="hs-inner" style="color:${h.color.bg};">
          <div class="hs-score">${h.score}</div>
          <div class="hs-label">${esc(h.color.label)}</div>
        </div>
      </div>
      <div class="hs-breakdown">
        <h3>健康分數 (0–100)</h3>
        <p class="hs-sub">根據資料新鮮度、流量、SEO 等 7 項指標加權計算</p>
        ${rows}
      </div>
    `;
  }

  /* ---------- HEADER ---------- */
  function renderHeader(d) {
    $('#site-name').textContent = d.meta.siteName;
    // Display the analytics report URL (where this report lives), not the source domain.
    // The dept key is the URL path (itm / nc / www / freshman).
    const deptKey = (location.pathname.match(/\/([^\/]+)\/?$/) || [])[1] || 'itm';
    const reportUrl = `analytics.tcu.edu.tw/${deptKey}`;
    $('#site-domain').innerHTML = `<a href="https://${reportUrl}" target="_blank" rel="noopener" style="color:#bde8ec;text-decoration:none;">${reportUrl}</a>`;
    // ponytail: read the window label from data.meta.sourceRange (computed in
// init() from the dropdown's actual selection) instead of d.periods.current
// (which is the stale data.json field that doesn't reflect the user's
// current dropdown choice). previousRange already comes from
// data.meta.previousRange and is correct.
$('#report-period').textContent = `${(d.meta.sourceRange || '').replace(/-/g, '/')}${d.meta.previousRange ? ` (vs ${d.meta.previousRange})` : ''}`;
    $('#report-updated').textContent = d.meta.updatedAt;
    $('#report-version').textContent = `v${d.meta.reportVersion}`;
    document.title = `${d.meta.siteName}｜TCU 網站分析報告 v${d.meta.reportVersion}`;
  }

  /* ---------- KPI CARDS ---------- */
  function renderKpis(d, opts) {
    opts = opts || {};
    const base = d.kpis;
    const k = {
      users:    { ...base.users,    ...(opts.kpisOverride && opts.kpisOverride.users    || {}) },
      sessions: { ...base.sessions, ...(opts.kpisOverride && opts.kpisOverride.sessions || {}) },
      gsc:      { ...base.gsc,      ...(opts.kpisOverride && opts.kpisOverride.gsc      || {}) },
      ctr:      { ...base.ctr,      ...(opts.kpisOverride && opts.kpisOverride.ctr      || {}) },
    };
    const html = `
      <div class="kpi-card">
        <div class="label">${esc(k.users.label)}</div>
        <div class="value">${fmtNum(k.users.value)}</div>
        <div class="trend ${k.users.trend_pct > 0 ? 'up' : k.users.trend_pct < 0 ? 'down' : 'flat'}">
          <span class="arrow">${k.users.trend_pct > 0 ? '↑' : k.users.trend_pct < 0 ? '↓' : '–'}</span>
          ${k.users.trend_pct > 0 ? '+' : ''}${k.users.trend_pct.toFixed(1)}% 較前期
        </div>
        <div class="vs-avg">${esc(k.users.avg)}</div>
        <div class="source">${esc(k.users.src)}</div>
      </div>
      <div class="kpi-card">
        <div class="label">${esc(k.sessions.label)}</div>
        <div class="value">${fmtNum(k.sessions.value)}</div>
        <div class="trend ${k.sessions.trend_pct > 0 ? 'up' : k.sessions.trend_pct < 0 ? 'down' : 'flat'}">
          <span class="arrow">${k.sessions.trend_pct > 0 ? '↑' : k.sessions.trend_pct < 0 ? '↓' : '–'}</span>
          ${k.sessions.trend_pct > 0 ? '+' : ''}${k.sessions.trend_pct.toFixed(1)}% 較前期
        </div>
        <div class="vs-avg">${esc(k.sessions.avg)}</div>
        <div class="source">${esc(k.sessions.src)}</div>
      </div>
      <div class="kpi-card">
        <div class="label">${esc(k.gsc.label)}</div>
        <div class="value">${fmtNum(k.gsc.value)}</div>
        <div class="trend ${k.gsc.trend_pct > 0 ? 'up' : k.gsc.trend_pct < 0 ? 'down' : 'flat'}">
          <span class="arrow">${k.gsc.trend_pct > 0 ? '↑' : k.gsc.trend_pct < 0 ? '↓' : '–'}</span>
          ${k.gsc.trend_pct > 0 ? '+' : ''}${k.gsc.trend_pct.toFixed(1)}% 較前期
        </div>
        <div class="vs-avg">${esc(k.gsc.avg)}</div>
        <div class="source">${esc(k.gsc.src)}</div>
      </div>
      <div class="kpi-card">
        <div class="label">${esc(k.ctr.label)}</div>
        <div class="value">${esc(k.ctr.value)}</div>
        <div class="trend ${k.ctr.trend_pct > 0 ? 'up' : k.ctr.trend_pct < 0 ? 'down' : 'flat'}">
          <span class="arrow">${k.ctr.trend_pct > 0 ? '↑' : k.ctr.trend_pct < 0 ? '↓' : '–'}</span>
          ${k.ctr.trend_pct > 0 ? '+' : ''}${k.ctr.trend_pct.toFixed(2)}pt 較前期
        </div>
        <div class="vs-avg">${esc(k.ctr.avg)}</div>
        <div class="source">${esc(k.ctr.src)}</div>
      </div>
    `;
    $('#kpi-grid').innerHTML = html;
  }

  /* ---------- DATE RANGE PICKER ---------- */

  // Custom calendar popup — single shared element, appended to document.body
  let calState = null;

  // Format Date or YYYY-MM-DD string → display 'YYYY/MM/DD' (or '—' if empty)
  function fmtDateDisp(v) {
    if (!v) return '—';
    const m = String(v).match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return '—';
    return `${m[1]}/${m[2]}/${m[3]}`;
  }

  // Update the visible trigger display for a hidden input id
  function syncDateDisplay(inputId) {
    const disp = document.getElementById(inputId + '-display');
    const inp = document.getElementById(inputId);
    if (disp && inp) disp.textContent = fmtDateDisp(inp.value);
  }

  function buildCalendarPopup() {
    const popup = document.createElement('div');
    popup.className = 'cal-popup';
    popup.hidden = true;
    popup.setAttribute('role', 'dialog');
    popup.innerHTML = `
      <div class="cal-header">
        <button type="button" class="cal-nav cal-prev" aria-label="上個月">‹</button>
        <div class="cal-title"></div>
        <button type="button" class="cal-nav cal-next" aria-label="下個月">›</button>
      </div>
      <div class="cal-grid cal-dow">
        <div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div>
      </div>
      <div class="cal-grid cal-days"></div>
      <div class="cal-footer">
        <button type="button" class="cal-action" data-action="clear">清除</button>
        <button type="button" class="cal-action" data-action="today">今天</button>
      </div>
    `;
    document.body.appendChild(popup);
    return popup;
  }

  function renderCalendar() {
    if (!calState) return;
    const { popup, viewYear, viewMonth } = calState;
    popup.querySelector('.cal-title').textContent = `${viewYear} 年 ${viewMonth + 1} 月`;

    const daysHost = popup.querySelector('.cal-days');
    daysHost.innerHTML = '';

    const firstOfMonth = new Date(viewYear, viewMonth, 1);
    // Sunday-first: getDay() returns 0 (Sun) .. 6 (Sat)
    const leading = firstOfMonth.getDay();
    const gridStart = new Date(viewYear, viewMonth, 1 - leading);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const rangeMin = calState.rangeMin ? new Date(calState.rangeMin + 'T00:00:00') : null;
    const rangeMax = calState.rangeMax ? new Date(calState.rangeMax + 'T00:00:00') : null;

    const curStart = $('#date-start').value;
    const curEnd = $('#date-end').value;
    const peerDate = calState.target === 'date-start' ? curEnd : curStart;
    const peer = peerDate ? new Date(peerDate + 'T00:00:00') : null;

    for (let i = 0; i < 42; i++) {
      const d = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cal-day';
      btn.textContent = String(d.getDate());
      if (d.getMonth() !== viewMonth) btn.classList.add('cal-other-month');
      if (d.getTime() === today.getTime()) btn.classList.add('cal-today');

      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const cur = calState.target === 'date-start' ? curStart : curEnd;
      if (cur && cur === iso) btn.classList.add('cal-selected');

      // Disable out-of-range or (for start) > peer end, (for end) < peer start
      let disabled = false;
      if (rangeMin && d < rangeMin) disabled = true;
      if (rangeMax && d > rangeMax) disabled = true;
      if (peer) {
        if (calState.target === 'date-start' && d > peer) disabled = true;
        if (calState.target === 'date-end' && d < peer) disabled = true;
      }
      if (disabled) btn.classList.add('cal-disabled');

      btn.addEventListener('click', (e) => {
        if (btn.classList.contains('cal-disabled')) return;
        e.stopPropagation();
        const inp = document.getElementById(calState.target);
        inp.value = iso;
        syncDateDisplay(calState.target);
        closeCalendar();
      });
      daysHost.appendChild(btn);
    }
  }

  function openCalendar(btn) {
    if (!calState || !calState.popup) return;
    const targetId = btn.getAttribute('data-target');
    const cur = $('#' + targetId).value;
    const base = cur ? new Date(cur + 'T00:00:00') : new Date();
    calState.target = targetId;
    calState.viewYear = base.getFullYear();
    calState.viewMonth = base.getMonth();
    renderCalendar();
    // Position beneath the button
    const r = btn.getBoundingClientRect();
    calState.popup.style.top = (window.scrollY + r.bottom + 6) + 'px';
    calState.popup.style.left = (window.scrollX + r.left) + 'px';
    calState.popup.hidden = false;
  }

  function closeCalendar() {
    if (calState && calState.popup) calState.popup.hidden = true;
  }

  function initDatePicker(range) {
    const popup = buildCalendarPopup();
    calState = {
      popup,
      rangeMin: range.min,
      rangeMax: range.max,
    };

    // Pre-fill hidden inputs (applyDateRange still reads .value from these)
    $('#date-start').value = range.defStart;
    $('#date-end').value = range.defEnd;
    syncDateDisplay('date-start');
    syncDateDisplay('date-end');

    // Wire each trigger button to open the calendar
    document.querySelectorAll('.date-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Toggle: clicking same button again closes
        if (calState && calState.target === btn.getAttribute('data-target') && !calState.popup.hidden) {
          closeCalendar();
          return;
        }
        openCalendar(btn);
      });
    });

    // Outside click + ESC close
    document.addEventListener('click', () => { if (calState && !calState.popup.hidden) closeCalendar(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && calState && !calState.popup.hidden) closeCalendar();
    });
    // Reposition on scroll/resize while open
    window.addEventListener('scroll', () => { if (calState && !calState.popup.hidden) {
      const btn = document.querySelector(`.date-btn[data-target="${calState.target}"]`);
      if (btn) {
        const r = btn.getBoundingClientRect();
        calState.popup.style.top = (window.scrollY + r.bottom + 6) + 'px';
        calState.popup.style.left = (window.scrollX + r.left) + 'px';
      }
    }; }, true);
    window.addEventListener('resize', () => { if (calState && !calState.popup.hidden) {
      const btn = document.querySelector(`.date-btn[data-target="${calState.target}"]`);
      if (btn) {
        const r = btn.getBoundingClientRect();
        calState.popup.style.top = (window.scrollY + r.bottom + 6) + 'px';
        calState.popup.style.left = (window.scrollX + r.left) + 'px';
      }
    }; });

    // Prevent click inside popup from bubbling to document
    popup.addEventListener('click', (e) => e.stopPropagation());

    // Wire static popup controls
    popup.querySelector('.cal-prev').addEventListener('click', (e) => {
      e.stopPropagation();
      let m = calState.viewMonth - 1, y = calState.viewYear;
      if (m < 0) { m = 11; y--; }
      calState.viewYear = y; calState.viewMonth = m;
      renderCalendar();
    });
    popup.querySelector('.cal-next').addEventListener('click', (e) => {
      e.stopPropagation();
      let m = calState.viewMonth + 1, y = calState.viewYear;
      if (m > 11) { m = 0; y++; }
      calState.viewYear = y; calState.viewMonth = m;
      renderCalendar();
    });
    popup.querySelectorAll('.cal-action').forEach(a => {
      a.addEventListener('click', (e) => {
        e.stopPropagation();
        const act = a.getAttribute('data-action');
        const inp = document.getElementById(calState.target);
        if (act === 'today') {
          const t = new Date();
          const iso = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
          inp.value = iso;
        } else if (act === 'clear') {
          inp.value = '';
        }
        syncDateDisplay(calState.target);
        closeCalendar();
      });
    });
  }

  function applyDateRange(fullData) {
    const startStr = $('#date-start').value;
    const endStr = $('#date-end').value;
    if (!startStr || !endStr) { alert('請選擇起訖日期'); return; }
    const start = new Date(startStr + 'T00:00:00');
    const end = new Date(endStr + 'T00:00:00');
    if (start > end) { alert('起日不能晚於訖日'); return; }
    const endInclusive = new Date(end.getTime() + 86399999);

    function inRange(ws) {
      const d = new Date(ws + 'T00:00:00');
      return d && d >= start && d <= endInclusive;
    }
    const ga4 = (fullData.trends52w && fullData.trends52w.ga4 || []).filter(w => inRange(w.week_start));
    const gsc = (fullData.trends52w && fullData.trends52w.gsc || []).filter(w => inRange(w.week_start));
    if (ga4.length === 0 && gsc.length === 0) {
      const available = (fullData.trends52w && fullData.trends52w.ga4 || []);
      const a = available[0] && available[0].week_start;
      const b = available[available.length-1] && available[available.length-1].week_start;
      alert(`選定範圍 ${startStr} – ${endStr} 沒有資料。\n\n可用範圍：${a} – ${b}`);
      return;
    }

    // Compute previous period (same length, immediately before)
    const days = Math.round((end - start) / 86400000) + 1;
    const prevStart = new Date(start.getTime() - days * 86400000);
    const prevEnd = new Date(start.getTime() - 86400000);
    const prevGa4 = (fullData.trends52w.ga4 || []).filter(w => {
      const d = new Date(w.week_start + 'T00:00:00');
      return d && d >= prevStart && d <= prevEnd;
    });
    const prevGsc = (fullData.trends52w.gsc || []).filter(w => {
      const d = new Date(w.week_start + 'T00:00:00');
      return d && d >= prevStart && d <= prevEnd;
    });

    const sum = (arr, key) => arr.reduce((s, w) => s + (w[key] || 0), 0);
    const totalUsers = sum(ga4, 'users');
    const totalSessions = sum(ga4, 'sessions');
    const totalClicks = sum(gsc, 'clicks');
    const totalImp = sum(gsc, 'impressions');
    const ctr = totalImp > 0 ? (totalClicks / totalImp * 100) : 0;
    const prevUsers = sum(prevGa4, 'users');
    const prevSessions = sum(prevGa4, 'sessions');
    const prevClicks = sum(prevGsc, 'clicks');
    const prevImp = sum(prevGsc, 'impressions');
    const prevCtr = prevImp > 0 ? (prevClicks / prevImp * 100) : 0;

    function pct(now, prev) {
      if (!prev) return 0;
      return ((now - prev) / prev) * 100;
    }
    const base = fullData.kpis;
    const kpiOverride = {
      users: { ...base.users, value: totalUsers, trend_pct: +pct(totalUsers, prevUsers).toFixed(1), avg: `${ga4.length} 週累計` },
      sessions: { ...base.sessions, value: totalSessions, trend_pct: +pct(totalSessions, prevSessions).toFixed(1), avg: `${ga4.length} 週累計` },
      gsc: { ...base.gsc, value: totalClicks, trend_pct: +pct(totalClicks, prevClicks).toFixed(1), avg: `${gsc.length} 週累計` },
      ctr: { ...base.ctr, value: `${ctr.toFixed(2)}%`, trend_pct: +(ctr - prevCtr).toFixed(2), avg: `${gsc.length} 週平均` },
    };
    renderKpis(fullData, { kpisOverride: kpiOverride });
    $('#report-period').textContent = `${startStr.replace(/-/g, '/')} – ${endStr.replace(/-/g, '/')} (${ga4.length} 週)`;
    // ponytail: the old weekly trend chart from trends52w is replaced by the
    // unified daily chart in #trends, which the user controls via the new
    // from/to + interval inputs. No weekly re-render is needed here.

    // Visual feedback: flash the 套用 button so the user knows the click registered
    const btn = $('#btn-apply-range');
    if (btn) {
      btn.classList.remove('applied-flash');
      // Force reflow so the animation restarts even if class was just added
      void btn.offsetWidth;
      btn.classList.add('applied-flash');
      setTimeout(() => btn.classList.remove('applied-flash'), 700);
    }

    // Re-trigger the entrance animation on the trends + audience + keywords sections
    // so the user visually perceives that the data updated
    const sectionsToReanimate = ['#trends', '#top-keywords', '#top-pages', '#audience', '#quick-view'];
    sectionsToReanimate.forEach(sel => {
      const el = $(sel);
      if (!el) return;
      el.style.animation = 'none';
      // Force reflow
      void el.offsetWidth;
      el.style.animation = '';
    });
  }

  /* ---------- TREND CHART (unified: from/to + interval) ----------
     One set of charts that adapts to the user's chosen date range and tick
     interval. daily_trends rows: { date, users, sessions, pageviews,
     gsc_clicks, gsc_impressions, sources:{...} }, sorted ascending.
     Bucketing sums each metric over `intervalN × unitDays` consecutive days. */
  let chartRefs = [];
  // Module-level reference so the apply handler can re-render without
  // threading `d` through every event handler.
  let currentReportData = null;

  function ensureTrendControls(data) {
    const trends = document.getElementById('trends');
    if (!trends) return;
    const header = trends.querySelector('.section-header');
    if (!header || header.querySelector('.trend-controls')) return;

    // Replace heading: "八週趨勢" → "趨勢" (window is user-controlled now)
    const h2 = header.querySelector('h2');
    if (h2) h2.innerHTML = '<span class="num">3</span> 趨勢';

    // Compute min/max dates from actual data in daily_trends (not hardcoded).
    // GA4 refreshes daily; GSC refreshes every few days (typically 3-4 days of
    // latency per Google), so the last few dates in daily_trends may have
    // users/sessions but zero gsc_clicks. Use the latest date with ANY data
    // as the picker ceiling so users can't pick a date that's all zeros.
    let dataMin = null, dataMax = null;
    const dt = (data && data.daily_trends) || [];
    for (const e of dt) {
      if (dataMin === null || e.date < dataMin) dataMin = e.date;
      if (dataMax === null || e.date > dataMax) dataMax = e.date;
    }
    // ponytail: fallback to meta.maxDateGa4 (or updatedAt) when daily_trends
    // is empty. Covers ?range=1w/6d/5d where the fallback path uses the latest
    // Supabase row (which has no daily_trends — only today's row carries the
    // 180-day JSONB to bound table size). Single-point range still creates the
    // controls; chart shows "選定範圍內沒有資料" until the user widens the window.
    if (!dataMin || !dataMax) {
      const fb = String((data && data.meta && (data.meta.maxDateGa4 || data.meta.updatedAt)) || '')
        .replace(/\//g, '-');
      if (/^\d{4}-\d{2}-\d{2}$/.test(fb)) { dataMin = fb; dataMax = fb; }
    }
    if (!dataMin || !dataMax) return;
    const fromISO = dataMax; // start at the freshest data
    const toISO = dataMax;

    const controls = document.createElement('span');
    controls.className = 'trend-controls';
    controls.innerHTML = `
      <label class="trend-field">從 <input type="date" id="trend-from" min="${dataMin}" max="${dataMax}" value="${fromISO}"></label>
      <label class="trend-field">到 <input type="date" id="trend-to" min="${dataMin}" max="${dataMax}" value="${toISO}"></label>
      <span class="trend-field trend-interval">
        每 <input type="number" id="trend-interval-n" min="1" value="1">
        <select id="trend-interval-unit">
          <option value="d">天</option>
          <option value="w">週</option>
          <option value="mo">月</option>
        </select>
      </span>
      <button type="button" id="trend-apply">套用</button>
    `;

    const toggle = header.querySelector('.toggle');
    header.insertBefore(controls, toggle);

    // Don't let clicks inside the controls bubble to the section-header
    // collapse handler
    controls.addEventListener('click', e => e.stopPropagation());
    document.getElementById('trend-apply').addEventListener('click', () => {
      if (currentReportData) renderTrendChart(currentReportData);
    });
  }

  function ensureSourcesCanvas() {
    const trends = document.getElementById('trends');
    if (!trends) return;
    const body = trends.querySelector('.section-body');
    if (!body || document.getElementById('chart-sources')) return;
    const card = document.createElement('div');
    card.className = 'chart-card';
    card.style.marginTop = '16px';
    card.innerHTML = `
      <h3>每日來源分佈</h3>
      <div class="sub">依 source/medium 分類的不重複使用者</div>
      <canvas id="chart-sources"></canvas>
    `;
    body.appendChild(card);
  }

  function renderTrendChart(data) {
    if (!data) return;
    ensureSourcesCanvas();

    const fromEl = document.getElementById('trend-from');
    const toEl = document.getElementById('trend-to');
    if (!fromEl || !toEl) return;
    const fromStr = fromEl.value;
    const toStr = toEl.value;
    if (!fromStr || !toStr) return;

    // Clamp: from <= to. <input type="date"> already constrains to valid
    // ISO; a simple swap handles the reversed case.
    const fromISO = fromStr <= toStr ? fromStr : toStr;
    const toISO = fromStr <= toStr ? toStr : fromStr;

    const intervalN = Math.max(1, parseInt(document.getElementById('trend-interval-n')?.value, 10) || 1);
    const unit = document.getElementById('trend-interval-unit')?.value || 'd';
    // ponytail: month bucket is fixed 30 days (not calendar-aware). Acceptable
    // for short windows — leap months would shift labels by up to 3 days.
    // Upgrade: compute bucket boundaries from a Date cursor, not a fixed step.
    const unitDays = unit === 'w' ? 7 : unit === 'mo' ? 30 : 1;
    const bucketSize = intervalN * unitDays;

    const daily = (data.daily_trends || []).filter(r => {
      const d = r.date;
      return d >= fromISO && d <= toISO;
    });

    const buckets = [];
    for (let i = 0; i < daily.length; i += bucketSize) {
      const slice = daily.slice(i, i + bucketSize);
      if (!slice.length) continue;
      const agg = {
        date: slice[0].date,
        users: 0, sessions: 0, pageviews: 0,
        gsc_clicks: 0, gsc_impressions: 0,
        sources: { organic: 0, direct: 0, social: 0, referral: 0, other: 0 },
      };
      for (const r of slice) {
        agg.users += r.users || 0;
        agg.sessions += r.sessions || 0;
        agg.pageviews += r.pageviews || 0;
        agg.gsc_clicks += r.gsc_clicks || 0;
        agg.gsc_impressions += r.gsc_impressions || 0;
        if (r.sources) {
          for (const k of Object.keys(agg.sources)) {
            agg.sources[k] += r.sources[k] || 0;
          }
        }
      }
      buckets.push(agg);
    }

    if (!buckets.length) {
      const msg = '<p style="text-align:center;color:var(--muted);padding:40px 0;">選定範圍內沒有資料</p>';
      for (const id of ['chart-ga4', 'chart-gsc', 'chart-sources']) {
        const c = document.getElementById(id);
        if (c) c.parentElement.innerHTML = msg;
      }
      return;
    }

    // Labels: YYYY-MM for monthly buckets, MM/DD for daily/weekly
    const labels = buckets.map(b => unit === 'mo' ? b.date.slice(0, 7) : b.date.slice(5).replace('-', '/'));

    if (!window.Chart) return;

    // Tear down any existing trend charts so re-renders don't leak instances
    chartRefs = chartRefs.filter(c => {
      if (c && c.canvas && c.canvas.id) {
        const id = c.canvas.id;
        if (id === 'chart-ga4' || id === 'chart-gsc' || id === 'chart-sources') {
          try { c.destroy(); } catch (_) {}
          return false;
        }
      }
      return true;
    });

    const sessColor  = getCss('--teal');
    const pageColor  = getCss('--blue');
    const impColor   = getCss('--amber');
    const clkColor   = getCss('--green');
    const greenColor = getCss('--green');
    const blueColor  = getCss('--blue');
    const tealColor  = getCss('--teal');
    const amberColor = getCss('--amber');
    const mutedColor = getCss('--muted');

    const ga4El = document.getElementById('chart-ga4');
    if (ga4El) {
      chartRefs.push(new Chart(ga4El, {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: '工作階段', data: buckets.map(b => b.sessions || 0), borderColor: sessColor, backgroundColor: sessColor + '20', tension: 0.3 },
            { label: '瀏覽量',   data: buckets.map(b => b.pageviews || 0), borderColor: pageColor, backgroundColor: pageColor + '20', tension: 0.3, yAxisID: 'y1' },
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
          scales: {
            y:  { beginAtZero: true, title: { display: true, text: '工作階段', font: { size: 10 } } },
            y1: { beginAtZero: true, position: 'right', title: { display: true, text: '瀏覽量', font: { size: 10 } }, grid: { drawOnChartArea: false } }
          }
        }
      }));
    }

    const gscEl = document.getElementById('chart-gsc');
    if (gscEl) {
      chartRefs.push(new Chart(gscEl, {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: '曝光', data: buckets.map(b => b.gsc_impressions || 0), borderColor: impColor, backgroundColor: impColor + '20', tension: 0.3 },
            { label: '點擊', data: buckets.map(b => b.gsc_clicks || 0),       borderColor: clkColor, backgroundColor: clkColor + '20', tension: 0.3, yAxisID: 'y1' },
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
          scales: {
            y:  { beginAtZero: true, title: { display: true, text: '曝光', font: { size: 10 } } },
            y1: { beginAtZero: true, position: 'right', title: { display: true, text: '點擊', font: { size: 10 } }, grid: { drawOnChartArea: false } }
          }
        }
      }));
    }

    const srcEl = document.getElementById('chart-sources');
    if (srcEl) {
      chartRefs.push(new Chart(srcEl, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            { label: 'organic',  data: buckets.map(b => b.sources.organic  || 0), backgroundColor: greenColor + 'B0' },
            { label: 'direct',   data: buckets.map(b => b.sources.direct   || 0), backgroundColor: blueColor  + 'B0' },
            { label: 'social',   data: buckets.map(b => b.sources.social   || 0), backgroundColor: tealColor  + 'B0' },
            { label: 'referral', data: buckets.map(b => b.sources.referral || 0), backgroundColor: amberColor + 'B0' },
            { label: 'other',    data: buckets.map(b => b.sources.other    || 0), backgroundColor: mutedColor + 'B0' },
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
          scales: {
            x: { stacked: true, ticks: { font: { size: 10 } } },
            y: { stacked: true, beginAtZero: true, title: { display: true, text: '不重複使用者', font: { size: 10 } } }
          }
        }
      }));
    }
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

  /* ============================================================================
     EXPERT SECTIONS (10-20) — injected by renderExpertSections()
     Filled into <div id="expert-sections"> placed after #evidence in each dept HTML.
     Collapsed by default via existing init() logic.
     ============================================================================ */

  // Detect dept from URL path (/itm/index.html -> 'itm')
  const DEPT_KEY = (() => {
    const m = location.pathname.match(/\/([^\/?#]+)\/?(?:index\.html)?$/);
    return m ? m[1] : 'itm';
  })();

  // ----- Dept-specific static content -----

  // 15. Personas (4 per dept)
  const PERSONAS = {
    itm: [
      { name: '準新生（高中生/家長）', desc: '正在挑大學資管/資工科系', searches: ['資管系學什麼', '慈大資管', '資管出路', '資管證照'], questions: ['資管系到底學什麼？', '慈大資管好考嗎？', '資管 vs 資工差別？'] },
      { name: '在校生', desc: '想了解課程、專題、實習', searches: ['資管課程', '專題製作', '資管實習'], questions: ['資管系必修有哪些？', '專題要做什麼？', '業界實習怎麼找？'] },
      { name: '業界雇主', desc: '招募新人、產學合作', searches: ['慈大資管產學', '資管人才'], questions: ['資管系學生會什麼技術？'] },
      { name: '國際/交換學生', desc: '海外交流、雙聯學位', searches: ['Tzu Chi ITM international', 'TCU exchange'], questions: ['TCU has ITM exchange programs?'] },
    ],
    nc: [
      { name: '準新生（高中生/家長）', desc: '想當護理師、了解護理系出路', searches: ['護理系出路', '慈大護理', '護理師薪水'], questions: ['慈大護理好考嗎？', '護理系會學什麼？', '護理師證照難考嗎？'] },
      { name: '在校生', desc: '臨床實習、升學、NCLEX', searches: ['護理實習', 'NCLEX', '護理升學'], questions: ['臨床實習會被罵嗎？', 'NCLEX 怎麼準備？'] },
      { name: '臨床雇主', desc: '招募護理師、產學合作', searches: ['慈大護理招募', '護理產學'], questions: ['慈大護理畢業生臨床能力？'] },
      { name: '進修者（二技/學士後）', desc: '在職進修、轉職護理', searches: ['學士後護理', '慈大二技護理'], questions: ['學士後護理好讀嗎？', '在職讀護理可行嗎？'] },
    ],
    www: [
      { name: '高中生/家長', desc: '選大學、認識慈濟大學', searches: ['慈濟大學', '慈大科系', 'Tzu Chi University'], questions: ['慈大在哪裡？', '慈大有哪些科系？', '慈大好不好？'] },
      { name: '校友/在校生', desc: '校園資訊、活動、公告', searches: ['慈大活動', '慈大公告'], questions: ['慈大圖書館開放時間？', '慈大停車？'] },
      { name: '國際學生/學者', desc: '交流、交換、研究合作', searches: ['Tzu Chi University international'], questions: ['TCU English programs?'] },
      { name: '新聞媒體/公關', desc: '採訪、聯繫窗口', searches: ['慈濟大學 聯繫', '慈大 公關'], questions: ['慈大新聞聯繫窗口？'] },
    ],
    freshman: [
      { name: '新鮮人（剛錄取）', desc: '註冊、新生訓練、住宿', searches: ['慈大新生', '新生訓練', '慈大宿舍'], questions: ['新生訓練要帶什麼？', '宿舍怎麼抽？', '註冊流程？'] },
      { name: '新生家長', desc: '了解校園、安全、聯繫', searches: ['慈大新生家長', '慈大住宿安全'], questions: ['慈大宿舍安全嗎？', '家長可以聯繫誰？'] },
      { name: '轉學生/復學生', desc: '學分抵免、課程銜接', searches: ['慈大轉學', '慈大復學'], questions: ['學分怎麼抵？', '轉學考時間？'] },
      { name: '研究生新生', desc: '指導教授、研究室、獎學金', searches: ['慈大研究所', '慈大獎學金'], questions: ['慈大有哪些研究所？'] },
    ],
  };

  // 17. AI questions (6 per dept)
  const AI_QUESTIONS = {
    itm: [
      { q: '慈大資管學什麼？', a: '資訊科技與管理 = 資訊技術 + 商業管理。慈大資管系強調「做中學」，必修含程式、資料庫、專題製作。', page: '/p/412-1022-2586.php' },
      { q: '慈濟資工好考嗎？', a: '慈大沒有獨立的「資工系」，資管系與資工方向相近。個人申請要看學習歷程與面試表現。', page: '/p/412-1022-2570.php?Lang=zh-tw' },
      { q: '資管系出路？', a: '軟體工程師、資料分析師、ERP 顧問、專案管理師為主。慈大近年主打 AI 與醫資整合。', page: '/' },
      { q: '慈大資管有 AI 課程嗎？', a: '有，多門選修含 Python 機器學習、深度學習、生成式 AI 應用。', page: '/p/412-1022-2586.php' },
      { q: '慈大資管證照輔導？', a: '輔導學生考取 AWS、Oracle、Microsoft、ERP 等證照。', page: '/p/404-1022-30082.php' },
      { q: '慈大資管產學合作？', a: '與花蓮在地醫院、資訊業合作專題、實習、產學專班。', page: '/p/406-1022-65878,r452.php?Lang=zh-tw' },
    ],
    nc: [
      { q: '慈大護理好考嗎？', a: '個人申請看在校成績、服務學習與面試。繁星與考試分發競爭激烈。', page: '/' },
      { q: '護理系必修有哪些？', a: '基礎醫學、解剖、生理、藥理、內外產兒精神科護理、臨床實習。', page: '/p/412-1022-2586.php' },
      { q: '慈大護理出路？', a: '臨床護理師為主，可進階專科護理師、個案管理師。慈大附醫優先錄用。', page: '/' },
      { q: '護理師證照好考嗎？', a: '台灣護理師國考通過率約 50-60%，慈大應屆通過率高於全國平均。', page: '/' },
      { q: '慈大護理有海外實習嗎？', a: '有，可至美、澳、日、泰等國短期臨床見習。', page: '/p/406-1022-65878,r452.php?Lang=zh-tw' },
      { q: '學士後護理？', a: '慈大設有學士後護理學位學程，供大學畢業轉職者攻讀。', page: '/' },
    ],
    www: [
      { q: '慈濟大學在哪裡？', a: '位於花蓮市中央路三段 701 號，靠近花蓮火車站。', page: '/' },
      { q: '慈大有哪些學院？', a: '醫學院、護理學院、人文社會學院、傳播學院、國際暨跨領域學院。', page: '/' },
      { q: '慈大好不好？', a: '以人文關懷聞名，教學評鑑與研究表現穩定。附設醫院提供完整臨床教學。', page: '/' },
      { q: '慈大英文授課？', a: '部分通識與國際學程提供英文授課。', page: '/' },
      { q: '慈大有附設醫院嗎？', a: '有，慈濟醫院於花蓮、台北、台中、嘉義、大林皆有院區，提供實習與就業。', page: '/' },
      { q: '慈大獎學金？', a: '校內外獎學金豐富，含清寒獎學金、書卷獎、服務學習獎學金。', page: '/' },
    ],
    freshman: [
      { q: '新生訓練要帶什麼？', a: '身分證、學測成績單、住宿通知單、健檢報告（由學校安排）。', page: '/' },
      { q: '宿舍怎麼抽？', a: '依新生網站公告時程線上選填床位，先選先贏。', page: '/' },
      { q: '註冊流程？', a: '線上註冊 → 繳費 → 選課 → 體檢 → 開學，依新生網站公告辦理。', page: '/' },
      { q: '新生家長說明會？', a: '開學前一週舉辦，介紹校園、系所、導師制度。', page: '/' },
      { q: '學分抵免？', a: '轉學生、復學生可申請學分抵免，依教務處公告辦理。', page: '/' },
      { q: '新生可以打工嗎？', a: '可以，需依學務處生活助學金規範申請，校內工讀優先。', page: '/' },
    ],
  };

  // 20. Query specs (BigQuery tables — single source of truth)
  const QUERY_SPECS = [
    { table: 'all_units_summary', contains: 'GA4 事件層級資料（page_view、click、session、user、country、device、source/medium）', used: '✓ kpis / audience / trends52w / stalePages', excluded: '✗ 不直接用 COUNT(*) 算 pageviews，用 COUNTIF(event_name=\'page_view\')' },
    { table: 'all_gsc_summary', contains: 'Google Search Console 每日 query × page 曝光/點擊/排名', used: '✓ topKeywords / topPages / trends52w GSC', excluded: '✗ 不跨 query 加總 active_users（會重複計算）' },
    { table: 'search_behavior_summary', contains: '進站關鍵字、登陸頁、內部搜尋、AI 搜尋引擎 referrer', used: '（預留，目前未於 v3 報表查詢）', excluded: '✗ AI 搜尋 referrer 需管理員後台確認' },
  ];

  // ----- Section template helper -----
  function sectionEl(num, id, title, lead, bodyHtml) {
    return `<section class="section" id="${id}">
      <div class="section-header">
        <div>
          <h2><span class="num">${num}</span> ${esc(title)}</h2>
          <div class="lead">${esc(lead)}</div>
        </div>
        <div class="toggle">▼</div>
      </div>
      <div class="section-body-wrap"><div class="section-body">
        ${bodyHtml}
      </div></div>
    </section>`;
  }

  // ----- 10. Anomaly alerts -----
  function renderAnomaly(d) {
    const body = document.getElementById('anomaly-body');
    if (!body) return;
    const ga4 = (d.trends52w && d.trends52w.ga4) || [];
    const gsc = (d.trends52w && d.trends52w.gsc) || [];
    const rows = [];
    for (let i = 1; i < ga4.length; i++) {
      const prev = ga4[i - 1], cur = ga4[i];
      const checks = [
        { metric: '工作階段', prev: prev.sessions, cur: cur.sessions },
        { metric: '活躍使用者', prev: prev.users, cur: cur.users },
        { metric: '瀏覽量', prev: prev.pageviews, cur: cur.pageviews },
      ];
      for (const c of checks) {
        if (!c.prev || c.prev < 20) continue;
        const pct = ((c.cur - c.prev) / c.prev) * 100;
        if (Math.abs(pct) >= 30) {
          rows.push({
            week: cur.week_label,
            metric: c.metric,
            prev: c.prev,
            cur: c.cur,
            pct,
            severity: Math.abs(pct) >= 50 ? 'high' : 'med',
          });
        }
      }
    }
    // Also check GSC clicks
    for (let i = 1; i < gsc.length; i++) {
      const prev = gsc[i - 1], cur = gsc[i];
      if (!prev.clicks || prev.clicks < 20) continue;
      const pct = ((cur.clicks - prev.clicks) / prev.clicks) * 100;
      if (Math.abs(pct) >= 30) {
        rows.push({ week: cur.week_label, metric: 'GSC 點擊', prev: prev.clicks, cur: cur.clicks, pct, severity: Math.abs(pct) >= 50 ? 'high' : 'med' });
      }
    }
    if (!rows.length) {
      body.innerHTML = '<p style="color:var(--muted);padding:8px 0;">✓ 最近 52 週沒有偵測到 ≥30% 的週對週異常。</p>';
      return;
    }
    rows.sort((a, b) => Math.abs(b.pct) - Math.abs(a.pct));
    body.innerHTML = `
      <div class="tbl-wrap"><table class="data">
        <thead><tr><th>週</th><th>指標</th><th class="num">前週</th><th class="num">本週</th><th class="num">變化</th><th>等級</th></tr></thead>
        <tbody>${rows.slice(0, 20).map(r => `
          <tr>
            <td>${esc(r.week)}</td>
            <td>${esc(r.metric)}</td>
            <td class="num">${fmtNum(r.prev)}</td>
            <td class="num">${fmtNum(r.cur)}</td>
            <td class="num" style="color:${r.pct > 0 ? 'var(--ok-fg)' : 'var(--bad-fg)'};font-weight:700;">${r.pct > 0 ? '+' : ''}${r.pct.toFixed(1)}%</td>
            <td><span class="issue-item sev ${r.severity === 'high' ? 'high' : 'med'}" style="padding:2px 10px;font-size:11px;">${r.severity === 'high' ? '嚴重' : '注意'}</span></td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      <div class="lead" style="margin-top:10px;">顯示前 ${Math.min(20, rows.length)} 筆；嚴重紅 = 變化 ≥50%，注意橘 = 30–50%。基期 < 20 不計入以避免雜訊。</div>`;
  }

  // ----- 11. Content matrix (4 quadrants) -----
  function renderContentMatrix(d) {
    const body = document.getElementById('content-matrix-body');
    if (!body) return;
    const pages = d.topPages || [];
    if (!pages.length) { body.innerHTML = '<p style="color:var(--muted);padding:8px 0;">無 topPages 資料。</p>'; return; }
    // Compute median impressions for split
    const imps = pages.map(p => p.impressions || 0).sort((a, b) => a - b);
    const median = imps[Math.floor(imps.length / 2)] || 0;
    const quadrants = { star: [], optimize: [], dormant: [], review: [] };
    for (const p of pages) {
      const imp = p.impressions || 0;
      const pos = p.pos || 0;
      if (imp >= median && pos <= 10) quadrants.star.push(p);
      else if (imp >= median && pos > 10) quadrants.optimize.push(p);
      else if (imp < median && pos <= 10) quadrants.dormant.push(p);
      else quadrants.review.push(p);
    }
    const quadrant = (label, q, desc, color) => `
      <div class="qm-card" style="border-left:4px solid ${color};">
        <h4 style="color:${color};">${label} <span style="color:var(--muted);font-weight:500;">(${q.length})</span></h4>
        <p style="font-size:12px;color:var(--muted);margin:4px 0 8px;">${desc}</p>
        ${q.length ? `<ul style="font-size:12.5px;padding-left:18px;">${q.map(p => `<li><a href="${esc(p.url)}" target="_blank" rel="noopener" style="color:var(--blue);text-decoration:none;">${esc(p.url.replace(/^https?:\/\/[^/]+/, ''))}</a> <span style="color:var(--muted);">· ${fmtNum(p.impressions)} 曝光 · 排名 ${(p.pos || 0).toFixed(1)} · CTR ${fmtPct(p.ctr)}</span></li>`).join('')}</ul>` : '<p style="color:var(--muted);font-size:12.5px;">（無）</p>'}
      </div>`;
    body.innerHTML = `
      <div class="qm-grid">
        ${quadrant('★ 明星頁', quadrants.star, '高曝光 + 前 10 名 — 維持即可', 'var(--teal)')}
        ${quadrant('⚠ 高曝光需優化', quadrants.optimize, '高曝光但排名 10 名外 — 改善標題 / 內文 / 連結', 'var(--amber)')}
        ${quadrant('○ 沉睡明星', quadrants.dormant, '低曝光但前 10 名 — 加強內部連結 / 推廣', 'var(--blue)')}
        ${quadrant('× 需重新檢視', quadrants.review, '低曝光 + 落後排名 — 考慮下架或大幅重寫', 'var(--red)')}
      </div>
      <div class="lead" style="margin-top:10px;">中位曝光 = ${fmtNum(median)}。以 topPages 的 GSC 曝光 × 排名切四象限。</div>`;
  }

  // ----- 12. AI referral (placeholder) -----
  function renderAiReferral(d) {
    const body = document.getElementById('ai-referral-body');
    if (!body) return;
    body.innerHTML = `
      <div class="placeholder-box">
        <p><strong>本資料需透過管理員後台查詢。</strong></p>
        <p>在 BigQuery 對 <code>search_behavior_summary</code> 執行：</p>
<pre style="background:#f8fafc;padding:10px;border-radius:6px;font-size:12px;overflow-x:auto;">SELECT page_referrer, COUNT(*) AS sessions
FROM \`project.dataset.all_units_summary\`
WHERE page_referrer LIKE '%chatgpt.com%'
   OR page_referrer LIKE '%perplexity%'
   OR page_referrer LIKE '%gemini%'
   OR page_referrer LIKE '%claude%'
   OR page_referrer LIKE '%copilot%'
   AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
GROUP BY page_referrer
ORDER BY sessions DESC LIMIT 20</pre>
        <p style="color:var(--muted);font-size:13px;">為什麼不在這份報表自動跑：referrer 字串沒有結構化標記，誤判率高；建議管理員每季人工 review 一次並更新此區。</p>
      </div>`;
  }

  // ----- 13. CTA funnel (placeholder) -----
  function renderCtaFunnel(d) {
    const body = document.getElementById('cta-funnel-body');
    if (!body) return;
    body.innerHTML = `
      <div class="placeholder-box">
        <p><strong>本資料需透過管理員後台查詢。</strong></p>
        <p>在 BigQuery 對 <code>all_units_summary</code> 執行（依部門調整 site_name）：</p>
<pre style="background:#f8fafc;padding:10px;border-radius:6px;font-size:12px;overflow-x:auto;">SELECT link_url, COUNT(*) AS clicks
FROM \`project.dataset.all_units_summary\`
WHERE event_name = 'click'
  AND site_name = '${esc(d.meta.siteName)}'
  AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
GROUP BY link_url
ORDER BY clicks DESC LIMIT 50</pre>
        <p style="margin-top:8px;">將連結依 URL pattern 自動分類：</p>
        <ul style="font-size:13px;">
          <li><strong>招生簡章</strong>：URL 含 <code>recruit / admission / brochure</code></li>
          <li><strong>入學方式</strong>：<code>apply / 申請 / 入學</code></li>
          <li><strong>報名系統</strong>：<code>signup / register</code></li>
          <li><strong>LINE</strong>：<code>line.me</code></li>
          <li><strong>電話</strong>：<code>tel:</code></li>
          <li><strong>Email</strong>：<code>mailto:</code></li>
          <li><strong>表單</strong>：<code>form / 報名表</code></li>
          <li><strong>PDF 下載</strong>：<code>.pdf</code></li>
          <li><strong>其他連結</strong></li>
        </ul>
      </div>`;
  }

  // ----- 14. User paths (placeholder) -----
  function renderUserPaths(d) {
    const body = document.getElementById('user-paths-body');
    if (!body) return;
    body.innerHTML = `
      <div class="placeholder-box">
        <p><strong>本資料需透過管理員後台查詢。</strong></p>
        <p>建議用 GA4 的 <em>Path exploration</em> 匯出，或在 BigQuery 跑：</p>
<pre style="background:#f8fafc;padding:10px;border-radius:6px;font-size:12px;overflow-x:auto;">WITH sessions AS (
  SELECT ga_session_id,
         MIN(IF(page_view_in_session_index = 1, page_location, NULL)) AS landing,
         ARRAY_AGG(page_location ORDER BY page_view_in_session_index) AS path
  FROM \`project.dataset.all_units_summary\`
  WHERE event_name = 'page_view'
    AND site_name = '${esc(d.meta.siteName)}'
    AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
  GROUP BY ga_session_id
)
SELECT landing, path[SAFE_OFFSET(1)] AS next_page, COUNT(*) AS sessions
FROM sessions
WHERE path[SAFE_OFFSET(1)] IS NOT NULL
GROUP BY landing, next_page
ORDER BY sessions DESC LIMIT 20</pre>
        <p style="color:var(--muted);font-size:13px;">本報表先以 topPages 為主；用戶路徑需另外寫到探索型 dashboard。</p>
      </div>`;
  }

  // ----- 15. Personas (4) -----
  function renderPersonas(d) {
    const body = document.getElementById('personas-body');
    if (!body) return;
    const list = PERSONAS[DEPT_KEY] || PERSONAS.itm;
    body.innerHTML = `<div class="persona-grid">${list.map(p => `
      <div class="persona-card">
        <h4>👤 ${esc(p.name)}</h4>
        <p style="font-size:13px;color:var(--ink);">${esc(p.desc)}</p>
        <div style="margin-top:8px;"><strong style="font-size:12px;color:var(--navy);">常搜字：</strong><div class="tag-row">${p.searches.map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div></div>
        <div style="margin-top:8px;"><strong style="font-size:12px;color:var(--navy);">常問問題：</strong><ul style="font-size:13px;margin:4px 0 0 18px;">${p.questions.map(q => `<li>${esc(q)}</li>`).join('')}</ul></div>
      </div>`).join('')}</div>`;
  }

  // ----- 16. Marketing funnel (5 stages) -----
  function renderMarketingFunnel(d) {
    const body = document.getElementById('marketing-funnel-body');
    if (!body) return;
    const kpis = d.kpis || {};
    const trends = (d.trends52w && d.trends52w.ga4) || [];
    // Awareness = impressions (GSC 8-week sum)
    const gsc = (d.trends52w && d.trends52w.gsc) || [];
    const recent = gsc.slice(-8);
    const recentGa4 = trends.slice(-8);
    const awareness = recent.reduce((s, w) => s + (w.impressions || 0), 0);
    const interest = recent.reduce((s, w) => s + (w.clicks || 0), 0);
    const consideration = recentGa4.reduce((s, w) => s + (w.users || 0), 0);
    const stages = [
      { name: 'Awareness（曝光）', value: awareness, hint: 'GSC 曝光 — 有多少人「看到」' },
      { name: 'Interest（點擊）', value: interest, hint: 'GSC 點擊 — 多少人「點進來」' },
      { name: 'Consideration（互動）', value: consideration, hint: 'GA4 使用者 — 多少人實際瀏覽' },
      { name: 'Conversion（CTA 轉換）', value: '—', hint: '需管理員後台（報名 / 簡章下載 / LINE）' },
      { name: 'Advocacy（推薦回流）', value: '—', hint: '需管理員後台（重複訪客 / 推薦連結）' },
    ];
    const max = Math.max(...stages.map(s => typeof s.value === 'number' ? s.value : 0), 1);
    body.innerHTML = `
      <div class="funnel">${stages.map(s => `
        <div class="funnel-row">
          <div class="funnel-name"><strong>${esc(s.name)}</strong><div style="font-size:12px;color:var(--muted);">${esc(s.hint)}</div></div>
          <div class="funnel-bar"><span style="width:${typeof s.value === 'number' ? (s.value / max * 100).toFixed(1) : 0}%;"></span></div>
          <div class="funnel-val">${typeof s.value === 'number' ? fmtNum(s.value) : '<span style="color:var(--muted);">—</span>'}</div>
        </div>`).join('')}</div>
      <div class="lead" style="margin-top:10px;">前 3 階段用近 8 週 GSC + GA4 加總；後 2 階段（CTA / 回流）需 BigQuery 額外查詢，建議管理員補上。</div>`;
  }

  // ----- 17. AI questions (6) -----
  function renderAiQuestions(d) {
    const body = document.getElementById('ai-questions-body');
    if (!body) return;
    const list = AI_QUESTIONS[DEPT_KEY] || AI_QUESTIONS.itm;
    body.innerHTML = `
      <div class="tbl-wrap"><table class="data">
        <thead><tr><th>#</th><th>使用者會問</th><th>官方建議答案（要讓 AI 抓得到）</th><th>發佈頁面</th></tr></thead>
        <tbody>${list.map((q, i) => `
          <tr>
            <td>${i + 1}</td>
            <td><strong>${esc(q.q)}</strong></td>
            <td>${esc(q.a)}</td>
            <td class="url"><a href="${esc(q.page)}" target="_blank" rel="noopener">${esc(q.page)}</a></td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      <div class="lead" style="margin-top:10px;">把官方答案逐字放進對應頁面（標題 H1 + 第一段），ChatGPT / Perplexity 才抓得到。每月複查一次。</div>`;
  }

  // ----- 18. Data quality -----
  function renderDataQuality(d) {
    const body = document.getElementById('data-quality-body');
    if (!body) return;
    const gscOk = d.meta.maxDateGsc;
    const ga4Ok = d.meta.maxDateGa4;
    const daysAgo = (iso) => {
      if (!iso) return null;
      const dt = new Date(iso.replace(/\//g, '-') + 'T00:00:00');
      const today = new Date();
      return Math.floor((today - dt) / 86400000);
    };
    const ga4Days = daysAgo(ga4Ok);
    const gscDays = daysAgo(gscOk);
    const freshBadge = (days) => {
      if (days === null) return '<span class="issue-item sev high" style="padding:2px 10px;font-size:11px;">無資料</span>';
      if (days <= 3) return `<span class="issue-item sev low" style="padding:2px 10px;font-size:11px;">${days} 天前</span>`;
      if (days <= 7) return `<span class="issue-item sev med" style="padding:2px 10px;font-size:11px;">${days} 天前</span>`;
      return `<span class="issue-item sev high" style="padding:2px 10px;font-size:11px;">${days} 天前</span>`;
    };
    body.innerHTML = `
      <div class="tbl-wrap"><table class="data">
        <thead><tr><th>項目</th><th>狀態</th><th>說明</th></tr></thead>
        <tbody>
          <tr><td>GA4 資料最新日期</td><td>${esc(ga4Ok || '-')} ${freshBadge(ga4Days)}</td><td>超過 7 天視為異常；建議確認 BQ 排程。</td></tr>
          <tr><td>GSC 資料最新日期</td><td>${esc(gscOk || '-')} ${freshBadge(gscDays)}</td><td>GSC 通常比 GA4 慢 1–2 天。</td></tr>
          <tr><td>trends52w 完整性</td><td>${fmtNum((d.trends52w && d.trends52w.ga4 || []).length)} 週</td><td>預期 52 週；少於 40 視為不足。</td></tr>
          <tr><td>topPages 完整性</td><td>${fmtNum((d.topPages || []).length)} 頁</td><td>預期 10–30 頁（依部門）。</td></tr>
          <tr><td>topKeywords 完整性</td><td>${fmtNum((d.topKeywords || []).length)} 字</td><td>預期 20 個關鍵字。</td></tr>
          <tr><td>stalePages 清單</td><td>${fmtNum((d.stalePages || []).length)} 頁</td><td>HTTP 404 或含舊學年度的頁面，需下架或 301 轉址。</td></tr>
          <tr><td>GEO 評分</td><td>${d.geo ? '已稽核' : '<span style="color:var(--bad-fg);">未稽核</span>'}</td><td>見第 7 與 19 節。</td></tr>
        </tbody>
      </table></div>
      <div class="lead" style="margin-top:10px;">完整資料品質指標需在 <code>scripts/build_data.py</code> 加 dataQuality 區段，目前先用基本檢核。</div>`;
  }

  // ----- 19. GEO 7 question cards -----
  function renderGeoQuestions(d) {
    const body = document.getElementById('geo-questions-body');
    if (!body) return;
    const g = d.geo;
    if (!g || !g.subscores || !g.subscores.length) {
      body.innerHTML = `<div class="placeholder-box"><p><strong>本單元無 GEO 稽核資料。</strong></p><p>請確認 <code>data.json</code> 的 <code>geo</code> 欄位，或回到第 7 節查看評分。</p></div>`;
      return;
    }
    const cards = g.subscores.map(s => `
      <div class="geo-q-card ${s.score >= s.maximum * 0.7 ? 'pass' : s.score >= s.maximum * 0.4 ? 'warn' : 'fail'}">
        <div class="geo-q-label">${esc(s.id || s.label)}</div>
        <div class="geo-q-name">${esc(s.label)}</div>
        <div class="geo-q-score">${s.score} / ${s.maximum}</div>
        <div class="geo-q-note">${esc(s.note || '')}</div>
      </div>`).join('');
    body.innerHTML = `<div class="geo-q-grid">${cards}</div>
      <div class="lead" style="margin-top:10px;">稽核日期：${esc(g.auditDate || '-')} · ${esc(g.auditedUrl || '')}</div>`;
  }

  // ----- 20. Query specs -----
  function renderQuerySpecs(d) {
    const body = document.getElementById('query-specs-body');
    if (!body) return;
    body.innerHTML = `
      <div class="tbl-wrap"><table class="data">
        <thead><tr><th>BigQuery 資料表</th><th>內容</th><th>本報表採用</th><th>技術排除</th></tr></thead>
        <tbody>${QUERY_SPECS.map(s => `
          <tr>
            <td><code>${esc(s.table)}</code></td>
            <td style="font-size:13px;">${esc(s.contains)}</td>
            <td style="font-size:13px;">${esc(s.used)}</td>
            <td style="font-size:13px;color:var(--bad-fg);">${esc(s.excluded)}</td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      <div class="lead" style="margin-top:10px;">此清單為「單一資料來源」原則，確保各部門報表數字一致。新增資料表或新查詢請同步更新此區。</div>`;
  }

  // ----- Render all 11 sections into the placeholder -----
  function renderExpertSections(d) {
    const root = document.getElementById('expert-sections');
    if (!root) return;
    root.innerHTML = [
      sectionEl(10, 'anomaly', '期間比較與異常提醒', '週對週差距超過 30% 且基期足夠大的指標 — 紅色 = 嚴重異常，橘色 = 需注意。', '<div id="anomaly-body"></div>'),
      sectionEl(11, 'content-matrix', '內容效益矩陣', '以曝光 × 排名切四象限，看哪些頁面值得優先優化。', '<div id="content-matrix-body"></div>'),
      sectionEl(12, 'ai-referral', 'AI 搜尋/生成式 AI 導流', 'ChatGPT / Perplexity / Gemini 等 AI 搜尋引擎引用本站的狀況。', '<div id="ai-referral-body"></div>'),
      sectionEl(13, 'cta-funnel', '招生意圖與 CTA 行動', '點擊「報名」「簡章」「LINE」等 CTA 的分佈 — 用於優化招生頁。', '<div id="cta-funnel-body"></div>'),
      sectionEl(14, 'user-paths', '使用者路徑 / 下一步', '最常見的登陸頁 → 下一頁路徑，看使用者實際動線。', '<div id="user-paths-body"></div>'),
      sectionEl(15, 'personas', '受眾人物誌（4 種）', '針對不同族群，該提供什麼內容、常搜什麼字。', '<div id="personas-body"></div>'),
      sectionEl(16, 'marketing-funnel', '行銷漏斗與 KPI（5 階段）', '從看到 → 點擊 → 互動 → 轉換 → 推薦的全鏈路。', '<div id="marketing-funnel-body"></div>'),
      sectionEl(17, 'ai-questions', 'AI/搜尋問題庫（6 題）', '使用者最常問 AI 的問題，與你該發佈的官方答案。', '<div id="ai-questions-body"></div>'),
      sectionEl(18, 'data-quality', '資料品質問題清單', '資料新鮮度、完整性、已知偏差。', '<div id="data-quality-body"></div>'),
      sectionEl(19, 'geo-questions', 'GEO 7 問題卡', 'AI 搜尋引擎能否正確讀懂本站 — 7 個檢核項目。', '<div id="geo-questions-body"></div>'),
      sectionEl(20, 'query-specs', '查詢規格與技術排除清單', '每張 BigQuery 表的內容與「我們不採用」的技術排除。', '<div id="query-specs-body"></div>'),
    ].join('');
    renderAnomaly(d);
    renderContentMatrix(d);
    renderAiReferral(d);
    renderCtaFunnel(d);
    renderUserPaths(d);
    renderPersonas(d);
    renderMarketingFunnel(d);
    renderAiQuestions(d);
    renderDataQuality(d);
    renderGeoQuestions(d);
    renderQuerySpecs(d);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initThreeBg(); init(); });
  } else {
    initThreeBg();
    init();
  }
})();
