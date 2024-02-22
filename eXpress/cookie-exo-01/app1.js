
require('dotenv').config({override: true});

// Imports
const express = require('express');
// require("express-async-errors");
const morgan = require('morgan');
const session = require('express-session');
const homeRouter = require('./routes/home.router');
const chalk = require("chalk");


// Récupérer des variables d' "env"
const {NODE_ENV, PORT, SESSION_SECRET} = process.env;


// Initialize web server
const app = express();

// - Configure view engine
app.set('view engine', 'ejs');
app.set('views','./views');

// - Middlewares
// * Logger
app.use(morgan('tiny'));
// *  Fichier public
app.use(express.static('./public'));
// * Body des formulaires
app.use(express.urlencoded({extended: true}));

// * Session 
app.use(session({   
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
}))

//  - Routing
app.use(homeRouter);

// 
const connectToDb = require('./models')
connectToDb();



//* Couleurs pour le terminal
const logColor = chalk.rgb(60,222,255);
// Démarrage du web server
app.listen(PORT, () => {
    console.log(logColor(`Server listening at http://localhost:${PORT} (${NODE_ENV})`));
})
