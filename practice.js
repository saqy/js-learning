// Write a program to reverse an array or string using loop
// input: [ 1, 2, 3 ]
// output: [ 3, 2, 1 ]
const numbers= [1,2,3];
const result=[];
for (let i=0; i<3; i++){
    result.push(numbers.pop());
}
console.log(result);


//Write a program to combine two arrays
// firstInput = [ 1, 2, 3 ]
// secondInput = [ 4, 5, 6 ]
// Output: = [ 1, 2, 3, 4, 5, 6]
const firstInput = [ 1, 2, 3 ];
const secondInput = [ 4, 5, 6 ];
for (let i=0; i<3; i++) {
    firstInput.push(secondInput.shift());
}
console.log(firstInput);


// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Input: [1,2,3,4,5,6,7], k = 3
// Output:[7,1,2,3,4,5,6]
// [6,7,1,2,3,4,5]
// [5,6,7,1,2,3,4]
const input = [1,2,3,4,5,6,7]
console.log(input);
//add to top remove from end
for(let k=1; k<=3; k++){
    input.unshift(input.pop());
    console.log(input);
}

