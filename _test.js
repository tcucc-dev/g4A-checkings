
const fs = require('fs');
const code = fs.readFileSync('C:/Users/user/Documents/g4A checkings/_BUNDLE.js', 'utf8');
console.log('Bundle size:', code.length);
console.log('Has window.WEBINSIGHT.DATA:', code.includes('window.WEBINSIGHT.DATA={'));
try {
  // Wrap in function to avoid module-level execution
  new Function(code);
  console.log('Parses OK');
} catch (e) {
  console.log('Parse error:', e.message);
  // Find approximate error position
  const msg = e.message;
  const m = msg.match(/(\d+):(\d+)/);
  if (m) {
    const line = parseInt(m[1]);
    const col = parseInt(m[2]);
    const lines = code.split('\n');
    console.log('Around line ' + line + ':', lines[line-1]?.substring(Math.max(0,col-100), col+100));
  }
}
