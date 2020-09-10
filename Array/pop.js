//------------------example 1----------------//
console.log("//------------------example 1-----------------//");
let intArr = [1, 2, 3, 4];
console.log("Orignal array", intArr);
intArr.pop();
console.log("chekc array after pop", intArr);
//------------------example 2----------------//
console.log("//------------------example 2-----------------//");
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log("plants before pop", plants);
const element = plants.pop();
console.log("Element is:", element);
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);

//------------------example 3----------------//
console.log("//------------------example 3-----------------//");
let empty = [];
console.log("empty after pop", empty.pop());

//------------------example 4----------------//
console.log("//------------------example 4-----------------//");
var myFish = ["angel", "clown", "mandarin", "sturgeon"];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log("poped element is", popped); // 'sturgeon'
//------------------example 5----------------//
console.log("//------------------example 5-----------------//");
var myFish = {
  0: "angel",
  1: "clown",
  2: "mandarin",
  3: "sturgeon",
  length: 4,
};

var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )
var popped1 = Array.prototype.pop.call(myFish); //same syntax for using apply( )

console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(popped);
console.log(popped1);
