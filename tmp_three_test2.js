
const window = {};
typeof window<"u"&&(window.__THREE__?console.warn("WARNING"):window.__THREE__={});
console.log("Three.js setup ran. typeof __THREE__:", typeof window.__THREE__);
