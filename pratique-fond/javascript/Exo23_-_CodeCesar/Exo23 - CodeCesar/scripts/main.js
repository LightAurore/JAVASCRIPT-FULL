/* Version 1 Avec tableau
// let message = prompt("Que voulez-vous traiter ?");

// let isDecrypt = confirm("Voulez-vous décrypter ou encrypter ?");

// let msg_array = message.split('');

// for (let i = 0; i < msg_array.length; i++) {
//     const character = msg_array[i];
//     let ascii_code = character.charCodeAt(0);
//     if(isDecrypt){
//         ascii_code -= 4;
//     }
//     else{
//         ascii_code += 4;
//     }
//     msg_array[i] = String.fromCharCode(ascii_code);
// }

// alert(msg_array.join(''));
*/

/* Version 2 Sans tableau */
let message = prompt("Que voulez-vous traiter ?");

let isDecrypt = confirm("Voulez-vous décrypter ou encrypter ?");

let result = '';
for (let i = 0; i < message.length; i++) {
    let ascii_code = message.charCodeAt(i);
    ascii_code = (isDecrypt) ? ascii_code-4 : ascii_code+4;
    result += String.fromCharCode(ascii_code);
}

alert(result);