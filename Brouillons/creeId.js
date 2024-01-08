"use strict";

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_.c2.ab_it.c3.a9rateur_.c2.bb

function* creerID(index = 0) {
  while (true) {
    yield index++;
  }
}

var gen = creerID();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

function* compteVentesPommes() {
  var listeVentes = [3, 7, 5, 4];
  for (var i = 0; i < listeVentes.length; i++) {
    yield listeVentes[i];
  }
}

var magasinPommes = compteVentesPommes(); // Générateur { }
console.log(magasinPommes.next()); // { value: 3, done: false }
console.log(magasinPommes.next()); // { value: 7, done: false }
console.log(magasinPommes.next()); // { value: 5, done: false }
console.log(magasinPommes.next()); // { value: 4, done: false }
console.log(magasinPommes.next()); // { value: undefined, done: true }
console.log(Object.keys(magasinPommes).values); //
console.log(Object.values(magasinPommes)); //
console.log(Object.entries(magasinPommes).values); //
// let tb = magasinPommes.entries();
// console.log(tb.toString()); //

magasinPommes;
let str = "";
for (const val of compteVentesPommes()) {
  //   console.log(magasinPommes.next());
  str = str + val;
}

console.log(str.split(""));
