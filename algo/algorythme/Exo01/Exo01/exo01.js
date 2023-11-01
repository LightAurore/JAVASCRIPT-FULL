let nb1 = 5;
let nb2 = 7;
let temp;   //undefined (valeur par defaut de toute variable non-initialisée)

console.log(`La valeur de nb1 est égale à ` + nb1); //Concaténation : symbole + permet de "coller" des textes ensembles
console.log(`La valeur de nb2 est égale à ${nb2}`); //Interpolation : un texte entourré de `` peut utiliser ${} pour insérer une valeur dans ce texte

temp = nb1;     //nb1 : 5 | nb2 : 7 | temp : nb1 : 5
nb1 = nb2;      //nb1 : nb2 : 7 | nb2 : 7 | temp : 5
nb2 = temp;     //nb1 : 7 | nb2 : temp : 5 | temp : 5

console.log(`La valeur de nb1 est égale à ` + nb1); //Concaténation : symbole + permet de "coller" des textes ensembles
console.log(`La valeur de nb2 est égale à ${nb2}`); //Interpolation : un texte entourré de `` peut utiliser ${} pour insérer une valeur dans ce texte


// alt + maj + flèche (duplique la sélection)
// alt + flèche (déplace la sélection)