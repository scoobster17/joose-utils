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
var argv = require('yargs').argv;

/* Variables ---------------------------------------------------------------- */

var appName = 'joose-utils';
var fileNames = {
	test: {
		es2015: {
			src: 'es2015-test',
			dist: 'es2015-test'
		},
		es5: {
			src: 'es5-test',
			dist: 'es5-test'
		}
	}
}
var filePaths = {
	allFilesInAllFolders: '**/*',
	js: {
		src: 'es2015/js/',
		dist: 'es5/js/'
	},
	test: {
		es2015: {
			src: 'test/es2015/js/src/',
			dist: 'test/es2015/js/dist'
		}
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
gulp.task('transpile-to-es5', function() {

	var input;
	var outputFileName;
	var outputDir;

	// set config based on command params
	switch (argv.test) {

		case 'es2015':
			console.log('\nRunning es2015 test transpilation...');
			input = './' + filePaths.test.es2015.src + fileNames.test.es2015.src + fileExtensions.js.src;
			outputFileName = fileNames.test.es2015.dist + fileExtensions.js.dist;
			outputDir = './' + filePaths.test.es2015.dist;
			break;

		default:
			console.log('\nRunning es2015 -> es5 transpilation...');
			input = './' + filePaths.js.src + appName + fileExtensions.js.src;
			outputFileName = appName + fileExtensions.js.dist;
			outputDir = './' + filePaths.js.dist;
			break;
	}

	console.log('Testing type: ', argv.test);
	console.log('Input File: ', input);
	console.log('Output File: ', outputDir + '/' + outputFileName + '\n');

	// transpile code to ES5
	browserify(input)
		.transform('babelify')
		.bundle()
		.pipe(source(outputFileName))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(outputDir));
});
