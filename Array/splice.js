console.log("======example1=============");
let fruits = ["mango", "banana", "apple", "grapes", "peach"];
console.log("CHECK orign array", fruits);
let pos = fruits.indexOf("banana");
console.log("check pos of banana", pos);
let removedItem = fruits.splice(-2, 2);
console.log("CHECK after splice", fruits);
console.log("CHECK removed item", removedItem);

console.log("======example2=============");
let friuts = ["mango", "banana", "apple", "grapes", "peach"];
console.log("CHECK orign array", friuts);
// let pos = fruits2.indexOf("banana");
// console.log("check pos of banana", pos);
// let removedItem = fruits2.splice(-2, 2);
let friutsLength = friuts.length;
let center = friutsLength / 2;
friuts.splice(center, 0, "abc", "efg");
console.log("check center", center);
console.log("CHECK after splice", friuts);

console.log("======example3=============");
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum");
console.log("removeItem now", removed);
console.log("orignal array", myFish);

console.log("========example4==============");
let data = ["angel", "clown", "drum", "mandarin", "sturgeon"];
let dataRemovedItems = data.splice(3, 1);
console.log("check removedItems", dataRemovedItems);
console.log("check orig array", data);

console.log("========example5==============");
let fishData = ["angel", "clown", "drum", "sturgeon"];
let fishDataRemovedItems = fishData.splice(2, 1, "trumpet");
console.log("removed data item", fishDataRemovedItems);
console.log("orig array", fishData);
