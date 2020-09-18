console.log("================example1=============");
const obj = {
  a: "foo",
  b: function () {
    return this.a;
  },
};
console.log(obj.b());
const sampleObj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(sampleObj.b());
