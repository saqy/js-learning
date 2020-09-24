//Q#6
//  Below we will define an n-interesting polygon. 
//Your task is to find the area of a polygon for a given n.
//  Example n= 1, output = 1; For n = 2, the output should be output= 5; For n = 3, the output should be output= 13. For n = 4, the output should be output = 25.

function shapeArea(n) {
  return n ** 2 + (n-1) ** 2
}
let res= shapeArea(3);
console.log("\nArea of polygon is "+res);


//Q#7
// Given the string, check if it is a palindrome.
// Example
// For inputString = "aabaa", the output should be = true; For inputString = "abac", the output should be = false; 
//For inputString = "a", the output should be = true.

function pal(str) {
  reverse = str.split('').reverse().join('');
  if (reverse === str){
      return true;
  }
  else {
    return false;
  }
}
let palindrome= pal("civic");
console.log('\nIt is palindrome: '+palindrome);

////////////////////////////////////////////////second method////////////////////////////////////////////////
function palindromefunc(str) {
// var re = /[\W_]/i; //matches any word
str = str.split('');
// str = str.toLowerCase().replace(re, '');
for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    //0 a !== 7-0 a
    //1 a !== 7-1 a
    //2 b !== 7-2 c
    //true --> exit
      return false;
  }
}
return true;
}
let result= palindromefunc("civic");
console.log('It is palindrome: '+result);


//Q#8
// Given a year, return the century it is in. 
//The first century spans from the year 1 up to and including the year 100, 
//the second - from the year 101 up to and including the year 200, etc.
// Example
// For year = 1905, the output should be = 20; For year = 1700, the output should be = 17.

function getCentury(year){
  if (year % 100 === 0){
    return year / 100;
  } else {
    let remainder = year % 100;
    return ((year + 100) - remainder) / 100;
  }
}
let century= getCentury(2021);
console.log('\nCurrent century is: '+century+'\n');


//Q#9
// Count frequencies of each entry in an array For example const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
//It should return an object like this { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

const fruitBasket = [
                    'banana', 
                    'cherry', 
                    'orange', 
                    'apple', 
                    'cherry', 
                    'orange', 
                    'apple', 
                    'banana', 
                    'cherry', 
                    'orange', 
                    'fig' 
                    ];
function count(fruitBasket) {
  // return fruitBasket.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), [])
  return fruitBasket.reduce((accumulator, currentValue) => 
   {
    // console.log('accumulator[currentValue]++');
    // console.log(accumulator[currentValue]++);
    // console.log('++accumulator[currentValue]');
    // console.log(++accumulator[currentValue]);
     return (accumulator[currentValue] = ++accumulator[currentValue] || 1,accumulator);
   },[]);
  }
var counter= count(fruitBasket);
console.log(counter);


//Q#10
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function difference(arr, n) {
  dLeft=0;
  dRight=0;
  for(let i in arr) {
    dLeft+= arr[i][i]; //10 //5 //9
    // console.log(dLeft);
    dRight+= arr[i][n - i - 1]; //3 //5 //9
    sub= Math.abs(dLeft - dRight); //7

    return sub;
  }

}
let diff= difference([[10, 2, 3],[4,  5, 6], [9,  8, 9]], 3);
console.log('\nAbsolute Difference:  ' +diff);


//Q#11
// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6= 0.333333, 1/6= 0.166667 and zeros

const integers = [-4, 3, -9, 0, 4, 1];
numberOfPositive=0;
numberOfNegative=0;
numberOfZeros=0;
integers.forEach((i)=>{
  if(i<0){
    numberOfNegative+=1;
  }
  else if (i === 0) {
    numberOfZeros+=1;
  }
  else {
    numberOfPositive+=1;
  }
}
);
console.log('\nproportion of positive values: '+(numberOfPositive/integers.length).toPrecision(2)
+'\nproportion of negative values: '+(numberOfNegative/integers.length).toPrecision(2)
+'\nproportion of zeros: '+(numberOfZeros/integers.length).toPrecision(2));


 //Q#12           
// Given the list of items and their actual prices and sold prices. 
// Find the number of items in sold products which has wrong prices

let products = ['eggs', 'milk', 'cheese'];
let productPrices = [2.89, 3.29, 5.79];
let productsSold = ['eggs', 'eggs', 'cheese', 'milk']
let soldPrices = [2.09, 2.99, 5.97, 3.29];

function wrongPrices(productsSold) {
  return productsSold.reduce((acc, curr, idx) => 
  {
    // console.log(acc)
    if(productPrices[products.indexOf(curr)] !== soldPrices[idx]) {
      acc++;
    }
    return acc;
  },0);
}
var count= wrongPrices(productsSold);
console.log('\nProducts with wrong prices: '+count+'\n');


//Q#13
let input = [5, 3, 1, 1, 5, 8, 6, 4, 2];
let magicSquares = [
  [8, 1, 6, 3, 5, 7, 4, 9, 2],//17   
  [4, 3, 8, 9, 5, 1, 2, 7, 6],//31
  [2, 9, 4, 7, 5, 3, 6, 1, 8],//29
  [6, 7, 2, 1, 5, 9, 8, 3, 4],//13
  [6, 1, 8, 7, 5, 3, 2, 9, 4],//29
  [8, 3, 4, 1, 5, 9, 6, 7, 2],//7
  [4, 9, 2, 3, 5, 7, 8, 1, 6]//21
  [2, 7, 6, 9, 5, 1, 4, 3, 8]//33
];
let cost =0;
for (let m = 0; m < magicSquares.length; m++) {
  let currCost = 0;
  for (let i = 0; i < input.length; i++) {
    // console.log('fghnm'+squares[m]);
    currCost += (magicSquares[m][i] - input[i]);
  }
  if (currCost < cost) { //11<0 false
    cost = currCost;//0
  }
}
console.log('cost total is: ' +cost+ '\n');



// let products = ["eggs", "milk", "cheese"];
// let productPrices = [2.89, 3.29, 5.79];
// let productSold = ["eggs", "eggs", "cheese", "milk"];
// let soldPrice = [2.29, 2.89, 5.99, 3.19];
// let wrongPriceCount = 0;
// productSold.forEach((curr, idx) => {
//   // console.log(soldPrice[idx]);
//   if(productPrices[products.indexOf(curr)] !== soldPrice[idx]) {
//     wrongPriceCount++;
//   }
// });
// console.log('\nProducts with wrong prices: '+wrongPriceCount+'\n');

// let arrayMap= [1,2,3,4,5]

// let resultMap = arrayMap.map((currentValue, index) => {
//   arrayMap.pop();
//   if(currentValue > 0){
//      return currentValue
//   }
// })

// console.log('resultMap');
// console.log(resultMap.length);



let array = [[1, [1,2,3, [4,5]]]]

console.log(array.flat(2));

let reduceArray = [1,2,3,4,5];

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

const resultReduced = wishlist.reduce((accumulator, currentValue )=>{

    return accumulator + currentValue.price;

},0);


console.log('resultReduced');
console.log(resultReduced);


let everyArray= [1,3,3];

const resultEvery= everyArray.every((currentValue, index)=>{
  everyArray.push(5);
  console.log(currentValue);
      if(currentValue > 3  ){
         return currentValue;
      }

})

console.log(resultEvery);

console.log('dxfcgvhbjn');


