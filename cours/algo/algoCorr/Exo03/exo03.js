let nb1 = prompt("Veuillez introduire un premier nombre : ");
nb1 = parseInt(nb1);    //Attention, nb1 est string puis number, pas très judicieux

let nb2 = parseInt(prompt("Veuillez introduire un second nombre : "));

console.log(`La valeur de nb1 est égale à ${nb1}`);
console.log(`La valeur de nb2 est égale à ${nb2}`);

nb1 = nb1 + nb2;    // raccourcis : nb1 += nb2;
nb2 = nb1 - nb2;
nb1 = nb1 - nb2;    // raccourcis : nb1 -= nb2;

console.log(`La valeur de nb1 est égale à ${nb1}`);
console.log(`La valeur de nb2 est égale à ${nb2}`);