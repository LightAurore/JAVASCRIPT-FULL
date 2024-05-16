'use strict';

// Récup des éléments du DOM
const result = document.getElementById('result');

// Date du jours
const today = new Date();
const todayFormatted = today.toLocaleDateString('fr-be', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})

// Prochaine date de Noël
const christmasDate = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() === 11 && today.getDate() > 25) {
    christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}

// Traitement...
if (today.getMonth() === christmasDate.getMonth()
    && today.getDate() === christmasDate.getDate()) {
    // Affichage que c'est Noël \o/
    result.innerText = 'C\'est Noël 🎄';
}
else {
    // Soustraction entre 2 date => Temps en milliseconds entre les 2
    const waitingTime = christmasDate - today;
    console.log(waitingTime);

    // Conversion du temps en jour (Arrondi superieur)
    const nbDay = Math.ceil(waitingTime / (1000 * 60 * 60 * 24))

    result.innerText = `Nous sommes le ${todayFormatted}, il reste ${nbDay} jours avant Noël !`;
}



