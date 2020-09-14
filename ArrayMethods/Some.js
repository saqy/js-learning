console.log("===============exmaple1===========");
function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log([2, 5, 8, 11, 4].some(isBiggerThan10));
// console.log([2, 5, 8, 11, 4].every(isBiggerThan10));
console.log("===============exmaple2===========");
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

console.log(checkAvailability(fruits, "kela")); // false
console.log(checkAvailability(fruits, "banana")); // true
