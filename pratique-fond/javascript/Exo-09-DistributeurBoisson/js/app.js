
alert("bienvenu sur So Fresh Drink 0102 Int\n\n Nos Boissons :\n\nJus de pomme -------- A21\nJus d'orange ---------- A31\nCafé ------------------- A41\nThé -------------------- A51\nEau -------------------- A61\n");

let jusPomme = -1;
let jusPomme_prix = 2.0;
let jusOrange = 4;
let jusOrange_prix = 2.0;
let cafe = 0;
let cafe_prix = 1.0;
let tea = 2;
let tea_prix = 1.0;
let eau = 10;
let eau_prix =0.5;

alert("1. Faites votre choix\n2. Introduisez votre monnaie\n3. Récupérez votre boisson")

let choix = prompt("Faîtes votre choix : ");

switch(choix.toUpperCase()){
    case "A21": if(jusPomme>0){
        alert(`Prix : ${jusPomme_prix} $\n`) ;
        alert("Votre boisson est servie\n Au plaisir de vous revoir!");
        jusPomme--;
    }else{
        alert("Sold out!");
    }
        break;
    case "A31": if(jusOrange>0){
        alert(`Prix : ${jusOrange_prix} $\n`) ;
        alert("Votre boisson est servie\n Au plaisir de vous revoir!");
        jusOrange--;
    }else{
        alert("Sold out!");
    }
        break;
    case "A41":if(cafe>0){
        alert(`Prix : ${cafe_prix} $\n`) ;
        alert("Votre boisson est servie\n Au plaisir de vous revoir!");
        cafe--;
    }else{
        alert("Sold out!");
    }
        break;
    case "A51": if(tea>0){
        alert(`Prix : ${tea_prix} $\n`) ;
        alert("Votre boisson est servie\n Au plaisir de vous revoir!");
        tea--;
    }else{
        alert("Sold out!");
    }
        break;
    case "A61": if(eau>0){
        alert(`Prix : ${eau_prix} $`) ;
        alert("Votre boisson est servie\n Au plaisir de vous revoir!");
        eau--;
    }else{
        alert("Sold out!");
    }
        break;
    default: alert("Veuillez entre un choix de la liste!")
        break;
}



