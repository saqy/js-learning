// CallBacks
// A callback function is a function (It can be any function Anonymous Function, Arrow Function) 
// passed into another function as an argument, which is then invoked inside the outer function to  
// complete some kind of routine or an action.

// Synchronous - It waits for each operation to complete,
// after that it executes the next operation.

// Synchronous - It never waits for each operation to complete,
// rather it executes all operations in the first GO only.

console.log("<=== Callbacks ===>");


const students = [
    { name: "Harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Php" }
]


function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
}


function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `${student.name}` + " ";
            // str += `<li>${student.name}</li>`
        });
        console.log("Str =>", str);
        // document.getElementById("students").innerHTML = str;
    }, 1000);
}

let newStudent = { name: "Sunny", subject: "Python" }

enrollStudent(newStudent, getStudents);


// const message = function () {
//     console.log("This message is shown after 3 seconds");
// }

// setTimeout(message, 5000);



// Asynchronous - Callback 
// function download(callback) {
//     setTimeout(() => {
//         console.log("Downloading...");
//         document.getElementById("download").innerHTML = "Downloading...";
//         callback();
//     }, 3000);
// }

// function process(cb) {
//     setTimeout(() => {
//         console.log("Processing...");
//         document.getElementById("process").innerHTML = "Processing...";
//         cb();
//     }, 3000);
// }

// function execute() {
//     console.log("Execute");
//     document.getElementById("execute").innerHTML = "Execute";
// }

// download(process(execute));

// Synchronous - Callback 
function show(a) {
    console.log("I am a Show Function " + a);
}

function geeky(callback) {
    let a = 101;
    callback(a);
}

geeky(show);
console.log("\n");