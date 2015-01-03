define([], function() {
	return {
        defaultRoutePaths: "/movies",
        routes: {
            "/movies": {
            	templateUrl: "/views/movies.html",
              dependencies: [
								"directives/MovieCoverDirective",
								"services/MovieProvider",
              	"controllers/MovieController"	
              ]
            },
						"/movie/:id": {
							templateUrl: "/views/movie.html",
							dependencies: [
								"directives/MovieInfoDirective",
								"services/MovieProvider",
								"controllers/MovieInfoController"
							]
						},
						"/play/:id": {
							templateUrl: "/views/play.html",
							dependencies: [
								"directives/MovieCoverDirective",
								"services/MovieProvider",
								"services/PlayService",
								"controllers/PlayController"
							]
						},
						"/series": {
							templateUrl: "/views/series.html"
						},
						"/favorites": {
							templateUrl: "/views/favorites.html"
						}
        }
    };
});