

require('dotenv').config();

//! Imports
const { Server } = require('socket.io');


//! Web socket 
const createIoServer = (httpServer) =>{

    const io = new Server(httpServer, {
        transports: ['websocket','polling']
    });

    io.on('connection', (socket) => {
        socket.on('sayHello', () => {
            io.emit('printHello', 'Hello World !');
        })
    });
}

module.exports = createIoServer;