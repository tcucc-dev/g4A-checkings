// src/evidence-renderer.js
// Stable evidence rendering logic — extracted from the old evidence.js.
// This file contains NO data. All evidence data lives in
// generated-evidence-data.js (window.WEBINSIGHT.EVIDENCE_REPORTS_RAW).
// Resolved EVIDENCE_REPORTS is written by report-renderer.js on init.
// Behavior preserved verbatim from legacy evidence.js.

(function () {
  'use strict';

  // Read from window.WEBINSIGHT — set by generated-evidence-data.js (RAW)
  // and resolved by report-renderer.js into EVIDENCE_REPORTS.
  function getReports() {
    return window.WEBINSIGHT.EVIDENCE_REPORTS || window.WEBINSIGHT.EVIDENCE_REPORTS_RAW || [];
  }

  const EV_STATE = {};

  function evEsc(v){
    return String(v ?? "").replace(/[&<>"']/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]));
  }
  function evReport(id){ return getReports().find(r=>r.id===id); }
  function evOpen(id){
    document.body.className="view-evidence";
    setTimeout(()=>document.getElementById("ev-"+id)?.scrollIntoView({behavior:"smooth",block:"start"}),80);
  }
  function evUnique(rows,key){ return [...new Set(rows.map(r=>r[key]).filter(v=>v!==null&&v!==undefined&&v!==""))].sort(); }
  function evInitState(r){
    if(!EV_STATE[r.id]) EV_STATE[r.id]={search:"",filters:{},sortKey:null,sortDir:1,page:1,pageSize:10};
    return EV_STATE[r.id];
  }
  function evFiltered(r){
    const s=evInitState(r);
    let rows=r.rows.filter(row=>{
      const text=Object.values(row).join(" ").toLowerCase();
      if(s.search && !text.includes(s.search.toLowerCase())) return false;
      for(const [k,v] of Object.entries(s.filters)) if(v && String(row[k])!==v) return false;
      return true;
    });
    if(s.sortKey){
      rows=[...rows].sort((a,b)=>{
        const av=a[s.sortKey],bv=b[s.sortKey];
        if(typeof av==="number" && typeof bv==="number") return (av-bv)*s.sortDir;
        return String(av??"").localeCompare(String(bv??""),"zh-Hant")*s.sortDir;
      });
    }
    return rows;
  }
  function evRenderIndex(){
    const el = document.getElementById("evidenceIndex");
    if (!el) return;
    el.innerHTML = getReports().map(r=>`
    <div class="ev-index-card">
      <h3>${evEsc(r.title)}</h3>
      <div class="meta-row"><span class="ev-badge ${r.sourceType==="BigQuery"?"bq":"scan"}">${evEsc(r.sourceType)}</span><span class="ev-badge ${r.status==="正常"?"ok":""}">${evEsc(r.status)}</span></div>
      <div class="small"><code>${evEsc(r.id)}</code></div>
      <div class="small">來源：${evEsc(r.sourceTable)}</div>
      <div class="small">資料至：${evEsc(r.maxDate)}｜${r.rows.length} 列</div>
      <button onclick="evOpen('${r.id}')">開啟完整報表</button>
    </div>`).join("");
  }
  function evToolbar(r){
    const s=evInitState(r);
    const filters=(r.filterKeys||[]).map(k=>{
      const label=(r.columns.find(c=>c[0]===k)||[k,k])[1];
      const opts=evUnique(r.rows,k).map(v=>`<option value="${evEsc(v)}" ${s.filters[k]===String(v)?"selected":""}>${evEsc(v)}</option>`).join("");
      return `<select onchange="evSetFilter('${r.id}','${k}',this.value)"><option value="">全部${evEsc(label)}</option>${opts}</select>`;
    }).join("");
    return `<div class="ev-toolbar">
    <input type="search" value="${evEsc(s.search)}" placeholder="搜尋本報表全部欄位" oninput="evSearch('${r.id}',this.value)">
    ${filters}
    <select onchange="evPageSize('${r.id}',this.value)"><option value="10" ${s.pageSize==10?"selected":""}>每頁 10 列</option><option value="25" ${s.pageSize==25?"selected":""}>每頁 25 列</option><option value="50" ${s.pageSize==50?"selected":""}>每頁 50 列</option></select>
    <button class="ev-btn" onclick="evDownload('${r.id}',false)">下載目前篩選 CSV</button>
    <button class="ev-btn" onclick="evReset('${r.id}')">清除篩選</button>
  </div>`;
  }
  function evRenderReports(){
    const box=document.getElementById("evidenceReports");
    if(!box) return;
    box.innerHTML = getReports().map(r=>`
    <article class="ev-report" id="ev-${r.id}">
      <div class="ev-head">
        <div class="ev-head-top">
          <div><h3>${evEsc(r.title)}</h3><div class="ev-sub">${evEsc(r.description)}</div></div>
          <div class="ev-badges">
            <span class="ev-badge ${r.sourceType==="BigQuery"?"bq":"scan"}">${evEsc(r.sourceType)}</span>
            <span class="ev-badge">${evEsc(r.queryCode)}</span>
            <span class="ev-badge ${r.status==="正常"?"ok":""}">${evEsc(r.status)}</span>
          </div>
        </div>
      </div>
      <div id="toolbar-${r.id}">${evToolbar(r)}</div>
      <div class="ev-body">
        <div class="ev-chart-wrap"><canvas id="chart-${r.id}"></canvas><div class="small">圖表會隨篩選條件更新；滑過資料列可查看完整數值。</div></div>
        <div class="ev-table-wrap"><table class="ev-table"><thead id="thead-${r.id}"></thead><tbody id="tbody-${r.id}"></tbody></table></div>
      </div>
      <div class="ev-pager" id="pager-${r.id}"></div>
      <details class="ev-manifest"><summary>查看報表來源、BigQuery 工作資訊與 SQL 定義</summary>
        <div class="ev-manifest-grid">
          <div><strong>來源類型：</strong>${evEsc(r.sourceType)}</div><div><strong>來源表：</strong>${evEsc(r.sourceTable)}</div>
          <div><strong>查詢代碼：</strong>${evEsc(r.queryCode)}</div><div><strong>BigQuery Job ID：</strong>${evEsc(r.jobId)}</div>
          <div><strong>資料期間：</strong>${evEsc(r.period)}</div><div><strong>最大資料日期：</strong>${evEsc(r.maxDate)}</div>
          <div><strong>產製時間：</strong>${evEsc(r.generatedAt)}</div><div><strong>資料雜湊：</strong>${evEsc(r.dataHash)}</div>
          <div><strong>完整列數：</strong>${r.rows.length}</div><div><strong>報表狀態：</strong>${evEsc(r.status)}</div>
        </div>
        <div class="ev-sql">${evEsc(r.sql)}</div>
      </details>
    </article>`).join("");
    getReports().forEach(r=>evRenderOne(r.id));
  }
  function evRenderOne(id){
    const r=evReport(id); if(!r) return;
    const s=evInitState(r), rows=evFiltered(r);
    const pageCount=Math.max(1,Math.ceil(rows.length/s.pageSize));
    if(s.page>pageCount) s.page=pageCount;
    const start=(s.page-1)*s.pageSize, pageRows=rows.slice(start,start+s.pageSize);
    const tb = document.getElementById("toolbar-"+id); if(tb) tb.innerHTML=evToolbar(r);
    const th = document.getElementById("thead-"+id); if(th) th.innerHTML="<tr>"+r.columns.map(c=>`<th onclick="evSort('${id}','${c[0]}')">${evEsc(c[1])}${s.sortKey===c[0]?(s.sortDir===1?" ▲":" ▼"):""}</th>`).join("")+"</tr>";
    const tbody = document.getElementById("tbody-"+id);
    if(tbody) tbody.innerHTML = pageRows.map(row=>"<tr>"+r.columns.map(c=>`<td class="${typeof row[c[0]]==="number"?"num":""}">${evEsc(row[c[0]])}</td>`).join("")+"</tr>").join("") || `<tr><td colspan="${r.columns.length}">沒有符合條件的資料</td></tr>`;
    const pager = document.getElementById("pager-"+id);
    if(pager) pager.innerHTML = `<span>顯示 ${rows.length?start+1:0}–${Math.min(start+s.pageSize,rows.length)}／共 ${rows.length} 列；完整報表 ${r.rows.length} 列</span><div class="buttons"><button onclick="evPage('${id}',-1)" ${s.page<=1?"disabled":""}>上一頁</button><span>第 ${s.page}／${pageCount} 頁</span><button onclick="evPage('${id}',1)" ${s.page>=pageCount?"disabled":""}>下一頁</button><button onclick="evDownload('${id}',true)">下載完整 CSV</button></div>`;
    evDrawChart(r, rows);
  }
  function evSearch(id,v){const s=evInitState(evReport(id));s.search=v;s.page=1;evRenderOne(id)}
  function evSetFilter(id,k,v){const s=evInitState(evReport(id));s.filters[k]=v;s.page=1;evRenderOne(id)}
  function evPageSize(id,v){const s=evInitState(evReport(id));s.pageSize=Number(v);s.page=1;evRenderOne(id)}
  function evPage(id,d){const s=evInitState(evReport(id));s.page+=d;evRenderOne(id)}
  function evSort(id,k){const s=evInitState(evReport(id));if(s.sortKey===k)s.sortDir*=-1;else{s.sortKey=k;s.sortDir=1}s.page=1;evRenderOne(id)}
  function evReset(id){EV_STATE[id]={search:"",filters:{},sortKey:null,sortDir:1,page:1,pageSize:10};evRenderOne(id)}
  function evDownload(id,all){
    const r=evReport(id), rows=all?r.rows:evFiltered(r);
    const headers=r.columns.map(c=>c[1]);
    const keys=r.columns.map(c=>c[0]);
    const csv=[headers,...rows.map(row=>keys.map(k=>row[k]??""))].map(line=>line.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
    const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${id}_${all?"full":"filtered"}.csv`;a.click();URL.revokeObjectURL(a.href);
  }
  function evDrawChart(r, rows){
    const c=document.getElementById("chart-"+r.id); if(!c) return;
    const dpr=window.devicePixelRatio||1, w=c.clientWidth||420, h=280; c.width=w*dpr; c.height=h*dpr;
    const ctx=c.getContext("2d"); ctx.scale(dpr,dpr); ctx.clearRect(0,0,w,h);
    const chart=r.chart||{}, series=chart.series||[];
    if(!rows.length||!series.length){ctx.fillStyle="#667085";ctx.fillText("沒有可繪製的資料",20,30);return}
    const plotRows = chart.type==="bar"?rows.slice(0,12):rows;
    const m={l:52,r:16,t:18,b:54}, iw=w-m.l-m.r, ih=h-m.t-m.b;
    const vals=plotRows.flatMap(row=>series.map(s=>Number(row[s[0]])||0)); let min=0, max=Math.max(...vals,1);
    for(let i=0;i<5;i++){let y=m.t+i*ih/4;ctx.strokeStyle="#e7edf3";ctx.beginPath();ctx.moveTo(m.l,y);ctx.lineTo(w-m.r,y);ctx.stroke();ctx.fillStyle="#667085";ctx.font="11px Arial";ctx.textAlign="right";ctx.fillText(Math.round(max-i*max/4),m.l-7,y+4)}
    const colors=["#1d6fd8","#0f766e","#a35b00","#6941c6"];
    if(chart.type==="line"){
      plotRows.forEach((row,i)=>{ctx.fillStyle="#667085";ctx.textAlign="center";ctx.fillText(String(row[chart.xKey]).slice(0,10),m.l+i*iw/Math.max(1,plotRows.length-1),h-16)});
      series.forEach((s,si)=>{ctx.strokeStyle=colors[si%colors.length];ctx.lineWidth=3;ctx.beginPath();plotRows.forEach((row,i)=>{let x=m.l+i*iw/Math.max(1,plotRows.length-1), y=m.t+ih-(Number(row[s[0]])||0)*ih/max; i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke()});
    } else {
      const groupW=iw/plotRows.length, barW=Math.max(4,groupW*.68/series.length);
      plotRows.forEach((row,i)=>{
        series.forEach((s,si)=>{let v=Number(row[s[0]])||0, x=m.l+i*groupW+(groupW-barW*series.length)/2+si*barW, y=m.t+ih-v*ih/max; ctx.fillStyle=colors[si%colors.length];ctx.fillRect(x,y,barW-2,m.t+ih-y)});
        ctx.save();ctx.translate(m.l+i*groupW+groupW/2,h-10);ctx.rotate(-Math.PI/7);ctx.fillStyle="#667085";ctx.font="10px Arial";ctx.textAlign="right";ctx.fillText(String(row[chart.xKey]).slice(0,22),0,0);ctx.restore();
      });
    }
    series.forEach((s,si)=>{ctx.fillStyle=colors[si%colors.length];ctx.fillRect(m.l+si*145,m.t-12,12,4);ctx.fillStyle="#475467";ctx.textAlign="left";ctx.font="11px Arial";ctx.fillText(s[1],m.l+16+si*145,m.t-7)});
  }
  function evInit(){
    evRenderIndex();
    evRenderReports();
    window.addEventListener("resize", ()=>getReports().forEach(r=>evRenderOne(r.id)));
  }

  // === Vite ESM: expose to window for inline onclick handlers ===
  // HTML attribute onclick="evOpen(...)" needs function in window scope.
  // Use (0,eval)("window") pattern — minifier-safe, can't be folded by Terser.
  try {
    var W = (0, eval)("window");
    W.evOpen = evOpen;
    W.evReport = evReport;
    W.evEsc = evEsc;
    W.evInit = evInit;
    W.evRenderIndex = evRenderIndex;
    W.evRenderReports = evRenderReports;
    W.evRenderOne = evRenderOne;
    W.evSearch = evSearch;
    W.evSetFilter = evSetFilter;
    W.evPageSize = evPageSize;
    W.evPage = evPage;
    W.evSort = evSort;
    W.evReset = evReset;
    W.evDownload = evDownload;
    W.evDrawChart = evDrawChart;
    W.EV_STATE = EV_STATE;
  } catch (_) {}

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", evInit);
  } else {
    // DOM already ready (Vite async module load)
    evInit();
  }
})();
