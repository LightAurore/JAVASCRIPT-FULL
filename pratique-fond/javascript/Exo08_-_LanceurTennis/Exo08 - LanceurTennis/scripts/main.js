let reponse = prompt("Est-ce que le panier est vide?\nRépondez 'OUI' ou 'NON'");

let panierVide = reponse.toLowerCase() == 'oui';

if(panierVide){
    alert('Veuillez recharger le panier...');
}
else{
    reponse = prompt("Etes-vous prêt?\nRépondez 'OUI' ou 'NON'");
    let pret = reponse.toLowerCase() == 'oui';
    if(pret){
        alert('Attention, en voici une rapide!');
    }
    else{
        alert("Dépèche-toi d'autres attendent!");
    }
}
alert("Merci d'utiliser lanceur 3000!")