//Simple Push Function implementation
let arr=[1,2,3,4,5,6,7];
arr.push("Usman","ali");

//copy an array with the help of push function.
let copy=[];
arr.forEach(function(item){
    copy.push(item);
})

console.log(" First Array : ", arr ," Copy of Array : ", copy);



