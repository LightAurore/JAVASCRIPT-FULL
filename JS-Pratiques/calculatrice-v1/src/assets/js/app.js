let nombre01 = document.getElementById("nb1");
let nombre02 = document.getElementById("nb2");


const operareur_addition = document.getElementById("op1");
const operareur_soustraction = document.getElementById("op2");
const operareur_multiplication = document.getElementById("op3");
const operareur_division = document.getElementById("op4");
const operareur_racine = document.getElementById("op5");
const operareur_puissance = document.getElementById("op6");
const operareur_division_entiere = document.getElementById("op7");
const operareur_modulo = document.getElementById("op8");


operareur_addition.addEventListener('click',function(){
    let result = parseFloat(nombre01.value) + parseFloat(nombre02.value);
    nombre01.value = result;
    nombre02.value = "";
})
operareur_soustraction.addEventListener('click',function(){
    let result = parseFloat(nombre01.value) - parseFloat(nombre02.value);
    nombre01.value = result;
    nombre02.value = "";
})
operareur_multiplication.addEventListener('click',function(){
    let result = parseFloat(nombre01.value) * parseFloat(nombre02.value);
    nombre01.value = result;
    nombre02.value = "";
})
operareur_division.addEventListener('click',function(){
    let result = parseFloat(nombre01.value) / parseFloat(nombre02.value);
    nombre01.value = result;
    nombre02.value = "";
})
operareur_racine.addEventListener('click',function(){
    let result = parseFloat(nombre01.value) **(1 / parseFloat(nombre02.value)) ;
    nombre01.value = result;
    nombre02.value = "";
})
operareur_puissance.addEventListener('click',function(){
    let result = parseFloat(nombre01.value) ** parseFloat(nombre02.value);
    nombre01.value = result;
    nombre02.value = "";
})
operareur_division_entiere.addEventListener('click',function(){
    let result = parseFloat(parseFloat(nombre01.value) / parseFloat(nombre02.value));
    nombre01.value = result;
    nombre02.value = "";
})
operareur_modulo.addEventListener('click',function(){
    let result = parseFloat(nombre01.value) % parseFloat(nombre02.value);
    nombre01.value = result;
    nombre02.value = "";
})

