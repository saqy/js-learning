//---------------example1---------//
let fruits = ["a", "b", "c", "d"];
fruits.forEach(function (item, index, array, thisArg) {
  console.log("check array", array);
  console.log("check this arg", thisArg);
  console.log(item, index);
});
//---------------example2---------//
const numbersContainer = [1, 3, 4, 7];
let numCallbackRuns = 0;

numbersContainer.forEach((element) => {
  console.log(element);
  numCallbackRuns++;
});
console.log("numCallbackRuns: ", numCallbackRuns);
//---------------example3---------//
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}
// after
items.forEach(function (items, index, array) {
  console.log("item ", items);
  console.log("index ", index);
  console.log("array ", array);
  copyItems.push(items);
});
console.log("copyItems after", copyItems);
// console.table(copyItems);

//---------------example4---------//

let newNumbers = [2, 5, , 9];
function showNumberValues(item, index, array) {
  console.log("newNumbers[" + index + "] = " + item);
}
newNumbers.forEach(showNumberValues);

//---------------example5---------//
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach((entry) => {
    // console.log("check entry", this.count);
    // console.log("check entry plus", ++this.count);
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

const obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3
obj.sum;

console.log("count", obj.count);
console.log("sum", obj.sum);
