//last index add values "hello"
let array=["usman","ali","khan","kashif"];

console.log("Orgional Array :  " + array);

array.splice(array.length-1,0,"hello");

console.log(" After splice ,array.splice(array.length-1,1,'hello')     " + array);


//insert usman at index 2 without removing 

let a=[1,2,3,4,5,4];
a.splice(2,0,"usman");
console.log("insert usman at index 2 without removing : ",a);

//remove 1 element from index 4 from above array
a.splice(4,1);
console.log("remove 1 element from index 4 from above array : ",a);

//remove 2 element from index 1 and add hi in it
a.splice(2,2,"Hi");
console.log("remove 2 element from index 1 and add hi in it : ",a);


//Remove all after index 2
a.splice(2);
console.log("Remove all after index 2 : ",a);



