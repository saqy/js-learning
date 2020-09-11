console.log("============example1==============");
let fruits = ["mango", "apple", "peach", "banana"];
for (let i = 0; i < fruits.length; i++) {
  console.log("check fruits each element: ", fruits[i]);
}
console.log("============example2==============");
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    break;
  } else {
    console.log("check fruites val: ", fruits[i]);
  }
}

console.log("============example3==============");

let j = 0;
for (; j < 3; j++) {
  console.log("j value:", j);
}
console.log("============example4==============");

let k = 0;
for (; ; k++) {
  if (k > 5) {
    break;
  }
  console.log("k value:", k);
}
