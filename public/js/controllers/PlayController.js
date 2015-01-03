define(["app"], function(app) {
	
	app.controller("PlayController", ["$scope", "MovieProvider", "$routeParams", "PlayService", 
	function($scope, MovieProvider, $routeParams, PlayService) {
		
		
		PlayService.playMovie($routeParams.id).then(function(data) {
			
			if(!data.success) throw new Error(data.error); //If any error(s) occurred
			
			MovieProvider.movie($routeParams.id).then(function(movie) {
				$scope.movie = movie;
			})
			.catch(function() {
				alert("Could not fetch movie details. But movie should be playing...");
				throw new Error("Could not fetch movie details.");
			});
		
		})
		.catch(function(data) {
			alert("Unknown error: " + data.error);
			throw new Error(data.error);
		});
		
	}]);
	
});