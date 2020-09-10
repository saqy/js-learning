// Q No 1 :
// Write a program to reverse an array or string using loop
// input: [ 1, 2, 3 ]
// output: [ 3, 2, 1 ]
console.log("----- Q no 01 ------");


let input=[ 1, 2, 3 ];
let output=[];
for(let i=input.length-1;i>=0;i--){
    output.push(input[i]);
}
console.log(output)

//Qno2
// Write a program to combine two arrays
// firstInput = [ 1, 2, 3 ]
// secondInput = [ 4, 5, 6 ]
// Output: = [ 1, 2, 3, 4, 5, 6]
console.log("----- Q no 02 ------");

let firstInput = [ 1, 2, 3 ];
let secondInput = [ 4, 5, 6 ];
let output2=[];

for(i=0;i<=firstInput.length-1;i++){
    output2.push(firstInput[i]);    
}
for(i=0;i<=secondInput.length-1;i++){
    output2.push(secondInput[i]);    
}
console.log(output2)



// Q No 3
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Input: [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
console.log("----- Q no 03 ------");

let in_array= [1,2,3,4,5,6,7];
let k=8;
for(let i=0;i<k;i++){
    in_array.unshift(in_array.pop());
    console.log(in_array)
}
