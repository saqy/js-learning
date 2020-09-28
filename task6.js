
console.log(' = = = Q no 16 = = = ')
function inreasingseq(seq) {
    let issue = 0;
    for (let i=0;i<seq.length;i++) {
        if( seq[i] >= seq[i+1] ) {
            issue++;  
            console.log('At index ',i,' Array Element  ',seq[i] ,' (',issue , 'Issue Occured )')   
            if(issue > 1) 
                return 'false'; 
        }      
    } 
    return true;
}

let seq = [1,3,2,1];
console.log('Array ',seq)
let res = inreasingseq(seq)
console.log( res )
