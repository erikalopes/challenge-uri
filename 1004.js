var input = require('fs').readFileSync('assets/1004', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const PROD = A * B;

console.log("PROD =", PROD)