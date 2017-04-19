// import the unit, both directly and indirectly from joose-utils
import utils, { convertObjectToString } from '../../js/es2015/joose-utils.js';

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

		// make sure the string contains the right number of properties
		//
		// make sure the correct array seperator is used
		//
		// make sure the correct properties seperator is used
		//
		// make sure all the properties match those supplied
		//
		// make sure all the values match those supplied

		it('Runs the same code when called directly and indirectly', () => {
			expect(convertObjectToString).toEqual(utils.convertObjectToString);
		});

	});

};

export default runConvertObjectToStringTests;