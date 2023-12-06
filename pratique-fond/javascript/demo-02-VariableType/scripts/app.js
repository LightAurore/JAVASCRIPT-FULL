/*   DEMO String  */

/*

let message = "Bienvenu sur mon site";
alert(message)
message = "Ici, nous traitons des données stockés en variable!";
alert(message)
msg = `Ce ${message} se nomme "message" `;
alert(msg)

message = `Nous verrons plutard :\n\t1. Les valeurs numériques\n\t2. Les structures conditionnelles\n\t3. Les structures itératives`;
alert(message)

let username = "TotoBstorm";
message = `Je vous souhaite une bonne journée ${username}`;

alert(message);

alert(`La variable message est de type ${typeof message}`);

*/

/*   DEMO Number  */

let nb_1a = 42;
let PI =3.141592;   /* Décimal avec un point . */

// let infinity_nb = infinity;   une constatnte à valeur infini

let ceci_est_pas_un_nombre = NaN;  /* un résultat numérique qu'il est impossible d'obtenir sous forme de nombre */

// console.log(isNaN(nb_1));
// console.log(isNaN(ceci_est_pas_un_nombre));

/*
let sum = nb_1 + PI;
alert(`La somme de ${nb_1} + ${PI} = ${sum}`);
let sub = nb_1 - PI;
alert(`La différence de ${nb_1} - ${PI} = ${sub}`);

let multiple = nb_1 * PI;
alert(`La multiplication de ${nb_1} * ${PI} = ${multiple}`);

let division = nb_1 / PI;
alert(`La division de ${nb_1} / ${PI} = ${division}`);

let modulo = nb_1 % PI;
alert(`Le modulo de ${nb_1} % ${PI} = ${modulo}`);

let div_entiere = Math.floor(nb_1/PI);
alert(`La division naturelle de ${nb_1} / ${PI} = ${div_entiere}`);

/* Fonction Math */


/*
alert(`Le carée de 3, c'est ${Marh.pow(3,2)}`);
alert(`Le carée de 3, c'est ${Marh.sqrt(9)}`);

let min = 1;
let max = 6;
let rnd = Math.random();
alert(`Lancée de dé, c'est ${Math.floor((rnd * (max - min) ) + min)}`);
*/

/*  Conversion de string en nombre et de number en string  */

let input = prompt("Quelle est votre année de naissance ?");

alert(`L'input vaut ${input} et de type ${typeof input}.`)

/* String vers number */


/* s'il s'agit d'un possible réel (avec décimal) */
// let annee = parseFloat(input);
// alert(`L'input converti avec parseFloat vaut${annee} et  de type  ${typeof annee}.`);

/* s'il s'agit d'un possible nombre entier (sans décimal) */
let annee = parseInt(input);
alert(`L'input converti avec parseInt vaut ${annee} et  de type  ${typeof annee}.`);

/*  Number to string */

let numero=(1987).toString();
alert(`Le numéro vaux ${numero} et type ${typeof numero}`);


let eclairage_allume = false;  // Si mon éclairage est effectivement allumé, alors 
eclairage_allume = false; //  Au contraire si il est éteint la valeur sera 'false' .

/*   Truthy   /  Falsy  */

let message = ' '; // c'est comme un false car zéro caractère.
message = 'Bonjour';  // C'est comme un true car plus de zéro ceractères

let nb_1 = 0;  // c'est comme un false car vaut zéro.
let nb_2 =42;  // c'est comme un true car différent de zéro.
let nb_3 =-1;  // c'est comme un true car différent de zéro.

let nb_4 = NaN  // c'est comme un false car NaN est toujours faux.
let varible_1 = null; // c'est comme un false car un null est toujours faux.
let varible_2 = undefined; // c'est comme un false car un undefined est toujours faux.


/*  Opérateurs booleén  */
/* opérateur retournant un booléen */
let points_jean = 18;
let point_fred = 9;

const MOYENNE = 10;
let reussite_jean = points_jean >= MOYENNE;
let reussite_fred = points_fred >= MOYENNE;

alert(`jean a réussi : ${reussite_jean}`);
alert(`fred a réussi : ${reussite_fred}`);

/*  opérateur de comparaisons : 
a == b          a doit avoir la même valeur que b
a === b        a doit avoir la même valeur et le même type que b

a != b          a doit avoir une valeur différente que b
a !== b          a doit avoir une valeur et un type différents que b

a > b           a doit avoir une valeur supérieure à celle de b

<=
>=

&&
||

!

*/


/* opérateur utilisant un booléen */

