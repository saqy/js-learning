//Qno1
let queue = [];
let stack = [];
function addToQueue(value) {
  queue.push(value);
}
function removeFromQueue() {
  let queueLength = queue.length;
  let withOutRear = [];
  for (let i = 0; i < queueLength; i++) {
    let element = queue.pop();
    withOutRear.push(element);
  }
  console.log("Orignal Array", queue);
  console.log("new  Array", withOutRear);
  withOutRear.pop();
  console.log("new  Array after pop", queue);
  queue = withOutRear;
  console.log("Orignal Array now", queue);
}

function addToStack(value) {
  stack.push(value);
}
function removeFromStack() {
  stack.pop();
}

addToQueue(1);
addToQueue(3);
removeFromQueue();
addToQueue(10);
removeFromQueue();

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }
