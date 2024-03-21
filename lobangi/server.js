'use strict'

const dicoRouter = require('./routes/dico.router.js');
const ecoRouter = require('./routes/eco.router.js');
const homeRouter = require('./routes/home.router.js');
const littRouter = require('./routes/litt.router.js');
const magRouter = require('./routes/mag.router.js');

require('dotenv').config();

const express = require('express'), app = express();

// Variable Env
const PORT = process.env.PORT;



// - Config du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views'); 

//*  Fichier public
app.use(express.static('./public'));
//*  Données des formulaires
app.use(express.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(dicoRouter);
app.use(ecoRouter);
app.use(littRouter);
app.use(magRouter);


//  Server 
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT} and url http://localhost:${PORT}`)
})