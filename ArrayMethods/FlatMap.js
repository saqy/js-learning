console.log("=================example1===================");
var sampleData = [1, 2, 3, 4];

console.log(
  sampleData.flatMap((x) => {
    console.log("X is", x);
    return [x, x * 2];
  })
);
// is equivalent to
// sampleData.reduce((acc, x) => acc.concat([x, x * 2]), []);
