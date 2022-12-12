// ! object
// * create: new , Obejct constructor

let person = new Obejct();
person.name = "nicholas";
person.age = 29;

// * use literal

let person1 = {
  name: "nico",
  age: "28",
}; // when use literal, don't invoke Object constructor

// * passin function, packing args

// * use [] access arguments
// [] can use variabes;
let propertyName = "name";
console.log(person[propertyName]);
console.log(person["first name"]);
