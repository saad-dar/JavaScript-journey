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
time(1); // [undefinec]
