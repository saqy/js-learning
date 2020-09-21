const arr = [1,2,3];
const str = "hello JS";

function reverseArray(value){
    let check = value;
    if(typeof check === "string"){
        check = check.split('');
    }
    let temp;
    let length = check.length - 1;
    for(var a=0; a<=length;a++){
        temp = check[a];
        check[a] = check[length];
        check[length]= temp;
        length--;
    }
    console.log(check);
}

reverseArray(arr);
reverseArray(str);