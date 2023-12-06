let nb_roll = parseInt(prompt("Veuiller indiquer le nombre de lancé :"));
while(isNaN(nb_roll)){
    nb_roll = parseInt(prompt(`${nb_roll} n'est pas valide ...\n Insérer un nombre entier :`))
}


const MIN = 1;
const MAX = 6;

let total_dices = 0;

// Boucle While

let i = 0;  // Initialisation
while(i < nb_roll){ // Condition
    let current_roll = Math.round(Math.random() * (MAX - MIN)) + MIN;
    alert(current_roll);
    total_dices = total_dices + current_roll
    i = i +1;  // Modification
}

alert(`Le total pour ${nb_roll} lancé(s) est de ${total_dices}`)

// Boucle do ... while

let j = 0;
do{
    let current_roll = Math.round(Math.random() * (MAX - MIN)) + MIN;
    alert(current_roll);
    total_dices = total_dices + current_roll
    j = j +1;  // Modification
}while(j < nb_roll)
alert(`Le total pour ${nb_roll} lancé(s) est de ${total_dices}`)