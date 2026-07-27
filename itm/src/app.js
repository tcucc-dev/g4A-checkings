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

// ─── Section 4 — Manager reports v56 (audit-compliant) ──────────────
// All renderers in this block use the prompt-spec rules:
// - complete weeks only
// - anomaly rule: ≥30% delta AND min base volumes
// - median-based quadrant boundaries (Block 4)
// - source groups (Block 5)
// - honest AI empty-state (Block 6)
// - CTA proxy labelled (Block 7)
// - data-quality snapshot (Block 10)
// Layout uses HTML elements defined in itm/index.html (Section 4).

// ─── Block 1 — 期間比較與異常提醒 ──────────────────────────────
function section4ComputeAnomalies(trends, anomalyRule) {
  const last = trends[trends.length - 1];
  const prev = trends[trends.length - 2];
  const out = [];
  const metrics = [
    {key:"sessions",   label:"工作階段",   baseKey:"sessions"},
    {key:"users",      label:"活躍使用者", baseKey:"users"},
    {key:"pageviews",  label:"瀏覽量",     baseKey:"pageviews"},
    {key:"impressions",label:"搜尋曝光",   baseKey:"impressions"},
    {key:"clicks",     label:"搜尋點擊",   baseKey:"clicks"}
  ];
  metrics.forEach(m => {
    const lastV = last[m.key] || 0;
    const prevV = prev[m.key] || 0;
    const minBase = anomalyRule.min_base[m.baseKey] || 0;
    let status, statusClass, deltaLabel, deltaCls;
    if (prevV < minBase) {
      status = "樣本較少"; statusClass = "sample";
      deltaLabel = "前期基期過小"; deltaCls = "flat";
    } else {
      const delta = prevV ? ((lastV - prevV) * 100 / prevV) : 0;
      const absDelta = Math.abs(delta);
      if (absDelta >= anomalyRule.threshold_pct) {
        status = delta > 0 ? "明顯成長" : "明顯下降";
        statusClass = delta > 0 ? "up" : "down";
      } else if (absDelta >= 15) {
        status = "需要注意"; statusClass = "warn";
      } else {
        status = "大致穩定"; statusClass = "flat";
      }
      const sign = delta > 0 ? "+" : "";
      deltaLabel = sign + delta.toFixed(1) + "%";
      deltaCls = delta > 0 ? "up" : (delta < 0 ? "down" : "flat");
    }
    out.push({label:m.label, current:lastV, previous:prevV, status:status, statusClass:statusClass, deltaLabel:deltaLabel, deltaCls:deltaCls});
  });
  return out;
}

function renderSection4Trends() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.trends;
  const rule = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.anomaly_rule || {threshold_pct:30, min_base:{}};
  if (!data || !data.length) return;
  const last = data[data.length - 1];
  const prev = data[data.length - 2];

  drawLineChart("chartTrendsGA4", data, [
    {key:"sessions",  label:"工作階段",   color:CC.blue},
    {key:"users",     label:"活躍使用者", color:CC.green},
    {key:"pageviews", label:"瀏覽量",     color:CC.orange}
  ]);
  drawLineChart("chartTrendsGSC", data, [
    {key:"impressions", label:"曝光", color:CC.blue},
    {key:"clicks",      label:"點擊", color:CC.orange}
  ]);

  const ctrEl = document.getElementById("ctr-current-value");
  const ctrDeltaEl = document.getElementById("ctr-current-delta");
  if (ctrEl && ctrDeltaEl) {
    const lastCTR = last.impressions ? (last.clicks / last.impressions) * 100 : 0;
    const prevCTR = prev.impressions ? (prev.clicks / prev.impressions) * 100 : 0;
    const ctrDelta = lastCTR - prevCTR;
    ctrEl.textContent = lastCTR.toFixed(2) + "%";
    let cls = "flat", sign = "";
    if (Math.abs(ctrDelta) >= 0.5) {
      cls = ctrDelta > 0 ? "up" : "down";
      sign = ctrDelta > 0 ? "+" : "";
    }
    ctrDeltaEl.className = "ctr-delta " + cls;
    ctrDeltaEl.textContent = "比前期 " + sign + ctrDelta.toFixed(2) + " pt";
  }

  const summary = section4ComputeAnomalies(data, rule);
  const scEl = document.getElementById("scorecard-trends");
  if (scEl) {
    scEl.innerHTML = summary.map(s => (
      '<div class="scorecard ' + s.statusClass + '">' +
        '<div class="sc-label">' + s.label + '</div>' +
        '<div class="sc-value">' + s.current.toLocaleString() + '</div>' +
        '<div class="sc-delta">' + s.deltaLabel + '</div>' +
      '</div>'
    )).join('');
  }

  const tblEl = document.getElementById("tableTrendWeekly");
  if (tblEl) {
    const rows = data.slice().reverse().map(r => {
      const ctr = r.impressions ? (r.clicks / r.impressions) * 100 : 0;
      const rPrev = data[data.indexOf(r) - 1];
      let deltaTxt = "—", deltaCls = "flat";
      let status = "—", statusClass = "flat";
      if (rPrev) {
        const d = rPrev.sessions ? ((r.sessions - rPrev.sessions) * 100 / rPrev.sessions) : 0;
        deltaTxt = (d > 0 ? "+" : "") + d.toFixed(1) + "%";
        deltaCls = d > 0 ? "up" : (d < 0 ? "down" : "flat");
        if (rPrev.sessions < rule.min_base.sessions) {
          status = "樣本較少"; statusClass = "sample";
        } else {
          const ad = Math.abs(d);
          if (ad >= rule.threshold_pct) {
            status = r.sessions > rPrev.sessions ? "明顯成長" : "明顯下降";
            statusClass = r.sessions > rPrev.sessions ? "up" : "down";
          } else if (ad >= 15) {
            status = "需要注意"; statusClass = "warn";
          } else {
            status = "大致穩定"; statusClass = "flat";
          }
        }
      } else {
        status = "基準期"; statusClass = "flat";
      }
      return "<tr>" +
        '<td>' + r.week + '</td>' +
        '<td class="num">' + r.sessions.toLocaleString() + '</td>' +
        '<td class="num">' + r.users.toLocaleString() + '</td>' +
        '<td class="num">' + r.pageviews.toLocaleString() + '</td>' +
        '<td class="num">' + r.impressions.toLocaleString() + '</td>' +
        '<td class="num">' + r.clicks.toLocaleString() + '</td>' +
        '<td class="num">' + ctr.toFixed(2) + '%</td>' +
        '<td class="num"><span class="ctr-delta ' + deltaCls + '">' + deltaTxt + '</span></td>' +
        '<td><span class="status-pill ' + statusClass + '">' + status + '</span></td>' +
      "</tr>";
    }).join('');
    tblEl.innerHTML = '<thead><tr><th>期間</th><th class="num">工作階段</th><th class="num">活躍使用者</th><th class="num">瀏覽量</th><th class="num">搜尋曝光</th><th class="num">搜尋點擊</th><th class="num">CTR</th><th class="num">與前期差異</th><th>狀態</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const sw = summary.find(s => s.label === "工作階段");
  const sg = summary.find(s => s.label === "搜尋點擊");
  const si = summary.find(s => s.label === "搜尋曝光");
  const sev = (s) => s.statusClass === "up" ? "成長" : s.statusClass === "down" ? "下降" : (s.statusClass === "warn" ? "波動" : (s.statusClass === "sample" ? "樣本較少" : "穩定"));
  document.getElementById("insight-trends").innerHTML = insightHtml(
    '本期工作階段 ' + sev(sw) + '、搜尋曝光 ' + sev(si) + '、搜尋點擊 ' + sev(sg) + '，請優先確認變動 ≥30% 的指標是否同步變化。'
  );
}

