// Les variables booléen
// *********************

// Variable avec 2 états possibles
// → Vrai   (true)
// → Fausse (false)
const test1 = true;


// Notion de thruty et falsy
// → Conversion implicite vers le type "boolean"

// • Vrai
//   - true
//   - Chaine de caractere non vide
//   - Valeur numerique autre que "0"
//   - Un element de type object (new Date(), { name:'Zaza' }, {})
//   - Un element de type array

// • Fausse
//   - false
//   - La valeur "undefined"
//   - La valeur "null"
//   - Les numeriques suivants : 0, -0, 0n, NaN
//   - Une chaine de caractere vide


//! ********************************************************************

// Les opérateurs de comparaison
// *****************************

// • Operateur pour tester l'egalité entre 2 variables
const nb1 = 42;
const nb2 = '42';
const nb3 = 13;

// - Egalité faible (loose egality)
//   Test sur le contenu → Le JS peut faire des conversion implicite
const t1 = (nb1 == nb2);  // true
const t2 = (nb1 == nb3);  // false

// - Egalité strict
//   Test sur le type de la variable et ensuite le contenu
const t3 = (nb1 === nb2);  // false
const t4 = (nb1 === nb3);  // false

// - Egalité avec la méthode « is » d'object
//   Test strict sur les variables
//   Remarque, celui-ci est capable de tester la valeur "NaN"
const t5 = Object.is(NaN, NaN);

// Type d'égalité : 
// - Valeur     : Primitif (Number, Boolean, bigInt), String
// - Réference  : Object, Array. 


// • Operateur pour tester la différence 

// - Egalité faible (loose egality)
const t6 = (nb1 != nb2);  // false
const t7 = (nb1 != nb3);  // true

// - Egalité strict
//   Test sur le type de la variable et ensuite le contenu
const t8 = (nb1 !== nb2);  // true
const t9 = (nb1 !== nb3);  // true


// • Operateur de grandeur
// Si necessaire, avec des numerique, le JS convertie en type "Number"
const t10 = (nb1 > nb2);
const t11 = (nb1 >= nb2);
const t12 = (nb1 < nb3);
const t13 = (nb1 <= nb3);

// Peut être utiliser avec des chaines de caractere
const name1 = "Zaza";
const name2 = "Fred";
const name3 = "Mike";
const name5 = 'antoine';
const name6 = 'tom';

const t14 = name1 > name2;  // true
const t15 = name2 >= name3; // false
const t16 = name3 < name1;  // true

const t17 = name1 > name5;  // false
const t18 = name6 <= name3; // false


// Les opérateurs logiques
// ***********************
 // L'operateur OU, symbolisé par un double pipe « || ».
 // L'operateur ET, symbolisé par un double esperluette « && ».
 // L'opérateur de negation, symbolisé par une point d'exclamation.

 const t19 = (nb1 > nb2) && (name1 < name6);