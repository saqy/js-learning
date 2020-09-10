//function declaration
function greet(firstName = 'John', lastName = 'Doe'){
    return 'Hello ' + firstName + ' ' + lastName;
}

//function expressions
const square = function(x = 3){
    return x*x;
};
console.log(square());

//immediately invokable functions
(function(name){
  console.log('Hello '+ name);
})('Brad');

//recursion
//function to and call itself again and again
// The function's name
// arguments.callee
// An in-scope variable that refers to the function

const factorial = (n) => {
    return (n !== 1) ? n * factorial(n-1) : 1;
}
console.log(factorial(10));

var countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value-1);
    } else {
        return value;
    }
};
countdown(10);


