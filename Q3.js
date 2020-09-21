const inputArray = [1,2,3,4,5,6,7];

function updateArray(value, k){
    let a = 0;
    k = 3;
    while(a < k){
        value.unshift(value.pop());
        a++;
    }
    console.log(value);
}

updateArray(inputArray);