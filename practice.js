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
async function delayedUpperCase1(input, n) {
  try {
    return {
      then(res, rej) {
        setTimeout(() => {
          if (typeof input === "string") {
            res(input.toLocaleUpperCase());
          } else {
            rej(input.toString());
          }
        }, n);
      },
    };
  } catch (error) {
    console.log("Firs Error", error);
  }
}
async function result(input, n) {
  try {
    let result = await delayedUpperCase1(input, n);
    let result2 = await result;
    console.log("Result2", result2);
    return result;
  } catch (error) {
    console.log("Second Error is:", error);
  }
}
result(900, 1000);
