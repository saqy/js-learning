// Qno10
console.log("=============Qno10=================");
let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let lefttoRightDiagonal = [];
let rightToLeftDiagonal = [];
for (let i = 0; i < matrix.length; i++) {
  if (matrix[i][i] !== undefined) {
    lefttoRightDiagonal.push(matrix[i][i]);
  }
  let elemlength = 1;
  elemlength = elemlength + i;
  if (matrix[i][matrix.length - elemlength] !== undefined) {
    rightToLeftDiagonal.push(matrix[i][matrix.length - elemlength]);
  }
}
let diagonalElement = [];
diagonalElement[0] = lefttoRightDiagonal;
diagonalElement[1] = rightToLeftDiagonal;
console.log("digonalElement", diagonalElement);
getSum = (acc, curr, index, arr) => {
  return (acc += curr);
};
getDifference = (acc, curr, index, arr) => {
  return acc > curr ? acc - curr : curr - acc;
};
function diagonalDifference(diagonals) {
  let sum = [];
  for (let i = 0; i < diagonals.length; i++) {
    sum.push(diagonals[i].reduce(getSum, 0));
  }
  return sum.reduce(getDifference);
}

let result = diagonalDifference(diagonalElement);
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
let productObj = {};
Products.forEach((item, index, arr) => {
  let getPrice = productPrices[index];
  productObj[item] = getPrice;
});
productSold.forEach((item, index, arr) => {
  let getActualPrice = productObj[item];
  let getSoldPrice = soldPrice[index];
  if (getActualPrice !== getSoldPrice) {
    wrongCount++;
  }
});
console.log("check wrong", wrongCount);
