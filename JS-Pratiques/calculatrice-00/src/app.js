'use strict'

let nbr01 = document.getElementById("input-nb1");
let nbr02 = document.getElementById("input-nb2");
let resultat = document.getElementById("resultat");


const operateur1 = document.querySelector("#op1");
const operateur2 = document.querySelector("#op2");
const operateur3 = document.querySelector("#op3");
const operateur4 = document.querySelector("#op4");


operateur1.addEventListener('click',function(){
    let result = parseFloat(nbr01.value) + parseFloat(nbr02.value);
    console.log(result);
    resultat.value= result;
});
operateur2.addEventListener('click',function(){
    let result = parseFloat(nbr01.value) - parseFloat(nbr02.value);
    console.log(result);
    resultat.value = result;
});
operateur3.addEventListener('click',function(){
    let result = parseFloat(nbr01.value) * parseFloat(nbr02.value);
    console.log(result);
    resultat.value = result;
});
operateur4.addEventListener('click',function(){
    let result = parseFloat(nbr01.value) / parseFloat(nbr02.value);
    console.log(result);
    resultat.value = result;
});

