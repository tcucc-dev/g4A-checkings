// app.js — Vite ESM (no IIFE)

function setView(v){document.body.className='view-'+v;document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.view===v));window.scrollTo({top:0,behavior:'smooth'})}

// Expose for inline onclick handlers (Vite ESM scope is module-private)
if (typeof window !== "undefined") {
  window.setView = setView;
  window.spark = spark;
  window.evidence = evidence;
  window.issue = issue;
  window.draw = draw;
  window.init = init;
  // Geo-toggle uses inline onclick handlers in main.js; expose those too
}
function spark(v){let min=Math.min(...v),max=Math.max(...v),r=max-min||1;let pts=v.map((x,i)=>`${i*100/(v.length-1)},${32-(x-min)*28/r}`).join(' ');return `<svg viewBox="0 0 100 34" preserveAspectRatio="none"><polyline points="${pts}"/></svg>`}
function evidence(i){return `<details class="evidence"><summary>查看數據證據與定義</summary><div class="egrid"><div><strong>資料表：</strong>${i.table}</div><div><strong>查詢代碼：</strong>${i.query}</div><div><strong>欄位：</strong>${i.fields}</div><div><strong>資料期間：</strong>${i.period}</div><div><strong>資料整理：</strong>電算中心技術支援</div><div><strong>限制：</strong>${i.limit}</div><div><strong>完整證據：</strong><a class="ev-link" href="#ev-reports" onclick="setView('evidence')">前往證據報表中心</a></div></div></details>`}
function issue(i,mode){return `<div class="issue"><div class="issue-head"><div><span class="pid">${i.id}</span><div class="issue-title">${i.title}</div></div><span class="${i.p==='P1'?'p1':'p2'}">${i.p}</span></div><div class="callout ${i.p==='P1'?'warn':''}"><strong>主管影響：</strong>${i.manager}</div><div class="owners">${mode!=='it'?`<div class="owner unitbox"><strong>單位網站管理人</strong><br>頁面：${i.pages}<ul class="clean">${i.web.map(x=>`<li>${x}</li>`).join('')}</ul><strong>驗收：</strong>${i.accept}</div>`:''}${mode!=='web'?`<div class="owner itbox"><strong>電算中心技術支援</strong><ul class="clean">${i.it.map(x=>`<li>${x}</li>`).join('')}</ul><strong>狀態：</strong>${i.status}</div>`:''}</div>${evidence(i)}</div>`}
function draw(id,labels,series,colors){const c=document.getElementById(id),dpr=window.devicePixelRatio||1,w=c.clientWidth,h=240;c.width=w*dpr;c.height=h*dpr;let x=c.getContext('2d');x.scale(dpr,dpr);x.clearRect(0,0,w,h);let m={l:44,r:14,t:16,b:30},iw=w-m.l-m.r,ih=h-m.t-m.b,all=series.flat(),min=Math.min(...all),max=Math.max(...all);if(min===max){min=0;max=max||1}let pad=(max-min)*.08;min=Math.max(0,min-pad);max+=pad;for(let i=0;i<5;i++){let yy=m.t+i*ih/4;x.strokeStyle='#e7edf3';x.beginPath();x.moveTo(m.l,yy);x.lineTo(w-m.r,yy);x.stroke();x.fillStyle='#667085';x.font='11px Arial';x.textAlign='right';x.fillText(Math.round(max-i*(max-min)/4),m.l-7,yy+4)}labels.forEach((lab,i)=>{x.fillStyle='#667085';x.textAlign='center';x.fillText(lab,m.l+i*iw/(labels.length-1),h-8)});series.forEach((s,si)=>{x.strokeStyle=colors[si];x.lineWidth=3;x.beginPath();s.forEach((v,i)=>{let xx=m.l+i*iw/(labels.length-1),yy=m.t+ih-(v-min)*ih/(max-min);i?x.lineTo(xx,yy):x.moveTo(xx,yy)});x.stroke()})}
function renderAudience(){
  const a=WEBINSIGHT.DATA.audience;
  if(!a) return;
  const total = a.total || a.source.reduce(function(s,r){return s+(r.sessions||0);}, 0);
  // Source
  const sourceEl = document.getElementById('audienceSource');
  if(sourceEl){
    const html = a.source.map(function(r){
      const pct = total ? Math.round((r.sessions||0)*1000/total)/10 : 0;
      const color = r.medium==='organic' ? 'teal' : (r.medium==='internal' ? 'orange' : (r.medium==='other' ? 'gray' : ''));
      const width = pct>0 ? pct : 0.1;
      return '<div class="bar-row"><span>' + r.name + '</span><div class="bar-track"><div class="bar ' + color + '" style="width:' + width + '%"></div></div><div class="bar-value">' + (r.sessions||0) + '｜' + pct + '%</div></div>';
    }).join('');
    sourceEl.innerHTML = html;
  }
  // Device
  const deviceEl = document.getElementById('audienceDevice');
  if(deviceEl){
    const colors = ['#2f6fed','#0f8b8d','#d97706'];
    let acc = 0;
    const segments = a.device.map(function(r,i){
      const pct = total ? Math.round((r.sessions||0)*1000/total)/10 : 0;
      const start = acc;
      acc += pct;
      return colors[i%3] + ' ' + start + '% ' + acc + '%';
    }).join(', ');
    const used = acc;
    const finalGradient = segments + ', #f4f7fb ' + used + '% 100%';
    const labelMap = {desktop:'桌機', mobile:'手機', tablet:'平板'};
    let legend = '';
    a.device.forEach(function(r){
      const pct = total ? Math.round((r.sessions||0)*1000/total)/10 : 0;
      const label = labelMap[r.name] || r.name;
      legend += '<div><span>' + label + '</span><b>' + (r.sessions||0) + '｜' + pct + '%</b></div>';
    });
    deviceEl.innerHTML = '<div class="donut-wrap"><div class="donut" style="background:conic-gradient(' + finalGradient + ')" aria-label="device"><div class="donut-center">' + total + '<br>工作階段</div></div><div class="donut-legend">' + legend + '</div></div>';
  }
  // Country
  const countryEl = document.getElementById('audienceCountry');
  if(countryEl){
    countryEl.innerHTML = a.country.map(function(r){
      const pct = total ? Math.round((r.sessions||0)*1000/total)/10 : 0;
      const color = r.name==='臺灣' ? 'green' : (r.name==='其他國家' ? 'gray' : 'teal');
      const width = pct>0 ? pct : 0.1;
      return '<div class="bar-row"><span>' + r.name + '</span><div class="bar-track"><div class="bar ' + color + '" style="width:' + width + '%"></div></div><div class="bar-value">' + (r.sessions||0) + '｜' + pct + '%</div></div>';
    }).join('');
  }
}
function init(){document.getElementById('kpis').innerHTML=WEBINSIGHT.DATA.kpis.map(k=>`<div class="metric"><div class="k">${k.k}</div><div class="v">${k.v}</div><div class="trend ${k.up?'up':'down'}">${k.trend} 較前週｜${k.avg} 較八週平均</div><div>${k.desc}</div><div class="spark">${spark(k.spark)}</div><div class="source">來源：${k.src}</div></div>`).join('');document.getElementById('decisions').innerHTML=WEBINSIGHT.DATA.decisions.map(d=>`<div class="decision"><div><span class="${d.p==='P1'?'p1':'p2'}">${d.p}</span><br><span class="pid">${d.id}</span></div><div><strong>${d.title}</strong><br>${d.reason}</div><div class="who"><span class="tag unit">主責：${d.who}</span><br><span class="tag it">${d.support}</span><br>期限：${d.due}</div></div>`).join('');document.getElementById('webIssues').innerHTML=WEBINSIGHT.DATA.issues.filter(i=>i.pages!=='無需修改頁面').map(i=>issue(i,'web')).join('');document.getElementById('commonIssues').innerHTML=WEBINSIGHT.DATA.issues.map(i=>issue(i,'all')).join('');document.getElementById('webTable').innerHTML=WEBINSIGHT.DATA.webRows.map(r=>`<tr><td><span class="pid">${r[0]}</span></td><td>${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`).join('');document.getElementById('quality').innerHTML=WEBINSIGHT.DATA.quality.map(q=>`<div class="metric"><div class="k"><code>${q[0]}</code></div><div class="v" style="font-size:23px">${q[2]}</div><div>最大資料日期：${q[1]}</div><div class="source">${q[3]}</div></div>`).join('');document.getElementById('queryTable').innerHTML=WEBINSIGHT.DATA.queries.map(q=>`<tr><td><code>${q[0]}</code></td><td><code>${q[1]}</code></td><td>${q[2]}</td><td>${q[3]}</td><td>${q[4]}</td><td>${q[5]}</td></tr>`).join('');draw('trafficChart',WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.traffic.a,WEBINSIGHT.DATA.traffic.b],['#1d6fd8','#0f766e']);draw('searchChart',WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.search.a,WEBINSIGHT.DATA.search.b],['#1d6fd8','#0f766e']);draw('funnelChart',WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.funnel.a,WEBINSIGHT.DATA.funnel.b,WEBINSIGHT.DATA.funnel.c],['#1d6fd8','#0f766e','#a35b00'])}window.addEventListener('resize',()=>{draw('trafficChart',WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.traffic.a,WEBINSIGHT.DATA.traffic.b],['#1d6fd8','#0f766e']);draw('searchChart',WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.search.a,WEBINSIGHT.DATA.search.b],['#1d6fd8','#0f766e']);draw('funnelChart',WEBINSIGHT.DATA.weeks,[WEBINSIGHT.DATA.funnel.a,WEBINSIGHT.DATA.funnel.b,WEBINSIGHT.DATA.funnel.c],['#1d6fd8','#0f766e','#a35b00'])});renderAudience();
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

