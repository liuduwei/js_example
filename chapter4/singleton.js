// ! Global
// * isNaN(), isFinite(), parseInt() parseFloat()

// ? encodeURI(), encodeURIComponent()
// ? decodeURI(), decodeURIComponent()

// * eval()

// * Global arrtribute
/**
 * undefined
 * NaN
 * infinity
 * Object()
 * Array()
 * Function()
 * Bollean()
 * String()
 * Number()
 * Date()
 * RegExp()
 * Symbol()
 * Error()
 * EvalError()
 * RangeError()
 * ReferenceError()
 * SyntaxError()
 * TypeError()
 * URLError
 */

// ! window // not only include
var color = "red";

function sayColor() {
  console.log(window.color);
}
window.sayColor();

let global = (function () {
  return this;
})();

// ! Math
// * atttributes
// Math.(E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2)

// * min(), max()
// * ceil(), floor(), round(), fround()

// * random()
function selectFrom(lowerValue, upperValue) {
  let choies = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choies + lowerValue);
}
