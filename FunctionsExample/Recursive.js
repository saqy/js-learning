console.log("================exmaple1==============");
const factorial = function fac(n) {
  console.log("check n is", n);
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
