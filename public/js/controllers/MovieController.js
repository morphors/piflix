define(["app"], function(app) {
	
	app.controller("MovieController", ["$scope", "MovieProvider", "Loading", 
	function($scope, MovieProvider, Loading) {
		
		MovieProvider.getPopular().then(function(movies) {
			$scope.movies = movies;
			Loading.done();
		})
		.catch(function() {
			alert("Could not load movies, try to reload page... ");
			throw new Error("Could not load movies");
		});;
		
	}]);
	
});