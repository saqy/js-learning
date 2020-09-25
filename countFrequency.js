// O(n**2)
function countFrequencyMethod1(arr){
    
    const obj = {};
    for(i = 0; i < arr.length; i++){
        let count = 0;
        for(m = 0; m < arr.length; m++){
            if(arr[i] === arr[m]){
                count++
            }
        }
        obj[arr[i]] = count++
    }
    console.log(obj)
}

// O(n)

function countFrequencyMethod2(arr){
    const obj = {};
    let count = 1;
    for(i = 0; i < arr.length; i++){
        if(arr[i] in obj){
            obj[arr[i]]++
        } else {
            obj[arr[i]] = count;
        }
    }
    console.log(obj)
}


const arr = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ]

countFrequencyMethod1(arr);
countFrequencyMethod2(arr);