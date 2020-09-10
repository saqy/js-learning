//use of fill in arrays
const numbers = [22,45,78,97];
// console.log(flowers.fill(1));
// console.log(flowers.fill(1,5));
console.log(numbers.fill(0,2,4));


//use of filter in arrays
const flowers= ['tulip', 'rose', 'jasmine', 'orchid'];
var result= flowers.filter (word => word.length<5);
console.log(result);
// const string4= "tulipis";

// console.log("string4.lastIndexOf('i')");
// console.log(string4.lastIndexOf('i'));


//use of find in arrays
const found= flowers.find(word => word.length>5);
console.log(found)


//use of findindex in arrays
var result= flowers.findIndex(element => element.length<5);
console.log(result);


//use of foreach in arrays
const cars = ['Honda', 'Toyota', 'Kia', 'Mini'];
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});


//use of includes in arrays whether value included?
console.log(flowers.includes('white rose'));


//use of indexOf in arrays
console.log(flowers.indexOf('rose'));
console.log(flowers.indexOf('lily'));


//use of lastIndexOf/////// count index number in reverse order
console.log(flowers.lastIndexOf('rose'));


//use of push in arrays
console.log(flowers.push('carnation'));


//use of pop in arrays
console.log(flowers.pop());


//use of shift removes 1st
console.log(flowers.shift());


//use of unshift in arrays add to place 1
console.log(flowers.unshift('tulip'));


//use of join
console.log(flowers.join('_'));


//use of map in arrays
const users  = [
    {id: 1, name:'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Steve'}
    ];  
    const names = users.map(function(user){
      return user.name;
    });
    
    console.log(names)


//use of every in arrays
const array = [11, 444, 9, 16];
const isbelowThreshold = (currentValue) => currentValue <100;
console.log(array.every(isbelowThreshold));


//use of reduce
const reducer=(accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(reducer));


//use of reverse
console.log('reversed:', array.reverse());


//use of some
const isaboveThreshold = (currentValue) => currentValue <100;
console.log(array.some(isaboveThreshold));


//use of splice in arrays
//add on index 5 donot remove any
flowers.splice(5, 0, 'Freesia');
//add on index 5 remove all
// flowers.splice(0, 5, 'Freesia')
console.log(flowers);