// A Queue works on the FIFO(First in First Out) principle.

// FIFO
let arr1 = [];
let arr2 = [];

function addToQueue(value) {
    arr1.push(value);
}

function removeFromQueue() {
    let length = arr1.length;
    for (let i = 0; i < length; i++) {
        let pop = arr1.pop();
        console.log(pop);
        arr2.push(pop);
        console.log(arr2);
    }
    console.log("Array 2   ", arr2);
    arr2.pop();
    arr1 = arr2;
    console.log("Array 1   ", arr1);
}
addToQueue(1);
addToQueue(2);
addToQueue(3);

removeFromQueue();
removeFromQueue();
removeFromQueue();