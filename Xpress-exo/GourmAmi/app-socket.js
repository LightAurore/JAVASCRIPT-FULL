require('dotenv').config();

//! Imports
const { Server } = require('socket.io');

//! Web Socket
const createIoServer = (httpServer) => {

    const io = new Server(httpServer, { 
        transports: ['websocket', 'polling']
    });

    io.on('connection', (socket) => {
        console.log('Socket.io ready');

        //* Intro
        // Attend l'event "sayHello" que le client va déclencher
        socket.on('sayHello', () => {
            console.log('Recive : sayHello');

            // Déclencher la méthode "printHello" chez tous les clients
            // - Premier param : le nom de la méthode
            // - Autres params : les arguments
            io.emit('printHello', 'Hello World !');

        });
        

        //* Chat
        socket.on('sendMessage', (username, message) => {

            // Envoyer le message à tous les clients (sauf l'emetteur du message)
            socket.broadcast.emit('printMessage', `${username} : ${message}`);

            // Envoyer uniquement à l'emetteur du message
            socket.emit('printMessage', `> ${message}`);
        });

    });
}

module.exports = createIoServer;