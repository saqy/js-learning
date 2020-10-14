// Traditional Call Example //
var obj = {
    num: 100,
}

// window.num = 2020;

let add = function (a, b, c) {
    return this.num + a + b + c;
}

var resultCall1 = add.call(obj, 1, 2, 3);
console.log("Result Traditional Function, Call = ", resultCall1);

// Arrow Call Example //
let add2 = (a, b, c) => this.num + a + b + c;
var resultCall2 = add2.call(obj, 1, 2, 3);
console.log("Result Arrow Function, Call = ", resultCall2);


// Traditional Apply Example //
const arr = [4, 5, 6]
var resultApply1 = add.apply(obj, arr);
console.log("Result Traditional Function, Apply = ", resultApply1);
console.log("\n");


// Bind method

let pokemon = {
    firstName: "Sadaqat",
    lastName: "Ali",
    getPokeName: function () {
        let fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

let pokemonName = function () {
    return this.getPokeName() + " I choose u!";
}

let logPokemon = pokemonName.bind(pokemon);

console.log("Bind method =>", logPokemon());
console.log("\n");


// Call
let pokemon2 = {
    firstName: "Sadaqat",
    lastName: "Ali",
    getPokeName2: function () {
        let fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

let pokemonName2 = function (snack, hobby) {
    return this.getPokeName2() + " loves" + snack + " and " + hobby;
}

console.log("Call method =>", pokemonName2.call(pokemon2, " sushi", "algorithms"));
console.log("\n");

console.log("Apply method =>", pokemonName2.apply(pokemon2, [" sushi", "algorithm"]));
console.log("\n");








