var input = require('fs').readFileSync('assets/1002', 'utf8');

const raio = parseFloat(input);
const n = 3.14159;
const area = n * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);