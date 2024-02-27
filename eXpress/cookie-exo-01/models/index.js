const mongoose = require("mongoose");
const chalk = require("chalk");

const dbColorSuccess = chalk.rgb(55, 250, 40);
const dbColorError = chalk.rgb(210, 69, 69);

function connectToDb(){
    
// Récupération de l'URI depuis les variables d'env
const { MONGO_URI } = process.env;


// Initialisation de la connection vers MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
    console.log(dbColorSuccess('Connection to MongoDB is successfull'));
})
.catch((err) => {
    console.log(dbColorError('Connection to MongoDB on error'));
    console.error(err);
})

// Récupération des instances de connection
// const db = mongoose.connection;

    return mongoose.connection;
}


module.exports = connectToDb;


// process.exit();   // ça coupe le server