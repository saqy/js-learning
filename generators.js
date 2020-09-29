// function *generatorFunction() {
//     console.log('this will be executed first');
//     yield 'hello';

//     console.log('after pause this will print');
//     yield 'world';
// }

// const generatorObject = generatorFunction();

// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);

//pending one more task
//what if generator try to execute from start?

function* customizedGenerator(n) {
    for(let i=n; ; i+=n) {
        console.log('value of i '+i);
        yield i;
    }
}

// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object

for (let custom of customizedGenerator(5) ) {
    do{
        console.log('generate from start '+custom);
        break;
    } while(i=3)

    // if(i=10) {
    //     break;
    //     console.log('generate from start');
    // }
}
const generatorObject = customizedGenerator();

generatorObject.next(1);

