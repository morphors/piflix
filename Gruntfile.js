module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		sass: {
			dist: {
				options: {
					loadPath: require("node-bourbon").includePaths
				},
				files: {
					"public/css/style.css" : "sass/style.sass"
				}
			}
		},
		nodemon: {
			dev: {
				script: "index.js",
			}
		},
		watch: {
			css: {
				files: "**/*.sass",
				tasks: ["sass"],
				options: {
					livereload: true,
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-nodemon");
	grunt.registerTask("default", ["sass", "watch"]);
	grunt.registerTask("serve", ["nodemon"]);
}