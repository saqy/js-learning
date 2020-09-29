function checkAlmostIncreasingSequence(sequence) {
  if (sequence.length > 0) {
    let result = sequence.reduce((acc, curr, key, arr) => {
      let nextItem = arr[key + 1];
      let secondNextItem = arr[key + 2];
      if (nextItem != undefined && secondNextItem != undefined) {
        curr != nextItem &&
        nextItem != secondNextItem &&
        curr < nextItem &&
        nextItem < secondNextItem
          ? acc
          : acc++;
      }
      return acc;
    }, 0);
    return result === 0 || result === 1;
  }
}
let sequence1 = [0, -2, 3, 4];
console.log(checkAlmostIncreasingSequence(sequence1));
