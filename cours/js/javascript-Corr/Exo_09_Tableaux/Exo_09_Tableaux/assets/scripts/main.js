// ! Exo 09 - Tableaux :
const trainees = [];

const traineeName = document.querySelector("#trainee-name");
const traineeAdd = document.querySelector("#trainee-add");
const traineesTotal = document.querySelector("#trainees-total");
const result = document.querySelector("#result");
const sortOption = document.querySelector("#sort-option");
const sort = document.querySelector("#sort");
const searchTerm = document.querySelector("#search-term");
const search = document.querySelector("#search");
const last = document.querySelector("#last");
const charMax = document.querySelector("#char-max");

// Créer un site web qui permet à l'utilisateur : 
//? 1) D'encoder le nom de stagiaire via un input
traineeAdd.addEventListener('click', function() {
    const value = traineeName.value;
    // On vérif si on ajoute pas du vide
    if(value.trim() != '') {
        trainees.push(value.trim());

    }
    //TODO dégager ça
    console.log(trainees);

    // Vide l'input et remet le focus à l'intérieur
    traineeName.value = '';
    traineeName.focus();
})

//? 2) D'obtenir le nombre de stagiaires encodés
traineesTotal.addEventListener('click', function() {
    const total = trainees.length;
    result.innerText = `Il y a ${total} stagiaires au total !`;
})

//? 3) D'afficher la liste des stagiaires dans l'ordre alphabétique
sort.addEventListener('click', function() {
    result.innerHTML = "";

    const sortOptionValue = sortOption.value;

     let traineesSorted = [];

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    if(sortOptionValue === 'asc') {
        traineesSorted = trainees.toSorted(function(a, b) { return a.localeCompare(b) });
    } else {
        traineesSorted = trainees.toSorted(function(a, b) { return b.localeCompare(a) });
        
    }
    
    //Oui mais berk
    // result.innerText = traineesSorted.join("\n")

    // Avec boucle
    // for(trainee of trainees) {}
    // ou
    const ul = document.createElement("ul");
    traineesSorted.forEach(function(trainee) {
        const newLi = document.createElement("li");
        newLi.innerText = trainee;
        ul.append(newLi);
    })
    result.append(ul);    
})

//? 4) À l'aide d'un second input, d'afficher la liste filtrée
search.addEventListener('click', function() {
    const searched = searchTerm.value;

    let traineesFiltred = [];
    if( searched.trim() != '' ) {
       traineesFiltred = trainees.filter(function(trainee) {
        return trainee.toLowerCase().includes(searched.trim().toLowerCase());
       })
    }

    result.innerHTML = '';
    const ul = document.createElement("ul");
    traineesFiltred.forEach(function(trainee) {
        const newLi = document.createElement("li");
        newLi.innerText = trainee;
        ul.append(newLi);
    })
    result.append(ul);  

    searchTerm.value = '';
    searchTerm.focus();

})

//? 5) D'afficher le dernier stagiaire encodé
last.addEventListener('click', function() {
    const lastTrainee = trainees[trainees.length - 1 ];
    
    //Ou https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at
    const lastTrainee2 = trainees.at(-1);
    result.innerHTML = '';
    result.innerText = `Le dernier ajouté est ${lastTrainee2}`;
})


// * BONUS : Afficher le caractère le plus présent dans tous les stagiaires
charMax.addEventListener('click', function() {
    result.innerHTML = '';

    // Pour s'épargner une boucle dans une boucle, on join tous les noms des stagiaires en une seule chaine
    const traineesFusion = trainees.join("");

    const letters = new Map();    

    // Pour chaque caractère dans la chaine
    for(let char of traineesFusion ){
        // Si caractère pas présent dans le dictionnaire, on l'ajoute et setup sa quantité à 1
        if(!letters.has(char)){
            letters.set(char, 1)
        }
        // Si par contre, il est déjà présent, on récupère son ancienne quantité, pour lui ajotuer 1
        else {
            letters.set(char, letters.get(char)+1)
        }
    }    
    
    // On recherche la valeur maximum parmi toutes les valeurs du dictionnaire
    const nbMax = Math.max(...letters.values())

    // On initialise un tableau avec les lettres trouvées et on parcourt le dictionnaire pour voir quelle lettre a le max en quantité
    const lettersFound = [];
    letters.forEach(function(v,k) {
        if(v === nbMax) {
            lettersFound.push(k);
        }
    })

    // Si une seule valeur dans le tableau : Une seule correspond au max
    if(lettersFound.length === 1) {
        result.innerText = `La lettre rencontrée le plus de fois est le ${lettersFound[0]} avec ${nbMax} occurences.`;
    }
    // Sinon, on affiche toutes les lettres qui correspondent au max
    else {
        result.innerHTML = `Les lettres rencontrées le plus de fois sont ${lettersFound.join()} avec ${nbMax} occurences.`;
        
    }
})





// #region apparté sur DEMO Set et Map
// Set : liste d'éléments unique, si on ajouté un élément déjà présent dans la list, celui ci est ignoré
const setList = new Set();
setList.add(5);
setList.add("Aude");
setList.add(5);
setList.delete(5);

// Petit cas à part pour les objets, ils ont beau avoir la même valeur, ce sont deux objets distincts avec deux adresses mémoire différentes, les deux vont être ajoutés
// const obj = { pouet : 5, truc : 6 }
// setList.add(obj);
// setList.add({ pouet : 5, truc : 6 });

setList.forEach(function(value) {
    console.log(value);
})

// Map : Dictionnaire clef - valeur (chaque clef est unique)

const mapDictionnary = new Map();
mapDictionnary.set('lundi', 'des patates');
mapDictionnary.set('mardi', 'des raviolis');
mapDictionnary.set('lundi', 'des nouilles');

console.log(mapDictionnary.get('lundi'));
console.log(mapDictionnary.has('mercredi'));

// mapDictionnaty.forEach(function(value, key) { 
//     console.log(`${key} : ${value}`);
// })


// Le map est peu utilisé -> Pour cause : Les objets permettent de faire pareil mais en plus simple
// const mapDictionnary2 = {
//     'lundi' : 'des patates',
//     'mardi' : 'des raviolis',
// }

// mapDictionnary2['lundi'] = 'des nouilles';
// mapDictionnary2.mercredi = 'des spaghettis';
// console.log(mapDictionnary2['mercredi']);
// #endregion