// import the unit from joose-utils
import { hasClass } from '../../js/es2015/joose-utils.js';

// define tests for the unit
const hasClassTests = () => {

	describe('Testing joose-utils hasClass()', () => {

		beforeAll(() => {

			// set up the DOM for tests
			var body = document.querySelector('body');
			body.setAttribute('class', 'testClass');

		});

		it('returns true when an element has a class', () => {
			expect(hasClass(document.querySelector('body'), 'testClass')).toEqual(true);
		});

		it('returns false when an element does not have a class', () => {
			expect(hasClass(document.querySelector('body'), 'testClass2')).toEqual(false);
		});

	});

};

export default hasClassTests;