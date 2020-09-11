// Nested Loops

// Nested loop with for loop

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log("Nested loops    ", i, j)
    }
}

// Nested loop with while loop
let s = 0;
let t;


while (s < 5) {
    t = 0;
    while (t < 5) {
        console.log("Nested loops while   ", s, t);
        t++;
    }
    s++;
}