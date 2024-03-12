// Socket.io
const socket = io();

// Html Element
const btnHello = document.getElementById('btn-hello');
const containerMessage = document.getElementById('container-message');

// Connexion à socket.io
socket.on('connect', () => {
    console.log('Connexion au WebSocket réussi !');
    console.log('Transport: ', socket.io.engine.transport);

    btnHello.removeAttribute('disabled');
    btnHello.addEventListener('click', displayMessage)
});

const displayMessage = () => {

    // Déclenche la méthode "sayHello" du serveur
    socket.emit('sayHello');
};

// Méthode écouté par le client 
socket.on('printHello', (message) => {
    const baliseMessage = document.createElement('p');
    baliseMessage.textContent = message;

    containerMessage.append(baliseMessage);
});