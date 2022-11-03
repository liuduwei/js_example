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

// * Number() any -> int

// Boolean: [true -> 1, false -> 0];
// null -> 0;
// undefined -> NaN;

// String : +- decimal -> decimal ignore +-
//          1.1 -> correspond float ,igonore zero before
//          hexadecimal -> "0xf" -> hexadecimal
//          '', "" => 0
//          other -> NaN
// Object: valueOf() -> rule in string, if is NaN toString -> rule in string

let num1 = Number("hello wrod!"); //NaN
let num2 = Number(""); //0
let num3 = Number("000011"); //11
let num4 = Number(true); //1

// if want to get int priority consider parseInt()

// * parseInt()
// more focus on is string contain number mode

let num1 = parseInt("1234blue"); //1234
let num2 = parseInt(""); //NaN
let num3 = parseInt("0xA"); // 10
let num3 = parseInt(22.5); //22
let num4 = parseInt(70); //70
let num5 = pareseInt(0xf); //15
//second parameter

let num = pareseInt("0xAF", 16); //175
let num2 = pareseInt("AF", 16); //175
let num3 = pareseInt("AF"); //NaN

let num1 = pareseInt("10", 2);
let num2 = pareseInt("10", 8);
let num3 = pareseInt("10", 10);
let num5 = pareseInt("10", 16);
// should alaways pass second paramaters to pareseInt

// * pareseFloat()
// void when encounter . twice
// only parse decimal

let num1 = parseFloat("1234Bule"); // 1234
let num2 = parseFloat("0xA"); // 0
let num3 = parseFloat("22.5"); // 22.5
let num4 = parseFloat("22.34.5"); // 22.34
let num5 = parseFloat("080.8"); // 80.8
let num6 = parseFloat("3.125e7"); // 31250000

// ! string

let firstName = "John";
let lastName = "jacob";
let fullName = `Jingleheimerchmidt`;
// "" and '' no diff
//  \n \t \b \r \f \\ \' \" \` \xnn \unnn;
let text = "This is the letter sigma: \u03a3";
console.log(text.length); //28

// * feature
// all string is immutable

let lang = "java";
lang = lang + "script";
// allocate 10 characters space and fill up "java" and "script" ,
// and destory original "java" and "script"

// * tostring()

let age = 11;
let ageAsString = age.toString(); // "11"
let found = true;
let foundAsString = found.toString(); //string 'true'

// tostring() can recive a base number to output number

let num = 10;
console.log(num.toString()); // '10'
console.log(num.toString(2)); // '10'
console.log(num.toString(8)); // '12'
console.log(num.toString(10)); // '10'
console.log(num.toString(16)); // 'a'

// * string()

// null undefined has no toStinrg()
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;

console.log(String(value1)); //"10"
console.log(String(value2)); //"true"
console.log(String(value3)); //"null"
console.log(String(value4)); //"undefined"

// * template
let myMultiLineString = "first line \n second line";
let myMultiLineTemplateLiteral = `first line
second line`;

console.log(myMultilineString === myMultiLineTemplateLiteral); // true

let pageHTML = `
<div>
...
</div>
`; //reserve space and \n

// * template interpolate variables
let value = 5;
let exponent = "second";

let interpolatedstring = value + "t0 the" + exponent + "power" + value * value;

let interpolatedTemplate = `${value} to the ${exponent} power is ${
  value * value
}`;
// all interpolate value use toString()
console.log(`Hello, ${`world`}`);
let foo = { toString: () => "World" };
console.log(`hello, ${foo}`); // hello, World!
// can invoking function and method
function capitalize(word) {
  return `${wrold[0].toUppercase()}${word.slice(1)}`;
}
// can inerpolate self
let value = "";
function append() {
  value = `${value}abc`;
  console.log(value);
}

append(); // abc
append(); // abcabc

// can define tag function
let a = 6;
let b = 8;

