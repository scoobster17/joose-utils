"use strict";

// private shared variables
let classList;

/*
    CHECK IF AN ELEMENT HAS A CLASS
    ----------------------------------------------------------------------------
    @param ELEM             [element]   the element to check the class of
    @param CLASSTOCHECK     [string]    the class to check for
*/
const hasClass = function(elem, classToCheck) {

    // check arguments have been supplied
    if (!elem || !classToCheck) return false;

    // ensure the class to check is a string, converting it if not
    classToCheck = '' + classToCheck;

    // get the elem's classes
    classList = elem.getAttribute('class');

    // if the element has a class attribute
    if (classList !== null) {

        const classRegex = new RegExp('(^| )(' + classToCheck + ')( |$)');

        // check for the class
        return classList.match(classRegex) !== null;

    // otherwise the element has no classes
    } else {

        classList = "";
        return false;

    }
}

/*
    ADD A CLASS TO AN ELEMENT IF IT DOESN'T HAVE IT ALREADY
    ----------------------------------------------------------------------------
    @param ELEM             [element]   the element to add the class to
    @param CLASSTOADD       [string]    the class to add
*/
const addClass = function(elem, classToAdd) {

    // check the elem doesn't already have the class and cancel if it does
    if (hasClass(elem, classToAdd)) return false;

    // we only want to add a leading space if there are other classes
    const leadingSpace = (classList === null || classList === "") ? '' : ' ';

    // add the class to the end of the class list found in hasClass function
    elem.setAttribute('class', (classList + leadingSpace + classToAdd));
};

/*
    REMOVE A CLASS FROM AN ELEMENT IF IT HAS THE CLASS
    ----------------------------------------------------------------------------
    @param ELEM             [element]   the element to remove the class from
    @param CLASSTOREMOVE    [string]    the class to remove
*/
const removeClass = function(elem, classToRemove) {

    // check the elem has the class and cancel if it doesn't
    if (!hasClass(elem, classToRemove)) return false;

    // properly split the classes so we remove the correct one, otherwise we
    // might remove part of a longer class
    classList = classList.split(' ');

    // get the number of classes for performance in the loop
    const noOfClasses = classList.length;

    // search for and remove the class from the class list
    for (let i = 0; i < noOfClasses; i++) {
        if (classList[i] === classToRemove) {
            classList.splice(i, 1);
            break;
        }
    }

    // join the class list back up into a string
    classList = classList.join(' ');

    // set the class attribute to the list without the defined class
    elem.setAttribute('class', classList);
};

/*
    ADD THE CLASS IF THE ELEMENT DOESN'T HAVE IT, IF IT DOES, REMOVE IT
    ----------------------------------------------------------------------------
    @param ELEM             [element]   the element to toggle the class on
    @param CLASSTOTOGGLE    [string]    the class to toggle
*/
const toggleClass = function(elem, classToToggle) {

    // check whether the element has the class
    if (hasClass(elem, classToToggle)) {

        // remove the class as it is already present
        removeClass(elem, classToToggle);

    } else {

        // add the class as not already applied
        addClass(elem, classToToggle);

    }
}

/*
    CONVERT A NON JSON FRIENDLY STRING TO AN OBJECT
    ----------------------------------------------------------------------------
    @param string               [string]
    @param arraySeparator       [string]
    @param propertySeparator    [string]
*/
const convertStringToObject = function(string, arraySeparator = ',', propertySeparator = '=') {

    // cannot have the same separator, as we won't be able to distinguish
    // between properties and values
    if (arraySeparator == propertySeparator) return false;

    let object = {};

    // split the string into property and value strings and get length for performance
    const array = string.split(arraySeparator);
    const arrayLength = array.length;

    // loop through the split strings to separate the property names from the values
    for (let i = 0; i < arrayLength; i++) {

        const objectDetails = array[i].split(propertySeparator);

        // assign property and value to object
        object[objectDetails[0]] = objectDetails[1];

    }

    return object;
};

/*
    CONVERT AN OBJECT TO A NON JSON FRIENDLY STRING
    ----------------------------------------------------------------------------
    @param object               [object]
    @param arraySeparator       [string]
    @param propertySeparator    [string]
*/
const convertObjectToString = function(object, arraySeparator, propertySeparator) {

    /*if (
        typeof object !== 'object' ||
        !(typeof arraySeparator === 'string' && arraySeparator.length) ||
        !(typeof propertySeparator === 'string' && propertySeparator.length)
    ) {
        return false;
    }*/

    let string = '';

    for (let property in object) {
        string += (property + propertySeparator + object[property] + arraySeparator + ' ');
    }

    return string.substring(0, string.length-2);

};

/*
	EXPORTS
    Each method can be imported individually, or they can all be imported in the
    form of the 'utils' object
 */
const utils = {
	hasClass,
	addClass,
    removeClass,
    toggleClass,
    convertStringToObject,
    convertObjectToString
};
export {
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    convertStringToObject,
    convertObjectToString,
    utils as default
};