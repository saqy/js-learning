console.log("===============example1================");
const data = [1, 4, 9, 16];
// pass a function to map
const result = data.map((x) => x * 2);
console.log(result);
console.log("===============example2================");
let noofChoices = [1, 4, 9, 16, 20];
let roots = noofChoices.map(function (num) {
  return Math.sqrt(num);
});
console.log("Square Roots", roots);
console.log("===============example3================");
let content = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let formattedContent = content.map((elem, key, array) => {
  let obj = {};
  obj[elem.key] = elem.value;
  return obj;
});
console.log("FCONTENT", formattedContent);

console.log("===============example4================");
let mapData = [1, 2, 3, 4, 5];
let mapResult = mapData.map((item, index, arra) => {
  console.log(mapData);
  mapData.pop();
  console.log(mapData);
  return item;
});
console.log("check result", mapResult);