// Chart renderers for section 4 (尚未呈現，但主管應看的報表)
// 9 chart types from prompt 10 spec — vanilla Canvas API

// ─── Shared utilities ────────────────────────────────────
const CC = {blue:"#2f6fed", teal:"#0f8b8d", orange:"#d97706", green:"#1d8a5a", red:"#c2413b", gray:"#7b8797", navy:"#15334a", muted:"#647581", line:"#dce5e9"};
const CM = {t:20, r:80, b:36, l:64};
const dpr = window.devicePixelRatio || 1;

function resizeCanvas(c, h) {
  if (!c) return null;
  const w = c.clientWidth || 600;
  c.width = w * dpr;
  c.height = h * dpr;
  c.style.height = h + 'px';
  const ctx = c.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return {ctx: ctx, w: w, h: h};
}

function setFont(ctx, size, bold, color) {
  ctx.font = (bold ? 'bold ' : '') + size + 'px "Microsoft JhengHei", -apple-system, sans-serif';
  if (color) ctx.fillStyle = color;
}

function plotBox(w, h, m) {
  return {x: m.l, y: m.t, w: w - m.l - m.r, h: h - m.t - m.b};
}

function drawAxes(ctx, box, yMin, yMax, ySteps, xLabels, xTickStep) {
  ctx.strokeStyle = CC.line;
  ctx.lineWidth = 1;
  setFont(ctx, 10, false, CC.muted);
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  for (let i = 0; i <= ySteps; i++) {
    const v = yMin + (yMax - yMin) * i / ySteps;
    const y = box.y + box.h - (v - yMin) / (yMax - yMin) * box.h;
    ctx.beginPath();
    ctx.moveTo(box.x, y);
    ctx.lineTo(box.x + box.w, y);
    ctx.stroke();
    ctx.fillText(Math.round(v).toLocaleString(), box.x - 8, y);
  }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  const step = xTickStep || 1;
  for (let i = 0; i < xLabels.length; i += step) {
    const x = box.x + (xLabels.length === 1 ? box.w / 2 : i / (xLabels.length - 1) * box.w);
    ctx.fillText(xLabels[i], x, box.y + box.h + 8);
  }
}

