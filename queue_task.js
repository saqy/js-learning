let queue_array=[];
let stack_array=[];

//Stack Implememntation
function addtostack(val){
    return stack_array.push(val);     
}
function removestack(){
    return stack_array.pop();  
}

//Queue Implememntation
function addtoqueue(val){
    return queue_array.push(val);     
}


function removequeue(){
    let temp=[];
    for(let i=1;i<=queue_array.length-1;i++){      
        temp.push(queue_array[i]);           // queue_array.pop()        
    }
    queue_array=temp;
}

addtostack(1);
addtostack(2);
addtostack(3);
console.log("Origional Stack Array : ",stack_array)
removestack();
console.log("After Remove From Stack : ",stack_array);

addtoqueue(1);
addtoqueue(2);
addtoqueue(3);
addtoqueue(4);
addtoqueue(5);
addtoqueue(6);
console.log("Origional Queue Array : ",queue_array);
removequeue();


console.log("After Remove From Queue : ",queue_array);