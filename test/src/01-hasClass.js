// import the unit, both directly and indirectly from joose-utils
import utils, { hasClass } from '../../src/joose-utils.js';

// define tests for the unit
const runHasClassTests = () => {

	// get DOM elements to interrogate
	const body = document.querySelector('body');

	describe('Testing joose-utils hasClass()', () => {

		// before all tests run, add a class to the BODY element
		beforeAll(() => {
			body.setAttribute('class', 'testClass');
		});

		it('returns true when an element has a class', () => {
			expect(hasClass(body, 'testClass')).toEqual(true);
		});

		it('returns false when an element does not have a class', () => {
			expect(hasClass(body, 'testClass2')).toEqual(false);
		});

		it('runs the same code when called directly and indirectly', () => {
			expect(hasClass).toEqual(utils.hasClass);
		});

	});

};

export default runHasClassTests;