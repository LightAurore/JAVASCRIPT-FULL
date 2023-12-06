const today = new Date();
console.log(today);
// Wed Sep 20 2023 15:25:24 GMT+0200 (heure d’été d’Europe centrale)

let months = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre', 'octobre','novembre','décembre']

let days = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi']

let mois_actuel = months[new Date().getMonth()];
console.log(mois_actuel);
//'septembre'

let jour_aujourdhui = days[new Date().getDay()]
console.log(jour_aujourdhui);
//'mercredi'
let temps_ecoule = new Date().getTime();
//1695216943468

console.log(new Date(temps_ecoule));
//Wed Sep 20 2023 15:35:43 GMT+0200 (heure d’été d’Europe centrale)

//Pour toute date avant 1970, rentrer un temps négatif :
let date_anterieur = new Date(-temps_ecoule);