//Example 1
function makeAdder(x){
   return function(y){
       return x + y
   }
}
let addFive = makeAdder(5);
let addTwo = makeAdder(2)

console.log(addFive(2));
console.log(addTwo(2));


//Example 2
function closure(){
    let name = 'ishaq'
    function inside(){
        return name
    }
    return inside
}

let funcName = closure();
console.log(funcName())
 
//Example 3

function  outer(){
    let a = 2
    function inner(){
        let b = 2
        return a + b
    }
    return inner
}
let x = outer();
console.log(typeof x)
console.log(x())
/*
 In other words, the inner function preserves the scope chain of the enclosing 
 function at the time the enclosing function was executed,
  and thus can access the enclosing function’s variables.
*/



//Example 4 Closures in Action
//https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4

function outerFunc( ){
    let b = 10;
    let c = 10
    function innerFunc(){
        let a = 20;
        console.log(`before a : ${a} and b : ${b}`)
        a++;
        b++;
       
    }
    return innerFunc
    
}

let funcCall = outerFunc();

console.log(funcCall)
console.log(funcCall())
console.log(funcCall())
console.log(funcCall())

//Example 5

