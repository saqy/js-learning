// The indexOf() method returns the first index at which a given
// element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// let bestsIndex = beasts.indexOf(function (element) {
//     return element === "camel";
// });

let bestsIndex = beasts.indexOf(('bison'));
console.log(bestsIndex);

console.log(beasts.indexOf('duck'));