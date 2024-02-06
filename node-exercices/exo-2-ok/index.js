"use strict";

const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");

// csv format
const csvStream = csv.format({ headers: true });
var writableStream = fs.createWriteStream("./assets/list.csv");

// tools
let resultat = require("./tools/resultats.tool");

/* lire le fichier students.json  */
function getJson() {
  const bytes = fs.readFileSync("./database/students.json");

  const data = bytes.toString();
  //   console.log(data);

  let resp = JSON.parse(data);
  writableStream.on("finish", function () {
    console.log("DONE!");
  });

  csvStream.pipe(writableStream);

  console.log("*-------section----------*");
  for (let i = 0; i < resp.results.length; i++) {
    // console.log(resp.results[i].section.code);
    resultat.getTeachers(resp.results[i].professor);
    resultat.getStudents(resp.results[i].students);
    console.log(resultat.getAverage(resp.results[i].students));

    // Ecrire un fichier csv
    csvStream.write({
      Section: resp.results[i].section.code,
      Moyenne: resultat.getAverage(resp.results[i].students),
    });
  }

  console.log("*-----------------------*");
  for (let i = 0; i < resp.results.length; i++) {
    console.log(resp.results[i]);
  }

  csvStream.end();
}

getJson();



