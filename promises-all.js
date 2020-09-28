// let promise1 = Promise.resolve('resolved')
// let promise2 = Promise.resolve(2)
// //let promise3 = Promise.reject('rejected')
// let promise4 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('inside setTimeOut')
//     },1000)
// })

// Promise.all([promise1,promise2,promise4]).then(val=>console.log(val)).catch(e=>console.log(e))

// let a = Promise.allSettled([])
// console.log(a)


//Example 2

function tImeOut(t){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Hello after ${t} milliSecs`)
        }, t);
    })
}
//tImeOut(1000).then(data=>console.log(data)).catch(e=>console.log(e))
const durations = [1000,2000,3000]

const promises =[]

durations.map(duration=>{
    promises.push(tImeOut(duration))
})
Promise.all(promises).then(res=>console.log(res)).catch(e=>console.log(e))


