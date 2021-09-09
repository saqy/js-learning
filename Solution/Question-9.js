 /*
 Question 9
Count frequencies of each entry in an array For example const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
It should return an object like this { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
*/


function frquencyCounter (array){
    arr = [... array]
    check =[]
      for(let i = 0 ; i<arr.length ;i++){
      if(check.includes(arr[i]) === false){
          let count = 0;
           for (let j = 0 ; j< arr.length ; j++){
            if (arr[i]=== arr[j]){
            ++count
            }
           }
           console.log("The Element " + arr[i] +" appears " + count+ " Times")
              check.push(arr[i])
      }
      }
    }
    
    fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
    frquencyCounter(fruitBasket)
    