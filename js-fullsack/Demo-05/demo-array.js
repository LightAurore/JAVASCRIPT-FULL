// Collections indexées
// ********************

// Un ensemble de valeur dans une variable
// Auxquelles on accède à l'aide d'un indice

// Déclaration d'un tableau
// - A la volé via les []
const monTableau1 = [20, 5, -5, 10, 20, 2, 6, 5];

// - Via le constructeur
const monTableau2 = new Array(10); // Une seul parametre numerique -> Taille
const monTableau3 = new Array(10, 3, 5); // Plusieurs parametres         -> Element
const monTableau4 = new Array("Fred"); // Plusieurs non numerique      -> Element

// - Tableau à deux dimensions
const matrice1 = [
  ["a", "b", "c", "d"],
  ["z", "y", "x", "w"],
];

const matrice3 = [[], []];
const matrice4 = new Array(new Array(), new Array());

//! Bonne pratique -> Créer un tableau d'un type

// • Opérateur d'acces ->  []
// Peut être utiliser sur les collections (et les chaines de caracteres)
// - Lecture
const nbDemo = monTableau1[2]; // -5
const matriceElem = matrice1[0][2]; // 'c'
// - Ecriture
monTableau1[4] = 42;

// • Debuger un tableau dans la console
// console.log(...)   : Affiche les valeurs + la taille
console.log(matriceElem);
// console.table(...) : Affiche les données sous forme tabulaire
console.table(matrice1);

// Les boucles pour les tableaux
const tableauBoucle = ["Zaza", "Loulou", "Della", "Daisy", "Balthy"];

// - for i => Utilisation de la variable "i" en tant qu'index
for (let i = 0; i < tableauBoucle.length; i++) {
  // Récuperation d'un element du tableau
  const elem = tableauBoucle[i];
  // ...
}

// - for in : Boucle créer pour TOUT parcourir (À evité)
// Elle récupere l'indexe dans une variable de type 'string'
for (const index in tableauBoucle) {
  console.log(index, typeof index);
}

// - for of : Boucle créer pour parcourir les iterables (ES2015+)
// Elle récupere les elements
for (const elem of tableauBoucle) {
  console.log(elem, typeof elem);
}

// - for each : Méthode pour parcourir les tableaux
// Elle récupere les elements et si necessaire l'index
tableauBoucle.forEach(function (elem, index) {
  console.log(index, typeof index);
  console.log(elem, typeof elem);
});

// Les méthodes des tableaux
// *************************

// Modification du contenu
const tableauDemo = ["Yanis", "Mussa", "Saskya"];

// - Ajouter un element
//  (a la fin)
tableauDemo.push("Moïse");
tableauDemo.push("Antoine", "Mike", "Della");
//  (au debut)
tableauDemo.unshift("Miss Tick", "Fred", "Tom");

// - Retirer un element
//  (le dernier)
tableauDemo.pop();
//  (le premier)
tableauDemo.shift();

// - Ajouter et retirer des elements (avec une position !)
// Les parametres de la méthodes "splice"
//  ○ Index de depart
//  ○ Nombre d'element à supprimer
//  ○ Les élements à ajouter
const tableauDuck = [
  "Zaza",
  "Riri",
  "Donald",
  "Gontran",
  "Balthy",
  "Les raptoux",
  "Archibald",
  "Della",
];

// Ajouter uniquement 'Daisy' après 'Donald'
tableauDuck.splice(2, 0, "Daisy");
// →  [ "Zaza", "Riri", "Daisy", "Donald", "Gontran", "Balthy", "Les raptoux", "Archibald", "Della" ]

// Supprimer uniquement 'Grontan'
tableauDuck.splice(4, 1);
// → [ "Zaza", "Riri", "Daisy", "Donald", "Balthy", "Les raptoux", "Archibald", "Della" ]

// Supprimer 'Les raptoux et Archibald' et ajouter 'Falgada et Miss Tick'
tableauDuck.splice(5, 2, "Falgada", "Miss Tick");
// → [ "Zaza", "Riri", "Daisy", "Donald", "Balthy", "Falgada", "Miss Tick", "Della" ]

// Transformer le tableau en une seul chaine de caracteres

// - Méthode .toString()
//   Renvoi une chaine de caracteres standard avec les elements séparé par une virgule
tableauDuck.toString();

// - Méthode .join( <séparateur> )
//   Renvoi une chaine de caracteres avec les elements séparé par le séparateur (virgule par defaut)
tableauDuck.join(" -> ");

// Fusionner des tableaux
const tableauMouse = ["Mickey", "Minnie"];

const personnages1 = tableauDuck.concat(tableauMouse);
const personnages2 = [].concat(tableauDuck, tableauMouse);
const personnages3 = [...tableauDuck, ...tableauMouse];

// Modification de l'ordre des elements d'un tabeau

// - Inversion
const numberTab1 = [5, -3.2, 1, 2.5, 5.5, 10, 42, 22, 100, 2];

const t1 = numberTab1.reverse(); // Elle modifie le tableau pour l'inverser
const t2 = numberTab1.toReversed(); // Elle créer une copie qu'elle inverse (Tableau original)

// - Trie

// Méthode 'sort' => Elle modifie le tableau pour le trier
const numberTab2 = [5, -3.2, 1, 2.5, 5.5, 10, 42, 22, 100, 2];

const t3 = numberTab2.sort();
// Array(10) [ -3.2, 1, 10, 100, 2, 2.5, 22, 42, 5, 5.5 ]
const t4 = numberTab2.sort(function (a, b) {
  return a - b;
});
// Array(10) [ -3.2, 1, 2, 2.5, 5, 5.5, 10, 22, 42, 100 ]
const t5 = numberTab2.sort(function (a, b) {
  return b - a;
});
// Array(10) [ 100, 42, 22, 10, 5.5, 5, 2.5, 2, 1, -3.2 ]

// Méthode 'toSorted' =>  Elle créer une copie qu'elle trie
const numberTab3 = [5, -3.2, 1, 2.5, 5.5, 10, 42, 22, 100, 2];

const t6 = numberTab3.toSorted(function (a, b) {
  return a - b;
});
// Array(10) [ -3.2, 1, 2, 2.5, 5, 5.5, 10, 22, 42, 100 ]

// Méthode pour selectionner une partie d'un tableau
const numberTab4 = [5, -3.2, 1, 2.5, 5.5, 10, 42, 22, 100, 2];
const t7 = numberTab4.slice(2, 5);

// Méthode qui permet d'appliquer un filtre sur les données d'un tableau
const tableauStudent = [
  "Fred",
  "Yanis",
  "Tom",
  "Mussa",
  "Antoine",
  "Saskya",
  "Alain",
  "Mike",
  "Billy",
];

// - Obtenir les personnes avec la lettre 'i'
const t8 = tableauStudent.filter(function (name) {
  return name.includes("i");
});

// - Obtenir les personnes avec un prénom de 4 lettre ou moins
const t9 = tableauStudent.filter(function (name) {
  return name.length <= 4;
});

// Méthode qui permet d'appliquer une modiciation sur les données d'un tableau
const tableauTeacher = [
  "Aurélien",
  "Khun",
  "Alex",
  "Michaël",
  "Aude",
  "Mélanie",
  "Florence",
  "Caroline",
];

// - Mettre tout les prenoms en majuscule
const t10 = tableauTeacher.map(function (name) {
  return name.toLocaleUpperCase("fr-be");
});

// Mon bonus
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
items.sort(function (a, b) {
  return a.value - b.value;
});
