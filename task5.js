
function min_cost(input) {
    let a = input.flat()// flattening the main array for ease of access
    let squares = [
      [8, 1, 6, 3, 5, 7, 4, 9, 2],
      [4, 3, 8, 9, 5, 1, 2, 7, 6],
      [2, 9, 4, 7, 5, 3, 6, 1, 8],
      [6, 7, 2, 1, 5, 9, 8, 3, 4],
      [6, 1, 8, 7, 5, 3, 2, 9, 4],
      [8, 3, 4, 1, 5, 9, 6, 7, 2],
      [4, 9, 2, 3, 5, 7, 8, 1, 6],
      [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];
    let cost = Math.min(); // to compare it with the minimum number in the aray   
        squares.forEach(function(item,index){ // iterating over the outer array to get index      
         let currCost=0 ;  
         item.forEach(function(innerItem,innerIndex){ // iterating over the inner array to get index
            currCost = currCost +  Math.abs(squares[index][innerIndex] - a[innerIndex]);
        })
        currCost < cost ? cost = currCost :cost      
        
    })
    return cost;
} 

console.log("The Minimum Cost For Given Array is : ",min_cost([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))


    // for (let x = 0; x < squares.length; x++) {
    //   let currCost = 0;
    //   for (y = 0; y < 9; y++) {
    //     currCost = currCost +  Math.abs(squares[x][y] - a[y]);
    //   }
    //   if (currCost < cost) {
    //     cost = currCost;
    //   }
    // }
 
  