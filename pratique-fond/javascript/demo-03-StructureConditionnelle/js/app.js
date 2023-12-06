let input =parseInt (prompt('Veuillez indiquer votre année de naissance : '));

let age = 2023 - input;

if(age >= 18){
    alert("Bienvenu sur le de la lotterie nationale !");
    let nation = prompt("Veuillez indiquer votre nationalité : ");
    switch(nation.toLowerCase()){
        case "belge": alert("Bienvenu sur le site de la lottérie nationale, une fois"); 
        break;
        case "français": alert("Bienvenu sur le site de la lottérie nationale, cocorico!");
        break;
        case "suisse": alert("Bienvenueuh sur le siteuh de la lottérieuh nationaleuh");
        break;
        case "allemand": alert("guten tag!");
        break;
        default:  alert("Vous êtes né du mauvais côté de la frontière");
        break;
    }
}else{
    alert(`Dommage! Reviens dans ${18 - age} ans`);
}

alert("Merci de votre visite!");

