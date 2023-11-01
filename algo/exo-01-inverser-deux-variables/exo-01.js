let resultat = document.getElementById("resultat-contenu");
let message = "";

let nb1 = 5;
let nb2 = 7;

// console.log(`Avant l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);

// Méthode n° 1
const methode1 = () => {
  let temp = nb1;
  nb1 = nb2;
  nb2 = temp;

  console.log(`Après l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);
};

// methode1();

// Méthode n° 2
const methode2 = () => {
  nb1 = nb2 + nb1;
  nb2 = nb1 - nb2;
  nb1 -= nb2;

  console.log(`Après l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);
};
// methode2();

// Méthode n° 3
const methode3 = () => {
  nb1 = nb2 * nb1;
  nb2 = nb1 / nb2;
  nb1 /= nb2;

  console.log(`Après l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);
};
// methode3();

// Méthode n° 4
const methode4 = () => {
  nb1 ? nb2 : nb1;
  nb2 ? nb1 : nb2;

  console.log(`Après l'inversion nb1 = ${nb1} et nb2 = ${nb2}`);
};
// methode4();

// Méthode n° 5
function inverser() {
  let nbA = parseInt(prompt("Entrez le premier nombre :"));
  let nbB = parseInt(prompt("Entrez le second nombre :"));

  resultat.innerHTML += `Avant l'inversion nb1 = ${nbA} et nb2 = ${nbB} </br></br>`;
  const methode5 = () => {
    nbA = nbB + nbA;
    nbB = nbA - nbB;
    nbA = nbA - nbB;

    return `Après l'inversion nb1 = ${nbA} et nb2 = ${nbB}`;
  };
  resultat.innerHTML += methode5();
}
