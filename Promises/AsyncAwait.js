console.log("================Async Await=============");
function download() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("donloading..");
    }, 3000);
  });
}

function process() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("prosessing..");
    }, 1000);
  });
}

function execute() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("TEST ERROR");
      console.log("execute..");
    }, 3000);
  });
}

function display() {
  //   new Promise((resolve, reject) => {
  // resolve();
  console.log("display..");
  //   });
}
async function allFunc() {
  try {
    await download();
    await process();
    await execute();
    await display();
  } catch (error) {
    console.log("ERROR is:", error);
  }
}

allFunc();
