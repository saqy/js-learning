
//CallBack Function
function download(){
    setTimeout  (() =>{
        console.log("Downloading.....");

        function process(){
            setTimeout(()=>{
                console.log("Processing.....");

                function execute(){
                    console.log("Executing.....")
                }
                execute();
            }, 3000);
        }
        process();
    }, 3000);
}

download();