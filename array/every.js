// The every() method tests whether all elements in the array pass the
// test implemented by the provided function. It returns a Boolean value.

let number = [1, 5, 10, 50, 40, 60, 70];

let result = number.every(element => element > 20);

console.log(result);


let persons = [
    { name: "Sadaqat", age: 23 },
    { name: "Kaleem", age: 25 },
    { name: "Usman", age: 27 }
];

let perResult = persons.every(function (element) {
    return element.age > 20;
})

console.log(perResult);