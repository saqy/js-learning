let queueArray = []
let stackArray = []

function addToQueue(value){
let addToArray = queueArray.push(value)
return addToArray;
}

console.log('Adding 1 to Queue',addToQueue(1))
console.log('Adding 2 to Queue',addToQueue(2))
console.log('Adding 3 to Queue',addToQueue(3))    
console.log('Queue Array',queueArray)


function removeFromQueue(){
  let Length = queueArray.length;
  let temp = [];
  for (let i = 0; i < Length; i++) {
    temp.push(queueArray.pop());
  }
  
  queueArray = temp;
  temp.pop();
return temp  

}

console.log('Removing first value from Queue',removeFromQueue())
console.log('Removing first value from Queue',removeFromQueue())
console.log('Removing first value from Queue',removeFromQueue())
console.log('Queue Array',queueArray)



function addToStack(value){
    let addToArray = stackArray.push(value)
    return addToArray;
    
}

console.log('Adding 1 to stack',addToStack(1))
console.log('Adding 2 to stack',addToStack(2))
console.log('Adding 3 to stack',addToStack(3))    
console.log(' stack array',stackArray)

function removeFromStack(){
    let RemoveFromArray = stackArray.pop()
    return RemoveFromArray;
    
}

console.log(' Removing last from stack',removeFromStack())
console.log(' Removing last from stack',removeFromStack())
console.log(' Removing last from stack',removeFromStack())    
console.log('stack Array', stackArray)









