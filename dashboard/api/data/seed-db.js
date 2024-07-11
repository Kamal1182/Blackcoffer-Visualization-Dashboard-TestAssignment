require('dotenv').config();

const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const data = require('./jsondata.json');
require('dotenv').config();



async function seedCollection(collectionName, initialRecords) {

  // const client = new MongoClient(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true });
  const uri = 'mongodb+srv://blackcoffer_admin:BlackCoffer@cluster0.qfnocza.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    
    console.log('Connected to MongoDB successfully');
    // Perform database operations here

    let result = await client.db("blackcoffer_dashboard").collection(collectionName).deleteMany({});

    console.log(`${result.deletedCount} document(s) was/were deleted.`);

    console.log('inserting records...');

    result = await client.db("blackcoffer_dashboard")
                               .collection(collectionName)
                               .insertMany(initialRecords);

    
    console.log(`${result.insertedCount} records inserted.`);
    console.log('closing connection...');
    await client.close();
    console.log('done.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}


seedCollection('dashboard_data', data);