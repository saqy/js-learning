console.log("===============example1================");
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

let result = words.filter((elem, index) => {
  return elem.length > 6;
});
// let result = words.map((elem, index) => {
//   return elem.length > 6;
// });
console.log("result is", result);
console.log("===============example2================");
function isBigEnough(value) {
  return value <= 10;
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("filtered value", filtered);
console.log("===============example3================");

const normalData = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(normalData.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
console.log("===============example4================");
let wordsData = [
  "spray",
  "limit",
  "exuberant",
  "destruction",
  "elite",
  "present",
];

const modifiedWords = wordsData.filter((word, index, arr) => {
  console.log("check i", index);
  arr[index + 1] += " extra";
  return word.length > 6;
});

console.log(modifiedWords);

console.log("=================example5=========================");

let fruits = ["apple", "banana", "grapes", "mango", "orange"];

function searchItems(arr, query) {
  return arr.filter((item, index) => {
    return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
let finalData = searchItems(fruits, "gr");
console.log("Data", finalData);

console.log("=================example6=========================");
let mapData = [1, 2, 3, 4, 5];
let mapResult = mapData.filter((item, index, arra) => {
  // mapData[i].push(6);
  mapData.pop();
  return item > 0;
});
