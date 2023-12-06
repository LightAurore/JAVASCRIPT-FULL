// /* DEMO String */

// let message = "Bienvenue sur mon site web";     //Variable "message" contenant du string (type texte) grâce aux "..."
// alert(message);
// message = 'Ici nous traitons des données stocké en variable!';  //Variable "message" contenant du string (type texte) grâce aux '...'
// alert(message);
// message = `Ce message est une variable nommée "message" !`; //Variable "message" contenant du string (type texte) grâce aux `...`
// alert(message);
// message = `Nous verrons plutard :\n\t1.Les valeurs numériques\n\t2.Les structures conditionnelles\n\t3.Les structures itératives`;    //Dans un texte, des caractères non-représentalbe (tabulations, retour à la ligne, ...) sont des caractères accompagné du \ (\t, \n, ...)
// alert(message);
// let username = "SamBstorm";
// message = `Je vous souhaite une bonne journée ${username}`; //Utilisation de `...` permet de faire de l'interpolation de texte (incruster une valeur dans du texte), il suffit d'indiquer la valeur ou variable entre ${...}
// alert(message);
// alert(`La variable message est de type ${typeof message}`); //typeof est ce que l'on appelle un opérateur, avec lequel vous obtenez le typage d'une variable

// /* DEMO number */

// let nb1 = 42;       //Pas de symbole pour les valeurs numériques, et encore moins pour un entier
// let nb2 = 3.141592; //Pas de symbole pour les valeurs numériques, sauf un . pour marquer le décimal

// let infinity_nb = Infinity;   //Infinity est ce que l'on appelle une constante, elle représente une valeur infini
// let ceci_est_pas_un_nombre = NaN;   //NaN (Not a Number) est un résultat numérique, qui n'est pas possible d'obtenir sous forme de nombre (convertion ou calcul faussé...)
// console.log(isNaN(nb1));    //false : car 42 est bien un nombre
// console.log(isNaN(ceci_est_pas_un_nombre));    //true : car cette variable est bien un NaN

// /* opérateurs Arithmétiques */

// nb1 = 45;
// nb2 = 7;

// let sum = nb1 + nb2;    //Addition entre nb1 et nb2
// alert(`La somme de ${nb1} + ${nb2} = ${sum}`);

// let sub = nb1 - nb2;    //Soustraction entre nb1 et nb2
// alert(`La différence de ${nb1} - ${nb2} = ${sub}`);

// let multiple = nb1 * nb2;    //Multiplication de nb1 par nb2
// alert(`Le produit de ${nb1} * ${nb2} = ${multiple}`);

// let div = nb1 / nb2;    //Division de nb1 par nb2
// alert(`Le quotient de ${nb1} / ${nb2} = ${div}`);

// let modulo = nb1 % nb2; //Récupération du reste d'une division entière de nb1 par nb2
// let div_entiere = Math.floor(nb1 / nb2);    //J'utilise la fonction Math.floor, pour supprimer la décimale
// alert(`Le résultat d'une division entière de ${nb1} / ${nb2} = ${div_entiere}`);
// alert(`Le reste d'une division de ${nb1} / ${nb2} = ${modulo}`);

// /* fonction Math */

// alert(`Le carré de 3 c'est ${Math.pow(3,2)}`);
// alert(`La racine carré de 9 c'est ${Math.sqrt(9)}`);

// let min = 1;
// let max = 6;
// let rnd = Math.random();

// alert(`Mon dé m'a retourné la valeur de ${Math.floor((rnd*(max -min)) + min)}`)

// /* Conversion entre string en number et entre number et string */

// let input = prompt("Quel est votre année de naissance ?");

// alert(`L'input vaut ${input} et de type ${typeof input}.`);

// /* string vers number */

// /* si il s'agit d'un possible réel (avec décimal) */

// // let annee = parseFloat(input);
// // alert(`L'input converti avec parseFloat vaut ${annee} et de type ${typeof annee}.`);

// /* si il s'agit d'un nombre entier (sans décimal) */

// let annee = parseInt(input);
// alert(`L'input converti avec parseInt vaut ${annee} et de type ${typeof annee}.`);

// /* number vers string */

// let numero = (1987).toString();

// alert(`Le numéro vaut ${numero} et de type ${typeof numero}.`);


/* Type boolean */

let eclairage_allume = true;    //Si mon éclairage est effectivement allumé, alors nours introduisons la valeur 'true' qui veut dire 'vrai'
eclairage_allume = false;       //Au contraire si il est étaint la valeur sera 'false' qui veut dire 'faux'

/* Truthy / Falsy */

let message = '';   //C'est comme un false car 0 caractères
message = 'bonjour';//C'est comme un true car plus de 0 caractères
let nb = 0;         //C'est comme un false car vaut 0 
nb = 42;            //C'est comme un true car différent de 0 
nb = -5;            //C'est comme un true car différent de 0 
nb = NaN;           //C'est comme un false car un NaN est toujours faux

let variable1 = null;//C'est comme un false car un null est toujours faux
let variable2 = undefined;//C'est comme un false car un undefined est toujours faux

/* opérateurs booleén */
/* opérateur retournant un booléen */
const MOYENNE = 10;

let points_jean = 18;
let points_fred = 9;

let reussite_jean = points_jean >= MOYENNE;
let reussite_fred = points_fred >= MOYENNE;

alert(`Jean a réussi : ${reussite_jean}`);
alert(`Fred a réussi : ${reussite_fred}`);

/* opérateur de comparaisons :

    a == b          a doit avoir la même valeur que b
    a === b         a doit avoir la même valeur et le même type que b

    a != b          a doit avoir une valeur différente de b
    a !== b         a doit avoir une valeur et un type différent de b

    a > b           a doit avoir une valeur supérieur à celle de b
    a >= b          a doit soit avoir une valeur supérieur, soit une valeur égale à b

    a < b           a doit avoir une valeur inférieur à celle de b
    a <= b          a doit soit avoir une valeur inférieur, soit une valeur égale à b

    typeof a == typeof b    a doit être du même type que b, peu importe la valeur
    */

/* opérateur utilisant un booléen */

let vitesse = 100;

let vit_min = 70;
let vit_max = 120;

let roule_Ok = vitesse >= vit_min && vitesse <= vit_max;
alert(`Est-ce que je roule à la bonne vitesse : ${roule_Ok}`);

/* opérateurs logiques (combinent des booléens pour obtenir du booléen)

    ET logique
    a && b          si a et b donnent 'true' alors le résultat est 'true'
                    si a, b, les deux donnent 'false' alors le résultat est 'false'

    OU logique
    a || b          si a, b, les deux donnent 'true' alors le résultat est 'true'
                    si a et b donnent 'false' alors le résultat est 'false'

    NON logique
    !a              Si a vaut 'true' le résultat est 'false'
                    Si a vaut 'false' le résultat est 'true'

*/