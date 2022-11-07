"use strict";

// for (var i = 0; i <= 5; ++i) {
//   setTimeout(() => console.log(i), 0);
// }

// let car = null;
// console.log(car);

// let a = 6;
// let b = 8;

// function simpleTag(strings, avalExpression, bvalExpression, sumExpression) {
//   console.log(strings);
//   console.log(avalExpression);
//   console.log(bvalExpression);
//   console.log(sumExpression);

//   return `foobar`;
// }

// let untaggedResult = `${a} + ${b} = ${a + b}`;
// let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;

// function simpleTag1(strings, ...expressions) {
//   console.log(strings);

//   for (const expression of expressions) {
//     console.log(expression);
//   }

//   return "sfel";
// }

// let taggedResult1 = simpleTag1`${a} + ${b} = ${a + b}`;

// function printRaw(strings) {
//   console.log("Actual characters:");
//   for (const string of strings) {
//     console.log(string);
//   }

//   console.log("Escaped characters:");
//   for (const rawString of strings.raw) {
//     console.log(rawString);
//   }
// }

// printRaw`\u00A9 \n`;
// let s1 = Symbol("foo"),
//   s2 = Symbol("bar"),
//   s3 = Symbol("baz"),
//   s4 = Symbol("qux");

// let o = {
//   [s1]: "foo val",
//   b: "b",
// };

// Object.defineProperty(o, s2, {
//   value: "bar val",
//   enumerable: true, // if unset con't output in node.js
//   writable: false,
// });
// console.log(Object.getOwnPropertyNames(o));
// console.log(Object.getOwnPropertySymbols(o));
// console.log(Object.getOwnPropertyDescriptors(o));
// // console.log(Object.getOwnPropertyDescriptor(o));
// console.log(Reflect.ownKeys(o));
// console.log(o);
// o[s2] = "bar val";
// o.s3 = "s3";
// console.log(o[s2]);
// console.log(o.s3);
// console.log(o); //{symbol(foo):foo val}
// console.log(typeof o);
// console.log(b);
// let b = {
//   id: 123,
// };

// const person = {};
// person.name = "Matt"; // legal
// console.log(person);

// // const obj1 = {};
// Object.defineProperty(obj1, name, {
//   value: "liu",
// });
// console.log(obj1.name);
// obj1.name = "liu";
// console.log(obj1);

// ? class Foo {
//   async *[Symbol.asyncIterator]() {}
// }

// let f = new Foo();
// console.log(f[Symbol.asyncIterator]()); // AsyncGenerator {<suspended>}
// console.log(f);

// class Emitter {
//   constructor(max) {
//     this.max = max;
//     this.asyncIdx = 0;
//   }

//   async *[Symbol.asyncIterator]() {
//     while (this.asyncIdx < this.max) {
//       yield new Promise((resolve) => resolve(this.asyncIdx++));
//     }
//   }
// }

// async function asyncCount() {
//   let emitter = new Emitter(5);

//   for await (const x of emitter) {
//     console.log(x);
//   }
// }

// asyncCount();

// let initial = ["foo"];

// let array = ["bar"];

// console.log(array[Symbol.isConcatSpreadable]); // undefined
// console.log(initial.concat(array)); // ['foo', 'bar']
// console.log(typeof array);
// array[Symbol.isConcatSpreadable] = false;
// console.log(initial.concat(array)); // ['foo', 'array(1)']

// let arrayLikeObject = { length: 1, 0: "baz" };

// console.log(arrayLikeObject[Symbol.isConcatSpreadable]); //undefined
// console.log(initial.concat(arrayLikeObject)); // ['foo', {...}]
// arrayLikeObject[Symbol.isConcatSpreadable] = true;
// console.log(initial.concat(arrayLikeObject)); // ['foo', 'bza']

// let otherObject = new Set().add("qux");
// console.log(otherObject.isConcatSpreadable); //undefined
// console.log(initial.concat(otherObject)); // ['foo', Set(1)]
// otherObject.isConcatSpreadable = true;
// console.log(initial.concat(otherObject)); // ['foo']
// console.log(RegExp.prototype[Symbol.match]);

class Bar extends Array {}
class Baz extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

let bar = new Bar();
console.log(bar instanceof Bar);
console.log(bar instanceof Array);
console.log(bar);
bar = bar.concat(bar);
console.log(bar);
console.log(bar instanceof Bar);
console.log(bar instanceof Array);

let baz = new Baz();
console.log(baz instanceof Baz);
console.log(baz instanceof Array);
console.log(baz);
baz = baz.concat(baz);
console.log(baz);
console.log(baz instanceof Baz);
console.log(baz instanceof Array);
