// The findIndex() method returns the index of the first element in the array that 
// satisfies the provided testing function. Otherwise, 
// it returns -1, indicating that no element passed the test.

let numbers = [1, 5, 4, 20];

let largeNumber = numbers.findIndex(element => element > 5);
console.log(largeNumber);