 /*
 Question 10
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix is shown below:
1 2 3
4 5 6
9 8 9
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
Function description
Complete the function in the editor below.
diagonalDifference takes the following parameter:
int arr[n][m]: an array of integers
Return
int: the absolute diagonal difference
Sample Input
3
11 2 4
4 5 6
10 8 -12
Sample Output
15
*/

function calcDiagonals(arr){

    let lefDiagonal = sumLeftDiagonal(arr)
    let rightDiaongal = rightDiagonalArr(arr)
    let difference = rightDiaongal - lefDiagonal;
    console.log("The Absolute diagonal difference is = " + difference)
    }
    
    function sumLeftDiagonal(arr){
    let sum=0;
        for(let i = 0 ; i < arr.length ; i++){
          sum += arr[i][i];
      }
      return sum
    }
    
    function rightDiagonalArr (arr){
        let sum=0;
        for(let i = 0 ; i < arr.length ; i++){
          sum += arr[i][arr.length - i -1];
      }
      return sum
    }
    
    input=[
    [11,2,4], 
    [4,5,6],
    [10,8,-12]];
    
    calcDiagonals(input);
    