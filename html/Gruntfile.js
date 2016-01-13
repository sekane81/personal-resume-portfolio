module.exports = function(grunt) {

  //Initializing the configuration object
	 grunt.initConfig({

	 // Task configuration
	 copy: {
		modernizr: {
		  src: './bower_components/modernizr/modernizr.js',
		  dest: './js/modernizr.js'
		},
		bootstrap: {
		  src:'./bower_components/bootstrap/dist/css/bootstrap.min.css',
		  dest:'./css/bootstrap.min.css'
		},
		bootstrapjs: {
		  src:'./bower_components/bootstrap/dist/js/bootstrap.min.js',
		  dest:'./js/bootstrap.min.js'
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
		  dest: './js/main.js',
		},
		css: {
		  src : [
			 './css/*.css',
		  ],
		  dest: './css/styles.css',
		}
	 },
	 uglify: {
		options: {
		  mangle: true  // Use if you want the names of your functions and variables unchanged
		},
		js: {
		  files: {
			 './js/main.js': './js/main.js',
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
		  dest: './css/',
		  ext: '.min.css'
		}
	 },
	 phpunit: {
		  classes: {
		  },
		  options: {
		  }
	 },
	 watch: {
		  js: {
			 files: [
				//watched files
				'./js/*.js'
				],
			 tasks: ['concat:js','uglify:js'],     //tasks to run
			 options: {
				livereload: true                    //reloads the browser
			 }
		  },
		}
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
  grunt.registerTask('default', ['watch']);grunt --

};
