
const { MongoClient, FindCursor, Document } = require('mongodb');

require('./lib/reader');

const client = new MongoClient("mongodb://localhost:27017");

/**
 * 
 * @param {FindCursor} cursor 
 */
async function print_cursor(cursor) {
    for await (const it of cursor) {
        print_document(it)
    }
}

async function print_document(document) {
    console.log(document)
}

async function print_number(number) {
    console.log(number)
}


async function run(){
    try{
        const db = client.db('exemple');
        const restaurants = db.collection("restaurants")

        // const cuisine = await restaurants.distinct('cuisine');
        // const cuisine = await console.read();
        //     console.log(cuisine)

        // const cuisines = await restaurants.countDocuments({cuisine: "French"});
        //     console.log(cuisines)

        
        // exo 1
        // const exo1 = await restaurants.distinct('cuisine');
        // print_cursor(exo1);
        
        
        // exo 2
        // console.log("----------------");
        // const exo2 = await restaurants.distinct('grades.grade');
        // print_cursor(exo2)


        // exo 3
        // console.log("----------------");
        // const cuisine = await console.read()
        // const exo3 = await restaurants.countDocuments({cuisine});
        // print_number(exo3)

        // exo 4
        // console.log("----------------");
        // const exo4 = await restaurants.countDocuments({'address.street' : 'Central Avenue'});
        // print_number(exo4)

        // exo 5
        // console.log("----------------");
        // const exo5 = await restaurants.countDocuments({'grades.score' : { $gt: 50}});
        // print_number(exo5);

        
        // exo 6
        
        // console.log("----------------");
        // const exo6 = await restaurants.find({}).project({name: true, address:{building: true, street: true}})
        // print_cursor(exo6);

        
        // exo 7
        
        console.log("----------------");
        const exo7 = await restaurants.find()
        print_document(exo7);

        
        // exo 8
        
        // console.log("----------------");
        // const exo8 = await restaurants.find({}).project({name: true, address:{building: true, street: true}})
        // print_cursor(exo8);

        
        // exo 9
        
        console.log("----------------");
        const exo9 = await restaurants.find({}).project({name: true, address:{building: true, street: true}})
        print_cursor(exo9);

        
        // console.log("----------------");
        // const exo11 = await restaurants.find({name: /.*Union/ig})
        // await print_cursor(exo11);

    }
    finally{
        await client.close()
    }
    
    
}

run()
