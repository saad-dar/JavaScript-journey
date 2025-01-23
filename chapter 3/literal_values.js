// add two numeric numbers to produce 7

5 + 2 // 7

// add two strings to produce a string

"Hello " + "there!" // "Hello there!"

// adding string to a number to produce a coerced value

"username" + 123455  // username123455

// literal values of just about anything

1;                      //numeric literal
"some text.";           //string literal
[];                     //array literal
{};                     //object literal
true;                   //boolean literal
function name() {}      //function is a value (function expression)

// each literal value has a constructor function associalted with it

// value // typeof // constructor
typeof 1; // 'number' // Number()
typeof 3.14 // 'number' // Number()
typeof "some text." // 'string' // String()
typeof [] // 'object' // Array()
typeof {} // 'object' // Object()
typeof true // 'boolean' // Boolean()
typeof function f() {} // 'function' // Function()

// how to check if a given value is object or array before Array.isArray() function was introduced

const arr = [1, 2, 3] // an array
const obj = {key : 'value'} // an object
const str = "Hello" // string

// classic workaround to check if something is an array

function isArray(value) {
    if(typeof value === "object" && value !== null && "length" in value) {
        return true
    } else {
        return false
    }
}

console.log(isArray(arr)) // true
console.log(isArray(obj)) // false
console.log(isArray(str)) // string


// Number(1) vs new Number(1)

// literal value
console.log(1 + 2)
// using Number function
console.log(Number(1) + Number(2))
// Using number object constructor
console.log(new Number(1) + new Number(2))
// using combination
console.log(1 + Number(2) + new Number(3))