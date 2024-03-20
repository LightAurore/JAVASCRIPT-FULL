'use strict'

const homeRouter = require('./routes/home.router.js')

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


//  Server 
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT} and url http://localhost:${PORT}`)
})