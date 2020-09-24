
//Square Function
function square(a){
    return a*a;
} 

console.log("= = Example 1 = = Square Of A Number : ",square(12));
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

//Take Cube Of A numbers in aray: 
console.log("== Example 5 ==");

function map(f,a){
    let res=[];
    for(let i=0;i<=a.length-1;i++){
        res[i]=f(a[i]);
    }
    return res
}

let f=function(a){
    return a*a*a;
}
let num=[1,2,3];

let cube=map(f,num);
console.log("Origional Array :" , num , "---> Cube Of Array Elements" , cube)

//Context-Disscussion
console.log("== Example 6 ==");
function a(){
    console.log("Its a inner");
    b();
    console.log("its a after b-call");
}
function b(){
    console.log("its inner b");
    c();
    console.log("its b after c-call");
}
function c(){
    console.log("its inner c")
}
a()

//Call Back Functions
// console.log("== Example 7  ==");
// const aaa =()=>{
//     setTimeout(
//         function () {
//             console.log("Wellcome to 1st Function")
//             bbb()
//         }
//         ,0)
//     // ,2000 )
// }
// const bbb=()=>{
//     console.log("Wellcome to the 2nd Functions")
// }
// aaa()
// bbb()


//objects and Bindin g : 
console.log("== Example 8  ==");
y1={
    name:"usman",
    age:23
}
y2={
    name:"ali",
    age:24
}
function O_bind(){
    console.log(`My Name is ${this.name} and my age is ${this.age}`)
}

const binded=O_bind.bind(y2);

binded();



