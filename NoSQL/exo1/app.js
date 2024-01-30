// CRUD CREATE READ UPDATE DELETE
requestAnimationFrame('dotenv').config();

const { MongoClient } = require('mongoDB');
const client = new MongoClient(process.env.MONGO_URL);

async function main(){
    await client.connect();
    console.log('connexion OK!');
    const db = client.db('exemple');
    const collection = db.collection('clients');
    const insertStuff = await collection.insertMany({a: 1},{b: 2}, {c: 3});
    console.log('Documents insérés => ', insertStuff);

    return 'done !'
}

//Create
try{
    const insertData = await collection.insertMany([
        {
            name: 'Alex',
            age: 30,
            sexe: 'Masculin',
            hobby: 'Coding'
        },
        {
            name: 'Justine',
            age: 25,
            sexe: 'Feminin',
            hobby: 'Design'
        },
        {
            name: 'Pierre',
            age: 35,
            sexe: 'Masculin',
            hobby: 'Escalade'
        }
    ]);

    console.log('Document');



}catch(error){
    throw error;
}

//Read
try{
    const insertData = await collection.insertMany([
        {
            name: 'Alex',
            age: 30,
            sexe: 'Masculin',
            hobby: 'Coding'
        },
        {
            name: 'Justine',
            age: 25,
            sexe: 'Feminin',
            hobby: 'Design'
        },
        {
            name: 'Pierre',
            age: 35,
            sexe: 'Masculin',
            hobby: 'Escalade'
        }
    ]);

    console.log('Document');



}catch(error){
    throw error;
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());