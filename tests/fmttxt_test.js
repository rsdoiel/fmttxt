/**
 * fmttxt_test.js - Test the simple methods of fmttxt.js.
 * @author: R. S. Doiel, <rsdoiel@gmail.com>
 *
 * copyright (c) 2013 R. S. Doiel
 * All rights reserved.
 * Released under the BSD two  clause License
 * See: http://opensource.org/licenses/BSD-2-Clause
 */
/*jslint browser: true, node: true, maxlen: 80, indent: 4 */
var assert = require("assert"),
    fmt = require("../fmttxt"),
    src = "test",
    result = "",
    expected = "";

assert.ok(fmt);
assert.equal(typeof fmt.padding, "function", "padding function missing");
assert.equal(typeof fmt.left, "function", "left justify function missing");
assert.equal(typeof fmt.right, "function", "right justify function missing");
assert.equal(typeof fmt.center, "function", "center function missing");

src = '+';
result = fmt.padding(src, 3);
expected = '+++';
assert.equal(result, expected);

src = "<br />";
result = fmt.padding(src, 3);
expected = "<br /><br /><br />";
assert.equal(result, expected);

src = "Hello World";
result = fmt.left(src, 24, "+");
expected = ["Hello World", fmt.padding("+", 24)].join("").substr(0,24);
assert.equal(result.length, 24);
assert.equal(result, expected, result + " != " + expected);


src = "Hello World";
result = fmt.right(src, 24, "+");
expected = [fmt.padding("+", 24), "Hello World"].join("").substr(-24);
assert.equal(result.length, 24);
assert.equal(result, expected, result + " != " + expected);


src = "Hello World";
result = fmt.center(src, 24, "+");
expected = [fmt.padding("+", 12), "Hello World", fmt.padding("+", 12)].join("").substr(6,24);
assert.equal(result.length, 24);
assert.equal(result, expected, result + " != " + expected);

// Bugs found by building examples.
src = "Date";
result = fmt.center(src, 24, "+");
expected = "++++++++++Date++++++++++";
assert.equal(expected.length, 24);
assert.equal(result.length, 24);
assert.equal(result, expected, "\n\t" + result + "\n\t" + expected);

console.log("Success!");
assert.equal(result, expected, result + " != " + expected);


