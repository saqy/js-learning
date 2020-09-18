console.log("================exmaple1==============");
function greet(name, greeting, message = greeting + " " + name) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); //
console.log("================exmaple2==============");
function f(a, b = () => console.log(a)) {
  var a = 1;
  b(); // Prints `undefined`, because default parameter values exist in their own scope
}
f();
console.log("================exmaple3==============");
function destructureParams([x, y] = [1, 2], { z: z } = { z: 3 }) {
  return x + y + z;
}

console.log(destructureParams()); // 6
