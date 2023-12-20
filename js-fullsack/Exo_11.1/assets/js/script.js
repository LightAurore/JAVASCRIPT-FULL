
// Element du DOM
const btnExo1 = document.getElementById('btn-exo-1');
const btnExo2 = document.getElementById('btn-exo-2');
const btnExo3 = document.getElementById('btn-exo-3');


// Fonction avec le callback
function colorize(nodeId, callback) {
    clearColorize(nodeId);

    const elements = document.querySelectorAll(`#${nodeId} li`);

    for(const elem of elements) {
        if(callback(elem)) {
            elem.classList.add('bg-selected');
        }
    }
}

function clearColorize(nodeId) {
    const elements = document.querySelectorAll(`#${nodeId} li`);

    elements.forEach(elem => {
        elem.classList.remove('bg-selected');
    });
}

// Event 'click' sur chaque bouton
function nodeContainsZ(node) {
    return node.textContent.includes('z');
}

function nodeLetterDuplicate(node) {
    const letters = node.textContent.split('');
    const uniqueLetters = new Set(letters);

    return letters.length !== uniqueLetters.size;
}

function nodeFirstLetterIsUnique(node) {
    const [first, ...text] = node.textContent.toLowerCase();

    let isUnique = true;
    for(let i = 0; isUnique && i < text.length; i++) {
        console.log(text, first, text[i]);
        if(text[i] === first) {
            isUnique = false;
        }
    }
    return isUnique
}

btnExo1.addEventListener('click', () => {
    colorize('element-list', nodeContainsZ );
});

btnExo2.addEventListener('click', () => {
    colorize('element-list', nodeLetterDuplicate);
});

btnExo3.addEventListener('click', () => {
    colorize('element-list', nodeFirstLetterIsUnique);
});
