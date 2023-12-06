let input = prompt("Veuillez indiquer, en secondes, le temps à convertir :");

// alert(`Vous avez introduit ${input} de type ${typeof input}.`);

let temps = parseInt(input);

alert(`Vous avez introduit ${temps} de type ${typeof temps}.`);

/** Version 1 
let minute = Math.floor(temps / 60);
let seconde = temps % 60;

let heure = Math.floor(minute / 60);
minute = minute % 60;

let jour = Math.floor(heure / 24);
heure = heure % 24;
*/

/** Version 2 */

let jour = Math.floor(temps / 86400);
let heure = Math.floor((temps % 86400)/ 3600);
let minute = Math.floor((temps % 3600)/ 60);
let seconde = temps % 60;

alert(`${temps} secondes fait au total ${jour} jours, ${heure} heures, ${minute} minutes et ${seconde} secondes`)