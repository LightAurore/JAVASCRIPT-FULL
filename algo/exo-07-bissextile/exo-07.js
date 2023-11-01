let resultat = document.getElementById("resultat-contenu");
let message;
// alert("Année bisextile");
function isBissextile() {
  const annee = parseInt(prompt("Donnez une année : "));
  // let annee = 1965;

  if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
    message = `${annee} est une année bissextile`;
  } else {
    message = `${annee} n'est pas une année bissextile`;
  }
  resultat.innerText = message;
}
