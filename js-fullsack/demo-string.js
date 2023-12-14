// Chaine de caractere
// *******************

// Déclaration
const name1 = 'Della';
const name2 = "Mussa";


// Concatenation
const firstname = 'Zaza';
const lastname = 'Vanderquack';

// → Opérateur « + »
const zaza1 = firstname + ' ' + lastname;

// → Méthode « concat »
const zaza2 = firstname.concat(' ').concat(lastname);
const zaza3 = ''.concat(firstname, ' ', lastname);

// → Template String
const zaza4 = `${firstname} ${lastname}`;


// Caractere d'échappement

// Le symbole utiliser est le « \ » (BackSlash)
// Exemple de caractere spéciaux : 
//  - Saut de ligne     \n\r
//  - Tabulation        \t
//  - Quote             \' \" \`
//  - Backspace         \b

// Quelques méthodes du pseudo-object « String » 
const msg = 'Hello World';

// - Modifier la casse (classique)
const v1 = msg.toLowerCase();
const v2 = msg.toUpperCase();

// - Modifier la casse (Avec respect de la locale)
const msg2 = 'Voici un exemple avec des « i »';
const v3 = msg2.toLocaleLowerCase('fr-be');
const v4 = msg2.toLocaleUpperCase('tr-tr');
// → Résultat : "VOİCİ UN EXEMPLE AVEC DES « İ »" 


// - Obtenir l'index d'un caractere ou d'un texte
const v5 = msg.indexOf('o');        // 4
const v6 = msg.indexOf('World');    // 6
const v7 = msg.indexOf('o', 5);     // 7
const v8 = msg.lastIndexOf('o');    // 7

const v9 = msg.indexOf('w');        // -1


// Obtenir un des caracteres d'une variable string
const v10 = msg.charAt(1);      // e
const v11 = msg[5];
const v12 = msg.charCodeAt(1);  // 101 (Code ASCII)


// Obtenir une lettre depuis un code ASCII
const letterCode = 66;
const v13 = String.fromCharCode(letterCode);    // B


// Remplacer des caracteres dans une chaine
// → Une seul fois
const v14 =  msg.replace('o', '0');     // Hell0 World;

// → Toutes les occurences
const v15 = msg.replaceAll('l', 't');   // Hetto Wortd;


// Extraire une partie de la chaine de caractere
const balthy = "Balthazar Picsou";
const v16 = balthy.substring(3, 7);             // thaz
const v17 = balthy.substring(11);               // icsou
const v18 = balthy.substring(balthy.length -1); // u

const v19 = balthy.slice(1, 5);                 // alth
const v20 = balthy.slice(-1);                   // u

// Découper une chaine de caractere sous la forme d'un tableau
const v21 = balthy.split(' ');  // ["Balthazar", "Picsou"]
const v22 = balthy.split('a');  // ["B", "lth", "z", "r Picsou"]