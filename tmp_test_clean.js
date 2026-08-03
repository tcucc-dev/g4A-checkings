
const window = {};
const document = {body: {className: ''}, querySelectorAll: () => [], addEventListener: () => {}, readyState: 'complete'};
const localStorage = {getItem: () => null, setItem: () => {}};

function ul(n){return "ul called with " + n;}
function co(n){return "co called";}
function uo(n){return "uo called";}
function sr(n,e){return "sr called";}
function Cn(n,e,t,i){return "Cn called";}
function rr(){return "rr called";}

typeof window<"u">&&(window.setView=ul,window.spark=co,window.evidence=uo,window.issue=sr,window.draw=Cn,window.init=rr);
console.log("setView:", typeof window.setView);
console.log("init:", typeof window.init);
console.log("SetView call:", window.setView("test"));
console.log("Spark call:", window.spark([1,2,3]));
