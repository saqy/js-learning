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
 function(outer function) at the time the enclosing function was executed,
  and thus can access the enclosing function’s variables (variable a).
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

//Example 5 Rest 

function restPrac(multiplier,...args){
    return args.map(a=> multiplier * a)
}
console.log(restPrac(2,1,2,3,4))


//Example 6

function Rest2(...args){
 return args

}
console.log(Rest2('ishaq',1,2,3,4,5))


//Example 7 Call method

let object = {
    name:"Ishaq"
}

function callMethod(place){
    return `Hey ${this.name}, welcome to ${place}`
}
let callFunc = callMethod.call(object,'iplex office in call method')
console.log(callFunc)

//Example 8 Apply Method
let obj = {
    name:"Ishaq"
}

function applyMethod(place){
    return `Hey ${this.name}, welcome to ${place}`
}
let applyFunc = callMethod.apply(object,['iplex Office in apply method'])
console.log(applyFunc)

//Example Bind method

let nameObj = {
    name:"Ishaq"
}

function bindMethod(place){
    return `Hey ${this.name}, welcome to ${place}`
}
let bound = bindMethod.bind(nameObj)
console.log(bound('iplex Office in bind method'))