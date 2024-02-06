'use strict'

const chalk = require('chalk');

// const now = new Date();

const now = new Date(2024,1,1,8,2);

const hours = now.getHours().toLocaleString('fr-be',{minimumIntegerDigits: 2})
const minutes = now.getMinutes().toLocaleString('fr-be',{minimumIntegerDigits: 2})


const time = now.toLocaleTimeString('fr-be');
const time2 = now.toLocaleTimeString('fr-be', {timeStyle: 'short'});


console.log(`Bonjour, il est ${now.getHours()<10?"0":""}${now.getHours()} h ${now.getMinutes()<10?"0":""}${now.getMinutes()}`);
console.log(`Bonjour, il est ${now.getHours()} h ${now.getMinutes()}`);
console.log(`Bonjour, il est ${hours} h ${minutes}`);
console.log(`Bonjour, il est ${time}`);
console.log(`Bonjour, il est ${chalk.yellow(time2)}`);
console.log(`Bonjour, il est ${chalk.red(time2)}`);
console.log(`Bonjour, il est ${chalk.bgRgb(15, 100, 204).inverse(time2)}`);
console.log(`Bonjour, il est ${chalk.bold.rgb(10, 100, 200)(time2)}`);