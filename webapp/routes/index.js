var express = require('express');
var router = express.Router();
var user = require('../Schemas/user.js');
var loanCollection = require('../Schemas/loans.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Home' });
});

router.post('/', function(req, res, next) {
  console.log(req.body.button);
  res.render('Home', { title: 'Home' });
});

router.get('/loans', function(req, res){
	var listofLoans = [];
	loanCollection.find({}, function(err, data) {

		for (var i = data.length - 1; i >= 0; i--) {
			listofLoans.push(data[i]);
		};

		res.render('Home', { loans: listofLoans});
	});


});

router.post('/loans', function(req, res){
	console.log('went to loans');
});

router.post('/csc369', function(req, res){
	res.redirect('/csc369');
});

router.get('/csc369', function(req,res){
	
	res.send("Hello world");
});


module.exports = router;
