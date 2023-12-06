const participants = [
    "Soukaina",
    "Richelle",
    "Billy",
    "Timothy",
    "Alain",
    "Yassin",
    "Sami",
    "Timothy",
    "Hoa",
    "Iegor"];


for(let i = 0; i < 10; i++){
    let dernier = participants.pop();   //Enlève et récupère le dernier élément
    participants.unshift(dernier);      //Insère en première position l'élément sauvegarder
    console.log(participants);          //Affiche le résultat
}

participants.splice(2,0,"Samuel","Michael","Gavin","Flavian");


let indice_timothy = participants.findIndex(p => p == 'Timothy');
participants.splice(indice_timothy,1);  //Supprime l'élément présent à l'indice donné
console.log(participants);

let profs = participants.splice(2,4);   //récupère les valeurs supprimées dans une variable

participants.sort();                    //trie par ordre alphabétique

console.log(participants);

let tab_numbers = [1,14,25,52,3,2,4,5,15,28,17];
console.log(tab_numbers);
tab_numbers.sort();
console.log(tab_numbers);
tab_numbers.sort(function (a,b) { return a-b;});
console.log(tab_numbers);
tab_numbers.sort(function (a,b) { return b-a;});
console.log(tab_numbers);


