/*
	Joose Utils Gulpfile
	Author: @Scoobter17 Phil Gibbins
 */

'use strict';

/******************************************************************************/

/* GULP CONFIG */

/* App Dependencies --------------------------------------------------------- */

// Gulp
var gulp = require('gulp');

// Processing
var browserify = require('browserify');

// Utilites
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

/* Variables ---------------------------------------------------------------- */

var appName = 'joose-utils';
var filePaths = {
	allFilesInAllFolders: '**/*',
	js: {
		src: 'src/es2015/js/',
		dist: 'src/es5/js/'
	}
};
var fileExtensions = {
	js:  {
		src: '.js',
		dist: '.js'
	}
};

/******************************************************************************/

/* SCRIPTS */

/**
 * Task to transpile ES2015 code to ES5
 */
gulp.task('js', function() {
	return browserify('./' + filePaths.js.src + appName + fileExtensions.js.src)
		.transform('babelify')
		.bundle()
		.pipe(source(appName + fileExtensions.js.dist))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./' + filePaths.js.dist));
});