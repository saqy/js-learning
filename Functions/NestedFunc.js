console.log("Nested Function<========>");

function addSquares(a, b) {

    // Nested function
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

let a = addSquares(5, 6);
console.log("Output   ", a); //Output 61



function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + " " + lastName;
    }

    return `Hello ${getFullName()}`;
}
console.log(sayHiBye("Sadaqat", "Ali"));