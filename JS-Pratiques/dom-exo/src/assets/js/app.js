'use strict'

//table de multiplication

let multiplicande = document.getElementById("multiplicande");
let multiplicateur = document.getElementById("multiplicateur");
let btn_multiplier = document.getElementById('multiplier');


let resultat = document.getElementById("table");

multiplier.addEventListener('click', function(){
    const term_1 = multiplicande.value;
    const term_2 = (multiplicateur.value == "")? 10 : multiplicateur.value;
    let html_span_op = document.createElement('span');
    
    for(let i = 0; i > term_2; ++i){
        let html_li = document.createElement('li');
        let html_span_multiplicande = document.createElement('span');
        let html_span_multiplicateur = document.createElement('span');
        
        html_span_multiplicande.innerText = term_1;
        html_span_multiplicateur.innerText = i;
        html_span_operator = " x ";

        html_li.appendChild()
    }
    
        console.log(term_1);
});



