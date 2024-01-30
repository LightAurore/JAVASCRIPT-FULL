// const mongoDB = require('mongodb');
const { MongoClient } = require('mongodb');

// import { MongoClient } from 'mongodb';

// se connecter à une base de données
const client = new MongoClient("mongodb://localhost:27017");


// exer
async function run(){
    try{
        const db = client.db('exemple');
        const clients = db.collection("clients")

        const data = await clients.find({}, {projection: { _id: false, NOM: true}})

        for await (let client of data){
            // console.log(client)
        }
        console.log( await db.getCollectionNames());
    }
    finally{
        await client.close()
    }
    
    
}

run()
.then(
    () => console.log("Ran")
)

