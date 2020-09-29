    //    async await

            // async function download(){
            //     return new Promise((resolve, reject)=>{
            //         setTimeout(()=> {
            //             console.log('downloading..');
            //             const err= true;
            //             if(err){
            //                 resolve();
            //             } else {
            //                 reject('error in downloading');
            //             }
                        
            //         }, 3000)
            //     })
                
            // }

            // function process(){
            //     return new Promise((resolve, reject)=>{
            //         setTimeout(()=>{
            //             console.log('processing..');
            //             const err= true;
            //             if(err){
            //                 resolve();
            //             } else {
            //                 reject('error in processing');
            //             }

            //         },1000);
            //     })
            // }

            // function execute(){
            //     console.log('execute..');
            // }

            // async function trythis() {
            //     try{
            //         await download()
            //         await process()
            //         await execute()
            //     }
            //     catch(e){
            //         console.log(err);
            //     }
            // }
            // trythis();



            //pending work:
            //replace promises completely with async await
            //To actually consume the value returned when the promise fulfills, 
            //since it is returning a promise, 
            //we could use a .then() block:
            

            // download.then((resolve,reject) => {
            //     setTimeout(()=>{
            //         console.log('downloading...');
            //         const err=true;
            //         if(err){
            //             resolve();
            //         } else {
            //             reject('error in downloading');
            //         }
            //     },1000)
            // })

            function download(){
                function then(resolve, reject){
                    setTimeout(() => {

                        const err= true;
                        if(err){
                            resolve('downloading..');
                        } else {
                            reject('error in downloading');
                        }                       
                    }, 1000)
                }              
            }

            const process = () => ({
                then(resolve, reject){
                    setTimeout(() => {
                        const err= true;
                        if(err){
                            resolve('processing..');
                        } else {
                            reject('error in processing');
                        }
                    },1000);
                }
            })

            function execute() {
                console.log('execute..');
            }

            async function trythis() {
                try {
                    console.log(await download())
                    console.log(await process())
                    console.log(await execute())
                }
                catch(e) {
                    console.log(e);
                }
            }
            trythis();
     
            