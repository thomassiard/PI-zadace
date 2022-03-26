//4. (JS-403) Napiši funkciju zagrade koja će provjeriti jesu li zagrade valjano ugnježdene:

let zagrade = function (s) {
  // ... implementiraj me :)
};
console.log(zagrade("[()]()()")); // → true
console.log(zagrade("{[((()))]}")); // → true
console.log(zagrade("({)}")); // → false
