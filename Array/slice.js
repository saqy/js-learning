console.log("===========example1===============");
let fruits = ["banana", "apple", "mango"];
let shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
console.log("orig array", fruits);
console.log("array copy", shallowCopy);

console.log("===========example2===============");
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log("with single parameter", animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log("with start and end parameter ", animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log("with start and end parameter ex2 ", animals.slice(1, 5));
console.log("negative end", animals.slice(2, -1));
console.log("Orig array", animals);
console.log("===========example2===============");
let empty = [];
console.log("check empty slice", empty.slice(0, 1));

console.log("===========example3===============");
let fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits2.slice();
console.log("orig array", fruits2);
console.log("copy array", citrus);

console.log("===========example4===============");

let myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
let newCar = myCar.slice(0, 2);
console.log("car array before change ", myCar);
console.log("newcar array before change", newCar);
myHonda.color = "Yellow";
console.log("car array after change ", myCar);
console.log("newcar array after change", newCar);

console.log("===========example5===============");
function list() {
  return Array.prototype.slice.call(arguments);
}

let list1 = list(1, 2, 3); // [1, 2, 3]
console.log("LIST1", list1);

console.log("======example6=============");
let unboundSlice = Array.prototype.slice;
let slice = Function.prototype.call.bind(unboundSlice);

function listFunc() {
  return slice(arguments);
}

let list2 = listFunc(1, 2, 3); // [1, 2, 3]
console.log("LIST2", list2);
