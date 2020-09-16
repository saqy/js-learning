console.log("===============example1========");
const data = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log("large Number Index is:", data.findIndex(isLargeNumber));

console.log("=========exmaple2========");
let sampleData = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = sampleData.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(sampleData[index]); // blueberries

console.log("============example126128172");
let str = "helloworld";
let a = str.split("").reduce((result, currentChar) => {
  result[currentChar] = result[currentChar] ? result[currentChar]++ : 1;
  //   result[currentChar] ? result[currentChar]++ : (result[currentChar] = 1);
  //   console.log(result);
  return result;
}, {});
console.log(a);

// result["title"];
