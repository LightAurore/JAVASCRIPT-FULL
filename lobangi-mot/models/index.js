const mongoose = require('mongoose');

function connectDb(){
    const { MONGO_URI } = process.env;

    mongoose.connect(MONGO_URI, { })
        .then(()=>{
            console.log('Connection to MongoDb is successful !')
        })
        .catch((e)=>{
            console.warn('Connection to MongoDb on error');
            console.error(e);
        })

        return mongoose.connection;
}

module.exports = connectDb;