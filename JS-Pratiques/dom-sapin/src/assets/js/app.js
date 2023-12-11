'use strict'

const feuillage = "🌿✨❄🍀🌟";
const tronc = "<pre>tronc🎋#</pre>";

const sapin = document.getElementById('sapin--container');

let hauteur_sapin = 8;


for (let i = 1; i <= (hauteur_sapin); i++) {
  const html_sapin = document.createElement('pre');
  // let branche = " ❄".repeat((hauteur_sapin % 2) ?((hauteur_sapin ) - (hauteur_sapin / 2) + i ): ((hauteur_sapin - 1) / 2)) + "🌿".repeat(i);
  let branche = " ".repeat(hauteur_sapin -i ) + "🌿".repeat(i);
  html_sapin.innerText += `${branche}`
  sapin.appendChild(html_sapin);
}
sapin.innerHTML += tronc;


// const html_sapin = document.createElement('pre');
// for (let i = 1; i <= hauteur_sapin; i++) {
//   let branche = '🌿';

//   for (let j = 0; j < hauteur_sapin-i; j++) {
//   }
//   html_sapin.innerText;
  
// }



