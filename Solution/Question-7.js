 /*
 Question 7
Given the string, check if it is a palindrome.
Example
For inputString = "aabaa", the output should be = true; For inputString = "abac", the output should be = false; For inputString = "a", the output should be = true.

*/

function reverseString(str){
    let reverse = ""
    for(let i = str.length -1 ; i>=0 ; i-- ){
    reverse += str[i]
    }
    return reverse
    }
    
    function checkPalindrome(str) {
    let temp = reverseString(str);
    if(temp === str){
    console.log("The Entered String is a palindrome")
    }
    else{
    console.log("The Entered String is NOT a palindrome")
    }
    }
    
    checkPalindrome("aabaa")