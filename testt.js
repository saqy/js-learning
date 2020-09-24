///IIF
///generator function
//function.caller
//bind
//in strict mode this is undefined


console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false


// var x = 10;

// function createFunction1() {
//     var x = 20;
//     return new Function('return x;'); // this |x| refers global |x|
// }

// function createFunction2() {
//     var x = 20;
//     function f() {
//         return x; // this |x| refers local |x| above
//     }
//     return f;
// }

// var f1 = createFunction1();
// console.log(f1());          // 10
// var f2 = createFunction2();
// console.log(f2());          // 20



console.log(eval('') );

console.log('here111');

// const value1 = myFunc();


function myFunc() {
    console.log('inside my func');
    console.log(myFunc.caller.name);

    if (myFunc.caller == null) {
      return 'The function was called from the top!';
    } else {
      return 'This function\'s caller was ' + myFunc.caller;
    }
  }

console.log('here');

// const value = myFunc();

function myFunc1(){
   console.log(myFunc());
}

myFunc1()


let array = [1,2,3,4,4]
let output = [1,2,3,5,6,7,8,4,4]
splice(2,2,7,8,4,4)
  
