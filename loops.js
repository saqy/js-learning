// For loop
console.log("For loop===");
for (let a = 0; a < 10; a++) {
    console.log("For Loop" + " " + a)
}

// Do while loop
console.log("Do while loop===");
let s = 0;
do {
    s++;
    console.log("Do while loop" + "  " + s);
} while (s < 10);

let x = 10;
while (x > 0) {
    x--;
    console.log("While loop" + " " + x);
}


// Continue statement
console.log("Continue statement===");
let v = 0;
let w = 0;

while (v < 10) {
    v++;
    if (v === 5) {
        continue;
    }
    v += w;

    console.log("Break Statement" + " " + v);
}


// Break statement
console.log("Break statement===");
let m = 0;
let n = 0;

while (m < 10) {
    m++;
    if (m === 5) {
        break;
    }
    m += n;

    console.log("Break Statement" + " " + m);
}


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


let arr = ["Sadaqat", "Imshaz", "Usman"];

function forofLoop(arr) {
    let result = "";

    for (let i of arr) {
        result += i + " ";
    }
    return result;
}
console.log(forofLoop(arr));

