/*
const chalk = require('chalk');


function print(tag, color, ...messages){

    const tagTxt = `[${tag}]`.toUpperCase();

    for (const msg of messages) {
        console.log(`${chalk[color].bold(tagTxt)} ${msg}`);
    }
}


function log( ...messages){
    print('log', '00F', messages)
}

function log( ...messages){
    print('log', '60A', ...messages)
}

function error( ...messages){
    print('error', 'F00', ...messages)
}






/* 
    Logger.log('Hello');

    logger.log('Number', 42)


module.exports = {
    log,
    error
}
*/


const chalk = require("chalk");

function print(tag, color, ...messages) {
    const tagTxt = `[${tag}]`.toUpperCase(); // Corrected the string interpolation

    for (const msg of messages) {
        console.log(`${chalk[color].bold(tagTxt)} ${msg}`);
    }
}

function log(...messages) { // Corrected the parameter name
    print('log', 'blue', ...messages); // Spread the messages array
}

function error(...messages) { // Corrected the parameter name
    print('error', 'red', ...messages); // Spread the messages array
}

module.exports = {
    log,
    error
};