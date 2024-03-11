// Import modules
const connectDb = require('./models');
const errorRouter = require('./routes/error.router');
const homeRouter = require('./routes/home.router');
const memberRouter = require('./routes/member.router');
const recetteRouter = require('./routes/recette.router');

require('dotenv').config();
// Récupération de variables ".env"
const { PORT, NODE_ENV, SESSION_SECRET } = process.env;

// imports
const express = require('express'), srv = express();
require('express-async-errors');

const session =  require('express-session');



// views engine
srv.set("view engine", "ejs");
srv.set("views", "./views");

// utiliser le dossier public
srv.use(express.static('./public'));

//*  Données des formulaires
srv.use(express.urlencoded({ extended: true }));

//*  Session
srv.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET
}));

//* Injecter la session dans la variable "locals"
srv.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

// routing
srv.use(homeRouter);
srv.use(recetteRouter);
srv.use(memberRouter);
// srv.use(errorRouter);

// Connexion à la base de donnée MongoDB
connectDb();

// Server running
srv.listen(PORT, ()=>{
    console.log(`Server running as ${NODE_ENV} at http://localhost:${PORT}`);
})

