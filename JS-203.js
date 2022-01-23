//3. (JS-203) Napiši program koji ispisuje šahovsko polje koristeći razmak ( " " ) i znak # :

for (let i = 1; i <= 8 / 2; i++) {
  console.log(" #".repeat(8 / 2));
  console.log("# ".repeat(8 / 2));
}

//Napravi program tako da postoji na početku definirana varijabla velicina koja označava veličinu kvadrata.

// let velicina = 5;

// for (let i = 1; i <= velicina; i++) {
//   let red = [];
//   for (let j = 1; j <= velicina; j++) {
//     if (i % 2 != 0) {
//       red.push(" ");
//     } else {
//       red.push("#");
//     }
//   }
//   console.log(...red);
// }
