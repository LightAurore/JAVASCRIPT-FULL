###  MONGODB

{
	title: "Post Title 1",
	body: "Body of post.",
	category: "News",
	likes: 1,
	tags: ["news", "events"],
	date: Date()
}

/*
	
*/

db.posts.find( {category: "News"} )  

/*
	Commencer
*/
mongosh "mongodb+srv://cluster0.i3rve.mongodb.net/myFirstDatabase" --apiVersion 1 --username mongo  

/*
	créer un database
*/
use blog

/*
	créer une collection
*/
db.createCollection("posts")  
db.posts.insertOne({"title": "Post 1"})   

/*
	insérer
*/
db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
})  

db.posts.insertMany([  
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
])


/*
	modifier des données
*/
db.posts.find()
db.posts.findOne()
db.posts.find( {category: "News"} )
db.posts.find({}, {title: 1, date: 1})
db.posts.find({}, {_id: 0, title: 1, date: 1})
db.posts.find({}, {category: 0})


/*
	créer un database
*/
db.posts.find( { title: "Post Title 1" } ) 
db.posts.updateOne( { title: "Post Title 1" }, { $set: { likes: 2 } } ) 
db.posts.find( { title: "Post Title 1" } ) 

db.posts.updateOne( 
  { title: "Post Title 5" }, 
  {
    $set: 
      {
        title: "Post Title 5",
        body: "Body of post.",
        category: "Event",
        likes: 5,
        tags: ["news", "events"],
        date: Date()
      }
  }, 
  { upsert: true }
)

db.posts.updateMany({}, { $inc: { likes: 1 } })

/*
	effacer des données
*/
db.posts.deleteOne({ title: "Post Title 5" })
db.posts.deleteMany({ category: "Technology" })



/*
	Comparison
The following operators can be used in queries to compare values:

$eq: Values are equal
$ne: Values are not equal
$gt: Value is greater than another value
$gte: Value is greater than or equal to another value
$lt: Value is less than another value
$lte: Value is less than or equal to another value
$in: Value is matched within an array
Logical
The following operators can logically compare multiple queries.

$and: Returns documents where both queries match
$or: Returns documents where either query matches
$nor: Returns documents where both queries fail to match
$not: Returns documents where the query does not match
Evaluation
The following operators assist in evaluating documents.

$regex: Allows the use of regular expressions when evaluating field values
$text: Performs a text search
$where: Uses a JavaScript expression to match documents
*/

/*
	MongoDB Update Operators
There are many update operators that can be used during document updates.

Fields
The following operators can be used to update fields:

$currentDate: Sets the field value to the current date
$inc: Increments the field value
$rename: Renames the field
$set: Sets the value of a field
$unset: Removes the field from the document
Array
The following operators assist with updating arrays.

$addToSet: Adds distinct elements to an array
$pop: Removes the first or last element of an array
$pull: Removes all elements from an array that match the query
$push: Adds an element to an array

*/


/*
	Aggregation :
	$group
$limit
$project
$sort
$match
$addFields
$count
$lookup
$out
*/
db.posts.aggregate([
  // Stage 1: Only find documents that have more than 1 like
  {
    $match: { likes: { $gt: 1 } }
  },
  // Stage 2: Group documents by category and sum each categories likes
  {
    $group: { _id: "$category", totalLikes: { $sum: "$likes" } }
  }
])

db.listingsAndReviews.aggregate(
    [ { $group : { _id : "$property_type" } } ]
)

db.movies.aggregate([ { $limit: 1 } ])

db.restaurants.aggregate([
  {
    $project: {
      "name": 1,
      "cuisine": 1,
      "address": 1
    }
  },
  {
    $limit: 5
  }
])

db.listingsAndReviews.aggregate([ 
  { 
    $sort: { "accommodates": -1 } 
  },
  {
    $project: {
      "name": 1,
      "accommodates": 1
    }
  },
  {
    $limit: 5
  }
])

db.listingsAndReviews.aggregate([ 
  { $match : { property_type : "House" } },
  { $limit: 2 },
  { $project: {
    "name": 1,
    "bedrooms": 1,
    "price": 1
  }}
])

db.restaurants.aggregate([
  {
    $addFields: {
      avgGrade: { $avg: "$grades.score" }
    }
  },
  {
    $project: {
      "name": 1,
      "avgGrade": 1
    }
  },
  {
    $limit: 5
  }
])

db.restaurants.aggregate([
  {
    $match: { "cuisine": "Chinese" }
  },
  {
    $count: "totalChinese"
  }
])

db.comments.aggregate([
  {
    $lookup: {
      from: "movies",
      localField: "movie_id",
      foreignField: "_id",
      as: "movie_details",
    },
  },
  {
    $limit: 1
  }
])

db.listingsAndReviews.aggregate([
  {
    $group: {
      _id: "$property_type",
      properties: {
        $push: {
          name: "$name",
          accommodates: "$accommodates",
          price: "$price",
        },
      },
    },
  },
  { $out: "properties_by_type" },
])

/*
	Indexing & Search
*/
db.movies.aggregate([
  {
    $search: {
      index: "default", // optional unless you named your index something other than "default"
      text: {
        query: "star wars",
        path: "title"
      },
    },
  },
  {
    $project: {
      title: 1,
      year: 1,
    }
  }
])


/*
	Schema Validation
*/
db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "title", "body" ],
      properties: {
        title: {
          bsonType: "string",
          description: "Title of post - Required."
        },
        body: {
          bsonType: "string",
          description: "Body of post - Required."
        },
        category: {
          bsonType: "string",
          description: "Category of post - Optional."
        },
        likes: {
          bsonType: "int",
          description: "Post like count. Must be an integer - Optional."
        },
        tags: {
          bsonType: ["string"],
          description: "Must be an array of strings - Optional."
        },
        date: {
          bsonType: "date",
          description: "Must be a date - Optional."
        }
      }
    }
  }
})

/*
	MongoDB Data API
*/
curl --location --request POST 'https://data.mongodb-api.com/app/<DATA API APP ID>/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: <DATA API KEY>' \
--data-raw '{
    "dataSource":"<CLUSTER NAME>",
    "database":"sample_mflix",
    "collection":"movies",
    "projection": {"title": 1}
}'

{
  "dataSource": "<data source name>",
  "database": "<database name>",
  "collection": "<collection name>",
  "filter": <query filter>,
  "projection": <projection>
}

{
  "dataSource": "<data source name>",
  "database": "<database name>",
  "collection": "<collection name>",
  "filter": <query filter>,
  "projection": <projection>,
  "sort": <sort expression>,
  "limit": <number>,
  "skip": <number>
}



/*
	console : 
	npm install mongodb
*/

/*
	index.js

	const { MongoClient } = require('mongodb');
*/
const { MongoClient } = require('mongodb');

const uri = "<Your Connection String>";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('sample_mflix');
    const collection = db.collection('movies');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);


npm nvm
