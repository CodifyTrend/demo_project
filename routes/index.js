var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
var date = new Date();
var queryString= "insert into customer_info( date, status, customer_name) values( '2016-12-28',1,'dummy')";
db.query(queryString, function (err, rows, fields) {
  if (err) throw err
res.render('index', { title: "row inserted" });
})
  
});

module.exports = router;
