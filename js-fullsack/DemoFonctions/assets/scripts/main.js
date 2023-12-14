// Demo fonctions
// Procédure VS Fonctin 
    // La procédure ne renvoie pas de résultat, elle fait juste un traitement
    // La fonction renvoie toujours un résultat et on y trouvera le mot clef return
// ! Ceci n'est que du vocabulaire en plus, on déclare les deux avec le mot clef function, l'une auta un retour, pas l'autre

// Déclarer une fonction :
// Exemple de procédure :
function direBonjour() {
    console.log('Bonjour');
}
direBonjour(); //appel de la procédure

// Exemple de fonction
function direBonjourF() {
    return 'Bonjour';
}
console.log(direBonjourF()); //appel de la fonction

// Paramètres 
    // Pas obligatoire, on peut créer des fonctions sans paramètres
    // S'il y en a, on peut en mettre autant qu'on veut, tant qu'on respecte l'ordre dans lequels on les appelle
    // Tous les paramètres sont optionnels
function sayHello(lang = 'fr', name = 'Inconnu') {
    
    // arguments est un tableau, disponible dans toute fonction, qui contient la valeur de tous les arguments reçus en paramètre, selon l'ordre dans lequel ils sont déclarés
    console.log(arguments[0]);
    console.log(arguments[1]);

    switch(lang) {
        case 'fr' :
            console.log(`Bonjour ${name} !`);
            break;
        case 'nl' :
            console.log(`Hallo ${name} !`);
            break;
        case 'es' :
            console.log(`Buenos dias ${name}`);
            break;
        case 'ru' :
            console.log(`Доброе утро ${name}`);
            break;
        default :
            console.log(`Je pas comprendre langue `);
            break;
    }
}

const langSelect = document.querySelector('#lang');
const nameInput = document.querySelector('#firstname');
langSelect.addEventListener('change', function() {
    const langage = langSelect.value;
    const firstname = nameInput.value;
    sayHello(langage, firstname);
} )

// Param Rest
// 2 règles : 
    // Il ne peut y en avoir qu'un seul par fonction
    // Il doit toujours se trouve en dernier dans les paramètres
  
// Apparté sur la Js doc paske c'est pratique
/**
 * Afficher une card qui prend des infos utilisateur en paramètre
 * @param {string} firstname
 * @param {string} lastname
 * @param {Date} birthday
 * @param { ...string } hobbies
 * @returns {void}
 */
function showCard(firstname, lastname, birthday, ...hobbies) {
    const result = document.querySelector('#result');
    result.innerHTML += `
        <div>
            <h2> ${firstname} ${lastname}</h2>
            <p> Date de naissance : ${birthday.toLocaleDateString()}
            <p> Hobbies : ${hobbies.join(" - ")} </p>
        </div>
    `;
}

// Quand on appelle, la fonction avec une paramètre rest, on peut fournir, le nombre de données qu'on veut, ils iront tous dans le tableau

showCard("Aurélien", "Strimelle", new Date(1989, 9, 1), "Jouer au JV", "Manger", "Parler", "Beaucoup parler");

showCard("Khun", "Ly", new Date(1982, 4, 6), "Japon", "Manger");

// Fonction fléchée

// function fierfjire(){ } //déclaration
// fierfjire() //appel
// ↑ pareil que ↓ 
// const fierfjire = function() {} //déclaration
// fierfjire() //appel

// La fonction fléchée, est juste un raccourcis de la fonction anonyme que vous connaissez déjà
// (param) => instruction
// param => instruction //parenthèses optionnelles si une seul param
// (param) => { instructions }
// (param1, param2) => instruction

const tab = ["Lundi", "Mardi", "Mercredi", "Jeudi"];
tab.forEach(function(jour, i) { console.log(jour); })
tab.forEach( (jour, i) => console.log(jour) );

// Avec la fonction fléchée, plus besoin du mot clef return (si les accolades n'ont pas été ouvertes)
tab.sort(function(a, b) { return a.localeCompare(b)})
tab.sort( (a,b) => a.localeCompare(b))

langSelect.addEventListener('click', () => {})
// Si pas de param du tout on peut mettre _
langSelect.addEventListener('click', _ => {}) 


// Closure :
// Concept d'encapsuler tout votre code présent dans le script dans une fonction que vous lancez au démarrage de votre application. Comme tout ce que vous avez déclaré dans votre fonction est local à cette fonction, tout ce que vous déclarez ne sera pas appelable dans la console par exemple