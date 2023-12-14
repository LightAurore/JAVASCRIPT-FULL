// Récuperation des éléments du DOM
const inputNumber = document.getElementById('input-number');
const btnValid = document.getElementById('btn-valid');
const btnRestart = document.getElementById('btn-restart');
const userHint = document.getElementById('user-hint');

// Constante global
const MYSTERE_NUMBER_MIN = 0;
const MYSTERE_NUMBER_MAX = 100;
const NB_LIFE = 5;

// Valeur global
let mystereNumber = Math.floor(Math.random() * (MYSTERE_NUMBER_MAX - MYSTERE_NUMBER_MIN +1)) + MYSTERE_NUMBER_MIN;
let nbTry = 1;

btnValid.addEventListener('click', function() {
    // Récuperation de la valeur de l'utilisateur
    const userNumber = parseInt(inputNumber.value);

    if(isNaN(userNumber) || userNumber < MYSTERE_NUMBER_MIN || userNumber > MYSTERE_NUMBER_MAX) {
        // Gestion d'un boulet :o
        userHint.innerText = 'Valeur invalide  (╯°□°）╯︵ ┻━┻';
    }
    else {
        // Traitement
        if(userNumber > mystereNumber) {
            userHint.innerText = 'Plus petit !';
        }
        else if(userNumber < mystereNumber) {
            userHint.innerText = 'Plus grand !';
        }
        else {
            userHint.innerText = `Bravo, vous avez trouvé en ${nbTry} essais !`;
            btnValid.disabled = true;
        }

        // Loose one life
        if(userNumber !== mystereNumber) {
            const heart = document.querySelector('.hearts :nth-last-child(1 of .red)');
            heart?.classList.remove('red');

            // ':nth-last-child(1 of .red)'
            // → Permet de selectionner le dernier element avec la class "red"
        }

        nbTry++;
        inputNumber.value = '';

        // Game over ?
        if(nbTry > NB_LIFE && userNumber !== mystereNumber) {
            userHint.innerText = `Perdu 😭`;
            btnValid.disabled = true;
        }
    }
});


btnRestart.addEventListener('click', function() {
    nbTry = 1;
    btnValid.disabled = false;
    userHint.innerText = '';
    inputNumber.value = '';

    // TODO ↓ Eviter la répetition avec les fonctions 
    mystereNumber = Math.floor(Math.random() * (MYSTERE_NUMBER_MAX - MYSTERE_NUMBER_MIN +1)) + MYSTERE_NUMBER_MIN;

    // TODO ↓ Replace by loop :o
    document.querySelector('.hearts :nth-child(1)').classList.add('red');
    document.querySelector('.hearts :nth-child(2)').classList.add('red');
    document.querySelector('.hearts :nth-child(3)').classList.add('red');
    document.querySelector('.hearts :nth-child(4)').classList.add('red');
    document.querySelector('.hearts :nth-child(5)').classList.add('red');
})