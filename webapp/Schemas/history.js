var mongoose = require('mongoose');
var schema = mongoose.Schema;

var historySchema = new Schema({
	loanID:String,
	userID:String,
	issueDate:String,
	details:String,
	status:String
});

module.export = mongoose.Model('History', historySchema);