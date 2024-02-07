"use strict";

const fs = require("fs");
// const path = require("path");
// const csv = require("fast-csv");


// const buf = Buffer.alloc(1024);

/* lire le fichier students.json  */

function lireJson() {
  fs.open("./database/students.json", "r+", function (err, fd) {
    if (err) {
      return console.error(err);
    }
    console.log("Ouverture ok!");
    console.log(fd);
    console.log("Lecture");

    let data = fs.read(fd, buf, 0, buf.length, (err, bytes) => {
      if (err) {
        console.log(err);
      }
      console.log(bytes + "→ Nombre de bytes lus");

      if (bytes > 0) {
        console.log("-");
        console.log(buf.slice(0, bytes).toString());
      }

      console.log("read is done");
    });

    console.log(data);
  });
}

// lireJson();