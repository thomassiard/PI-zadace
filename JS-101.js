//1. (JS-101) Nadopuni kod da ispravno ispisuje. (Koristio sam za ovaj zadatak: https://jsconsole.com)

let a = prompt("Unesi prvi broj");
let b = prompt("Unesi drugi broj");
let c = prompt("Unesi treći broj");
let d = prompt("Unesi četvrti broj");
let maks;

if (a >= b && a >= c && a >= d) {
  maks = a;
}

if (b >= a && b >= c && b >= d) {
  maks = b;
}

if (c >= a && c >= b && c >= d) {
  maks = c;
}

if (d >= a && d >= b && d >= c) {
  maks = d;
}

console.log("Najveći između njih je: " + maks);
