const { MongoClient } = require('mongodb');
const ObjectID = require('mongodb').ObjectID
require('dotenv').config();

var _db;

module.exports = {

    connectToServer : async function ( callback ) {

      const client = new MongoClient(process.env.CLUSTER_CONN);

      try {

        await client.connect();

        _db = client.db("blackcoffer_dashboard");

        console.log('Connected to MongoDB successfully');
        
      } catch {
        console.error('Error connecting to MongoDB:', error);
      }

      return _db;

      // MongoClient.connect(process.env.DB_CONN, { useUnifiedTopology: true },  (err, cluster) => {
      //   if(err) {
      //     console.log('Database error: ' + err);
      //   } else {
      //       _db = cluster.db('myStore');
      //       console.log('Successful database connection');
      //       return callback( err );
      //   }
      // })
    },

    getDb : function () { 
      return _db;
    }

};