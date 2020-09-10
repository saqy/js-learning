console.log("===========example1===============");
let integers = [1, 2, 3];
console.log("before", integers);
console.log("unshift return values", integers.unshift(4, 5, 6, 7));

console.log("after method 1", integers);
integers = [1, 2, 3];
integers.unshift(4);
integers.unshift(5);
integers.unshift(6);
integers.unshift(7);
console.log("after method2", integers);

console.log("==========example2===================");
let numbers = [1, 2];
numbers.unshift(0);
numbers.unshift(-2, -1);
numbers.unshift([-4, -3]);
numbers.unshift([-7, -6], [-5]);
console.log("int array", numbers);
console.log("array length", numbers.length);
