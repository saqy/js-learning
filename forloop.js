
//for-loop syntax;
for( let a=1;a<=5;a++){
    console.log(a)
}

//nested-for-loop
// 1
// 12
// 123
// 1234
// 12345
for(let a=1;a<=5;a++){
    for(let b=1;b<=a;b++){
        console.table(a);
    }
}

//--------------//

//nested-for-loop
// 1
// 22
// 333
// 4444
// 55555

for(let a=1;a<=5;a++){
    for(let b=1;b<=a;b++){
        console.log(b);
    }
}

//for-loop over array
let ar=[1,2,3,4,5,6];

for(let i=0;i<=ar.length;i++){
    console.log(ar[i]);
}


//table
for(let u=1;u<=10;u++){
    console.log(2," * ",u,"=",2*u);
}
//-------------------