// Utilisation des events : « onclick VS addEventListener »
// ********************************************************
// - onclick 
//   Déclaration d'une seul fonction de callback
//   Conflit possible avec le code dans la page html
//   Dans l'html => Necessite d'envoyer explicitement la variable d'event

// - addEventListener 
//   Plusieur fonctions possible pour un même event
//   Possibilité de retirer une fonction pour un type d'event (removeEventListener)

const elem1 = document.getElementById('elem-1');
const elem2 = document.getElementById('elem-2');
const elem3 = document.getElementById('elem-3');


elem2.onclick = basicEvent;
elem2.onclick = variableEvent;

elem3.addEventListener('click', basicEvent);
elem3.addEventListener('click', variableEvent);
// elem3.removeEventListener('click', variableEvent);

function basicEvent() {
    console.log('Hello DigitalCity');
}



// La variable event
// *****************

// Props : 
// - target => L'element du DOM avec qui on intéragi
// - type   => Le type d'event

// Méthode:
// - preventDefault => Annule le comportement de base d'un event

function variableEvent(event) {
    console.log('Variable d\'event', event);
}

const linkZone = document.querySelectorAll('#link-zone a');
for (const link of linkZone) {
    link.addEventListener('click', demoVariableEvent);
}

function demoVariableEvent(e) {
    // ↓ Annule la redirection du lien
    e.preventDefault();

    // Récuperation d'info depuis l'event
    const url = e.target.getAttribute('href');
    console.log(url);
}



// Quelques events
// ***************
const fred = document.getElementById('fred');
const textInput = document.querySelector('#tom input');

// - click : Le click :o
// - dblclick : Double click
// - auxclick : Click droit

// - mouseenter : La souris entre sur la zone dans une balise
// - mouseleave : Idem en sortie
fred.addEventListener('mouseenter', (e) => {
    console.log('mouseenter', e);
})

// - mouseover : La souris entre sur la zone dans une balise
//             De plus, l'event est renvoyé a chaque balise enfant
// - mouseout : Idem en sortie
fred.addEventListener('mouseover', (e) => {
    console.log('mouseover', e);
})

// Exemple ajouter une classe sur l'element C quand la souris survol la zone
elem3.addEventListener('mouseenter', () => {
    elem3.classList.add('hover');
});
elem3.addEventListener('mouseleave', () => {
    elem3.classList.remove('hover');
});

// - keyup VS keydown VS keypress
textInput.addEventListener('keyup', (e) => {
    // Remonté de la touche
    console.log('keyup', e.key);
})
textInput.addEventListener('keydown', (e) => {
    // Descente de la touche
    console.log('keydown', e.key);
})
textInput.addEventListener('keypress', (e) => {
    // Descente de la touche (Ne prend pas en compte certains touches: Esc, Backspace, ...)
    console.log('keypress', e.key);
})

// - focus  | focusin
// - blur   | focusout
elem1.addEventListener('focus', () => {
    console.log('focus');
});
elem1.addEventListener('blur', () => {
    console.log('blur');
})


// Deux event sur l'objet "window"
// *******************************

window.addEventListener('load', () => {

    console.log('Loading !!!');
});

window.addEventListener('beforeunload', (e) => {
    // ↓ Méthode récommandé pour evité de quitté la page (popup)
    //e.preventDefault();

    // ↓ Ancienne méthode (déprécié)
    // e.returnValue = true
})