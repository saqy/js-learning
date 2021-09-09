 /*
 Question 5
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.
*/


function largestProductArr(arr){
let product = 0
let firstNumber = 0
let secondNumber = 2
for ( let i = 0 ; i<arr.length  - 1; i++){
if( arr[i] * arr[i+1] > product){
product = arr[i] * arr[i+1] ;
firstNumber=arr[i];
secondNumber=arr[i+1];
}

}
console.log( firstNumber +" and " + secondNumber + " produce the largest product")
console.log( "Largest Product is "+ product)
}

const inputArray = [3 , 6 , -2 , -5 , 7 ,3]
largestProductArr(inputArray);