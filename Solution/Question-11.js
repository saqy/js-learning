 /*
 Question 11
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
Sample Input
-4 3 -9 0 4 1
Sample Output
0.500000
0.333333
0.166667
Explanation
There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6= 0.333333, 1/6= 0.166667 and zeros
Output Format
Print the following lines, each to decimals:
proportion of positive values
proportion of negative values
proportion of zeros
*/

function calcOccurance(arr){
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] > 0){
            positive++
        }
             else{
                 if(arr[i] < 0){
                 negative++
                 }
                     else{
                     zero++
                             }
                     }
    }
    let posRatio = positive/arr.length
    let negRatio = negative/arr.length
    let zeroRatio = zero/arr.length
    console.log(posRatio.toFixed(6))
    console.log(negRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))
    
    }
    
    const input = [-4,3,-9,0,4,1]
    
    calcOccurance(input);
    