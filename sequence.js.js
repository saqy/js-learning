

function almostIncreasingSequence(sequence){

    if(!Array.isArray(sequence) || sequence.length === 0) return 'please input valid array';

    if(sequence.length < 3) return true;
    let temp = -Infinity;
    let i;
    let len = sequence.length - 1;
    let count = 0;

    for(i = 0; i <= len; i++){
        if(temp < sequence[i]){
            temp = sequence[i];
        } else {
            sequence[0] > sequence[1] && (temp = sequence[1]);
            count++;
        }
        if(count > 1) return false;
    }

    return true

}

const arr = [1, 3, 2, 1];
const arr1 = [1, 3, 2];
const arr2 = [1, 3, 4, 2, 5, 6, 7];
const arr3 = [1, 3, 5, 2, 1, 6, 9];
const arr4 = [1, 0];
const arr5 = [9, 3, 5, 7];
const arr6 = [4];
const arr7 = [1, 1, 1];
const arr8 = "string";

console.log(almostIncreasingSequence(arr));
console.log(almostIncreasingSequence(arr1));
console.log(almostIncreasingSequence(arr2));
console.log(almostIncreasingSequence(arr3));
console.log(almostIncreasingSequence(arr4));
console.log(almostIncreasingSequence(arr5));
console.log(almostIncreasingSequence(arr6));
console.log(almostIncreasingSequence(arr7));
console.log(almostIncreasingSequence(arr8));