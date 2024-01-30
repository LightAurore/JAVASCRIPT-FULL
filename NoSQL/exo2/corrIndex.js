/** Récupération du client de mongodb me permettant de m'y connecter */
const { MongoClient } = require('mongodb')

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
    
    
        /** @var {FindCursor} data */
        const data = await clients.find({}, {projection: { _id: false, NOM: true}})
    
        for await (let client of data) {
            console.log(client)
        }
    } finally {
        await client.close()
    }
}

run().then(() => console.log("Ran"));