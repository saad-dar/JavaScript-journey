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