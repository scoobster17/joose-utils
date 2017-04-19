// import the unit, both directly and indirectly from joose-utils
import utils, { removeClass } from '../../js/es2015/joose-utils.js';

// define tests for the unit
const runRemoveClassTests = () => {

	// get DOM elements to interrogate
	const body = document.querySelector('body');

	describe('Testing joose-utils removeClass()', () => {

		// before each test runs, add some classes to the BODY element
		beforeEach(() => {
			body.setAttribute('class', 'testClass3 test testClass4');
		});

		it('removes a class when first in class list', () => {
			removeClass(body, 'testClass3');
			expect(body.getAttribute('class')).toEqual('test testClass4');
		});

		it('removes a class when not first in class list', () => {
			removeClass(body, 'testClass4');
			expect(body.getAttribute('class')).toEqual('testClass3 test');
		});

		it('removes a class, but does not affect other similar classes containing same string', () => {
			removeClass(body, 'test');
			expect(body.getAttribute('class')).toEqual('testClass3 testClass4');
		});

		it('runs the same code when called directly and indirectly', () => {
			expect(removeClass).toEqual(utils.removeClass);
		});

	});

};

export default runRemoveClassTests;