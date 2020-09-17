// The some() method tests whether at least one element in the array passes
// the test implemented by the provided function. It returns a Boolean value.

let numbers = [1, 3, 9];

let result = numbers.some(element => element > 5);

console.log(result);

let even = numbers.some(function (element) {
    return element % 2 === 0;
});

console.log(even);