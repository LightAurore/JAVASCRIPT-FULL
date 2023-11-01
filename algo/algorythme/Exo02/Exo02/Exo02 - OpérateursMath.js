// a <- 8 MOD 3 : 2
// b <- 4 + a : 6 (4 + 2)
// c <- b * a : 12 (6 * 2)
// d <- (c - a) * b : 60 ((12 - 2) * 6)
// e <- ((a + 7) * (d DIV a)) * 0 : 0 ((2 + 7) * (60 DIV 2)) * 0

let a = 8 % 3;
console.log(`a <- 8 MOD 3 : ${a}`);
let b = 4 + a;
console.log(`b <- 4 + a : ${b}`);
let c = b * a;
console.log(`c <- b * a : ${c}`);
let d = (c - a) * b;
console.log(`d <- (c - a) * b : ${d}`);
let e = ((a + 7) * (parseInt(d / a))) * 0;
console.log(`e <- ((a + 7) * (d DIV a)) * 0 : ${e}`);