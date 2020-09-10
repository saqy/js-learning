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
