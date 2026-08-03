
const window = {scrollTo: () => {}, addEventListener: () => {}, document: undefined};
const document = {createElement: () => ({relList: {supports: () => false}, href: ''}), addEventListener: () => {}, body: {appendChild: () => {}, addEventListener: () => {}, setAttribute: () => {}, className: '', querySelectorAll: () => [], querySelector: () => null, getElementsByTagName: () => []}, querySelectorAll: () => [], querySelector: () => null, getElementsByTagName: () => [], readyState: 'complete', documentElement: {style: {}}, addEventListener: () => {}};
const localStorage = {getItem: () => null, setItem: () => {}};
const MutationObserver = class { observe(){} };
const location = { href: '' };
const history = { pushState: () => {} };
const navigator = {userAgent: 'node', platform: 'node'};
const screen = {};
const fetch = () => Promise.resolve();
const URL = globalThis.URL;
const Blob = class {};
const FileReader = class {};
const FormData = class {};
const WebSocket = class {};
const Worker = class {};
const OffscreenCanvas = undefined;
const WebGL2RenderingContext = undefined;
const WebGLRenderingContext = undefined;
const HTMLImageElement = undefined;
const HTMLCanvasElement = undefined;
const ImageBitmap = undefined;
const performance = { now: () => Date.now() };
const __THREE_DEVTOOLS__ = undefined;
const self = undefined;

try {
  require('./check_bundle.js');
} catch(e) {
  console.log("Error:", e.message);
  console.log("Stack:", e.stack.substring(0, 1000));
}
console.log("window.setView:", typeof window.setView);
console.log("window.init:", typeof window.init);
console.log("window.draw:", typeof window.draw);
