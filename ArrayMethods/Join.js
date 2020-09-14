console.log("===============example1================");
let dataElements = ["Fire", "Air", "Water"];

console.log(dataElements.join());
// expected output: "Fire,Air,Water"

console.log(dataElements.join(""));
// expected output: "FireAirWater"

console.log(dataElements.join("--"));
// expected output: "Fire-Air-Water"
console.log("===============example2================");
let data = [];
console.log("result", data.join(""));
console.log("result", data.join(undefined));
console.log("result", data.join(null));
console.log("===============example3================");
var a = ["Wind", "Water", "Fire"];
console.log(a.join()); // 'Wind,Water,Fire'
console.log(a.join(", ")); // 'Wind, Water, Fire'
console.log(a.join(" + ")); // 'Wind + Water + Fire'
console.log(a.join(" => ")); // 'Wind + Water + Fire'
console.log(a.join("")); // 'WindWaterFire'
