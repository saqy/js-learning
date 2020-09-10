let arr = ["mango", "banana", "apple", "grapes"];
console.log("CHECK orign array", arr);
let pos = arr.indexOf("mango");
console.log("check pos of banana", pos);
let removedItem = arr.splice(pos, 4);
console.log("CHECK after splice", arr);
console.log("CHECK removed item", removedItem);
