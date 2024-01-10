"use strict";

// https://www.youtube.com/watch?v=LUGdP0xr3cI

const { readFileSync, writeFileSync } = require("fs");

const newData = {
  name: "justine",
  age: 25,
  legal: true,
};

const objToJson = JSON.stringify(newData);

writeFileSync("./public/db/myDataa.json", objToJson); // un objet

/*  _______________________________________________________________________   */

const mesDonnees = JSON.parse(
  readFileSync("./public/db/myDataa.json", "utf-8")
);
console.log(mesDonnees.name);

mesDonnees.name = "Lycurgue";

const objToJson1 = JSON.stringify(mesDonnees);
// console.log(objToJson);

writeFileSync("./public/db/myData.json", objToJson1); // un objet

debugger; // pour debugguer mot clé  ->
console.log(mesDonnees.name);
