console.log("= = = Q no 14 = = = Using Promises = = = =")
const delayedUpperCase=(input, n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return typeof input === "string" ? resolve(console.log("Your Input Is : ",input.toUpperCase())): reject(input)
        },n)
    })
}

delayedUpperCase("usman",0).catch((er)=>{
    console.log(er)
})
