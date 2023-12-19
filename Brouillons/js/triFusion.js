"use strict";

const nombre_untill100 = new Array();
const chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const suite_fibo = [];

let a = 0,
  b = 1;

for (let i = 0; i < 1000; i++) {
  suite_fibo.push(a);
  [a, b] = [b, a + b];
}

const PHI = b / a;

console.log(suite_fibo, PHI);

for (let i = 0; i <= 100; i++) {
  nombre_untill100.push(i);
}

console.log(nombre_untill100);

console.log("ab".charCodeAt());
console.log("b".codePointAt());

const alpha_ascii = new Map();
for (let index = 97; index < 123; index++) {
  alpha_ascii.set(`${String.fromCodePoint(index)}`, index);
}

console.log(alpha_ascii);

function isIndexFibo(mot) {
  let code_chars = 0;

  mot.split("").forEach((char) => {
    code_chars += char.charCodeAt();
  });

  let j = 0;
  suite_fibo.map((nb) => {
    if (nb % code_chars == 0) {
      j++;
    }
  });
  console.log(j);

  return suite_fibo.includes(code_chars) || j % 3 == 0 ? true : false;
}

console.log(isIndexFibo("Nzo"));
