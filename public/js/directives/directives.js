define(["angular"], function(angular) {
	
	
	return angular.module("directives", [])
	
	.directive("menu", function() {
		
		return {
			templateUrl: "/partials/menu.html"
		};
		
	})
	
	.directive("loading", function() {
		return {
			templateUrl: "/partials/loading.html"
		};
	});
	
});