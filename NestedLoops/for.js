console.log("==========exmaple1============");
let i = 1;
let j = 1;
let multiply = 0;
for (i = 1; i <= 2; i++) {
  for (j = 1; j <= 2; j++) {
    multiply = i * j;

    if (multiply < 10) {
      multiply = " " + multiply;
    } else {
      multiply = " " + multiply;
    }
    console.log(multiply);
  }
  console.log("\n");
}
console.log("==========exmaple2============");
var data = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let k = 0; k < data.length; k++) {
  for (let m = 0; m < data[k].length; m++) {
    console.log("check arra", data[k][m]);
  }
}

console.log("==========example3============");

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var p = 0; p < arr.length; p++) {
    for (var q = 0; q < arr[p].length; q++) {
      product = product * arr[p][q];
      console.log("check priduct", product);
    }
  }
  // Only change code above thps line
  console.log("Product is:", product);
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log("==========example4============");
let x;
let y;
let chr = "";
for (x = 1; x <= 5; x++) {
  chr = "";
  for (y = 1; y <= 5 - x; y++) {
    chr += "*";
  }
  console.log(chr);
}

console.log("==========example5============");
let star = "";
for (let x = 1; x <= 5; x++) {
  star = "";
  for (let q = 1; q <= 5 - x; q++) {
    star += " ";
  }
  for (let y = 1; y <= x; y++) {
    star += "*";
  }
  console.log(star);
}

console.log("==========example6============");
let count = 5;
let output = "";
for (let p = 1; p <= count; p++) {
  output = "";
  for (let q = 1; q <= p; q++) {
    output += "* ";
  }
  console.log(output);
}
console.log("==========example7============");
let dataCount = 6;
let dataInput = "";

for (let i = 1; i < dataCount; i++) {
  dataInput = "";
  for (let j = 1; j < dataCount - i; j++) {
    dataInput += " ";
  }
  for (let k = 1; k <= i; k++) {
    dataInput += k;
  }
  console.log(dataInput);
}
console.log("==========example8============");
let starCount = 5;
let startOutput = "";
for (let p = 1; p <= starCount; p++) {
  startOutput = "";
  for (let q = 1; q <= starCount - p; q++) {
    startOutput += " ";
  }
  for (let s = 1; s <= p; s++) {
    startOutput += "* ";
  }
  console.log(startOutput);
}
console.log("========example9===========");
let z = 0;
let w = 0;
do {
  z++;
  console.log("first do", z);
  do {
    w++;
    console.log("second do", w);
    // statement of inside loop
  } while (w < 5);

  // statement of outer loop
} while (z < 2);
// let jsonExample = [
//   "OR",
//   [
//     "AND",
//     ["==", "$State", "Alabama"],
//     ["==", "$Profession", "Software development"],
//   ],
//   ["AND", ["==", "$State", "Texas"]],
//   ["OR", ["==", "$Profession", "Tradesperson"]],
// ];

// for (let i = 0; i < jsonExample.length; i++) {
//   // console.log("example: ", jsonExample[i]);
//   if (Array.isArray(jsonExample[i])) {
//     for (let j = 0; j < jsonExample[i].length; j++) {
//       if (Array.isArray(jsonExample[i][j])) {
//         for (k = 0; k < jsonExample[i][j].length; k++) {
//           console.log("example2:", jsonExample[i][j][k]);
//         }
//       }
//     }
//   }
// }
