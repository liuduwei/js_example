/*
  origin types(simple types): [
    Undefined, Null, Boolean, Number, String, Symbol
  ]
  complex type: object
*/

// ! typeof opreator
// will return types + function

let message = "some string";
console.log(typeof message); //"string"
console.log(typeof message); //"string"
console.log(typeof 95); // "number"
console.log(typeof null); // "object" reference empty object
console.log(typeof function () {}); // function

// ! undefined : undefined

let message;
console.log(message == undefined); // true

let message = undefined; // ! never do this
console.log(message == undefined); // true

// * diff with no statment

let message; // undefined

console.log(message); //undefined
console.log(age); // error

// * typeof this

let message; // ! suggest initialize when statement
console.log(typeof age); //undefined
console.log(typeof message); //undefined

// * simple way to detection undefine
let message;

if (message) {
  // won't execute
}

if (!message) {
  // will exectue
}

if (age) {
  // error
}

// ! NULL : null

// * logically null represent a null object pointer

let car = null; // ! suggest initialize object variable
console.log(typeof car); // "object"

if (car != null) {
  // car is reference of an object
}

// * undefined is drive from null
console.log(undefined == null); //true, will automatic transform type

// * null is a falsity

// ! Boolean[true, false]
// lowercase true, false

// * transform
let message = "hello world";
let messageasBoolean = Boolean(message);

/*   type        to-true       to-flase
     Boolean     true          false
     String      notempty       ""
     Number      notzero       0,NaN
     Object      anyObject     null
     undefined                 undefined
     */

// ! number
// * hexadecimal octal
let octalNum1 = 070; // 56
let octalNum2 = 079; // 79
let octalNum3 = 08; // 8 void in strict

let hexNum = 0xa; // +0 = -0

// * float

let floatNum1 = 1.1;
let floatNum2 = 0.1; // not recommnad

let floatNum3 = 1; // will transiform to int

let floatNum = 3.125e7;

if (a + b == 0.3) {
} // don't do this

// * Infinity  -Infinity

let result = Number.MAX_VALUE + Number.MIN_VALUE;
console.log(isFinite(result)); // Number.NEGSTIVE_INFINITY

// * NaN
// represent opration whitch will return number failed

console.log(0 / 0); // NaN
console.log(-0 / +0); // NaN
console.log(5 / 0); // Infinity
console.log(5 / -0); // -Infinity

console.log(NaN == NaN); //false

// * isNaN

console.log(isNaN(NaN)); // true
console.log(isNaN(10)); //false
console.log(isNaN("10")); // false
console.log(isNaN("blue")); //ture
console.log(isNaN(true)); //falase

// * transform to number
