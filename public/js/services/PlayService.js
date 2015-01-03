define(["app"], function(app) {
	
	app.factory("PlayService", ["$q", "$http", function($q, $http) {
		
		var PlayService = {};
		
		var APIPath = "/api";
		
		PlayService.playMovie = function(id) {
			
			var deferred = $q.defer();
			
			$http.post(APIPath + "/play", { id: id })
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data);
				});
			
			return deferred.promise;
			
		};
		
		PlayService.stopMovie = function() {
			
			var deferred = $q.defer();
			
			$http.post(APIPath + "/stop")
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data);
				});
			
			return deferred.promise;
			
		};
		
		return PlayService;
		
	}]);
	
});