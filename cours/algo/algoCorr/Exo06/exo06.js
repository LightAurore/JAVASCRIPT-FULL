let panierVide = prompt('Le panier est-il vide? (Oui - Non)').trim().toLowerCase() == "oui";

if(panierVide){
    console.warn("Veuillez remplir le panier.");
}
else{
    let pret = prompt('Êtes-vous prêt? (Oui - Non)').trim().toLowerCase() == "oui";
    if (pret) {
        console.log('Attention! En voilà une rapide!');
    }
    else{
        console.warn(`D'autres attendent, dépèche-toi!`);
    }
}