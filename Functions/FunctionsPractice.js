// 1
console.log(square(5));

function square(number) {
    return number * number;
}

// 2
function myFunc(theObj) {
    return theObj.make = 'Toyota';
}

let myCar = { make: 'Honda', model: 'Accord', year: 1998 };
let x, y;
x = myCar.make;

console.log("Value of x ==   ", x);

myFunc(myCar);
y = myCar.make
console.log("Value of y ==   ", myFunc(myCar));



