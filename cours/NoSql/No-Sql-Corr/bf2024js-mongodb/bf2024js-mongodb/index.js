/** Récupération du client de mongodb me permettant de m'y connecter */
const { MongoClient } = require('mongodb')

require('./lib/reader')

/** @var {MongoClient} client | Instance me permettant la gestion de la base de données */
const client = new MongoClient("mongodb://localhost:27017")

/**
 * Méthode permettant l'execution du code
 */
async function run() {
    try {
        /** @var { Db } db |Instance représentant la base de données formation contenu dans le serveur */
        const db = client.db('formation')
        /** @var { Collection<Document> } clients |Instance représentant la collection clients */
        const clients = db.collection("clients")
    
        const read = await console.read()
        console.log(read)
    
        // /** @var {FindCursor} data */
        // const data = await clients.find({COMMANDES: {$exists: true}}, { projection: {"COMMANDES": {NCOM: true, "DETAILS": true}} })
    
        // for await (let client of data) {
        //     console.log(client)
        // }
    } finally {
        await client.close()
    }
}

run().then(() => console.log("Ran"));