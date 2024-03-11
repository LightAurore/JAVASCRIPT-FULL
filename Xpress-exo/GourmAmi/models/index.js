// La connexion à la base de donnée
//| fonction à appeler dans le server principal 
const mongoose = require('mongoose');

function connectDb(){
     // Récuperation de l'URI de connection depuis les variables d'env
     const { MONGO_URI } = process.env;

     // Initier la connection
     mongoose.connect(MONGO_URI, { })
        .then(()=>{
            console.log('Connection to MongoDb is successfull !');
        })
        .catch((e)=>{
            console.log('Connect to MongoDb failed');
            console.log(e);
        })

        //  Récupération de l'instance de connexion
        return mongoose.connection;
}

module.exports = connectDb;

