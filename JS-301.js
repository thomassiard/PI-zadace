//1. (JS-301) Napisati funkciju min koja prima dva argumenta i vraća natrag manjeg.

function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 4));
console.log(min(0, -4));
