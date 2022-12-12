// ! primitives packing

let s1 = "some test";
let s2 = s1.substring(2);
console.log(s1.color); // undefined;
// equal
let s1 = new String("some text");
let s2 = s1.substring(2);
s1 = null;
// primitives packing obejct only exsist in that line

// not recommand to reveal create primitives packing object;

let obj = new Object("some text");
console.log(obj instanceof String); // true;

let val = "25";
let number = Number(value);
console.log(typeof number); //number
let obj = new Number(value); //
console.log(typeof obj); //Objcet
// not recommand

// ! Boolean
let booleanObject = new Boolean(true); // never use this
// example
let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result); //true

let falseValue = false;
resuelt = falseValue && true;
console.log(result); // false

// ! Number

let numberObject = new Number(10); // not recommand
// * rewrite valueOf(), toLocalString(), toString()
// valueof() : primitive number
// toLocaleString(),toString() :to String
let num = 10;
console.log(num.toString());
10;
console.log(num.toString(2));
1010;
console.log(num.toString(10));
10;
console.log(num.toString(8));
12;

// * toFiexed()
console.log(numm.toFixed(2)); //"10.00"
let num1 = 10.005;
console.log(num.toFixed(2)); // '10.01'

// * toExponential()
let num = 10;
console.log(num.toExponential(1)); // "1.0e+1"
// * toPrecision()
let num = 99;
console.log(num.toPrecision(1)); // "1e+2"
console.log(num.toPrecision(2)); // "99"
console.log(num.toPrecision(3)); // "99.0"

// * ES6 isInteger()
console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(1.0)); //true
console.log(Number.isInteger(1.01)); //true
// * isSafeInteger()

// ! String
let stringObejct = new String("hello world");
// * valueof(), toLocalString(), toString()
// * length property
let stringValue = "hello world";
console.log(stringValue.length);

//TODO unicode

// * oprator methods
// * concat()
// return new string ,won't change origianl one
let stringValue = "hello";
let result = stringValue.concat("world"); // use +
console.log(result);
// * slice(), substr(), substring()
// both return substring, recipe 1 or 2 parameters

let stringValue = "hello world";
console.log(stringValue.slice(3)); //"lo world"
console.log(stringvalue.substring(3)); // "lo world"
console.log(stringValue.substr(3)); // "lo world"
console.log(stringValue.slice(3, 7)); //"lo w"
console.log(stringvalue.substring(3, 7)); // "lo world"
console.log(stringValue.substr(3, 7)); // "lo worl"

console.log(stringValue.slice(-3)); //"rld"
console.log(stringvalue.substring(-3)); // "hello world"
console.log(stringValue.substr(-3)); // "rld"
console.log(stringValue.slice(3, -4)); //"lo w"
console.log(stringvalue.substring(3, -4)); // "hel"
console.log(stringValue.substr(3, -7)); // "" empty
// * indexOf(), lastIndexOf()
let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7

let stringValue = "hello world";
console.log(stringValue.indexOf("o", 6)); //7
console.log(StirngValue.lastIndexOf("o", 6)); //4

let stringValue = "Lorem dolor sit amet, consetetur adipisicing elit";
let positions = new Array();
let pos = stringValue.indexOf("e");

while (pos > -1) {
  positions.push(pos);
  pos = stringvalue.indexOf("e", pos + 1);
}

// * startsWith() endsWith() Includes() ES6
let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("foo", 1)); // false

// * trim(), trimLeft(), trimRight()

let stringValue = "hello world";
let trimedStringValue = stringValue.trim();
console.log(stringValue); // " hello world"
console.log(trimedStringValue); // hello world

// * repeat()

let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");

// * padStart() padEnd()
let stringValue = "foo";
console.log(stringValue.padStart(6));
console.log(stringValue.padStart(9, "."));

// * @@iterator

let message = "abc";
let stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next()); // [value: "a", done: false]
console.log(stringIterator.next()); // [value: undefined, done: true]

for (const c of "abcde") {
  console.log(c);
}

let message = "abcde";

console.log([...message]);

// * toLowerCase(), toLocalLoswerCase(), upper

// * macth() // RegExp, search(), replace(), split()

let text = "cat bat sat fat";
let pattern = /.at/;
let matches = text.match(pattern);

console.log(matches.index); //0

// * localCompare()

// ! html method
