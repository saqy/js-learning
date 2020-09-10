//------------------example 1----------------//
console.log("//------------------example 1-----------------//");
let intArr = [1, 2, 3, 4];
console.log("Orignal array", intArr);
intArr.push("test");
console.log("chekc array after push", intArr);
//------------------example 2----------------//
console.log("//------------------example 2-----------------//");

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log("count is", count);
// expected output: 4
console.log("animals", animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
const count1 = animals.push("new animal");
console.log("Count1", count1);
console.log("animals after push", animals);
//------------------example 3----------------//
console.log("//------------------example 3-----------------//");
let vegetables = ["parsnip", "potato"];
let moreVegs = [
  "celery",
  "beetroot",
  "testVeg",
  "testVeg1",
  "testVeg2",
  "testVeg3",
  "testVeg4",
];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
//------------------example 4----------------//
console.log("//------------------example 4-----------------//");
let obj = {
  length: 0,

  addElem: function addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    [].push.call(this, elem);
  },
};

// Let's add some empty objects just to illustrate.
console.log("obj before adding element", obj);
obj.addElem({});
obj.addElem({});
obj.addElem({ key: "123" });
console.log("obj after adding element", obj);
console.log(obj.length);
