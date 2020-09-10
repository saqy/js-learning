//array iterating 

let array=["usman","ali","khan","kashif"];

console.log("Orgional Array :  [" + array + "]");

array.forEach(function(item,index){
    console.log(index  +" : " + item)
});




//copy an array through for each
function copier(){
    const name=["usman","ali"];
    const copyname=[];
    name.forEach(function(item){
        copyname.push(item);        
    })
    console.log( "Origional array  " + name + " =  Array copy : "+ copyname );
}

copier();

