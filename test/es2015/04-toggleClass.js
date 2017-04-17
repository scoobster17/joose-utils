// import the unit from joose-utils
import { toggleClass } from '../../js/es2015/joose-utils.js';

// define tests for the unit
const toggleClassTests = () => {

	const body = document.querySelector('body');

	describe('Testing joose-utils toggleClass()', () => {

		// set up the DOM for tests
		beforeAll(() => {
			body.removeAttribute('class');
		});

		it('adds a class when the class is not present', () => {
			toggleClass(body, 'toggled-class');
			expect(body.getAttribute('class')).toEqual('toggled-class');
		});

		it('removes a class when the class is present', () => {
			toggleClass(body, 'toggled-class');
			expect(body.getAttribute('class')).toEqual('');
		});

	});

};

export default toggleClassTests;