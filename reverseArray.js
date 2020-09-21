function reverseArray(props){
    let arr = props;
    let temp, i, arraylength;
    arraylength = arr.length - 1;

    if( typeof props === "string"){
        arr = props.split('');
    }

    for(i = 0; i < arraylength; i++){
       temp = arr[i];
       arr[i] = arr[arraylength];
       arr[arraylength] = temp; 
       arraylength--;
    }

    console.log({arr})
    return arr;
}

reverseArray("habib kharkovi");
reverseArray([ 1, 2, 3 ]);