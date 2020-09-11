console.log("============example1==============");
let i = 0;
do {
  i += 1;
  console.log("check i", i);
} while (i < 5);
console.log("============example2==============");
var result = "";
var j = 0;
do {
  j += 1;
  result += j + " ";
} while (j > 0 && j < 5);
// Despite i == 0 this will still loop as it starts off without the test

console.log(result);
console.log("============example3==============");
var k = 0;
do {
  k += 1;
  console.log("k value", k);
} while (k > 9);
// Despite i == 0 this will still loop as it starts off without the test
