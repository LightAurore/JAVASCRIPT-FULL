'use strict';

// Element du DOM
const inputMulti = document.querySelector('#input-multi');
const inputNbOp = document.querySelector('#input-nb-op');
const btnValid = document.querySelector('#btn-valid');
const resultZone = document.querySelector('#result-zone');

// Listener sur le click du bouton
btnValid.addEventListener('click', function () {
    // Cleanup de la zone
    while (resultZone.firstChild) {
        resultZone.firstChild.remove();
    }

    // Récuperation des valeurs
    const multi = inputMulti.valueAsNumber;
    const nbOp = parseInt(inputNbOp.value) || 10;

    // Tester si le multiplicateur est invalide
    if (isNaN(multi)) {
        const errorHead = document.createElement('h3');
        errorHead.innerText = 'Valeur de multiplicateur invalide :(';
        resultZone.append(errorHead);
    }
    else {
        // En-tete
        const resultHead = document.createElement('h3');
        resultHead.innerText = `Table de ${multi}`;
        resultZone.append(resultHead);

        // Content
        for (let count = 1; count <= nbOp; count++) {
            // - Réaliser le calculer
            const result = count * multi;

            // - Afficher la ligne de resultat
            const resultLine = document.createElement('p');
            resultLine.innerText = `${multi} x ${count} = ${result}`;
            resultZone.append(resultLine);
        }
    }
});