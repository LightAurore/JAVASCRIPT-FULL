let resultat = document.getElementById("resultat-contenu");
let message;
let _pret;
let _panierVide;

let isReady = () => {
    _pret = prompt("Etes-vous pret ?");
    if(_pret == "oui"){
        message = `La balle est lancée`;
        resultat.innerText = message;
    }
    else{
        message = `Le joueur n'est pas pret`;
        resultat.innerText = message;
    }
}

let isCarEmpty = () => {
    _panierVide =parseInt(prompt("combien y a t il des balles dans ma machines"))
    if(_panierVide){
        isReady()
    }
    else{
        message= `Veillez charger la machine avec des balles`
        resultat.innerText = message;
    }
}

isCarEmpty()
