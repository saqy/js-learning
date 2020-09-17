const array1 = [1, 2, 3];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


// let reduceToString = (accumulator, currentValue) => accumulator && currentValue;
// console.log(array1.reduce(reduceToString, 2));

// let reduceToString = array1.reduce(number => {
//     let str = "";
//     str = (accumulator, currentValue) => accumulator && currentValue;
//     return str;
// });
// console.log(reduceToString);

let voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

let totalVoters = voters.filter((votes) => {
    let sumOfVoters = votes.voted == true;
    return sumOfVoters;
});

console.log(totalVoters.length);




let wishlist = [
    { title: "Tesla Model S", price: 1000 },
    { title: "4 carat diamond ring", price: 40 },
    { title: "Fancy hacky Sack", price: 50 },
    { title: "Gold fidgit spinner", price: 20 },
    { title: "A second Tesla Model S", price: 100 }
];

let totalNumbers = wishlist.reduce((acc, item) => {
    acc["price"] = acc.price + item.price;
    return acc
})

console.log(totalNumbers.price);