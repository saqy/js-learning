//Qno1
let queue = [];
let stack = [];
let withOutRear = [];
function addToQueue(value) {
  queue.push(value);
}
function removeFromQueue() {
  let queueLength = queue.length;
  for (let i = 0; i < queueLength; i++) {
    withOutRear.push(queue.pop());
  }
  console.log(withOutRear);
  queue = withOutRear;
  queue.pop();
}

function addToStack(value) {
  stack.push(value);
}
function removeFromStack() {
  stack.pop();
}

addToQueue(1);
addToQueue(3);
addToQueue(4);
console.log("Que after add", queue);
removeFromQueue();
removeFromQueue();
console.log("Que after remove", queue);
