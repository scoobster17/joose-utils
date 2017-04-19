// import the unit, both directly and indirectly from joose-utils
import utils, { addClass } from '../../js/es2015/joose-utils.js';

// define tests for the unit
const runAddClassTests = () => {

	// get DOM elements to interrogate
	const body = document.querySelector('body');

	describe('Testing joose-utils addClass()', () => {

		// before all tests run, remove any classes from the BODY element
		beforeAll(() => {
			body.removeAttribute('class');
		});

		it('adds a class to an element when no classes', () => {
			addClass(body, 'addedClass');
			expect(body.getAttribute('class')).toEqual('addedClass');
		});

		it('adds a class to an element when it already a class', () => {
			addClass(body, 'addedClass2');
			expect(body.getAttribute('class')).toEqual('addedClass addedClass2');
		});

		it('does not add a class to an element when it already that class', () => {
			addClass(body, 'addedClass');
			expect(body.getAttribute('class')).toEqual('addedClass addedClass2');
		});

		it('runs the same code when called directly and indirectly', () => {
			expect(addClass).toEqual(utils.addClass);
		});

	});

};

export default runAddClassTests;