
var document = {querySelectorAll: () => [], addEventListener: () => {}, body: {setAttribute: () => {}}, readyState: 'complete'};
var localStorage = {getItem: () => null, setItem: () => {}};
(function(){function n(){const e=document.querySelectorAll(".geo-pill");if(!e.length)return;let t="tech";try{t=localStorage.getItem("geo-view")||"tech"}catch{t="tech"}document.body.setAttribute("data-geo-view",t);function i(){e.forEach(function(s){const r=s.getAttribute("data-view")===t;s.classList.toggle("active",r),s.setAttribute("aria-pressed",String(r))})}i(),e.forEach(function(s){s.addEventListener("click",function(r){r.preventDefault(),r.stopPropagation(),t=this.getAttribute("data-view"),document.body.setAttribute("data-geo-view",t);try{localStorage.setItem("geo-view",t)}catch{}i()})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()})();
console.log("IIFE 2 ran");
