

function countFrequencyMethod(arr){
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

countFrequencyMethod(arr);
