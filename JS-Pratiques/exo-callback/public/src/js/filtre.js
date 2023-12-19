'use strict';

// Dom
/**
 * personnages nom
 */

const della = document.getElementById("della-name");
const balthazar = document.getElementById("balthazar-name");
const zaza = document.getElementById("zaza-name");
const gontran = document.getElementById("gontran-name");
const riri = document.getElementById("riri-name");

/**
 * inputs
 */
const letterInput = document.getElementById('lettre-input');


/**
 * boutons
 */
const btnLetter = document.getElementById('btn-letter');
const btnLetterSame = document.getElementById('btn-lettre-same');
const btnLetterUnique = document.getElementById('btn-lettre-unique');


/** Variables */
const personnages = ["Della", "Balthazar", "Zaza", "Gontran", "Riri"];


/**
 * Filtres
 */

function HasLetter(name, letter){
    for (let i = 0; i < name.length; i++) {
        if(name[i].includes(letter)){
            console.log(name[i]);
        }
    }
}

function HasPlusLetterSame(name){
    for (let i = 0; i < name.length; i++) {
        let nom = name[i];
        let nomCompare = name[i];
        let j = 0;

        for (const char of nom) {
            let k =0;

            nomCompare.split('').forEach(car => {
                if(car == char){
                    k++;
                }

                j = (j > k ) ? j : k;
            });
        }

        if(j >= 2){
            console.log(name[i]);
        }
        
    }
}

function HasFirstLetterUnique(name){
    for (let i = 0; i < name.length; i++) {
        let nom = name[i];
        let nomCompare = name[i];
        let j = 1;
        let k =0;

            nomCompare.toLowerCase().split('').forEach(car => {
                if(car == `${nom[0].toLowerCase()}`){
                    k++;
                }

                j = (k == 1) ? k: j;
            });
        
        if(k < 2){
            console.log(name[i]);
        }
        
    }
}


/**
 * personnages nom
 */

della.innertext = personnages[0];
balthazar.innertext = personnages[1];
zaza.innertext = personnages[2];
gontran.innertext = personnages[3];
riri.innertext = personnages[4];



/** Fonctions callbacks */




/** Evenements sur les boutons et les inputs */

btnLetter.addEventListener('click',() => {
    HasLetter(personnages,"z");
    }
)

btnLetterSame.addEventListener('click',() => {
    HasPlusLetterSame(personnages);
    }
)
btnLetterUnique.addEventListener('click',() => {
    HasFirstLetterUnique(personnages);
    }
)