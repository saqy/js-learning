// Question 1===
// Write a program to reverse an array or string using loop
// input: [1, 2, 3]
// output: [3, 2, 1]


let numInput = [1, 2, 3];
var reverseNum = [];

for (let i = numInput.length - 1; i >= 0; i--) {
    reverseNum.push(numInput[i]);
}
console.log("Reversed numbers=== ", reverseNum);







// Question 2
// Write a program to combine two arrays
// Output = [1, 2, 3, 4, 5, 6]

let firstInput = [1, 2, 3];
let secondInput = [4, 5, 6];

console.log("First Input    ", firstInput);
console.log("Second Input    ", secondInput);
// After applying concat method
let combineOutput = firstInput.concat(secondInput);
console.log("Combine output    ", combineOutput);



// Question 3
// Given an array, rotate the array to the right by k steps, where k is non - negative.

// Input: [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

let number_arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;


// console.log(defaultInput);
// defaultInput.pop();
// defaultInput.unshift(7);

for (let i = 0; i < k; i++) {
    number_arr.unshift(number_arr.pop());
}
console.log("Rotate output   ", number_arr);










