let sampleData = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];
let matrixSolutions = [
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
];

let result = [];
let allSumArr = [];
let sumReducer = (acc, curr) => {
  return acc + curr;
};
for (let i = 0; i < matrixSolutions.length; i++) {
  let finalSum = 0;
  result = [];
  for (let j = 0; j < matrixSolutions[i].length; j++) {
    for (let k = 0; k < matrixSolutions[i][j].length; k++) {
      let bothMatrixSum = 0;
      bothMatrixSum = Math.abs(sampleData[j][k] - matrixSolutions[i][j][k]);
      result[j] ? result[j].push(bothMatrixSum) : (result[j] = [bothMatrixSum]);
    }
  }
  allSumArr.push(result.flat().reduce(sumReducer, 0));
}
console.log(allSumArr);
let getMinimumCost = Math.min.apply(null, allSumArr);
let getIndexFromSum = allSumArr.indexOf(getMinimumCost);
console.log("Minimum cost", getMinimumCost);
console.log("Matrix with Minimum Cost", matrixSolutions[getIndexFromSum]);
