'use strict';

// Constantes
const NB_CARDS = 12;
const TIMER_BASE = 300;
const WAIT_TIME_ERROR = 500;

// Variables
let currentTime;
const cardValues = new Map();
const cardCurrentTry = [];
const cardValidates = [];
let gameover = true;
let timerId;

// Element du DOM
const gameBoard = document.getElementById('game-board');
const gameTimer = document.getElementById('game-timer');
const gameMsg = document.getElementById('game-message');
const btnStart = document.getElementById('btn-game-start');
const btnRestart = document.getElementById('btn-game-restart');

// Méthodes
function initializeGame() {
    // Timer
    currentTime = TIMER_BASE;
    displayTimer();

    // Cartes
    for (let i = 0; i < (NB_CARDS * 2); i++) {
        const card = createCard(`card-${i}`);
        gameBoard.append(card);
    }
}
initializeGame();

btnStart.addEventListener('click', () => {
    startGame();

    btnRestart.removeAttribute('disabled');
    btnStart.remove();
})

btnRestart.setAttribute('disabled', 'disabled');
btnRestart.addEventListener('click', () => {
    if (gameover) {
        startGame();
        return;
    }

    // TODO Remplacer par une Modal =)
    const response = confirm('Êtes vous sûr de recommencer le jeu ?')
    if (response) {
        startGame();
    }
})

function startGame() {
    // Génération des valeurs des cartes
    generateCardValues(NB_CARDS);

    // Clear les valeurs des mémoires
    hideCard(...cardCurrentTry, ...cardValidates);
    cardCurrentTry.splice(0, cardCurrentTry.length);
    cardValidates.splice(0, cardValidates.length);

    // Efface le message
    gameMsg.innerText = 'Prêt ?';
    
    // Reset Timer
    clearInterval(timerId);
    currentTime = TIMER_BASE;
    displayTimer();

    setTimeout(() => {
        gameMsg.innerText = 'La partie commence !';

        // Autoriser l'utilisateur a jouer
        gameover = false;

        // Activation du chrono !
        activeTimer();
    }, 500);
}

function generateCardValues(nbPairCards) {
    // - Clear de Map de cartes
    cardValues.clear();

    // - Tableau avec les cartes possible
    const cardDispo = [];
    for (const cardElement of gameBoard.children) {
        cardDispo.push(cardElement.id);
    }

    // Gestion d'erreur
    if (cardDispo.length < nbPairCards * 2) {
        throw new Error('Nombre de cartes invalides !!!');
    }

    // - Affectation des valeurs de cartes
    for (let value = 1; value <= nbPairCards; value++) {

        for (let i = 0; i < 2; i++) {
            const rng = Math.floor(Math.random() * cardDispo.length);

            const place = cardDispo[rng];
            cardValues.set(place, value);

            cardDispo.splice(rng, 1);
        }
    }
}

function activeTimer() {
    timerId = setInterval(() => {
        if(gameover) {
            clearInterval(timerId);
            return;
        }

        // - Diminue le temps de 1s
        currentTime--;

        // Gameover si le timer atteint 0
        if (currentTime <= 0) {
            currentTime = 0;
            gameIsLost();
        }
        
        // - Actualisation de l'affichage
        displayTimer();

    }, 1000);
}

function displayTimer() {
    // - Si le timer vaut 150 → 2 minutes et 30 secondes
    const minutes = Math.floor(currentTime / 60);
    const secondes = currentTime % 60;

    // - Transformation du nombre en chaine de caractere avec 2 digits minimum
    const secondesOnTwoDigits = secondes.toLocaleString(undefined, {
        minimumIntegerDigits: 2
    });

    // - Affichage
    gameTimer.innerText = `${minutes}:${secondesOnTwoDigits}`;
}

function createCard(cardId) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = cardId;

    // Ajout d'un listener sur la nouvelle carte créée;
    card.addEventListener('click', onCardClick);

    return card;
}

//? Alternative au listener sur chacune des cartes
// gameBoard.addEventListener('click', (e) => {
//     const element = e.target;
//     if(element.classList.contains('card')) {
//         onCardClick(e);
//     }
// });

function onCardClick(event) {
    const cardId = event.target.id;

    // Test de garde
    if (gameover || cardCurrentTry.length >= 2 || cardValidates.includes(cardId)) {
        // ↓ Met fin à la fonction de l'event
        return;
    }

    // - Récuperation de la valeur de la carte
    const cardValue = cardValues.get(cardId);
    console.log(cardId, cardValue);

    // - Affichage de la valeur de la carte
    showCard(event.target, cardValue);

    // - Mémoire des cartes de l'essai
    cardCurrentTry.push(cardId);

    // - Test quand 2 cartes ont été selectionné
    if (cardCurrentTry.length === 2) {
        const cardValuePrevious = cardValues.get(cardCurrentTry[0]);
        if (cardValuePrevious === cardValue) {
            gameCardIsValidate();
            gameCheckIsWin();
        }
        else {
            gameCardNotValidate();
        }
    }
}

function gameCardIsValidate() {
    // - Les cartes sont les mêmes
    cardValidates.push(...cardCurrentTry)
    cardCurrentTry.splice(0, 2);
    console.log(cardValidates, cardCurrentTry);
}

function gameCardNotValidate() {
    // - Les cartes ne sont pas les mêmes
    setTimeout(() => {
        hideCard(...cardCurrentTry);
        cardCurrentTry.splice(0, 2);
    }, WAIT_TIME_ERROR);
}

function gameCheckIsWin() {
    if (cardValidates.length < NB_CARDS * 2) {
        return;
    }

    gameMsg.innerText = 'Bravo !';
    gameover = true;
}

function gameIsLost() {
    gameMsg.innerText = 'Perdu !';
    gameover = true;
}

function showCard(cardElement, value) {
    cardElement.innerText = value;
}

function hideCard(...cardIds) {
    for (const cardId of cardIds) {
        const cardElement = document.getElementById(cardId);
        cardElement.innerText = '';
    }
}