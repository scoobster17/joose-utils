!function t(e,r,o){function n(s,l){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!l&&u)return u(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[s]={exports:{}};e[s][0].call(f.exports,function(t){var r=e[s][1][t];return n(r||t)},f,f.exports,t,e,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(t,e,r){"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n=t("./joose-utils"),i=function(t){return t&&t.__esModule?t:{default:t}}(n);window.joose=window.joose||{},window.joose.utils=o({},window.joose.utils,{hasClass:i.default.hasClass,addClass:i.default.addClass,removeClass:i.default.removeClass,toggleClass:i.default.toggleClass,convertStringToObject:i.default.convertStringToObject,convertObjectToString:i.default.convertObjectToString})||i.default},{"./joose-utils":2}],2:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=void 0,i={ARRAY_SEPARATOR:"&",PROPERTY_SEPARATOR:"="},s=function(t,e){if(t&&e){if(e=""+e,null!==(n=t.getAttribute("class"))){var r=new RegExp("(^| )("+e+")( |$)");return null!==n.match(r)}return n="",!1}},l=function(t,e){if(!t||!e)return!1;if(s(t,e))return!1;var r=null===n||""===n?"":" ";t.setAttribute("class",n+r+e)},u=function(t,e){if(!t||!e)return!1;if(!s(t,e))return!1;n=n.split(" ");for(var r=n.length,o=0;o<r;o++)if(n[o]===e){n.splice(o,1);break}n=n.join(" "),t.setAttribute("class",n)},a=function(t,e){if(!t||!e)return!1;s(t,e)?u(t,e):l(t,e)},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.ARRAY_SEPARATOR,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.PROPERTY_SEPARATOR;if("string"!=typeof t||e==r)return!1;for(var o={},n=t.split(e),s=n.length,l=0;l<s;l++){var u=n[l].split(r);o[u[0]]=u[1]}return o},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.ARRAY_SEPARATOR,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.PROPERTY_SEPARATOR;if("object"!==(void 0===t?"undefined":o(t))||"[object Object]"!==Object.prototype.toString.call(t)||"string"!=typeof e||!e.length||"string"!=typeof r||!r.length)return!1;var n="";for(var s in t)n+=s+r+t[s]+e+" ";return n.substring(0,n.length-2)},v={hasClass:s,addClass:l,removeClass:u,toggleClass:a,convertStringToObject:f,convertObjectToString:c};r.hasClass=s,r.addClass=l,r.removeClass=u,r.toggleClass=a,r.convertStringToObject=f,r.convertObjectToString=c,r.default=v},{}]},{},[1]);