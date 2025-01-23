// statements
let a = 1; // undefined

// a statement that produces a single value other than undefined can be referred to as an expression
console.log(a); 

// example of statements

;   // undefined
1;  // 1
"text";  // text
x = []; // [] -> [] in browser
{};  // undefined in browser
let b = 1;   // undefined
let c = []  // undefined
let d = {}; // undefined
let e = new String("text"); // undefined
let f = new Number(123);    // undefined
new String("text")  // text
new Number(123) // 123
let g = function g() {return 1} // undefined
g();     // 1
let o = (a,b) => a + b; // undefined
o(1,2) // 3
function name() {}  // undefined