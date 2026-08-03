
var window = {scrollTo: () => {}};
var document = {body: {className: ""}, querySelectorAll: () => []};
var localStorage = {};
function ul(n){document.body.className="view-"+n,document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("active",e.dataset.view===n)),window.scrollTo({top:0,behavior:"smooth"})}typeof window<"u"&&(window.setView=ul,window.spark=co,window.evidence=uo,window.issue=sr,window.draw=Cn,window.init=rr);