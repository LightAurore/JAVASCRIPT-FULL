require('dotenv').config({override: true});

// Imports
const express = require('express');
const chalk = require('chalk');
require('express-async-errors');
const morgan = require('morgan');
const session = require('express-session');
const connectToDb = require('./models');
const homeRouter = require('./routes/home.router');
const articleRouter = require('./routes/article.router');
const memberRouter = require('./routes/member.router');


// Récupérer des variables d' "env"
const { NODE_ENV, PORT, SESSION_SECRET } = process.env;

// Initialize web server
const app = express();

// - Configure view engine
app.set('view engine', 'ejs');
app.set('views','./views');

// - Middlewares
//*  Logger
app.use(morgan('tiny'));
//*  Fichier public
app.use(express.static('./public'));
//*  Données des formulaires
app.use(express.urlencoded({ extended: true }));
//*  Session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET
}));
//* Injecter la session dans la variable "locals"
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

// - Routing
app.use(homeRouter);
app.use(articleRouter);
app.use(memberRouter);

// 
connectToDb();

//* Couleurs pour le terminal
const logColor = chalk.rgb(60,222,255);

// Démarrage du Web serveur
app.listen(PORT, () => {
    console.log(`Web server is running on ${PORT} (${NODE_ENV})`);
});