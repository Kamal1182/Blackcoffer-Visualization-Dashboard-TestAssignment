const express = require('express');
const router  = express.Router();
const fs = require('fs');
const ObjectId = require('mongodb').ObjectID;
const jwt     = require('jsonwebtoken');
const sanitizeHtml = require('sanitize-html');

//const db      = require('../dbConnection');
//database      = db.getDb();

module.exports = () => {
  router.get('/', (req, res) => {
      const productsCollection = database.collection('products');
      productsCollection.find({}).toArray((err, docs) => {
        return res.status(200).json(docs);
      });
    });

  return router;
};
