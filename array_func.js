        //1) Map
//syntax
const array=[1,2,3,4,5,6];
array.map(function(item){console.log(item)})

//double num with map of an array
const arr=[11,22,33,44];
const double_arr=arr.map(function(item){return item*2});
console.log("Double  array is ",double_arr);

        //2)filter

let name=["usman","ali","khan"];

const res=name.filter(item=>item.length<4);
console.log("Array element with greater length",res);

let age=[12,15,18,19,20,22,23];

let ages=age.filter(age=>age>18)
console.log("Age greater then 18",ages);

        //3) Reduce : 

//example #02 reduce
let red_array=[1,2,3,4,5,6];
const red=(prev,next)=>prev+next; 

console.log(red_array.reduce(red));

//example #02 reduce

let red_arr=[[1,2,3,4],[5,6,7]];

var cnct=red_arr.reduce(function(prev,next){
    return prev.concat(next);
})
console.log("concat array through reduce : " ,cnct );

        //3) isArray : 
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));

        //4) Array.join()
let join_arr=[1,2,3,4,5,6,47,];

console.log(join_arr.join('/'))

        //5) Array.concat()
let ar1=['a','b'];
let ar2=['c','d','e','f'];

let ar3=ar1.concat(ar2);

console.log(ar3);

const add_val=ar3.concat(1,2,3);
console.log("Add value in array thourgh Concat :  ",add_val);


