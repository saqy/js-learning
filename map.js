let names=[1,2,3];

names.map((item)=> {
    console.log(item*2);
})


var sample = [1,2 , 3] // here we meet again
var sum = sample.reduce(function(sum, elem){
    console.log("sum",sum)
    console.log("element",elem)
    return sum + elem;
})
 console.log(sum)
