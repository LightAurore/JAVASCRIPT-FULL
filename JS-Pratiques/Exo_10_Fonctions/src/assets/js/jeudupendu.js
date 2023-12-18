"use strict";
import { listeDeMots, draw } from "./db.js";
// import * as Module from "./db.js";

// DOM
let startToPlay = document.getElementById("jouer");
let stopPlaying = document.getElementById("stop");
let lettres_container = document.getElementById("lettres-du-mot");
let lettreProposition = document.getElementById("lettre-proposition");

// pendu
const tete = document.getElementById("tete");
const tronc = document.getElementById("tronc");
const bras_gauche = document.getElementById("bras-gauche");
const bras_droit = document.getElementById("bras-droit");
const jambe_droite = document.getElementById("jambe-droite");
const jambe_gauche = document.getElementById("jambe-gauche");

// Mes constatnte
const MAX = listeDeMots.length;
const MIN = 1;

// Variables globales
let aleaIndex;
let mot_a_trouver;
let nbr_erreur = 0;
let array = new Array();
let arrayProps = new Array();
let motArray;
let saveLetters = "";

//  Jeu du pendu

/*   Initialisation :    */
/**
 * @param
 *
 */
function initialisation() {
  // images du pendu, cachée
  tete.style.visibility = "hidden";
  tronc.style.visibility = "hidden";
  bras_gauche.style.visibility = "hidden";
  bras_droit.style.visibility = "hidden";
  jambe_droite.style.visibility = "hidden";
  jambe_gauche.style.visibility = "hidden";

  // Dom
  lettreProposition.disabled = false;
  lettres_container.innerHTML = "";

  // var globales
  mot_a_trouver = "";
  nbr_erreur = 0;
  array = [];
  arrayProps = [];
  saveLetters = "";
  motArray = "";
}

//  Le programme selectionne un mot aléatoirement dans une liste de mots
startToPlay.addEventListener("click", function () {
  console.clear();
  initialisation();

  // mot à trouver généré
  aleaIndex = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  mot_a_trouver = listeDeMots[aleaIndex];
  console.log("ton mot est là : " + mot_a_trouver);

  // case à remplir
  for (let i = 0; i < mot_a_trouver.length; i++) {
    const html_span = document.createElement("span");
    html_span.innerText = "_";
    // html_span.innerText = mot_a_trouver[i];
    html_span.classList.add("letter");
    lettres_container.append(html_span);
  }
});

// Arret du jeu
stopPlaying.addEventListener("click", () => {
  let stop = confirm("Voulez vous arrêter de jouer ?");
  if (stop) {
    startToPlay.disabled = true;
    lettreProposition.disabled = true;
    lettres_container.innerHTML = "";
  }
});

//  Grâce à un input et un button, le joueur peut proposer une lettre

lettreProposition.addEventListener("change", function () {
  arrayProps.push(lettreProposition.value);

  let proposition = mot_a_trouver
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (proposition.includes(lettreProposition.value)) {
    let result = proposition.split("");
    let i = 0;

    result.forEach((char) => {
      if (!proposition.includes(char)) {
        if (char == lettreProposition.value) {
          const target = lettres_container.querySelectorAll("span")[i];
          target.innerText = mot_a_trouver[i];
          array[i] = mot_a_trouver[i];
          saveLetters = array.join("");
          if (saveLetters == mot_a_trouver) {
            alert("mot trouver");
            startToPlay.disabled = true;
            lettreProposition.disabled = true;
          }
        }
        i -= -1;
      } else {
        alert("lettre déjà présente");
      }
    });

    console.log(result === mot_a_trouver);
  } else {
    if (motArray.includes(lettreProposition.value)) {
      alert("lettre déjà proposée");
    } else {
      nbr_erreur -= -1;
      motArray = arrayProps.join("");
    }
    /* --------------------------------------- */
    // pendu, ajouter les parties
    if (nbr_erreur == 1) {
      tete.classList.add("partie-display");
    } else if (nbr_erreur == 2) {
      tronc.classList.add("partie-display");
    } else if (nbr_erreur == 3) {
      bras_gauche.classList.add("partie-display");
    } else if (nbr_erreur == 4) {
      bras_droit.classList.add("partie-display");
    } else if (nbr_erreur == 5) {
      jambe_gauche.classList.add("partie-display");
    } else if (nbr_erreur == 6) {
      jambe_droite.classList.add("partie-display");
    }

    /* nombre d'erreur */
    if (nbr_erreur >= 6) {
      startToPlay.disabled = true;
      lettreProposition.disabled = true;
      alert("Pendu, vous avez perdu !");
    }
  }
  console.log("mon array", arrayProps);
  lettreProposition.value = "";
});
//  Si la lettre est dans le mot, on la dévoile (mise à jour de l'affichage du mot)
//  Si la lettre n'est pas dans le mot, une erreur est comptée (le pendu s'affiche de plus en plus pendu)
//  Si la lettre a déjà été proposée (on est gentils), on indique à l'utilisateur que c'est le cas et on ne compte pas d'erreur
//  On veut pouvoir voir la liste des lettres déjà proposées

//  ** Bonus : Pouvoir faire plusieurs parties (compter les victoires et les défaites), pouvoir revenir au menu à tout instant (défaite), après avoir fait une partie, le mot est dégagé de la liste de mots
