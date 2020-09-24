function download(){
    return new Promise((resolve, reject) => {
      setTimeout( () => {
         console.log('Downloading...')
         resolve()
         //reject('error arise')
        }, 1000)
    })//.catch(e=>{     console.log(e)  
}
   //directly using catch after promise didnt stop the promise from exeuting to the next function
   //while chaining .then in some other place
  function process(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log("Processing...")
           resolve()
          }, 1000)
      })
  }

  function execute(){
      console.log('executed')
  }

download().then(process).then(execute).catch(e=>console.log(e))

//   function print(){
//     download(process)
//     .then(() => {
//       return process(execute)
//     })
//     .then(()=>{
//         execute()
//     })
//   }
//   print()