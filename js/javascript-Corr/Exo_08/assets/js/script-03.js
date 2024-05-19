'use strict';

// Récuperation des elements du DOM
const inputTaille = document.querySelector('#input-taille');
const btnValid = document.querySelector('#btn-valid');
const sapinResult = document.querySelector('#sapin-result');

// Réaction au bouton
btnValid.addEventListener('click', function () {
    // Récuperation de la valeur demander
    const taille = inputTaille.valueAsNumber;
    console.log(taille);

    // Si la taille est >= 5
    if (taille >= 5) {
        // - Dessin du sapin
        let sapin = '';
        const etageTronc = 20;

        // - Feuillage
        let nbFeuille = 1;
        let nbSpace = taille - 2;

        for (let i = 0; i < (taille - 1); i++) {

            // - Ligne d'espace avant le feuillage
            for (let k = 0; k < nbSpace; k++) {
                sapin += ' ';
            }

            // - Ligne de feuillage du sapin
            for (let k = 0; k < nbFeuille; k++) {
                sapin += '*'
            }

            // - Saut de ligne
            sapin += '\n';

            // - Modifie les variables
            nbFeuille += 2;
            nbSpace -= 1;
        };

        // - Tronc (Dynamique => En fonction de la taille du sapin)

        // Regle : Minimum 1 et par etage de 20 celui-ci gagne une taille
        let nbTronc = (Math.floor(taille / etageTronc) * 2) + 1;

        // Position du tronc avec la correction dû à la taille de tronc dynamique
        let nbSpaceTronc = taille - 2 - Math.floor(nbTronc /2);

        // Ligne des espaces et du tonc
        for (let k = 0; k < nbSpaceTronc; k++) {
            sapin += ' ';
        }
        for (let k = 0; k < nbTronc; k++) {
            sapin += '#'
        }

        // - Affichage dans le DOM
        sapinResult.innerText = sapin;
    }
    else if (taille > 0) {
        // - Sapin trop petit
        sapinResult.innerText = 'Taille de sapin trop petite !'
    }
    else {
        // - Erreur
        sapinResult.innerText = 'Valeur non supporté !  (╯°□°）╯︵ ┻━┻'
    }
})