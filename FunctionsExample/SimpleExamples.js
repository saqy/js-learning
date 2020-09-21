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
let numbers = [0, 1, 2, 5, 10];
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
factorial(5);

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
