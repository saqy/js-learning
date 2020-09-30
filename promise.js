// simple example Promise
const newPromise = new Promise((resolve, reject) => {
    if(true){
        return resolve("resolved")
    } else {
        return reject("Error");
    }
})

newPromise.then(data => console.log(data));




// API url example Promise only for browser;
// used browser fetch method.

const promise1 = new Promise((resolve, reject) => resolve(
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(result => result)
))

promise1.then(data => console.log(data))





// Promise.all example

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/comments'
]

Promise.all(urls.map(url => fetch(url)))
 .then(result => result.map((data => data.json())))
 .then(data => {
     console.log(data[0])
     console.log(data[1])
     console.log(data[2])
 })