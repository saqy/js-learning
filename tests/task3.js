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

let arr = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
frequencyCount(arr);