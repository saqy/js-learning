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
