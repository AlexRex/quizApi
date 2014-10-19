

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var question = new Schema ({
	question: String,
	trueAnswer: String,
	secondAnswer: String,
	thirdAnswer: String
});


module.exports = mongoose.model('Question', question);