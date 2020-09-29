//Promise.all()
//iterable(array) of promises as an input, and returns a single Promise
//input's promises have resolved, or if the input iterable contains no promises
//will reject upon any of input promises rejecting
//wait for first rejection
//display rejection with reason

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});


// this will be counted as if the iterable passed is empty, so it gets fulfilled
// var p = Promise.all([1,2,3]);
// // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
// var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
// var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// // using setTimeout we can execute code after the stack is empty
// setTimeout(function() {
//     console.log(p);
//     console.log(p2);
//     console.log(p3);
// });

// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p,'\n');
});



// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function() {
    console.log('thiss stack is now empty\n');
    console.log(p);
});
// logs, in order:
// Promise { <state>: "pending" } 
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }


var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p);
});

// logs
// Promise { <state>: "pending" } 
// the stack is now empty
// Promise { <state>: "rejected", <reason>: 44 }


var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p2);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }



// Promise.allSettled()
//wait for all input promises to complete regardless of whether or not one rejects
//returns promise whether resolved or rejected
//appropriate for independent


// Promise.any()
//returns if any resolves
//opposite of promise.all
//if failed returns AggregateError 
//AggregateError object represents an error when several errors need to be wrapped in a single error

// const pErr = new Promise((resolve, reject) => {
//     reject("Always fails");
//   });
  
//   const pSlow = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "Done eventually");
//   });
  
//   const pFast = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "Done quick");
//   });
  
//   Promise.any([pErr, pSlow, pFast]).then((value) => {
//     console.log(value);
//     // pFast fulfils first
//   })
//   // expected output: "Done quick"


// Promise.prototype.catch()
//returns promise
//deals with rejected cases
//same as calling .then
// Promise.prototype.then(undefined, onRejected)


// Promise.prototype.finally()
//When the promise is settled, i.e either fulfilled or rejected, 
//the specified callback function is execute
//method can be useful if you want to do some processing or cleanup once the promise is settled, 
//regardless of its outcome.

// Promise.prototype.then()
//2 arguments callback function for success and failure

// Promise.race()
//returns promise that fulfils or rejecte

// Promise.reject()
// Promise.resolve()