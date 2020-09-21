console.log("===============example1============");
const obj = {
  log: ["example", "test"],
  get latest() {
    // return this.log.push("test123");
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  },
};
console.log(obj.latest); // "test
console.log(obj.log);
console.log("===============example2============");
const expr = "foo";

const sampleObj = {
  get [expr]() {
    return "bar";
  },
};

console.log(sampleObj.foo); // "bar
console.log("===============example3============");
const testGetter = {
  log: 100,
  get latest() {
    return this.log;
  },
};
console.log(testGetter.latest);
