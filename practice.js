function checkAlmostIncreasingSequence(sequence) {
  if (sequence.length > 0) {
    let result = sequence.reduce((acc, curr, key, arr) => {
      let nextItem = arr[key + 1];
      if (nextItem != undefined) {
        curr != nextItem && curr < nextItem ? acc : acc++;
      }
      return acc;
    }, 0);
    return sequence.length > 0 && (result === 0 || result === 1);
  }
}
let sequence1 = [3, 4, 5, 10]; //[0,0,0]
let sequence2 = [7, 9, 10, 15, 50, 9, 20, 10];
console.log(checkAlmostIncreasingSequence(sequence1));
