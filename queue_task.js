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
//To Remove From Queue
function removequeue(){
    let temp=[];
    for(let i=0;i<=queue_array.length;i++){   
        i === queue_array.length ? temp.pop(): temp.push(queue_array.pop());      
    }
    for(let i=0;i<temp.length;i++){  
        queue_array.push(temp.pop());              
    }
}

// func calss
addtostack(1);
addtostack(2);
addtostack(3);
console.log("Original Stack Array    ",stack_array)
removestack();
console.log("After Remove From Stack ",stack_array);

addtoqueue(1);
addtoqueue(2);
addtoqueue(3);
console.log("Original Queue Array :  ",queue_array);
removequeue();



console.log("After Remove From Queue ",queue_array);