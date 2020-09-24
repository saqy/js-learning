const download =()=>{
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log(" Downloading . . . .")
        
    },3000)
 })
}

const process = ()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log(" Processing . . . .")
        resolve()
       },3000)
    })
}


const execute=()=>{
    console.log(" Executed . . . . . . .")
}

download().then(process).then(execute).catch("Error")