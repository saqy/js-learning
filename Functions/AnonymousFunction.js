// Anonymous function

// console.log(res);
const squareTwo = function (value) { return value + value }
var res = squareTwo(10);

console.log(res);


// ============== factorial

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
console.log(factorial(5));

// n = 5 * fac(4 * 3 * 2 * 1 ) = 120;

const func = function () {
    for (let i = 0; i < 5; i++) {
        console.log("JavaScript", i)
    }
}
func();