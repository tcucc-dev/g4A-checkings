const window = {};
function ul(n){return "ul";}
if (typeof window !== "undefined") {
  window.setView = ul;
}
console.log("typeof window:", typeof window);
console.log("window.setView:", typeof window.setView);
