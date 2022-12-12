"use strict";
// ! value property

let game = {};

Object.defineProperty(game, "name", {
  configurable: false,
  value: "cod4",
});
console.log(game);

const obj1 = new Object();
obj1.name = "liu";
obj1.age = "20";
obj1.sayName = function () {
  console.log(this.name);
};

Object.defineProperty(obj1, "name", { writable: false, value: "s1mple" });
obj1.sayName();
obj1.sayName();

// const home = {
//   key_: "123",
//   bubble: true,
// };

// Object.defineProperty(home, "key", {
//   get() {
//     return this.key_;
//   },
//   set(newValue) {
//     this.key_ = newValue;
//   },
// });
// * equal

// ! accesser property

const home = {};
Object.defineProperties(home, {
  key_: {
    writable: true,
    value: 1,
  },
  bulb: {
    writable: true,
    value: false,
  },
  key: {
    get: function () {
      this.bulb = this.bulb ? false : true;
      return this.key_;
    },
    set: function (newValue) {
      this.key_ = newValue;
    },
  },
  // key: {
  //   get() {
  //     this.bulb = this.bulb ? false : true;
  //     return this.key_;
  //   },
  //   set(newValue) {
  //     this.key_ = newValue;
  //   },
  // },
  // key: {
  //   get a() {
  //     this.bulb = this.bulb ? false : true;
  //     return this.key_;
  //   },
  //   set a(sef) {
  //     this.key_ = newValue;
  //   },
  // },
});

// ! readObjectProperty

let descriptor = Object.getOwnPropertyDescriptor(home, "key_");
let descriptors = Object.getOwnPropertyDescriptors(home);

// merge, mixin
let dest = {
  set a(newValue) {
    console.log(`invoke ${newValue}`);
  },
};

let src = {
  get a() {
    console.log("invoke");
    return 1;
  },
};

Object.assign(dest, src);

let dest1 = {},
  src1 = { a: 1 };

Object.assign(dest1, src1);

Object.is();

// * [], set(), name

// !deconstruction

// let { name: personName, age: personAge } = person;
// let { name, age } = person;
// * {} must be object

// ! create
// * factory

function craeteObjct(name, age) {
  let obj = new Object();
  obj.name = name;
  obj.age = age;
  return obj;
}

let a = craeteObjct("sf", 123);
// * object identifer

// * constructor function

function Computer(manufactur, memory, core) {
  (this.manufactur = manufactur), (this.memory = memory), (this.core = core);
}

let dell = new Computer("dell", "16g", "12");
let alienware = new Computer("dell", "16g", "12");
// [[Property]] = constructor's Property
dell instanceof Computer;

// not define

let Headphone = function (brand, noiseCancel) {
  this.brand = brand;
  this.noiseCancel = noiseCancel;
  this.bluetoothPair = function () {
    console.log("bluetooth pairing");
  };
};

// ?diffenrence between constructor function and nomoal functoin in invoke way
// * call(), apply()

// * prototype

// * literal

let o1 = { name: "o1" };
let o2 = new Object({ name: "o2" });

// * constructor

let M = function (name) {
  this.name = name;
};
let o3 = new M("o3");

// * Object.create()

let p = { name: "p" };
let o4 = Object.create(p);

let Person = function () {};
Person.prototype.name = "nico";
Person.prototype.weight = 70;

let person1 = new Person();
let person2 = new Person();

let biped = {
  legs: 2,
};

let people = Object.create(biped);
console.log(people);

// * in--instance or prototype opreater and hasOwnProperty()-- only instance
// * return boolean

// * loop attribute: getOwnpropertyNames()--all attribute, Obejct.keys() => instance property(iterable)

// * nums sequence// for-in and Obejct.keys()--nosequence,Object.getOwnPropertyNames()、Object.getOwnPropertySymbols(), Object.assign()

// * Object literate,Object.values(), Object.entries()
