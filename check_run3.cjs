
var window = {scrollTo: () => {}, addEventListener: () => {}, document: undefined};
window = globalThis;
var document = {createElement: () => ({relList: {supports: () => false}, href: ''}), addEventListener: () => {}, body: {appendChild: () => {}, addEventListener: () => {}, setAttribute: () => {}, className: '', querySelectorAll: () => [], querySelector: () => null, getElementsByTagName: () => []}, querySelectorAll: () => [], querySelector: () => null, getElementsByTagName: () => [], readyState: 'complete', documentElement: {style: {}}, addEventListener: () => {}};
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

const fs = require('fs');
const code = fs.readFileSync('C:\\Users\\user\\Documents\\g4A-checkings\\check_bundle.js', 'utf-8');
try {
  eval(code);
} catch(e) {
  console.log("Error:", e.message);
  console.log("Stack:", e.stack.substring(0, 1500));
}
console.log("window.setView:", typeof window.setView);
console.log("window.init:", typeof window.init);
console.log("window.draw:", typeof window.draw);
console.log("window.spark:", typeof window.spark);
