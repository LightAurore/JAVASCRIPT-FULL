/* Version IF ... ELSE IF ... ELSE ... */

// let input = parseInt(prompt('Veuillez indiquer votre année de naissance :'));

// let age = 2023 - input;

// if (age >= 18) {
//     let nation = prompt("Veuillez indiquer votre nationalité : ");
//     if (nation.toLowerCase() == 'belge'){
//         alert('Bienvenue sur le site de la lotterie nationale, une fois!');
//     }
//     else if(nation.toLowerCase() == 'français'){
//         alert('Bienvenue sur le site de la lotterie nationale, cocorico!');
//     }
//     else if(nation.toLowerCase() == "suisse"){
//         alert('Bienvenueuh sur le siteuh de la lotterieuh nationaleuh!');
//     }
//     else if(nation.toLowerCase() == "allemand"){
//         alert('guten Tag!');
//     }
//     else{
//         alert('Vous êtes né du mauvais côté de la frontière!');
//     }
// }
// else {
//     alert(`Dommage! Reviens dans ${18-age} an(s)!`);
// }

// alert('Merci de votre visite!');

/* Version SWITCH CASE */

let input = parseInt(prompt("Veuillez indiquer votre année de naissance :"));

let age = 2023 - input;

if (age >= 18) {
    let nation = prompt("Veuillez indiquer votre nationalité : ");
    switch (nation.toLowerCase()) {
        case "belge":
            alert("Bienvenue sur le site de la lotterie nationale, une fois!");
            break;
        case "français":
            alert("Bienvenue sur le site de la lotterie nationale, cocorico!");
            break;
        case "suisse":
            alert("Bienvenueuh sur le siteuh de la lotterieuh nationaleuh!");
            break;
        case "allemand":
            alert("guten Tag!");
            break;
        default:
            alert("Vous êtes né du mauvais côté de la frontière!");
            break;
    }
} else {
    alert(`Dommage! Reviens dans ${18 - age} an(s)!`);
}

alert("Merci de votre visite!");
