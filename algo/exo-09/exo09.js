let resultat = document.getElementById("resultat-contenu");
let syntaxe = document.getElementById("result-syntaxe");

/** Version Paramètre de type simple (number, string, ...)

// const distribution = function(stock, name){
//     if(stock > 0){
//         alert(`Voici votre ${name}!`);
//         stock = stock -1;
//     }
//     else{
//         alert(`Il n'y a plus de ${name}...`);
//     }
//     return stock;
// }

// let stock_eau = 0;
// let stock_soda = 5;
// let stock_orangeade = 3;
// let stock_citronnade = 1;

// while (stock_eau + stock_citronnade + stock_orangeade + stock_soda > 0) {
//     let boisson = parseInt(prompt("Choisissez une boisson :\n1. Eau\n2. Soda\n3. Orangeade\n4. Citronnade"));
//     switch (boisson) {
//         case 1:
//             stock_eau = distribution(stock_eau,'eau');
//             break;
//         case 2:
//             stock_soda = distribution(stock_soda,'soda');
//             break;
//         case 3:
//             stock_orangeade = distribution(stock_orangeade,'orangeade');
//             break;
//         case 4:
//             stock_citronnade = distribution(stock_citronnade,'citronnade');
//             break;
//         default:
//             alert("Choix indisponible...");
//             break;
//     }
// }

// alert('Merci d\'avoir utiliser distributeur 3000');

*/

/** Version Paramètre de type complex/ référenciel (object, array, ...) */

const distribution = function (boisson) {
  if (boisson.stock > 0) {
    alert(`Voici votre ${boisson.name}!`);
    boisson.stock--;
  } else {
    alert(`Il n'y a plus de ${boisson.name}...`);
  }
};

const array_sum = function (drink_array) {
  let sum = 0;
  for (const drink of drink_array) {
    sum += drink.stock;
  }
  return sum;
};

let boissons = [
  { name: "eau", stock: 0 },
  { name: "soda", stock: 5 },
  { name: "orangeade", stock: 3 },
  { name: "citronnade", stock: 1 },
];

while (array_sum(boissons) > 0) {
  let choix = parseInt(
    prompt(
      "Choisissez une boisson :\n1. Eau\n2. Soda\n3. Orangeade\n4. Citronnade"
    )
  );
  if (choix > 0 && choix <= boissons.length) distribution(boissons[choix - 1]);
  else alert("Choix indisponible...");
}

resultat.innerHTML = `Merci d'avoir utiliser distributeur 3000`;
