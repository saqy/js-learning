//Qno6
console.log("=================Qno6================");
function polygonArea(n) {
  return n * n + (n - 1) * (n - 1);
}
console.log(polygonArea(3));
//Qno7
console.log("=================Qno7================");
console.log("=====Solution 1=====");
let inputString = "bob";
console.log(
  inputString.split("").reverse().join("").toLowerCase() ===
    inputString.toLowerCase()
);
console.log("=====Solution 2=====");
let sampleString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  sampleString += inputString[i];
}
console.log(inputString.toLowerCase() === sampleString.toLowerCase());
//Qno8
console.log("=================Qno 8================");
let yearData = 2021;
console.log(
  parseInt(yearData) % 100 === 0
    ? yearData.toString().slice(0, 2)
    : parseInt(yearData.toString().slice(0, 2)) + 1
);
console.log("=================Qno 9================");
let fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
  "cherry",
].reduce((acc, value) => {
  acc[value] = acc[value] === undefined ? 1 : acc[value] + 1;
  return acc;
}, {});
console.log(fruitBasket);
