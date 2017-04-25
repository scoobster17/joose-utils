// import the unit, both directly and indirectly from joose-utils
import utils, { toggleClass } from '../../src/joose-utils.js';

// define tests for the unit
const runToggleClassTests = () => {

	// get DOM elements to interrogate
	const body = document.querySelector('body');

	describe('Testing joose-utils toggleClass()', () => {

		// before all tests run, remove any classes from the BODY element
		beforeAll(() => {
			body.removeAttribute('class');
		});

		it('Adds a class when the class is not present', () => {
			toggleClass(body, 'toggled-class');
			expect(body.getAttribute('class')).toEqual('toggled-class');
		});

		it('Removes a class when the class is present', () => {
			toggleClass(body, 'toggled-class');
			expect(body.getAttribute('class')).toEqual('');
		});

		it('Runs the same code when called directly and indirectly', () => {
			expect(toggleClass).toEqual(utils.toggleClass);
		});

	});

};

export default runToggleClassTests;