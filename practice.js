//Question 1
console.log("====Q1=====");
let data = [1, 2, 3];
let reverseData = [];
for (i = data.length; i--; ) {
  reverseData.push(data[i]);
}
console.log("reverse array", reverseData);

//Question No 2
console.log("====Q2=====");
let firstInput = [1, 2, 3];
let secondInput = [4, 5, 6];
for (let i = 0; i < secondInput.length; i++) {
  firstInput.push(secondInput[i]);
}
console.log("final output", firstInput);

// Question No 3
console.log("====Q3=====");
let inputData = [1, 2, 3, 4, 5, 6, 7];
let k = 6;
for (let j = 1; j <= k; j++) {
  inputData.unshift(inputData.pop());
}
console.log("orignal array", [1, 2, 3, 4, 5, 6, 7]);
console.log("check input data", inputData);
