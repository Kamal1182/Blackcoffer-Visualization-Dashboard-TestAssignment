require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

const users = require('./users.json');
const products = require('./products.json');
const contacts = require('./contacts.json');
require('dotenv').config();



function seedCollection(collectionName, initialRecords) {

  MongoClient.connect(process.env.DB_CONN, (err, client) => {
    var db = client.db('myStore');
    
    console.log('connected to mongodb...');

    const collection = db.collection(collectionName);

    collection.remove();  
    
    initialRecords.forEach((item) => {
      if (item.password) {
        item.password = bcrypt.hashSync(item.password, parseInt(process.env.hashSalt))
      }
    });

    console.log('inserting records...');

    collection.insertMany(initialRecords, (err, result) => {
      console.log(`${result.insertedCount} records inserted.`);
      console.log('closing connection...');
      client.close();
      console.log('done.');
    });

  });
}


seedCollection('users', users);
seedCollection('products', products);
seedCollection('contacts', contacts);
