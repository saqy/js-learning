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

    console.log("Break Statement    ", m);
}