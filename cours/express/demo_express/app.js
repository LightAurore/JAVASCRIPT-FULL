const { PORT } = process.env;

// Pour récupérer express de la lib
const express = require("express");

// Création du serveur express
const app = express();

//------ Middleware : App-Lvl --------
// Un middleware app lvl va intercepter toutes les requêtes qui passent
const applvlMiddleware = require("./src/middlewares/applvl.middleware");
app.use(applvlMiddleware);

// Exemple utilisation middleware intégré express
const morgan = require("morgan");
app.use(morgan('tiny'));
//------ Fin Middleware --------------

//----- Routing -----
// Pour charger nos routes
const routes = require("./src/routes"); //Comme je n'ai pas précisé de nom de fichier, il va chercher un index.js
const errorHandlerMiddleware = require("./src/middlewares/errorhandler.middleware");


// Pour les utiliser
app.use("/", routes);
//----- fin Routing -----

// ErrorHandler - Middleware
//! Toujours le mettre à la fin (après les routes mais avant le lancement du serveur)
app.use(errorHandlerMiddleware);

//


// Lancement du serveur express
app.listen( PORT , () => {
    console.warn("Serveur Express started on Port "+ PORT);
})