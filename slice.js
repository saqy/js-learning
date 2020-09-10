let array=["usman","ali","khan","kashif"];

console.log("Orgional Array :  " + array);

let newarr= array.slice(0,1);
console.log(" After Slice , array.slice(0,1) :     " + newarr );



let newarray=array.slice();

console.log("Array-copy : " + newarray );

let newway=[...array];
console.log(" Array after spread oprator : " + newway);
