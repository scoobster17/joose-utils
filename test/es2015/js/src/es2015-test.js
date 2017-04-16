import utils from '../../../../es2015/js/joose-utils.js';

window.joose = window.joose || {};
window.joose.tests = window.joose.tests || {};
window.joose.tests.utils = (function() {

	var elems = {};

	var bindElems = function() {
		elems.h1 = document.querySelector('h1');
		elems.test = {};
		elems.test.hasClass = document.getElementById('hasClassResult');
	}

	var runTests = function() {
		elems.test.hasClass.innerHTML = utils.hasClass(elems.h1, 'h1');
	};

	var init = function() {
		bindElems();
		runTests();
	}

	// public methods
	return {
		init
	}

})();
window.joose.tests.utils.init();