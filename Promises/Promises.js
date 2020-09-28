function download() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("donloading..");
      reject("Test Download");
    }, 3000);
  });
}

function process() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("prosessing..");
      resolve();
    }, 1000);
  });
}

function execute() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("execute..");
      resolve("Test");
    }, 3000);
  });
}

function display() {
  console.log("display..");
}
download()
  .then((result, getRejected) => {
    console.log("RES:", result);
    console.log("Rejected A is:", getRejected);
    return process();
  })
  .then(execute)
  .then(display)
  .catch((err) => console.log("ERROR:", err));
// console.log("=======================exmaple1================");
// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(string);
//       resolve();
//     }, 3000);
//   });
// }
// printString("Testing");

// console.log("=========================example2=======================");
// function printAll() {
//   printString("A")
//     .then(() => {
//       return printString("B");
//     })
//     .then(() => {
//       return printString("C");
//     });
// }
// // printAll();

// console.log("========================example3===================");

// async function printAll() {
//   await printString("A");
//   await printString("B");
//   await printString("C");
// }
// printAll();
var p1 = new Promise(function (resolve, reject) {
  resolve("Success");
});
var p2 = new Promise(function (resolve, reject) {
  resolve("Success");
});

p1.then(function (value) {
  console.log(value); // "Success!"
  throw new Error("oh, no!");
})
  .catch(function (e) {
    console.error(e.message); // "oh, no!"
  })
  .then(
    function () {
      console.log("after a catch the chain is restored");
    },
    function () {
      console.log("Not fired due to the catch");
    }
  )
  .finally(() => {
    console.log("TEST EXAMPLE");
  });

p2.then(function (value) {
  console.log(value); // "Success!"
  return Promise.reject("oh, no!");
})
  .catch(function (e) {
    console.error(e); // "oh, no!"
  })
  .then(
    function () {
      console.log("after a catch the chain is restored");
    },
    function () {
      console.log("Not fired due to the catch");
    }
  )
  .finally(() => {
    console.log("TEST EXAMPLE 2");
  });
