/**
 * fmttxt.js - a small library to format plain text
 * @author: R. S. Doiel, <rsdoiel@gmail.com>
 *
 * copyright (c) 2013 R. S. Doiel
 * All rights reserved.
 * Released under the BSD two  clause License
 * See: http://opensource.org/licenses/BSD-2-Clause
 */
/*jslint browser: true, node: true, maxlen: 80, indent: 4 */
var FMTTXT = FMTTXT || {};

// Generate padding from character and length
FMTTXT.padding = function (chr, maxwidth) {
  var fill = [], i;

  for (i = 0; i < maxwidth; i += 1) {
    fill.push(chr);
  }
  return fill.join("");
};


// Left justify text
FMTTXT.leftJustify = function (text, maxwidth, padding) {
  var chr = padding || " ";

  if (text.length >= maxwidth) {
    return text.substr(0, maxwidth);
  }

  return text.concat(this.padding(chr, maxwidth)).substr(0, maxwidth);
};

// Right justify text
FMTTXT.rightJustify = function (text, maxwidth, padding) {
  var chr = padding || " ";

  if (text.length >= maxwidth) {
    return text.substr(0, maxwidth);
  }

  return this.padding(chr, maxwidth).concat(text).substr((maxwidth * -1));
};

// Center text
FMTTXT.center = function (text, maxwidth, padding) {
  var chr = padding || " ",
      half_width = Math.floor(maxwidth / 2),
      fill = this.padding(chr, half_width),
      pos = Math.floor(maxwidth / 4); 

  if (text.length >= maxwidth) {
    return text.substr(0, maxwidth);
  }

  return [fill, text, fill].join("").substr(pos, maxwidth);
};

if (typeof exports === "object") {
  Object.keys(FMTTXT).forEach(function (property) {
       exports[property] = FMTTXT[property];
  });;
}