                ///QUESTION 14, 15
                
                // //promises

                function delayedUpperCase(input, n){
                    return new Promise((resolve, reject) => {
                        setTimeout(()=>{
                            const err= true;
                            if(typeof input === 'string') {
                                resolve(input.toUpperCase());
                            } else {
                                reject('rejected with same input ' +input);
                            }
                            
                        },n)
                    })
                }
                // function execute(input){
                //     // return input;
                //     console.log(input + ' resolved with same string in uppercase.. ');
                // }

                delayedUpperCase(1, 1000)
                .then(function(res){
                    console.log('here 1', res);
                })
                .then(function(res){
                   console.log('here 2', res);
                })
                .then(function(res){
                   console.log('here 3', res);
                })
                .catch(function(err){
                    console.log('here 4',err);
                });

                //async await

                // function delayedUpperCase(input, n){
                //     return new Promise((resolve, reject) => {
                //         setTimeout(()=>{
                //             const err= true;
                //             if(err && typeof input === 'string') {
                //                 console.log(input.toUpperCase() +' resolved with same string in uppercase.. ');
                //                 resolve();
                //             } else {
                //                 reject('rejected with same input ' +input);
                //             }
                            
                //         },n)
                //     })
                // }

                // async function trythis(){
                //     try{
                //         await delayedUpperCase('abc', 1000)
                //     } catch(input) {
                //         console.log('rejected with same input ' +input);
                //     }
                    
                // }
                // trythis();
