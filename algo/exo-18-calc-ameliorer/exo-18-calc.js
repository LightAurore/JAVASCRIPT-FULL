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
boutons.forEach((btn) => {
  btn.addEventListener("click", () => console.log(btn.innerHTML));
});
 */

const touche = () => {
  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.innerHTML);
      res.innerText = btn.innerText;
    });
  });
};

/* 
console.log(boutons);

console.log(resultat);

resultat.onclick = (e) => {
  console.log(e);
  console.log(boutons[1].innerText);
};

res.onclick = () => {
  console.log(res.innerHTML);
};
 */

/* Prompt */
/* 
const faireUnCalcul = () => {

let nbr1 = parseFloat(prompt("Entrer le premier nombre :"));
let operateur = prompt("Entrer l'opérateur");
let nb2 = parseFloat(prompt("Entrer le second nombre :"));
let hasError = false;
do{
    switch (operateur) {
        case "/":
            if(nb2 == 0){
                hasError = true;
                message = "Division avec zéro est impossible";
            }else{
                message = nbr1 / nb2;
            }
            break;
        case "*":
            message = nbr1 * nb2;
            break;
        case "-":
            message = nbr1 - nb2;
            break;
        case "+":
            message = nbr1 + nb2;
            break;
        case "%":
            if(nb2 == 0){
                hasError = true;
                message = "Modulo zéro est impossible";
            }else{
                message = nbr1 % nb2;
            }
            break;
    }
    operateur = prompt("Entrer l'opérateur");

    if(operateur == "="){
        alert(message);
        res.innerHTML += ` ${message}`
    }
    else{
        nbr1 = message;
        nb2 = parseFloat(prompt("Entrer le second nombre :"));
    }
}while(operateur != "=" && hasError);

}

faireUnCalcul(); 
*/

const faireUnCalcul = () => {
  let hasError = false;
  do {
    switch (operateur) {
      case "/":
        if (nb2 == 0) {
          hasError = true;
          message = "Division avec zéro est impossible";
        } else {
          message = nbr1 / nb2;
        }
        break;
      case "*":
        message = nbr1 * nb2;
        break;
      case "-":
        message = nbr1 - nb2;
        break;
      case "+":
        message = nbr1 + nb2;
        break;
      case "%":
        if (nb2 == 0) {
          hasError = true;
          message = "Modulo zéro est impossible";
        } else {
          message = nbr1 % nb2;
        }
        break;
    }
    operateur = touche();

    if (operateur == "=") {
      alert(message);
      res.innerHTML += ` ${message}`;
    } else {
      nbr1 = message;
      nb2 = parseFloat(touche());
    }
  } while (operateur != "=" && hasError);
};

do {
  let nbr1 = parseFloat(touche());
  let operateur = touche();
  let nb2 = parseFloat(touche());
  let hasError = false;
  faireUnCalcul();
} while (hasError);
