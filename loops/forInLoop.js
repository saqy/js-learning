// For in loop

let obj = { name: "sadaqat", age: "23", rel: "Muslim" }

function forinLoop(obj) {
    let result = '';
    for (let i in obj) {
        result += i + ": " + " " + obj[i] + ", ";
    }
    return result;
}

console.log(forinLoop(obj));