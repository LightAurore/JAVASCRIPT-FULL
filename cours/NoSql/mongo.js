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