
//Square Function
function square(a){
    return a*a;
} 

console.log("==Example 1== Square Of A Number : ",square(12));
//Object Values Changes
console.log("==Example 2:==Update non-primitive Value By Functions")
function myfun(Object) {
     Object.make= 'toyota'
}

let cars= {
    make:'honda',
    model:'Accord',
    year:2020
};
let x,y;

 x = cars
    console.log("Before Fun Call:  ",x.make)
 y = myfun(cars);
     console.log("After Fun Call:  ",cars.make) ;

//Array Values Changes
console.log("== Example 3 ==")
let arr = [1,2,3,4];
console.log("Origional Aray=",arr)
    function Aray_fun(arr) {
        arr[1]=5       
    }
Aray_fun(arr)
console.log("Updated Array Is : ",arr)

//Functions Expressions: 
console.log("== Example 4 ==")

let  sum= (a,b)=>{
    return a+b;
}
console.log("Sum Of Numbers : ",sum(1,2))

const factorial = function fac(n) { 
return n<2 ? 1 : n* fac(n-1)
}

console.log("Factorial : ",factorial(8))