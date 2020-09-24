
console.log("= = = Q no 15 = = = Using Async Await = = = =")

delayedUpperCase2 = async (input, n)=>{
    let pro = new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            return typeof input === "string" ? resolve(console.log(input.toUpperCase())): reject(input)
        },n)
    })
    let res= await pro;
    return res;
}

delayedUpperCase2("usman",1);

