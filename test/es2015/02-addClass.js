// import the unit from joose-utils
import { addClass } from '../../js/es2015/joose-utils.js';

// define tests for the unit
const addClassTests = () => {

	const body = document.querySelector('body');

	describe('Testing joose-utils addClass()', () => {

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

	});

};

export default addClassTests;