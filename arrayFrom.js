//Example 1
let string = '123'
let func = (elem)=>{
return elem
}
(func(string))
let toArray = Array.from(string,func)
console.log(toArray)


//Example 2
function fun(){
return Array.from(arguments)
}
console.log('fun',fun('a','b'))