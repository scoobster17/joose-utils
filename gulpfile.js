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

// Testing
var karmaServer = require('karma').Server;

// Utilites
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var argv = require('yargs').argv;
var open = require('gulp-open');
var clean = require('gulp-clean');

/* Variables ---------------------------------------------------------------- */

var appName = 'joose-utils';
var filePaths = {
	allFilesInAllFolders: '**/*',
	js: {
		src: 'src/',
		dist: 'dist/'
	},
	test: {
		src: 'test/src/',
		dist: 'test/dist/',
		report: './test/report/'
	}
};
var fileNames = {
	test: {
		src: 'spec',
		dist: 'spec',
		report: 'unit-test-report'
	}
}
var fileExtensions = {
	js:  {
		src: '.js',
		dist: '.js'
	},
	test: {
		report: '.html'
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
			input = './' + filePaths.test.src + fileNames.test.src + fileExtensions.js.src;
			outputFileName = fileNames.test.dist + fileExtensions.js.dist;
			outputDir = './' + filePaths.test.dist;
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
	console.log('Output File: ', outputDir + outputFileName + '\n');

	// transpile code to ES5
	browserify(input)
		.transform('babelify')
		.bundle()
		.pipe(source(outputFileName))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(outputDir));
});

/******************************************************************************/

/* TESTING */

/**
 * Task to fire up Karma Testing Server and run unit tests
 */
gulp.task('run-unit-tests', ['delete-unit-test-report', 'transpile-to-es5'], function(done) {
	return new karmaServer({
		basePath: '../',
		configFile: require('path').resolve('test/karma.conf.js'),
		singleRun: true
	}, function() {
		done(); // console stacktrace if not in anon func
	}).start();
});

/**
 * Task to simply open Jasmine HTML unit test report in default browser
 */
gulp.task('open-unit-test-report', function() {
	gulp.src(filePaths.test.report + fileNames.report + fileExtensions.test.report)
		.pipe(open());
});

/**
 * Task to open Jasmine HTML report after running unit tests
 */
gulp.task('run-unit-tests-and-open-report', ['run-unit-tests'], function() {
	gulp.src(filePaths.test.report + fileNames.report + fileExtensions.test.report)
		.pipe(open());
});

/**
 * Task to delete unit test reports
 */
gulp.task('delete-unit-test-report', function() {
	return gulp.src(filePaths.test.report + fileNames.report + fileExtensions.test.report)
		.pipe(clean());
});