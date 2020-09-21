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
console.log("==========example2===========");
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
console.log("==========example3===========");
const testObject = {
  set current(name) {
    this.logs.push(name);
  },
  logs: [1, 3, 4, 5, 6],
};
testObject.current = 100;
console.log(testObject.logs);
