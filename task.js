
console.log('<<<<<<< Question 13 >>>>>>')
function processData(input) {
    let flatInputArray = input.flat() //[5, 3, 4, 1, 5, 8, 6, 4, 2]
    let squares = [
 
      [6, 7, 2, 1, 5, 9, 8, 3, 4],
      [6, 1, 8, 7, 5, 3, 2, 9, 4],
      [8, 1, 6, 3, 5, 7, 4, 9, 2],
      [8, 3, 4, 1, 5, 9, 6, 7, 2],
      [4, 3, 8, 9, 5, 1, 2, 7, 6],
      [2, 9, 4, 7, 5, 3, 6, 1, 8],
      [6, 7, 2, 1, 5, 9, 8, 3, 4],
      [4, 9, 2, 3, 5, 7, 8, 1, 6],
      [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];
  
    let FinalMinimalcost = 50; 
  
    squares.forEach((element,indexForEach)=>{
      let currentCost = 0;
  
      element.reduce((acc,curr,indexReduce)=>{  
      currentCost += Math.abs( curr - flatInputArray[indexReduce]);
      },currentCost);
      (currentCost < FinalMinimalcost) && (FinalMinimalcost = currentCost) 
    
           console.log("index",indexForEach)
            console.log("Current Cost",currentCost)

   
      })
      if(FinalMinimalcost){ //to get the array in the squares array which
        console.log('array',squares[indexForEach]) ;
       }
    return FinalMinimalcost;
    

    
  } 
  
  console.log('The final minimal cost is :',processData([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
  
  
  
  