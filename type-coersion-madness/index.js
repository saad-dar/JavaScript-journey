console.log(null + {} + true + [] + [5]);

// example of type coersion

console.log(true + 1); // 2
console.log(true + true); // 2 
console.log(true + false); // 1
console.log("Hello" + " " + "there."); // "Hello there."
console.log("Username" + 15567); 
console.log(1/"string");
console.log(NaN === NaN);
console.log([1] + [2]);
console.log(Infinity)
console.log([] + []);
console.log(Infinity)
console.log([] + {});

//coersion in constructor

console.log(Boolean(true)) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true

// falsy values

console.log("falsy values:")
console.log(Boolean(false))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(-0))

// type coersion in equality operator

console.log('type coersion using equality operators:')
console.log([] == []) // false (weired) (javaScript compare value based on reference and not on value)

let a = []
console.log( a== a) // true because both points to same memory location


// Bizarre type coersion

// [].toString() --> '' --> 0
// ![] --> false --> 0
console.log([] == ![]) // '' == false --> 0 == 0

console.log(true + false) // 1

console.log(NaN == NaN) // false --> NaN is not considered equal to any value, including another NaN

// unary plus and minus forces the value to a number
const s = "text"
console.log(-s)

console.log(Number("text")) // NaN
console.log(Number("1")) // 1

const num1 = 1
console.log(-num1)
console.log(+num1)

// number and string arithmetic

console.log(7 + 5); // 12

// if one is string coersion happens and concatination is perfomed
console.log("1" + 1); // 11

console.log('1' + '1');

// there are three + operators : unary, arithmetic and string

console.log(1 + 'o1'); // 1o1