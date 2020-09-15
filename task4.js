//-------------------------------------//

console.log("//Question 9");
var fruits = ['banana', 'cherry', 'cactus','orange', 'apple','cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
var count = fruits.reduce(function(counts, number) {
    counts[number] === undefined?counts[number] = 1: counts[number]+=1; 
    return counts; 
}, 
[]);
console.log(count)
//-------------------------------------//

//question 10

function diagonalDifference(arr) {
    var n = arr.length; 
    var primary = 0;
    var secondary = 0;   
    
  for(var i=0; i<n; i++){
  console.log('i =',i)
     for(var j=0; j<n; j++){
     console.log('j =',j)
       // finding the sum of primary diagonal
         if(i === j) {
           primary += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            secondary += arr[i][j];
         }
      }
  }
  return Math.abs(primary - secondary);
}

console.log("The Diagnol Difference : ",diagonalDifference([
[11,2,4],[4,5,6],[10,8,-12]
]))


//Q no 11
let arr  = [-4,3,-9,0,4,1]


function ratio(ar){
let len = arr.length;

let a1 = (ar.filter(a=>a>0).length/len).toFixed(6);

let b1 = (ar.filter(a=>a<0).length/len).toFixed(6);

let c1 = (ar.filter(a=>a==0).length/len).toFixed(6);

return `Proportion of postive of values ${a1}
Proportion of negative of values ${b1}
Proportion of zeroes ${c1}`

}
console.log(ratio(arr))