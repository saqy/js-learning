// The find() method returns the value of the first element in the
// provided array that satisfies the provided testing function.

let numbers = [1, 10, 20, 55, 100, 150];

let findElement = numbers.find(element => element > 60);

console.log(findElement);



let persons = [
    { name: "Sadaqat", age: 23 },
    { name: "Kaleem", age: 25 },
    { name: "Usman", age: 27 }
];

let resultObj = persons.find(element => element.age > 25);

console.log(resultObj);


const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

let resultInvent = inventory.find(element => element.name === "cherries");
console.log(resultInvent);