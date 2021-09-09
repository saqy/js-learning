 /*
 Question 1
 Write a program to reverse an array or string using loop
input: [ 1, 2, 3 ]
output: [ 3, 2, 1 ]
*/

function reverseArr(arr){
    const result = []
for (let i = arr.length - 1 ; i >= 0 ; i--)
{
 result.push(arr[i])
 
}
console.log(result)
}

const input = [1 , 2, 3]
reverseArr(input)