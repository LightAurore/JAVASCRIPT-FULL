'strict mode'

let dom_H2 = document.querySelector("header h2");
const dom_bouton = document.querySelector('.user-name > button');
let dom_input = document.querySelector("#mon-input");

let mode = document.querySelector('.mode > button');

dom_bouton.addEventListener('click', function(){
    dom_H2.innerText = `bienvenu Mr ${dom_input.value} sur le site E-Sport`;
    dom_H2.classList.add('h2-color');
    dom_input.value ="";
})

mode.addEventListener('click', function(){
    document.body.classList.toggle('dark');
})

