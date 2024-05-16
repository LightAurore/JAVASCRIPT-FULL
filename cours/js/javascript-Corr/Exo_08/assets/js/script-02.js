'use strict';

const now = new Date();

// Element du DOM
const inputBirthdateDate = document.getElementById('input-birthdate-date');
const inputBirthdateMonth = document.getElementById('input-birthdate-month');
const inputBirthdateYear = document.getElementById('input-birthdate-year');
const btnValid = document.getElementById('btn-valid');
const resultZone = document.getElementById('result-zone');

// Listener sur le bouton de validation
btnValid.addEventListener('click', function () {
    // Récupation des valeurs
    const birthdateDate = parseInt(inputBirthdateDate.value);
    const birthdateMonth = parseInt(inputBirthdateMonth.value) - 1;
    const birthdateYear = parseInt(inputBirthdateYear.value);

    // Check birthdate is valid
    const birthdate = new Date(birthdateYear, birthdateMonth, birthdateDate);
    if (birthdate.getDate() !== birthdateDate) {
        const errorMessage = document.createElement('h3');
        errorMessage.innerText = 'Date de naissance invalide !';
        resultZone.append(errorMessage);
    }
    else {
        // Traitement ...

        // - Calcul de l'age
        let age = now.getFullYear() - birthdate.getFullYear();
        let nextBirthdateYear = now.getFullYear();

        // - Anniversaire aujourd'hui ?
        const isBirthdayNow = birthdate.getMonth() === now.getMonth() && birthdate.getDate() === now.getDate(); 

        // - Correction de la valeur de l'age ou du prochain anniversaire
        if ((birthdate.getMonth() >= now.getMonth()) 
            && (birthdate.getMonth() === now.getMonth() && birthdate.getDate() > now.getDate())) {
            age--;
        }
        else {
            nextBirthdateYear++;
        }

        // Affichage
        const ageDisplay = document.createElement('p');
        ageDisplay.innerText = `Vous avez ${age} ans !`;
        resultZone.append(ageDisplay);

        if(isBirthdayNow) {
            const birthdayDisplay = document.createElement('p');
            birthdate.innerText = `Bon anniversaire !`;
            resultZone.append(birthdayDisplay);
        }


        // - Recherche de la prochaine date 
        for(let i = 0; i < 3; i++) {
        
            let nextBirthdate;
            do {
                nextBirthdate = new Date(nextBirthdateYear, birthdate.getMonth(), birthdate.getDate())
                nextBirthdateYear++;
            }
            while(nextBirthdate.getDate() !== birthdate.getDate()); 



            const nextBirthdateDisplay = document.createElement('p');
            nextBirthdateDisplay.innerText = nextBirthdate.toLocaleDateString('fr-be', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                weekday: 'long'
            });
            resultZone.append(nextBirthdateDisplay);

        }


    }

})