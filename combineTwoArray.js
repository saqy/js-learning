function combineTwoArray(...props){
    const [arr, arr1] = props;

    console.log([...arr, ...arr1]);
    return [...arr, ...arr1];
}


const arr1= [ 1, 2, 3 ];
const arr2 = [ 4, 5, 6 ];

combineTwoArray(arr1, arr2);