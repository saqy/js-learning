-3,-2,0,1,0
-3,-3,-3,-2,1,0
1,2,2,2,4,5
1,2,2,4,5,0
0,-2,3,4
5,1,2,3,4
1,2,3,4,5,0
1,2,2,3,4,5,6
-3,-3,-2,1,0
-3,-3,-3
5,1,2,3,4,0
-3,-3,-2,1,0
1,1,2,2,3,4,5,6
-3,-2,0,1,2,3,3,4
7,1,2,1,2,1,2,1,2
-3,-3,-1,0
1,5,5,5,10,7,20,50,10,5,3,4,2




// function delayedUpperCase(input, n) {
//         try{
//             if(typeof input === 'string') {
//                 input= input.toUpperCase();
//                 return input;
//             }
           
//         } catch(e) {
//             return ('rejected with same input', input);

//         }
           
// }

// function execute(input) {
//     return input;

// }

// async function tryThis() {
//     try {
//    let  result= await delayedUpperCase('abc', 2000)
//    let final = await execute(result)
//         console.log('resolved and converted to uppercase ', final);
//     }
//     catch(e) {
//         // console.log('resolved and converted to uppercase', input);

//         console.log("error is",e);
//     }
// }


// tryThis();



// const delayedUpperCase= (input, n) => ({
//     then(resolve, reject) {
//         setTimeout(()=>{
//             const err= true;
//             if(typeof input === 'string') {
//                 resolve(input.toUpperCase());
//             }
//             else {
//                 reject('rejected with same input', input);
//             }
//         }, n);
//     }
// });

// function execute(input) {
//     console.log('resolved and converted to uppercase', input);

// }

// async function tryThis() {
//     try {
//         await delayedUpperCase('abc', 2000);
//         await execute();
//     }
//     catch(e) {
//         console.log(e);
//     }
// }


// tryThis();



