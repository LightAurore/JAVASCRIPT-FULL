'use strict';

// Création d'élément
// ******************
const elem = document.createElement('li');
elem.className = 'student';
elem.innerText = 'Mike Godfrinne';

// L'element est créer dans le runtime du JS (en RAM)
// Celui-ci ne sera sur la page tant qu'on ne l'ajout pas !


// Obtenir les elements enfants d'une balise
// *****************************************

const parentElement = document.getElementById('people');

// Le premier enfant
// - Balise HTML
const firstElement = parentElement.firstElementChild;
console.log(firstElement);

// - Noeud (Balise / Texte)
const firstNode = parentElement.firstChild;
console.log(firstNode);

// Le dernier enfant
// - Balise HTML
const lastElement = parentElement.lastElementChild;
console.log(lastElement);

// - Noeud (Balise / Texte)
const lastNode = parentElement.lastChild;
console.log(lastNode);


// Les enfants
// - Balise HTML
const childElements = parentElement.children;
console.log(childElements);

// - Noeud (Balise / Texte)
const childNodes = parentElement.childNodes;
console.log(childNodes);



// Ajouter et supprimer des elements - ES3+
// ****************************************

// Ajouter un element en tant que dernier enfant
const newElement1 = document.createElement('li');
newElement1.innerText = 'New Element 1';

parentElement.appendChild(newElement1);

// Ajouter un element enfant avant un autre element
const newElement2 = document.createElement('li');
newElement2.innerText = 'New Element 2';

parentElement.insertBefore(newElement2, parentElement.firstElementChild);

// Ajout d'un element adjacent a un element
const newElement3 = document.createElement('li');
newElement3.innerText = 'New Element 3';

newElement1.insertAdjacentElement('afterbegin', newElement3);


// Supprimer un element enfant d'un balise
const target = parentElement.querySelectorAll('.duck')[1];
console.log(target);

parentElement.removeChild(target)


// Ajouter et supprimer des elements - ES6+ (2015)
// ***********************************************

const fruits = document.getElementById('fruits');

// Ajouter un ou plusieurs element(s) en tant que dernier enfant
const fruit1 = document.createElement('li');
fruit1.innerText = 'Cerise';
const fruit2 = document.createElement('li');
fruit2.innerText = 'Fraise';

fruits.append(fruit1);

// Ajouter un ou plusieurs element(s) en tant que premier enfant
const fruit3 = document.createElement('li');
fruit3.innerText = 'Pasteque';
const fruit4 = document.createElement('li');
fruit4.innerText = 'Melon';

fruits.prepend(fruit3, fruit4);


// Ajout d'un element adjacent a un element
const fruit5 = document.createElement('li');
fruit5.innerText = 'Fruit du dragon';
const fruit6 = document.createElement('li');
fruit6.innerText = 'Kiwi';

fruit4.before(fruit5);
fruit4.after(fruit6);


// Supprimer un element
const gontran = document.getElementById('remove-this');
console.log(gontran);

gontran.remove();


// Manipulation d'un element présent dans le DOM
// *********************************************

// Récuperation d'un balise présente dans le DOM
const tom = parentElement.querySelector('.student');
console.log(tom);

// Utilisation de la méthode "d'ajout" dans la balise parent
parentElement.append(tom);

// L'element n'est pas dupliqué !
// La balise ne sera pas recréer, celle-ci sera déplacé dans le DOM
