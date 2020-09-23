// Given an array, rotate the array to the right by k steps, where k is non-negative.

 
// Output: [5,6,7,1,2,3,4]

// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
let array =[1,2,3,4,5,6,7]
 let k = 1

function rotate(arr,number){
    for(let i = 0;i<number;i++){
        arr.unshift(arr.pop());
    console.log(arr)
    }
}
console.log(rotate(array,k))
