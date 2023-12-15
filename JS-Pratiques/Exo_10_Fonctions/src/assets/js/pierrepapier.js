"use strict";

// DOM
const player_choice = document.getElementById("use-choice");
const choose = player_choice.querySelectorAll("button");
const choosePC = document.getElementById("computer-choice");
const result = document.getElementById("resultat");
const jouer = document.getElementById("jouer");
const scoreplayer = document.getElementById("score-player");
const scoreComputer = document.getElementById("score-computer");
// stat
let statPlayer = document.getElementById("user--stat");
let statPc = document.getElementById("pc--stat");

//
const computer_choice = ["pierre", "feuille", "ciseaux"];
let score_computer = 0;
let score_player = 0;
const scores = new Map();
let i = 1;
let playerStat = 0;
let pcStat = 0;

// Le joeur selectionne une des trois images.
choose.forEach((bouton) => {
  bouton.classList.add("blured");
  bouton.addEventListener("click", function () {
    bouton.classList.remove("blured");

    // On génère un nombre aléatoire
    let alea = Math.floor(Math.random() * 3);

    let computer = computer_choice[alea];
    let player = bouton.value;

    // images computer
    choosePC.innerHTML = `<img src="./ressources/images/${computer}.PNG"/>`;

    if (player == computer) {
      result.innerText = `${player} égale ${computer}, ressayez !`;
    } else if (
      (player == "pierre" && computer == "ciseaux") ||
      (player == "feuille" && computer == "pierre") ||
      (player == "ciseaux" && computer == "feuille")
    ) {
      score_player -= -1;
      result.innerText = `${score_player} contre ${score_computer}`;
    } else {
      score_computer -= -1;
      result.innerText = `${score_player} contre ${score_computer}`;
    }

    scoreComputer.innerText = score_computer;
    scoreplayer.innerText = score_player;
    if (
      (score_player + score_computer) % 3 == 0 &&
      score_player + score_computer > 1
    ) {
      choose.forEach((bouton) => {
        bouton.disabled = true;
        if (score_player > score_computer) {
          result.innerText = `Vous avez gagné de ${score_player} contre ${score_computer}`;
        } else {
          result.innerText = `Vous avez perdu de ${score_player} contre ${score_computer}`;
        }
      });
      scores.set("partie" + i, [score_player, score_computer]);

      playerStat += scores.get(`partie${i}`)[0] > 1 ? 1 : 0;
      pcStat += scores.get(`partie${i}`)[1] > 1 ? 1 : 0;
      i += 1;

      console.log(playerStat, pcStat);
      console.log(statPc, statPlayer);
      statPlayer.innerText = playerStat;
      statPc.innerText = pcStat;
      // LocaleStorage
      // localStorage.setItem('save', JSON.stringify(Array.from(scores).map(entry => ({ numero : entry[0] , resultat : entry[1]}))));
      localStorage.setItem("save", JSON.stringify(Object.fromEntries(scores)));
      localStorage.setItem("iteration", i);
      localStorage.setItem("statistiqueUser", playerStat);
      localStorage.setItem("statistiquePc", pcStat);
    }
  });
  setInterval(() => {
    choose.forEach((bouton) => {
      bouton.classList.add("blured");
    });
  }, 2500);
});

// Lancer le jeu
jouer.addEventListener("click", () => {
  choose.forEach((bouton) => {
    bouton.disabled = false;
    score_player = 0;
    score_computer = 0;
    scoreComputer.innerText = score_computer;
    scoreplayer.innerText = score_player;
    choosePC.innerHTML = `<img src="./ressources/images/chifomi.png"/>`;
    result.innerText = `Jouer`;
    choose.forEach((bouton) => {
      bouton.classList.add("blured");
    });
  });
});

window.onload = () => {
  let anciens_scores = localStorage.getItem("save");
  let table_scores = JSON.parse(anciens_scores);
  let iterator = localStorage.getItem("iteration");
  let sc_user = localStorage.getItem("statistiqueUser");
  let sc_pc = localStorage.getItem("statistiquePc");

  scores.set(table_scores);

  i = Number(iterator);

  for (const [key, val] of Object.entries(table_scores)) {
    scores.set(`${key}`, [val[0], val[1]]);
  }
  playerStat = Number(sc_user);
  pcStat = Number(sc_pc);

  statPlayer.innerText = playerStat;
  statPc.innerText = pcStat;
};
