// 5. (JS-404) Implementiraj funkciju za još napredniju pretragu koja prima pojam koji može sadržavati
// više riječi odvojenih razmakom. Funkcija traži indeks prvog studenta u listi koji zadovoljava sve
// tražene pojmove bilo imenom, prezimenom, gradom ili njihovom kombinacijom. Implementiraj
// traženu funkciju napredna_pretraga(pojam) na način da prođu testovi (koristi se metoda
// console.assert koja u slučaju nejednakosti baca grešku):

let studenti = [
  {
    ime: "Marko",
    prezime: "Marković",
    grad: "Pula",
  },
  {
    ime: "Iva",
    prezime: "Ivić",
    grad: "Našice",
  },
  {
    ime: "Lucija",
    prezime: "Lucić",
    grad: "Zagreb",
  },
  {
    ime: "Nikola",
    prezime: "Nikolić",
    grad: "Rijeka",
  },
];
function napredna_pretraga(lista, pojam) {
  // ... implementirati ovdje :)
}
console.assert(napredna_pretraga(studenti, "ma ić") == 0); // → prvi student
console.assert(napredna_pretraga(studenti, "ko lić ri") == 3); // → zadnji student
console.assert(napredna_pretraga(studenti, "ić za") == 2); // → treći student
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3); // → zadnji student
