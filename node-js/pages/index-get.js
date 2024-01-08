"use strict";
/* eslint-env node, es6 */

const { readFile, readFileSync } = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(readFile);
const READ_OPTIONS = { encoding: "utf-8" };
const INDEX_URL =
  "C:/Users/ambas/Desktop/Brouillon01/JAVASCRIPT-FULL/node-js/index.html";

module.exports = async () => {
  //Opération
  // Récupérer le contenu du fichier html index.html
  const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS);

  // Retourner la page HTML
  return contenu;
};
