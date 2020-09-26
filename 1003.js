var input = require('fs').readFileSync('assets/1003', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const X = A + B;
console.log("SOMA =", X)