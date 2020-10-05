// Question 6
// Below we will define an n-interesting polygon. Your task is to 
// find the area of a polygon for a given n.

// Example n= 1, output = 1; For n = 2, the output should be output= 5; For n = 3, 
// the output should be output= 13. For n = 4, the output should be output = 25.

function polygonFunc(num) {
    let d = [1];
    let c = 4;
    for (let i = 1; i < num; i++) {
        b = c * (num - i);
        d.push(b);
    }
    let result = d.reduce((acc, curr) => acc + curr);
    return result;
}

console.log("num = 1, Polygon area =", polygonFunc(1));
console.log("num = 2, Polygon area =", polygonFunc(2));
console.log("num = 3, Polygon area =", polygonFunc(3));
console.log("num = 4, Polygon area =", polygonFunc(4));
console.log("\n")

// Question 7
// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be = true; 
// For inputString = "abac", the output should be = false; 
// For inputString = "a", the output should be = true.

function palindromeFunc(str) {
    let initialString = str.split(""); //split method convert str to arr
    let reverseArr = initialString.reverse(""); //reverse arr
    let joinArr = reverseArr.join(""); //join arr

    if (str == joinArr) {
        return true;
    } else {
        return false;
    }
}

console.log("Palindrome Answer 7 = ", palindromeFunc("aabaa"));
console.log("\n");


// Question 8
// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, 
// the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be = 20; 
// For year = 1700, the output should be = 17.


function centuryYear(y) {
    if (y <= 0) {
        return "0 and negative is not allow for a year";
    } else if (y <= 100) {
        return "1st century";
    } else if (y % 100 === 0) {
        return y / 100;
    } else {
        return Math.floor(y / 100) + 1;
    }
}

console.log("0 =>", centuryYear(0));
console.log("20 =>", centuryYear(20));
console.log("1905 =>", centuryYear(1900));
console.log("1700 =>", centuryYear(1700));
console.log("\n");



// Question 9
// Count frequencies of each entry in an array For example 
// const fruitBasket = 
// [ 'banana', 'cherry', 'orange', 'apple',     
//    'cherry', 'orange', 'apple', 'banana', 
//    'cherry', 'orange', 'fig' 
// ];
//It should return an object like this 
//{ banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }



function frequencyCount(arr) {
    const obj = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = count + 1;
        }
    }
    console.log("Frequencies => ", obj)
}

let arr = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig',];
frequencyCount(arr);
console.log("\n");


// Question 10
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
// Function description
// Complete the function in the editor below.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers

// Return
// int: the absolute diagonal difference

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15


function matrixFunc(arr2) {
    let LTR = [];
    let RTL = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                LTR.push(arr2[i][j]);
            }
            if (i + j === arr2.length - 1) {
                RTL.push(arr2[i][j]);
            }
        }
    }

    const reduceLTR = (acc, curr) => acc + curr;
    let ans1 = LTR.reduce(reduceLTR);

    const reduceRTL = (acc, curr) => acc + curr;
    let ans2 = RTL.reduce(reduceRTL);

    let diff = Math.abs(ans1 - ans2);
    console.log("Difference =>", diff);
}


let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]

matrixFunc(arr2);
console.log("\n");

// Question 11
// Given an array of integers, calculate the ratios of its elements that are positive, 
// negative, and zero. Print the decimal value of 
// each fraction on a new line with places after the decimal.


function numRatio(inputArr) {
    let positive = 0;
    let zero = 0;
    let negative = 0;
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] > 0) {
            positive++;
        } else if (inputArr[i] === 0) {
            zero++;
        } else {
            negative++;
        }
    }
    console.log("Positive =>", (positive / inputArr.length).toFixed(6));
    console.log("Negative =>", (negative / inputArr.length).toFixed(6));
    console.log("Zero =>", (zero / inputArr.length).toFixed(6));
}

let inputArr = [-4, 3, -9, 0, 4, 1,]

numRatio(inputArr);
console.log("\n");


// Question 12
// Given the list of items and their actual prices and sold prices. 
// Find the number of items in sold products which has wrong prices

// Example Input

// Products = ['eggs', 'milk', 'cheese'];
// productPrices = [2.89, 3.29, 5.79];
// productSold = ['eggs', 'eggs', 'cheese', 'milk']
// soldPrice = [2.89, 2.99, 5.97, 3.29];

// Example Output Here
// eggs has 2.99 price which is wrong milk has 5.97 
// price which is wrong So we will return 2 in this example.





function createObj(arr1, arr2) {
    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        let obj = {};
        obj.name = arr1[i];
        obj.price = arr2[i];
        arr.push(obj);
    }
    return arr;
}


const products = ['eggs', 'milk', 'cheese'];
const productPrices = [2.89, 3.29, 5.79];


const productSold = ['eggs', 'eggs', 'cheese', 'milk']
const soldPrice = [2.89, 2.99, 5.97, 3.29];

const arrObj1 = createObj(products, productPrices);
const arrObj2 = createObj(productSold, soldPrice);

function getCount(a1, a2) {
    let len1 = a1.length;
    let len2 = a2.length;
    let count = 0;
    for (let m = 0; m < len1; m++) {
        for (let n = 0; n < len2; n++) {
            if (a1[m].name === a2[n].name && a1[m].price !== a2[n].price) {
                count++;
            }
        }
    }
    return count;
}

console.log(getCount(arrObj1, arrObj2));