function insightHtml(text) {
  return '<strong>主管判讀：</strong>' + text;
}

// ─── 1. Line chart: 期間比較 ──────────────────────────────
function renderTrends() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.trends;
  if (!data || !data.length) return;
  const c = document.getElementById('chartTrends');
  const out = resizeCanvas(c, 240);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const labels = data.map(d => d.week);
  const sessionsArr = data.map(d => d.sessions);
  const clicksArr = data.map(d => d.clicks);
  const maxV = Math.max(...sessionsArr, ...clicksArr);
  const yMax = Math.ceil(maxV * 1.15);
  const last = data[data.length-1];
  const prev = data[data.length-2];
  const sessionsDelta = prev.sessions ? ((last.sessions - prev.sessions) * 100 / prev.sessions) : 0;
  const clicksDelta = prev.clicks ? ((last.clicks - prev.clicks) * 100 / prev.clicks) : 0;
  drawAxes(ctx, box, 0, yMax, 4, labels, 1);
  const xy = (v, i) => ({x: box.x + (data.length === 1 ? box.w/2 : i / (data.length-1) * box.w), y: box.y + box.h - (v / yMax) * box.h});
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = CC.blue;
  ctx.beginPath();
  sessionsArr.forEach((v, i) => { const p = xy(v, i); i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
  ctx.stroke();
  ctx.strokeStyle = CC.orange;
  ctx.beginPath();
  clicksArr.forEach((v, i) => { const p = xy(v, i); i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
  ctx.stroke();
  setFont(ctx, 11, true);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  [sessionsArr, clicksArr].forEach((arr, idx) => {
    const p = xy(arr[arr.length-1], arr.length-1);
    ctx.fillStyle = idx === 0 ? CC.blue : CC.orange;
    ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, 6.3); ctx.fill();
    ctx.fillStyle = CC.navy;
    ctx.fillText(arr[arr.length-1], p.x, p.y - 8);
  });
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillStyle = CC.blue; ctx.fillRect(box.x, box.y - 18, 14, 3);
  ctx.fillStyle = CC.navy; ctx.fillText('工作階段', box.x + 20, box.y - 17);
  ctx.fillStyle = CC.orange; ctx.fillRect(box.x + 100, box.y - 18, 14, 3);
  ctx.fillStyle = CC.navy; ctx.fillText('GSC 點擊', box.x + 120, box.y - 17);
  const hasAnomaly = Math.abs(sessionsDelta) > 15;
  const scEl = document.getElementById('scorecard-trends');
  if (scEl) {
    scEl.innerHTML = [
      ['本週 sessions', last.sessions, sessionsDelta, 'blue'],
      ['本週 GSC 點擊', last.clicks, clicksDelta, 'orange'],
      ['本週 曝光', last.impressions, prev.impressions ? ((last.impressions-prev.impressions)*100/prev.impressions) : 0, 'teal'],
      ['本週 使用者', last.users, prev.users ? ((last.users-prev.users)*100/prev.users) : 0, 'green']
    ].map(([label, val, delta, color]) => {
      const sign = delta > 0 ? '+' : '';
      const cls = Math.abs(delta) > 15 ? 'warn' : color;
      return '<div class="scorecard ' + cls + '"><div class="sc-label">' + label + '</div><div class="sc-value">' + val.toLocaleString() + '</div><div class="sc-delta">' + sign + delta.toFixed(1) + '%</div></div>';
    }).join('');
  }
  const insight = hasAnomaly ?
    '本週工作階段 ' + sessionsDelta.toFixed(1) + '% 是異常變化（>±15%），需確認是否有促因（招生季、課程異動、新聞事件）。GSC 點擊 ' + clicksDelta.toFixed(1) + '% — 一併注意搜尋成效是否同步變化。' :
    '本週工作階段與搜尋點擊變動 < ±15%，屬正常波動。整體流量在 8 週內維持穩定，沒有大幅異常。';
  document.getElementById('insight-trends').innerHTML = insightHtml(insight);
}

// ─── 3. 100% Stacked Bar Chart: 品牌 vs 非品牌 ────────────────
function renderBrandSplit() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.brand_split;
  const brandTop = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.brand_top10;
  const nonbrandTop = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.nonbrand_top10;
  if (!data || !data.length) return;
  const c = document.getElementById('chartBrandSplit');
  const out = resizeCanvas(c, 240);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const barCount = data.length;
  const barW = (box.w / barCount) * 0.6;
  const gap = (box.w / barCount) * 0.4;
  data.forEach((d, i) => {
    const x = box.x + i * (barW + gap) + gap / 2;
    const y0 = box.y + box.h;
    const hBrand = (d.brand_pct / 100) * box.h;
    const hNon = (d.nonbrand_pct / 100) * box.h;
    ctx.fillStyle = CC.blue;
    ctx.fillRect(x, y0 - hBrand, barW, hBrand);
    ctx.fillStyle = CC.gray;
    ctx.fillRect(x, y0 - hBrand - hNon, barW, hNon);
    setFont(ctx, 12, true, CC.navy);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(d.month, x + barW/2, y0 + 6);
    setFont(ctx, 11, true, '#fff');
    ctx.textBaseline = 'middle';
    ctx.fillText(d.brand_pct + '%', x + barW/2, y0 - hBrand/2);
    ctx.fillText(d.nonbrand_pct + '%', x + barW/2, y0 - hBrand - hNon/2);
  });
  ctx.fillStyle = CC.blue; ctx.fillRect(box.x, box.y - 18, 14, 10);
  setFont(ctx, 11, false, CC.navy); ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('品牌詞曝光', box.x + 20, box.y - 13);
  ctx.fillStyle = CC.gray; ctx.fillRect(box.x + 110, box.y - 18, 14, 10);
  ctx.fillText('非品牌詞曝光', box.x + 130, box.y - 13);
  function renderTop10(items, target) {
    if (!items || !items.length) {
      document.getElementById(target).innerHTML = '<tr><td colspan="3">無資料</td></tr>';
      return;
    }
    document.getElementById(target).innerHTML = '<thead><tr><th>關鍵字</th><th class="num">曝光</th><th class="num">點擊</th></tr></thead><tbody>' +
      items.map(r => '<tr><td>' + (r.query || '(空白)') + '</td><td class="num">' + (r.imp || 0).toLocaleString() + '</td><td class="num">' + (r.clicks || 0) + '</td></tr>').join('') + '</tbody>';
  }
  renderTop10(brandTop, 'tableBrandTop');
  renderTop10(nonbrandTop, 'tableNonBrandTop');
  const latest = data[data.length - 1];
  document.getElementById('insight-brand').innerHTML = insightHtml(
    '本月品牌詞曝光 ' + latest.brand_pct + '% / 非品牌 ' + latest.nonbrand_pct + '%。' +
    (latest.nonbrand_pct > 80 ? '非品牌流量超過 80%，代表陌生訪客透過一般需求找到本站 — 是 SEO/廣告投入的好兆頭。' :
     latest.brand_pct > 30 ? '品牌詞曝光偏高 (>30%)，需觀察是否過度依賴既有知名度。' :
     '品牌 vs 非品牌比例平衡，建議持續優化兩端。')
  );
}

// ─── 4. Scatter / Quadrant: 內容效益矩陣 ──────────────────
function renderContentMatrix() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.content_matrix;
  if (!data || !data.length) return;
  const c = document.getElementById('chartContentMatrix');
  const out = resizeCanvas(c, 320);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const maxUsers = Math.max(...data.map(d => d.users));
  const maxEng = Math.max(...data.map(d => d.eng_sec));
  const midX = box.x + box.w / 2;
  const midY = box.y + box.h / 2;
  ctx.fillStyle = 'rgba(31,138,90,0.05)'; ctx.fillRect(midX, box.y, box.w/2, box.h/2);
  ctx.fillStyle = 'rgba(217,119,6,0.05)'; ctx.fillRect(box.x, box.y, box.w/2, box.h/2);
  ctx.fillStyle = 'rgba(217,119,6,0.07)'; ctx.fillRect(midX, midY, box.w/2, box.h/2);
  ctx.fillStyle = 'rgba(194,65,59,0.05)'; ctx.fillRect(box.x, midY, box.w/2, box.h/2);
  ctx.strokeStyle = CC.line; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(box.x, box.y); ctx.lineTo(box.x, box.y + box.h); ctx.lineTo(box.x + box.w, box.y + box.h); ctx.stroke();
  ctx.strokeStyle = CC.muted; ctx.setLineDash([3, 3]);
  ctx.beginPath(); ctx.moveTo(midX, box.y); ctx.lineTo(midX, box.y + box.h); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(box.x, midY); ctx.lineTo(box.x + box.w, midY); ctx.stroke();
  ctx.setLineDash([]);
  setFont(ctx, 11, false, CC.muted); ctx.textBaseline = 'top'; ctx.textAlign = 'center';
  ctx.fillText('← 使用者少', box.x + box.w * 0.25, box.y + box.h + 22);
  ctx.fillText('使用者多 →', box.x + box.w * 0.75, box.y + box.h + 22);
  ctx.save(); ctx.translate(box.x - 36, midY); ctx.rotate(-Math.PI/2);
  ctx.fillText('互動時間低 →', 0, 0); ctx.restore();
  data.forEach(d => {
    const x = box.x + (d.users / maxUsers) * box.w;
    const y = box.y + box.h - (d.eng_sec / Math.max(maxEng, 1)) * box.h;
    const r = 4 + Math.sqrt(d.users) * 1.5;
    let color;
    if (d.users > maxUsers / 2 && d.eng_sec > maxEng / 2) color = CC.green;
    else if (d.users > maxUsers / 2) color = CC.orange;
    else if (d.eng_sec > maxEng / 2) color = CC.teal;
    else color = CC.gray;
    ctx.fillStyle = color; ctx.globalAlpha = 0.6;
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.3); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
    if (d.users >= 8) {
      setFont(ctx, 9, false, CC.navy); ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText((d.title || '').slice(0, 12), x + r + 2, y);
    }
  });
  setFont(ctx, 10, true, CC.muted); ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('↑ 高互動 / 使用者少\n內容好但難找', box.x + box.w * 0.25, box.y + 4);
  ctx.fillText('↑ 高互動 / 使用者多\n   內容旗艦', box.x + box.w * 0.75, box.y + 4);
  ctx.fillText('↓ 低互動 / 使用者多\n需改善 CTA', box.x + box.w * 0.75, box.y + box.h - 30);
  ctx.fillText('↓ 低互動 / 使用者少\n評估是否保留', box.x + box.w * 0.25, box.y + box.h - 30);

  const sorted = [...data].sort((a,b) => b.users - a.users).slice(0, 12);
  document.getElementById('tableContentList').innerHTML =
    '<thead><tr><th>頁面</th><th class="num">使用者</th><th class="num">互動(s)</th></tr></thead><tbody>' +
    sorted.map(d => '<tr><td>' + (d.title || '?') + '</td><td class="num">' + d.users + '</td><td class="num">' + (d.eng_sec || 0).toFixed(0) + '</td></tr>').join('') + '</tbody>';
  const top = sorted[0];
  document.getElementById('insight-content').innerHTML = insightHtml(
    '本週最高流量頁面為「' + top.title + '」（' + top.users + ' 人，互動 ' + top.eng_sec.toFixed(0) + ' 秒）。' +
    '建議把該頁作為首頁導流入口，並觀察「互動高 / 流量低」象限的隱藏優質頁面以加強導引。'
  );
}

