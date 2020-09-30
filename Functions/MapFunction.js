// Map Function

function mapFunc(test, a) {
    let result = [];
    for (let i = 0; i != a.length; i++)
        result[i] = test(a[i]);
    return result;
}

const f = function (x) {
    return x * x * x;
}

let numbers = [1, 2, 3];
let cube = mapFunc(f, numbers);
console.log(cube);
