// key/value

// * ES6

// * baseic API

const m = new Map();

const m1 = new Map([
  ["key1", "v1"],
  ["key2", "v2"],
  ["key3", "v3"],
]);
m1.size; //3

const m2 = new Map({
  [Symbol.iterator]: function* () {
    yield ["key1", "v1"];
    yield ["key2", "v2"];
    yield ["key3", "v3"];
  },
});
m2.size; // 3

// * set(); get(),has(); size; delete(),clera;
const m3 = new Map([[]]); // undefined => undefined

const m = new Map();
m.has("firstname"); // false
m.get("firstName"); //undefined
m.size; //0

m.set("firstName", "Matt").set("lastName", "Frisbie");
// chain

m.has("firstname"); // true
m.get("firstName"); // Matt
m.size; //2

m.delete("firstName");

m.has("firstname"); // false
m.get("lastName"); // true
m.size; //1

m.clear(); //claer all
// * object can only use number,string,symbol use key
// * map can use all

// * sameValueZero

const m = new Map();

const functionKey = function () {};
const symbolKey = Symbol();
const objectKey = new Object();

m.set(functionKey, "fv");
m.set(symbolKey, "sv");
m.set(objectKey, "ov");

m.get(function () {}); // undefined

// * insert queen
// * entries()

const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);
console.log(m.entries === m[symbol.iterator]); //true

for (let pair of m.entries()) {
  alert(pair);
}

console.log([...m]);

m.forEach((val, key) => alert(`${key}-> ${val}`));
key1 -> val1
key2 -> val2
key3 -> val3

// * m.keys, m.values()

// ! WeakMap
// * key only object or oriented
//TODO WeakMap