// ─── 5. Horizontal Grouped Bar: 流量來源品質 ──────────────
function renderTrafficQuality() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.traffic_quality;
  if (!data || !data.length) return;
  function drawBar(canvasId, getValue, maxV, suffix, color) {
    const c = document.getElementById(canvasId);
    const out = resizeCanvas(c, 240);
    if (!out) return;
    const {ctx, w, h} = out;
    ctx.clearRect(0, 0, w, h);
    const box = plotBox(w, h, CM);
    const itemH = box.h / data.length;
    const barH = itemH * 0.7;
    data.forEach((d, i) => {
      const v = getValue(d);
      const y = box.y + i * itemH + (itemH - barH) / 2;
      const barW = (v / maxV) * box.w;
      ctx.fillStyle = color;
      ctx.fillRect(box.x, y, barW, barH);
      setFont(ctx, 12, false, CC.navy); ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText(d.source, box.x - 8, y + barH / 2);
      setFont(ctx, 11, true, CC.navy); ctx.textAlign = 'left';
      ctx.fillText((v || 0).toFixed(0) + suffix, box.x + barW + 4, y + barH / 2);
    });
    setFont(ctx, 9, false, CC.muted); ctx.textBaseline = 'top'; ctx.textAlign = 'center';
    for (let i = 1; i <= 4; i++) {
      const x = box.x + (i / 4) * box.w;
      const v = (i / 4) * maxV;
      ctx.strokeStyle = '#eef1f5'; ctx.beginPath(); ctx.moveTo(x, box.y); ctx.lineTo(x, box.y + box.h); ctx.stroke();
      ctx.fillText(Math.round(v).toLocaleString(), x, box.y + box.h + 4);
    }
  }
  const maxSessions = Math.max(...data.map(d => d.sessions));
  const maxEng = Math.max(...data.map(d => d.avg_eng_sec));
  drawBar('chartTrafficCount', d => d.sessions, maxSessions, '', CC.blue);
  drawBar('chartTrafficEng', d => d.avg_eng_sec, maxEng, 's', CC.teal);
  const topSession = data[0];
  const topEng = [...data].sort((a,b) => b.avg_eng_sec - a.avg_eng_sec)[0];
  document.getElementById('insight-traffic').innerHTML = insightHtml(
    '量最大來源「' + topSession.source + '」(' + topSession.sessions + ' 工作階段)，' +
    '互動最佳來源「' + topEng.source + '」(' + topEng.avg_eng_sec.toFixed(0) + ' 秒/使用者)。' +
    (topSession.source !== topEng.source ? '兩者不同 → 應思考是否要把「互動最佳」來源加大曝光。' : '兩者一致 → 主要流量來源品質良好。')
  );
}

