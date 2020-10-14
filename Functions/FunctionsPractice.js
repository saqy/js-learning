// 1

function square(number) {
    return number * number;
}
console.log(square(5));

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


console.log("\n");;



// factorial
function factorialFunc(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * (n - 1);
    }
}


console.log(factorialFunc(12));
console.log("\n")


// Default Parameters
console.log("<== Default Parameters ==>")
// 1============
function defaultParams(a, b = 10) {
    return a + b;
}
console.log(defaultParams(5));

// 2============
function say(name, message = "Hi",) {
    return message + " " + name;
}

console.log(say("Sadaqat"));

// 3============
function sayHi(message) {
    message = typeof message !== "undefined" ? message : "Hi";
    return message;
}

console.log(sayHi());
console.log(sayHi("Hi how are you?"));

// 4============
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put("Toy Car",));
console.log(put("Teddy Bear",));

// 5============
function requiredArg() {
    // throw new Error("This argument is required");
    let error = " This argument is required";
    return error;
}

function addFunc(x = requiredArg(), y = requiredArg()) {
    return x + y;
}

console.log(addFunc(1, 10));
console.log("\n");



// Rest parameters
console.log("<== Rest Parameters ==>");

function sum(x = 10, ...theArgs) {
    return theArgs.reduce((previous, curr) => {
        return previous + curr;
    });
}

console.log(sum(1, 2, 3, 4,));


function myFunc(a, b, ...manyMoreArgs) {
    console.log(manyMoreArgs);
    return a + " " + b + " " + manyMoreArgs;
}

console.log(myFunc("one", "two", "three", "four", "five", "six"));









function longestString() {
    var longest = '';
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

console.log("Longest String =>", longestString("JavaScript", "React", "Php", "Wordpress"));
console.log("\n");



// Getter
console.log("<=== getter ===>");
// The get syntax binds an object property to a function 
// that will be called when that property is looked up.

const obj = {
    log: ["a", "b", "c"],
    get latest() {
        if (this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    }
}


console.log("Latest =>", obj.latest);


const objNew = {
    names: ["Sadaqat", "Imshaz", "Salman"],
    get getName() {
        return this.names;
    }
}

console.log(objNew.getName);
console.log("\n");


// Setter
console.log("<=== Setter ===>")

const objSet = {
    set setName(name) {
        if (typeof name !== 'string' || name.length <= 2) {
            console.log("Please enter valid name!");
        } else {
            return this.names.push(name);
        }
    },
    names: []
};
objSet.setName = "Sadaqat";
objSet.setName = 123;

console.log("Setter =>", objSet.names);