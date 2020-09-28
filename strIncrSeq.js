/*It is a mathematical term that represents an arrangement of numbers where 
every succeeding number is greater than its preceding number.
Other than this there exists increasing sequence
 where the succeeding element is greater than or equal to the preceding element.
The same logic applies for decreasing sequence and strictly decreasing sequence.*/
//let seqArr = [1,3,2,1]

function almostIncreasingSequence(seqArr){


//     let numsToBeRemoved = 0
//     for(let index = 0; index<seqArr.length; index++){
//         if(seqArr[index] >= seqArr[index + 1]){
//             numsToBeRemoved++;
//             if(numsToBeRemoved && numsToBeRemoved > 1){
//                 return false
//             }
//         }   
        
//     }

//   return true


let numToRemove = seqArr.reduce((acc,curr,idx)=>{
     curr >= seqArr[idx+1]  ? acc++ : acc     
 return acc 
},0)
return numToRemove > 1 ? false : true
}
console.log(almostIncreasingSequence([1,2,1,2]))
console.log(almostIncreasingSequence([1,3,2]))