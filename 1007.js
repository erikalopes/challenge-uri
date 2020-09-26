var input = require('fs').readFileSync('assets/1007', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseInt(lines.shift());
const D = parseInt(lines.shift());

const AB = A * B;
const CD = C * D;

const DIF = AB - CD;

console.log("DIFERENÇA =", DIF)