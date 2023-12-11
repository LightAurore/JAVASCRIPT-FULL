"use strict";

//table de multiplication

let multiplicande = document.getElementById("multiplicande");
let multiplicateur = document.getElementById("multiplicateur");
let btn_multiplier = document.getElementById("multiplier");

let resultat = document.getElementById("table");
let detail_table = document.getElementById("table-details");

multiplier.addEventListener("click", function () {
  resultat.innerText = "";
  resultat.classList.remove("table");

  let term_1 = parseInt(multiplicande.value);

  // const term_2 = multiplicateur.value == "" ? 10 : multiplicateur.value;
  // const term_2 = multiplicateur.value == ""? 10 : multiplicateur.value;
  // const term_2 = multiplicateur.value ?? "" ? 10 : multiplicateur.value;
  // const term_2 = (multiplicateur ?. multiplicateur.value) == "" ? 10 : multiplicateur.value ?? "";
  const term_2 = isNaN(multiplicateur.value)
    ? multiplicateur.value
    : multiplicateur.value !== ""
    ? multiplicateur.value
    : 10;
  if (Number.isInteger(term_1) && !isNaN(multiplicateur.value) ){
    detail_table.innerText = `Voici la table de ${term_1} par ${term_2} !`;
    detail_table.classList.add("table-de");
  } else {
    detail_table.classList.remove("table-de");
    detail_table.innerText = "";
  }
  if (!isNaN(multiplicateur.value)) {
    for (let i = 0; i < term_1; ++i) {
      let html_li = document.createElement("li");
      let html_span_multiplicande = document.createElement("span");
      let html_span_op = document.createElement("span");
      let html_span_multiplicateur = document.createElement("span");
      let html_span_egal = document.createElement("span");
      let html_span_resultat = document.createElement("span");

      html_span_multiplicande.innerText = i + 1;
      html_span_op.innerText = " x ";
      html_span_multiplicateur.innerText = term_2;
      html_span_egal.innerText = " = ";
      html_span_resultat.innerText = (i + 1) * term_2;

      html_li.appendChild(html_span_multiplicande);
      html_li.appendChild(html_span_op);
      html_li.appendChild(html_span_multiplicateur);
      html_li.appendChild(html_span_egal);
      html_li.appendChild(html_span_resultat);

      resultat.appendChild(html_li);
      resultat.classList.add("table");
    }
  }

  multiplicande.value = "";
  multiplicateur.value = "";
});
