// var pokemon = {
//     firstName: 'Pika',
//     lastName: 'Chu ',
//     getPokeName: function(){
//         var fullName= this.firstName+ ' ' + this.lastName;
//         return fullName;
//     }
// };


//  function hello(){

//     var fullName=  'hello world!';
//     return fullName;
// }

// var pokemonName= function() {
//     console.log(this.fullName + 'Ichoose you');
// };

// var logPokemon = pokemonName.bind({fullName: 'here'});



//   console.log(logPokemon);
//   logPokemon();
// // logPokemon();

// ///////////////////////////////////////////

// var pokemon1 = {
//     firstName: 'Pika',
//     lastName: 'Chu ',
//     getPokeName: function(){
//         var fullName= this.firstName+ ' ' + this.lastName;
//         return fullName;
//     }
// };

// var pokemonName1= function(snack, hobby) {
//     console.log(this.getPokeName()+ 'I choose you');
//     console.log(this.getPokeName()+ ' loves ' +snack+ ' and ' +hobby);

// };

// var logPokemon1 = pokemonName1.bind(pokemon1);


// logPokemon1('sushi', 'algorithm');

// //binds pokemon1 as its this variable
// //creates copy of pokemonName1 function
// //now it can call logpokemon1

// /////////////////////////CALL////////////////////////




// var pokemon2= {
//     firstName:' pika ',
//     lastName: ' chu ',
//     getPokeName: function() {
//         var fullName= this.firstName+ ' ' +this.lastName;
//         return fullName;
//     }
// };

// var pokemonName2= function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' +snack+ ' and ' +hobby);
// };

// pokemonName2.call(pokemon2, 'sushi', 'algorithms' , 'hello');




// // function greeting(name) {
// //     alert('Hello ' + name);
// //   }
  
  
// //   function processUserInput(callback) {
// //     var name = prompt('Please enter your name.');
// //     callback(name);
// //   }
  
// //   processUserInput(greeting);



// function outer() {
//     var b = 10;
//     var c = 100;
//        function inner() {
//              var a = 20; 
//              console.log("a= " + a + " b= " + b);
//              a++;
//              b++;
//              function innerinner() {
//                 var c = 20; 
//                 console.log("c= " + c + " b= " + b);
//                 c++;
//                 b++;
//                 return 0;
//            }
//            return innerinner;
//         }
//        return inner;
//     }
//     var X = outer();
//     var inner=X()  // outer() invoked the first time
//     var Y = outer();  // outer() invoked the second time
//     console.log("tes",inner())
    


//     function add(a,b){
//      console.log(arguments)
//      return a + b;

//     }


//     let addition = add.call(null,2,3,4);  // 
//     console.log(addition);

//     // closure 
//     function closure(){
//         let myVar = 'here';
//         let a=10;
//         function innerClosure(){
//             let innerVar = "i'm "
//             a++;
//             console.log(a);
//             return innerVar +  myVar;
//         }
//         return innerClosure();
//     }
//     let returnVar = closure();
//     console.log('returnVar()');
//     console.log(returnVar);
//     console.log(returnVar);


 
// callbacks
 
function download(process){
 
    setTimeout(()=>{
        console.log('downloading..');

        process();

    }, 3000)

}

function process(execute){
    setTimeout(()=>{
        console.log('prosessing..');
        execute();

    }, 3000);

}

function execute(){
    console.log('execute..');
    //cb();

}

// download(process(execute));

download(function(){
    process(execute)
})

// function printAll(){
//     setTimeout("download", () => {
//         setTimeout("process", () => {
//             setTimeout("execute", () => {},1000)
//       },1000)
//     },1000)
//   }
//   printAll;


// download
// process
// execute

