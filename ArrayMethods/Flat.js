console.log("===============example1===============");
const data = [0, 1, 2, [3, 4]];
console.log(data.flat());
// expected output: [0, 1, 2, 3, 4]
const secondLevel = [0, 1, 2, [[[[3, 4]]]]];
console.log(secondLevel.flat(3));
console.log("================example2===============");
const nestedData = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(nestedData.flat(Infinity));
console.log("================example3===============");
const withEmptySpace = [1, 2, , 4, 5];
console.log(withEmptySpace.flat());
