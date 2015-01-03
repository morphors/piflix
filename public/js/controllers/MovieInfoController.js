define(["app"], function(app) {
	
	app.controller("MovieInfoController", ["$scope", "$routeParams", "MovieProvider", "Loading", 
	function($scope, $routeParams, MovieProvider, Loading) {
		
		$scope.id = $routeParams.id;
		
		MovieProvider.movie($routeParams.id).then(function(data) {
			
			$scope.movie = data;
			
			Loading.done();
		})
		.catch(function() {
			alert("Could net get movie details, try to refresh the page.");
			throw new Error("Could not get movie details.");
		});
		
		
		
	}]);
	
});