function addition(a, b) {
  return a + b;
}

console.log(addition(10, 3));

const modulo5 = (a) => a % 5;

console.log(modulo5(4567));

const tab = [1, 2, 3, 4, 5, 6];

const tabCarre = tab.map((nbr) => nbr * nbr);

console.log(tabCarre);

const tabCarre2 = tab.map(function (nbr) {
  return nbr * nbr * nbr;
});

console.log(tabCarre2);

let count = 0;

function compteur() {
  for (let i = 0; i < 10; i++) {
    if (count == 5) return;
    count -= -1;
    console.log(count);
  }
  console.log("Dans la fonction");
}

compteur();

function verite(bool) {
  if (bool) {
    console.log("True");
    return;
  } else {
    console.log("False");
  }
}

verite(!true);
verite(true);

function passeSanitaire(vaccin) {
  if (vaccin == "oui") {
    console.log("Pars en vacance");
    return;
  } else {
    console.log("Désolé confiné");
  }
}

passeSanitaire("non");
