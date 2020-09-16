console.log("===============example1================");
console.log(Array.from(""));
// expected output: Array ["f", "o", "o"]
console.log("===============example2================");
console.log(Array.from([1, 2, 3], (x) => x + x));
console.log("===============example3================");
let testData = "abcdef";
console.log(Array.from(testData));
console.log("===============example4================");
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));
