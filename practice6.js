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
    console.log(queueLength - i);
    queue[queueLength - i] !== undefined &&
      withOutRear.push(queue[queueLength - i]);
  }
  queue = withOutRear;
}

function addToStack(value) {
  stack.push(value);
}
function removeFromStack() {
  stack.pop();
}

addToStack(1);
addToStack(2);
addToStack(3);
console.log("Stack Before", stack);
removeFromStack();
console.log("Stack After", stack);
addToQueue(1);
addToQueue(2);
addToQueue(3);
console.log("Queue Before", queue);
removeFromQueue();
console.log("Queue After", queue);
removeFromQueue();
console.log("Queue After", queue);
