let resultat = document.getElementById("resultat-contenu");
let message;
let _pret;
let _panierVide;

let isPlayerReady = (_ballStock) => {
    _pret = prompt("Etes-vous pret ?").trim().toLowerCase();
    if(_pret == "oui"){
        message = `La balle est lancée`;
        resultat.innerText = message;
        console.log(_ballStock);
        _ballStock--;
    }
    else{
        message = `Le joueur n'est pas pret,\n Dépèchez-vous!`;
        resultat.innerText = message;
        console.log(_ballStock, message);
    }
}

let lanceur = () => {
    let _ballStock =parseInt(prompt("combien y a t il des balles dans ma machines"));
    

    /* if(_ballStock){
        _panierVide = "non";
        while(_ballStock > 0){
            if(isPlayerReady()){
            console.log(_ballStock);
            _ballStock--;
            }
            
        }
    } */
    
   /*  if(!_panierVide){
        while(_ballStock > 0 && _pret){
            _pret = 
            _ballStock--;
        }
        alert("Le stock est vide")
    }
    else{
        message= `Veillez charger la machine avec des balles`
        resultat.innerText = message;
    } */
    isPlayerReady(_ballStock);

    while(_ballStock > 0 && _pret){
        isPlayerReady(_ballStock);
        if(_pret){
            _ballStock--;
        }
    }
    
}

lanceur();
