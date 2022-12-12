"use strict";

// ! create

// * new, construct

let colors = new Array();
let colors = new Array(20);
let colors = new Array("red", "blue", "green");
// can ignore array

// * literal
let colors = ["red", "blue"];

// * new in ES6
// * from, like array -> array instance, iterable
console.log(Array.from("Matt")); // ["m", "a"...];
const m = new Map().set(1, 2).set(3, 4);

const s = new Set().add(1).add(2).add(3);

console.log(Array.from(m)); // [[1, 2],[3, 4]]
console.log(Array.from(s)); // [[1, 2],[3, 4]]

const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);

console.log(a1); //[1,2,3,4]
alert(a1 === a2); // false

const iter = {
  *[symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  },
};

console.log(Array.from(iter));
[1, 2, 3, 4];

const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4, // must have
};

const arrayLikeObject1 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
};

console.log(Array.from(arrayLikeObject)); //[1, 2, 3, 4];

// * other parameters
const a2 = Array.from(a1, (x) => x ** 2);
const a3 = Array.from(
  a1,
  function (x) {
    return x ** this.exponent;
  },
  { exponent: 2 }
);

// ! Array.of()
Array.of(1, 2, 3, 4); //arguments to arrays

// ! empty array // not recommand
// use undefined alternative

const options = [, , , , , ,]; //length 5, [,,,,,,]
// undefined in ES6

const options2 = [1, , , , 5];

for (const option of options2) {
  console.log(option === undefined);
}

// !indexes
// * length property,
let colors = ["red", "blue", "green"];
colors.length = 2;
alert(colors[2]); //undefined
colors[colors.length] = "black"; // add element

colors[99] = "cao"; // 3-98 undefined

// ! detect array()

//* if in single pgae,one global ec

if (value instanceof Array) {
  //
}

if (Array.isArray(value)) {
  // recommand
}

// ! iterator function

// * ES6 keys(), values(), entries()
// keys() indexes iterator
// values() element iterator
// entries() index/element itrator

const akeys = Array.from(a.keys()); // [0, 1, 2, 3]
const avalues = Array.from(a.value());
["foo", "bar", "baz", "qux"];
const aEntries = Array.from(a.entries());

for (const [idx, element] of a.entries()) {
  alert(idx);
  alert(element);
}

// ! fill and copy

// * ES6, fill(),[), copyWithin()
const zeroes = [0, 0, 0, 0];

zeroes.fill(5); // 55555
zeroes.fill(-1, 3); //index >=3

zeroes.fill(-1, 3, 5); //index >=3 < 5
zeroes.fill(8, -4, -1); // -4 + zeroes.length = 4
// ignore negative, or illegal and index reverse

//TODO  copyWithin()
let ints,
  reset = () => (ints = [0, 1, 2, 3, 4]);

// ! transform
// * toLocalString(), toString(), valueOf()

let colors = ["red", "blue", "green"];
alert(colors.toString()); // red,blue,green
alert(colors.valueOf()); // red,blue,green
// invoke toString in background
// toLocalString invoke localString

// ! stack
// * push pop

// ! queen
// * push shift
// * unshift pop

// * sort
// * reverse(), sort()
// retrun reference
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values);

values.sort(); // String()
function compare(value1, value2) {
  if (value1 < value2) {
    return -1; //1 before 2
  } else if (value1 > value2) {
    return 1; // 1 behind 2
  } else {
    return 0;
  }
}
values.sort(compare);

values.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// all value
function compare1(value1, value2) {
  return value2 - value1;
}

// ! oprator
// * concat(), rewrite，Symbol,isConcatSpraeadable
// ?nochange

// * slice(start,end);
// ?nochange

// * splice()
// ?change
// delete splice(0, 2);
// insert splice(start, number, insert ele...);
// replace splice(start, number, insert ele...);

// ! search location
// * ===, indexOf(), lastIndexOf(), includes()

// * assert find(), findIndex()

const people = [
  {
    name: "matt",
    age: 37,
  },

  {
    name: "nico",
    age: 23,
  },
];

people.find((element, index, array) => element.age < 28);
// {name:,age:}
people.findIndex((element, index, array) => element.age < 28);
// 0

// !iteration
// ?nochange

// * every(item,index, array), some()
// * forEach()
// * map(),filter()

// ! merge
// * reduce(), reduceRight()
// * reduce(function(prev,cur,index,array), start);

//TODO typed array

// * ArrayBuffer
// base unit reference by all typed array and view

const buf = new ArrayBuffer(16);
buf.byteLength; //16

const buf1 = new ArrayBuffer(16);
const buf2 = buf1.slice(4, 12);
buf2.byteLength; //8

// * read and write through view
// * DateView
// * typedArray
