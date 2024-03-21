'use strict';

// require('dotenv').config({options}); // DOTENV doit tjr être le premier import !!!
require('dotenv').config(); // DOTENV doit tjr être le premier import !!!

// import
const express = require("express"), app = express();
const loggerMiddleware = require('./middlewares/logger.middleware');
const routes = require("./routes")


//  configuration du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views');

// Middlewares
// logger
app.use(loggerMiddleware);
// Gestion des données de formulaire
app.use(express.urlencoded({
    extended: true
}));

// app.use(middleware3);


// Routing
// const routes = require('express').Router();
// routes.get('/', (req,res)=>{
//     res.status(200).send("<h1>Hello</h1>");
// })

app.use('/',routes);


// Demarrage du serveur
const { NODE_DEV, PORT } = process.env;

app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT} [${NODE_DEV}]`);
})

