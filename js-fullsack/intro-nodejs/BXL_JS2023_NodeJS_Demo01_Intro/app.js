const chalk = require('chalk');

const now = new Date();

// const hours = now.getHours().toString().padStart(2, '0');
// const minutes = now.getMinutes().toLocaleString('fr-be', {minimumIntegerDigits: 2});
// console.log(`Bonjour, il est ${hours}:${minutes}`);

const time = now.toLocaleTimeString('fr-be', { timeStyle: 'short' });
console.log(`Bonjour, il est ${chalk.hex('7fff00').bold(time)}`);

