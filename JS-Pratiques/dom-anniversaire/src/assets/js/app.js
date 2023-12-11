"use strict";

const jour = document.getElementById("jour");
const mois = document.getElementById("mois");
const annee = document.getElementById("annee");

const btn_date_annif = document.getElementById("btn--date__annif");

const afficher_age = document.getElementById("date__anniversaire");
const trois_prochains_anniversaires = document.getElementById(
  "trois--prochains__anniversaires"
);

btn_date_annif.addEventListener("click", function () {
  const aujourdhui = new Date();

  const anniversaire = new Date(annee.value, mois.value - 1, jour.value);

  let age_utilisateur;

  trois_prochains_anniversaires.innerText = '';
  afficher_age.innerText = "";

  if (annee.value <= aujourdhui.getFullYear()) {
    age_utilisateur = aujourdhui.getFullYear() - anniversaire.getFullYear();

    if (aujourdhui.getMonth() > anniversaire.getMonth()) {
      age_utilisateur -= 1;
    } else if (aujourdhui.getMonth() == anniversaire.getMonth()) {
      
      if (aujourdhui.getDate() == anniversaire.getDate()) {
        afficher_age.innerText = `Vous avez ${age_utilisateur} ans aujourd'hui, \n Joyeux anniversaire Myster Totot`;

      } else if (aujourdhui.getDate() < anniversaire.getDate()) {
        age_utilisateur -= 1;
      }
    }
    // 
    if (aujourdhui.getDate() == anniversaire.getDate() && (aujourdhui.getMonth() == anniversaire.getMonth())) {
      afficher_age.innerText = `Vous avez ${age_utilisateur} ans aujourd'hui, \n Joyeux anniversaire Myster Totot`;
    } else{
      afficher_age.innerText = `Vous avez ${age_utilisateur} ans aujourd'hui!`;
    }

    // 
    let html_h3 = document.createElement('h3');
    html_h3.innerText = `Les dates de nos trois prochaines anniversaires`;
    for (let i = 1; i <= 3; i++) {
      let prochaines_date = new Date((aujourdhui.getFullYear()+ i), anniversaire.getMonth(), anniversaire.getDate())
      let html_li = document.createElement('li');
      html_li.innerText = `${prochaines_date.toLocaleString('fr-be',{
        year:'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      })}`;
      trois_prochains_anniversaires.appendChild(html_li);
    }
   
  } else {
    age_utilisateur = `un tétard`;
  }

});
