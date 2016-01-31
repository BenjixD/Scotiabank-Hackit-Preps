var mongoose = require('mongoose');
var schema = mongoose.Schema;


var loansSchema = new Schema({
 name: String,
 userID: String,
 status: {type: String, default:"ongoing"},	// Possible statuses: cancelled, ongoing, completed
 interestType: String,
 interestRate: Number,
 fixedInterest: Boolean,
 purpose: String,
 startDate: String,
 expectedEndDate: String,
 total: Number;
 currentBalance: Number;
 frequency: Number;
 installmentSum: Number;
 notes: String,
 history: Array
});

module.export = mongoose.Model('Loans', loansSchema);