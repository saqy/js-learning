    //    async await

            async function download(){
                return new Promise((resolve, reject)=>{
                    setTimeout(()=> {
                        console.log('downloading..');
                        const err= true;
                        if(err){
                            resolve();
                        } else {
                            reject('error in downloading');
                        }
                        
                    }, 3000)
                })
                
            }

            function process(){
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        console.log('processing..');
                        const err= true;
                        if(err){
                            resolve();
                        } else {
                            reject('error in processing');
                        }

                    },1000);
                })
            }

            function execute(){
                console.log('execute..');
            }

            async function trythis() {
                try{
                    await download()
                    await process()
                    await execute()
                }
                catch(e){
                    console.log(err);
                }
            }
            trythis();


            // download(function(){
            //     process(execute)
            // })

            //pending work:
            //replace promises completely with async await



            