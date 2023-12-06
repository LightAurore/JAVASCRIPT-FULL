
let nb1 = 7;
let nb2 = 5;

// alert(`nb1 vaut  ${nb1}`);
// alert(`nb2 vaut  ${nb2}`);


// 1.  Continuez ce code, de sorte à ce que les variables nb1 et nb2 inversent leurs valeurs: 
// let intermerdiaire = nb1;
// nb1 = nb2;
// nb2= intermerdiaire;


// 2.  Effectuer le même travail qu'au-dessus mais avec uniquement des opérateurs arithmétiques  (- , *,  /,  +, %)
let sum = (nb1+nb2);

nb1= sum - nb1;
nb2= sum -nb2;


// alert(`nb1 vaut maintenant ${nb1}`);
// alert(`nb2 vaut maintenant ${nb2}`);

// 3.

let secondes = parseInt(90061);
let minutes = Math.floor(secondes/60); // 4561 // 60 => 76 
let heures = Math.floor(minutes/60);    // 76 // 60 => 1
let jours = Math.floor(heures/24);        // 1 // 24 => 0

// console.log(Math.floor(jours),Math.floor(heures) , parseInt(minutes%60), (secondes%60));

alert(`${secondes} vaut ${jours} jours, ${heures%24} heures, ${minutes%60} minutes et ${secondes%60}  secondes.`);

secondes = prompt("Donnez le nombre de secondes :");
secondes = parseInt(secondes);
minutes = (secondes/60);
heures = minutes/60;
jours = heures/24;

// alert(`${secondes} vaut ${Math.floor(jours%24)} jour, ${Math.floor(heures%24)} heures, ${parseInt(minutes%60)} minutes et ${(secondes%60)}  secondes.`);

document.getElementById('time').innerText = `${secondes} sécondes vaut ${Math.floor(jours%24)} jour, ${Math.floor(heures%24)} heures, ${parseInt(minutes%60)} minutes et ${(secondes%60)}  secondes.`;


