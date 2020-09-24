async function delayedUpperCase(input,n){
    let promise =  new Promise((resolve,reject)=>{
        setTimeout(
            () => {
              if(typeof input === 'string'){
                  resolve(input.toUpperCase())
              }else{
                  reject(input)
              }
            }, 
            n
          )
    })
    let result = await promise
console.log( result)
}
delayedUpperCase('ishaq',1000)