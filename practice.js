// Create a nested Create a nested for loops produce the loops produce the
// following output.

// ....1
// ...22
// ..333
// .4444
// 55555


let count = 5;
let output = "";
for (let p = 1; p <= count; p++) {
  output = "";
  for (let q = 1; q <= count - p; q++) {
  output += ".";
  }
  for (let s = 1; s <= p; s++) {
      output += p;
  }
  console.log(output);
}

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.


let inputArray= [3, 6, -2, -5, 7, 3];
let result= inputArray[0]*inputArray[1];
for(let i=1; i<inputArray.length; i++){
    let x= inputArray[i] * inputArray[i+1];
    if(x > result){
        result = x;
    };
};
console.log(result);


///////////////////SEPTEMBER 10 TASK////////////////////////
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



