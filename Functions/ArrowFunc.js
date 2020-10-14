console.log("Arrow Func");

var a = ["Sadaqat", "Imshaz", "Salman"];

var a2 = a.map(function (s) {
    return s.length;
})
console.log(a2);

console.log('\n');

// Arrow Func
var a3 = a.map(s => s.length);
console.log(a3);

console.log('\n');


// function Person() {

//     this.age = 0;
//     let name = this;
//     setInterval(function growUp() {
//         name.age++;
//         console.log("age is", name.age)
//     }, 1000);
// }

// var p = new Person();
// console.log(p)

// Arrow Function
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log("Age is", this.age);
    }, 60000);
}

var p = new Person();
console.log(p);
console.log('\n');

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

let result = materials.map(material => material.length);
console.log(result);
console.log('\n');

let bob = (b = 5) => {
    console.log(b + 100);
}
bob();
console.log('\n');

// Array in Params
let destructuring = ([a, b] = [10, 20]) => console.log("Using array in params, result = ", a + b);
destructuring();
console.log('\n');

// Objects in Params
let objFunc = ({ a, b } = { a: 50, b: 150 }) => console.log("Using object in params, result = ", a + b);
objFunc();