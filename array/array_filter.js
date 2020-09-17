const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);

let fewerResult = words.filter(word => word.length == 5);
console.log(fewerResult);



let numbers = [3, 6, 8, 2];

let numbersResult = numbers.filter(number => number > 5);
console.log(numbersResult);


let evenResult = numbers.filter(number => number % 2 === 0);
console.log(evenResult);



let peoples = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

let peopleWhoBelongToTheIlluminati = peoples.filter(people => {
    let peopleFilter = {};
    peopleFilter = people.member == true;
    return peopleFilter;
});
console.log(peopleWhoBelongToTheIlluminati);

let otherPeoples = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

let olderPeople = otherPeoples.filter(person => {
    let olderResult = {};
    olderResult = person.age > 18;
    return olderResult;
});

console.log(olderPeople);