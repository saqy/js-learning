console.log("hello world");

let str = '1234';



 const finalResult = Array.from(str, (currentValue, index)=>{
    return currentValue * currentValue;
 })
//  console.log(finalResult);

 let array1 = [1,2,3];
 let array2 = [4,5,6];

 let array3 = array1.concat(array2);

 array1[2]='X'

//  console.log(array3);

 const num1 = [5,1,2,3];

 const result = num1.find((currentValue, index) => {

       console.log(currentValue);
       return currentValue > 2;

 })

 console.log('result');
 console.log(result);


//Q#13
      // let input = [5, 3, 1, 1, 5, 8, 6, 4, 2];
      // let squares = [
      //   [8, 1, 6, 3, 5, 7, 4, 9, 2],//17
      //   [4, 3, 8, 9, 5, 1, 2, 7, 6],//31
      //   [2, 9, 4, 7, 5, 3, 6, 1, 8],//29
      //   [6, 7, 2, 1, 5, 9, 8, 3, 4],//13
      //   [6, 1, 8, 7, 5, 3, 2, 9, 4],//29
      //   [8, 3, 4, 1, 5, 9, 6, 7, 2],//7
      //   [4, 9, 2, 3, 5, 7, 8, 1, 6]//21
      //   [2, 7, 6, 9, 5, 1, 4, 3, 8]//33
      // ];
      // let cost = Math.min();
      // for (let m = 0; m < squares.length; m++) {
      //   let currCost = 0;
      //   for (i = 0; i < 9; i++) {
      //     // console.log('fghnm'+squares[m]);
      //     currCost += Math.abs(squares[m][i] - input[i]);
      //   }
      //   if (currCost < cost) {
      //     cost = currCost;
      //   }
      // }
      // console.log('cost total is: ' +cost);


      function foo(i) {
            if (i < 0) //3<0 //2<0 //1<0 //0<0 //-1<0
              return; //-1
            console.log('begin: ' + i);//3 //2 //1 //0
            foo(i - 1);                //2 //1 //0 //-1
            console.log('end: ' + i); //-1
          }
          foo(3);                     //3
