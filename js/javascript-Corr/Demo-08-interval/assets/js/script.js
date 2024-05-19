// Des fonctions pour créer des timers en JS
// - Attention, ils ne sont pas précis !!!
// - Deux type : Interval / Timeout

// Timeout
//? => Attends X millisecondes avant de réaliser le callback

let timerId;

//! setTimeout
// Les parametres : 
// - La fonction a executer (obligatoire)
// - Le temps en millisecondes a attendre 
// - Les parametre a envoyer à la fonction (optionnel)

const btnTimeout = document.getElementById('btn-timeout');
btnTimeout.addEventListener('click', () => {
    console.log('Start !!!');

    const name = 'Fred';

    // setTimeout(() => {
    //     sayHello(name);
    // }, 2000);

    timerId = setTimeout(sayHello, 2000, name);
    console.log(`Timer timout Id : ${timerId}`);

    console.log('Finish !!!');
})

function sayHello(person) {
    console.log('Say Hello !!!');
    alert(`Bonjour ${person} !`);
}

//! clearTimeout
// Les parametres : 
// - L'id du timer a arreter

const btnTimeoutStop = document.getElementById('btn-timeout-stop');
btnTimeoutStop.addEventListener('click', () => {
    console.log('Nope !!!');
    clearTimeout(timerId);
})



// Interval 
//? => Attends X millisecondes avant de réaliser le callback
//?    Ensuite, elle recommence

let timerIntervalId;

//! setInterval
// En parametre, elle recoit
// - La fonction a executer (obligatoire)
// - Le temps en millisecondes a attendre 
// - Les parametre a envoyer à la fonction (optionnel)
// Elle renvoie l'id du timer

const btnInterval = document.getElementById('btn-interval');
btnInterval.addEventListener('click', () => {

    timerIntervalId = setInterval(() => {
        console.log('Interval');
        console.log('♥');
    }, 100);
    
    console.log(`Timer timout Id : ${timerIntervalId}`);
});

//! clearInterval
// En parametre, elle recoit
// - L'id du timer a arreter

const btnIntervalStop = document.getElementById('btn-interval-stop'); 
btnIntervalStop.addEventListener('click', () => {

    clearInterval(timerIntervalId);
})