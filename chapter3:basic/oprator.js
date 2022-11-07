// * unary oprator

// ! increace decreace
// i++, ++i, i--, --i
// diff take effection before after
let age = 22;
++age; // --age
// side effection

let age = 22;
let anotherAge = --age + 2;
console.log(age); //21
console.log(anotherAge); //23
// * use in not number object

// to string -> number -> make effection
// to String -> NaN -> number
// bool false ->0 -> make effection -> number
// bool true -> 1 -> make effection -> number
// object -> valueOf() -> if NaN -> toString, if number -> make effection

let s1 = "2";
let s2 = "z";
let b = false;
let f = 1.1;
let o = {
  valueof() {
    return -1;
  },
};

s1++; // 3
s2++; // NaN
b++; //1
f--; //0.10000009
o--; //-2

// ! sign +/ -
// * use in number, can use to transform types too
// * add
let num = -25;
num = +num; //-25

// if apply in not number, will apply
// will execute kind of Number() transform like:
// false true -> 0, 1
// string  ->(some specil rule)
// object ->(valueOf()/toString())

let s1 = "01";
let s2 = "1.1";
let s3 = "z";
let b = "false";
let f = "1.1";
let o = {
  valueof() {
    return -1;
  },
};

s1 = +s1; //1
s2 = +s2; //1.1
s3 = +s3; //NaN
b = +b; //0
f = +f; // * 1.1
o = +o; // -1

// * minus

s1 = +s1; //-1
s2 = +s2; //-1.1
s3 = +s3; //NaN
b = +b; //0
f = +f; // * -1.1
o = +o; // 1

// ! bit opreator

// int have symbol, sign bit
// + int

let num1 = 18;
console.log(num.toString(2));
("-10010");
// if apply bit opration to none number, use Number() first

// * ~ Not
// get nagetive and minus 1

let num1 = 25; //000...11001
let num2 = ~num1; //111...00110;

// * & and

let result = 25 & 3;
console.log(result); //1

// * | or;

let result = 25 | 3;
console.log(result); //27;

// * ^ Xor

let result = 25 ^ 3;
console.log(result); //26;

// * left shift <<
let oldValue = 2;
let newValue = oldValue << 5; //64 decimal

// * sign right shift >>
// invserse operation to <<
let oldValue = 64;
let newValue = oldValue >> 5;

// * no sign right shift >>>
// for positive same as >>>

// for nagetive
let oldValue = -64;
let newValue = oldValue >>> 5; //134217726

// ! bool opration

// * ! logic Not
// transform to Boolean first, and nagation
// false {
// Object, noEmpty string, notZero(Infinity)
// }
// true {
//    empty string, zero, null, undefined,
// }

// to Boolean !!, same as Boolean()

// * && logic And
// no strict to type, short out

// not logic
// object && *: return *
// (*true) && object: if true return object
// object && object: return second
// null/NaN/undefined: return ..

// * || logic or
// no strict to type, short out

let myObject = preferedObject || backupObject;

// ! multi opration

// * multi *
// have NaN return NaN
// infinity * 0 = NaN
// if not number use Number()

// * div /
// inlegal return NaN

// * %

// ! es7 pow **
console.log(Math.pow(3, 2));
console.log(3 ** 2);
// * **=
let squared = 3;
squared **= 2;
9;

// ! add/minus

// * add
// Infinity + -Infinity return NaN

// -0 + +0 = +0
// have string:
/*
  both string: second add to first
  only one: another to string and add together
  have object: invoking toString() and apply string rule
  for undefined,null : String() get 'undefined', 'null'
 */

let result1 = 5 + 5;
let result2 = 5 + "5";
console.log(result1);
console.log(result2); // '55'

// attention

let num1 = 5;
let num2 = 10;
let message = "The sum of 5 and 10 is" + num1 + num2;
console.log(message); //... is 510;
// correct
let message = "The sum of 5 and 10 is" + (num1 + num2);

// * minus

// rule:
/**
 * have NaN: NaN
 * +0 - -0: -0;
 * -0 - 0-: +0;
 * have any not number: Number():
 * have object: 1. valueOf() invoking, none 2.toString()
 *
 */

let result = 5 - true;
let result2 = NaN - 1;
let result4 = 5 - "";
let result5 = 5 - "2";
let result6 = 5 - null;

// ! relation oprator

// * < > <= >=

//string: compare letter decode one by one
// number: to number
// have object: valueof(), toString()
// boolean : Number()

let result = "Brick" < "alphabet"; // true;

let result = "Brick".toLowerCase() < "alphabet".toLocaleLowerCase();

let result = "a" < 3; //false
let result1 = NaN < 3; // false
let resutl2 = NaN >= 3; // false

// ! equal oprator

// * == !=
// force transform type first

/** rule:
 * boolean => to number
 * string,number => to number
 * object,no object => valueof()
 * object, object => is a same object
 *
 * null == undefined
 * null,undefined can't transform to other
 * have NaN: return false
 *
 *  * NaN != NaN true
 */

// * === !==n
// * null === undefined false

// ! condition oparator

variable = boolean_expression ? true_value : false_value;

// ! assignment oparator
// *=, /=, %=, -=, <<=, >>=, >>>=

// !comma operator
let num = 1,
  num2 = 2,
  num3 = 3;
