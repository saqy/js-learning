function rotateRightItemofArrayKstep(arr, step){
    let arr1, arr2;
    let len = arr.length;

    if(step > len) return false;

    arr1 = arr.slice(0, len - step)
    arr2 = arr.slice(-step);

    console.log([...arr2, ...arr1])
    return [...arr2, ...arr1]
}


const arr= [1,2,3,4,5,6,7];
const k = 3

rotateRightItemofArrayKstep(arr, k);