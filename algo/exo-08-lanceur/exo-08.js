let resultat = document.getElementById("resultat-contenu");
let message;
let _pret;
let _panierVide;

let isPlayerReady = () => {
    _pret = prompt("Etes-vous pret ?").trim().toLowerCase();
    if(_pret == "oui"){
        message = `La balle est lancée`;
        resultat.innerText = message;
    }
    else{
        message = `Le joueur n'est pas pret,\n Dépèchez-vous!`;
        resultat.innerText = message;
    }
}

let isCarEmpty = () => {
    // _panierVide =parseInt(prompt("combien y a t il des balles dans ma machines"))
    _panierVide = prompt("le panier est vivde?\n oui ou non").trim().toLowerCase();
    if(_panierVide == "non"){
        isPlayerReady()
    }
    else{
        message= `Veillez charger la machine avec des balles`
        resultat.innerText = message;
    }
}


