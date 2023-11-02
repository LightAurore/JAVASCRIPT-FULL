let resultat = document.getElementById("resultat-contenu");
let message = "";
// 16 21 pg 114 121;

function roueFortune() {
  let justePrix;
  const niveaux = {
    facile: Math.floor(Math.random() * 9) + 1,
    moyen: Math.floor(Math.random() * 99) + 1,
    difficile: Math.floor(Math.random() * 999) + 1,
  };
  let choixNiveaux;
  let bool = false;
  let keyNiveau;

  do {
    choixNiveaux = parseFloat(
      prompt("Choisissez votre niveau\n1 : Facile\n2 : Moyen\n3 : Difficle")
    );

    if ([1, 2, 3].includes(choixNiveaux)) {
      bool = true;
    } else {
      alert("Vous n'avez pas fait le bon choix");
    }
  } while (bool == false);

  if (choixNiveaux == "1") {
    justePrix = niveaux.facile;
    keyNiveau = "facile";
  } else if (choixNiveaux == "2") {
    justePrix = niveaux.moyen;
    keyNiveau = "moyen";
  } else if (choixNiveaux == "3") {
    justePrix = niveaux.difficile;
    keyNiveau = "difficile";
  }

  let proposition = parseFloat(
    prompt(`${keyNiveau} \nQuelle est votre proposition : `)
  );

  let mesProp = [];
  let list = "";
  let count = 0;

  do {
    count -= -1;
    mesProp.push(proposition);
    list = mesProp.toString();
    if (proposition < justePrix) {
      proposition = parseFloat(
        prompt(
          `${keyNiveau} \n\n${list}\nC'est PLUS \n${count} / 10 essai${
            count > 1 ? "s" : ""
          }\n\nQuelle est votre proposition : `
        )
      );
    } else if (proposition > justePrix) {
      proposition = parseInt(
        prompt(
          `${keyNiveau} \n\n${list}\nC'est MOINS \n${count} / 10 essai${
            count > 1 ? "s" : ""
          }\n\nQuelle est votre proposition : `
        )
      );
    }
  } while (proposition != justePrix && count < 10);

  if (count < 10) {
    resultat.innerText = `🎊✨🎊✨Vous avez gagnez !!!🎊✨🎊✨ \nLe juste prix est ${proposition}€ 🎉🎁🎉`;
  } else {
    resultat.innerText = `😓 😓 Essayez une autre fois 😔`;
  }
}

let jouer = false;
function leJustePrix() {
  jouer = confirm("Voulez vous jouer au juste prix ? ");

  while (jouer != false) {
    roueFortune();
    jouer = false;
  }
}
