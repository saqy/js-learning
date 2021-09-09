 /*
 Question 2
Write a program to combine two arrays
firstInput = [ 1, 2, 3 ]
secondInput = [ 4, 5, 6 ]
Output: = [ 1, 2, 3, 4, 5, 6]
*/

function AddArrays(arr1 , arr2){
    const result = arr1.concat(arr2)
console.log(result);


}

const array1 = [1, 2 , 3];
const array2 = [4, 5 , 6];

AddArrays(array1 ,array2)