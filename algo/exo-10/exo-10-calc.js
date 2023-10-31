let resultat = document.getElementById("resultat-contenu");
let res = document.getElementById("resultat");
let message;

let boutons = resultat.querySelectorAll("span:not(#resultat)");
// let boutons = resultat.querySelectorAll("span:not(#resultat, #egale)");

let operator;
let nb = 0;
let operation;


const touche = () => {
    boutons.forEach(btn => {
        btn.addEventListener('click',()=>console.log(btn.innerHTML));
    });
}

do{
    touche()
}while(operator != "=")

// console.log(boutons);

// console.log(resultat);

// resultat.onclick = (e) => {
//     console.log(e);
//     console.log(boutons[1].innerText);
// }

// res.onclick = () =>{
//     console.log(res.innerHTML)
// }


/* Prompt */
/* 
let nb1 = parseInt(prompt("Entrer le premier nombre :"));

let operateur = prompt("Entrer l'opérateur");

let nb2 = parseInt(prompt("Entrer le second nombre :"));
 
switch (operateur) {
    case "/":
        if(nb2 == 0){
            message = "Division avec zéro est impossible";
        }else{
            message = nb1 / nb2;
        }
        break;
    case "*":
        message = nb1 * nb2;
        break;
    case "-":
        message = nb1 - nb2;
        break;
    case "+":
        message = nb1 + nb2;
        break;
    case "%":
        if(nb2 == 0){
            message = "Modulo zéro est impossible";
        }else{
            message = nb1 % nb2;
        }
        break;
}
*/
// alert(message);

