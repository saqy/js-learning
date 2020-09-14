console.log("===============example1================");
console.log("result: ", Array.isArray([1, 2, 3])); // true
console.log("result: ", Array.isArray({ foo: 123 })); // false
console.log("result: ", Array.isArray("foobar")); // false
console.log("result: ", Array.isArray(undefined)); // false
