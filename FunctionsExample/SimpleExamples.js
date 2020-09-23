console.log("===================Example1==============");
function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2];
let cube = map(f, numbers);
console.log(cube);
console.log("===================Example2==============");
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else {
    let x = null;
    x = n * factorial(n - 1);
    console.log("check x", x);
    return x;
  }
}

5;

console.log("===============exampl3=================");
function foo(i) {
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);

console.log("=================exampl4===========");
function addSquares(a) {
  if (a < 0) {
    return "test";
  } else {
    console.log("check a before rec", a);
    addSquares(a - 1);
    console.log("check a after rec", a);
  }
}
addSquares(2);
console.log("=================exampl5===========");
function myConcat(separator) {
  console.log("chck seprator", separator);
  var result = ""; // initialize list
  var i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(myConcat("mike", "red", "orange", "blue"));
console.log("=================exampl6===========");
// (function () {
//   var ab = (cb = 3);
// })();

// console.log("type of ", typeof ab);
// var ab = 12;
const square = function (number) {
  return number * number;
};
var x = square(4);
console.log("X:>", x);
console.log("=================exampl7===========");
let data = [1, 2, 3, 4, 5];
function map(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = multiply(array[i]);
  }
  return result;
}

function multiply(element) {
  return element * 2;
}

console.log("==============example8===========");
// Uncaught TypeError: square is not a function
// const testSequare = function (n) {
//   return n * n;
// };
function test() {
  var test1 = 5;
}
(function test2() {
  var test2 = 7;
})();

// console.log("test", test1);
// console.log("test2", test2);
console.log("==============example9===========");

let testData = [1, 2, 3, 4, 5];
function loopData(index) {
  if (index < 0) {
    return;
  } else {
  }
  let result = testData[index] ? testData[index] : "";
  console.log(result);
  loopData(index - 1);
}

loopData(testData.length);
console.log("==============example10===========");
function addValues(a, b) {
  function multiply(x) {
    return x * x;
  }
  return multiply(a) + multiply(b);
}
console.log("vlaue is:", addValues(10, 20));

console.log("==============example11===========");
let xy = 32243;
function reverseString() {
  return xy.toString().split("").reverse().join("");
}
console.log("check reverse", reverseString());

console.log("==============example12===========");

function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log(a + b);
  }
  return inner;
}
var X = outer();
console.log(X());
console.log("==============example13===========");

function isPrimeNumber(number) {
  if (number === 1 || number === 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrimeNumber(9));
