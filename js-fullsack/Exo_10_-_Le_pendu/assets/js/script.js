'use strict';

// Element du DOM
const displayMysteryWord = document.querySelector('#mystery-word .letters');
const displayErrors = document.querySelector('#errors .letters');
const inputUserGuess = document.querySelector('#user-guess');
const btnUserGuess = document.querySelector('#btn-guess');
const btnUserRestart = document.querySelector('#btn-restart');
const imgHangmanLife = document.querySelector('#hangman-life');
const infoGame = document.querySelector('#info-game');

// Traitement...
// const mysteryChoiceWords = [
//     'abeille',
//     'bateau',
//     'cactus',
//     'danse',
//     'école',
//     'fée',
//     'gare',
//     'hibou',
//     'igloo',
//     'jardin',
//     'koala',
//     'lune',
//     'magie',
//     'nuage',
//     'oiseau',
//     'piano',
//     'quiche',
//     'rire',
//     'savon',
//     'tigre',
//     'union',
//     'vase',
//     'wagon',
//     'xylophone',
//     'yoga',
//     'zèbre',
//     'alpage',
//     'bougie',
//     'cadeau',
//     'dragon',
//     'étoile',
//     'fleur',
//     'gomme',
//     'harpe',
//     'jasmin',
//     'kiwi',
//     'livre',
//     'miroir',
//     'neige',
//     'orange',
//     'perle',
//     'quiz',
//     'robot',
//     'souris',
//     'tomate',
//     'utile',
//     'verre',
//     'yoyo',
//     'zodiaque',
//     'avion',
//     'brique',
//     'camion',
//     'dent',
//     'éponge',
//     'four',
//     'gant',
//     'hache',
//     'iguane',
//     'jonquille',
//     'kangourou',
//     'loup',
//     'maison',
//     'nappe',
//     'oignon',
//     'plume',
//     'ruche',
//     'sel',
//     'trèfle',
//     'usine',
//     'vache',
//     'xylophore',
//     'yack',
//     'arbre',
//     'balle',
//     'canard',
//     'doigt',
//     'échelle',
//     'fruit',
//     'guitare',
//     'hérisson',
//     'image',
//     'jupe',
//     'mouton',
//     'noix',
//     'ombre',
//     'porte',
//     'queue',
//     'rose',
//     'sable',
//     'table',
//     'uniforme',
//     'vent',
//     'yaourt',
//     'zigzag',
//     'ananas',
//     'biberon',
//     'chapeau',
//     'éclair',
//     'épice',
//     'feu',
//     'glace',
//     'horloge',
//     'insecte',
//     'kayak',
//     'lion',
//     'métro',
//     'oeil',
//     'poire',
//     'quinze',
//     'stylo',
//     'tasse',
//     'vague',
//     'xérès',
//     'yogi',
//     'zeste',
//     'arc',
//     'bain',
//     'carte',
//     'domino',
//     'écran',
//     'flèche',
//     'gâteau',
//     'hôtel',
//     'îlot',
//     'kiosque',
//     'luge',
//     'mouche',
//     'note',
//     'oeuf',
//     'pince',
//     'radio',
//     'sac',
//     'tente',
//     'utérus',
//     'ver',
//     'zoo',
//     'zut',
//     'agneau',
//     'bouchon',
//     'cerise',
//     'dé',
//     'foin',
//     'grue',
//     'île',
//     'jambon',
//     'lama',
//     'moto',
//     'nez',
//     'pelle',
//     'quai',
//     'riz',
//     'salade',
//     'thé',
//     'urne',
//     'veste',
//     'xylène',
//     'yucca',
//     'zorro',
//     'azur',
//     'coeur',
//     'dune',
//     'fromage',
//     'gorille',
//     'jet',
//     'lac',
//     'mur',
//     'nuit',
//     'or',
//     'pomme',
//     'quatuor',
//     'roi',
//     'terre',
//     'un',
//     'vin',
//     'zéro'];
const mysteryChoiceWords = ['della'];
const maxError = 8;

function getMystertyWord() {
    const rngIndex = Math.floor(Math.random() * mysteryChoiceWords.length);
    return mysteryChoiceWords[rngIndex];
}

function insertSpan(parent, content) {
    const element = document.createElement('span');
    element.innerText = content;
    parent.append(element);
}

function displayMysteryWordHidden(word) {
    while (displayMysteryWord.firstChild) { displayMysteryWord.firstChild.remove(); }

    for (let i = 0; i < word.length; i++) {
        insertSpan(displayMysteryWord, '_');
    }
}

function findLetterIndexInWord(word, letter) {
    // Test de garde
    if (!word.includes(letter)) {
        return [];
    }

    // Traitement
    const result = [];
    let index = -1;

    do {
        index = word.indexOf(letter, index + 1);

        if (index >= 0) {
            result.push(index);
        }
    }
    while (index >= 0);

    return result;
}

function readInputUserGuess() {
    return inputUserGuess.value.toLowerCase();
}

function drawHangmanLife(error) {
    const imgSrc = `assets/images/pendu_${error}.png`;
    imgHangmanLife.setAttribute('src', imgSrc);
}

function startGame() {
    let mysteryWord;
    let nbError;
    let nbLetterNotFound;
    let historyLetters;
    let gameover;

    function initialization() {
        infoGame.innerText = `Debut du jeu...`;
        mysteryWord = getMystertyWord();
        nbError = 0;
        nbLetterNotFound = mysteryWord.length;
        historyLetters = [];
        gameover = false;
        displayMysteryWordHidden(mysteryWord);
    };
    initialization();

    btnUserGuess.addEventListener('click', function () {
        if (gameover) { return; }

        const letter = readInputUserGuess();

        if (historyLetters.includes(letter)) {
            infoGame.innerText = `La lettre "${letter}" a déjà été proposé !`;
            return;
        }
        historyLetters.push(letter);

        const indexes = findLetterIndexInWord(mysteryWord, letter);
        if (indexes.length > 0) {
            // Letter found !
            const spans = displayMysteryWord.querySelectorAll('span');

            indexes.forEach(function (idx) {
                spans[idx].innerText = letter;
            });
            nbLetterNotFound -= indexes.length;

            if (nbLetterNotFound > 0) {
                infoGame.innerText = `La lettre "${letter}" est trouvé !`;
            }
            else {
                infoGame.innerText = `Bravo !!!`;
                btnUserGuess.setAttribute('disabled', true);
                gameover = true;
            }
        }
        else {
            // Letter in error !
            insertSpan(displayErrors, letter);
            nbError++;
            drawHangmanLife(nbError);

            if (nbError < maxError) {
                infoGame.innerText = `La lettre "${letter}" n'était pas dans le mot !`;
            }
            else {
                infoGame.innerText = `Le mot était "${mysteryWord}" !`;
                btnUserGuess.setAttribute('disabled', true);
                gameover = true;
            }
        }
    });

    btnUserRestart.addEventListener('click', initialization);
}
startGame();