
var Question = require('../models/question');


module.exports = function(app){

	// Rutas de nuestro API
	app.get('/v1/questions', function(req, res) { // GET de todos las preguntas
		Question.find(function(err, questions) {
			if (err) {
				res.send(err);
			}
			res.json(questions);
		});
	});

	app.post('/v1/question', function(req, res) { // POST que crea una pregunta y devuelve todas tras la creación
		Question.create({
			text: req.body.text,
			done: false
		}, function(err, todo) {
			if (err) {
				res.send(err);
			}

			Question.find(function(err, questions) {
				if (err) {
					res.send(err);
				}
				res.json(questions);
			});
		});
	});

	app.delete('/v1/question/:question', function(req, res) { // DELETE una question y las devuelve todas
		Question.remove({
			_id: req.params.todo
		}, function(err, todo) {
			if (err) {
				res.send(err);
			}

			Question.find(function(err, questions) {
				if (err) {
					res.send(err);
				}
				res.json(questions);
			});

		});
	});

	app.get('*', function(req, res) { // Carga una vista HTML simple donde irá nuesta Single App Page
		res.sendFile('./public/index.html'); // Angular Manejará el Frontend
	});



};