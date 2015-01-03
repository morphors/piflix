define(["app"], function(app) {
	
	app.directive("movieInfo", function() {
		return {
			templateUrl: "/partials/movieInfo.html",
			scope: {
				movie: "="
			}
		}
	});
	
});