function simpleTag(strings, avalExpression, bvalExpression, sumExpression) {
  console.log(strings);
  console.log(avalExpression);
  console.log(bvalExpression);
  console.log(sumExpression);

  return `foobar`;
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;

function simpleTag1(strings, ...expressions) {
  console.log(strings);

  for (const expression of expressions) {
    console.log(expression);
  }

  return "sfel";
}
let taggedResult1 = simpleTag1`${a} + ${b} = ${a + b}`;

// * ziptag

function zipTag(strings, ...expressions) {
  return (
    strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join("")
  );
}

// * raw string

console.log(`\u00A9`); //
console.log(String.raw`\u00A9`); //

console.log(`firstline\nsecondline`);
console.log(String.raw`fir\nsecond`);

// can't work with actually line feed

console.log(`first line
second line`);

// with tagFunction
function printRaw(strings) {
  console.log("Actual characters:");
  for (const string of strings) {
    console.log(string);
  }

  console.log("Escaped characters:");
  for (const rawString of string.raw) {
    console.log(rawString);
  }
}

// ! symbol

let sym = Symbol();
console.log(typeof sym); //symbol

// * introduction a string
let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();

let fooSymbol = Symbol("foo");
let otherFooSymbol = Symbol("foo");

console.log(genericSymbol == otherGenericSymbol); //false
console.log(fooSymbol == otherFooSymbol); //false

//  * no literal syntax, only to create Symbol() as object.attribute can mkae sure never cover existing attribute
console.log(genericSymbol); //Symbol()
console.log(fooSymbol); //Symbol(foo)

// * important can't use new Symbol()
let mySymbol = new Symbol(); //Typeerror: Symbol is not a constructor
// use if u really want to

let mySymbol = Symbol();
let myWrappedSymbol = Object(mySymbol);
console.log(typeof myWraapedSymbol); //object

// * global to reuse
let fooGlobalSymbol = Symbol.for("foo");
let localSymbol = Symbol("foo");
let otherFooGlobalSymbol = Sumbol.for("foo"); // reuse

console.log(fooGlobalSymbol === otherFooGlobalSymbol); //true
console.log(fooGlobalSymbol === localSymbol); //false

// * all value deliver to Symbol.for will transform to string
// * the key in global registry also be desciebed as symbol()

let emptyGlobalSymbol = Symbol.for();
console.log(emptyGlobalSymbol); // Symbol(undefined)
// * query key
console.log(Symbol.keyFor(fooGlobalSymbol)); // foo
// if query object isn't global key will return undefined

// * deed as attributes
let s1 = Symbol("foo"),
  s2 = Symbol("bar"),
  s3 = Symbol("baz"),
  s4 = Symbol("qux");

let o = {
  [s1]: "foo val",
};

console.log(o); //{symbol(foo):foo val}
Object.defineProperty(o, s2, {
  value: "bar val",
  writable: false,
  enumerable: true,
}); // enumerable unset will case this property output is empty
console.log(o);

Object.defineProperties(o, {
  [s3]: { value: "baz val", enumerable: true },
  [s4]: { value: "qux val", enumerable: true },
});

console.log(Object.getOwnPropertyNames(o)); // nomal attribute
console.log(Object.getOwnPropertySymbols(o)); //symbol attribute
console.log(Object.getOwnPropertyDescriptors(o)); // all attribute
// console.log(Object.getOwnPropertyDescriptor(o));
console.log(Reflect.ownKeys(o)); // all keys
// * should save symbol property if not should through out
let s = {
  [Symbol("foo")]: "foo val",
  [Symbol("bar")]: "bar val",
};

console.log(o);

let barSymbol = Object.getOwnPropertySymbols(o).find((Symbol) =>
  Symbol.toString().match(/bar/)
);
console.log(barSymbol);

// * well-known symbol

// ? Symol.asyncIterator => AsynIterator invoking by for-await-of

class Foo {
  async *[Symbol.asyncIterator]() {}
}

let f = new Foo();
console.log(f[Symbol.asyncIterator]()); // AsyncGenerator {<suspended>}

class Emitter {
  constructor(max) {
    this.max = max;
    this.asyncIdx = 0;
  }

  async *[Symbol.asyncIterator]() {
    while (this.asyncIdx < this.max) {
      yield new Promise((resolve) => resolve(this.asyncIdx++));
    }
  }
}

async function asyncCount() {
  let emitter = new Emitter(5);

  for await (const x of emitter) {
    console.log(x);
  }
}

asyncCount();

// * Symbol.hasInstance
// represent a function which decide a constructor object if accept a object is a instanse of itself
// invoking by instanceof

function Foo() {
  let f = new Foo();
  console.log(f instanceof Foo); // true
}

function Foo() {
  let f = new Foo();
  console.log(Foo[Symbol.hasInstance](f)); // true
} // define at function prototype, so all function and class can call

// * redefine

class Bar {}

class Baz extends Bar {
  static [Symbol.hasInstance]() {
    return false;
  }
}

let c = new Baz();
console.log(Bar[Symbol.hasInstance](b)); // true
console.log(b instanceof Bar); // true
console.log(Baz[Symbol.hasInstance](b)); //false
console.log(b instanceof Bza); //false

// * symbol.isConcatSpreadable
// a boolean true: object use Array.prototype.concat() planishing element

// * Array.prototype.contact()

let initial = ["foo"];

let array = ["bar"];
// array object will planishing to origin array bt default, false or falsity will case the whole object add to origin

console.log(array[Symbol.isConcatSpreadable]); // undefined
console.log(initial.concat(array)); // ['foo', 'bar']
array[Symbol.isConcatSpreadable] = false;
console.log(initial.concat(array)); // ['foo', 'array(1)']

let arrayLikeObject = { length: 1, 0: "baz" };
// arrayLike Object will add to origin by default, true or trueValuse will planishing to origin

console.log(arrayLikeObject[Symbol.isConcatSpreadable]); //undefined
console.log(initial.concat(arrayLikeObject)); // ['foo', {...}]
arrayLikeObject[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(arrayLikeObject)); // ['foo', 'bza']

let otherObject = new Set().add("qux");
// arrayLike Object will add to origin by default, true or trueValuse will ignore

console.log(otherObject.isConcatSpreadable); //undefined
console.log(initial.concat(otherObejct)); // ['foo', Set(1)]
otherObject.isConcatSpreadable = true;
console.log(initial.concat(otherObject)); // ['foo']

// * symbol.iterator
// a method return obejct default iterator , invoking bt for-of
// represent realize generator API function

class Foo {
  *[Symbol.iterator]() {}
}

let f = new Foo();
console.log(f[Symbol.iterator]()); //Genarator {(suspended)}

class Emitter {
  constructor(max) {
    this.max = max;
    this.idx = 0;
  }

  *[Symbol.iterator]() {
    while (this.idx < this.max) {
      yield this.idx++;
    }
  }
}

function count() {
  let emitter = Emitter(5);

  for (const x of emitter) {
    console.log(x);
  }
}
count(); //1, 2, 3, 4, 5

// * Symbol.match
// a regular expression method which use regular expression to match string, invoking by String.prototype.match()
// this method is define in RegExp prototype in default

console.log(RegExp.prototype[Symbol.match]);

console.log("foobar".match(/bar/));
// paramaters path in will automacticlly transform to RegExp object, can redefine

class FooMatcher {
  static [Symbol.match](target) {
    return target.includes("foo");
  }
}
console.log("foobar".match(FooMatcher)); //true

class StringMatcher {
  constructor(str) {
    this.str = str;
  }

  [Symbol.match](target) {
    return taget.includes(this.str);
  }
}

console.log("foobar".match(new StringMatcher("foo"))); //true

// * Symbol.replace
// slimilar as match, but have two parameters

class FooReplacer {
  static [Symbol.replace](target, replacement) {
    return target.split("foo").join(replacement);
  }
}

// * Symbol.search
// slimilar as match, return the index

// ? Symbol.species
// a function as a constructor function to create derive object
// use Symbol.species define static getter, can cover prototype's define which create instance

class Bar extends Array {}
class Baz extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

let bar = new Bar();
console.log(bar instanceof Bar);
console.log(bar instanceof Array);
bar = bar.concat(bar);
console.log(bar instanceof Bar);
console.log(bar instanceof Array);

let baz = new Baz();
console.log(baz instanceof Baz);
console.log(baz instanceof Array);
baz = baz.concat(baz);
console.log(baz instanceof Baz);
console.log(baz instanceof Array);

// * Symbol.split
// slimilar with match, but have two parameters
// split string when match given regular expression

//TODO Symbol.toPrimitive
//TODO Symbol.toStringTag
//TODO Symbol.unscopables

// ! object
