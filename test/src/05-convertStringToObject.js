// import the unit, both directly and indirectly from joose-utils
import utils, { convertStringToObject } from '../../src/joose-utils.js';

// define tests for the unit
const runConvertStringToObjectTests = () => {

	// set a test string to interrogate
	const string = 'something1=a&something2=b';
	const string2 = 'something1=a;something2=b';
	const string3 = 'something1-a;something2-b';
	const string4 = 'something1-a|something2-b';

	describe('Testing joose-utils convertStringToObject()', () => {

		it('Converts a string into an object', () => {
			expect(typeof convertStringToObject(string)).toEqual('object');
		});

		it('Fails when a string is not passed', () => {
			expect(convertStringToObject({ something: 'something' })).toEqual(false);
			expect(convertStringToObject([1,2,3])).toEqual(false);
			expect(convertStringToObject(645)).toEqual(false);
			expect(convertStringToObject(null)).toEqual(false);
			expect(convertStringToObject(undefined)).toEqual(false);
		});

		it('Has the intended number of properties using the default array separator (and the default property separator)', () => {
			expect(Object.keys(convertStringToObject(string)).length)
				.toEqual(string.split('&').length);
		});

		it('Has the intended number of properties using a custom array separator (and the default property separator)', () => {
			expect(Object.keys(convertStringToObject(string2, ';')).length)
				.toEqual(string2.split(';').length);
		});

		/*
			MAY BE ADDED WHEN Object.values() ADDED TO (ES2017?)

		it('Has the correct number of values using the default property separator (and the default array separator)', () => {
			expect(Object.values(convertStringToObject(string)).length)
				.toEqual(string.split(',').length);
		});

		it('Has the correct number of values using a custom property separator (and the default array separator)', () => {
			expect(Object.values(convertStringToObject(string3, undefined, '-')).length)
				.toEqual(string3.split(',').length);
		});

		*/
		it('Has the correct number of properties (and values post-ES2017) using a custom array separator and a custom property separator', () => {
			expect(Object.keys(convertStringToObject(string4, '|', '-')).length)
				.toEqual(string4.split('|').length);
			/*
				MAY BE ADDED WHEN Object.values() ADDED TO (ES2017?)

			expect(Object.values(convertStringToObject(string4, '|', '-')).length)
				.toEqual(string4.split('|').length);
			*/
		});

		it('Has properties that match the intended properties when using the default array separator', () => {
			expect(Object.keys(convertStringToObject(string)))
				.toEqual(
					string.split('&').map((element, index, array) => {
						return element.replace(/\=[^\=]+$/,'');
					})
				);
		});

		it('Has properties that match the intended properties when using a custom array separator', () => {
			expect(Object.keys(convertStringToObject(string2, ';')))
				.toEqual(
					string2.split(';').map((element, index, array) => {
						return element.replace(/\=[^\=]+/,'');
					})
				);
		});

		/*
				MAY BE ADDED WHEN Object.values() ADDED TO (ES2017?)

		// has values that match the intended values when using the default array separator

		// has values that match the intended values when using a custom prop

		*/

		it('Fails when the array separator and the property separator are the same', () => {
			expect(convertStringToObject(string, '&', '&')).toEqual(false);
		});

		it('Runs the same code when called directly and indirectly', () => {
			expect(convertStringToObject).toEqual(utils.convertStringToObject);
		});

	});

};

export default runConvertStringToObjectTests;