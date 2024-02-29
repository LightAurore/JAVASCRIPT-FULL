require('dotenv').config({ override: true});

//* Imports
const express = require('express');
const chalk = require('chalk');
require('express-async-errors');
const morgan = require('morgan');
const session = require('express-session');
const connectDb = require('./models');
const homeRouter = require('./routes/home.router');
const articleRouter = require('./routes/article.router');
const memberRouter = require('./routes/member.router');


//* Récupération des variables d'environnement
const { NODE_ENV, PORT, SESSION_SECRET} = process.env;

//* Initialize
const app = express();

//* Config du moteur de vuz
app.set('view engine', 'ejs');
app.set('views', './views');

//* Middlewares
//- logger
app.use(morgan('tiny'));
//- Fichier public
app.use(express.static('./public'));
//-  Données du formulaire
app.use(express.urlencoded({ extended: true }));

//* Sessions
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

//* Routes
app.use(homeRouter);
app.use(articleRouter);
app.use(memberRouter);

const logColor = chalk.rgb(30, 250, 60);

//* Démarrage du web serveur
app.listen(PORT, () => {
    console.log(logColor(`WebServer is running on port ${PORT} [${NODE_ENV}]`));
});