require.config({
	
	
	paths: {
		"jquery": "vendor/jquery/dist/jquery",
		"angular": "vendor/angular/angular",
		"angular-route": "vendor/angular-route/angular-route"
	},
	shim: {
		
		"angular": {
			deps:	["jquery"],
			exports: "angular"
		},
		"angular-route": {
			deps: ["angular"]
		}
	},
	
	deps: ["bootstrap"]
	
});