console.log("===============example1================");
let result = [0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  10
);
console.log("result is:", result);
console.log("===============example2================");
let duplicateData = [
  "a",
  "b",
  "a",
  "b",
  "c",
  "e",
  "e",
  "c",
  "d",
  "d",
  "d",
  "d",
];
let uniqueData = duplicateData.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueData);
