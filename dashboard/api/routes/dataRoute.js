const express = require('express');
const router  = express.Router();
const { connectToServer, getDBInstance } = require('../dbConnection');

module.exports = () => {
  router.get('/', async (req, res) => {

    const dataCollection = getDBInstance().collection("dashboard_data");
    
    const result = await dataCollection.find({}).toArray();

    return res.status(200).json(result);

  });

  return router;
};
