const fs = require('fs');
let html = fs.readFileSync('chrome-extension/offscreen.html', 'utf8');

let startStr1 = '<script>\n/* ============================================================';
let startStr2 = '<script>\r\n/* ============================================================';

let start = html.indexOf(startStr1);
let offset = 8;
if (start === -1) {
    start = html.indexOf(startStr2);
    offset = 9;
}

if (start === -1) {
    console.log("Could not find start!");
    process.exit(1);
}

// Find the very last </script> before <script src="offscreen.js">
let endStr = '</script>\n<script src="offscreen.js"></script>';
let endStr2 = '</script>\r\n<script src="offscreen.js"></script>';

let end = html.indexOf(endStr, start);
if (end === -1) end = html.indexOf(endStr2, start);

if (end === -1) {
    console.log("Could not find end!");
    process.exit(1);
}

let scriptContent = html.substring(start + offset, end);
fs.writeFileSync('chrome-extension/offscreen_core.js', scriptContent.trim());

let newHtml = html.substring(0, start) + '<script src="offscreen_core.js"></script>\n' + html.substring(end + 9);
fs.writeFileSync('chrome-extension/offscreen.html', newHtml);

console.log("SUCCESS!");
