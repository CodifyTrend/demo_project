var express = require('express');
var router = express.Router();
var db = require('../models/db');
var dateFormat = require('dateformat');

/* GET home page. */
router.get('/', function(req, res, next) {
/*	console.log(req);
var date = new Date();
var queryString= "select * from test limit 1";
db.query(queryString, function (err, rows, fields) {
  if (err) throw err
  	console.log(rows);
res.render('index', { title: rows });
})*/
  res.render('index', { title: 'sarthak' });
});
router.post('/',function(req, res, next){
  var data = JSON.parse(JSON.stringify(req.body));
  var date = new Date(data.startDate);
  var startDate = dateFormat(date, "yyyy-mm-dd");
  console.log(startDate);
  var queryString= "select * from test where date between ? AND ?";
  db.query(queryString,["2015-01-27","2015-02-23"],function (err, rows, fields) {
  if (err) throw err
  	console.log(rows);
    //res.render('index', { title: rows });
  })
});

module.exports = router;
