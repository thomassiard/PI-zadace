//2. (JS-102) Napiši program koji prima broj bodova sa kolegija i ispisuje ocjenu (prema pravilniku o ocjenjivanju).
//Ukoliko je ocjena pozitivna ispisati teskt sa čestitkom i ocjenom.

let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

if (bodovi < 0 || bodovi > 100) {
  poruka = "Pokusajte ponovo!";
} else {
  if (bodovi < 50) {
    ocjena = 1;
    poruka = "Dobili ste " + ocjena;
  }

  if (bodovi >= 50 && bodovi < 63) {
    ocjena = 2;
    poruka = "Čestitke! Dobili ste " + ocjena;
  }

  if (bodovi >= 63 && bodovi < 76) {
    ocjena = 3;
    poruka = "Čestitke! Dobili ste " + ocjena;
  }

  if (bodovi >= 76 && bodovi < 89) {
    ocjena = 4;
    poruka = "Čestitke! Dobili ste " + ocjena;
  }

  if (bodovi >= 89 && bodovi <= 100) {
    ocjena = 5;
    poruka = "Čestitke! Dobili ste " + ocjena;
  }
}

console.log(poruka);
