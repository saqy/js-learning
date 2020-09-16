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

console.log("==============example3===================");
let sampleDta = [3.24, 2.78, 999];
let maxValue = sampleDta.reduce((acc, curr) => Math.max(acc, curr));
let minValue = sampleDta.reduce((acc, curr) => Math.min(acc, curr));
console.log("Maximu is:", maxValue);
console.log("Minimum is:", minValue);
