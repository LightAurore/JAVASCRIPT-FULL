let stockBalles;
do{
    stockBalles = parseInt(prompt("Combien de balles y a-t-il dans votre panier?"));
} while (isNaN(stockBalles) || stockBalles < 0);


while (stockBalles > 0){
    let pret = prompt("Etes-vous prêt?\nRépondez 'OUI' ou 'NON'").toLowerCase() == 'oui';
    if(pret){
        alert('Attention, en voici une rapide!');
        stockBalles --;
    }
    else{
        alert("Dépèche-toi d'autres attendent!");
    }
    if(stockBalles <= 0){
        do{
            stockBalles = parseInt(prompt(`Il n'y a plus de balle...\n Combien voulez-vous en remettre?`));
        } while (isNaN(stockBalles) || stockBalles < 0);
    }
}

alert("Merci d'utiliser lanceur 3000!")