/**
 * Karma Testing config file
 */
module.exports = function(config) {
    config.set({

        basePath: '',

        browsers: ['PhantomJS'],

        files: [
            'test/es5/*.js'
        ],

        frameworks: ['jasmine'],

        reporters: ['spec', 'html'],
        htmlReporter: {
            outputDir: 'test/report/',
            namedFiles: true,
            focusOnFailures: false,
            reportName: 'unit-test-report',
            pageTitle: 'Joose Utils Automated Tests'
        },

        // define reporters, port, logLevel, browsers etc.
    });
};
