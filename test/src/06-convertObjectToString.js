// import the unit, both directly and indirectly from joose-utils
import utils, { convertObjectToString } from '../../src/joose-utils.js';

// define tests for the unit
const runConvertObjectToStringTests = () => {

	// set a test object to interrogate
	const object = {
		something1: 'a',
		something2: 'b'
	};

	describe('Testing joose-utils convertObjectToString()', () => {

		it('Converts an object into a string', () => {
			expect(typeof convertObjectToString(object)).toEqual('string');
		});

		it('Fails when an object is not passed', () => {
			expect(convertObjectToString('string')).toEqual(false);
			expect(convertObjectToString([1,2,3])).toEqual(false);
			expect(convertObjectToString(645)).toEqual(false);
			expect(convertObjectToString(null)).toEqual(false);
			expect(convertObjectToString(undefined)).toEqual(false);
		});

		it('Make sure the string contains the right number of properties', () => {
			expect(convertObjectToString(object).split('&').length).toEqual(2);
		});

		it('Make sure the correct default array separator is used', () => {
			expect(convertObjectToString(object).indexOf('&')).not.toEqual(-1);
		});

		it('Make sure the correct custom array separator is used', () => {
			expect(convertObjectToString(object, '|').indexOf('|')).not.toEqual(-1);
		});

		it('Make sure the correct default property separator is used', () => {
			expect(convertObjectToString(object).indexOf('=')).not.toEqual(-1);
		});

		it('Make sure the correct custom property separator is used', () => {
			expect(convertObjectToString(object, undefined, '-').indexOf('-'))
				.not.toEqual(-1);
		});

		it('Has properties that match the intended properties when using the default array separator', () => {
			expect(
				convertObjectToString(object).split('&').map(
					(element, index, array) => {
						return element.replace(/\=[^\=]+$/,'');
					}
				)
			)
			.toEqual(Object.keys(object));
		});

		it('Has properties that match the intended properties when using a custom array separator', () => {
			expect(
				convertObjectToString(object, '|').split('|').map(
					(element, index, array) => {
						return element.replace(/\=[^\=]+$/,'');
					}
				)
			)
			.toEqual(Object.keys(object));
		});

		/*
				MAY BE ADDED WHEN Object.values() ADDED TO (ES2017?)

		// has values that match the intended values when using the default array separator

		// has values that match the intended values when using a custom prop

		*/

		it('Runs the same code when called directly and indirectly', () => {
			expect(convertObjectToString).toEqual(utils.convertObjectToString);
		});

	});

};

export default runConvertObjectToStringTests;