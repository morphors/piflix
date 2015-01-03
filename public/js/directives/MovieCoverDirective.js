define(["app"], function(app) {
	app.directive("movieCover", function() {
		return {
			templateUrl: "/partials/movieCover.html",
			scope: {
				"movie": "="	
			}
		}
	});
});