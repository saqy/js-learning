console.log("============example1==============");
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log("n value", n);
  console.log("x value", x);
}
console.log("============example2==============");
let i = 0;
let y = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  } else {
    y += i;
    // console.log("I value is ", i);
    console.log("Y value is ", y);
  }
}
