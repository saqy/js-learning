function printString(str){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(str)
            resolve()
        },2000)
    })
}
console.log("Now to print A,B,C in sequence with promises");

function print(){
    printString('A')
    .then(()=>{
            return printString("B");
        }
    )
    .then(()=>{
        return printString("C")
    })
}
print()