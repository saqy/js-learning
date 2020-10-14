// Arguments Objects



function setName(newFirstName, newLastName) {
    let result = '';
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + " ";
    }
    return result;
}

console.log(setName("Usman", "Ali"));




function getName(firstName, lastName) {
    let res = arguments[0] = "Kaleem " + arguments[1];
    return res;
}

console.log(getName("Sadaqat ", "Ali"));