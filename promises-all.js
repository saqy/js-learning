let promise1 = Promise.resolve('resolved')
let promise2 = Promise.resolve(2)
//let promise3 = Promise.reject('rejected')
let promise4 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('inside setTimeOut')
    },1000)
})

Promise.all([promise1,promise2,promise4]).then(val=>console.log(val)).catch(e=>console.log(e))

let a = Promise.allSettled([])
console.log(a)
