console.log("================example1===========");
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true));
// expected output: "$2.00"
console.log(getFee(false));
console.log("undefined case", getFee(undefined));
console.log("Null case", getFee(null));
console.log("0 value case", getFee(0));
console.log("Nan Case", getFee(NaN));
console.log("================example2===========");
// expected output: "$10.00"
let age = 25;
let baverage = age > 20 ? "Bear" : "panda";
console.log("bevareg", baverage);
console.log("================example3===========");
let getData = (person) => {
  let result = person ? person.name : "Stranger";
  return (result = `Howdy ${result}`);
};

console.log("Case 1", getData({ name: "Bob" }));
console.log("Case 2", getData(null));
console.log("================example4===========");
console.log("result is:", 5 > 4 > 3 < 11 < 12 > 56);
