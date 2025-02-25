db.clients.insertOne({
    nom: 'Blop',
    adresse: {
        rue: 'Rue du trou du cul',
        numero: '42',
        localite: 'ColineLand',
        pays: 'PlaisirLand'
    },
    cat: '95D',
    compte: 200.50,
    commandes: [
        {
            ncom: 'B512',
            datecom: '2024-01_26T13:48:56',
            details: [
                {
                    nprod: 'S69',
                    qcom: 2
                }
            ]
        }
    ]
})

<!--  -->
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


<!--  -->
const { MongoClient, FindCursor } = require('mongodb')
require('./lib/reader')
const client = new MongoClient("mongodb://localhost:27017")

/**
 * 
 * @param {FindCursor} cursor 
 */
function print_cursor(cursor) {
    for (const it of cursor) {
        print_document(it)
    }
}

function print_document(document) {
    console.log(document)
}

function print_number(number) {
    console.log(number)
}

async function run() {
    try {
        const db = client.db('formation')
        const restaurants = db.collection("restaurants")

        // Exo 1
        const exo1 = await restaurants.distinct('cuisine')
        print_cursor(exo1)

        // Exo 2
        console.log("---------")
        const exo2 = await restaurants.distinct('grades.grade')
        print_cursor(exo2)

        // Exo 3
        console.log("---------")
        const cuisine = await console.read();
        const exo3 = await restaurants.countDocuments({cuisine})
        print_number(exo3)

        
        // Exo 4
        console.log("---------")
        const exo4 = await restaurants.countDocuments({"address.street": "Central Avenue"})
        print_number(exo4)

        // Exo 5
        console.log("---------")
        const exo5 = await restaurants.countDocuments({"grades.score": { $gt: 50 } })
        print_number(exo5)
    } finally {
        await client.close()
    }
}

run()

<!--  -->



<!--  -->




