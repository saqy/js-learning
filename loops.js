//nested for loops examples
for(let i = 0; i < 10; i++){
  // console.log(i);
  for(let j=0; j< 5; j++) {
    // console.log(j);
    var result = `i: ` +i+ `+` + ` j: `+ j+ ` = `+ i*j;
  }
}
console.log(result);


for (let counter=1; counter< 4; counter++){
  console.log(counter+": count from 1 to 8");
  for (let number=1; number<9; number++) {
    console.log(number);
  }
}


for (let i=1; i<=100; i+=10){
  for (let j=i; j<i+10; j++){
    console.log(j);
  }
  // console.log(i);
}

let x1, y1, starss='';
for(x1=1; x1<=10; x1++){
  for(y1=1; y1<x1; y1++){
    starss+=("*");
  }
  console.log(starss);
  starss='';
}

let x,y,star='';
for(x=10; x>0; x--){
  for(y=1; y<x; y++){
    star+=("*");
  }
  console.log(star);
  star='';
}

let count = 5;
let output = "";
for (let p = 1; p <= count; p++) {
  output = "";
  for (let q = 1; q <= count - p; q++) {
  output += "w";
  }
  for (let s = 1; s <= p; s++) {
  output += "* ";
  }
  console.log(output);
}

let floor=5;
let outputs= "";
for (let i=1; i<=floor; i++){
  outputs="";
  for(let k= 1; k<=floor-i; k++){
    outputs+=" ";
  }
  for (let j=1; j<=i; j++){
    outputs+='* ';
  }
  console.log(outputs);
}

let ooutput='';
for (let i=1; i<=7; i++){
  for (let j=1; j<=6; j++){
    ooutput+=("*")
  }
  console.log(ooutput);
}

var ourArray= [];
for(var i=10; i>0; i-=2){
  ourArray.push(i);
}
console.log(ourArray);

var ourArray2= [];
for(var i=0; i<10; i+=2){
  ourArray2.push(i);
}
console.log(ourArray2);


var oddArray= [];
for(var i=11; i>1; i-=2){
  oddArray.push(i);
}
console.log(oddArray);

var oddArray2= [];
for(var i=1; i<11; i+=2){
  oddArray2.push(i);
}
console.log(oddArray2);


var rows = 5;
let output="";
for(var i=1; i<=rows; i++){
  output="";
  // console.log('');
  for(var k=1; k<=( rows-i ); k++)
  {
    output+=" ";
    // console.log(" ");
  }
  for(var j=1; j<=i; j++)
  {
    output+='* ';
  // console.log("* ");
  }
console.log(output);
}

var numbers= [[1,2], [3,4], [5,6]];
var result=[];
for (var i=0; i< numbers.length; i++){
   console.log(numbers[i]+ `i`);//[12][34]

  for (var j=0; j<numbers[i].length; j++){ //[12] //[34]
    var array= result.unshift(numbers[i]);
    console.log(numbers[j]+`j`)
    console.log(result);
    // console.log(numbers[j]+ `j`);
    // console.log(numbers[i][j]); //1 //2
    // console.log(numbers[i]*numbers[j]);
  }
}

//while loop
let j = 0;

while(j < 10){
  // console.log('Number ' + j);
  j++;
}

//do while
let k = 100;
do {
  // console.log('Number ' + k);
  k++;
}
while(k < 10);


//break statements
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1; //1
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z); //1
    z += 1; //2
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}


//for....of
//loops through the values of an iteratable objects like arrays and strings
const forOf= ['tulip', 'rose', 'jasmine', 'orchid', 'freesia'];
for (const element of forOf) {
    console.log(element);
}

const sharkProperties= ['teeth', 'color', 'weight'];
for (const element of sharkProperties) {
  console.log(element);
}


//for...in
//loops through the properties of an object
const forIn= ['tulip', 'rose', 'jasmine', 'orchid', 'freesia'];
for (const element in forIn) {
    console.log(element);
}

const shark= {
  species: "great white",
  color: "white",
  numberOfTeeth: Infinity
}
for (const element in shark) {
  console.log(element);
  console.log(shark[element]);
}

const user = {
    firstName: 'John', 
    lastName: 'Doe',
    age: 40
}
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

//re-pushed just to rename commit
