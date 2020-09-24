console.log("=============example1=================");
function greeting(name) {
  console.log("Hello " + name);
}
function testUser(name) {
  console.log("test user name is:", name);
}
function processUserInput(callback, func) {
  var name = "tesdt";
  callback(name);
  func(name);
}

processUserInput(greeting, testUser);

console.log("===============example2================");
// callbacks

function download(cb) {
  setTimeout(() => {
    console.log("donloading..");

    cb();
  }, 3000);
}

function process(cb) {
  setTimeout(() => {
    console.log("prosessing..");

    cb();
  }, 1000);
}

function execute(cb) {
  setTimeout(() => {
    console.log("execute..");

    cb();
  }, 3000);
}

function display() {
  console.log("display..");
}

// download(function () {
//   process(function () {
//     execute(display);
//   });
// });
// download(function () {
//   process(function () {
//     execute(function () {
//       display();
//     });
//   });
// });
console.log("===============example3================");
function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, 10000);
}
// function printAll() {
//   printString("A");
//   printString("B");
//   printString("C");
// }
function printAll() {
  printString("Arrerre", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}
printAll();
// printString("Test");

console.log("===============example4=================");

console.log("===============example5=================");
function printString(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}
