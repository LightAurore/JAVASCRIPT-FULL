'use strict';

// Récuperation des éléments du DOM
const btnValid = document.getElementById('btn-valid');
const btnReset = document.getElementById('btn-reset');
const inputUsername = document.querySelector('#input-username');
const title = document.getElementById('title');
const btnDayNight = document.querySelector('.day-night');

// Interaction avec le bouton
btnValid.addEventListener('click', function() {

    // Code qui sera activé au click du bouton
    const username = inputUsername.value;
    title.innerText = 'Bienvenue ' + username + ' !';
    title.classList.add('title-alternate');

    inputUsername.disabled = true
    btnValid.disabled = true
});

btnReset.addEventListener('click', function() {
    title.innerText = 'Bienvenue sur le site';
    title.classList.remove('title-alternate');
    inputUsername.disabled = false
    btnValid.disabled = false
})

// Interaction avec le span pour la gestion du theme
btnDayNight.addEventListener('click', function() {
    document.body.classList.toggle('dark')
})