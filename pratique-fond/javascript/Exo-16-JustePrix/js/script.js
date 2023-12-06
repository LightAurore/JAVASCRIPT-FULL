let MIN = 0;
let MAX;
let prixUser;
let TENTATIVE = 3;
let replay;

// do{
//     alert("Niveau de difficulté\n    10 : facile\n  100 : Moyen\n   1000 : Difficile")
//     MAX = parseInt(prompt("Choix de niveau : "));
// }while(MAX != 10 && MAX != 100 && MAX != 1000);

let justePrix = Math.round((Math.random() * (MAX - MIN)) + MIN);



function niveauDifficulte(niveau){
        switch(niveau){
        case '1': MAX = parseInt(document.getElementById("difficulte_1").innerText);
        console.log(MAX);
            break;
        case '2': MAX = parseInt(document.getElementById("difficulte_2").innerText);
        console.log(MAX);
            break;
        case '3': MAX = parseInt(document.getElementById("difficulte_3").innerText);
        console.log(MAX);
            break;
        default: ;
            break;
    }




do{
alert(`Veuillez entrer un nombre entre 0 et ${MAX}`);

let i = 0;

while(prixUser != justePrix && i <= TENTATIVE){
     i++;
     do{
        prixUser = parseInt(prompt("Quel est votre prix ? "));
    }while(isNaN(prixUser) || prixUser < 0 || prixUser > MAX);

    if(prixUser < justePrix){
        alert("C'est plus");
    }
    else if(prixUser > justePrix){
        alert("C'est moins");
    }
   
    console.log(`${justePrix} ${prixUser} ${i}`);
}

if(prixUser == justePrix){
    alert(`Bravo! Vous avez trouvez le juste prix en ${i} tentatives!`);
}
else{
    alert(`Dommage! Le juste prix était ${justePrix}`);
    
}

// Replay
replay = prompt('Voulez vous rejouez ?\n    "OUI" ou "NON"').toLowerCase();

replay = replay=="oui"? true: false;
if(replay){
    do{
        alert("Niveau de difficulté\n    10 : facile\n  100 : Moyen\n   1000 : Difficile")
        MAX = parseInt(prompt("Choix de niveau : "));
    }while(MAX != 10 && MAX != 100 && MAX != 1000);
    justePrix = Math.round((Math.random() * (MAX - MIN)) + MIN);
}

}while(replay)
}