function palindrome(value){
    if(typeof value === "string"){
         const downcase = value.toLowerCase();
         const str = downcase.split('');
         let start, end, i;
         let len = value.length - 1;
 
         for(i = 0; i <= len; i++){
             start = str[i];
             end = str[len]
             if(start !== end){
                 console.log('false')
                 return false;
             }
             len--;
         }
         console.log('true')
         return true;
 
    } else {
        return false;
    }
 
 }
 
 const str1 = "aabaa";
 const str2 = "abac";
 const str3 = "a";
 const str4 = "Anna";
 const str5 = "Repaper";
 
 palindrome(str1);
 palindrome(str2);
 palindrome(str3);
 palindrome(str4);
 palindrome(str5);