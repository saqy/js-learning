
//============ FUNCTION SCOPE =================//
console.log("<============== FUNCTION SCOPE ==============> \n")

// Variables defined inside a function cannot be accessed from anywhere outside the function,
// because the variable is defined only in the scope of the function. However, 
// a function can access all variables and functions defined inside the scope in which it is defined.

// In other words, a function defined in the global scope can access 
// all variables defined in the global scope. 
// A function defined inside another function can also access all variables defined 
// in its parent function, and any other variables to which the parent function has access.


console.log("<=========== Global scope func Example ===========>");
// The following variables are defined in the global scope
let num1 = 20, num2 = 3, name = "Sadaqat";

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}
multiply();

console.log("Global Scope Func ", multiply());


console.log("<=========== Nested func Example ===========>");

function getStore() {
    let num1 = 5, num2 = 2;
    function add() {
        return name + " scored " + (num1 + num2);
    }
    return add();
}
getStore();
console.log(getStore());



const factorial = function fac(n) { return n < 2 ? 1 : n * arguments.callee(n - 1) }
console.log(factorial(5));



// the function stack
function foo(i) {
    if (i < 0)
        return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
}
foo(3);