// ─── 6. AI Referrals ───────────────────────────────────────
function renderAI() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.ai_timeseries;
  const platforms = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.ai_platforms;
  if (!data || !data.length) return;
  const c = document.getElementById('chartAITime');
  const out = resizeCanvas(c, 240);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const labels = data.map(d => (d.date || '').slice(5));
  const vals = data.map(d => d.sessions);
  const maxV = Math.max(...vals, 1);
  const yMax = Math.ceil(maxV * 1.2);
  drawAxes(ctx, box, 0, yMax, 4, labels, 1);
  const xy = (v, i) => ({x: box.x + (data.length === 1 ? box.w/2 : i / (data.length-1) * box.w), y: box.y + box.h - (v / yMax) * box.h});
  ctx.strokeStyle = CC.orange; ctx.lineWidth = 2.5;
  ctx.beginPath();
  vals.forEach((v, i) => { const p = xy(v, i); i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
  ctx.stroke();
  vals.forEach((v, i) => {
    const p = xy(v, i);
    ctx.fillStyle = CC.orange; ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, 6.3); ctx.fill();
  });
  setFont(ctx, 11, true, CC.navy); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText(vals[vals.length-1], xy(vals[vals.length-1], vals.length-1).x, xy(vals[vals.length-1], vals.length-1).y - 8);
  if (platforms && platforms.length) {
    document.getElementById('tableAIPlatforms').innerHTML =
      '<thead><tr><th>平台</th><th class="num">Sessions</th><th class="num">使用者</th><th class="num">平均互動</th></tr></thead><tbody>' +
      platforms.map(p => '<tr><td>' + p.platform + '</td><td class="num">' + p.sessions + '</td><td class="num">' + p.users + '</td><td class="num">' + p.avg_eng_sec.toFixed(0) + 's</td></tr>').join('') + '</tbody>';
  } else {
    document.getElementById('tableAIPlatforms').innerHTML = '<tr><td colspan="4">本週無 AI 來源流量</td></tr>';
  }
  const total = vals.reduce((s,v) => s+v, 0);
  document.getElementById('insight-ai').innerHTML = insightHtml(
    '近 ' + data.length + ' 天 AI 來源 (ChatGPT/Perplexity 等) 合計 ' + total + ' 工作階段。' +
    (total === 0 ? '目前 AI 流量規模小，建議觀察 1–2 個月後再判斷趨勢。' :
     total < 5 ? 'AI 流量剛起步，需持續監控是否會成為主要來源。' :
     'AI 導流已可見趨勢，建議把 AI 推薦到達的 Top 頁面檢查內容時效性與 CTA。')
  );
}

