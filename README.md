# Joose Utilities Component

A collection of lightweight, minimal utility helper functions. This component belongs to the Joose component library, but can be used completely independently.

Please see [joose](https://github.com/scoobster17/joose) for the whole component library.

## Installation

To install this component independenty using [bower](http://bower.io/search/?q=joose-utils) use the following command:

`bower install joose-utils`

To install this component independently using [npm](https://www.npmjs.com/package/joose-utils)

`npm install joose-utils`

## Usage

Simply add the JavaScript onto your page either using a script tag or concatenating with your own JavaScript and you are good to go using the `joose.utils` object.

Current methods:

  * Class Handling

    * Check if an element has a class  
      `joose.utils.hasClass(elem, class);`

    * Add a class to an element  
      `joose.utils.addClass(elem, class);`

    * Remove a class from an element  
      `joose.utils.removeClass(elem, class);`

    * Toggle whether an element has a class or not  
      `joose.utils.toggleClass(elem, class);`
  
  * Conversions

    * Convert a string to an object  
      (used in [joose-storage](https://github.com/scoobster17/joose-storage) for cookies)  
      `joose.utils.convertStringToObject(string, arraySeparator, propertySeparator);`

    * Convert an object to a string  
      `joose.utils.convertObjectToString(object, arraySeparator, propertySeparator);`