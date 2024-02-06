"use strict";
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");

let tbData = [];
let donnees;

/* lire le fichier .csv  */
async function getJson() {
  fs.createReadStream(path.resolve(__dirname, "assets", "list.csv"))
    .pipe(csv.parse({ headers: true }))
    .on("error", (error) => console.error(error))
    .on("data", (row) => {
      // console.log(typeof row);
      tbData.push(row);
      // console.log(tbData);
    })
    .on("end", (rowCount) => {
      for (let i = 0; i < tbData.length; i++) {
        console.log(`${tbData[i].Section} ${tbData[i].Moyenne}`);
      }
      // console.log(tbData.Section);
      console.log(`Parsed ${rowCount} rows`);
    });
}

getJson();
