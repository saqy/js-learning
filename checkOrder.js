const items = ["red", "blue", "red", "green", "blue"];
const order = ["blue", "red", "black"];

function countFrequency(s){
  return s.reduce((accum, currentValue)=>{
      if (accum[currentValue] ){
          accum[currentValue].push(currentValue);
      }
      else {
          accum[currentValue] = [currentValue];
      }
      return accum;
   },{})
}

const frequencies= countFrequency(items);
let result=[]; 
 order.forEach((currentValue)=>{
 frequencies[currentValue] && result.push(...frequencies[currentValue]);
});

console.log(result);

// Time Complexity for this one would be O(n); 

// devision for time complexity 

// initial reduce's complexity will be O(n)

// map complexity wooud be O(n)

// So, Overall time complexity is O(n) + O(n) = 0(n);

