var input = require('fs').readFileSync('assets/1001', 'utf8');
var lines = input.split('\n');

const  A  = parseInt(lines.shift());
const  B  = parseInt(lines.shift());

const X = A + B;
console.log("X =", X)