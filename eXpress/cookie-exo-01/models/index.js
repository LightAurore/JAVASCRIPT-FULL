const mongoose = require('mongoose');

function connectDb() {
    
<<<<<<< HEAD
    // Récuperation de l'URI de connection depuis les variables d'env
    const { MONGO_URI } = process.env;
    
    // Initialisation de la connexion vers MongoDB
    mongoose.connect(MONGO_URI, {  })
    .then(() => {
        console.log('Connection to MongoDB is successful !');
    })
    .catch((e) => {
        console.log('Connection to MongoDb on error !');
        console.error(e);
    });
    
    // Récuperation de l'instance de connexion
=======
// Récupération de l'URI depuis les variables d'env
const { MONGO_URI } = process.env;


// Initialisation de la connection vers MongoDB
mongoose.connect(MONGO_URI, { })
.then(() => {
    console.log(dbColorSuccess('Connection to MongoDB is successfull'));
})
.catch((err) => {
    console.log(dbColorError('Connection to MongoDB on error'));
    console.error(err);
})

// Récupération des instances de connection
// const db = mongoose.connection;

>>>>>>> e3bc91a4173909219e50c32aa479023c37704b5e
    return mongoose.connection;
}

module.exports = connectDb;