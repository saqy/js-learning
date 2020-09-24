
function download(cb){
    setTimeout(()=>{
        console.log('donloading..');
        cb();
    }, 1000)
    
}

function process(cb2){
    setTimeout(()=>{
          
        console.log('prosessing..');
        cb2();
    }, 1000);
}

  function execute(cb){
         console.log('execute');
     cb();
  }

  function done(cb){
      console.log('Pic is loaded successfully')
 cb()
    }

  function doneFinal(){
    console.log('Callback hell ended')
}

download(()=>{
    process(()=>{
        execute(()=>{
            done(doneFinal)
        })
    })
})
// download
// process
// execute

