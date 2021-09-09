 /*
 Question 6
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
Example n= 1, output = 1; For n = 2, the output should be output= 5; For n = 3, the output should be output= 13. For n = 4, the output should be output = 25.

*/

function shapeArea(n){
    if (n>=10**4 || n<1){
        return False
}
console.log (n**2+(n-1)**2)
    }

shapeArea(3)
