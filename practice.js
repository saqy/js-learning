//Qno14
// console.log("===================Qno14=======================");
// function delayedUpperCase(input, n) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (typeof input === "string") {
//         res(input.toUpperCase());
//       } else {
//         rej(input);
//       }
//     }, n);
//   });
// }

// delayedUpperCase("test", 1000)
//   .then((result) => console.log("Success:", result))
//   .catch((error) => {
//     console.log("Error:", error);
//   });
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
function delayedUpperCase1(input, n) {
  setTimeout(() => {
    if (typeof input === "string") {
      return "test";
    } else {
      throw new Error(`HTTP error! status:`);
    }
  }, n);
}
async function result(input, n) {
  let result = await delayedUpperCase1(input, n);
  // let result2 = await result;
  return result;
}
console.log("simple async await", result("Test2", 1000));
