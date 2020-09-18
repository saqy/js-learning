console.log('filter examples')

function fiveCharactersOrFewerOnly(arr) {
    // your code here
 return   arr.filter(function(n){
        return n.length <= 5
    })
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  

  //Example 2

  function peopleWhoBelongToTheIlluminati(arr){
    
    return   arr.filter(function(n){
        return n.member === true
    })
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]