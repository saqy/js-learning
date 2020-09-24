        //promises

        function download(){
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    console.log('downloading..');

                    const error = true;

                    if(error){
                        resolve();
                    } else {
                    reject('something went wrong');
                    }
                }, 3000)
            })
            
        }

        function process(){
            return new Promise((resolve, reject)=> {
                setTimeout(()=>{
                    console.log('processing..');
                    const err= true;

                    if(err){
                        resolve();
                    }
                    else{
                        reject('error in execute');
                    }

                }, 3000)
            })
        }

        function execute(){

            console.log('execute..');
        }

        download()
        .then(process)
        .then(execute)
        .catch(function(err){
            console.log(err);
        });

        //practice promise objects
        