/**
console.log(apple); // undefined

{
    var apple = 1; // defination is hoisted but not value
}

// function name hoisting

fun1()

function fun1() {
    console.log("Hello from fun1() function")
}

function fun2() {
    console.log("Hello from fun2() function")
}

// the code above is the same as:

var fun3 = function() {
    console.log("Hello from fun3() function")
}

*/
// defining variable inside function scope

function fun() {
    var apple = 1;
}

// console.log(apple); // ReferenceError: apple is not defined

// closures

var plus = (function () {
    var conuter = 0;
    return function () {
        conuter += 1;
        return conuter;
    }
})();

console.log(plus()); // 1
console.log(plus()); // 2
console.log(plus()); // 3