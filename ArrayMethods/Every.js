console.log("===============example1================");
const isBelowThreshold = (currentValue) => currentValue < 40;

const randomData = [1, 30, 59, 29, 10, 13];

console.log(randomData.every(isBelowThreshold));
// expected output: true
