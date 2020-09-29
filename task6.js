

inreasingseq2=seq=> {
    let issue = 0;    
       for(let i = 0; i<seq.length;i++) {
          if(seq[i+1] !== undefined && seq[i+2] !== undefined){
            (seq[i] < seq[i+1] && seq[i+1] < seq[i+2])?  issue:   issue ++
          }
          if(issue > 1){
              return false
          }
        }
        return true;
}


seq=[5,2,3,4,5]
let res2=inreasingseq2(seq)
console.log( res2 )
