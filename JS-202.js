// 2. (JS-202) FizzBuzz. Napiši program koji će ispisati sve brojeve od 1 do 100 uz dvije iznimke. Ukoliko je
// broj djeljiv s 3 umjesto njega će ispisati "Fizz", ukoliko je djeljiv s 5, umjesto njega će ispisati "Buzz", a
// ako je djeljiv s 3 i 5, ispisat će umjesto njega "FizzBuzz".
let a = "Fizz";
let b = "Buzz";

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(a + b);
  } else {
    if (i % 3 == 0) {
      console.log(a);
    } else if (i % 5 == 0) {
      console.log(b);
    } else {
      console.log(i);
    }
  }
}
