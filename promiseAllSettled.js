let promise1 = Promise.resolve(Promise.reject('inside resolve'))
let promise2 = Promise.resolve(2)
let promise3 = Promise.reject('rejected')
let promise4 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('inside setTimeOut')
    },1000)
})

Promise.allSettled([promise1,promise2,promise3,1,]).then(val=>console.log(val)).catch(e=>console.log(e))