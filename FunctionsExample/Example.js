console.log("===============example1================");
let result = function square(number) {
  return number * number;
};
console.log("result", result);

console.log("===============example2================");
function myFunc(theObject) {
  theObject.make = "Toyota";
}
var carData = { make: "Honda", model: "Accord", year: 1998 };
var x, y;

x = carData.make; // x gets the value "Honda"
console.log("Before", carData);
myFunc(carData);
y = carData.make;
console.log("After", carData);

console.log("===============example3================");
let wordsData = ["abc"];
function pushData(container) {
  container.push("test");
}
pushData(wordsData);
console.log("AFter", wordsData);
console.log("===============example4================");
function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);
const square = function (n) {
  return n * n;
};
console.log("===============example5================");
function loop(x) {
  console.log("x", x);

  if (x >= 9)
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  loop(x + 1);
  // do stuff
  // the recursive call
}

let finalResult = loop(1);
console.log("finalResultis:", finalResult);
console.log("===============example6================");
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

console.log(multiply(5, 7)); // 5
