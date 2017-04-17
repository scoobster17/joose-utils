// import the unit from joose-utils
import { hasClass } from '../../js/es2015/joose-utils.js';

// define tests for the unit
const hasClassTests = () => {

	const body = document.querySelector('body');

	describe('Testing joose-utils hasClass()', () => {

		beforeAll(() => {
			body.setAttribute('class', 'testClass');
		});

		it('returns true when an element has a class', () => {
			expect(hasClass(body, 'testClass')).toEqual(true);
		});

		it('returns false when an element does not have a class', () => {
			expect(hasClass(body, 'testClass2')).toEqual(false);
		});

	});

};

export default hasClassTests;