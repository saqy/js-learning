console.log("===============example1================");
const randomData = [5, 12, 8, 130, 44];

const found = randomData.find((element) => element > 10);

console.log(("Found is:", found));
console.log("===============example2================");
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.quantity === 0;
}

console.log(inventory.find(isCherries));
console.log("===============example2================");
const inventoryData = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventoryData.find(({ name }) => name === "apples");

console.log(result); // { name: 'cherries', quantity: 5 }

console.log("===============example3===============");

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
