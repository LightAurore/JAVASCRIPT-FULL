"use strict";

// Express
const express = require("express");
const app = express();
const PORT = 5000;
/*--                --*/

//
const ejs = require("ejs");

// Setting EJS as the view engine
// Définition d'EJS comme moteur d'affichage
app.set("view engine", "ejs");

/* Data */
//Adding test data
const data = ["ada", "abba", "goodness", "david", "patrick"];
let numberOfNames = data.length;

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: err,
  });
});

//Rendering index.ejs
app.get("/", (req, res) => {
  //   res.render("pages/index"); // basique
  res.render("index", {
    name: "Alice",
    data: data,
    numberOfNames: numberOfNames,
  });
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

//Server is listening on port 5000
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
