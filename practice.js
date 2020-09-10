// Write a program to reverse an array or string using loop
// input: [ 1, 2, 3 ]
// output: [ 3, 2, 1 ]

const numbers= [1,2,3];
console.log(numbers.reverse());

//Write a program to combine two arrays
// firstInput = [ 1, 2, 3 ]
// secondInput = [ 4, 5, 6 ]
// Output: = [ 1, 2, 3, 4, 5, 6]

const firstInput = [ 1, 2, 3 ];
const secondInput = [ 4, 5, 6 ];
const output= firstInput.concat(secondInput);
console.log(output);

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Input: [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

const input = [1,2,3,4,5,6,7]
input.splice(0,4);
for (let i=1; i<5; i++){
    input.push(i);
}
console.log(input);



