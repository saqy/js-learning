async function delayedUpperCase(input,n){
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                return typeof input === 'string' ? resolve(input.toUpperCase()) : reject(input);
            }, n);
        });
        console.log(data);
    } catch (e) {
        return console.log(e);
    }
}


delayedUpperCase('ishaq',1000)



async function output() {
    const output = await delayedUpperCase('ishaq',1000);
   return output
  }

  output()



