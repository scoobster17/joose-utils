# Joose Utilities Component

A collection of lightweight, minimal utility helper functions. This component belongs to the Joose component library, but can be used completely independently.

Please see [joose](https://github.com/scoobster17/joose) for the whole component library.

## Installation

To install this component independently using [npm](https://www.npmjs.com/package/joose-utils)

`npm install joose-utils`

## Usage

### ES2015+

As of version 2, Joose Utils methods can be imported either individually or collectively:

`import utils from 'joose-utils';`

`import { hasClass, addClass } from 'joose-utils';`

### ES5

Simply add the JavaScript onto your page either using a script tag or concatenating/bundling with your own JavaScript:

`<script type="text/javascript" src="/path/to/node_modules/joose-utils/dist/joose-utils-es5.js"></script>`

You are then good to go using the `joose.utils` object available in the global namespace:

```
joose.utils.hasClass(elem, class);
joose.utils.toggleClass(elem, class);
```

## Methods available

* Class Handling
  * `hasClass(elem, class)` Check if an element has a class
  * `addClass(elem, class)` Add a class to an element
  * `removeClass(elem, class)` Remove a class from an element
  * `toggleClass(elem, class)` Toggle whether an element has a class or not
* Conversions
  * `convertStringToObject(string, arraySeparator, propertySeparator)` Convert a string to an object
    (used in [joose-storage](https://github.com/scoobster17/joose-storage) for cookies)
  * `convertObjectToString(object, arraySeparator, propertySeparator)` Convert an object to a string