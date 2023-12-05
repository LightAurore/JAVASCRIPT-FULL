


const msg = 'Hello World';


const v1 = msg.indexOf('o');
const v2 = msg.indexOf('World');
const v3 = msg.indexOf('o',5);
const v4 = msg.lastIndexOf('o');

const v5 = msg.lastIndexOf('w');

console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);

// 
const v6 = msg.toLowerCase();
const v7 = msg.toUpperCase();
console.log(v6);
console.log(v7);

// 
const msg2 = 'Voici un exemple avec des " i "'
const v8 = msg2.toLocaleLowerCase('fr-be');
const v9 = msg2.toLocaleUpperCase('tr-tr');
console.log(v8);
console.log(v9);

// 
const v10 = msg.charAt(3);
console.log(v10);

const v11 = msg[5];
console.log(v11);

// 
const v12 = msg.charCodeAt(3);
console.log(v12);

// ASCII
const letterCode = 66;
const v13 = String.fromCharCode(letterCode);
console.log(v13);


// Remplacer
const v14 = msg.replace('o', 'O');
console.log(v14);
const v15 = msg.replaceAll('l', 'L');
console.log(v15);

// 
const balthy = "Balthazar Picsou";
const v16 = balthy.substring(3,6);
console.log(v16);

// 
const v17 = balthy.substring(balthy.length - 1);
console.log(v17);

// 
let v18 = balthy.slice(1,5);
console.log(v18);

v18 = balthy.slice(-1);
console.log(v18); 

const v19 = balthy.split('');
console.log(v19);

// 
const v20 = balthy.split('a');
console.log(v20);


