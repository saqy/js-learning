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
