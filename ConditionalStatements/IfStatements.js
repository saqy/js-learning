console.log("================example1===========");
let getHours = new Date().getHours();
let greeting = "";
if (getHours < 20) {
  greeting = "Good Day";
} else {
  greeting = "Good Evening";
}
console.log("Message is:", greeting);
console.log("================example2===========");
let age = 50;
let message = "";
if (age < 0) {
  message = "Month calculation";
} else if (age > 10 && age <= 17) {
  message = "Teen Age";
} else if (age > 17 && age <= 30) {
  message = "Mature";
} else if (age > 30 && age <= 50) {
  message = "Old age";
} else {
  message = "Very Old";
}
console.log("Message is:", message);

console.log("=================example2===========");
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
