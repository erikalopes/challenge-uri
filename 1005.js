var input = require('fs').readFileSync('assets/1005', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines.shift());
const P1 = 3.5;

const B = parseFloat(lines.shift());
const P2 = 7.5;

const somaMp = A * P1 + B * P2;
const media = somaMp / (P1+P2); 


console.log("MEDIA =", media.toFixed(5)) 