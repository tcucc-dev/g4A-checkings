
const window = {};
typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__={});
console.log("Three.js setup ran. window.__THREE__:", typeof window.__THREE__);
