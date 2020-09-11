// ForEach loop
// Original array 
const items = [12, 24, 36];
const copy = [];

items.forEach(function (item, index, array) { // first item, second index value,  and third is original array,
    copy.push(item + item + 2);
    console.log(item, index, array);
});

console.log("ForEach    ", copy);