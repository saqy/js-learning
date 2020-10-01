 
//  callback method 1
 
function download(cb){
 
    setTimeout(()=>{
        console.log('downloading..');

        function process(cb){
            setTimeout(()=>{
                console.log('prosessing..');

                function execute(){
                    console.log('execute..');
                }
                execute()
            }, 3000);
        }

        process()

    }, 3000)

}

download();




//  callback method 2

function download(cb){
    setTimeout(()=>{
        console.log('downloading..');
        process()
    }, 3000)
}

function process(cb){
    setTimeout(()=>{
        console.log('prosessing..');
        execute()
    }, 3000);
}

function execute(){
    console.log('execute..');
}

download();




//  callback method 3

function download(fun1, fun2){
    setTimeout(()=>{
        console.log('downloading..');
        return fun1(fun2)
    }, 3000)
}

function process(fun){
    setTimeout(()=>{
         console.log('prosessing..');
        return fun()
    }, 3000);
}

function execute(){
    return console.log('execute..');
}

download(process, execute);




//  callback method 4

function download(fun){
    setTimeout(()=>{
        console.log('downloading..');
        return fun()
    }, 3000)
}

function process(fun){
    setTimeout(()=>{
         console.log('prosessing..');
         fun()
    }, 3000);
}

function execute(){
    console.log('execute..');
}

const process1 = download(() => process(execute));
