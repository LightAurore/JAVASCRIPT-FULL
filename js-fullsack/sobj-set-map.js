'use strict';
// ----------------------   SET   -------------------

/* Syntaxe

*/
const monSet = new Set();
//-----------------------add()
monSet.add(1); // { 1 }
monSet.add("du texte"); // { 1, 5, 'du texte' }

const o = { a: 1, b: 2 };
monSet.add(o);

monSet.add({ a: 1, b: 2 });
console.log(monSet);

//-----------------------has()
monSet.has(5); // true
monSet.has(Math.sqrt(25)); // true
monSet.has("Du Texte".toLowerCase()); // true
monSet.has(o); // true

//-----------------------size
monSet.size;

//-----------------------delete()
monSet.delete(5); // retire 5 du set
monSet.has(5);

//-----------------------itérer
for (let item of monSet) console.log(item);
for (let item of monSet.keys()) console.log(item);
for (let item of monSet.values()) console.log(item);
for (let [clé, valeur] of monSet.entries()) console.log(clé);


const monTableau = Array.from(monSet);
console.log(monTableau);

// Cela fonctionnera également dans un document HTML
// monSet.add(document.body);
// monSet.has(document.querySelector("body")); // true

// convertir un tableau (Array) en ensemble (Set) et vice versa
const monSet2 = new Set([1, 2, 3, 4]);
monSet2.size; // 4
console.log([...monSet2]);

// L'intersection peut être calculée avec
// const intersection = new Set([...set1].filter((x) => set2.has(x)));

// La différence pourra être simulée avec
// const différence = new Set([...set1].filter((x) => !set2.has(x)));

// On peut itérer sur les entrées d'un ensemble avec forEach
monSet2.forEach(function (value) {
    console.log(value);
  });






// ----------------------   MAP   -------------------

/* Syntaxe




*/
