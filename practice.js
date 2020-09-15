//  Below we will define an n-interesting polygon. 
//Your task is to find the area of a polygon for a given n.
//  Example n= 1, output = 1; For n = 2, the output should be output= 5; For n = 3, the output should be output= 13. For n = 4, the output should be output = 25.

function shapeArea(n){
  
  return n ** 2 + (n-1) ** 2
}
var res= shapeArea(3);
console.log(res);

//calculate palindrome
//For inputString = "aabaa",the output should be = true; 
//For inputString = "abac",the output should be = false; 
//For inputString = "a",the output should be = true.

function pal(str) {
  reverse = str.split('').reverse().join('');
  for (let i = 0; i < str.length; i++) {
    if (reverse === str) {
        return true;
    }
  }
  return false;
 }
 let palindrome= pal("aacbcaa");
 console.log(palindrome);


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
 let result= palindromefunc("aacbctaa");
 console.log(result);


// Given a year, return the century it is in. 
//The first century spans from the year 1 up to and including the year 100, 
//the second - from the year 101 up to and including the year 200, etc.
// Example
// For year = 1905, the output should be = 20; For year = 1700, the output should be = 17.

function getCentury(year){
  if (year % 100 === 0){
    console.log (year / 100);
  } else {
    let remainder = year % 100;
    console.log( ((year + 100) - remainder) / 100);
  }
}
getCentury(2021);


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

