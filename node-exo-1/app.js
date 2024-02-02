'use strict'

// const { default: chalk } = require('chalk');
const geometrie = require('./tools/geometrie.tool');

const readline = require('readline/promises');

const f1 = {
    type: 'Cercle',
    rayon: 42
}
const f2 = {
    type: 'Rectangle',
    hauteur: 10,
    largeur: 2
}
const f3 = {
    type: 'Triangle',
    hauteur: 10,
    largeur: 2
}
const f4 = {
    type: 'Carré',
    cote: 15
}

const r1 = geometrie.perimetre(f1);
console.log(r1);
const r1b = geometrie.aire(f1);
console.log(r1b);
const r2 = geometrie.aire(f2);
console.log(r2);
const r3 = geometrie.aire(f3);
console.log(r3);

const r4 = geometrie.perimetre(f4);
console.log(r4);
const r5 = geometrie.aire(f4);
console.log(r5);


/* Ecouter la console 
process.stdin.on('readable', () =>{
    process.stdout.write("Quel form ?\n1) Carré\n2) Rectangle\n3) Triangle\n4) Cercle\n")


    const choice = process.stdin.read().toString().trim();

    switch (choice) {
        case 1:console.log("La taille du carré");
        const base = process.stdin.read().toString();
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;1
    
        default:
            break;
    }

    console.log(choice);
})
*/


/*  */
(
    async function()
{    

    // on peut mettre aussi une page comme flux d'entrée ou de sortie
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})



const choice = await rl.question('Quel form ?\n1) Carré\n2) Rectangle\n3) Triangle\n4) Cercle\n>');

console.log(choice);

let shape = {};


switch (choice) {
    case '1':
        shape.type = 'Carré';
        shape.longueur = Number(await rl.question('Taille des côtés ? \n>'));
        break;
    case '4':
        shape.type = 'Cercle';
        shape.rayon = Number(await rl.question('rayon du cercle ? \n>'));
        break;
    case '2':
    case '3':
        shape.type = 'Triangle' || 'Rectangle';
        shape.hauteur = await rl.question('Hauteur ? \n>');
        shape.largeur = await rl.question('Largeur ? \n>');
        break;

    default:
        await rl.write('Forme non supporté !\n')
        break;
}

console.log(shape)

const area = geometrie.aire(shape);
const perimetre = geometrie.perimetre(shape);

await rl.write(`L'aire est de ${area} et le perimetre est de ${perimetre}\n`)

// on relaxe la console
await rl.close()
}
)();



