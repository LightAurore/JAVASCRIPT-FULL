
// let reponse = prompt('Le joueur est-il vide ?\n "OUI" ou "NON"');

// let panierVide = reponse.toLowerCase() == 'oui';
// if(panierVide){
//     alert('Veuillez recharger le panier...');
// }
// else{
//     reponse = prompt("Etes-vous prêt?\nRépondez 'OUI' ou 'NON'");
//     let pret = reponse.toLowerCase() == 'oui';
//     if(pret){
//         alert('Attention, en voici une rapide!');
//     }
//     else{
//         alert("Dépèche-toi d'autres attendent!");
//     }
// }
// alert("Merci d'utiliser lanceur 3000!");

let stockBalles = 2;

do{
alert(`le nombre de balles en stock est de ${stockBalles}  `)

if(stockBalles < 1){
    alert("Veuiller recharger la machine en balles :");
    stockBalles = parseInt(prompt("Entrez la quantité de balles chargée :"));
}
else{
     let   reponse = prompt("Etes-vous prêt?\nRépondez 'OUI' ou 'NON'");
    let pret = reponse.toLowerCase() == 'oui';
    if(pret){
        alert('Attention, en voici une rapide!');
        stockBalles --;
    }
    else{
        alert("Dépèche-toi d'autres attendent!");
    }
	if(stockBalles == 0){
    		alert("Veuiller recharger la machine en balles :");
    		stockBalles = parseInt(prompt("Entrez la quantité de balles chargée :"));
	}
}
}while(stockBalles)
