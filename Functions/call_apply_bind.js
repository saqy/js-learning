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