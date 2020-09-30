console.log("<====== Function Parameters ======> \n")
function multiply(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}
console.log(multiply(2));
console.log(" \n")


// Set default parameters
console.log("<====== Default Parameters ======> \n")
function add(a, b = 5) {
    return a + b;
}
console.log(add(5, 2));
console.log(" \n")

console.log("<====== Rest Parameters ======> \n")

function subtract(subtractor, ...theArgs) {
    // console.log(theArgs);
    return theArgs.map(x => subtractor - x);
}
var arr = subtract(10, 9, 8, 7, 6, 5);
console.log(arr);