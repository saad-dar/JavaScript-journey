// arrow function systax
() => {}

// create an arrow function and assign it to a variable

let fun_1 = () => {};

// call arrow function by its name
fun_1();

// return a value from an arrow function

let fun_2 = () => { return 1; }

console.log(fun_2()); // 1

let fun_3 = () => 1

console.log(fun_3());

let expression = e => e;

console.log(expression(1)) // 1

// arguments

// arrow function syntax with arguments

let x  = (arg1, arg2) => { console.log(arg1, arg2); };

x(1, 3); // 1 3

let boomerang = a => "returns";

let karma = a => { return "returns"; }

let prayer = a => { return Math.random() >= 0.5 }
let time = a => { "won't return"; }

boomerang(1); // "returns"
karma(1); // "returns"
time(1); // [undefined]

// Be careful when using with high-order functions

let a = [1];
console.log(a.map(boomerang)); // "returns"
console.log(a.map(karma)); // "returns"
console.log(a.map(time)); // [undefined]

console.log(x);
console.log(prayer);
console.log(time);

// sometimes true.
console.log(prayer("Make me understand JavaScript."));

// arrow function bind this to global in global scope just like classic function
function classic_one() {
    console.log("classic function one.")
    console.log("classic_one", this)
}

function classic_two() {
    console.log("classic function two.")
    console.log("classic_one", this)
}

let arrow = () => {
    console.log("arrow function.");
    console.log("arrow", this);
}

classic_one();
classic_two();
arrow();

let aarrow = () => {
    console.log(arguments); // arguments is not defined
}

function f() {
    console.log(arguments); // [object Arguments]
}

arrow();
f();

// The arrow function inherits the lexical scope based on where it was used, not
// where it was defined. Here it so happens that the arrow function was both defined
// and called in global scope context (Window object.)