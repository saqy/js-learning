/*It is a mathematical term that represents an arrangement of numbers where 
every succeeding number is greater than its preceding number.
Other than this there exists increasing sequence
 where the succeeding element is greater than or equal to the preceding element.
The same logic applies for decreasing sequence and strictly decreasing sequence.*/
//let seqArr = [1,3,2,1]

function almostIncreasingSequence(seqArr){
    for(let i = 0; i<seqArr.length;i++){
        let duplicate = [...seqArr];
    duplicate.splice(i,1)
    if(isSeq(duplicate)){
        return true
    }
    }
    return false
}

function isSeq(duplicate){
    for(let index = 0; index<duplicate.length; index++){
        if(duplicate[index] >= duplicate[index + 1]){
            return false
        }
    }
    return true
}

console.log(almostIncreasingSequence([1,2,3,99,4,5,6]))
console.log(almostIncreasingSequence([1,2,3,3,4,4]))