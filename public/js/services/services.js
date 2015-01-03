define(["angular"], function(angular) {
	return angular.module("services", [])
	
	.factory("Loading", ["$rootScope", function($rootScope) {
		$rootScope.loading = true;
		
		var Loading = {};
		
		Loading.done =function() {
				$rootScope.loading = false;
		};
		
		setTimeout(Loading.done, 5000);
		
		return Loading;
		
	}]);
	
	
	
});