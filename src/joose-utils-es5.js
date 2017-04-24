import utils from './joose-utils';

window.joose = window.joose || {};
window.joose.utils = {
	...window.joose.utils,
	hasClass: utils.hasClass,
	addClass: utils.addClass,
	removeClass: utils.removeClass,
	toggleClass: utils.toggleClass,
	convertStringToObject: utils.convertStringToObject,
	convertObjectToString: utils.convertObjectToString
} || utils;