const express  = require('express');
// const checkJwt = require('express-jwt');
var { expressjwt: jwt } = require("express-jwt");
const router   = express.Router();
const dataRoute = require('./dataRoute');

module.exports = () => {

  router.use('/data', dataRoute());
  
  return router;
}
