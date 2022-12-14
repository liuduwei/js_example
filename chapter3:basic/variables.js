"use strict";

// ! keyword to statement variables: var let const

var message; //undefined
var message = "hi";
message = 100; //legal but not recommend to change variables' type

// ! var

function test() {
  var message = "hi"; // local variable
  // destroy when call exit
}
test();
console.log(message); // error!

function test_withoutvar() {
  message = "hi"; // global variable
  // not recommend, ReferenceError in strict!
}
test();
console.log(message); // ReferenceError in strict!

// * define multi variables in single statement
var message = "hi",
  found = false,
  age = 30;

// * var statement promote(hoist)

function test_varPromote() {
  console.log(age);
  var age = 26;
}
test_varPromote(); // undefined

// * Above statements treate as:
function test_withoutvarPromote() {
  var age;
  console.log(age);
  age = 26;
}
test_withoutvarPromote(); // undefined

// * In addition can use var statement a same variable multi times

function test_varMultiTimes() {
  var age = 21;
  var age = 124;
  var age = 123;
  console.log(age);
}
test_varMultiTimes(); //123

// * let statement

// * diff1 with var: let's scope is block, var's scope is function

if (true) {
  var name = "Matt";
  console.log(name); //Matt
}
console.log(name); //Matt

if (true) {
  let age = 80;
  console.log(age); //Matt
}
console.log(age); //ReferenceError: age not define

// * note: block scope is subset of function scope, var's limit still work in let

// * let don't allow redundancy statement in same scope

var name;
var name;

let age;
let age; // SyntaxError : Identifer age had been statement

// * nest statement is allow

let ageAlt = 100;
console.log(age); // 100
if (true) {
  let age = 20;
  console.log(age); // 20
}

// * diff2 with var: let cont hoist its scope, will case "temporal dead zone", will throw ReferenceEror

// * diff3 with var: var which let statmented in global scope won't be the object window.attribute, but var will

var name = "Mark";
console.log(window.name);
let age = "20"; // in global scope, avoid SyntaxError bu sure same page can't statement same var with let
console.log(window.let); // undefined

// * for loop with var,let

for (var i = 0; i < 5; ++i) {
  // loop logic
}
// console.log(i); // 5

for (let i = 0; i < 5; ++i) {
  // loop logic
}
// console.log(i); // ReferenceError

for (var i = 0; i < 5; ++i) {
  // loop logic
  setTimeout(() => console.log(i), 0); // 5,5,5,5,5
}

for (let i = 0; i < 5; ++i) {
  // loop logic
  setTimeout(() => console.log(i), 0); // 1,2,3,4,5
} //js engine will statement a new varirables for every loop, all style of for loop

// ! const

// * same as let, diff1: must initialize while statement

const age = 26;
age = 36; // TypeError

// * const strict is only useful in the reference of variable which const point to,so can modify const.attribute

const person = {};
person.name = "Matt"; // legal

// * error in statement loop variables

for (const i = 0; i < 10; i++) {} //Typeerror

// * trick

let i = 0;
for (const j = 7; i < 5; i++) {
  console.log(j); // 7 7 7 7 7
}

// * useful in for-in or for-of

for (const key in { a: 1, b: 2 }) {
  console.log(key); //a, b
}

for (const value of [1, 2, 3, 4, 5]) {
  console.log(value); //1, 2, ...
}

// ! statement style and best parctise
// * dont use var;
// * first const than let;
