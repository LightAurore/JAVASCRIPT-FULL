"use strict"

// imports
const express = require("express"), app = express({override: true});
require('express-async-errors');
const connectDb = require('./models');
const morgan = require("morgan");
const renderSessionMiddleware = require("./middlewares/render-session.middleware");
const loggerMiddleware = require("./middlewares/logger.middleware");
const session = require("express-session");
const routes = require("./routes");

require("dotenv").config();
// Variables d'environnement
const {NODE_ENV, PORT, SESSION_SECRET} = process.env;



// variables


// Configuration du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views');

// Gestion du dossier public
// → Possibilité d'ajouter un prefix de route
app.use('/files', express.static('./public'));

// Middlewares
// - Logger (Trace de le temps de traitement des requetes)
app.use(loggerMiddleware);
//   Logger : https://github.com/expressjs/morgan?tab=readme-ov-file#write-logs-to-a-file
app.use(morgan(':method :url :status - :response-time ms'));
// - Gestion des données de formulaire (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

//   Session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET
}));
app.use(renderSessionMiddleware());

//* Injecter la session dans la variable "locals"
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

// - Routing
app.use(routes);

// Connexion à la base de donnée MongoDB
connectDb();


app.listen(PORT, ()=>{
    console.log(`The server listen as [mode: ${NODE_ENV}] on http://localhost:${PORT}`);
})