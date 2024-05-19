// Structure conditionnel
// **********************

// - Le structure « if »
// Permet d'executer du code en fonction de condition

const nb = parseInt(prompt('Entrer une valeur'));
if(nb > 42) {
    // Code executé si la condition est vrai
}

const weekDay = parseInt(prompt('Entrer un jour de la semaine (1 à 7)'));
if(weekDay >= 1 && weekDay <=5) {
    console.log('Jour de la semaine');
}
else if(weekDay === 6) {
    console.log('C\'est samedi !!!');
}
else {
    console.log('C\'est dimanche :o');
}


// - Le structure « switch »
// Permet d'executer du code sur base d'egalité strict

const val = parseFloat(prompt('Veuillez encoder un nombre (de 1 à 5)'))

switch(val) {
    case 1 : 
        console.log('Code pour le cas 1');
        // Pas de break, du coup, le code de "case 2" sera egalement executé
    case 2 :
        console.log('Code pour le cas 2');
        break;
    case 3:
    case 4:
        console.log('Code pour le cas 3 & 4');
        break;
    case 5:
        console.log('Code pour le cas 5 !');
        break;
    default : {
        if(isNaN) {
            // NaN ne peut pas être une valeur de "case"
            console.log('Code pour l\' erreur de conversion (NaN)');
        }
        else {
            console.log('Code pour le cas par defaut !');
        }
        break;
    }
}


// - L'operateur « ternaire »
// Ecriture d'un 'if' pour affecter une variable

const nbRes = parseInt(prompt('Entrer une valeur positive'));

let res1;
if(isNaN(nbRes) || nbRes < 0) {
    res1 = 0
}
else {
    res1 = nbRes;
}

// Syntaxe d'un ternaire →  (condition) ? val_si_vrai : val_si_faux

const res2 = (isNaN(nbRes) || nbRes < 0) ? 0 : nbRes;


// - L'utilisation de l'operateur « OU logique »
// Ecriture simplifier d'une condition pour realiser une affectation en cas de valeur "falsy"

const baliseInput = document.getElementById('fred');

let content1;
if(baliseInput) {
    content1 = baliseInput.valueAsNumber;
}
else {
    content1 = 42;
}
const content2 = (baliseInput) ? baliseInput.valueAsNumber : 42;
const content3 = baliseInput?.valueAsNumber || 42;


const nbRes2 = parseInt(prompt('Entrer une valeur positive (Default : 13)'));
const resOu1 = (nbRes2) ? nbRes2 : 13;
const resOu2 = nbRes2 || 13;
// → Inconvenient : Prend en compte toutes les valeurs "falsy"


// - L'utilisation de l'operateur « Nullish coalescing »
// Ecriture de test pour affecter une variable si la valeur tester est 'null' ou 'undefined'

const baliseInput2 = document.getElementById('tom');

let content4;
if(baliseInput2 != null) {
    content1 = baliseInput2.valueAsNumber;
}
else {
    content1 = 42;
}

const content5 = (baliseInput2 != null) ? baliseInput.valueAsNumber : 42;

const content6 = baliseInput2?.valueAsNumber ?? 42;


// La syntaxe « ?. » est l'optional chaining
// → Celle-ci permet d'evité les erreurs si la valeur "baliseInput2" est null