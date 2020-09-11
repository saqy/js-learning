//Example no 1 :
// 1
// 12
// 123
// 1234
// 12345

console.log("//Example no 1 :")
for(let a=1;a<=5;a++){
    for(let b=1;b<=a;b++){
        console.log(b);
    }
    console.log("\n")
}

//----------------------------//

//Example no 2 :
// 1
// 22
// 333
// 4444
// 55555   
console.log("//Example no 2 :")

for(let c=1;c<=5;c++){
    for(let d=1;d<=c;d++){
        console.log(c)
    }
    console.log("\n")
}


//Example no 3 :
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1
console.log("//Example no 3 :")

for(let e=5;e>0;e--){
    for(let f=e;f>0;f--){
        console.log(e);
    }
    console.log("\n");
}

//Example no 4 :
// 54321
// 4321
// 321
// 21
console.log("//Example no 4 :")

for(var a=5;a>=1;a--){
    for(var b=a;b>=1;b--){
        console.log(b);
    }
    console.log("<br>");
}
