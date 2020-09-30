console.log("<=== Arrow functions used as method ===> ")

let obj = {
    i: 10,
    b: () => console.log("Arrow func  ", this.i, this),
    c: function () {
        console.log("Traditional func  ", this.i, this);
    },

}

obj.b();
obj.c();


// this ===
function f1() {
    return this;
}

console.log(f1());

let f2 = () => {
    return this;
}
console.log(f2());

const test = {
    prop: 42,
    func: function () {
        console.log("test", this.arrFunc())
        return this.prop;
    },
    arrFunc: () => {
        return this.prop;
    }
};


console.log("Traditional function: ", test.func());
console.log("Arrow functions: ", test.arrFunc());