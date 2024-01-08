"use strict";

const express = require("express");
const app = express();
const PORT = 8080;

const genererPageAccueil = require("./pages/index-get.js");

// get(path(route), callback)
app.get("/", async (req, res) => {
  const indexHtml = await genererPageAccueil();

  //   res.sendFile('c:/api/index.html')
  res.send(indexHtml);
});

//  retourner les images
//  retourner les styles
app.use(
  "/css",
  express.static(
    "C:/Users/ambas/Desktop/Brouillon01/JAVASCRIPT-FULL/node-js/css/"
  )
);
app.use(
  "/images",
  express.static(
    "C:/Users/ambas/Desktop/Brouillon01/JAVASCRIPT-FULL/node-js/images/"
  )
);

// route : /
app.get('/api/addition', (req,res) => {
    const parametres = req.query;

    res.send()
})

// start and listen(port, callback) un port
app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});
