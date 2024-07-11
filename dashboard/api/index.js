const db = require('./dbConnection');
const port = process.env.PORT || 3000;
const createExpressApp = require('./create-express-app');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/api-router');
const fileUpload = require('express-fileupload');
const cors = require("cors");
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const app = express();

app.use(cors(corsOptions)) // Use this after the variable declaration
  
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/profiles', express.static(path.join(__dirname, 'profiles')));

app.use('/api', apiRouter());

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => { console.log(`listening on http://localhost:${port}`) })

database = db.connectToServer( ( err ) => {
    if (err) console.log(err);
    
    database = db.getDb();

  }  
);