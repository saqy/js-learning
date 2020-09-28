var p1 = Promise.reject("calling next");
// var p2 = new Promise(function (resolve, reject) {
//   resolve("Success");
// });
var p2 = p1.then(function (reason) {
  //This is never called
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
  },
  function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
  }
);

let testArr = [1, 2, 3, 4];
const iterator = testArr[Symbol.iterator]();
console.log("Check Iterator", iterator.next().value);
console.log("Check Iterator", iterator.next().value);
console.log("Check Iterator", iterator.next().value);
console.log("Check Iterator", iterator.next().value);
