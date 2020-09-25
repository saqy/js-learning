let promise1 = Promise.reject('error')
let promise2 = Promise.resolve('ishaq')
let promise3 =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve('fast')
    },500)
})
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve('slow')
    },1000)
})
promises = [promise1,promise2,promise3,promise4]
Promise.any(promises).then((value) => console.log(value));