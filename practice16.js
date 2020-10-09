//////////////solution no 16////////////////////


    function almostIncreasingSequence(array) {
        let numberRemoved = 0;
        let res=true;
        if(array.length <= 2) {
            res= true;
        }
        for(let i = 0; i < array.length; i++) {  
            let currItem= array[i];
            if(array[i] >= array[i + 1]) { //return false
                numberRemoved++;
                let item = array.splice(i,1,currItem);
                console.log('here here',item);
                if(array[i] < array[i+1]) {
                    console.log(i);
                    res= true;
                } else {
                    numberRemoved++;
                    // res= false;
                }
            }
        }
        if(numberRemoved <= 1) {
            res= true;
        } else {
            res= false;
        }  

        console.log('sequence is increasing: ',res)
    }
    
    almostIncreasingSequence([-3,0,1,0]);



