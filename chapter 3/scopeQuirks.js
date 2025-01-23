// quirk 1
let a = "global a"
let b = "global b"

function myFun() {
    console.log("b: global b = " + b);
    console.log("a: global a = " + a); // Cannot access 'a' before initialization
    var a = 1; // local variable // doesn't hoist
}

myFun()

// quirk 2
// this code works in browser

console.log(this === window) // true (in the browser)

var c = "c";    // latches on to window ("this" in global scope)
let d = "d";    // exist seperatly form "this"

console.log(c)  // "c"
console.log(this.c) // "c"
console.log(global.c) // "c"

console.log(d)  // "d"
console.log(this.d) // undefined
console.log(global.d)