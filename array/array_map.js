// The map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array.

const array1 = [1, 3, 5, 7, 9];

var new_arr = array1.map(x => x + 2);

console.log(new_arr);

let numbers = [1, 4, 9, 16];

let roots = numbers.map(function (num) {
    return Math.sqrt(num);
});

console.log(roots);
console.log(numbers);


// Using map to reformat objects in an array

let persons = [
    { name: "Sadaqat", age: 23 },
    { name: "Kaleem", age: 25 },
    { name: "Usman", age: 27 }
];

let arrayReformatted = persons.map(obj => {   //=> called arrow function
    let reObj = {}
    reObj[obj.name] = obj.age
    return reObj;
});

console.log(arrayReformatted);

// Task 1
let initialNumbers = [2, 5, 100];

function doubleNumbers(arr) {
    let mapFunc = (item, index, array) => {
        return item * 2;
    };
    let numberResult = arr.map(mapFunc);
    return numberResult;
}
console.log(doubleNumbers(initialNumbers));

// Task
let mapFunc = (item, index, array) => {
    return '' + item + '';
    // return item.toString();

};
let numberResult = initialNumbers.map(mapFunc);
console.log(numberResult)


