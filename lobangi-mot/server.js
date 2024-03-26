'use strict'

const connectDb = require('./models/index.js');
const motRouter = require('./routes/mot.router.js');
const testRouter = require('./routes/test.router.js');


require('dotenv').config();

const express = require('express'), app = express();

// Variable Env
const PORT = process.env.PORT;



// - Config du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views'); 

//*  Fichier public
app.use(express.static('./public'));
app.use(express.json());
//*  Données des formulaires
app.use(express.urlencoded({ extended: true }));


app.use(testRouter);
app.use(motRouter);



// Connection à la base de données
connectDb();

//  Server 
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT} and url http://localhost:${PORT}`)
})