// ─── 7. CTA Funnel ────────────────────────────────────────
function renderCTAFunnel() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.cta_funnel;
  if (!data || !data.length) return;
  const c = document.getElementById('chartCTAFunnel');
  const out = resizeCanvas(c, 280);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const maxV = data[0].sessions;
  const itemH = box.h / data.length;
  data.forEach((d, i) => {
    const ratio = d.sessions / maxV;
    const y = box.y + i * itemH + 6;
    const barW = box.w * ratio;
    const barH = itemH - 12;
    const xCenter = box.x + box.w / 2;
    const wTop = barW;
    const wBot = (i < data.length - 1) ? box.w * (data[i+1].sessions / maxV) : barW * 0.85;
    ctx.fillStyle = i === 0 ? CC.blue : (i === data.length-1 ? CC.green : CC.teal);
    ctx.beginPath();
    ctx.moveTo(xCenter - wTop/2, y);
    ctx.lineTo(xCenter + wTop/2, y);
    ctx.lineTo(xCenter + wBot/2, y + barH);
    ctx.lineTo(xCenter - wBot/2, y + barH);
    ctx.closePath();
    ctx.fill();
    setFont(ctx, 13, true, '#fff'); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(d.cta_type + ' — ' + d.sessions + ' (' + ((d.sessions/maxV)*100).toFixed(0) + '%)', xCenter, y + barH/2);
  });
  const top = data[0]; const bot = data[data.length-1];
  document.getElementById('insight-cta').innerHTML = insightHtml(
    '主要 CTA 動作：「' + top.cta_type + '」(最高 ' + top.sessions + ' 次)。最低轉換：「' + bot.cta_type + '」(' + bot.sessions + ' 次)。' +
    '若下載文件 (PDF/DOC/XLSX) 點擊高，建議確認下載連結仍正常運作；若 Email/表單點擊偏低，需檢查聯絡表單是否易於填寫。'
  );
}

