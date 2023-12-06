// let tab = [];

// let i = 0;

// while(tab.length < 3){
//     tab[i] = prompt('Nouvelle valeur du tableau :');
//     i++;
// }
// tab[42] = 'Oups...';

// //On peut définir un indice non-numérique, mais alors il ne s'agit pas d'une valeur du tableau, mais de l'objet (propriétés)
// tab['lundi'] = 'Chili';

// console.table(tab);

// let cotations = [[],[]];

// let nb_eleves = parseInt(prompt("Combien d'élèves ?"));

// let j = 0;

// while (j < nb_eleves) {
//     cotations[0][j] = prompt('Nom de l\'élève : ');
//     cotations[1][j] = prompt('Côte de l\'élève : ');
//     j++;
// }

// console.table(cotations);

// let index_billy = cotations[0].findIndex(value => value == "Billy");
// let cote_billy = cotations[1][index_billy];

// alert(`L'élève ${cotations[0][index_billy]} a eu ${cote_billy}/20.`);

// for (let i = 0; i < cotations[0].length; i++) {
//     alert(`L'élève ${cotations[0][i]} a eu ${cotations[1][i]}/20.`);
// }

// // let i = 0; 
// // while (i < cotations[0].length) {
// //     alert(`L'élève ${cotations[0][i]} a eu ${cotations[1][i]}/20.`);
// //     i++; 
// // }

// /** BOUCLES en lecture seule de la table */

// for (const index in tab) {
//     alert(index);   //Obtient l'index mais pas la valeur
//     alert(tab[index]); //obtient enfin la valeur grace à l'index
// }

// for (const value of tab) {
//     alert(value);    //obtient la valeur sans toucher à l'index
// }

let tab_calcul = [[],[],[]];
const tab_ope = ['+','-','*','/'];

let nb_calcul ;

do {
    nb_calcul = parseInt(prompt('Combien de calculs? :'));
} while (isNaN(nb_calcul));

for (let i = 0; i < nb_calcul; i++) {
    tab_calcul[0][i] = Math.round(Math.random()*10);
    tab_calcul[1][i] = Math.round(Math.random()*3);
    tab_calcul[2][i] = Math.round(Math.random()*10);
    let result;
    switch (tab_calcul[1][i]) {
        case 0:
            result = tab_calcul[0][i] + tab_calcul[2][i];
            break;
        case 1:
            result = tab_calcul[0][i] - tab_calcul[2][i];
            break;
        case 2:
            result = tab_calcul[0][i] * tab_calcul[2][i];
            break;
        case 3:
            result = tab_calcul[0][i] / tab_calcul[2][i];
            break;
    }
    console.log(`${tab_calcul[0][i]} ${tab_ope[tab_calcul[1][i]]} ${tab_calcul[2][i]} = ${result}`);
}

console.table(tab_calcul);