let justePrix = Math.round(Math.random() * 100);

let proposition;
do {
    proposition = parseInt(prompt("Essayez de deviner le Juste prix :"));
} while (isNaN(proposition));

while (proposition != justePrix) {
    if(proposition > justePrix) alert("C'est moins!");
    else alert("C'est plus!");
    do {
        proposition = parseInt(prompt("Encore une fois :"));
    } while (isNaN(proposition));
}

alert("C'est gagné!")