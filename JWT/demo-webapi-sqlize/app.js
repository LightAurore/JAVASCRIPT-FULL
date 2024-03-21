import 'dotenv/config';

// ! imports
import express from 'express';
import 'express-async-errors'
import mainRouter from './routes/index.js';
import morgan from 'morgan';
import db from './models/index.js';


// ! Variables d'env
const {NODE_ENV, PORT} = process.env;

// ! Database
// * Authentification vers la DB
db.sequelize.authenticate()
    .then(()=>{
        console.log(`Connexion to DB - Success`)
    })
    .catch((error)=>{
        console.log(`Connexion to DB - Error : \n`, error);
    })

// * Synchronisation des models et de la DB (NODE_ENV= "dev")
if(NODE_ENV === "dev"){
    // db.sequelize.sync()

    // db.sequelize.sync({force: true})
    
    db.sequelize.sync({alter: {drop: false}})
      .then(()=>{
            console.log(`Synchronisation de la DB - Success`)
        })
      .catch((error)=>{
            console.log(`Synchronisation de la DB - Error : \n`, error);
        })
}


// ! Web Api
// * Initialisation
const app = express();


// * Middlewares
app.use(express.json());
app.use(morgan('morgan'));


// * Routing
app.use('/api', mainRouter);


// * Démarrage de l'API
app.listen(PORT, ()=>{
    console.log(`Web Api running as ${NODE_ENV} on http;//localhost:${PORT}`);
})
