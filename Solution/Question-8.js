 /*
 Question 8
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
Example
For year = 1905, the output should be = 20; For year = 1700, the output should be = 17.
*/


function checkCentury(year){
    if(year % 100 >= 0.1){
     return Math.trunc(year /100)  + 1;
    }
    else{
    return  Math.trunc(year /100);
    }
    }
    
    console.log(checkCentury(1900))
    