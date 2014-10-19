var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


//config db

var configDB = require('./config/database.js')(mongoose);


// Conexión con la base de datos
//mongoose.connect('mongodb://localhost:27017/androidQuizApi');

// Definición de modelos
/*var Todo = mongoose.model('Todo', {
	text: String
});*/

var app = express();
var port = process.env.PORT || 2000;

//CONFIG
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
	console.log('App listening on port '+port);
});


// development only
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
	// app.use(express.errorHandler());
	app.use(morgan('dev'));
	app.locals.pretty = true;

}


require('./routes/v1.js')(app);

