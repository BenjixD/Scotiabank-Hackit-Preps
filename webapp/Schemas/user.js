var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	nationality: String,
	age: {type: Number, default: 0},
	email: String,
	homePhone:String,
	cellPhone:String,
	homeAddress:String,
	loans:Array
});

module.exports = mongoose.Model('User', userSchema);