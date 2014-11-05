//public/main.js

var angularQuestions = angular.module('angularQuestions', []);

function mainController($scope, $http) {
	$scope.formData = {};

	$http.get('/v1/questions')
		.success(function(data) {
			$scope.questions = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.createQuestion = function(){
		$http.post('/v1/question', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.questions = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error:' + data);
			});
	};

	$scope.deleteTodo = function(id) {
		$http.delete('/v1/question/' + id)
			.success(function(data) {
				$scope.questions = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error:' + data);
			});
	};
}