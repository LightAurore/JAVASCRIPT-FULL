"use strict";

// https://www.youtube.com/watch?v=PtiOViF7rwI

const { readFileSync, writeFileSync } = require("fs");

// const jsonToObject = JSON.parse(
//   readFileSync("./public/db/books.json", "utf-8")
// );
const { auteur, titre, envente } = JSON.parse(
  readFileSync("./public/db/books.json", "utf-8") // un chemin
);

// console.log(jsonToObject.auteur);
/* console.log(auteur);
console.log(titre);
console.log(envente); */

const myData = {
  name: "justine",
  age: 25,
  legal: true,
};

const objToJson = JSON.stringify(myData);
// console.log(objToJson);

writeFileSync("./public/db/myData.json", objToJson); // un objet

/*  _______________________________________________________________________   */

const mesDonnees = JSON.parse(readFileSync("./public/db/myData.json", "utf-8"));
console.log(mesDonnees.name);

mesDonnees.name = "Lycurgue";
const objToJson1 = JSON.stringify(mesDonnees);
// console.log(objToJson);

writeFileSync("./public/db/myData.json", objToJson1); // un objet