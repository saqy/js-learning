console.log("=============example1==============");
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
console.log("==============example2=============");
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");
console.log("==============example3=============");
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => {
    return multiplier * element;
  });
}

let arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
