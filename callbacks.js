// callbacks
        
function download(process){
    setTimeout(()=>{
        console.log('downloading..');
        process();
    }, 3000)
}

function process(execute){
    setTimeout(()=>{
        console.log('prosessing..');
        execute();
    }, 3000);
}

function execute(){

    console.log('execute..');
}

// download(process(execute));

download(function(){
    process(execute)
})