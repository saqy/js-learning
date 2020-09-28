// const promise1 = new Promise((resolve, reject) => {
//     const check =false;
//     if(check){
//         resolve('Success!');
//     }else{
//         reject('Not Sucessfull')
//     }
//   });
  
//   promise1.then((value) => {  console.log(value); }).catch(()=>{ 
//       console.log("Error Occured")
//   })

  function a(){
      return new Promise((res, rej)=>{
          setTimeout(()=>{
              console.log("Progrm Loading . . .")
              res();
            },3000)
      })
  }
  function b(){
      return new Promise((res,rej)=>{
          setTimeout(()=>{
              console.log("Program loaded")
              res();
          },3000)
      })
  }
  function c(){
      return new Promise(()=>{
          setTimeout(()=>{
              console.log("hello . . i am in")
          },3000)
      })
  }

  a().then((value)=>{ console.log("Promise of a")}).then(b).then((value)=>{ console.log("Promise of b")}).then(c).then((value)=>{ console.log("Promise of c")}).catch(()=>{
      console.log("SomeThing Went Wrong");
  })
