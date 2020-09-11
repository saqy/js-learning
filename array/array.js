// Array============
let fruits = ["Banana", "Mango", "Orange", "Strawberry"];

console.log(fruits.length);

let first = fruits[0];
let last = fruits[fruits.length - 1];

console.log("First fruit is " + "" + first);
console.log("Last fruit is " + "" + last);

// For each loop on Array
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});


var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
console.log(house[2] + " cost= " + house[3]);

var len = house.length;
for (var i = 0; i < len; i++) {
    console.log(house[i])
}


// JavaScript Basic Array Methods==========


// Array.shift() : Removing elements at the beginning of an array
var number_arr_shift = [10, 20, 30, 40, 50];
var names_arr_shift = ["Sadaqat", "Usman", "Kaleem", "Imshaz", "Salaman"];

number_arr_shift.shift();
names_arr_shift.shift();

console.log("After applying shift method" + " = " + number_arr_shift);
console.log("After applying shift method" + " = " + names_arr_shift);
