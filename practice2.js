//Qno4
console.log("=============Question No 4=============");
let count = 5;
let output = "";
for (let i = 1; i <= count; i++) {
  output = " ";
  for (let j = 1; j <= count - i; j++) {
    output += ".";
  }
  for (let k = 1; k <= i; k++) {
    output += i;
  }
  console.log(output);
}

//Qno5
console.log("=============Question No 5=============");
let inputArray = [-500, 100, 2, 8, -1000, -300, 4];
let max = 0;
let pairs = [];
for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i + 1] !== undefined && inputArray[i + 2] !== undefined) {
    let product = inputArray[i] * inputArray[i + 1];
    if (product > max) {
      max = product;
      pairs = [inputArray[i], inputArray[i + 1]];
    }
  }
}
console.log(pairs);
