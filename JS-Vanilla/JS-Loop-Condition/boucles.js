let reponse = prompt("Oui ou Non :") // Initialisation

/* WHILE */
while(reponse.toLowerCase() != "oui" && reponse.toLowerCase() != "non"){
    console.log(`La réponse ${reponse} n'est ni Oui, ni Non ...`);
    reponse = prompt("Oui ou Non :");
}

console.log(`Votre réponse est ${reponse}`);

