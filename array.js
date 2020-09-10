
let fruits = ["Banana", "Mango", "Orange", "Strawberry"];

console.log(fruits.length);

let first = fruits[0];
let last = fruits[fruits.length - 1];

console.log("First fruit is " + "" + first);
console.log("Last fruit is " + "" + last);

// For each loop on Array

fruits.forEach(function (item, index) {
    console.log(item, index);
});