const { MONGO_URI } = process.env;

{/* 
        var database = client.GetDatabase(MONGO_URI );

        database.RunCommandAsync((Command<BsonDocument>)"{ping:1}").Wait();
*/} 

// Vérifier la connexion à MongoDb
{/* 
        client = new MongoClient(MONGO_URI);

        const database = client.GetDatabase(mongoDbStr);

        bool isMongoLive = database.RunCommandAsync((Command<BsonDocument>)"{ping:1}").Wait(1000);

        if(isMongoLive)
        {
            // connected
        }
        else
        {
            // couldn't connect
        }
 */}

 var MongoClient = require('mongodb').MongoClient , Server = require('mongodb').Server;

 var connectionString = MONGO_URI;
 var client = new MongoClient(connectionString);
 var server = client.GetServer();
 server.Ping();

