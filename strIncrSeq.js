
function almostIncreasingSequence(seqArr){
    for(let i = 0; i < seqArr.length;i++){
        let copyArr = [...seqArr];
    copyArr.splice(i,1)
    if(isSequence(copyArr)){
        return true
    }
    }
    return false
}

function isSequence(sequence){
    let numToRemove = sequence.reduce((acc,curr,idx,arr)=>{
                 curr < arr[idx+1]  ? acc : acc++  
                 return acc 
         },0)
         return numToRemove > 1 ? false : true
}

console.log(almostIncreasingSequence([1,2,5,0]))
console.log(almostIncreasingSequence([1,2,3,3,4,4]))