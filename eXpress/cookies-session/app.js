require("dotenv").config();
const {PORT, NODE_ENV, SESSION_SECRET } = process.env;

// imports et initialize express
const express = require("express"), app = express();

// imports 
const morgan = require('morgan')
const session = require("express-session");
const homeRouter = require("./routes/home.router");
const authRouter = require("./routes/auth.router");
const mustacheExpress = require("mustache-express");
const renderSessionMiddleware = require("./middlewares/render.session.middleware");

// 


// config du moteur de vue 
app.engine('mst', mustacheExpress());
app.set("view engine", "mst");
app.set("views","./views");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method : url :status - :response-time ms'));

// utiliser le dossier "public"
app.use(express.static("public"));


// Express - Session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET
}));
// modifie la methode "render"
// objectif ajouter la "session" dans les controllers
app.use(renderSessionMiddleware())


// Routing
app.use(homeRouter);
app.use(authRouter);


// Démarrage du webserver
app.listen(PORT || 3000, ()=>{
    console.log("Server is running at http:/localhost:" + PORT + " " + NODE_ENV);
})

