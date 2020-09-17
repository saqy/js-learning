
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