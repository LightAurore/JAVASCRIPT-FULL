"use strict";
import { listeDeMots, draw } from "./db.js";
// import * as Module from "./db.js";

// DOM
let startToPlay = document.getElementById("jouer");
let stopPlaying = document.getElementById("stop");
let motContainer = document.getElementById("mot-a-trouver");
let lettreProposition = document.getElementById("lettre-proposition");

// Mes constatnte
const MAX = listeDeMots.length;
const MIN = 1;

// Variables globales
let aleaIndex;
let mot_a_trouver;

// 2) Jeu du pendu
// * Attentes fonctionnalités :
//  <img src="./exemplePendu.PNG">
/*   Instructions :    */

//  Le programme selectionne un mot aléatoirement dans une liste de mots
startToPlay.addEventListener("click", function () {
  console.clear();
  motContainer.innerHTML = "";
  aleaIndex = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  mot_a_trouver = listeDeMots[aleaIndex];
  console.log("ton mot est là : " + mot_a_trouver);
  for (let i = 0; i < mot_a_trouver.length; i++) {
    const html_span = document.createElement("span");
    html_span.innerText = "_";
    // html_span.innerText = mot_a_trouver[i];
    html_span.classList.add("letter");
    motContainer.append(html_span);
  }
});

stopPlaying.addEventListener("click", () => {
  startToPlay.disabled = true;
});

//  Grâce à un input et un button, le joueur peut proposer une lettre
let array = new Array();
lettreProposition.addEventListener("change", function () {
  //   console.log(mot_a_trouver.includes(lettreProposition.value));

  if (mot_a_trouver.includes(lettreProposition.value)) {
    let result = mot_a_trouver.split("");
    let i = 0;
    result.forEach((char) => {
      if (char == lettreProposition.value) {
        // console.log(char);
        // const nieme_letter = result.indexOf(char);

        console.log(i);
        const target = motContainer.querySelectorAll("span")[i];
        target.innerText = mot_a_trouver[i];
        array[i] = mot_a_trouver[i];
        console.log(result === array);
      }
      i -= -1;
    });
    console.log(result === mot_a_trouver);
  }

  lettreProposition.value = "";
});
//  Si la lettre est dans le mot, on la dévoile (mise à jour de l'affichage du mot)
//  Si la lettre n'est pas dans le mot, une erreur est comptée (le pendu s'affiche de plus en plus pendu)
//  Si la lettre a déjà été proposée (on est gentils), on indique à l'utilisateur que c'est le cas et on ne compte pas d'erreur
//  On veut pouvoir voir la liste des lettres déjà proposées

//  ** Bonus : Pouvoir faire plusieurs parties (compter les victoires et les défaites), pouvoir revenir au menu à tout instant (défaite), après avoir fait une partie, le mot est dégagé de la liste de mots
