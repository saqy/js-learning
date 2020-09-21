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
    withOutRear.push(queue.pop());
  }
  withOutRear.pop();
  queue = withOutRear;
}

function addToStack(value) {
  stack.push(value);
}
function removeFromStack() {
  stack.pop();
}

addToQueue(1);
addToQueue(3);
console.log("Que after add", queue);
removeFromQueue();
console.log("Que after removal", queue);
addToQueue(10);
console.log("Que after add", queue);
removeFromQueue();
console.log("Que after removal", queue);
addToQueue(15);
console.log("Que after add", queue);
removeFromQueue();
removeFromQueue();
console.log("Que after removal", queue);

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }
