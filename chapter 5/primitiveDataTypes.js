// there are 7 primitive data types
// no. type     value       constructor
// 1. null      null        none
// 2. undefined undefined   none
// 3. number    1, 3.14     Number()
// 4. bigint    123n, 256n  BigInt()
// 5. string    "text"      String()
// 6. boolean   true, false Boolean()
// 7. symbol                none

let a = undefined;  // undefined
let b = null;       // null
let c = 12;         // number
let d = 4.13;       // number
let e = 100n;       // bigint
let f = "Hello."    // string
let h = `I have ${c} apples` // string
let g = Symbol();   // create symbol
console.log(g);

// boolean

let bool1 = true
let bool2 = false
let bool3 = new Boolean(false)
console.log(bool1, bool2, bool3.valueOf())

// null

let nil1 = null

console.log(typeof nil1);

// undefined
// JavaScript will use undefined when you named a variable but dont assign a value to it
// Your hoisted variables will also be automatically assigned a value of undefined

let unde = undefined
console.log(typeof unde)

// numbers

console.log(typeof -1) // number
console.log(typeof 5) // number
console.log(typeof 7)   // number

// using number function constructor to create number
let number = new Number(7) // object
console.log(typeof number) // object
console.log(typeof number.valueOf())    // number

// bigint

const limit = Number.MAX_SAFE_INTEGER;
console.log(limit); // 9007199254740991

console.log(limit + 1) // 9007199254740992
console.log(limit + 2) // 9007199254740992

const small = 1n; // 1n
const bigint = 9007199254740991n; // 9007199254740991n

console.log(bigint) // 9007199254740991n
const integer = BigInt(9007199254740991); // init as number // 9007199254740991n
console.log(integer) // 9007199254740991n
const big = BigInt("9007199254740991"); // 9007199254740991n
console.log(big) // 9007199254740991n
console.log(big + 4n);   // 9007199254740995n

// typeof

// difference btw numeric types

console.log(typeof 10);  // 'number'
console.log(typeof 10n); // 'bigint'

console.log(10n === BigInt(10)) // true
console.log(10n === 10) // false

//  Math operators only work within their own type

200n / 10n; // 20n
// 200n / 10; // Cannot mix BigInt and other types, use explicit conversions

console.log(-100n); // -100n
// console.log(+100n); // Uncaught TpyeError: Cannot convert a BigInt value to a number

// string
// The typeof operator returns value type in string format
typeof "text";          // string
typeof "JavaScript Grammer";    // string
typeof "username" + 25;     // string

// Using Number constructor creates an object of that type
let string = new String("hi."); // "object"
typeof string;  // "object"
typeof string.valueOf();    // "string"

// define a variable
let apples = 10;
let appleString = `There are ${apples} apples in the backet`;

console.log(appleString);

// Attempt creating an object literal
// let object_literal = {`a`: 1}; // unexpected token error

// attempt creating a well-formed JSON format string
let json1 = '{`a`: 1}'; // malformed json(back-tick quotes)
console.log(json1)
let json2 = '{a : 1}'; // malformed json(no quotes)
console.log(json2)
let json3 = "{'a' : 1}"; // malformed json(single quotes)
console.log(json3)
let json4 = '{"a" : 1}'; // correct json (' + double quotes)
console.log(json4)
let json5 = `{"a" : 1}` // correct json (` + docble quotes)


// string

console.log(typeof "string") // string
console.log(typeof "text");  // string
console.log(typeof "JavaScript Grammer");    // string
console.log(typeof "username" + 25); // string

// string using constructor

let string1 = new String("hi.") // object
console.log(typeof string1); // object
console.log(typeof string.valueOf())    // string