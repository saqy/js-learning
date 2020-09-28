//////////////solution no 16////////////////////

function almostIncreasingSequence(array) {
    let count=0;
    let res = true;    
    for (let i=0; i < array.length; i++) {
        if ( (array[i] >= array[i+1]) || 
                ((array[i] <= array[i+1]) &&
                (array[i] == array[i+2]) &&
                (array[i+1] == array[i+3])) ) {
            count++;
            if (count>1) {
                res=false;
            }
            // else {
            //     res=true;
            // }
        } 
    }
    console.log('sequence is increasing: ',res)
} 
almostIncreasingSequence([1,2,1]);
 


                    // const sequence = (array) => ({
                    //     then(resolve, reject){
                    //             const err= false;
                    //             let count=0;
                    //             let res = false;    
                    //             for (let i=0; i < array.length; i++) {
                    //                 if (array[i] > array[i+1]){
                    //                     count++;
                    //                     if (count>1) {
                    //                         res=false;
                    //                     } else {
                    //                         res=true;
                    //                     }
                    //                 } 
                    //             }                                
                    //             if(res === true){
                    //                 resolve(almostIncreasingSequence(res))
                    //             } else {
                    //                 reject('sequence is not increasing ', res);
                    //             }
                    //     }
                    // });
                    
                    // function almostIncreasingSequence (res) {
                    //     return res;
                    // }
                    
                    // async function tryThis() {
                    //     try {
                    //         let result= await sequence([1, 3, 2, 4]);
                    //         let final= await almostIncreasingSequence(result);
                    //         console.log('sequence is strictly increasing  ', final);
                    //     }
                    //     catch(e) {
                    //         console.log('sequence is not increasing', e);
                    //     }
                    // }   

                    // tryThis();





