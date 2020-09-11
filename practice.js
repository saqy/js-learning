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
let finalInput = [];
// let finalInput = Array.prototype.push.apply(firstInput, secondInput);
for (let i = 0; i < secondInput.length; i++) {
  finalInput.push(secondInput[i]);
}
console.log("final output", finalInput);

// Question No 3
console.log("====Q3=====");
let inputData = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let j = 0;
while (j < k) {
  inputData.unshift(inputData.pop());
  j++;
}
console.log("orignal array", [1, 2, 3, 4, 5, 6, 7]);
console.log("check input data", inputData);
