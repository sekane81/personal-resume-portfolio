module.exports = function(grunt) {

	//Initializing the configuration object
	grunt.initConfig({

		// Task configuration
		copy: {
			modernizr: {
				src: './bower_components/modernizr/modernizr.js',
				dest: './assets/js/modernizr.js'
			},
			bootstrap: {
				src:'./bower_components/bootstrap/dist/css/bootstrap.min.css',
				dest:'./assets/css/bootstrap.min.css'
			},
			bootstrapjs: {
				src:'./bower_components/bootstrap/dist/js/bootstrap.min.js',
				dest:'./assets/js/bootstrap.min.js'
			},
			jquery: {
				src:'./bower_components/jquery/dist/jquery.min.js',
				dest:'./assets/js/jquery.min.js'
			},
		},
		concat: {
			options: {
				separator: ';',
			},
			js: {
				src: [
					'./js/*.js',
				],
				dest: './assets/js/main.js',
			},
			css: {
				src : [
					'./css/*.css',
				],
				dest: './assets/styles.css',
			}
		},
		uglify: {
			options: {
				mangle: true  // Use if you want the names of your functions and variables unchanged
			},
			js: {
				files: {
					'./js/main.js': './assets/js/main.js',
					'./public/js/modernizr.js': './js/modernizr.js',
				}
			},
		},
		sass: {
			dist: {
				files: {
					'./css/styles.css': './css/styles.scss'
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: './css/',
				src: ['*.css', '!*.min.css'],
				dest: './assets/css/',
				ext: '.min.css'
			}
		},
		watch: {
			//watching The Javascript files for changes and run the uglify function on theme
			watch_js_files: {
				files : ['js/build/*.js'],
				tasks : ['uglify']
			},
			// Watching For html Changes
			watch_html_files: {
				files : ['*.html']
			},
			// Watching For Sass Changes
			watch_sass_files: {
				files : ['sass/**/*.scss'],
				tasks : ['sass']
			},
			options: {
				'spawn': true,
				'interrupt': false,
				'debounceDelay': 500,
				'interval': 100,
				'event': 'all',
				'reload': false,
				'forever': true,
				'dateFormat': null,
				'atBegin': false,
				'livereload': 9000,
				'cwd': process.cwd(),
				'livereloadOnError': true
			}
		},
	});

	// Plugin loading
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-phpunit');

	// Task definition
	grunt.registerTask('default', ['watch']);

};
