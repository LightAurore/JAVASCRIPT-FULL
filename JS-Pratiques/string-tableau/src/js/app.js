"use strict";
// Dom elements
const userName = document.getElementById("user--name");
const btnValiderNom = document.getElementById("btn--user--name");
const nombre_inscrits = document.getElementById("nb--users");
let liste_users_inscrits = document.getElementById("users--inscrits");
const dernier_user = document.getElementById("inputs--name");

const btnFiltrerNom = document.getElementById("btn--filtrer--name");
const nombre_filtres = document.getElementById("users--filtres");
let liste_a_filtres = document.getElementById("users--filter");
let elements_filtres = document.getElementById("element-filtre");
const select_filter = document.getElementById("filtre--selecteur");
// Js elements
let liste_eleves = new Array();
let liste_eleves_ordre_entrer = new Array();

// Fonctions
function afficherUsers(Array) {
  const html_li = document.createElement("li");
  html_li.innerText = Array;
  return html_li;
}

// Fonctions avec evenement
btnValiderNom.addEventListener("click", function () {
  //   console.clear();
  liste_users_inscrits.innerHTML = "";
  nombre_inscrits.innerText = "";

  if (userName.value != "" && isNaN(userName.value)) {
    liste_eleves_ordre_entrer.push(userName.value.toLowerCase());
    liste_eleves.push(userName.value.toLowerCase());
  }
// ordre alphabetique
  // const users_alpha_order = liste_eleves.sort();
  const users_alpha_order = liste_eleves.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
  
  const theLastName =
    liste_eleves_ordre_entrer[liste_eleves_ordre_entrer.length - 1];

  dernier_user.value = theLastName;
  dernier_user.style.display = "block";

  for (let i = 0; i < users_alpha_order.length; i++) {
    let user = afficherUsers(users_alpha_order[i]);
    user.classList.add("ma-liste");
    liste_users_inscrits.append(user);
  }

  if (liste_eleves.length > 0) {
    //   users_inscrits
    nombre_inscrits.classList.add("nbr-inscrits");
    nombre_inscrits.innerText = `Nous avons ${liste_eleves.length} stagiaire${
      liste_eleves_ordre_entrer.length > 1 ? "s" : ""
    } inscrit${liste_eleves_ordre_entrer.length > 1 ? "s" : ""}.`;
  }

  userName.value = "";
});

// Filtrer
// Fonctions avec evenement
btnFiltrerNom.addEventListener("click", function () {
  let ma_liste_filtree;
  let nb_filtre = 0;
  liste_a_filtres.innerHTML = "";
  nombre_filtres.innerText = "";

  let op = document.getElementById("filtre--selecteur");

  for (let i = 0; i < liste_eleves_ordre_entrer.length; i++) {
    if (
      liste_eleves_ordre_entrer[i].length > elements_filtres.value &&
      op.value == ">"
    ) {
      let user = afficherUsers(liste_eleves_ordre_entrer[i]);
      liste_a_filtres.append(user);
      user.classList.add("ma-liste");
      nb_filtre -= -1;
    } else if (
      liste_eleves_ordre_entrer[i].length < elements_filtres.value &&
      op.value == "<"
    ) {
      let user = afficherUsers(liste_eleves_ordre_entrer[i]);
      liste_a_filtres.append(user);
      user.classList.add("ma-liste");
      nb_filtre -= -1;
    } else if (
      liste_eleves_ordre_entrer[i].length == elements_filtres.value &&
      op.value == "=="
    ) {
      let user = afficherUsers(liste_eleves_ordre_entrer[i]);
      liste_a_filtres.append(user);
      user.classList.add("ma-liste");
      nb_filtre -= -1;
    }
  }

  if (liste_eleves_ordre_entrer.length > 0) {
    //   users_inscrits
    nombre_filtres.classList.add("nbr-inscrits");
    nombre_filtres.innerText = `${nb_filtre} stagiaire${
      nb_filtre > 1 ? "s" : ""
    } trouvé${nb_filtre > 1 ? "s" : ""}.`;
  }
});


function caracterePresent(){
  let user_join = liste_eleves_ordre_entrer.join("");
  console.log(user_join);

  let nb_char_array = new Array();
  for (let i = 0; i < user_join.length; i++) {
    user_join.forEach((car) =>{
      user_join[i]
    } )
    
  }

}

caracterePresent();