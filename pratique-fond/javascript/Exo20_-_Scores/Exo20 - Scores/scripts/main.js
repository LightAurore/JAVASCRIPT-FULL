/* Version 1
// let nb_joueurs;

// do {
//     nb_joueurs = parseInt(prompt("Combien de joueurs ? (min 2)"))
// } while (isNaN(nb_joueurs) || nb_joueurs < 2);


// let scores = [];

// for (let i = 0; i < nb_joueurs; i++) {
//     do {
//         scores[i] = parseInt(prompt(`Veuillez indiquer le score du joueur ${i+1} :`))
//     } while (isNaN(scores[i]));
// }

// let score_max = scores[0];
// let index = 0;
// for (let i = 1; i < scores.length; i++){
//     if(scores[i] > score_max) {
//         score_max = scores[i];
//         index = i;
//     }
// }

// alert(`Bravo joueur ${index+1}! Vous avez gagné avec un score de ${scores[index]} points!`);*/

/** Version2

let nb_joueurs;

do {
    nb_joueurs = parseInt(prompt("Combien de joueurs ? (min 2)"))
} while (isNaN(nb_joueurs) || nb_joueurs < 2);

let scores = [];
let names = [];

for (let i = 0; i < nb_joueurs; i++) {
    names[i] = prompt(`Veuillez indiquer le nom du joueur ${i+1} :`);
    do {
        scores[i] = parseInt(prompt(`Veuillez indiquer le score de ${names[i]} :`))
    } while (isNaN(scores[i]));
}

let score_max = scores[0];
let index = 0;
for (let i = 1; i < scores.length; i++){
    if(scores[i] > score_max) {
        score_max = scores[i];
        index = i;
    }
}

alert(`Bravo ${names[index]}! Vous avez gagné avec un score de ${scores[index]} points!`);
*/

/*** Version 3

let nb_joueurs;

do {
    nb_joueurs = parseInt(prompt("Combien de joueurs ? (min 2)"))
} while (isNaN(nb_joueurs) || nb_joueurs < 2);

let scores = [[],[]];

for (let i = 0; i < nb_joueurs; i++) {
    scores[0][i] = prompt(`Veuillez indiquer le nom du joueur ${i+1} :`);
    do {
        scores[1][i] = parseInt(prompt(`Veuillez indiquer le score de ${scores[0][i]} :`))
    } while (isNaN(scores[1][i]));
}

let score_max = scores[1][0];
let index = 0;
for (let i = 1; i < scores[1].length; i++){
    if(scores[1][i] > score_max) {
        score_max = scores[1][i];
        index = i;
    }
}

alert(`Bravo ${scores[0][index]}! Vous avez gagné avec un score de ${scores[1][index]} points!`);
 */

/**** Version 4

let nb_joueurs;

do {
    nb_joueurs = parseInt(prompt("Combien de joueurs ? (min 2)"))
} while (isNaN(nb_joueurs) || nb_joueurs < 2);

let joueurs = [];

for (let i = 0; i < nb_joueurs; i++) {
    let joueur = {};
    joueur.name = prompt(`Veuillez indiquer le nom du joueur ${i+1} :`);
    do {
        joueur.score = parseInt(prompt(`Veuillez indiquer le score de ${joueur.name} :`))
    } while (isNaN(joueur.score));
    joueurs[i] = joueur;
}

let score_max = joueurs[0].score;
let index = 0;
for (let i = 1; i < joueurs.length; i++){
    if(joueurs[i].score > score_max) {
        score_max = joueurs[i].score;
        index = i;
    }
}

alert(`Bravo ${joueurs[index].name}! Vous avez gagné avec un score de ${joueurs[index].score} points!`);
 */

/***** Version 5 */
let nb_joueurs;

do {
    nb_joueurs = parseInt(prompt("Combien de joueurs ? (min 2)"))
} while (isNaN(nb_joueurs) || nb_joueurs < 2);

let joueurs = [];

for (let i = 0; i < nb_joueurs; i++) {
    let joueur = {};
    joueur.name = prompt(`Veuillez indiquer le nom du joueur ${i+1} :`);
    do {
        joueur.score = parseInt(prompt(`Veuillez indiquer le score de ${joueur.name} :`))
    } while (isNaN(joueur.score));
    joueurs[i] = joueur;
}

let vainqueur = joueurs[0];
for (let i = 1; i < joueurs.length; i++){
    if(joueurs[i].score > vainqueur.score) vainqueur = joueurs[i];
}

alert(`Bravo ${vainqueur.name}! Vous avez gagné avec un score de ${vainqueur.score} points!`);
