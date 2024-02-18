'use strict';
require('dotenv').config(); // « DotEnv » doit toujours être le premier import !!!

// Imports
const express = require('express');
const loggerMiddleware = require('./middlewares/logger.middleware');
const routes = require('./routes');

// Création du serveur Web
const app = express();

// Configuration du moteur de vue
app.set('view engine', 'ejs');      // Ne pas oublier d'installer le moteur de vue
app.set('views', './views');        // Optionnel (Par default : "./views")

// Middlewares
// - Logger (Trace de le temps de traitement des requetes)
app.use(loggerMiddleware);
// - Gestion des données de formulaire (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Routing
app.use(routes);

// Démarrage du serveur
const {NODE_ENV, PORT} = process.env;

app.listen(8080, () => {
    console.log(`Web Server running on port ${PORT} (${NODE_ENV})`);
})