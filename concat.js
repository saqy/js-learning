//concat two arrays with each other
let array=["usman","ali","khan","kashif"];
let array2=["usman","ali"];

console.log("Orgional Array :  " + array);
let newarr= array.concat(array2);
console.log(" After concat , array.concat(0,1) :     " , newarr );


//concat values to array(nested) 

let name=["usman",23,"male"];

const new_names=name.concat(1,2,[2,3]);

console.log("concat values to array " ,new_names);