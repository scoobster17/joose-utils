!function r(t,e,n){function i(u,s){if(!e[u]){if(!t[u]){var a="function"==typeof require&&require;if(!s&&a)return a(u,!0);if(o)return o(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var f=e[u]={exports:{}};t[u][0].call(f.exports,function(r){var e=t[u][1][r];return i(e||r)},f,f.exports,r,t,e,n)}return e[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}({1:[function(r,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=void 0,i=function(r,t){if(!r||!t)return!1;if(t=""+t,null!==(n=r.getAttribute("class"))){var e=new RegExp("(^| )("+t+")( |$)");return null!==n.match(e)}return n="",!1},o=function(r,t){if(i(r,t))return!1;var e=null===n||""===n?"":" ";r.setAttribute("class",n+e+t)},u=function(r,t){if(!i(r,t))return!1;n=n.split(" ");for(var e=n.length,o=0;o<e;o++)if(n[o]===t){n.splice(o,1);break}n=n.join(" "),r.setAttribute("class",n)},s=function(r,t){i(r,t)?u(r,t):o(r,t)},a=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"=";if(t==e)return!1;for(var n={},i=r.split(t),o=i.length,u=0;u<o;u++){var s=i[u].split(e);n[s[0]]=s[1]}return n},l=function(r,t,e){var n="";for(var i in r)n+=i+e+r[i]+t+" ";return n.substring(0,n.length-2)},f={hasClass:i,addClass:o,removeClass:u,toggleClass:s,convertStringToObject:a,convertObjectToString:l};e.hasClass=i,e.addClass=o,e.removeClass=u,e.toggleClass=s,e.convertStringToObject=a,e.convertObjectToString=l,e.default=f},{}]},{},[1]);