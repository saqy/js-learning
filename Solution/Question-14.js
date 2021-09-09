 /*
 Question 14
make a function "delayedUpperCase(input, n)" that takes in a 2 parameters
and returns a new promise. using setTimeout,
after n milliseconds, the promise will either
resolove or reject. if the input is a string,
the promise resolves with that same string
uppercased. if the input is anything but a string
it rejects with that same input
// call the function delayedUpperCase
*/
function delayedUpperCase(input , n){
    return new Promise((resolve, reject) => setTimeout(() => {
            if (typeof input !== 'string') {
            reject('Input Must Be a String')
            }
        resolve(input.toUpperCase())
    }, n))
}

let x= "hello world"

delayedUpperCase(x ,2000).then(res => console.log(res))
