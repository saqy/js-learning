function adjacentLargestProduct(arr){
    let temp = -Infinity;
    let items = '';
    const len = arr.length - 1;
    for(i = 0; i <= len; i++){
       if(temp < arr[i] * arr[i + 1]) {
           temp = arr[i] * arr[i + 1];
           items = `${arr[i]} * ${arr[i + 1]} = ${temp}`
       } 
    }
    console.log(items);
    return items;
}

const arr = [3, 6, -2, -5, 7, 3];
const arr1 = [3, 6, -2, 5, 7, 8];
const arr2 = [-1, 6, -2, 5, -7, 3];
const arr3= [9, 7, -2, 5, 7, -4];

adjacentLargestProduct(arr);
adjacentLargestProduct(arr1);
adjacentLargestProduct(arr2);
adjacentLargestProduct(arr3);