// Qno10
console.log("=============Qno10=================");
let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let leftCount = 0;
let rightCount = 0;
for (let i = 0; i < matrix.length; i++) {
  if (matrix[i][i] !== undefined) {
    leftCount += matrix[i][i];
  }
  let elemlength = 1;
  elemlength = elemlength + i;
  if (matrix[i][matrix.length - elemlength] !== undefined) {
    rightCount += matrix[i][matrix.length - elemlength];
  }
}
function diagonalDifference(a, b) {
  return Math.abs(a - b);
}
let result = diagonalDifference(leftCount, rightCount);
console.log("result is:", result);
//Qno11
console.log("=============Qno11=================");
let sampleData = [-4, 3, -9, 0, 4, 1];
let totalCount = sampleData.length;
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
sampleData.forEach((item, index, arr) => {
  if (item > 0) {
    positiveCount++;
  } else if (item === 0) {
    zeroCount++;
  } else {
    negativeCount++;
  }
});

console.log(
  "proportion of positive values",
  (positiveCount / totalCount).toPrecision(6),
  "\nproportion of negative values",
  (negativeCount / totalCount).toPrecision(6),
  "\nproportion of zero values",
  (zeroCount / totalCount).toPrecision(6)
);
//Qno12
console.log("=============Qno12=================");
let Products = ["eggs", "milk", "cheese"];
let productPrices = [2.89, 3.29, 5.79];
let productSold = ["eggs", "eggs", "cheese", "milk"];
let soldPrice = [2.29, 2.89, 5.99, 3.19];
let wrongCount = 0;
productSold.forEach((item, index, arr) => {
  let getIndexOfItem = Products.indexOf(item);
  let getItemActualPrice = productPrices[getIndexOfItem];
  let getSoldPrice = soldPrice[index];
  if (getItemActualPrice !== getSoldPrice) {
    wrongCount++;
  }
});
console.log("check wrong", wrongCount);
