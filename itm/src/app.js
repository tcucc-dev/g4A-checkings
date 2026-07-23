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

export { init, setView, spark, evidence, issue, draw };
