 /*
 Question 4
Create a nested Create a nested for loops produce the loops produce the
following output.
....1
...22
..333
.4444
55555
*/

function showPattern(){
let str =''
for (let i = 1 ; i <= 5 ; i++){
for(let j = 5 ; j > i ; j--){
 str += ","
}
for(let k = 1 ; k<= i  ; k++)
{str+= i}
console.log(str)
str =""
}
}

showPattern()