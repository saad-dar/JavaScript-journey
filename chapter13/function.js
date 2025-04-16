function update (a, b, c, d = "hi") {
    console.log(arguments);
    console.log(this);
    return true;
}

update(7, [], {}, "hi")

setTimeout(function() {
    console.log("print something in 1 secnod.");
    console.log(arguments)
}, 1000);
// console.log("after set time out function.")