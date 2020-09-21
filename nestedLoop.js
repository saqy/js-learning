function nestedLoop(num){
    if( typeof num === "number"){
        let dot = "";
        for(let x = 1; x <= num; x++){

            for(let y = 1; y <= num; y++){
                
                if(num - x < y) {
                    dot += x
                } else {
                   
                    dot += "."
                }
                
            }
           console.log(dot);
           dot = "";
        }

    } else {
        return
    }
}


nestedLoop(5);