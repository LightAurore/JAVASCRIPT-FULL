/**VERSION 1 Sans résultat (utilisation des class)


// const html_math = document.getElementById('math');
// // const html_math = document.querySelector('#math');

// let nb_calcul;

// do {
//     nb_calcul = parseInt(prompt('Combien de calculs voulez-vous afficher ?'));
// } while (isNaN(nb_calcul) || nb_calcul < 0);

// let i = 0;
// while (i < nb_calcul) {
//     const html_tr = document.createElement('tr');
//     html_math.appendChild(html_tr);
//     i++;
//     let j =0;
//     do {
//         const html_td = document.createElement('td');
//         html_tr.appendChild(html_td);
//         switch (j) {
//             case 0:
//             case 2:
//                 html_td.classList.add('number');
//                 break;
//             case 1:
//                 html_td.classList.add('operator');
//                 break;
//             case 3:
//                 html_td.innerText = "=";
//                 break;
//             case 4:
//                 html_td.classList.add('result');
//                 break;
//         }
//         j ++;
//     } while (j < 5);
// }

// const html_numberClass = document.getElementsByClassName('number');
// // const html_numberClass = document.querySelectorAll('.number');

// i = 0;

// while(i < html_numberClass.length){
//     let cellule = html_numberClass[i];
//     cellule.innerText = Math.round(Math.random()*10);
//     i++;
// }


// const html_operatorClass = document.getElementsByClassName('operator');
// // const html_operatorClass = document.querySelectorAll('.operator');

// i = 0;

// while(i < html_operatorClass.length){
//     let cellule = html_operatorClass[i];
//     let ope = Math.round(Math.random()*3);
//     switch (ope) {
//         case 0:
//             cellule.innerText = '+';
//             break;
//         case 1:
//             cellule.innerText = '-';
//             break;
//         case 2:
//             cellule.innerText = '*';
//             break;
//         case 3:
//             cellule.innerText = '/';
//             break;
//         default:
//             break;
//     }
//     i++;
// }

*/

/**VERSION 2 Avec résultat */

const html_math = document.getElementById('math');
// const html_math = document.querySelector('#math');

let nb_calcul;

do {
    nb_calcul = parseInt(prompt('Combien de calculs voulez-vous afficher ?'));
} while (isNaN(nb_calcul) || nb_calcul < 0);

let result_showed = confirm('Voulez-vous voir les résultats ?');

let i = 0;
while (i < nb_calcul) {
    const html_tr = document.createElement('tr');
    html_math.appendChild(html_tr);
    i++;
    
    let isOk;
    let nb1;
    let nb2;
    let operator;
    let result;
    do {
        nb1 = Math.round(Math.random()*10);
        nb2 = Math.round(Math.random()*10);
        let ope = Math.round(Math.random()*3);
        operator = '+';
        isOk = true;
        switch (ope) {
            case 0:
                operator = '-';
                result = nb1 - nb2;
                isOk = result >= 0;
                break;
            case 1:
                operator = '*';
                result = nb1 * nb2;
                break;
            case 2:
                operator = '/';
                result = nb1 / nb2;
                isOk = nb2 != 0 && nb1 % nb2 == 0;
                break;
            case 3:
                result = nb1 + nb2;
                break;
        }
    } while (!isOk);

    const html_nb1_td = document.createElement('td');
    html_nb1_td.innerText = nb1;
    const html_ope_td = document.createElement('td');
    html_ope_td.innerText = operator;
    const html_nb2_td = document.createElement('td');
    html_nb2_td.innerText = nb2;
    const html_equal_td = document.createElement('td');
    html_equal_td.innerText = "=";
    const html_result_td = document.createElement('td');
    if(result_showed)
        html_result_td.innerText = result;
    else
        html_result_td.innerText = "...";
    html_tr.appendChild(html_nb1_td);
    html_tr.appendChild(html_ope_td);
    html_tr.appendChild(html_nb2_td);
    html_tr.appendChild(html_equal_td);
    html_tr.appendChild(html_result_td);
}

