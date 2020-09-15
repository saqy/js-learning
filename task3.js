console.log("//Question 6");

function area(n){
    return (n*n)+((n-1)*(n-1));
}
console.log(area(4));
//-------------------------------------//

console.log("//Question 8");
function palindrome(str){  
    let a=str.split('');
    let output=[];
    for(let i=a.length-1;i>=0;i--){
        output.push(a[i]);
    } 
    return output.join('')===str ? true : false;
}

console.log(palindrome("aba"))
//-------------------------------------//

console.log("//Question 8");
function centuryFromYear(year){
   let ab=  year % 100 == 0? year/100 :((year/100) + 1);
   return Math.floor(ab);
}
console.log(" Centuary : ",centuryFromYear(1999));

//-------------------------------------//

console.log("//Question 9");
var fruits = ['banana', 'cherry', 'cactus','orange', 'apple','cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
var count = fruits.reduce(function(counts, number) {
   if (counts[number] === undefined) {
     counts[number] = 1;
   } else {
     counts[number]+=1;
   }
   return counts;
    console.log(number);
 }, []);
console.log(count)
//-------------------------------------//

