/* variable */
var textBrut = document.getElementById("txt-brut");
var textClear = document.getElementById("text-clear");
var textResult = document.getElementById("text-result");
var nbChar = document.getElementById("nb-char");
var crypt = document.getElementById("coder");
var $ = (id) => document.getElementById(id);

/*  */
var nettoyer = (txt) => {
    var accents = "éèàçâêôîûäëüïö";

    var voyelles = "aeuio";

    return [...txt.toLowerCase()].map(c => accents.includes(c) ? voyelles[accents.indexOf(c)] : c).join('').replace(/[^a-z]/g, '').toUpperCase();
}

// $('nb-char').innerText = textBrut.length;

textBrut.addEventListener('keyup', 
    function(){ 
        console.log(textClear.value)
        textClear.value = nettoyer(textBrut.value);
    }, 
    false
);

crypt.addEventListener('click', 
    function(){ 
        console.log('crypter');
        console.log(textClear.value);
        textClear.value = nettoyer(textBrut.value)
    }, 
    false
);


/* Le code de César */
/**
 * 
 * @param {string} c 
 * @param {number} dec : décallage
 * @returns 
 */
var cesar = (c, dec) => {
    var alpha = "AZERTYUIOPMLKJHGFDSQWXCVBN";

    return alpha[( + dec + alpha.indexOf(c) + 26) % 26]
}

