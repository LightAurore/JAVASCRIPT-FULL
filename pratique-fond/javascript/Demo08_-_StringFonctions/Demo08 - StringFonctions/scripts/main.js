let mot = 'Playmobile';
let mot_en_maj = mot.toUpperCase(); //retourne 'Playmobile' en majuscules

let huitieme_carac = "Playmobile".charAt(7);  
//OU
//let huitieme_carac = "Playmobile"[7];

console.log(huitieme_carac);    //i

console.log(mot_en_maj.charCodeAt(2)); //retourne 65 code ASCII du A
console.log(mot.charCodeAt(2)); //retourne 97 code ASCII du a
console.log(String.fromCharCode(97));    //retourne 'a' caractère du code ASCII 97
console.log(String.fromCharCode(65));    //retourne 'A' caractère du code ASCII 65
console.log(mot.indexOf('mobile'));  //retourne 4 car 'mobile' débute à l'indice 4 de 'playmobile'
console.log(mot.indexOf('mod'));     //retourne -1 car 'mod' pas présent dans 'playmobile'

console.log(mot.indexOf('l'));    //retourne 1 car le premier 'l' est en indice 1
console.log(mot.lastIndexOf('l'));//retourne 8 car le dernier 'l' est en indice 8

console.log(mot.match(/^P[a-z]*e$/));   //retourne null si pas de correspondance, sinon un tableau de correspondance

console.log(mot.replace('a','u'));
console.log(mot.replace('l','n'));

console.log(mot.slice(4));
console.log(mot.slice(0,4));

let formations = 'WEB,JS,HTML,CSS';
console.log(formations.split(','));
console.log(formations.split(''));