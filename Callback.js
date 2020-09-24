//callBacks
console.log("== Example 9  ==");

const download=(process)=>{
    setTimeout(()=>{
        console.log("Downloading  . . . . ");
        process();
    },3000)
}
const process=(exec)=>{
    setTimeout(()=>{
        console.log("Processing . . . . .");
        exec()
    },3000);
    // cb();
 
}
function execute(){
    setTimeout(()=>{
        console.log("Executing . . . . . .")
    },4000)
 
}

download(()=>{
      process(execute)
})