// ─── 8. International Quality ────────────────────────────
function renderInternational() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.international;
  if (!data || !data.length) return;
  const c = document.getElementById('chartIntl');
  const out = resizeCanvas(c, 280);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const itemH = box.h / data.length;
  const maxSessions = Math.max(...data.map(d => d.sessions));
  const maxEng = Math.max(...data.map(d => d.avg_eng_sec));
  data.forEach((d, i) => {
    const y = box.y + i * itemH + 4;
    const barH = (itemH - 8) * 0.55;
    const wSess = (d.sessions / maxSessions) * box.w * 0.85;
    ctx.fillStyle = CC.blue;
    ctx.fillRect(box.x, y, wSess, barH);
    const wEng = (d.avg_eng_sec / maxEng) * box.w * 0.85;
    ctx.fillStyle = CC.teal;
    ctx.fillRect(box.x, y + barH + 4, wEng, barH * 0.5);
    setFont(ctx, 12, false, CC.navy); ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    ctx.fillText(d.country, box.x - 8, y + barH);
    setFont(ctx, 10, false, CC.navy); ctx.textAlign = 'left';
    ctx.fillText(d.sessions + ' sessions', box.x + wSess + 4, y + barH / 2);
    ctx.fillText(d.avg_eng_sec.toFixed(0) + 's avg', box.x + wEng + 4, y + barH + 4 + barH * 0.25);
  });
  ctx.fillStyle = CC.blue; ctx.fillRect(box.x, box.y - 18, 14, 8);
  setFont(ctx, 10, false, CC.navy); ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
  ctx.fillText('工作階段 (sessions)', box.x + 20, box.y - 14);
  ctx.fillStyle = CC.teal; ctx.fillRect(box.x + 160, box.y - 18, 14, 8);
  ctx.fillText('平均互動時間 (s)', box.x + 180, box.y - 14);
  const top = data[0];
  const nonTaiwanSessions = data.filter(d => d.country !== 'Taiwan').reduce((s,d) => s+d.sessions, 0);
  const totalSessions = data.reduce((s,d) => s+d.sessions, 0);
  const nonTaiwanPct = totalSessions > 0 ? (nonTaiwanSessions / totalSessions * 100) : 0;
  document.getElementById('insight-intl').innerHTML = insightHtml(
    '主要訪客來源國家：「' + top.country + '」（' + top.sessions + ' 工作階段，平均 ' + top.avg_eng_sec.toFixed(0) + ' 秒）。' +
    '非本國流量合計 ' + nonTaiwanSessions + ' 工作階段，佔 ' + nonTaiwanPct.toFixed(1) + '%。'
  );
}

