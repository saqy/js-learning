async function delayedUpperCase(input,n){
    let promise =  new Promise((resolve,reject)=>{
        setTimeout(() => {
             return typeof input === 'string' ? resolve(input.toUpperCase()) : reject(input)
            }, n)
    })
    let result = await promise
console.log(result)
}
delayedUpperCase('ishaq',1000)