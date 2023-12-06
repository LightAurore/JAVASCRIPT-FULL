// Exo 18 : Générateur de calcul

// Créez une application qui permet à un étudiant de s'exercer en Math.
// Créez un tableau de calculs (nombre aléatoire de 0 à 10 et opérateurs aléatoires)
// selon le nombre indiqué par l'utilisteur au début du chargement de la page.

const MAX = 100;
const MAX_op = 6;
const MIN_op = 1;

const tbody = document.getElementById("table_alea");

let nombre = parseInt(prompt("Entrez un nombre :"));
while (isNaN(nombre)) {
  nombre = parseInt(prompt("Entrez un nombre :"));
}
while (nombre > 0) {
  let nb_alea_1 = Math.round(Math.random() * MAX);
  let nb_alea_2 = Math.round(Math.random() * MAX);
  let op_alea = Math.round(Math.random() * (MAX_op - MIN_op)) + MIN_op;

  nombre--;
  let resultat = 0;

  console.log(op_alea);

  switch (op_alea) {
    case 1:
      op_alea = "/";
      resultat = nb_alea_1 / nb_alea_2;
      break;
    case 2:
      op_alea = "*";
      resultat = nb_alea_1 * nb_alea_2;
      break;
    case 3:
      op_alea = "-";
      resultat = nb_alea_1 - nb_alea_2;
      break;
    case 4:
      op_alea = "+";
      resultat = nb_alea_1 + nb_alea_2;
      break;
    case 5:
      op_alea = "%";
      resultat = nb_alea_1 % nb_alea_2;
      break;
    case 6:
      op_alea = "^";
      resultat = Math.pow(nb_alea_1, nb_alea_2);
      break;
    default:
      alert("error");
      break;
  }

  const tr = document.createElement("tr");
  const td = document.createElement("td");
  if (nb_alea_2 == 0 && (op_alea == "/" || op_alea == "%")) {
    td.innerText = `${nb_alea_1} ${op_alea} ${nb_alea_2} est Error `;
  } else {
    td.innerText = `${nb_alea_1} ${op_alea} ${nb_alea_2} = ${resultat}`;
  }
  tr.appendChild(td);
  tbody.appendChild(tr);
}
