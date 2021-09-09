 /*
 Question 15
Use async/await to solve the above question.
*/
function delayedUpperCase(input , n){
    return new Promise((resolve, reject) => setTimeout(() => {
            if (typeof input !== 'string') {
            reject('Input Must Be a String')
            }
        resolve(input.toUpperCase())        
    }, n))
}

const asyncDelayed = async (input , n) => {
			try{
      	const msg = await delayedUpperCase(input , n)
      	console.log(msg)
      }
      catch(err){
      console.log(err)
      }
}
let x= "hello world"
asyncDelayed(x , 2000)
