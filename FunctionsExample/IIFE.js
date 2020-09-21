(function () {
  var aName = "Barry";
  console.log("Name Is:", aName);
})();

console.log("==============example1=============");
var result = (function () {
  var name = "Barry";
  return name;
})();
// Immediately creates the output:
console.log("Result is", result);
