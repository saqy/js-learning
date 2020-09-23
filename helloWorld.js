// console.log("hello world");

// var func1 = (a, b, c) => {
//   console.log(a);
//   // expected output: 1

//   // expected output: 3
// };

// func1(1, 2, 3);

// (() => {
//   console.log("here");
// })();

const arr = [1, 2, 3, 4, 4];
const output = [1, 2, 3, 5, 6, 7, 8, 4, 4];
arr.splice(3, 0, 5, 6, 7, 8);
console.log(arr);
