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

		res.render('Mortgage', {loans: listofLoans})
	});


});

router.post('/loans', function(req, res){
	console.log('went to loans');
});

router.post('/csc369', function(req, res){

		var leo = new user();
		leo.email = req.body.email;
		leo.name = "leo";
		leo.password = req.body.password;

		leo.save(function (err) {
  			console.log('Saved!');
		});

		//res.render('somepage',{ name: leo.name, password: leo.password});
		res.redirect('/csc369');
});

router.get('/csc369', function(req,res){
	
	user.findOne({ name: 'leo' }, function(err, data) {
  		console.log(data); 
  		res.render('somepage', { account: data });
	});
});


module.exports = router;
