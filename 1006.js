const { parse } = require('path');

var input = require('fs').readFileSync('assets/1006', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines.shift());
const PA = 2;

const B = parseFloat(lines.shift());
const PB = 3;

const C = parseFloat(lines.shift());
const PC = 5;

const MP = (A * PA) + (B * PB) + (C * PC);
const MEDIA = MP / (PA+ PB + PC);

console.log("MEDIA =", MEDIA.toFixed(1))
