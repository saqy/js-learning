console.log("<====== IFFE ======> \n");

var getCode = (function () {
    let apiCode = 'djhudw8734&&^&';
    return function () {
        return apiCode;
    }
})();
console.log(getCode());



var getName = (function (name) {
    return function (name) {
        return name;
    }
})();
console.log(getName("Sadaqat"));