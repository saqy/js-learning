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


// function removequeue(){
//     let temp=[];
//     let len =queue_array.length;
//     for(let i=0;i<len;i++){   
//         if(len==0){
//             temp.push(queue_array.pop());           // queue_array.pop()        
//             console.log("tem",temp);
//             queue_array=temp;
//         }   
//         // queue_array=temp;
//     }
//     // queue_array=temp;
// }

function removequeue(){
    let temp=[];
    let queue_len =queue_array.length;
    for(let i=0;i<=queue_len;i++){   
        i==queue_len?  temp.pop(): temp.push(queue_array.pop());      
    }
    let temp_length=temp.length;
    for(let i=0;i<temp_length;i++){  
        queue_array.push(temp.pop());              
    }
}

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