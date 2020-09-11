// Array.splice() : Insertion and Removal in between an Array.
names_arr = ["Sadaqat", "Usman", "Imshaz", "Salaman"];

console.log("Original array    ", names_arr);
// Apply splice method
names_arr.splice(0, 3);

names_arr.splice(3, "Sadaqat", "Ali", "Raja");
console.log("Original array ++++++++++++++   ", names_arr);