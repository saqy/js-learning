
// Promose example

function delayedUpperCase(input, n){
    const promise = new Promise((resolve, reject) => {
        if(typeof input === "string"){
            resolve(input)
        } else {
            reject("input is invalid")
        }
    })

    setTimeout(() => promise.then(result => console.log(result)), n)

}   


delayedUpperCase("js learning", 3000)


// asyn await example

async function delayedUpperCase(input, n){
    const promise = new Promise((resolve, reject) => {
        if(typeof input === "string"){
            setTimeout(() => resolve(input), n)
        } else {
            setTimeout(() => reject("input is invalid"), n)
        }
    })

    const result = await promise;
    console.log(result)
}   


delayedUpperCase("javascript", 3000)
   