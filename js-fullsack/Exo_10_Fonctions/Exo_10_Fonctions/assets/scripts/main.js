const choices = ['pierre', 'feuille', 'ciseaux'];

const playerHand = document.querySelectorAll('#player-hand img');
const scorePlayer = document.querySelector('#score-player');
const computerHand = document.querySelector('#computer-hand');
const scoreComputer = document.querySelector('#score-computer');
const resultat = document.querySelector(".resultat");

const replyBtn = document.querySelector('#replay');
const eraseBtn = document.querySelector('#erase');
const gamesPlayer = document.querySelector('#games-player');
const gamesComputer = document.querySelector('#games-computer')

initStat();
activateImg();

replyBtn.addEventListener('click', () => { resetGame() });

eraseBtn.addEventListener('click', () => { 
    localStorage.clear();
    gamesPlayer.textContent = '0';
    gamesComputer.textContent = '0';
})

/**
 * Lance une partie, prend en paramètre l'évènement qui vient d'être déclenché
 */
function play(event) {
    //#region Event
    // C'est un objet qui contient l'évènement qui vient d'être déclenché. On peut y récupérer plein d'informations utiles et le plus souvent, on s'en sert pour récupérer la target (l'élement html qui vient de déclencher l'évènement), la position de la souris, la touche qui vient d'être pressée sur les events de key, etc...
    //#endregion Event
    const choicePlayer = event.target.alt;
    const choiceComputer = genComputerChoice();
    const gameResult = gameResolution(choicePlayer, choiceComputer);
    showResult(gameResult);
    winGame(); 
}

/**
 * Active le fait que l'on puisse cliquer sur les images
 */
function activateImg() {
    playerHand.forEach(image => {
        image.addEventListener('click', play)
        image.classList.remove('disabled');
    })
}

/**
 * Désactive le faire que l'on puisse cliquer sur les images
 */
function deactivateImg() {
    playerHand.forEach(image => {
        image.removeEventListener('click', play);
        image.classList.add('disabled');
    })
    
}


/** 
 * Vérifie si l'un des joueurs a gagné et ajoute 1 a son nombre de parties gagnées
*/
function winGame() {
    if( +scorePlayer.textContent === 3 ) {
        resultat.innerText = `Bravo, vous avez gagné cette partie !\n
        Cliquez sur rejouer pour lancer une partie.`;
        gamesPlayer.textContent = +gamesPlayer.textContent + 1;
        deactivateImg();
    }
    if( +scoreComputer.textContent === 3) { 
        resultat.innerText = `Loser ! L'ordinateur a gagné cette partie !\n
        Cliquez sur rejouer pour lancer une partie.`;
        gamesComputer.textContent = +gamesComputer.textContent + 1;
        deactivateImg();
    }
    localStorage.setItem('player', +gamesPlayer.textContent);
    localStorage.setItem('computer', +gamesComputer.textContent);
}

/**
 * Remet à 0 les scores de la partie, l'image de l'ordinateur et le texte du milieu
 */
function resetGame() {
    computerHand.src = './assets/images/waiting.jpg';
    scoreComputer.textContent = '0';
    scorePlayer.textContent = '0';
    resultat.textContent = 'Cliquez sur une image pour jouer';
    activateImg();
}

/**
 * Affiche le résultat d'une manche sur la page
 * @param {number} result
 */
function showResult(result) {
    if(result === -1) {
        resultat.textContent = 'Bouh ! Vous avez perdu !';
        scoreComputer.textContent = +scoreComputer.textContent + 1;
        // ↑ same as ↓
        // scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;        
    } else if (result === 1) {
        resultat.textContent = 'Bravo ! Vous avez gagné !';
        scorePlayer.textContent = +scorePlayer.textContent + 1;
    }
    else {
        resultat.textContent = 'Égalité !';
    }
}


/** 
 * Fonction qui va générer un nombre aléatoire entre 1 et Max et renvoyer le choix correspondant
 * @param {number} max
 * @returns {string}
 */
function genComputerChoice(max = 3) {
    const rand = Math.floor(Math.random() * max + 1);
    computerHand.src = `./assets/images/${choices[rand-1]}.jpg`
    return choices[rand - 1];
}

/**
 * Fonction qui prend le choix de chacun des utilisateurs et renvoie -1 si perdu, 0 si égalité et 1 si gagné
 * @param {string} choicePlayer1
 * @param {string} choicePlayer2
 * @returns {number}
 */
function gameResolution(choicePlayer1 , choicePlayer2) {
    if(choicePlayer1 === choicePlayer2) {
        return 0;
    } else if ( choicePlayer1 === 'pierre' && choicePlayer2 === 'ciseaux' ||
                choicePlayer1 === 'ciseaux' && choicePlayer2 === 'feuille' ||
                choicePlayer1 === 'feuille' && choicePlayer2 === 'pierre' ) {
        return 1;
    }
    else {
        return -1;
    }
}

/**
 * Fonction qui initialise le tableau des stats en allant chercher les scores dans le local storage, si pas de score sauvé, met à 0
 */
function initStat() {
    // ?? -> Coalesce : Tu essaies de traiter ce qu'il y a à gauche des ??, si ça renvoie null, tu prends la valeur qui est à droite sinon, tu prends la valeur du traitement
    gamesPlayer.textContent = localStorage.getItem('player') ?? '0';
    gamesComputer.textContent = localStorage.getItem('computer') ?? '0';
}


