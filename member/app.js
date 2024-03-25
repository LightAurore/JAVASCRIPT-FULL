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
const express = require('express'), app = express();
require('express-async-errors');

const session =  require('express-session');



// views engine
app.set("view engine", "ejs");
app.set("views", "./views");

// utiliser le dossier public
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

// routing
app.use(homeRouter);
app.use(recetteRouter);
app.use(memberRouter);
// app.use(errorRouter);

app.listen(PORT, () =>{
	console.log(`Le server tourne sur le port http://localhost:${NODE_ENV}`)
})