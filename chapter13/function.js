function update (a, b, c, d = "hi") {
    console.log(arguments);
    console.log(this);
    return true;
}

update(7, [], {}, "hi")

// setTimeout(function() {
//     console.log("print something in 1 secnod.");
//     console.log(arguments)
// }, 1000);
// console.log("after set time out function.")

function Fun(text, number, array, object, func, misc) {

    // output the argument values
    console.log(text);
    console.log(number);
    console.log(array);
    console.log(object);
    console.log(misc);

    console.log(func());
}

function Volleyball() { return "Volleyball" }

Fun("Text", 125, [1,2,3], {count: 1}, Volleyball, Volleyball());

function Fun(func) {
    // Call the funtion but only if it is a function

    if(typeof func == "function")
        console.log(func()); // Call the function by its parameter name
}

var array = [];
var f = function() {}

Fun(array); // TypeError: func is not a function

// this keyword in node

function Orange() {
    console.log("this", this);
}

// Call function
Orange();

// Use function to instantiate an object
let orange = new Orange(); // orange