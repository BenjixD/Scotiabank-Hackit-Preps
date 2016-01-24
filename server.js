var express = require('express');
var app = express();

app.listen(9001);
console.log('Server has connected.');

app.get('/', function(req, res){
	res.send('Hello world.');
});

app.get('/lol', function(req,res){
	res.send('rekt');
});