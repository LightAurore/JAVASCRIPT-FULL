let resultat = document.getElementById("resultat-contenu");
let message= "";
// 16 21 pg 114 121;

let justePrix = parseFloat(prompt("Entrez le juste prix : \n une valeur entre 1 et 10"));
let proposition = parseFloat(prompt("Quelle est votre proposition : "));

do{
    if(proposition < justePrix){
        console.log("Plus grand");
        proposition = parseFloat(prompt("Quelle est votre proposition : "))
    }
    else (proposition > justePrix){
        console.log("Plus petit");
        proposition = parseFloat(prompt("Quelle est votre proposition : "))
    }


}while(proposition != justePrix)

alert(`Vous avez trouvez le juste prix ${proposition}`)