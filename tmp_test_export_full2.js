
const window = {scrollTo: () => {}, addEventListener: () => {}};
const document = {body: {className: ''}, querySelectorAll: () => [], addEventListener: () => {}, readyState: 'complete', getElementById: () => ({innerHTML: ''}), createElement: () => ({relList: {supports: () => false}})};
const localStorage = {getItem: () => null, setItem: () => {}};

function ul(n){return "ul called";}
function co(n){return "co called";}
function uo(n){return "uo called";}
function sr(n,e){return "sr called";}
function Cn(n,e,t,i){return "Cn called";}
function rr(){return "rr called";}

// This should set window.setView etc
typeof window<"u"&&typeof window!==null&&(window.setView=ul,window.spark=co,window.evidence=uo,window.issue=sr,window.draw=Cn,window.init=rr);

console.log("setView:", typeof window.setView);
console.log("init:", typeof window.init);
console.log("init() returns:", window.init());

// Now simulate rr() call
document.readyState = "complete";
// Simulate the call:
console.log("Calling window.init():", window.init());
