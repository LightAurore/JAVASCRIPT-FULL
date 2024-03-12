const socket  = io();

// Html Elemnt
const btnHello = document.getElementById('btn-hello');
const containerMessage = document.getElementById('container-message');

socket.on('connect', ()=>{
    console.log('Connexion à Websocket réussi !');
    console.log(socket.io.engine.transport);

    btnHello.removeAttribute('disabled');
    btnHello.addEventListener('click', displayMessage)
});


const displayMessage = ()=>{
    
}