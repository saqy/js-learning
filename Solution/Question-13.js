 /*
 Question 13
https://www.hackerrank.com/challenges/magic-square-forming/problem
*/

function checkcenter(arr ,cost){
    if (arr[2][2] !== 5)
    {
    arr[2][2] = 5;
    cost++
    }
    return cost
    }
    
    function sumLeftDiagonal(arr){
    let sum=0;
        for(let i = 0 ; i < arr.length ; i++){
          sum += arr[i][i];
      }
      return sum === 15
    }
    
    function rightDiagonalArr (arr){
        let sum=0;
        for(let i = 0 ; i < arr.length ; i++){
          sum += arr[i][arr.length - i -1];
      }
      return sum === 15
     }
     
    function checkDiagonal (arr ,cost){
    if(sumLeftDiagonal(arr) !== true){
          if(arr[1][1] === 2){
             if(arr[2][2] !== 8){
           arr[2][2] = 8
           cost ++
           }
        }
            if(arr[1][1] === 8){
             if(arr[2][2] !== 2){
           arr[2][2] = 2
           cost ++
           }
        }
            if(arr[1][1] === 4){
             if(arr[2][2] !== 6){
           arr[2][2] = 6
           cost ++
           }
        }
            if(arr[1][1] === 6){
             if(arr[2][2] !== 4){
           arr[2][2] = 4
           cost ++
           }
        }
      }
    
    if(rightDiagonalArr(arr) !== true){
          if(arr[1][2] === 2){
             if(arr[2][1] !== 8){
           arr[2][1] = 8
           cost ++
           }
        }
            if(arr[1][2] === 8){
             if(arr[2][1] !== 2){
           arr[2][1] = 2
           cost ++
           }
        }
            if(arr[1][2] === 4){
             if(arr[2][1] !== 6){
           arr[2][1] = 6
           cost ++
           }
        }
            if(arr[1][2] === 6){
             if(arr[2][1] !== 4){
           arr[2][1] = 4
           cost ++
           }
        }
    }
    return cost
    
    }
    
    function checkRow (arr ,cost){
    var sq = [[9,5,1],[1,5,9],[7,5,3],[3,5,7],[2,5,8],[5,8,2],[4,5,6],[6,5,4]]
    let counter = 0;
    let itr
    for(let i = 0 ; i > 3 ; i++)
     {
            for(let j = 0 ; j < sq.length ; j++){
            for(let k =0 ; k < 3 ; k+2){
                  if(arr[1][i] === sq[j][k] ){
                      count++
                      itr = j
              }
              if(count == 1){
                      for(let l = 0 ; l < 3 ; l+2){
                      if(arr[1][i] !== sq[itr][l]){
                            arr[1][i] = sq[itr][l]
                       cost++       }
                  }
              }
          }
        }
        }
      return cost
    
    }
    
    
    function checkcol (arr ,cost){
    var sq = [[9,5,1],[1,5,9],[7,5,3],[3,5,7],[2,5,8],[5,8,2],[4,5,6],[6,5,4]]
    let counter = 0;
    let itr
    for(let i = 0 ; i > 3 ; i++)
     {
            for(let j = 0 ; j < sq.length ; j++){
            for(let k =0 ; k < 3 ; k+2){
                  if(arr[i][1]=== sq[j][k] ){
                      count++
                      itr = j
              }
              if(count == 1){
                      for(let l = 0 ; l < 3 ; l+2){
                      if(arr[i][1] !== sq[itr][l]){
                            arr[i][1] = sq[itr][l]
                       cost++       }
                  }
              }
          }
        }
        }
      return cost
    
    }
    
    function magicMatrix(arr){
    let cost = 0
    cost += checkcenter(arr ,cost);
    cost += checkDiagonal (arr ,cost);
    cost += checkRow (arr ,cost);
    cost += checkcol (arr ,cost);
    console.log("Cost Is " + cost)
    }
    
    let input = [[3 ,4, 8],[6 ,7, 2], [9 ,1 ,5]]
    
    
    magicMatrix(input)
    