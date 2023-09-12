// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectId;

// const uri = "mongodb://127.0.0.1:27017";
// const dbName = "shopello";
// const collectionName = "userotps";
// const ttlField = "createdAt";

// const dotenv = require('dotenv');

// MongoClient.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) throw err;
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);
  
//     const document = {
//       _id: new ObjectId(),
//       data: "Some data",
//       [ttlField]: new Date(Date.now() + 3600000), // Set TTL for 1 hour from now
//     };
  
//     collection.insertOne(document, (err, result) => {
//       if (err) throw err;
//       console.log("Document inserted with expiry timestamp.");
//       client.close();
//     });
//   });