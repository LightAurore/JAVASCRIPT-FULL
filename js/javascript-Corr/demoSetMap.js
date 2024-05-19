// DEMO Set et Map
// Set : liste d'éléments unique, si on ajouté un élément déjà présent dans la list, celui ci est ignoré
const setList = new Set();
setList.add(5);
setList.add("Aude");
setList.add(5);
setList.delete(5);

// Petit cas à part pour les objets, ils ont beau avoir la même valeur, ce sont deux objets distincts avec deux adresses mémoire différentes, les deux vont être ajoutés
// const obj = { pouet : 5, truc : 6 }
// setList.add(obj);
// setList.add({ pouet : 5, truc : 6 });

setList.forEach(function(value) {
    console.log(value);
})

// Map : Dictionnaire clef - valeur (chaque clef est unique)

const mapDictionnary = new Map();
mapDictionnary.set('lundi', 'des patates');
mapDictionnary.set('mardi', 'des raviolis');
mapDictionnary.set('lundi', 'des nouilles');

console.log(mapDictionnary.get('lundi'));
console.log(mapDictionnary.has('mercredi'));

// mapDictionnaty.forEach(function(value, key) { 
//     console.log(`${key} : ${value}`);
// })


// Le map est peu utilisé -> Pour cause : Les objets permettent de faire pareil mais en plus simple
// const mapDictionnary2 = {
//     'lundi' : 'des patates',
//     'mardi' : 'des raviolis',
// }

// mapDictionnary2['lundi'] = 'des nouilles';
// mapDictionnary2.mercredi = 'des spaghettis';
// console.log(mapDictionnary2['mercredi']);
// #endregion