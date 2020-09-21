const firstInput = [1,2,3];
const secondInput = [4,5,6];

// By Using Built-in Method of Array
function oldMethod(){
    let concatArray = firstInput.concat(secondInput);
    console.log("Merge Array using Concat Method:-" + "  " +  concatArray);
}

//  By Using ES6 method
function newMethod(){
    let concatArray = [...firstInput, ...secondInput];
    console.log("Merge Array using Spread Operator:-" + "  " + concatArray);
}

// By Using Push Method
function pushMethod(){
    let mergeArray = [];
    mergeArray.push(...firstInput, ...secondInput);
    console.log("Merge Array using Push method:-" + "  " + mergeArray);
}

oldMethod();
newMethod();
pushMethod();