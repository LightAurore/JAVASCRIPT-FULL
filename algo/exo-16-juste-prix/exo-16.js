let resultat = document.getElementById("resultat-contenu");
let message = "";
// 16 21 pg 114 121;

function roueFortune(){
  let justePrix = parseFloat(
    prompt("Entrez le juste prix : \n une valeur entre 1 et 10")
  );
  let proposition = parseFloat(prompt("Quelle est votre proposition : "));

  let mesProp = [];
  let list = "";

  do {
    mesProp.push(proposition);
    list = mesProp.toString();
    if (proposition < justePrix) {
      proposition = parseFloat(
        prompt(`${list}\nC'est PLUS \nQuelle est votre proposition : `)
      );
    } else if (proposition > justePrix) {
      proposition = parseFloat(
        prompt(`${list}\nC'est MOINS \nQuelle est votre proposition : `)
      );
    }
  } while (proposition != justePrix);

  resultat.innerText = `Vous avez trouvez le juste prix ${proposition}`;
}