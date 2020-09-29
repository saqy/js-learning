console.log("hello world");

function download(){
 then((resolve, reject)=>{
        setTimeout(()=>{
            const error = true;

            if(error){
                resolve("downloading");
            } else {
            reject('something went wrong');
            }
        }, 3000)
    })   
}

    thenTest=()=>{
        return {
            then(res, reject){
                res('hello expression!!!');
            }
        }
    }
  
    function thenTest1(){
        return {
            then(res, reject){
                res('hello definition!!!');
            }
        }
    }






function hello(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve('done');
         },1000)

    })
  
}
async function test(){
    let loading = 'loading';   
    console.log(loading); 
    try {
    let result =  await hello();
   
    }
    catch(e){
        e
    }
    console.log('loaded'); 
}

test();


async function awaitable(){
     try{
          let val = hello();
          console.log('val');
          console.log(val);
          return val;
    
    }
    catch(e){
        console.log(e);
    };

}



// console.log("hello world");

// function download(){
//  then((resolve, reject)=>{
//         setTimeout(()=>{
//             const error = true;

//             if(error){
//                 resolve("downloading");
//             } else {
//             reject('something went wrong');
//             }
//         }, 3000)
//     })   
// }

//     thenTest=()=>{
//         return {
//             then(res, reject){
//                 res('hello expression!!!');
//             }
//         }
//     }
  
//     function thenTest1(){
//         return {
//             then(res, reject){
//                 res('hello definition!!!');
//             }
//         }
//     }






// function hello(){

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//            resolve('done');
//          },1000)

//     })
  
// }
// async function test(){
//     try {
        
//     let result =  await hello();
//     }
//     catch(e){
//         e
//     }
//     console.log('hello world');
// }

// test();


// async function awaitable(){
//      try{
//           let val = hello();
//           console.log('val');
//           console.log(val);
//           return val;
    
//     }
//     catch(e){
//         console.log(e);
//     };

// }





