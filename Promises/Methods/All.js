console.log("===================example1=================");
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo123");
});

console.log(
  "Result",
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  })
);

console.log("================example2===============");
var p1 = Promise.reject(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values); // [3, 1337, "foo"]
  })
  .catch((err) => {
    console.log(("Err is", err));
  });

console.log("==================example3============");
var p = Promise.all([1, 2, 3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1, 2, 3, Promise.reject(555)]).catch((err) => {
  console.log(("Err is", err));
});

// using setTimeout we can execute code after the stack is empty
setTimeout(function () {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

console.log("=======================example4====================");
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
var pp = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(pp);
});

console.log("======================example5===================");
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 4000);
});
// var p5 = new Promise((resolve, reject) => {
//   reject(new Error("promise rejected"));
// });

// Using .catch:
Promise.all([p1, p2, p3, p4])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

//example 5
var p11 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p11_delayed_resolution"), 1000);
});

var p12 = new Promise((resolve, reject) => {
  reject(new Error("p12_immediate_rejection"));
});

Promise.all([
  p11.catch((error) => {
    return error;
  }),
  p12.catch((error) => {
    return error;
  }),
]).then((values) => {
  console.log(values[0]); // "p1_delayed_resolution"
  console.error(values[1]); // "Error: p2_immediate_rejection"
});
