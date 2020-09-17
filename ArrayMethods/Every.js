console.log("===============example1================");
const isBelowThreshold = (currentValue) => currentValue < 40;

const randomData = [1, 30, 59, 29, 10, 13];

console.log(randomData.every(isBelowThreshold));
// expected output: true
console.log("======================example2=============");
let sampleData = [1, 2, 3, 4];
let resultData = sampleData.every((elem, index, arr) => {
  sampleData[index + 1] -= 1;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});
console.log("resultData", resultData);
