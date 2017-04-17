// import the unit from joose-utils
import { removeClass } from '../../js/es2015/joose-utils.js';

// define tests for the unit
const removeClassTests = () => {

	const body = document.querySelector('body');

	describe('Testing joose-utils removeClass()', () => {

		// set up the DOM for tests
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

	});

};

export default removeClassTests;