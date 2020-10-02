
async function delayedUpperCase(input,n){
    const promise = new Promise((resolve,reject) => {
        if(typeof input === "string"){
            setTimeout(() => resolve(input),n);            
        }
        else{
            setTimeout(() => reject("Invalid Input"),n);
        }
    })

    const result = await promise;
    console.log(result);
}

delayedUpperCase("Welcome to JS",3000);