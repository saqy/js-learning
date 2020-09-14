
// ....1
// ...22
// ..333
// .4444
// 55555

for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > 0; j--) {
        if (j <= i) {
            console.log(i);
        } else {
            console.log(".");
        }
    }
};




// Question =========2
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

inputArray = [1, 5, 50, 10, 3];
let arr = inputArray;
let x = 0;
let y = 0;
let z = 0;
for (let i = 0; i < arr.length; i++) {
    x = arr[i];
    y = arr[i + 1];
    if (x * y > z) {
        z = x * y;
    }
};
console.log(z);
