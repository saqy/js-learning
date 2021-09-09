 /*
 Question 3
Given an array, rotate the array to the right by k steps, where k is non-negative.
Input: [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/
function rotateArray(arr){
const k = 3;
let result =[]
for(let i = arr.length - k ; i< arr.length ; i++ ){
result.push(arr[i])
}
for(let j = 0 ; j< arr.length - k ; j++){
result.push(arr[j])
}
console.log(result)
}

const input = [1, 2 , 3 , 4 ,5 ,6 ,7];
rotateArray(input)