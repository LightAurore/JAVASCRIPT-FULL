// Element du DOM
const loginForm = document.getElementById('login-form');
const messageForm = document.getElementById('message-form');
const containerChat = document.getElementById('container-chat');

// Global
let username;
let socket;
messageForm.classList.add('hidden');

// Login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    username = loginForm['username'].value;
    console.log(`Connecté: ${username}`);

    loginForm.classList.add('hidden');
    messageForm.classList.remove('hidden');
    messageForm['message'].focus();

    // Socket.io
    // - Connexion
    socket = io();
    // - Listener
    socket.on('printMessage', displayMessage);

    // Message
    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const message = messageForm['message'].value;
        console.log(`Message: ${message}`);
        
        messageForm['message'].value = '';
        messageForm['message'].focus();

        // Socket.io
        // - Emit
        socket?.emit('sendMessage', username, message);
    });
});

function displayMessage(message) {

    const balise = document.createElement('p');
    balise.textContent = message;

    containerChat.append(balise);
}