// ─── 9. Sankey Diagram: User Paths ─────────────────────────
function renderSankey() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.user_paths;
  if (!data || !data.length) return;
  const c = document.getElementById('chartSankey');
  const out = resizeCanvas(c, 320);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const stages = [[], [], []];
  data.forEach(d => {
    if (d.stage1 && !stages[0].includes(d.stage1)) stages[0].push(d.stage1);
    if (d.stage2 && !stages[1].includes(d.stage2)) stages[1].push(d.stage2);
    if (d.stage3 && !stages[2].includes(d.stage3)) stages[2].push(d.stage3);
  });
  const col1 = {}; const col2 = {}; const col3 = {};
  data.forEach(d => {
    col1[d.stage1] = (col1[d.stage1] || 0) + d.sessions;
    if (d.stage2) col2[d.stage2] = (col2[d.stage2] || 0) + d.sessions;
    if (d.stage3) col3[d.stage3] = (col3[d.stage3] || 0) + d.sessions;
  });
  const maxCol = Math.max(...Object.values(col1));
  const colX = [CM.l, w / 2, w - CM.r];
  const nodeW = 12;
  const totalH = h - CM.t - CM.b - 20;
  const pos = [{}, {}, {}];
  [stages[0], stages[1], stages[2]].forEach((items, idx) => {
    const colT = [col1, col2, col3][idx];
    let cumY = CM.t + 10;
    items.forEach(item => {
      const nh = (colT[item] / maxCol) * totalH * 0.9;
      pos[idx][item] = {y: cumY, h: nh, value: colT[item]};
      cumY += nh + 4;
    });
  });
  const offset12 = {}, offset23 = {};
  data.slice(0, 8).forEach(d => {
    if (!offset12[d.stage1]) offset12[d.stage1] = 0;
    if (!offset12[d.stage2]) offset12[d.stage2] = 0;
    if (!offset23[d.stage2]) offset23[d.stage2] = 0;
    if (!offset23[d.stage3]) offset23[d.stage3] = 0;
  });
  data.slice(0, 8).forEach(d => {
    const s = pos[0][d.stage1];
    const t = pos[1][d.stage2];
    if (!s || !t) return;
    const sFrac = offset12[d.stage1] / col1[d.stage1];
    const sOffsetY = s.y + sFrac * s.h;
    const sLinkH = (d.sessions / col1[d.stage1]) * s.h;
    const tFrac = offset12[d.stage2] / col2[d.stage2];
    const tOffsetY = t.y + tFrac * t.h;
    const tLinkH = (d.sessions / col2[d.stage2]) * t.h;
    ctx.strokeStyle = CC.blue;
    ctx.globalAlpha = 0.25;
    ctx.lineWidth = Math.max(1, d.sessions * 0.3);
    ctx.beginPath();
    ctx.moveTo(colX[0] + nodeW, sOffsetY + sLinkH / 2);
    ctx.bezierCurveTo(colX[0] + (colX[1] - colX[0]) / 2, sOffsetY + sLinkH / 2, colX[1] - (colX[1] - colX[0]) / 2, tOffsetY + tLinkH / 2, colX[1], tOffsetY + tLinkH / 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
    offset12[d.stage1] += d.sessions;
    offset12[d.stage2] += d.sessions;
  });
  data.slice(0, 8).forEach(d => {
    if (!d.stage3) return;
    const s = pos[1][d.stage2];
    const t = pos[2][d.stage3];
    if (!s || !t) return;
    const sFrac = offset23[d.stage2] / col2[d.stage2];
    const sOffsetY = s.y + sFrac * s.h;
    const sLinkH = (d.sessions / col2[d.stage2]) * s.h;
    const tFrac = offset23[d.stage3] / col3[d.stage3];
    const tOffsetY = t.y + tFrac * t.h;
    const tLinkH = (d.sessions / col3[d.stage3]) * t.h;
    ctx.strokeStyle = CC.teal;
    ctx.globalAlpha = 0.25;
    ctx.lineWidth = Math.max(1, d.sessions * 0.3);
    ctx.beginPath();
    ctx.moveTo(colX[1] + nodeW, sOffsetY + sLinkH / 2);
    ctx.bezierCurveTo(colX[1] + (colX[2] - colX[1]) / 2, sOffsetY + sLinkH / 2, colX[2] - (colX[2] - colX[1]) / 2, tOffsetY + tLinkH / 2, colX[2], tOffsetY + tLinkH / 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
    offset23[d.stage2] += d.sessions;
    offset23[d.stage3] += d.sessions;
  });
  [0,1,2].forEach(idx => {
    const items = stages[idx];
    const col = pos[idx];
    const x = colX[idx];
    const color = idx === 0 ? CC.blue : (idx === 1 ? CC.teal : CC.green);
    items.forEach(item => {
      if (!col[item]) return;
      ctx.fillStyle = color;
      ctx.fillRect(x, col[item].y, nodeW, col[item].h);
      setFont(ctx, 11, false, CC.navy); ctx.textAlign = idx === 2 ? 'left' : 'right'; ctx.textBaseline = 'middle';
      const labelX = idx === 2 ? x + nodeW + 4 : x - 4;
      ctx.fillText(((item || '').slice(0, 18) + ' (' + col[item].value + ')'), labelX, col[item].y + col[item].h / 2);
    });
  });
  document.getElementById('insight-paths').innerHTML = insightHtml(
    '主要三段路徑：' + (data[0].stage1 || '?') + ' → ' + (data[0].stage2 || '?') + ' → ' + (data[0].stage3 || '?') + ' (' + data[0].sessions + ' sessions)。' +
    '最常被拜訪的入口頁是「' + stages[0].sort((a,b) => col1[b] - col1[a])[0] + '」，建議評估此頁的 CTA 是否引導到高互動的內容頁。'
  );
}

// ─── 10. Stacked Column: Data Quality ─────────────────────
function renderDataQuality() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.data_quality;
  if (!data || !data.weeks || !data.weeks.length) return;
  const c = document.getElementById('chartDataQuality');
  const out = resizeCanvas(c, 240);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const cats = ['empty_title', 'old_domain', 'dup_url', 'no_session', 'unknown_source'];
  const labels = {empty_title:'空白標題', old_domain:'舊網域', dup_url:'URL 重複', no_session:'無 sessions', unknown_source:'未知來源'};
  const colors = [CC.red, CC.orange, CC.blue, CC.gray, CC.teal];
  const totals = data.weeks.map((w, i) => cats.reduce((s,c) => s + ((data.categories[c] || [])[i] || 0), 0));
  const maxV = Math.max(...totals, 1);
  const yMax = Math.ceil(maxV * 1.15);
  const barW = (box.w / data.weeks.length) * 0.65;
  const gap = (box.w / data.weeks.length) * 0.35;
  drawAxes(ctx, box, 0, yMax, 4, data.weeks, 1);
  data.weeks.forEach((w, i) => {
    let cumY = box.y + box.h;
    const x = box.x + i * (barW + gap) + gap / 2;
    cats.forEach((cat, j) => {
      const v = ((data.categories[cat] || [])[i] || 0);
      if (v === 0) return;
      const segH = (v / yMax) * box.h;
      ctx.fillStyle = colors[j];
      ctx.fillRect(x, cumY - segH, barW, segH);
      cumY -= segH;
    });
    setFont(ctx, 11, true, CC.navy); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    if (totals[i] > 0) ctx.fillText(totals[i], x + barW/2, box.y + box.h - (totals[i]/yMax)*box.h - 4);
  });
  cats.forEach((cat, i) => {
    const lx = box.x + (i * 95);
    ctx.fillStyle = colors[i]; ctx.fillRect(lx, box.y - 18, 14, 8);
    setFont(ctx, 10, false, CC.navy); ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    ctx.fillText(labels[cat], lx + 18, box.y - 14);
  });
  const latest = totals[totals.length - 1];
  const trend = totals.slice(-3);
  document.getElementById('insight-dq').innerHTML = insightHtml(
    '本週問題總數 ' + latest + ' 件。近 3 週趨勢：' + trend.join(' → ') + '。' +
    (trend[2] < trend[0] ? '品質持續改善 → 治理措施生效。' :
     trend[2] > trend[0] ? '問題增加 → 需要找出原因並修復。' : '穩定維持。') +
    '重點關注：空白標題（影響 SEO）與舊網域（破壞 canonical 一致性）。'
  );
}

// ─── Master render function ──────────────────────────────
function renderReports() {
  if (!WEBINSIGHT.DATA.sections) return;
  renderTrends();
  renderBrandSplit();
  renderContentMatrix();
  renderTrafficQuality();
  renderAI();
  renderCTAFunnel();
  renderInternational();
  renderSankey();
  renderDataQuality();
}


renderReports();

export { init, setView, spark, evidence, issue, draw };
