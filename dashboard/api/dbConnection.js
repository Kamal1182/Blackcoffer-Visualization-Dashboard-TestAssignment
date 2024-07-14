const { MongoClient } = require('mongodb');

require('dotenv').config();

let mongoClientInstance = null;
let dbInstance = null;

  async function connectToServer() {

    if (!mongoClientInstance) {
      mongoClientInstance = await MongoClient.connect(process.env.CLUSTER_CONN);
      dbInstance = await mongoClientInstance.db(process.env.DB_NAME);
      // const result = await dbInstance.collection("dashboard_data").findOne({country: "United States of America"});
      // console.log(result);
      console.log("Database Connected Successfully")
    }

    // returning a reference to the database
    return dbInstance;

  }

  function getDBInstance() {
    if (!dbInstance) {
        throw new Error("Database not connected");
    }
    return dbInstance;
  }

  module.exports = { connectToServer, getDBInstance };