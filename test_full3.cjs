
// Setup before bundle
var window = globalThis;
window.scrollTo = () => {};
window.addEventListener = () => {};
var document = {};
document.createElement = () => ({relList: {supports: () => false}, href: ''});
document.addEventListener = () => {};
document.body = {appendChild: () => {}, addEventListener: () => {}, setAttribute: () => {}, className: '', querySelectorAll: () => [], querySelector: () => null, getElementsByTagName: () => [], getContext: () => ({clearRect: () => {}, beginPath: () => {}, moveTo: () => {}, lineTo: () => {}, stroke: () => {}, fillText: () => {}, fillRect: () => {}, scale: () => {}, setTransform: () => {}, fillStyle: '', strokeStyle: ''}), style: {}};
document.querySelectorAll = () => [];
document.querySelector = () => null;
document.getElementsByTagName = () => [];
document.readyState = 'complete';
document.documentElement = {style: {}};
document.addEventListener = () => {};
Object.defineProperty(window, 'document', {value: document, writable: true, configurable: true});
var localStorage = {getItem: () => null, setItem: () => {}};
var MutationObserver = class { observe(){} };
var location = { href: '' };
var history = { pushState: () => {} };
var navigator = {userAgent: 'node', platform: 'node'};
var screen = {};
var fetch = () => Promise.resolve();
var URL = globalThis.URL;
var Blob = class {};
var FileReader = class {};
var FormData = class {};
var WebSocket = class {};
var Worker = class {};
var OffscreenCanvas = undefined;
var WebGL2RenderingContext = undefined;
var WebGLRenderingContext = undefined;
var HTMLImageElement = undefined;
var HTMLCanvasElement = undefined;
var ImageBitmap = undefined;
var performance = { now: () => Date.now() };
var __THREE_DEVTOOLS__ = undefined;
var self = undefined;

// Load and eval bundle
const fs = require('fs');
const bundleCode = fs.readFileSync('test_bundle.cjs', 'utf-8');
try {
  eval(bundleCode);
} catch(e) {
  console.log('Bundle error:', e.message);
  console.log('Stack:', e.stack.substring(0, 1500));
}
console.log("AFTER BUNDLE:");
console.log("  window.setView:", typeof window.setView);
console.log("  window.init:", typeof window.init);
console.log("  window.draw:", typeof window.draw);
console.log("  window.WEBINSIGHT:", typeof window.WEBINSIGHT);
console.log("  document.readyState:", document.readyState);