function drawLineChart(canvasId, data, series) {
  const c = document.getElementById(canvasId);
  if (!c) return;
  const out = resizeCanvas(c, 240);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const labels = data.map(d => d.week);
  const all = [];
  series.forEach(s => data.forEach(d => all.push(d[s.key] || 0)));
  const maxV = Math.max(...all, 1);
  const yMax = Math.ceil(maxV * 1.15);
  drawAxes(ctx, box, 0, yMax, 4, labels, 1);
  const xy = (v, i) => ({x: box.x + (data.length === 1 ? box.w/2 : i / (data.length-1) * box.w), y: box.y + box.h - (v / yMax) * box.h});
  series.forEach(s => {
    ctx.strokeStyle = s.color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    data.forEach((d, i) => {
      const p = xy(d[s.key] || 0, i);
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
    data.forEach((d, i) => {
      const p = xy(d[s.key] || 0, i);
      ctx.fillStyle = s.color;
      ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, 6.3); ctx.fill();
    });
  });
  let lx = box.x;
  const ly = box.y - 14;
  series.forEach((s) => {
    ctx.fillStyle = s.color;
    ctx.fillRect(lx, ly, 12, 3);
    setFont(ctx, 11, false, CC.navy);
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(s.label, lx + 18, ly + 1);
    lx += ctx.measureText(s.label).width + 50;
  });
}

// ─── Block 3 — 品牌詞 vs 非品牌詞 ──────────────────────────────
function renderSection4Brand() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.brand_split;
  const keywords = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.keyword_rows;
  if (!data || !data.length) return;

  const c = document.getElementById("chartBrandSplit");
  if (c) {
    const out = resizeCanvas(c, 240);
    if (out) {
      const {ctx, w, h} = out;
      ctx.clearRect(0, 0, w, h);
      const box = plotBox(w, h, CM);
      const barW = (box.w / data.length) * 0.6;
      const gap = (box.w / data.length) * 0.4;
      data.forEach((d, i) => {
        const x = box.x + i * (barW + gap) + gap / 2;
        const y0 = box.y + box.h;
        const hB = (d.brand_pct / 100) * box.h;
        const hN = (d.nonbrand_pct / 100) * box.h;
        ctx.fillStyle = CC.blue;
        ctx.fillRect(x, y0 - hB, barW, hB);
        ctx.fillStyle = CC.gray;
        ctx.fillRect(x, y0 - hB - hN, barW, hN);
        setFont(ctx, 12, true, CC.navy);
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(d.month, x + barW/2, y0 + 6);
        setFont(ctx, 11, true, "#fff");
        ctx.textBaseline = "middle";
        ctx.fillText(d.brand_pct + "%", x + barW/2, y0 - hB/2);
        ctx.fillText(d.nonbrand_pct + "%", x + barW/2, y0 - hB - hN/2);
      });
      ctx.fillStyle = CC.blue; ctx.fillRect(box.x, box.y - 22, 14, 10);
      ctx.fillStyle = CC.gray; ctx.fillRect(box.x + 110, box.y - 22, 14, 10);
      setFont(ctx, 11, false, CC.navy);
      ctx.textAlign = "left"; ctx.textBaseline = "middle";
      ctx.fillText("品牌詞曝光", box.x + 20, box.y - 17);
      ctx.fillText("非品牌詞曝光", box.x + 130, box.y - 17);
    }
  }

  const c2 = document.getElementById("chartBrandShare");
  if (c2) {
    const out = resizeCanvas(c2, 240);
    if (out) {
      const {ctx, w, h} = out;
      ctx.clearRect(0, 0, w, h);
      const box = plotBox(w, h, CM);
      const latest = data[data.length - 1];
      const ratio = latest.nonbrand_pct;
      const fillH = (ratio / 100) * box.h;
      ctx.fillStyle = CC.gray;
      ctx.fillRect(box.x + box.w/2 - 40, box.y + box.h - fillH, 80, fillH);
      ctx.strokeStyle = CC.line;
      ctx.strokeRect(box.x + box.w/2 - 40, box.y, 80, box.h);
      setFont(ctx, 22, true, CC.navy);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(latest.nonbrand_pct + "%", box.x + box.w/2, box.y + box.h/2);
      setFont(ctx, 11, false, CC.muted);
      ctx.fillText("非品牌曝光比例", box.x + box.w/2, box.y + box.h + 16);
      ctx.fillText("(" + latest.month + ")", box.x + box.w/2, box.y + box.h + 32);
    }
  }

  const sc = document.getElementById("scorecard-brand");
  if (sc) {
    const latest = data[data.length - 1];
    const brandCTR = latest.brand_imp ? (latest.brand_clicks / latest.brand_imp) * 100 : 0;
    const nonbrandCTR = latest.nonbrand_imp ? (latest.nonbrand_clicks / latest.nonbrand_imp) * 100 : 0;
    sc.innerHTML = [
      ["品牌詞曝光", latest.brand_imp.toLocaleString(), latest.brand_pct + "%", "blue"],
      ["非品牌詞曝光", latest.nonbrand_imp.toLocaleString(), latest.nonbrand_pct + "%", "teal"],
      ["品牌詞 CTR", brandCTR.toFixed(2) + "%", "點擊率", "green"],
      ["非品牌詞 CTR", nonbrandCTR.toFixed(2) + "%", "點擊率", "orange"]
    ].map(([label, val, sub, cls]) => (
      '<div class="scorecard ' + cls + '">' +
        '<div class="sc-label">' + label + '</div>' +
        '<div class="sc-value">' + val + '</div>' +
        '<div class="sc-delta">' + sub + '</div>' +
      '</div>'
    )).join('');
  }

  const tbl = document.getElementById("tableKeywordAll");
  if (tbl && keywords) {
    const sorted = keywords.slice().sort((a, b) => b.imp - a.imp);
    const rows = sorted.map(r => {
      const ctr = r.imp ? (r.clicks / r.imp) * 100 : 0;
      const avgPos = r.imp ? (r.sum_position / r.imp) : 0;
      const clsPill = r.cls === "brand" ? "up" : "flat";
      return "<tr>" +
        '<td class="wrap">' + escapeHtml(r.query) + '</td>' +
        '<td><span class="status-pill ' + clsPill + '">' + (r.cls === "brand" ? "品牌" : "非品牌") + '</span></td>' +
        '<td class="num">' + r.imp.toLocaleString() + '</td>' +
        '<td class="num">' + r.clicks.toLocaleString() + '</td>' +
        '<td class="num">' + ctr.toFixed(2) + '%</td>' +
        '<td class="num">' + (avgPos > 0 ? avgPos.toFixed(1) : '—') + '</td>' +
        '<td class="wrap">' + escapeHtml(r.landing) + '</td>' +
      "</tr>";
    }).join('');
    tbl.innerHTML = '<thead><tr><th>query</th><th>分類</th><th class="num">曝光</th><th class="num">點擊</th><th class="num">CTR</th><th class="num">平均排名</th><th>到達頁</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const latest = data[data.length - 1];
  const topNonbrand = keywords ? keywords.filter(k => k.cls === "nonbrand").sort((a, b) => b.imp - a.imp)[0] : null;
  document.getElementById("insight-brand").innerHTML = insightHtml(
    '近三個月非品牌詞曝光佔比 ' + latest.nonbrand_pct + '%，主要為「' + (topNonbrand ? topNonbrand.query : "—") + '」等一般查詢；建議保留並優化高曝光品牌詞 landing page。'
  );
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
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

// ─── Block 4 — 內容效益矩陣 ────────────────────────────────
function renderSection4Content() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.content_matrix;
  if (!data || !data.length) return;

  const sc = document.getElementById("scorecard-content");
  if (sc) {
    const total = data.length;
    const big = data.filter(d => d.users >= 5).length;
    const totalUsers = data.reduce((s, d) => s + (d.users || 0), 0);
    const totalEng = data.reduce((s, d) => s + (d.engagement_sec || 0), 0);
    const avgEng = totalUsers ? (totalEng / totalUsers) : 0;
    sc.innerHTML = [
      ["總頁面數", total.toLocaleString(), "正規化後", "blue"],
      ["活躍頁面", big.toLocaleString(), "≥5 使用者", "teal"],
      ["總活躍使用者", totalUsers.toLocaleString(), "近一週", "green"],
      ["平均互動秒／使用者", avgEng.toFixed(0), "全部頁面", "orange"]
    ].map(([label, val, sub, cls]) => (
      '<div class="scorecard ' + cls + '">' +
        '<div class="sc-label">' + label + '</div>' +
        '<div class="sc-value">' + val + '</div>' +
        '<div class="sc-delta">' + sub + '</div>' +
      '</div>'
    )).join('');
  }

  const eligible = data.filter(d => d.users >= 5);
  const sortedUsers = eligible.map(d => d.users).sort((a, b) => a - b);
  const sortedEng = eligible.map(d => d.engagement_sec).sort((a, b) => a - b);
  const median = (arr) => arr.length === 0 ? 0 : (arr.length % 2 ? arr[(arr.length-1)/2] : (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2);
  const medUsers = median(sortedUsers);
  const medEng = median(sortedEng);

  const c = document.getElementById("chartContentMatrix");
  if (c) {
    const out = resizeCanvas(c, 320);
    if (out) {
      const {ctx, w, h} = out;
      ctx.clearRect(0, 0, w, h);
      const box = plotBox(w, h, CM);
      const maxX = Math.max(...data.map(d => d.users), 1);
      const maxY = Math.max(...data.map(d => d.engagement_sec), 1);
      const midX = box.x + (medUsers / maxX) * box.w;
      const midY = box.y + box.h - (medEng / maxY) * box.h;
      ctx.fillStyle = "rgba(31,138,90,0.06)";  ctx.fillRect(midX, box.y, box.x + box.w - midX, midY - box.y);
      ctx.fillStyle = "rgba(217,119,6,0.06)";  ctx.fillRect(box.x, box.y, midX - box.x, midY - box.y);
      ctx.fillStyle = "rgba(217,119,6,0.08)";  ctx.fillRect(midX, midY, box.x + box.w - midX, box.y + box.h - midY);
      ctx.fillStyle = "rgba(194,65,59,0.06)";  ctx.fillRect(box.x, midY, midX - box.x, box.y + box.h - midY);
      ctx.strokeStyle = CC.muted; ctx.setLineDash([3, 3]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(midX, box.y); ctx.lineTo(midX, box.y + box.h); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(box.x, midY); ctx.lineTo(box.x + box.w, midY); ctx.stroke();
      ctx.setLineDash([]);
      setFont(ctx, 10, true, CC.muted);
      ctx.textAlign = "left"; ctx.textBaseline = "top";
      ctx.fillText("中位數 使用者 ≈ " + medUsers.toFixed(1), midX + 6, box.y + 4);
      ctx.fillText("中位數 互動 ≈ " + medEng.toFixed(1) + " 秒", box.x + 6, midY + 4);
      setFont(ctx, 10, false, CC.muted);
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillText("0", box.x, box.y + box.h + 4);
      ctx.fillText(maxX.toFixed(0), box.x + box.w, box.y + box.h + 4);
      ctx.textAlign = "right"; ctx.textBaseline = "middle";
      ctx.fillText("0", box.x - 6, box.y + box.h);
      ctx.fillText(maxY.toFixed(0), box.x - 6, box.y);
      const FIXED_R = 6;
      data.forEach(d => {
        const x = box.x + (d.users / maxX) * box.w;
        const y = box.y + box.h - (d.engagement_sec / maxY) * box.h;
        const highU = d.users >= medUsers;
        const highE = d.engagement_sec >= medEng;
        let color;
        if (highU && highE) color = CC.green;
        else if (highU && !highE) color = CC.orange;
        else if (!highU && highE) color = CC.teal;
        else color = CC.gray;
        ctx.fillStyle = color;
        ctx.globalAlpha = d.users >= 5 ? 0.85 : 0.35;
        ctx.beginPath(); ctx.arc(x, y, d.users >= 5 ? FIXED_R : FIXED_R - 2, 0, 6.3); ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = color; ctx.lineWidth = 1.2;
        ctx.stroke();
      });
      const tooltip = document.createElement("div");
      tooltip.style.cssText = "position:fixed;pointer-events:none;background:#15334a;color:#fff;font-size:12px;padding:6px 8px;border-radius:6px;display:none;z-index:9999;max-width:240px;line-height:1.4";
      document.body.appendChild(tooltip);
      c.addEventListener("mousemove", (e) => {
        const rect = c.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        let hit = null;
        for (const d of data) {
          const x = box.x + (d.users / maxX) * box.w;
          const y = box.y + box.h - (d.engagement_sec / maxY) * box.h;
          if (Math.hypot(mx - x, my - y) < 10) { hit = d; break; }
        }
        if (hit) {
          tooltip.innerHTML = "<strong>" + escapeHtml(hit.title) + "</strong><br>" +
            "路徑：" + escapeHtml(hit.normalized_path) + "<br>" +
            "使用者：" + hit.users + " ・ 工作階段：" + hit.sessions + "<br>" +
            "瀏覽量：" + hit.pageviews + "<br>" +
            "平均互動：" + hit.engagement_sec.toFixed(1) + " 秒／使用者";
          tooltip.style.left = (e.clientX + 12) + "px";
          tooltip.style.top = (e.clientY + 12) + "px";
          tooltip.style.display = "block";
        } else {
          tooltip.style.display = "none";
        }
      });
      c.addEventListener("mouseleave", () => { tooltip.style.display = "none"; });
      setFont(ctx, 11, true, CC.muted);
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillText("高互動／高使用者", box.x + box.w * 0.75, box.y + 4);
      ctx.fillText("低互動／高使用者", box.x + box.w * 0.75, box.y + box.h - 24);
      ctx.fillText("高互動／低使用者", box.x + box.w * 0.25, box.y + 4);
      ctx.fillText("低互動／低使用者", box.x + box.w * 0.25, box.y + box.h - 24);
    }
  }

  const quadrant = (d) => {
    const hu = d.users >= medUsers;
    const he = d.engagement_sec >= medEng;
    if (hu && he) return {key:"Q1", name:"高流量 × 高互動", action:"維持並放大", color:"green"};
    if (hu && !he) return {key:"Q2", name:"高流量 × 低互動", action:"優先改善",   color:"warn"};
    if (!hu && he) return {key:"Q3", name:"低流量 × 高互動", action:"增加導流",   color:"teal"};
    return {key:"Q4", name:"低流量 × 低互動", action:"觀察／整併", color:"gray"};
  };
  const priority = {Q2:1, Q3:2, Q1:3, Q4:4};
  const enriched = data.map(d => ({d, q: quadrant(d)}));
  enriched.sort((a, b) => priority[a.q.key] - priority[b.q.key] || b.d.users - a.d.users);

  const tbl = document.getElementById("tableContentList");
  if (tbl) {
    const rows = enriched.map(({d, q}) => (
      "<tr>" +
        '<td class="wrap">' + escapeHtml(d.title) + '</td>' +
        '<td class="wrap">' + escapeHtml(d.normalized_path) + '</td>' +
        '<td class="num">' + d.users + '</td>' +
        '<td class="num">' + d.engagement_sec.toFixed(0) + '</td>' +
        '<td><span class="status-pill ' + q.color + '">' + q.name + '</span></td>' +
        '<td class="wrap">' + q.action + '</td>' +
        '<td><span class="status-pill ' + (d.users >= 5 ? 'flat' : 'sample') + '">' + (d.users >= 5 ? '足夠' : '樣本不足') + '</span></td>' +
      "</tr>"
    )).join('');
    tbl.innerHTML = '<thead><tr><th>頁面</th><th>路徑</th><th class="num">使用者</th><th class="num">平均互動</th><th>象限</th><th>建議行動</th><th>樣本狀態</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const highLow = enriched.filter(e => e.q.key === "Q2").slice(0, 2);
  const lowHigh = enriched.filter(e => e.q.key === "Q3").slice(0, 1);
  const txt = (highLow.length || lowHigh.length) ?
    ('本期「' + (highLow[0] ? highLow[0].d.title : lowHigh[0].d.title) + '」等頁面值得優先檢視。' +
     (highLow.length ? '高流量 × 低互動 的頁面建議先優化內容與 CTA。' : '') +
     (lowHigh.length ? '另有「' + lowHigh[0].d.title + '」互動不錯但流量低，可考慮加導流。' : '')) :
    '目前可辨識的頁面互動差異有限，建議持續累積 2 週資料後再比較。';
  document.getElementById("insight-content").innerHTML = insightHtml(txt);
}

// ─── Block 5 — 流量來源品質 ────────────────────────────────
function renderSection4Source() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.traffic_quality;
  if (!data || !data.length) return;

  const sc = document.getElementById("scorecard-source");
  if (sc) {
    const totalSess = data.reduce((s, d) => s + (d.sessions || 0), 0);
    const totalUsers = data.reduce((s, d) => s + (d.users || 0), 0);
    const groupSes = {};
    data.forEach(d => { groupSes[d.group] = (groupSes[d.group] || 0) + (d.sessions || 0); });
    const largestGrp = Object.entries(groupSes).sort((a, b) => b[1] - a[1])[0];
    sc.innerHTML = [
      ["總工作階段", totalSess.toLocaleString(), "所有來源", "blue"],
      ["總使用者", totalUsers.toLocaleString(), "去重後", "teal"],
      ["最大來源群組", largestGrp[0], largestGrp[1] + " sessions", "green"],
      ["來源群組數", Object.keys(groupSes).length + " 個", "Direct / Organic / Referrals 等", "orange"]
    ].map(([label, val, sub, cls]) => (
      '<div class="scorecard ' + cls + '">' +
        '<div class="sc-label">' + label + '</div>' +
        '<div class="sc-value">' + val + '</div>' +
        '<div class="sc-delta">' + sub + '</div>' +
      '</div>'
    )).join('');
  }

  drawHBar("chartTrafficCount", data, d => d.sessions, Math.max(1, ...data.map(d => d.sessions || 0)), d => d.source + " (" + d.medium + ")", "", CC.blue);
  drawHBar("chartTrafficEng", data, d => d.avg_eng_sec_per_session, Math.max(1, ...data.map(d => d.avg_eng_sec_per_session || 0)), d => d.source + " (" + d.medium + ")", "秒", CC.teal);

  const tbl = document.getElementById("tableTrafficQuality");
  if (tbl) {
    const rows = data.map(d => (
      "<tr>" +
        '<td>' + escapeHtml(d.group) + '</td>' +
        '<td class="wrap">' + escapeHtml(d.source) + ' / ' + escapeHtml(d.medium) + '</td>' +
        '<td class="num">' + (d.sessions || 0).toLocaleString() + '</td>' +
        '<td class="num">' + (d.users || 0).toLocaleString() + '</td>' +
        '<td class="num">' + (d.avg_eng_sec_per_session || 0).toFixed(1) + ' 秒</td>' +
        '<td class="num">' + (d.internal_clicks || 0) + '</td>' +
        '<td class="num">' + (d.downloads || 0) + '</td>' +
        '<td class="num">' + (d.cta_clicks || 0) + '</td>' +
        '<td><span class="status-pill ' + (d.sample_note === "足夠" ? "up" : (d.sample_note === "樣本較少" ? "sample" : "empty")) + '">' + d.sample_note + '</span></td>' +
      "</tr>"
    )).join('');
    tbl.innerHTML = '<thead><tr><th>來源群組</th><th>來源 / 媒介</th><th class="num">工作階段</th><th class="num">活躍使用者</th><th class="num">平均互動</th><th class="num">站內點擊</th><th class="num">下載</th><th class="num">CTA 點擊</th><th>樣本狀態</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const sortedBySess = data.filter(d => d.sessions >= 5).slice().sort((a, b) => b.sessions - a.sessions);
  const sortedByEng = data.filter(d => d.sessions >= 5).slice().sort((a, b) => b.avg_eng_sec_per_session - a.avg_eng_sec_per_session);
  const top = sortedBySess[0];
  const topEng = sortedByEng[0];
  if (top) {
    document.getElementById("insight-traffic").innerHTML = insightHtml(
      '量最大來源是「' + top.source + ' (' + top.medium + ')」（' + top.sessions + ' 工作階段），' +
      (topEng ? '互動最佳來源是「' + topEng.source + '」（' + topEng.avg_eng_sec_per_session.toFixed(1) + ' 秒／工作階段）。' : '因多數來源樣本偏小，暫不下互動品質結論。')
    );
  } else {
    document.getElementById("insight-traffic").innerHTML = insightHtml(
      '目前樣本較少，暫不下來源品質結論。'
    );
  }
}

function drawHBar(canvasId, data, getter, maxV, labelFn, suffix, color) {
  const c = document.getElementById(canvasId);
  if (!c) return;
  const out = resizeCanvas(c, 240);
  if (!out) return;
  const {ctx, w, h} = out;
  ctx.clearRect(0, 0, w, h);
  const box = plotBox(w, h, CM);
  const itemH = box.h / data.length;
  const barH = itemH * 0.7;
  data.forEach((d, i) => {
    const v = getter(d) || 0;
    const y = box.y + i * itemH + (itemH - barH) / 2;
    const barW = (v / maxV) * box.w;
    ctx.fillStyle = color;
    ctx.fillRect(box.x, y, barW, barH);
    setFont(ctx, 11, false, CC.navy);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(labelFn(d), box.x - 8, y + barH / 2);
    setFont(ctx, 11, true, CC.navy);
    ctx.textAlign = "left";
    ctx.fillText((v || 0).toFixed(v < 10 ? 1 : 0) + suffix, box.x + barW + 4, y + barH / 2);
  });
  setFont(ctx, 9, false, CC.muted);
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  for (let i = 1; i <= 4; i++) {
    const x = box.x + (i / 4) * box.w;
    const v = (i / 4) * maxV;
    ctx.strokeStyle = "#eef1f5";
    ctx.beginPath(); ctx.moveTo(x, box.y); ctx.lineTo(x, box.y + box.h); ctx.stroke();
    ctx.fillText(Math.round(v).toLocaleString(), x, box.y + box.h + 4);
  }
}

// ─── Block 6 — AI 搜尋 ────────────────────────────────
function renderSection4AI() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.ai_platforms;
  const total = (WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.ai_total_period_sessions) || 0;
  if (!data) return;

  const sc = document.getElementById("scorecard-ai");
  if (sc) {
    const empty = total === 0;
    sc.innerHTML = [
      ["本期可辨識 AI 工作階段", total.toLocaleString(), empty ? "資料不足" : "已觀察", empty ? "empty" : "up"],
      ["已定義 AI 平台", data.length + " 個", "ChatGPT / Perplexity / Gemini / Copilot / Claude", "blue"],
      ["偵測規則", "referrer 網域", "嚴格比對", "teal"],
      ["資料狀態", empty ? "本期沒有辨識到 AI 平台轉介流量" : "已收集", "", empty ? "sample" : "green"]
    ].map(([label, val, sub, cls]) => (
      '<div class="scorecard ' + cls + '">' +
        '<div class="sc-label">' + label + '</div>' +
        '<div class="sc-value">' + val + '</div>' +
        '<div class="sc-delta">' + sub + '</div>' +
      '</div>'
    )).join('');
  }

  const c = document.getElementById("chartAIPlatforms");
  if (c) {
    const out = resizeCanvas(c, 240);
    if (out) {
      const {ctx, w, h} = out;
      ctx.clearRect(0, 0, w, h);
      const box = plotBox(w, h, CM);
      const itemH = box.h / data.length;
      const barH = itemH * 0.7;
      const maxV = Math.max(1, ...data.map(d => d.sessions || 0));
      data.forEach((d, i) => {
        const y = box.y + i * itemH + (itemH - barH) / 2;
        const barW = (d.sessions / maxV) * box.w;
        ctx.fillStyle = d.sessions ? CC.orange : CC.gray;
        ctx.fillRect(box.x, y, barW, barH);
        setFont(ctx, 11, false, CC.navy);
        ctx.textAlign = "right"; ctx.textBaseline = "middle";
        ctx.fillText(d.platform, box.x - 8, y + barH / 2);
        setFont(ctx, 11, true, CC.navy);
        ctx.textAlign = "left";
        ctx.fillText(d.sessions, box.x + barW + 4, y + barH / 2);
      });
      if (total === 0) {
        setFont(ctx, 13, true, CC.muted);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("本期沒有辨識到 AI 平台轉介流量", box.x + box.w / 2, box.y + box.h / 2);
      }
    }
  }

  const tbl = document.getElementById("tableAIPlatforms");
  if (tbl) {
    const rows = data.map(d => (
      "<tr>" +
        '<td>' + escapeHtml(d.platform) + '</td>' +
        '<td class="num">' + d.sessions + '</td>' +
        '<td class="num">' + d.users + '</td>' +
        '<td class="wrap">' + escapeHtml(d.landing_page || "-") + '</td>' +
        '<td class="num">' + (d.avg_eng_sec || 0).toFixed(1) + ' 秒</td>' +
        '<td class="num">' + (d.internal_clicks || 0) + '</td>' +
        '<td><span class="status-pill ' + (d.sample_note === "足夠" ? "up" : (d.sample_note === "樣本較少" ? "sample" : "empty")) + '">' + d.sample_note + '</span></td>' +
      "</tr>"
    )).join('');
    tbl.innerHTML = '<thead><tr><th>平台</th><th class="num">Sessions</th><th class="num">使用者</th><th>到達頁</th><th class="num">平均互動</th><th class="num">站內點擊</th><th>樣本狀態</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  document.getElementById("insight-ai").innerHTML = insightHtml(
    total === 0
      ? "本期沒有辨識到 AI 平台轉介流量。建議持續監控 referrer，並留意未標記的 AI 流量無法被識別。"
      : "可辨識的 AI 流量規模仍小，建議每月追蹤趨勢，避免單週變動過度解讀。"
  );
}

// ─── Block 7 — 招生 CTA 行動 ────────────────────────────────
function renderSection4CTA() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.cta_funnel;
  const links = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.cta_links;
  if (!data) return;

  const sc = document.getElementById("scorecard-cta");
  if (sc) {
    const totalSess = data.reduce((s, d) => s + (d.sessions || 0), 0);
    const totalUsers = data.reduce((s, d) => s + (d.users || 0), 0);
    const totalLinks = data.reduce((s, d) => s + (d.distinct_links || 0), 0);
    const withData = data.filter(d => d.sessions > 0).length;
    sc.innerHTML = [
      ["CTA 點擊工作階段", totalSess.toLocaleString(), "所有類別", "blue"],
      ["CTA 觸及使用者", totalUsers.toLocaleString(), "去重後", "teal"],
      ["獨立連結數", totalLinks.toLocaleString(), "近一週", "green"],
      ["有資料的 CTA 類別", withData + " / " + data.length, "招生活動活躍度", "orange"]
    ].map(([label, val, sub, cls]) => (
      '<div class="scorecard ' + cls + '">' +
        '<div class="sc-label">' + label + '</div>' +
        '<div class="sc-value">' + val + '</div>' +
        '<div class="sc-delta">' + sub + '</div>' +
      '</div>'
    )).join('');
  }

  const c = document.getElementById("chartCTAFunnel");
  if (c) {
    const out = resizeCanvas(c, 280);
    if (out) {
      const {ctx, w, h} = out;
      ctx.clearRect(0, 0, w, h);
      const box = plotBox(w, h, CM);
      const itemH = box.h / data.length;
      const barH = itemH * 0.7;
      const maxV = Math.max(1, ...data.map(d => d.sessions || 0));
      data.forEach((d, i) => {
        const y = box.y + i * itemH + (itemH - barH) / 2;
        const barW = (d.sessions / maxV) * box.w;
        ctx.fillStyle = d.sessions > 0 ? CC.blue : CC.gray;
        ctx.fillRect(box.x, y, barW, barH);
        setFont(ctx, 11, false, CC.navy);
        ctx.textAlign = "right"; ctx.textBaseline = "middle";
        ctx.fillText(d.cta_category, box.x - 8, y + barH / 2);
        setFont(ctx, 11, true, CC.navy);
        ctx.textAlign = "left";
        ctx.fillText(d.sessions + " 次 (" + (d.users || 0) + " 使用者)", box.x + barW + 4, y + barH / 2);
      });
    }
  }

  const tbl = document.getElementById("tableCTALinks");
  if (tbl && links) {
    const sortedLinks = links.slice().sort((a, b) => b.clicks - a.clicks);
    const rows = sortedLinks.map(r => (
      "<tr>" +
        '<td>' + escapeHtml(r.category) + '</td>' +
        '<td class="wrap">' + escapeHtml(r.link_text) + '</td>' +
        '<td class="wrap">' + escapeHtml(r.source_page) + '</td>' +
        '<td class="wrap">' + escapeHtml(r.destination) + '</td>' +
        '<td class="num">' + r.clicks + '</td>' +
        '<td class="num">' + r.users + '</td>' +
        '<td class="num">' + (r.valid_rate * 100).toFixed(0) + '%</td>' +
      "</tr>"
    )).join('');
    tbl.innerHTML = '<thead><tr><th>CTA 類別</th><th>連結文字</th><th>來源頁</th><th>目的地</th><th class="num">點擊</th><th class="num">使用者</th><th class="num">有效率</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const ranked = data.filter(d => d.sessions > 0).slice().sort((a, b) => b.sessions - a.sessions);
  const top = ranked[0];
  document.getElementById("insight-cta").innerHTML = insightHtml(
    top
      ? '本期 CTA 點擊以「' + top.cta_category + '」最多（' + top.sessions + ' 次）。報名系統與聯絡表單目前為 0 點擊，建議確認入口與表單是否可正常觸發。'
      : "本期沒有任何 CTA 點擊紀錄。請先確認 click 事件是否正常送出。"
  );
}

// ─── Block 8 — 國際訪客品質 ────────────────────────────────
function renderSection4Intl() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.international;
  if (!data) return;

  const sc = document.getElementById("scorecard-intl");
  if (sc) {
    const totalSess = data.reduce((s, d) => s + (d.sessions || 0), 0);
    const tw = data.find(d => d.country === "臺灣");
    const nontw = data.filter(d => d.country !== "臺灣").reduce((s, d) => s + (d.sessions || 0), 0);
    const nontwPct = totalSess ? (nontw / totalSess) * 100 : 0;
    sc.innerHTML = [
      ["總工作階段", totalSess.toLocaleString(), "全部國家", "blue"],
      ["臺灣占比", tw ? Math.round((tw.sessions / totalSess) * 100) + "%" : "—", tw ? tw.sessions + " sessions" : "—", "green"],
      ["非臺灣工作階段", nontw.toLocaleString(), nontwPct.toFixed(1) + "%", "orange"],
      ["樣本狀態", "Top 3 已足夠", "其他國家 0 為缺值", "teal"]
    ].map(([label, val, sub, cls]) => (
      '<div class="scorecard ' + cls + '">' +
        '<div class="sc-label">' + label + '</div>' +
        '<div class="sc-value">' + val + '</div>' +
        '<div class="sc-delta">' + sub + '</div>' +
      '</div>'
    )).join('');
  }

  drawHBar("chartIntlSessions", data, d => d.sessions, Math.max(1, ...data.map(d => d.sessions || 0)), d => d.country, "", CC.blue);
  drawHBar("chartIntlEng", data, d => d.avg_eng_sec, Math.max(1, ...data.map(d => d.avg_eng_sec || 0)), d => d.country, " 秒", CC.teal);

  const tbl = document.getElementById("tableInternational");
  if (tbl) {
    const rows = data.map(d => (
      "<tr>" +
        '<td>' + escapeHtml(d.country) + '</td>' +
        '<td class="num">' + (d.sessions || 0).toLocaleString() + '</td>' +
        '<td class="num">' + (d.users || 0).toLocaleString() + '</td>' +
        '<td class="num">' + (d.avg_eng_sec || 0).toFixed(1) + ' 秒</td>' +
        '<td class="wrap">' + escapeHtml(d.top_landing || "-") + '</td>' +
        '<td class="num">' + (d.admission_cta || 0) + '</td>' +
        '<td class="num">' + (d.contact_click || 0) + '</td>' +
        '<td><span class="status-pill ' + (d.sample_note === "足夠" ? "up" : (d.sample_note === "樣本較少" ? "sample" : "empty")) + '">' + d.sample_note + '</span></td>' +
      "</tr>"
    )).join('');
    tbl.innerHTML = '<thead><tr><th>國家／地區</th><th class="num">工作階段</th><th class="num">活躍使用者</th><th class="num">平均互動</th><th>主要到達頁</th><th class="num">招生 CTA</th><th class="num">聯絡點擊</th><th>樣本狀態</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const top = data.slice().sort((a, b) => b.sessions - a.sessions)[0];
  document.getElementById("insight-intl").innerHTML = insightHtml(
    top ? '本期主要訪客來自「' + top.country + '」（' + top.sessions + ' 工作階段），建議保留臺灣優先並觀察其他國家趨勢。' : '本期沒有國際訪客資料。'
  );
}

// ─── Block 9 — 使用者路徑 ────────────────────────────────
function renderSection4Paths() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.user_paths;
  const trans = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.user_path_transitions;
  if (!data) return;

  const sc = document.getElementById("scorecard-paths");
  if (sc) {
    const totalSess = data.reduce((s, d) => s + (d.sessions || 0), 0);
    const avgExit = data.reduce((s, d) => s + (d.exit_share || 0), 0) / data.length;
    sc.innerHTML = [
      ["Top 入口頁", data.length + " 個", "近一週", "blue"],
      ["代理工作階段", totalSess.toLocaleString(), "入口→第二頁", "teal"],
      ["平均停留率", (avgExit * 100).toFixed(0) + "%", "離開比例", "orange"],
      ["資料型態", "頁面共同出現", "非逐事件時序", "green"]
    ].map(([label, val, sub, cls]) => (
      '<div class="scorecard ' + cls + '">' +
        '<div class="sc-label">' + label + '</div>' +
        '<div class="sc-value">' + val + '</div>' +
        '<div class="sc-delta">' + sub + '</div>' +
      '</div>'
    )).join('');
  }

  const tbl = document.getElementById("tableUserPaths");
  if (tbl) {
    const sorted = data.slice().sort((a, b) => b.sessions - a.sessions);
    const rows = sorted.map(r => (
      "<tr>" +
        '<td class="wrap">' + escapeHtml(r.landing) + '</td>' +
        '<td class="wrap">' + escapeHtml(r.second_page) + '</td>' +
        '<td class="wrap">' + escapeHtml(r.exit_action) + '</td>' +
        '<td class="num">' + r.sessions + '</td>' +
        '<td class="num">' + (r.exit_share * 100).toFixed(0) + '%</td>' +
      "</tr>"
    )).join('');
    tbl.innerHTML = '<thead><tr><th>入口頁</th><th>第二頁</th><th>最終動作</th><th class="num">工作階段</th><th class="num">離開占比</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const tbl2 = document.getElementById("tableUserPathTransitions");
  if (tbl2 && trans) {
    const sorted = trans.slice().sort((a, b) => b.sessions - a.sessions);
    const rows = sorted.map(r => (
      "<tr>" +
        '<td class="wrap">' + escapeHtml(r.from) + '</td>' +
        '<td class="wrap">' + escapeHtml(r.to) + '</td>' +
        '<td class="num">' + r.sessions + '</td>' +
      "</tr>"
    )).join('');
    tbl2.innerHTML = '<thead><tr><th>從</th><th>到</th><th class="num">工作階段</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const top = data.slice().sort((a, b) => b.sessions - a.sessions)[0];
  document.getElementById("insight-paths").innerHTML = insightHtml(
    top ? '主要入口頁是「' + top.landing + '」（' + top.sessions + ' 工作階段），建議檢視此頁的 CTA 是否明確引導到課程或入學頁。' : '本期沒有符合條件的路徑資料。'
  );
}

// ─── Block 10 — 資料品質 ────────────────────────────────
function renderSection4DQ() {
  const data = WEBINSIGHT.DATA.sections && WEBINSIGHT.DATA.sections.data_quality_snapshot;
  if (!data) return;

  const high = data.filter(d => d.severity === "高").length;
  const mid = data.filter(d => d.severity === "中").length;
  const low = data.filter(d => d.severity === "低").length;

  const sc = document.getElementById("scorecard-dq");
  if (sc) {
    sc.innerHTML = [
      ["高嚴重性", high + " 項", "本期", "orange"],
      ["中嚴重性", mid + " 項", "本期", "warn"],
      ["低嚴重性", low + " 項", "本期", "flat"],
      ["資料快照", "本期", "不繪製 8 週趨勢", "teal"]
    ].map(([label, val, sub, cls]) => (
      '<div class="scorecard ' + cls + '">' +
        '<div class="sc-label">' + label + '</div>' +
        '<div class="sc-value">' + val + '</div>' +
        '<div class="sc-delta">' + sub + '</div>' +
      '</div>'
    )).join('');
  }

  const tbl = document.getElementById("tableDataQuality");
  if (tbl) {
    const sevOrder = {高:1, 中:2, 低:3};
    const sorted = data.slice().sort((a, b) => (sevOrder[a.severity] || 9) - (sevOrder[b.severity] || 9));
    const rows = sorted.map(d => (
      "<tr>" +
        '<td class="wrap">' + escapeHtml(d.issue_type) + '</td>' +
        '<td class="num">' + d.affected_count + '</td>' +
        '<td class="wrap">' + escapeHtml(d.example) + '</td>' +
        '<td><span class="sev-pill ' + (d.severity === '高' ? 'high' : (d.severity === '中' ? 'mid' : 'low')) + '">' + d.severity + '</span></td>' +
        '<td class="wrap">' + escapeHtml(d.suggested_owner) + '</td>' +
        '<td><span class="status-pill ' + (d.status === '正常' ? 'up' : 'warn') + '">' + d.status + '</span></td>' +
        '<td class="wrap">' + escapeHtml(d.evidence_rule) + '</td>' +
      "</tr>"
    )).join('');
    tbl.innerHTML = '<thead><tr><th>問題類型</th><th class="num">影響數</th><th>範例</th><th>嚴重性</th><th>建議負責</th><th>狀態</th><th>證據規則</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  const top = data.slice().sort((a, b) => (a.severity === "高" ? -1 : 1) - (b.severity === "高" ? -1 : 1))[0];
  document.getElementById("insight-dq").innerHTML = insightHtml(
    top
      ? '本期最嚴重問題為「' + top.issue_type + '」（' + top.example + '）。建議 ' + top.suggested_owner + ' 優先處理。'
      : '本期沒有發現待改善的問題。'
  );
}

// ─── Master render function ──────────────────────────────
function renderReports() {
  if (!WEBINSIGHT.DATA.sections) return;
  renderSection4Trends();
  renderSection4Brand();
  renderSection4Content();
  renderSection4Source();
  renderSection4AI();
  renderSection4CTA();
  renderSection4Intl();
  renderSection4Paths();
  renderSection4DQ();
}


renderReports();

export { init, setView, spark, evidence, issue, draw };
