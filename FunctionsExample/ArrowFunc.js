console.log("================exmaple1==============");
let empty = () => {};
console.log("check empty", empty());
console.log("================exmaple2==============");
var simple = (a) => (a > 15 ? 15 : a);
console.log(simple(16)); // 15
console.log(simple(10)); // 10
console.log("================exmaple3==============");
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 2);
}, 1000);
