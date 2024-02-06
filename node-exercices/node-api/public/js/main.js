'use strict'

// DOM
const valeurTerme = document.getElementById('valeur-terme');
const btn_termes = document.getElementById('btn-termes');

// function





let nb1;
btn_termes.addEventListener('click', () => {

})



do {
  nb1 = parseFloat(valeurTerme.value);
} while (isNaN(nb1));

let operator;
do {
  operator = prompt("Veuillez choisir un opérateur entre + , - , / , * et = :");
} while (
  operator != "+" &&
  operator != "-" &&
  operator != "*" &&
  operator != "/" &&
  operator != "="
);

let message = `${nb1} ${operator} `;
let divideByZero = false;

while (operator != "=" && !divideByZero) {
  let nb2;
  do {
    nb2 = parseFloat(prompt("Et insérer le dernier nombre :"));
  } while (isNaN(nb2));

  const additionner = async () => {
    let data = await fetch(`/js/addition?termes=${nb1},${nb2}`);

    let resp = await data.text();

    console.log(resp);

    return +resp;
  };

  const additionnerPost = async () => {
    let data = await fetch(`/js/addition`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        termes: [nb1, nb2],
      }),
    });

    let resp = await data.json();

    let ojb = resp.resultat;
    return total;
  };

  switch (operator) {
    case "+":
      nb1 = additionnerPost();
      /* 
      fetch(`/js/addition`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          termes: [nb1, nb2],
        }),
      })
        .then((resp) => data.json())
        .then((ojb) => ojb.resultat);
       */
      break;
    case "-":
      nb1 = nb1 - nb2;
      break;
    case "*":
      nb1 = nb1 * nb2;
      break;
    case "/":
      if (nb2 != 0) nb1 = nb1 / nb2;
      else divideByZero = true;
      break;
  }

  if (!divideByZero) {
    do {
      operator = prompt(
        "Veuillez choisir un opérateur entre + , - , / , * et = :"
      );
    } while (
      operator != "+" &&
      operator != "-" &&
      operator != "*" &&
      operator != "/" &&
      operator != "="
    );
    message = `${message}${nb2} ${operator} `;
  } else {
    message = "La division par 0 tend vers l'infini et au delà!";
  }
}
if (!divideByZero) alert(`${message}${nb1}`);
else alert(message);
