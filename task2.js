
// Q no 01 :
console.log("\n\nQ no 01 :");
for(let k=1;k<=5;k++){
    for(let u=1;u<=5-k;u++){
        console.log(".");             
    }
    for(let n=1;n<=k;n++){                
        console.log(k);
    }
    console.log("\n")
}

// Q no 02 :
console.log("\n\nQ no 02 :");

let inputArray=[0,-1,2];
let max=0;
let maxima=[];
let pro=0
for(let i = 0; i <= inputArray.length-1; i++) {
    console.log(maxima);
    pro=inputArray[i] * inputArray[i + 1];
    if(pro>max){
        max=pro;
        maxima = [inputArray[i], inputArray[i + 1]];
    }                 
};
console.log(" maximum Product Is = ",maxima,max);