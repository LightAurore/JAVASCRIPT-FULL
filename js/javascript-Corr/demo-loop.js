'use strict';

// Boucle « While »
// 1) Tester une condition
// 2) Si vrai => Traitement
// 3) Retour à l'etape (1)

console.warn('Boucle While');

let nb1 = 10;

while (nb1 > 0) {
    console.log(`Nb1 : ${nb1}`);
    nb1--;
};


// Boucle « Do .. While »
// 1) Traitement du code
// 2) Tester la condition
// 3) Si vrai => Retour à l'etape (1)

// Différence avec la boucle « While », 
// celle-ci effectue toujours au moins une fois le traitement

let nb2;
nb2 = 1;

do {
    console.log(`Nb2 : ${nb2}`);

    nb2++;
}
while (nb2 <= 10);


// Boucle « For i »

// C'est le même fonctionnement qu'une boucle « While » avec : 
// - Une zone d'initialisation => "Avant"
// - Une zone de traitement après le code de la boucle => "Après"

//    Avant
//     |       Condition
//     |         |      Après
//     ↓         ↓       ↓
for(let i = 0 ; i < 10; i++) {
    console.log(`Nb i : ${i}`);
}

// 1) Faire le code "Avant"
// 2) Tester la condition
// 3) Si Vrai → Traitement
// 4) Ensuite, faire le code "Après"
// 5) Retour à l'etape (2)

// Avantage : 
// - Le code "Avant" et "Après" sont lier à la structure de la boucle
// - Si on declare une variable dans la zone "Initialisation", la variable
//   sera local à la boucle


// Le 3 zone de code de la boucle ne sont pas lier !
// 

const nbMystere = 42;
let nbTry;
let nbUser = null

for(nbTry = 1; nbUser != nbMystere; nbTry++) {

    nbUser = parseInt(prompt('Devine le nombre !'));

    if(nbUser != nbMystere) {
        alert('Raté :p');
    }
}

alert('Bravo !');

