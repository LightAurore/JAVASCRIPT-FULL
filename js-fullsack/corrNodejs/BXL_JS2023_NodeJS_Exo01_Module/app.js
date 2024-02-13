'use strict';

const readline = require('readline/promises');
const shapeEnum = require("./enums/shape.enum");
const shapeTool = require("./tools/shape.tool");


// Exemple d'interagir avec le terminal via le stdin de process
/*
console.log('Quel forme ?\n1) Carré\n2)Rectangle\n3)Triangle\n4)Cercle\n>')
process.stdin.on('readable', () => {
    const choice = process.stdin.read().toString().trim();
    console.log('Res', choice, typeof(choice));
})
*/

// Exemple d'interagir avec le terminal via le module 'readline'
(async function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    const choice = await rl.question('Quel forme ?\n1) Carré\n2) Rectangle\n3) Triangle \n>');
    
    let shape;
    switch(choice) {

        case '1' : 
            const base = await rl.question('Taille des cotés ? \n>');
            shape = {
                type: shapeEnum.square,
                base
            };
            break;

        case '2' : 
        case '3' : 
            const height = await rl.question('Hauteur ? \n>');
            const width = await rl.question('Largeur ? \n>');
            shape = {
                type: (choice === '2') ? shapeEnum.rectangle : shapeEnum.triangle,
                height,
                width
            };
            break;

        default:
            rl.write('Forme non supporté !')
            break;
    }

    const area = shapeTool.area(shape);
    const perimetre = shapeTool.perimetre(shape);

    await rl.write(`L'aire est de ${area} et le perimetre est de ${perimetre} \n`);

    await rl.close();
})();