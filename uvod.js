//Probavanje sa skripte primjer

let total = 0;
let count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total); // ispisati ce broj: 55

// Zadaci za vježbanje:

// 1. Isprobati program iz skripte gore za zbrajanje prvih 10 brojeva. Možete ga isprobati u konzoli
// preglednika. Zatim je potrebno modificirati program na način da se uvede dodatno mapiranje
// (varijabla) koja će poopćiti problem i ukazivati na to koliko brojeva treba zbrojiti (npr. neka to
// bude varijabla n=10 ). Isprobati program za prvih 1000 brojeva ( n=1000 ).

/*
 2. Istražiti što je to NodeJS te instalirati na svom računalu node verziju 12 ili više. (Google will help...)

ODGOVOR:
Node.js je JavaScript runtime okruženje. Izvršno okruženje Node.js uključuje sve što je potrebno za izvršavanje programa napisanog na JavaScript-u.
Node.js je serverska JavaScript platforma koja se sadrži od minimalne core biblioteke pored bogatog ekosistema. 
Radi na V8 JavaScript engine-u, što znači da je veoma brz u izvršavanju. 
Tradicionalno, programiranje se obavlja sinkrono: Linija koda se izvršava, sistem čeka rezultat, rezultat se procesira i zatim se izvršavanje programa nastavlja. 
Ponekad taj sistem izvršavanja zahtjeva dugo čekanje; na primer čitanje sa baze podataka.
(Instalirano!)
*/

// 3. Isprobati program za zbrajanje, ovaj puta pomoću node a.

// 4. Istražiti čemu služi npm te u čemu je razlika od yarn a.

/*
ODGOVOR:
Node Package Manager je registar paketa koji su dostupni za Node.js. 
Npm su dvije stvari: prije svega, to je online spremište za objavljivanje Node.js projekata otvorenog koda; drugo, 
to je pomoćni program naredbenog retka za interakciju s navedenim spremištem koji pomaže u instalaciji paketa, upravljanju verzijama i upravljanju ovisnostima.

Yarn je upravitelj paketa za Node.js koji se fokusira na brzinu, sigurnost i dosljednost. Izvorno je stvoren da riješi neke probleme s popularnim NPM upraviteljem paketa.
Jedna od glavnih razlika između NPM-a i Yarn-a je način na koji oni rukovode procesom instalacije paketa. 
Yarn paralelno instalira pakete. Yarn je optimiziran za dohvaćanje i instalaciju više paketa istovremeno.
*/

// 5. Istražiti čemu služi webpack.

/*
ODGOVOR:
Webpack je statički paket modula za JavaScript aplikacije. 
Uzima module, bilo da je to prilagođena datoteka koju smo stvorili ili nešto što je instalirano putem NPM-a i pretvara te module u statičku imovinu.
*/

// 6. Napisati program za zbrajanje prvih n brojeva pomoću samo jedne varijable (isključujući // varijablu n )
