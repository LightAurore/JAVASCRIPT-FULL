const chalk = require("chalk");

function print(tagMsg, hexColor, messages) {
    const tag = `[${tagMsg.toUpperCase()}]`;
    for (const msg of messages) {
        console.log(`${chalk.hex(hexColor).bold(tag)} ${msg}`);
    }
}

function log(...messages) {
    print('log', '00F', messages);
}

function warning(...messages) {
    print('error', '906', messages);
}

function error(...messages) {
    print('error', 'F00', messages);
}


const logger = {
    log,
    warning,
    error
};
module.exports = logger;