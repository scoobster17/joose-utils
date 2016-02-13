;var joose = window.joose || {};
joose.utils = (function(js) {
    
    "use strict";

    // private shared variables
    var classList;

    /*
        CHECK IF AN ELEMENT HAS A CLASS
        @param ELEM             [element]   the element to check the class of
        @param CLASSTOCHECK     [string]    the class to check for
    */
    var hasClass = function(elem, classToCheck) {

        // check arguments have been supplied
        if (!elem || !classToCheck) return false;

        // ensure the class to check is a string, converting it if not
        var classToCheck = '' + classToCheck;

        // get the elem's classes
        classList = elem.getAttribute('class');

        // if the element has a class attribute
        if (classList !== null) {

            // setup and run the check for the class
            var classRegex = new RegExp('(^| )(' + classToCheck + ')( |$)');
            var classMatch = classList.match(classRegex);
            return (classMatch !== null);

        // otherwise the element has no classes
        } else {
            classList = "";
            return false;
        }
    };

    /*
        ADD A CLASS TO AN ELEMENT IF IT DOESN'T HAVE IT ALREADY
        @param ELEM             [element]   the element to add the class to
        @param CLASSTOADD       [string]    the class to add
    */
    var addClass = function(elem, classToAdd) {

        // check the elem doesn't already have the class and cancel if it does
        if (hasClass(elem, classToAdd)) return false;

        // we only want to add a leading space if there are no classes
        var leadingSpace = (classList === null || classList === "") ? '' : ' ';

        // add the class to the end of the class list found in hasClass function
        elem.setAttribute('class', (classList + leadingSpace + classToAdd));
    };

    /*
        REMOVE A CLASS FROM AN ELEMENT IF IT HAS THE CLASS
        @param ELEM             [element]   the element to remove the class from
        @param CLASSTOREMOVE    [string]    the class to remove
    */
    var removeClass = function(elem, classToRemove) {

        // check the elem has the class and cancel if it doesn't
        if (!hasClass(elem, classToRemove)) return false;

        // properly split the classes so we remove the correct one, otherwise we might remove part of a longer class
        classList = classList.split(' ');

        // get the number of classes for performance in the loop
        var noOfClasses = classList.length;

        // search for and remove the class from the class list
        for (var i=0; i<noOfClasses; i++) {
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
        @param ELEM             [element]   the element to toggle the class on
        @param CLASSTOTOGGLE    [string]    the class to toggle
    */
    var toggleClass = function(elem, classToToggle) {

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
    */
    var convertStringToObject = function(string, arraySeparator, propertySeparator) {

        // set defaults if no separators supplied
        if (!arraySeparator) arraySeparator = ',';
        if (!propertySeparator) propertySeparator = '=';
        
        var object = {};

        // split the string into property and value strings and get length for performance
        var array = string.split(arraySeparator);
        var arrayLength = array.length;

        // loop through the split strings to separate the property names from the values
        for (var i=0; i<arrayLength; i++) {
            var objectDetails = array[i].split(propertySeparator);

            // assign property and value to object
            object[objectDetails[0]] = objectDetails[1];
        }

        return object;
    };

    /*
        CONVERT AN OBJECT TO A NON JSON FRIENDLY STRING
    */
    var convertObjectToString = function(object, arraySeparator, propertySeparator) {

        var string = '';

        for (var property in object) {
            string += (property + propertySeparator + object[property] + arraySeparator + ' ');
        }

        return string.substring(0, string.length-2);
    };

    // public methods
    return {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        convertStringToObject: convertStringToObject,
        convertObjectToString: convertObjectToString
    }

})(joose);