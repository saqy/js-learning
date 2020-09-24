// Queue : FIFO
// Stack:   LIFO

// let a1 =[];
// let a2= [];

// Using only push(), pop(), and array length. Create a Queue!
// a1[i]   X
// for yes  

// addtoQueue(value); //add to the begining
// removeQueue();  // return first inserted value

let stack= []; //lifo
let queue= []; //fifo

let temp=[];

function addtoStack(value) {
  stack.push(value);
  console.log(stack);
}

function removeFromStack() { 
  stack.pop();
  console.log(stack);
}
function addtoQueue(value) {
  queue.push(value);
}

function removeFromQueue() { 
  let queueLength = queue.length;
  for (let i=0; i<queueLength; i++ ) {
    temp.push(queue.pop())
  }
  queue=temp;
  console.log('\nLIFO '+queue.pop());
}


addtoQueue(10);
addtoQueue(20);
addtoQueue(30);
addtoQueue(40);
removeFromQueue();
removeFromQueue();
removeFromQueue();



// Where to add desired code. 
// Whats wrong with existing code ?

