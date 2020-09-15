console.log("================example1===========");
const expr = "Oranges";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  // break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
console.log("================example2===========");
let sample = 6;
switch (sample) {
  case 5:
    console.log("In Case 5");
    break;
  case 4:
    console.log("In Case 4");
  case 6:
    console.log("In Case 6");
  case 7:
    console.log("In Case 7");
    break;
  default:
    console.log("Default Case");
}
console.log("================example2===========");

var data = 0;
var output = "Output: ";
switch (data) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
