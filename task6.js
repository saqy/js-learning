
// Q no 16
checkseq = seq =>{
    for(let i = 0; i < seq.length; i++){
        let duplicate = seq;
        duplicate.splice(i,1);
        if( isseq(duplicate) ){
            return true;
        }
    }
    return false;
}

isseq = seq =>{
  for(let j = 0; j < seq.length; j++){
      if(seq[j] >= seq[j+1]){
         return false;
       }
   }
  return true;
}

seq = [1,2,1,2]
let res = checkseq(seq)
console.log(res)