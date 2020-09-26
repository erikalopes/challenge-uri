var input = require('fs').readFileSync('assets/1008', 'utf8');
var lines = input.split('\n');

const numeroFunc = parseInt(lines.shift());
const horas = parseInt(lines.shift());
const valor = parseFloat(lines.shift());

const salario = horas * valor;

console.log("NUMBER =", numeroFunc);
console.log(`SALARY = U$ ${salario.toFixed(2)}`)