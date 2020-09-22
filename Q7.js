function checkPalindrome(value){
    if(typeof value === "string"){
        const changeCase = value.toLowerCase();
        const palindrome = changeCase.split('');
        let start,end,i;
        let length = value.length - 1;
        for(i=0; i<= length; i++){
            start = palindrome[i];
            end = palindrome[length];
            if(start !== end){
                console.log("false");
                return;
            }
            length--;
        } 
        console.log("true");
    }
    else 
    console.log("Enter new String");
}

checkPalindrome("aabac");
checkPalindrome("abca");
checkPalindrome("a");
checkPalindrome("level");
checkPalindrome("aaaccbbbccaaa");
checkPalindrome(2002);