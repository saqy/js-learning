// Array.unshift() : Adding elements at the front of an Array====
var number_arr = [10, 20, 30, 40];
var names_arr = ["Sadaqat", "Usman", "Imshaz", "Salaman"];

console.log("Original array    ", number_arr);
// apply unshift method
number_arr.unshift(0, 5);

console.log("After applying unshift method    ", number_arr);


console.log("Original array    ", names_arr);
// apply unshift method
names_arr.unshift("Ritu");

console.log("After applying unshift method    ", names_arr);