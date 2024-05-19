const NB_SEC_PAR_MINUTE = 60;
const NB_SEC_PAR_HEURE = 3600;
const NB_SEC_PAR_JOUR = 86400;

let temps = parseInt(prompt("Veuillez indiquer le temps en secondes :"));

let jours, heures, minutes, secondes;

// jours = parseInt(temps / NB_SEC_PAR_JOUR);
jours = Math.floor(temps / NB_SEC_PAR_JOUR);    //temps : 4561 => 0 jours
// heures = Math.floor((temps -(NB_SEC_PAR_JOUR * jours)) / NB_SEC_PAR_HEURE);  
heures = Math.floor((temps % NB_SEC_PAR_JOUR) / NB_SEC_PAR_HEURE);  
minutes = Math.floor((temps % NB_SEC_PAR_HEURE) / NB_SEC_PAR_MINUTE);
secondes = temps % NB_SEC_PAR_MINUTE;

console.log(`Pour ${temps} seconde(s), cela nous fait :\n${jours} jour(s) ${heures} heure(s) ${minutes} minute(s) et ${secondes} seconde(s).`);