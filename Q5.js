
const inputArray = [3,6,-2,-5,7,3];

var bigProduct = inputArray[0] * inputArray[1];

function largerProduct(){
for(let i=0; i<=inputArray.length - 1; i++){
    let product = inputArray[i] * inputArray[i + 1];
        if(product > bigProduct){
            bigProduct = inputArray[i] * inputArray[i + 1];
        }
}
console.log("Product of adjacent elements is:" + "  " + bigProduct);
}

largerProduct();