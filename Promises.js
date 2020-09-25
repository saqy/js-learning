// console.log("= = = =     Examples=01       = = = = ="); 
// function printString(str){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(str)
//             resolve()
//         },1000)
//     })
// }
// console.log("Now to print A,B,C in sequence with promises");

// function print(){
//     printString('A')
//     .then(()=>{
//             return printString("B");
//         }
//     )
//     .then(()=>{
//         return printString("C")
//     })
// }
// print();

function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hey Fun1 Resolved")
        },3000)
    })  
}

function fun2(res){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve('hey fun 2',res)
        },3000)
    })
}
function fun3(res){
    console.log("res",res)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{            
            resolve('fun3')
        },3000)
    })
}
function fun4(res){
    console.log("res",res)
    return new Promise((resolve,reject)=>{
       
        resolve("Finished")
    })
}

fun1().then(fun2).then(fun3).then(fun4).catch(()=>{
    console.error("Hey Error Occured . . . .")
})


