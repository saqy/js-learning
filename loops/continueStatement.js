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

    console.log("Continue Statement    ", v);
}
