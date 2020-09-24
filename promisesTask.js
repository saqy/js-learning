/* 
make a function "delayedUpperCase(input, n)" that takes in a 2 parameters
and returns a new promise. using setTimeout,
after n milliseconds, the promise will either
resolove or reject. if the input is a string,
the promise resolves with that same string
uppercased. if the input is anything but a string
it rejects with that same input

 call the function delayedUpperCase
*/

function delayedUpperCase(input,n){
    return new Promise((resolve,reject)=>{
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
    }).then(data=>{console.log(data)})
    .catch(e=>console.log(e))
}

delayedUpperCase(122,1000)