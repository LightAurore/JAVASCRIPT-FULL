// let nb_roll = parseInt(prompt("Veuillez indiquer le nombre de lancé :"));
// while (isNaN(nb_roll)) {
//     nb_roll = parseInt(prompt(`${nb_roll} n'est pas valide...\nInsérer un nombre entier :`));
// }

let nb_roll;
do {
    nb_roll = parseInt(prompt("Veuillez indiquer le nombre de lancé :"));
}while (isNaN(nb_roll));


const MIN = 1;
const MAX = 6;

let total_dices = 0;

/*BOUCLE While
let i = 0;      //Initialiseur

while (i < nb_roll) {   //Condition
    let current_roll = Math.round(Math.random() * (MAX - MIN)) + MIN;
    alert(current_roll);
    total_dices = total_dices + current_roll;
    i = i + 1;          //Modification
}

alert(`Le total pour ${nb_roll} lancé(s) est de ${total_dices}.`);
*/

//BOUCLE do...while (équivalant à la While, sauf que la première itération est toujours effectuée, c'est après que la condition est vérifiée)

let i = 0;      //Initialiseur

do{
    let current_roll = Math.round(Math.random() * (MAX - MIN)) + MIN;
    alert(current_roll);
    total_dices = total_dices + current_roll;
    
    i = i + 1;          //Modification
} while(i < nb_roll);   //Condition

alert(`Le total pour ${nb_roll} lancé(s) est de ${total_dices}.`);