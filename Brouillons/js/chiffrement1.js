"use strict";

const str = "On récolte ce que l'on sème!";

const motPasse = document.getElementById("mot-passe");
const btn = document.getElementById("btn");
const afficher = document.getElementById("afficher");

function getCharValue(str) {
  const reverseStr = str.split("").reverse().join("");
  for (let i = str.length - 1; i >= 0; i--) {
    const crypt = str.charCodeAt(i);
    const car = reverseStr[i];

    reverseStr = reverseStr.replace(car, crypt);
  }
  console.log(reverseStr);
  return reverseStr;
}

getCharValue("mot");

btn.onclick = function () {
  console.log("event ok!");
  const message = motPasse.value;
  console.log(message);
  const motPasseCrytper = getCharValue(message);
  afficher.innerText = motPasseCrytper;
};
