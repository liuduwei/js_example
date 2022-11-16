// recommand every branch have own return

// ! primitive value: Undefined, Null, Bollean, Number, String, Stmbol
// ! reference value : object

// ! dynamic attribute
// * in reference value
let person = new Object();
person.name = "Nicholas";
console.log(person.name); //Nicholas

// * in primitive value
let name1 = "Nicholas";
let name2 = new String("Matt");
name1.age = 25;
name2.age = 46;
console.log(name1.age); //undefined;
console.log(typeof name1); //string;
console.log(typeof name2); // object;

// ! copy value
// * primitive

// * object

let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); //"Nicholas"

// ! passin argument
// * all argument is pass by value, no pass by reference in javascript

// * eg1 primitive type
function addTen(num) {
  num += 10;
  return num;
}

let count = 20;
let result = addTen(count);
console.log(count); //20 no change
console.log(result); // 30
// count's value copy to num, and return

// * eg2 reference value
function setName(obj) {
  obj.name = "Nicholas";
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"

// * eg2-alt
function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();
  obj.name = "Greg";
}
let person = new Object();
setName(person);
console.log(person.name);
("Nicholas");

// * person is a pointer
// * person copy to obj, but both point to same object in global,
// * if is pass in pointer, person should point to object which name is alt to "greg"

// ! confirm type
let s = "Nicholas"; //string
let b = true; // boolean
let i = 22; //number
let u; // undefined
let n = null; //object
let o = new Object(); //object
console.log(typeof s);
