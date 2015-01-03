define(["app"], function(app) {
	app.factory("MovieProvider", ["$q", "$http", function($q, $http) {
		var MovieProvider = {};
		
		var APIPath = "https://yts.re/api/";
		
		MovieProvider.listParams = {
			limit: 20,
			sort: "rating"
		};
		
		
		MovieProvider.getRaw = function(API, params) {
			
			var deferred = $q.defer();
			
			$http.get(APIPath + API, { params: params })
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data);
				});
			
			return deferred.promise;
			
			
		};
		
		
		MovieProvider.movie = function(id) {
			
			return MovieProvider.getRaw("movie.json", { id: id });
			
		};
		
		
		MovieProvider.movieList = function(params) {
			
			return MovieProvider.getRaw("list.json", angular.extend({}, MovieProvider.listParams, params));
			
		};
		
		
		// Just shorthands
		
		MovieProvider.getPopular = function() {
			
			return MovieProvider.movieList({ "sort": "seeds" });
			
		};
		
		MovieProvider.getLatest = function() {
			
			return MovieProvider.movieList({ "sort": "year" });
			
		};
		
		MovieProvider.getBestRated = function() {
			return MovieProvider.movieList({ "sort": "rating" });
		};
		
		MovieProvider.getById = function(id) {
			return MovieProvider.get({ id: id });
		};
		
		
		
		return MovieProvider;
	}]);
});