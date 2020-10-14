// Anonymous function

const squareTwo = function (value) {
    return value + value;
}

console.log("Value =>", squareTwo(50));
console.log("\n");


// ============== factorial

const factorial = function fac(n) {
    return n < 2 ? 1 : n * (n - 1)
}

console.log("Factorial =>", factorial(5))
console.log("\n");



// n = 5 * fac(4 * 3 * 2 * 1 ) = 120;

const func = function () {
    for (let i = 1; i <= 5; i++) {
        console.log("JavaScript", i)
    }
}
func();