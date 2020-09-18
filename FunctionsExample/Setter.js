console.log("==========example1===========");
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
console.log("==========example1===========");
const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz);
//  "bar"

obj.foo = "baz";
//  run the setter

console.log(obj.baz);
console.log("==========example2===========");
// let number = 6;

// function test(number) {
//   number = 100;
//   return number;
// }
// let result = test(number);
// console.log("number is:", number);
// console.log("function result:", result);
