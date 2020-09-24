//Qno14
// console.log("===================Qno14=======================");
function delayedUpperCase(input, n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (typeof input === "string") {
        res(input.toUpperCase());
      } else {
        rej(input);
      }
    }, n);
  });
}

delayedUpperCase("test", 1000)
  .then((result) => console.log("Success:", result))
  .catch((error) => {
    console.log("Error:", error);
  });
// console.log("===================Qno15=======================");
//Qno15
// async function withAsyncAwait() {
//   try {
//     let result = await delayedUpperCase(1010, 1000);
//     console.log("Result:", result);
//   } catch (err) {
//     console.log("Error", err);
//   }
// }
// withAsyncAwait();

async function delayedUpperCase1(input, n) {
  //   return new Promise((res, rej) => {
  let result = await setTimeout(() => {
    if (typeof input === "string") {
      return input.toUpperCase();
    } else {
      return input;
    }
  }, n);
  return result;
  //   });
}
console.log("simple async await", delayedUpperCase1("test2", 1000));
