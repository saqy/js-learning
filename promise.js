
function delayedUpperCase(input,n){
    const promise = new Promise((resolve,reject) => {
        if(typeof input === "string"){
            resolve(input);
        }
        else{
            reject("Invalid Input");
        }
    })
 
    setTimeout(() => promise.then(result => console.log(result)),n);
}


delayedUpperCase("Welcome to JS",3000);


