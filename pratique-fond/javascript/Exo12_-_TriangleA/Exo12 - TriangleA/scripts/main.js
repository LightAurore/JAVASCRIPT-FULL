/* Version 1

// let limit = parseInt(prompt("Combien de ligne ?"));

// let i = 0;
// let message = "";

// while (i < limit) {
//     message += "A";
//     console.log(message);
//     i++;
// }

*/

/* Version 2 */

let limit = parseInt(prompt("Combien de ligne ?"));

let i = 0;
let ligne = "";
let message = "";

while (i < limit) {
    ligne += "A";
    message += ligne + "\n";
    i++;
}


alert(message);