var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expense Tracker' });
});

/* GET Add an expense page */
router.get('/addanexpense',function(req, res, next){
  console.log(req.query);
  res.render('addanexpense',{title: 'Expense Tracker - Add Expense'});
});

/* POST Expense Data*/
router.post('/postexpense',function(req, res, next){
  console.log("POST request - Add an expense");
  console.log(req.body);
  console.log("Request inputs: " + req.body.expamount);
  //res.render('index', { title: 'Expense Tracker' });
  res.send("<h1>Hello</h1>");
});

module.exports = router;
