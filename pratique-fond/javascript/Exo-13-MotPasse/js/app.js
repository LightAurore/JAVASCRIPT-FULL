
let nom = "Toto";

let motDePasse = "BxlForm4tion";

const user = {
    nom : "Toto",
    motDePasse : "BxlForm4tion"
}

let i = 0;

do{
    // let psswd = prompt("Entrez votre mot de passe :");
    let psswd1 = document.getElementById("motDePasse").value;
    alert(psswd1);
    if(psswd1 != motDePasse){
        i++;
        if(i==3){
            alert("Vous avez fait trois tentative erronnée! \nLe compte est vérouillé .")
        }
    }
    else{
        alert("Le mot de passe est correct");
        i= 3;
    }
}while(i<3)