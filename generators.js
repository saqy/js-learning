function *generatorFunction() {
    console.log('this will be executed first');
    yield 'hello';

    console.log('after pause this will print');
    yield 'world';
}

const generatorObject = generatorFunction();

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);


