let resultat = document.getElementById("resultat-contenu");
let res = document.getElementById("resultat");
let message;

let boutons = resultat.querySelectorAll("span:not(#resultat, #egale)");
/* 
let operator;
let nb = 0;
let operation;

boutons.forEach(btn => {
    btn.addEventListener('click',()=>{
        console.log(btn.innerHTML);
        res.innerText = btn.innerText;
        if(["1","2","3","4","5","6","7","8","9","0"].includes(btn.innerText)){
            
        }
    });
});
 */
/* 
boutons.forEach(btn => {
        btn.addEventListener('click',()=>console.log(btn.innerHTML));
});

const touche = () => {
    boutons.forEach(btn => {
        btn.addEventListener('click',()=>{
            console.log(btn.innerHTML);
            res.innerText = btn.innerText;
        });
    });
}

touche();
 */

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

let nb1 = parseFloat(prompt("Entrer le premier nombre :"));
let operateur = prompt("Entrer l'opérateur");
let nb2 = parseFloat(prompt("Entrer le second nombre :"));
do{
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
    operateur = prompt("Entrer l'opérateur");

    if(operateur == "="){
        alert(message);
        res.innerHTML += ` ${message}`
    }
    else{
        nb1 = message;
        nb2 = parseFloat(prompt("Entrer le second nombre :"));
    }
}while(operateur != "=");



alert(message);

