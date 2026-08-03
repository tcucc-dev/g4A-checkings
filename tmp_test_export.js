
const window = {};
const document = {createElement: () => ({relList: {supports: () => false}}), addEventListener: () => {}, body: { appendChild: () => {}, className: '', addEventListener: () => {}, setAttribute: () => {}}, querySelectorAll: () => [], querySelector: () => null, getElementsByTagName: () => [], readyState: 'complete', documentElement: {style: {}}};
const localStorage = {getItem: () => null, setItem: () => {}};
const MutationObserver = class { observe(){} };
function ul(n){return "ul";}
function co(n){return "co";}
function uo(n){return "uo";}
function sr(n,e){return "sr";}
function Cn(n,e,t,i){return "Cn";}
function rr(){return "rr";}
typeof window<"u">&&(window.setView=ul,window.spark=co,window.evidence=uo,window.issue=sr,window.draw=Cn,window.init=rr);
console.log("setView:", typeof window.setView);
console.log("init:", typeof window.init);
