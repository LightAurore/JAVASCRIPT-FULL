"use strict";

const readline = require("readline/promises");

const MY_PORT = process.env.PORT;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// console.log(process.env);

async function lireConsole() {
  // on peut mettre aussi une page comme flux d'entrée ou de sortie
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const user = await rl.question("Entrez votre identifiant : ");
  console.log(user);

  await rl.close();
}

lireConsole();
