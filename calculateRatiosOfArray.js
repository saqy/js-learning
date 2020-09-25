
function calculateRatiosOfArray(arr){
    let positive = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach(item => {
        if(item > 0 ){
            positive++;
        } else if(item < 0){
            negative++;
        } else {
            zero++;
        }
    })
    const len = arr.length;
    let positiveRatio = (positive / len).toFixed(5);
    let negativeRatio = (negative / len).toFixed(5);
    let zeroRatio = (zero / len).toFixed(5);

    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(zeroRatio)

}

const arr = [-4, 3, -9, 0, 4, 1]

calculateRatiosOfArray(arr);
