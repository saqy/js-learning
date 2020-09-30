console.log("=================For Loop==================");
const isSequance = (acc, curr, key, arr) => {
  let nextItem = arr[key + 1];
  if (arr[key + 1] != undefined) {
    if (curr >= nextItem) {
      acc = false;
    }
  }
  return acc;
};
function checkSequenceAgain(sequence) {
  let result = false;
  for (let i = 0; i < sequence.length; i++) {
    let copiedSequance = [...sequence];
    copiedSequance.splice(i, 1);
    if (copiedSequance.reduce(isSequance, true)) {
      result = true;
    }
  }
  return result;
}
console.log("Sequance is Increasing :", checkSequenceAgain([1, 2, 3, 4, 5, 0]));
