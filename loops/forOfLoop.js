let arr = ["Sadaqat", "Imshaz", "Usman"];

function forofLoop(arr) {
    let result = "";

    for (let i of arr) {
        result += i + " ";
    }
    return result;
}
console.log(forofLoop(arr));
