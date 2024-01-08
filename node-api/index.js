"use strict";

const express = require("express");
const app = express();
const port = 8080;

// app.METHOD(PATH, HANDLER)
app.use(express.static("public")); // relative path of client-side code
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root: __dirname });
});
app.get("/gallerie", (req, res) => {
  res.sendFile("gallerie.html", { root: __dirname });
});
app.get("/faq", (req, res) => {
  res.sendFile("faq.html", { root: __dirname });
});

// créer des routes  calculer le total d'une addition
// Route: api/addition?valeur1=terme
app.get("/js/addition", (req, res) => {
  // récupérer les paramètres de l'addresse
  const parametres = req.query;
  // récupérer le paramètre 'termes'
  const termes = parametres.termes;

  if (termes == null) {
    res.sendStatus(400);
    return;
  }

  const total = termes
    .split(",")
    .map((elt) => Number.parseFloat(elt))
    .filter((elet) => Number.isNaN(elet) === false)
    .reduce((acc, elem) => acc + elem, 0);

  const totalTexte = total.toString();

  res.send(totalTexte);
});

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
// Créer une route POST /api/addition
app.post("/js/addition", jsonParser, (req, res) => {
  // récupérer le de la requête
  const contenu = req.body;
  // récupérer le paramètre 'termes'
  const termes = contenu.termes;

  if (termes == null) {
    res.sendStatus(400);
    return;
  }

  const total = termes
    .map((elt) => Number.parseFloat(elt))
    .filter((elet) => Number.isNaN(elet) === false)
    .reduce((acc, elem) => acc + elem, 0);

  res.send({ resultat: total });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
