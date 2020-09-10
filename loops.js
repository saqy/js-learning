//for
for(let i = 0; i < 10; i++){
  if(i === 2){
    // console.log('2 is my favorite number');
    continue;
  }

  if(i === 5){
    // console.log('Stop the loop');
    break;
  }

  // console.log('Number '+ i);
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