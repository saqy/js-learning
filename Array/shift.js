//------------------example 1----------------//
console.log("//------------------example 1-----------------//");
const integres = [1, 2, 3];

const firstElement = integres.shift();

console.log(integres);
// expected output: Array [2, 3]

console.log(firstElement);
//------------------example 2----------------//
console.log("//------------------example 2-----------------//");
const integers = [];

const element = integers.shift();

console.log("empty array result after shift", element);
console.log("array", integers);
// expected output: Array [2, 3]
//------------------example 3----------------//
console.log("//------------------example 3-----------------//");

var names = ["Andrew", "Edward", "Paul", "Chris", "John"];
console.log(" names array before shift", names);
while ((i = names.shift() !== undefined)) {
  console.log("while loop iteration", i);
}
console.log(" names array after shift", names);
