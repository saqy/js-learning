
//Example 1
let Array = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}]

let reformattedArray = Array.map(obj => {
let rObj = {}
rObj[obj.key] = obj.value
return rObj
})

//console.log(reformattedArray)

//Example 2
 let arr = [1,2,3,4,5];

 let emptyArr = []
 
 let newArray = arr.map(function(item){
  return emptyArr.push(item)  
 })

 console.log('main array',arr)
 console.log('New Array',newArray)


 //Example 3
 let arrr = [1,2,3,4,5];

 let sum = arrr.map(function(item,index){
 return item*item
})
console.log(sum)




//Example 4

function stringItUp(arr){
  return arr.map(function(item){
      return item.toString()
  })
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

  //Example 5 

  function namesOnly(arr){
    return arr.map(function(n){
        return n.name
    })
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]



  //Example 6 

  function makeStrings(arr){
    // your code here
    return arr.map(function(n){
if(n.age > 50){
    return `${n.name} can go to the Matrix`
}else{
    return `${n.name} is under age`
}
    })
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]


  //Example 7

  function readyToPutInTheDOM(arr){
return arr.map(function(n){
    return [` <h1>${n.name}</h1><h2>${n.age}</h2>`]
})
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]