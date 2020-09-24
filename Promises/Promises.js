function download() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("donloading..");
      resolve("Test Download");
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
  .then((result) => {
    console.log("RES:", result);
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
