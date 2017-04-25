// import the unit, both directly and indirectly from joose-utils
import utils, { removeClass } from '../../src/joose-utils.js';

// define tests for the unit
const runRemoveClassTests = () => {

	// get DOM elements to interrogate
	const body = document.querySelector('body');

	describe('Testing joose-utils removeClass()', () => {

		// before each test runs, add some classes to the BODY element
		beforeEach(() => {
			body.setAttribute('class', 'testClass3 test testClass4');
		});

		it('Removes a class when first in class list', () => {
			removeClass(body, 'testClass3');
			expect(body.getAttribute('class')).toEqual('test testClass4');
		});

		it('Removes a class when not first in class list', () => {
			removeClass(body, 'testClass4');
			expect(body.getAttribute('class')).toEqual('testClass3 test');
		});

		it('Removes a class, but does not affect other similar classes containing same string', () => {
			removeClass(body, 'test');
			expect(body.getAttribute('class')).toEqual('testClass3 testClass4');
		});

		it('Runs the same code when called directly and indirectly', () => {
			expect(removeClass).toEqual(utils.removeClass);
		});

	});

};

export default runRemoveClassTests;